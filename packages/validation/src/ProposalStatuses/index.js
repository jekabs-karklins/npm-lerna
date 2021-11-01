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
exports.deleteProposalStatusValidationSchema = exports.updateProposalStatusValidationSchema = exports.createProposalStatusValidationSchema = void 0;
const Yup = __importStar(require("yup"));
exports.createProposalStatusValidationSchema = Yup.object()
    .shape({
    shortCode: Yup.string()
        .max(50)
        .trim()
        .test('noWhiteSpaces', 'Should not contain white spaces', (value) => !/\s/.test(value))
        .uppercase()
        .required(),
    name: Yup.string().max(100).required(),
    description: Yup.string().max(200).required(),
})
    .strict(true);
exports.updateProposalStatusValidationSchema = Yup.object()
    .shape({
    id: Yup.number().required(),
    shortCode: Yup.string()
        .max(50)
        .trim()
        .test('noWhiteSpaces', 'Should not contain white spaces', (value) => !/\s/.test(value))
        .uppercase()
        .required(),
    name: Yup.string().max(100).required(),
    description: Yup.string().max(200).required(),
})
    .strict(true);
exports.deleteProposalStatusValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
});
//# sourceMappingURL=index.js.map