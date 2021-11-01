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
exports.intervalQuestionValidationSchema = void 0;
const Yup = __importStar(require("yup"));
const intervalQuestionValidationSchema = (field) => {
    var _a;
    const config = field.config;
    let minSchema = Yup.number().transform((value) => isNaN(value) ? undefined : value);
    let maxSchema = Yup.number().transform((value) => isNaN(value) ? undefined : value);
    if (config.required) {
        minSchema = minSchema.required('This is a required field');
        maxSchema = maxSchema.required('This is a required field');
    }
    let unitSchema = Yup.string().nullable();
    // available units are specified and the field is required
    if (((_a = config.units) === null || _a === void 0 ? void 0 : _a.length) && config.required) {
        unitSchema = unitSchema.required();
    }
    return Yup.object().shape({
        min: minSchema,
        max: maxSchema,
        unit: unitSchema,
    });
};
exports.intervalQuestionValidationSchema = intervalQuestionValidationSchema;
//# sourceMappingURL=interval.js.map