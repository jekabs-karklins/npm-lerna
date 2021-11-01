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
exports.generalInfoUpdateValidationSchema = exports.administrationProposalValidationSchema = exports.proposalNotifyValidationSchema = exports.deleteProposalValidationSchema = exports.submitProposalValidationSchema = exports.updateProposalValidationSchema = exports.createProposalValidationSchema = void 0;
const Yup = __importStar(require("yup"));
exports.createProposalValidationSchema = Yup.object().shape({
    callId: Yup.number().required(),
});
exports.updateProposalValidationSchema = Yup.object().shape({
    proposalPk: Yup.number().required(),
    title: Yup.string().notRequired(),
    abstract: Yup.string().notRequired(),
    answers: Yup.array().notRequired(),
    topicsCompleted: Yup.array().notRequired(),
    users: Yup.array().notRequired(),
    proposerId: Yup.number().notRequired(),
    partialSave: Yup.bool().notRequired(),
});
exports.submitProposalValidationSchema = Yup.object().shape({
    proposalPk: Yup.number().required(),
});
exports.deleteProposalValidationSchema = exports.submitProposalValidationSchema;
exports.proposalNotifyValidationSchema = exports.submitProposalValidationSchema;
exports.administrationProposalValidationSchema = Yup.object().shape({
    proposalPk: Yup.number().required(),
    statusId: Yup.number().nullable(),
    finalStatus: Yup.string().nullable(),
    commentForUser: Yup.string().nullable(),
    commentForManagement: Yup.string().nullable(),
    rankOrder: Yup.number()
        .min(0, ({ min }) => `Must be greater than or equal to ${min}`)
        .max(1e5, ({ max }) => `Must be less than or equal to ${max}`),
    managementTimeAllocation: Yup.number()
        .min(0, ({ min }) => `Must be greater than or equal to ${min}`)
        .max(1e5, ({ max }) => `Must be less than or equal to ${max}`)
        .nullable(),
    managementDecisionSubmitted: Yup.bool().nullable(),
});
const MAX_TITLE_LEN = 175;
const MAX_ABSTRACT_LEN = 1500;
exports.generalInfoUpdateValidationSchema = Yup.object().shape({
    title: Yup.string()
        .max(MAX_TITLE_LEN, 'Title must be at most 175 characters')
        .required('Title is required'),
    abstract: Yup.string()
        .max(MAX_ABSTRACT_LEN, 'Abstract must be at most 1500 characters')
        .required('Abstract is required'),
});
//# sourceMappingURL=index.js.map