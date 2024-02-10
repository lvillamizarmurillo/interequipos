import Joi from "joi";

class Validations {
    static registrationSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });
  
    static validateRegistration(data) {
      return Validations.registrationSchema.validate(data);
    }
}

export default Validations;