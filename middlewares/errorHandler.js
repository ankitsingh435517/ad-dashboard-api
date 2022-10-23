import { CustomErrorHandler } from '../services';

export const errorHandler = (err, req, res, next) => {
    const statusCode = 500;
    const data = {
        message: "Internal server error",
        OriginalError: err.message
    }

    if(err instanceof CustomErrorHandler){
        statusCode = err.status;
        data = {
            message: err.msg
        }
    }

    return res.status(statusCode).json(data);
}