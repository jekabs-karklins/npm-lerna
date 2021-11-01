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
exports.updateApiAccessTokenValidationSchema = exports.createApiAccessTokenValidationSchema = exports.setPageTextValidationSchema = void 0;
const Yup = __importStar(require("yup"));
const checkValidJson = (value) => {
    if (!value) {
        return false;
    }
    try {
        const parsedObject = JSON.parse(value);
        if (Object.keys(parsedObject).length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
};
exports.setPageTextValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
    text: Yup.string().notRequired(),
});
const createApiAccessTokenValidationSchema = (isBackendValidation) => Yup.object().shape({
    name: Yup.string().required(),
    accessPermissions: isBackendValidation
        ? Yup.string()
            .required('You must select at least one query or mutation for access')
            .test('Is valid object', 'Requires valid JSON', checkValidJson)
        : Yup.array()
            .of(Yup.string())
            .required('You must select at least one query or mutation for access'),
});
exports.createApiAccessTokenValidationSchema = createApiAccessTokenValidationSchema;
const updateApiAccessTokenValidationSchema = (isBackendValidation) => Yup.object().shape({
    accessTokenId: isBackendValidation
        ? Yup.string().required()
        : Yup.string().notRequired(),
    name: Yup.string().required(),
    accessPermissions: isBackendValidation
        ? Yup.string()
            .required('You must select at least one query or mutation for access')
            .test('Is valid object', 'Requires valid JSON', checkValidJson)
        : Yup.array()
            .of(Yup.string())
            .required('You must select at least one query or mutation for access'),
});
exports.updateApiAccessTokenValidationSchema = updateApiAccessTokenValidationSchema;
//# sourceMappingURL=index.js.map