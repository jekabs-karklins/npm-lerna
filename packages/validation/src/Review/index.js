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
exports.addUserForReviewValidationSchema = exports.removeUserForReviewValidationSchema = exports.proposalTechnicalReviewValidationSchema = exports.proposalGradeValidationSchema = void 0;
const Yup = __importStar(require("yup"));
exports.proposalGradeValidationSchema = Yup.object().shape({
    comment: Yup.string().max(500, 'Too long comment').nullable(),
    grade: Yup.number()
        .min(0, 'Lowest grade is 0')
        .max(10, 'Highest grade is 10')
        .nullable(),
});
exports.proposalTechnicalReviewValidationSchema = Yup.object().shape({
    status: Yup.string().nullable(),
    timeAllocation: Yup.number()
        .min(0, ({ min }) => `Must be greater than or equal to ${min}`)
        .max(1e5, ({ max }) => `Must be less than or equal to ${max}`)
        .nullable(),
    comment: Yup.string().nullable(),
    publicComment: Yup.string().nullable(),
});
exports.removeUserForReviewValidationSchema = Yup.object().shape({
    reviewID: Yup.number().required(),
});
exports.addUserForReviewValidationSchema = Yup.object().shape({
    userID: Yup.number().required(),
    proposalPk: Yup.number().required(),
});
//# sourceMappingURL=index.js.map