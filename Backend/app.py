import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from preprocessing_review import preprocess_review
import joblib
# Loaded Model

sentitment_model = joblib.load("./model/nlp_model_reviews.pkl")
cv = sentitment_model['count_vectorizer']
classifier = sentitment_model['classifier']

# Initialize App
app = FastAPI()

# GET Route


@app.get("/")
async def index():
    return {"Test": "Server is Running"}

if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=8000)
