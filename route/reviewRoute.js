import express from "express";
import {addReview,getActivityReviews,getPackageReviews,updateReview} from '../controller/ReviewController.js'
import  { tryCatchMiddleware } from "../middileware/ErrorHandler.js";
import VerifyUserToken from "../middileware/UserAuth.js";

const ReviewRouter = express.Router()

ReviewRouter
.use(VerifyUserToken)

.post("/reviews", tryCatchMiddleware(addReview))
.get("/reviews/activity/:activityId",tryCatchMiddleware( getActivityReviews))
.get("/reviews/package/:packageId",tryCatchMiddleware (getPackageReviews))
.put("/reviews/:reviewId",tryCatchMiddleware (updateReview))


export default ReviewRouter