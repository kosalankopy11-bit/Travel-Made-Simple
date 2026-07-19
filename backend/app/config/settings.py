import os

from dotenv import load_dotenv


load_dotenv()



class Settings:


    PROJECT_NAME = "Travel Made Simple"


    MONGO_URL = os.getenv(
        "MONGO_URL"
    )


    DATABASE_NAME = os.getenv(
        "DATABASE_NAME"
    )

    MONGO_DB="Travel_Made_Simple"


    SECRET_KEY = os.getenv(
        "SECRET_KEY"
    )


    OPENAI_API_KEY = os.getenv(
        "OPENAI_API_KEY"
    )


    WEATHER_API_KEY = os.getenv(
        "WEATHER_API_KEY"
    )



settings = Settings()