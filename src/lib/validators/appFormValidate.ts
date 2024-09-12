import Joi  from "joi";

export default (data:any) => {
    const schema = Joi.object({
        page: Joi.string()
            .required(),
        source: Joi.string()
            .required(),
        utm: Joi.string(),
        name: Joi.string()
            .min(3)
            .max(128)
            .required(),
        company: Joi.string()
            .min(2)
            .max(128),
        phone: Joi.string()
            .required(),
        email: Joi.string()
            .email({tlds: {allow: false}}),
        budget: Joi.string()
    })
    return schema.validate(data);
}