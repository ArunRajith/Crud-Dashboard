import Joi from "joi";

export const registerSchema = Joi.object({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().required()
})

export const loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})

export const validateRegister =(req,res,next)=>{
    const {error,value} = registerSchema.validate(req.body, {stripUnknown:true})

    if(error){
        return res.status(400).json({
            success: false,
            message:error.details[0].message
        })
    }

    req.body = value
    next()
}

export const validateLogin = (req,res,next)=>{
    const {error,value} = loginSchema.validate(req.body, {stripUnknown: true})

    if(error){
        return res.status(400).json({
            success:false,
            message:error.details[0].message
        })
    }

    req.body = value
    next()
}