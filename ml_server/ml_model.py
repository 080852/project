import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

def load_data():
    X = np.random.rand(100, 10)
    y = np.random.randint(2, size=100)
    return X, y

def train_model():
    X, y = load_data()
    model = RandomForestClassifier()
    model.fit(X, y)
    joblib.dump(model, 'vehicle_health_model.pkl')
    print("Model saved as vehicle_health_model.pkl")

if __name__ == "__main__":
    train_model()

