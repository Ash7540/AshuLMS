import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
    err:any, 
    req:Request,
    res:Response, 
    next:NextFunction
    ) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || " Internal Server Error";

    // wrong mongoDB ID Error
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Duplicate key Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
    }

    // Wrong JWT Error
    if(err.name === 'JsonWebTokenError'){
        const message = `Json Web Token Invalid, Try Again`;
        err = new ErrorHandler(message, 400);
    }

    // JWT Expired Error
    if(err.name === 'TokenExpiredError'){
        const message = `Json Token is Expired, Try Again`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success : false,
        message: err.message
    })
}
