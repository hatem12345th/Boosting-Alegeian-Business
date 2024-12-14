import joblib
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

class SimplifiedStartupRecommendationSystem:
    def __init__(self, df_startups):
        self.df_startups = df_startups
        self.vectorizer = None
        self.svd = None
        self.tfidf_matrix = None
        self.reduced_features = None

    def load_models(self, vectorizer_path, svd_path):
        self.vectorizer = joblib.load(vectorizer_path)
        self.svd = joblib.load(svd_path)
        self.tfidf_matrix = self.vectorizer.transform(self.df_startups['full_text'])
        self.reduced_features = self.svd.transform(self.tfidf_matrix)

    def recommend_startups(self, query, top_k=5):
        query_vector = self.vectorizer.transform([query])
        similarities = cosine_similarity(query_vector, self.tfidf_matrix)[0]
        top_indices = similarities.argsort()[-top_k:][::-1]

        return self.df_startups.iloc[top_indices][['company_name', 'headline', 'about']].to_dict(orient='records')

def main():
    # Load the dataset
    df_startups = pd.read_csv('startups.csv')
    df_startups.fillna({
        'headline': 'No headline available',
        'about': 'No description available',
        'company_name': 'Unknown Startup'
    }, inplace=True)
    df_startups['full_text'] = df_startups['headline'] + ' ' + df_startups['about']

    # Load models
    vectorizer_path = 'startup_recommendation_model_vectorizer.pkl'
    svd_path = 'startup_recommendation_model_svd.pkl'
    
    recommendation_system = SimplifiedStartupRecommendationSystem(df_startups)
    recommendation_system.load_models(vectorizer_path, svd_path)

    # User input for query
    while True:
        query = input("Enter a query for startup recommendations (or type 'exit' to quit): ")
        if query.lower() == 'exit':
            break
        
        recommendations = recommendation_system.recommend_startups(query)
        print("\nRecommended Startups:")
        for rec in recommendations:
            print(f"Company Name: {rec['company_name']}, Headline: {rec['headline']}, About: {rec['about']}")
        print("-" * 50)

if __name__ == "__main__":
    main()