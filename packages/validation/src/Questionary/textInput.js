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
exports.textInputQuestionValidationSchema = void 0;
const Yup = __importStar(require("yup"));
const textInputQuestionValidationSchema = (field) => {
    let schema = Yup.string();
    const config = field.config;
    config.required && (schema = schema.required('This is a required field'));
    config.min &&
        (schema = schema.min(config.min, `Value must be at least ${config.min} characters`));
    config.max &&
        (schema = schema.max(config.max, `Value must be at most ${config.max} characters`));
    return schema;
};
exports.textInputQuestionValidationSchema = textInputQuestionValidationSchema;
//# sourceMappingURL=textInput.js.map