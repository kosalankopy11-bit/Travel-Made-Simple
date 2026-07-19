from fastapi import APIRouter, Depends, HTTPException

from bson import ObjectId


from app.config.database import users_collection


from app.auth.jwt import get_current_user




router = APIRouter(

    prefix="/api/users",

    tags=["Users"]

)





@router.get("/profile")

async def get_profile(

    user=Depends(get_current_user)

):


    profile = await users_collection.find_one(

        {

        "email":

        user["email"]

        }

    )



    if not profile:


        raise HTTPException(

            status_code=404,

            detail="User not found"

        )



    profile["id"] = str(

        profile["_id"]

    )


    del profile["_id"]


    del profile["password"]



    return profile






@router.put("/profile")

async def update_profile(

    data:dict,

    user=Depends(get_current_user)

):


    allowed_fields = [

        "name",

        "email"

    ]



    update_data={}



    for field in allowed_fields:


        if field in data:


            update_data[field]=data[field]





    result = await users_collection.update_one(

        {

        "email":

        user["email"]

        },


        {

        "$set":

        update_data

        }

    )



    if result.modified_count == 0:


        return {


            "message":

            "No changes made"

        }



    return {


        "message":

        "Profile updated successfully"

    }







@router.delete("/account")

async def delete_account(

    user=Depends(get_current_user)

):


    result = await users_collection.delete_one(

        {

        "email":

        user["email"]

        }

    )



    if result.deleted_count == 0:


        raise HTTPException(

            status_code=404,

            detail="User not found"

        )



    return {


        "message":

        "Account deleted successfully"

    }