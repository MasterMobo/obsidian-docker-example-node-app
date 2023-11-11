module.exports = (err, req, res, next) => {
    const error = {
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wrong, please try again later"
    }
    res.status(error.statusCode).json({message: error.message})
}