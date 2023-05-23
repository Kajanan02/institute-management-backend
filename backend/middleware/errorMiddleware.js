const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    // Pass the error to the next middleware
    next(error);
}

const errorHandler = (err, req, res, next) => {
    // If the status code is 200, set it to 500
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    // Set the status code to the error status code
    res.status(statusCode);
    // Return the error message
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        res.status(404).json({message: 'Product not found'});
    } else {
        res.json({
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        });
    }
}

export {notFound, errorHandler};