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
exports.numberInputQuestionValidationSchema = void 0;
const Yup = __importStar(require("yup"));
const numberInputQuestionValidationSchema = (field, NumberValueConstraint) => {
    var _a;
    const config = field.config;
    let valueScheme = Yup.number().transform((value) => isNaN(value) ? undefined : value);
    if (config.required) {
        valueScheme = valueScheme.required('This is a required field');
    }
    if (config.numberValueConstraint === NumberValueConstraint.ONLY_NEGATIVE) {
        valueScheme = valueScheme.negative('Value must be a negative number');
    }
    if (config.numberValueConstraint === NumberValueConstraint.ONLY_POSITIVE) {
        valueScheme = valueScheme.positive('Value must be a positive number');
    }
    let unitScheme = Yup.string().nullable();
    // available units are specified and the field is required
    if (((_a = config.units) === null || _a === void 0 ? void 0 : _a.length) && config.required) {
        unitScheme = unitScheme.required('Please specify unit');
    }
    return Yup.object().shape({
        value: valueScheme,
        unit: unitScheme,
    });
};
exports.numberInputQuestionValidationSchema = numberInputQuestionValidationSchema;
//# sourceMappingURL=numberInput.js.map