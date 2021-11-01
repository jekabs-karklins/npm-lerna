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
exports.addNextStatusEventsValidationSchema = exports.deleteProposalWorkflowStatusValidationSchema = exports.moveProposalWorkflowStatusValidationSchema = exports.addProposalWorkflowStatusValidationSchema = exports.deleteProposalWorkflowValidationSchema = exports.updateProposalWorkflowValidationSchema = exports.createProposalWorkflowValidationSchema = void 0;
const Yup = __importStar(require("yup"));
exports.createProposalWorkflowValidationSchema = Yup.object().shape({
    name: Yup.string().max(50).required(),
    description: Yup.string().max(200).required(),
});
exports.updateProposalWorkflowValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
    name: Yup.string().max(50).required(),
    description: Yup.string().max(200).required(),
});
exports.deleteProposalWorkflowValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
});
exports.addProposalWorkflowStatusValidationSchema = Yup.object().shape({
    proposalWorkflowId: Yup.number().required(),
    sortOrder: Yup.number().required(),
    droppableGroupId: Yup.string().required(),
    parentDroppableGroupId: Yup.string().nullable().notRequired(),
    proposalStatusId: Yup.number().required(),
    nextProposalStatusId: Yup.number().nullable().notRequired(),
    prevProposalStatusId: Yup.number().nullable().notRequired(),
});
exports.moveProposalWorkflowStatusValidationSchema = Yup.object().shape({
    from: Yup.number().required(),
    to: Yup.number().required(),
    proposalWorkflowId: Yup.number().required(),
});
exports.deleteProposalWorkflowStatusValidationSchema = Yup.object().shape({
    proposalStatusId: Yup.number().required(),
    proposalWorkflowId: Yup.number().required(),
});
exports.addNextStatusEventsValidationSchema = Yup.object().shape({
    proposalWorkflowConnectionId: Yup.number().required(),
    nextStatusEvents: Yup.array().of(Yup.string()).required(),
});
//# sourceMappingURL=index.js.map