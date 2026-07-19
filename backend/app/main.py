from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware


from app.routers import (
    auth,
    trips,
    expenses,
    ai,
    weather,
    reviews,
    admin,
    users
)



app = FastAPI(

    title="Travel Made Simple API",

    version="1.0"

)



app.add_middleware(

    CORSMiddleware,


    allow_origins=[

        "http://localhost:5173"

    ],


    allow_credentials=True,


    allow_methods=[

        "*"

    ],


    allow_headers=[

        "*"

    ]

)




app.include_router(
    auth.router
)


app.include_router(
    trips.router
)


app.include_router(
    expenses.router
)


app.include_router(
    ai.router
)


app.include_router(
    weather.router
)


app.include_router(
    reviews.router
)


app.include_router(
    admin.router
)

app.include_router(
    users.router
)




@app.get("/")
async def home():

    return {

        "message":
        "Travel Made Simple Backend Running"

    }