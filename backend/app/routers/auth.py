from fastapi import APIRouter,HTTPException


from app.schemas.user_schema import (

    UserRegister,

    UserLogin

)


from app.config.database import users_collection


from app.auth.password import (

    hash_password,

    verify_password

)


from app.auth.jwt import create_access_token




router=APIRouter(

    prefix="/api/auth",

    tags=["Authentication"]

)





@router.post("/register")

async def register(

    user:UserRegister

):


    existing=await users_collection.find_one(

        {

        "email":user.email

        }

    )



    if existing:


        raise HTTPException(

            status_code=400,

            detail="Email already registered"

        )




    new_user={


        "name":user.name,


        "email":user.email,


        "password":

        hash_password(user.password)


    }



    await users_collection.insert_one(

        new_user

    )



    return {


        "message":

        "Registration successful"

    }






@router.post("/login")

async def login(

    user:UserLogin

):


    db_user=await users_collection.find_one(

        {

        "email":user.email

        }

    )



    if not db_user:


        raise HTTPException(

            status_code=404,

            detail="User not found"

        )




    valid=verify_password(

        user.password,

        db_user["password"]

    )



    if not valid:


        raise HTTPException(

            status_code=401,

            detail="Incorrect password"

        )





    token=create_access_token(

        {

        "email":

        db_user["email"]

        }

    )



    return {


        "access_token":

        token,


        "token_type":

        "bearer"


    }