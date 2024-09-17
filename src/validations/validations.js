import { body, param } from "express-validator";

export const createUserValidations = [
  body("name")
    .isString()
    .withMessage("username dabe ser un sting")
    .notEmpty()
    .withMessage("username no puede estar vacio"),
  body("email")
    .isString()
    .withMessage("email debe ser sting")
    .notEmpty()
    .withMessage("emial no debe estar vacio")
    .isEmail()
    .withMessage("el email debe ser un email valido"),
  body("password")
    .isString()
    .withMessage("passwprd debe ser sting")
    .notEmpty()
    .withMessage("password no debe estar vacio")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 0,
      minSymbols: 0,
    })
    .withMessage("tu password es muy debil"),
];

export const updateUserValidations = [
  body("name")
    .optional()
    .isString()
    .withMessage("El nombre de usuario debe ser un string")
    .notEmpty()
    .withMessage("El nombre de usuario no puede estar vacío"),
  body("email")
    .optional()
    .isString()
    .withMessage("El email debe ser un string")
    .notEmpty()
    .withMessage("El email no puede estar vacío")
    .isEmail()
    .withMessage("El email debe ser válido"),
  body("password")
    .optional()
    .isString()
    .withMessage("La contraseña debe ser un string")
    .notEmpty()
    .withMessage("La contraseña no puede estar vacía")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 0,
      minSymbols: 0,
    })
    .withMessage("La contraseña es demasiado débil"),
];

export const idUserValidation = [
  param("id")
    .isInt()
    .withMessage("El id del usuario debe ser un numero entero."),
];
