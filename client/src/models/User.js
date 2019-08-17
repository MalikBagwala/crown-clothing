import Joi from 'joi-browser';
import _ from 'lodash';
const userSchema = {
  displayName: Joi.string()
    .min(3)
    .max(20)
    .required()
    .label('Name'),
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required()
    .label('E-Mail'),
  password: Joi.string()
    .min(6)
    .max(20)
    .required()
    .label('Password'),
  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .options({ language: { any: { allowOnly: 'must match password' } } })
};

function validateUser(user) {
  const { error } = Joi.validate(user, userSchema, { abortEarly: true });
  let errorMap = {};
  if (error) {
    error.details.forEach(error => {
      _.set(errorMap, error.path, error.message);
    });
  }
  return errorMap;
}

export default validateUser;
