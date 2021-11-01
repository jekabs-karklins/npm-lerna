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
exports.overwriteSepMeetingDecisionRankingValidationSchema = exports.saveSepMeetingDecisionValidationSchema = exports.updateTimeAllocationValidationSchema = exports.assignSEPMemberToProposalValidationSchema = exports.assignProposalToSEPValidationSchema = exports.removeSEPMemberValidationSchema = exports.assignSEPMembersValidationSchema = exports.assignSEPChairOrSecretaryValidationSchema = exports.updateSEPValidationSchema = exports.createSEPValidationSchema = void 0;
const Yup = __importStar(require("yup"));
exports.createSEPValidationSchema = Yup.object().shape({
    code: Yup.string().required(),
    description: Yup.string().required(),
    numberRatingsRequired: Yup.number().min(2).required(),
});
exports.updateSEPValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
    code: Yup.string().required(),
    description: Yup.string().required(),
    numberRatingsRequired: Yup.number().min(2).required(),
});
const assignSEPChairOrSecretaryValidationSchema = (UserRole) => Yup.object().shape({
    assignChairOrSecretaryToSEPInput: Yup.object()
        .shape({
        userId: Yup.number().required(),
        roleId: Yup.number()
            .oneOf([UserRole.SEP_CHAIR, UserRole.SEP_SECRETARY])
            .required(),
        sepId: Yup.number().required(),
    })
        .required(),
});
exports.assignSEPChairOrSecretaryValidationSchema = assignSEPChairOrSecretaryValidationSchema;
exports.assignSEPMembersValidationSchema = Yup.object().shape({
    memberIds: Yup.array(Yup.number()).required(),
    sepId: Yup.number().required(),
});
exports.removeSEPMemberValidationSchema = Yup.object().shape({
    memberId: Yup.number().required(),
    sepId: Yup.number().required(),
});
exports.assignProposalToSEPValidationSchema = Yup.object().shape({
    proposalPk: Yup.number().required(),
    sepId: Yup.number().required(),
});
exports.assignSEPMemberToProposalValidationSchema = Yup.object().shape({
    proposalPk: Yup.number().required(),
    sepId: Yup.number().required(),
    memberId: Yup.number().required(),
});
exports.updateTimeAllocationValidationSchema = Yup.object({
    sepId: Yup.number().required(),
    proposalPk: Yup.number().required(),
    sepTimeAllocation: Yup.number()
        .min(0, ({ min }) => `Must be greater than or equal to ${min}`)
        .max(1e5, ({ max }) => `Must be less than or equal to ${max}`)
        .nullable(),
});
exports.saveSepMeetingDecisionValidationSchema = Yup.object().shape({
    proposalPk: Yup.number().required(),
    commentForUser: Yup.string().nullable(),
    commentForManagement: Yup.string().nullable(),
    recommendation: Yup.string().nullable(),
    rankOrder: Yup.number()
        .min(0, ({ min }) => `Must be greater than or equal to ${min}`)
        .max(1e5, ({ max }) => `Must be less than or equal to ${max}`),
    submitted: Yup.bool().nullable(),
});
exports.overwriteSepMeetingDecisionRankingValidationSchema = Yup.object().shape({
    proposalPk: Yup.number().required(),
    rankOrder: Yup.number()
        .min(0, ({ min }) => `Must be greater than or equal to ${min}`)
        .max(1e5, ({ max }) => `Must be less than or equal to ${max}`),
});
//# sourceMappingURL=index.js.map