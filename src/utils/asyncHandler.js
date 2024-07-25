const asyncHandler = (requestHandler) =>{
     (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
     }
}

export default asyncHandler




//creating same func using try catch
// steps of creating higher order functin which can accept function as paramerter

/*
1.cosnt asyncHandler = () => {}
2. const asyncHandler = (fn) => { () => {} }
3. const asyncHandler = (fn) => () => {}
4. const asyncHandler = (fn) => async() => {}

const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    
    }
}
    */

