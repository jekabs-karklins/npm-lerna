"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPasswordFieldValidationSchema = exports.userPasswordFieldBEValidationSchema = exports.updatePasswordValidationSchema = exports.addUserRoleValidationSchema = exports.resetPasswordByEmailValidationSchema = exports.getTokenForUserValidationSchema = exports.signInValidationSchema = exports.updateUserRolesValidationSchema = exports.updateUserValidationSchema = exports.createUserValidationSchema = exports.createUserByEmailInviteValidationSchema = exports.deleteUserValidationSchema = void 0;
const Yup = __importStar(require("yup"));
exports.deleteUserValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
});
const createUserByEmailInviteValidationSchema = (UserRole) => Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email(),
    userRole: Yup.string().oneOf(Object.keys(UserRole)).required(),
});
exports.createUserByEmailInviteValidationSchema = createUserByEmailInviteValidationSchema;
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const passwordValidationSchema = Yup.string()
    .required('Password must contain at least 8 characters (including upper case, lower case and numbers)')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Password must contain at least 8 characters (including upper case, lower case and numbers)');
exports.createUserValidationSchema = Yup.object().shape({
    orcid: Yup.string().required(),
    orcidHash: Yup.string().required(),
    refreshToken: Yup.string().required(),
    firstname: Yup.string().required().min(2).max(50),
    middlename: Yup.string().notRequired().max(50),
    preferredname: Yup.string().notRequired().max(50),
    lastname: Yup.string().required().min(2).max(50),
    gender: Yup.string().required(),
    nationality: Yup.number().required(),
    user_title: Yup.string().required(),
    email: Yup.string().email().required(),
    password: passwordValidationSchema,
    birthdate: Yup.date()
        .min(new Date(1900, 1, 1), 'You are not that old')
        .test('DOB', 'You must be at least 18 years old', (value) => {
        // to keep the current behavior after @types/yup upgrade:
        // if value is `null` or `undefined` return true explicitly
        // because new Date(null | undefined) evaluates to `Invalid date`
        // which return NaN for getFullYear()
        // and Number - NaN < 18 evaluates to false
        if (!value) {
            return true;
        }
        const dateOfBirth = new Date(value);
        const dateNow = new Date();
        if (dateNow.getFullYear() - dateOfBirth.getFullYear() < 18) {
            return false;
        }
        else {
            return true;
        }
    })
        .required('Please specify your birth date'),
    organisation: Yup.number().required(),
    department: Yup.string().min(2).max(50).required(),
    position: Yup.string().min(2).max(50).required(),
    telephone: Yup.string()
        .min(2)
        .max(30)
        .matches(phoneRegExp, 'telephone number is not valid')
        .required(),
    telephone_alt: Yup.string().max(50),
});
exports.updateUserValidationSchema = Yup.object().shape({
    firstname: Yup.string().min(2).max(50).required(),
    middlename: Yup.string().notRequired().max(50),
    preferredname: Yup.string().notRequired().max(50),
    lastname: Yup.string().min(2).max(50).required(),
    gender: Yup.string().required(),
    nationality: Yup.number().required(),
    user_title: Yup.string().required(),
    email: Yup.string().email().required(),
    birthdate: Yup.date()
        .min(new Date(1900, 1, 1), 'You are not that old')
        .test('DOB', 'You must be at least 18 years old', (value) => {
        // to keep the current behavior after @types/yup upgrade:
        // if value is `null` or `undefined` return true explicitly
        // because new Date(null | undefined) evaluates to `Invalid date`
        // which return NaN for getFullYear()
        // and Number - NaN < 18 evaluates to false
        if (!value) {
            return true;
        }
        const dateOfBirth = new Date(value);
        const dateNow = new Date();
        if (dateNow.getFullYear() - dateOfBirth.getFullYear() < 18) {
            return false;
        }
        else {
            return true;
        }
    })
        .required('Please specify your birth date'),
    organisation: Yup.number().required(),
    department: Yup.string().min(2).max(50).required(),
    position: Yup.string().min(2).max(50).required(),
    telephone: Yup.string()
        .min(2)
        .max(30)
        .matches(phoneRegExp, 'telephone number is not valid')
        .required(),
    telephone_alt: Yup.string().max(50),
});
exports.updateUserRolesValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
    roles: Yup.array().of(Yup.number()).required(),
});
exports.signInValidationSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(25, 'Password must be at most 25 characters')
        .required('Password must be at least 8 characters'),
});
exports.getTokenForUserValidationSchema = Yup.object().shape({
    userId: Yup.number().required(),
});
exports.resetPasswordByEmailValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Please enter an email'),
});
exports.addUserRoleValidationSchema = Yup.object().shape({
    userID: Yup.number().required(),
    roleID: Yup.number().required(),
});
exports.updatePasswordValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
    password: Yup.string().required(),
});
exports.userPasswordFieldBEValidationSchema = Yup.object().shape({
    password: passwordValidationSchema,
    token: Yup.string().required(),
});
exports.userPasswordFieldValidationSchema = Yup.object().shape({
    password: passwordValidationSchema,
    confirmPassword: Yup.string()
        .required()
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
    }),
});
//# sourceMappingURL=index.js.map