import Joi from "joi";

export const chartSchema = Joi.object({
  label: Joi.string().min(1).max(100).required(),
  value: Joi.number().min(0).required()
});

export const validateChart = (req, res, next) => {
  const { error, value } = chartSchema.validate(req.body, { stripUnknown: true });
  if (error) {
    return res.status(400).json({ success: false, message: error.details[0].message });
  }
  req.body = value;
  next();
};