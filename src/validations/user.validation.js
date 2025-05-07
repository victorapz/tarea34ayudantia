"use strict"
import Joi from "joi";

const domainEmailValidator = (value,helper) => {
    if(!value.endsWith("@gmail.cl") && !value.endsWith("@gmail.com")  ){
        return helper.message(
            "El email debe ser del dominio @gmail.cl o @gmail.com"
        )
    }
    return value;
}
const numberValidator = (value,helper) => {
    if(!value.startsWith("+569")){
        return helper.message(
            "El numero de telefono debe comenzar con +569."
        )
    }
    return value;
}
export const userBodyValidation = Joi.object({
    nombreCompleto: Joi.string()
        .min(3)
        .max(50)
        .pattern(new RegExp("^[a-zA-Z\\s]+$"))
        .required()
        .messages({
            "string.empty": "El nombre completo no puede estar vacio.",
            "any.required": "El nombre completo es obligatorio.",
            "string.base": "El nombre completo debe ser de tipo string.",
            "string.max": "El nomnbre debe tener como máximo 50 caracteres.",
            "string.min": "El nomnbre debe tener como minimo 3 caracteres.",
            "string.pattern.base": "El nombre completo permite solo letras de la a-z."
        }),
    rut: Joi.string()
        .min(9)
        .max(12)
        .pattern(/^\d{1,2}(\.\d{3}){2}-[\dkK]$|^\d{7,8}-[\dkK]$/)
        .required()
        .messages({
            "string.empty": "El rut no puede estar vacio.",
            "any.required": "El rut es obligatorio.",
            "string.base": "El rut debe ser de tipo string.",
            "string.mmax": "El rut debe tener como maximo 12 caracteres.",
            "string.min": "El rut debe tener como minimo 9 caracteres.",
            "string.patterns": "El rut debe tener el formato XX.XXX.XXX-X o XXXXXXXX-X"
        }),
    email: Joi.string()
        .min(15)
        .max(50)
        .required()
        .email()
        .messages({
            "string.empty": "El email no puede estar vacio.",
            "any.required": "El email es obligatorio.",
            "string.base": "El email debe tener formato con dominio apropiado.",
            "string.max": "El email debe tener como maximo 50 caracteres.",
            "string.min": "El email debe tener como minimo 15 caracteres."
        })
        .custom(domainEmailValidator,"Validacion dominio email"),
    telefono: Joi.string()
        .min(9)
        .max(15)
        .required()
        .messages({
            "string.empty": "El telefono no puede estar vacio.",
            "any.required": "El telefono es obligatorio.",
            "string.max": "El telefono debe tener como maximo 15 caracteres.",
            "string.min": "El telefono debe tener como minimo 9 caracteres."
        })
        .custom(numberValidator,"Validacion numero de telefono"),
    })
/*export const userIdValidation = Joi.object({
    id: Joi.string()
        .required()
        .pattern
        .message({

        })
})
*/