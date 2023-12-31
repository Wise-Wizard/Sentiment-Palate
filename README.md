
---

# Sentiment Palate: Restaurant Review Sentiment Analysis

SentimentPalate is a powerful tool that utilizes Natural Language Processing (NLP) techniques to analyze and predict the sentiment of restaurant reviews. Whether you're a food enthusiast, a restaurateur, or a data enthusiast, SentimentPalate offers valuable insights into customer opinions and helps you understand the overall sentiment surrounding dining experiences.

## Overview

SentimentPalate employs a robust NLP pipeline to preprocess and analyze restaurant reviews. It employs techniques such as tokenization, lemmatization, and stopword removal to clean the text data. The processed data is then transformed into a numerical representation using the Bag of Words model. At its core, the project features a trained Linear Support Vector Classifier (SVC) that predicts whether a review expresses a positive or negative sentiment.

## Features

- Efficient sentiment analysis of restaurant reviews
- Simple and intuitive user interface for input and prediction
- Utilizes state-of-the-art NLP techniques for accurate sentiment classification
- Provides a comprehensive understanding of customer sentiments in the restaurant industry
- Easily adaptable for other text classification tasks

## Usage

1. Install the required libraries by running `pip install -r requirements.txt`.
2. Prepare your dataset of restaurant reviews in TSV file format.
3. Train the sentiment analysis model using the provided Jupyter Notebook (`SentimentAnalysis.ipynb`).
4. Save the trained model and the CountVectorizer using Joblib.
5. Use the trained model to predict sentiment for new restaurant reviews.

## Example

```python
# Load the saved model and CountVectorizer
loaded_model = joblib.load('nlp_model.pkl')

# Access the CountVectorizer and the classifier
cv = loaded_model['count_vectorizer']
classifier = loaded_model['classifier']

# Preprocess the input review and predict sentiment
input_review = "The food was absolutely amazing!"
processed_review = preprocess_input(input_review, cv)
predicted_sentiment = classifier.predict(processed_review)

print("Predicted Sentiment:", "Positive" if predicted_sentiment else "Negative")
```

## Frontend Setup

1. Navigate to the `Frontend/web-interface` directory.
2. Install the required dependencies using `npm install`.
3. Set up the base directory and build command in your Netlify deployment settings.

## Home Screen
![Home Screen](https://github.com/Wise-Wizard/Sentiment-Palate/assets/103821431/b21f9c68-e5e8-4f76-bbd7-d9d276709f0d)


## Positive Review
![Positive Review](https://github.com/Wise-Wizard/Sentiment-Palate/assets/103821431/f222653e-8e09-4b89-8141-1d8f4543011e)

## Negative Review
![Negative Review](https://github.com/Wise-Wizard/Sentiment-Palate/assets/103821431/f824c939-6548-4db6-ac49-7f3ae3b8e773)



## Contributors

- Saransh Shankar (https://github.com/Wise-Wizard)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

---
