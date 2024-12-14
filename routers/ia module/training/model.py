import numpy as np
import pandas as pd
import joblib
import warnings
from typing import List, Optional

# Machine Learning Libraries
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import StandardScaler

# Deep Learning
import tensorflow as tf
from tensorflow.keras.layers import Input, Dense, Dropout, BatchNormalization
from tensorflow.keras.models import Model
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import EarlyStopping

class SimplifiedStartupRecommendationSystem:
    def __init__(self, dataset_path: str):
        """
        Simplified Startup Recommendation System
        
        Args:
            dataset_path (str): Path to the startup dataset
        """
        warnings.filterwarnings('ignore')
        
        # Load and preprocess dataset
        self.df_startups = self._load_and_preprocess_data(dataset_path)
        
        # Feature Engineering
        self._feature_extraction()
    
    def _load_and_preprocess_data(self, dataset_path: str) -> pd.DataFrame:
        """
        Load and preprocess the startup dataset
        
        Args:
            dataset_path (str): Path to the CSV file
        
        Returns:
            pd.DataFrame: Preprocessed dataframe
        """
        # Load dataset
        df = pd.read_csv(dataset_path)
        
        # Essential preprocessing
        df.fillna({
            'headline': 'No headline available',
            'about': 'No description available',
            'company_name': 'Unknown Startup'
        }, inplace=True)
        
        # Combine text features
        df['full_text'] = df['headline'] + ' ' + df['about']
        
        return df
    
    def _feature_extraction(self):
        """
        Extract and prepare features for recommendation
        """
        # Advanced Text Vectorization
        self.vectorizer = TfidfVectorizer(
            stop_words='english', 
            max_features=5000,
            ngram_range=(1, 3)
        )
        
        # Fit vectorizer on full text
        self.tfidf_matrix = self.vectorizer.fit_transform(self.df_startups['full_text'])
        
        # Dimensionality Reduction
        self.svd = TruncatedSVD(n_components=100, random_state=42)
        self.reduced_features = self.svd.fit_transform(self.tfidf_matrix)
    
    def recommend_startups(
        self, 
        query: str, 
        top_k: int = 5,
        method: str = 'hybrid'
    ) -> pd.DataFrame:
        """
        Recommend startups based on text query
        
        Args:
            query (str): Search query
            top_k (int): Number of recommendations
            method (str): Recommendation method
        
        Returns:
            pd.DataFrame: Top recommended startups
        """
        # Transform query
        query_vector = self.vectorizer.transform([query])
        query_reduced = self.svd.transform(query_vector)
        
        if method == 'content':
            # Content-Based: Cosine Similarity on TF-IDF
            similarities = cosine_similarity(query_vector, self.tfidf_matrix)[0]
        
        elif method == 'embedded':
            # Embedded Space Similarity
            similarities = cosine_similarity(query_reduced, self.reduced_features)[0]
        
        else:  # Hybrid Method
            # Combine TF-IDF and Embedded Space Similarities
            content_sim = cosine_similarity(query_vector, self.tfidf_matrix)[0]
            embedded_sim = cosine_similarity(query_reduced, self.reduced_features)[0]
            similarities = (content_sim + embedded_sim) / 2
        
        # Get top k recommendations
        top_indices = similarities.argsort()[-top_k:][::-1]
        
        # Return recommended startups
        return self.df_startups.iloc[top_indices][
            ['company_name', 'headline', 'about']
        ]
    
    def save_model(self, path: str = './startup_recommendation_model'):
        """
        Save recommendation system components
        
        Args:
            path (str): Directory to save model components
        """
        joblib.dump(self.vectorizer, f'{path}_vectorizer.pkl')
        joblib.dump(self.svd, f'{path}_svd.pkl')

def main():
    try:
        # Initialize recommendation system
        recommendation_system = SimplifiedStartupRecommendationSystem('startups.csv')

        # Save the model after training
        recommendation_system.save_model()

        
        
        
        # Search queries
        search_queries = [
            "AI-driven financial technology",
            "Blockchain solutions for supply chain",
            "Healthcare innovation platform",
            "Sustainable energy startups",
            "Machine learning in cybersecurity"
        ]
        
        # Recommendation methods
        methods = ['content', 'embedded', 'hybrid']
        
        # Demonstrate recommendations
        for query in search_queries:
            print(f"\nQuery: {query}")
            for method in methods:
                print(f"\n{method.capitalize()} Recommendations:")
                recommendations = recommendation_system.recommend_startups(
                    query, method=method, top_k=3
                )
                print(recommendations)
                print("-" * 50)
    
    except Exception as e:
        print(f"An error occurred: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()