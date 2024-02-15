import Joi from "joi";

class ValidationsAdmin {
    static postSchemaCategory = Joi.object({
      name: Joi.string().required().regex(/^[A-Z\s]+$/).messages({
        'string': 'El nombre de la categoria debe contener un formato valido.',
        'string.pattern.base': 'El nombre de la categoria debe contener solo mayúsculas.',
        'any.required': 'El nombre de la categoria es un campo obligatorio, verifica el campo name.'
      })
    });
    static postSchemaProduct = Joi.object({
        name: Joi.string().required().regex(/^[A-Z\s]+$/).messages({
            'string': 'El nombre debe contener un formato valido.',
            'string.pattern.base': 'El nombre debe contener solo mayúsculas.',
            'any.required': 'El nombre es un campo obligatorio, verifica el campo name.'
        }),
        category: Joi.string().required().regex(/^[A-Z\s]+$/).messages({
          'string': 'El nombre de la categoria debe contener un formato valido.',
          'string.pattern.base': 'El nombre de la categoria debe contener solo mayúsculas.',
          'any.required': 'El nombre de la categoria es un campo obligatorio, verifica el campo category.'
        }),
        images: Joi.object({
            path: Joi.string().required().messages({
                'string': 'El path debe contener un formato valido.',
                'any.required': 'El path es un campo obligatorio, verifica el campo path.'
            }),
            link: Joi.string().required().messages({
                'string': 'El link debe contener un formato valido.',
                'any.required': 'El link es un campo obligatorio, verifica el campo link.'
            })
        }).required().messages({
            'object': 'El campo images debe contener un formato valido.',
            'any.required': 'El campo de imagenes es obligatorio, verifica el campo images.'
        }),
        productPdf: Joi.object({
            path: Joi.string().required().messages({
                'string': 'El path debe contener un formato valido.',
                'any.required': 'El path es un campo obligatorio, verifica el campo path.'
            }),
            link: Joi.string().required().messages({
                'string': 'El link debe contener un formato valido.',
                'any.required': 'El link es un campo obligatorio, verifica el campo link.'
            })
        }).required().messages({
            'object': 'El campo productPdf debe contener un formato valido.',
            'any.required': 'El campo de SubirPDF es obligatorio, verifica el campo productPdf.'
        }),
        info: Joi.string().required().messages({
            'string': 'La info debe contener un formato valido.',
            'any.required': 'La info es un campo obligatorio, verifica el campo info.'
        }),
        zone: Joi.string().required().regex(/^[A-Z][a-z]+$/).messages({
            'string': 'El nombre debe contener un formato válido.',
            'string.pattern.base': 'El nombre debe comenzar con mayúscula y seguir con minúsculas.',
            'any.required': 'El nombre es un campo obligatorio, verifica el campo zone.'
        })
      });
  
    static validateAdmin(data,keyword) {
      switch (keyword) {
        case 'nameCategory':
          return ValidationsAdmin.postSchemaCategory.validate(data, { abortEarly: false });
        case 'postProduct':
          return ValidationsAdmin.postSchemaProduct.validate(data, { abortEarly: false });
        default:
          return ValidationsAdmin.postSchemaCategory.validate(data, { abortEarly: false });
      }
    }
}

export default ValidationsAdmin;