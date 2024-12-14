from flask import Flask, request, jsonify
import joblib
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Load your models
vectorizer = joblib.load('startup_recommendation_model_vectorizer.pkl')
svd = joblib.load('startup_recommendation_model_svd.pkl')

# Load your dataset (make sure to adjust the path)
df_startups = pd.read_csv('startups.csv')
df_startups.fillna({
    'headline': 'No headline available',
    'about': 'No description available',
    'company_name': 'Unknown Startup'
}, inplace=True)
df_startups['full_text'] = df_startups['headline'] + ' ' + df_startups['about']
tfidf_matrix = vectorizer.transform(df_startups['full_text'])
reduced_features = svd.transform(tfidf_matrix)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json(force=True)
    query = data['query']

    # Transform the query
    query_vector = vectorizer.transform([query])
    query_reduced = svd.transform(query_vector)

    # Calculate cosine similarity
    similarities = cosine_similarity(query_reduced, reduced_features)[0]
    top_indices = similarities.argsort()[-5:][::-1]  # Get top 5 recommendations

    # Prepare the response
    recommendations = df_startups.iloc[top_indices][['company_name', 'headline', 'about']].to_dict(orient='records')
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)