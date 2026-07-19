from fastapi import APIRouter, HTTPException

from bson import ObjectId

from app.schemas.trip_schema import TripCreate

from app.config.database import trips_collection

from app.auth.jwt import get_current_user
from fastapi import Depends

router = APIRouter(

prefix="/api/trips",

tags=["Trips"]

)



@router.post("/")

async def create_trip(
trip: TripCreate,
user=Depends(get_current_user)
):

    data = {

        "destination":
        trip.destination,

        "startDate":
        trip.startDate,

        "endDate":
        trip.endDate,

        "budget":
        trip.budget,

        "description":
        trip.description

    }


    result = await trips_collection.insert_one(data)


    return {

        "message":
        "Trip Created",

        "id":
        str(result.inserted_id)

    }



@router.get("/")

async def get_trips(
user=Depends(get_current_user)
):


    trips=[]


    cursor = trips_collection.find()


    async for trip in cursor:


        trip["id"] = str(
            trip["_id"]
        )

        del trip["_id"]

        trips.append(trip)


    return trips




@router.get("/{trip_id}")

async def get_trip(
trip_id:str
):


    trip = await trips_collection.find_one(

        {
        "_id":ObjectId(trip_id)
        }

    )


    if not trip:

        raise HTTPException(

            status_code=404,

            detail="Trip not found"

        )


    trip["id"]=str(
        trip["_id"]
    )

    del trip["_id"]


    return trip




@router.delete("/{trip_id}")

async def delete_trip(
trip_id:str,
user=Depends(get_current_user)
):

    result = await trips_collection.delete_one(

        {
        "_id":ObjectId(trip_id)
        }

    )


    if result.deleted_count==0:

        raise HTTPException(

        status_code=404,

        detail="Trip not found"

        )


    return {

        "message":
        "Trip deleted"

    }