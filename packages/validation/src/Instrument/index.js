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
exports.submitInstrumentValidationSchema = exports.setAvailabilityTimeOnInstrumentValidationSchema = exports.removeScientistFromInstrumentValidationSchema = exports.assignScientistsToInstrumentValidationSchema = exports.removeProposalFromInstrumentValidationSchema = exports.assignProposalsToInstrumentValidationSchema = exports.deleteInstrumentValidationSchema = exports.updateInstrumentValidationSchema = exports.createInstrumentValidationSchema = void 0;
const Yup = __importStar(require("yup"));
exports.createInstrumentValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    shortCode: Yup.string().required(),
    description: Yup.string().required(),
    managerUserId: Yup.number()
        .positive('Please specify beamline manager')
        .required('Please specify beamline manager'),
});
exports.updateInstrumentValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
    name: Yup.string().required(),
    shortCode: Yup.string().required(),
    description: Yup.string().required(),
    managerUserId: Yup.number()
        .positive('Please specify beamline manager')
        .required('Please specify beamline manager'),
});
exports.deleteInstrumentValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
});
exports.assignProposalsToInstrumentValidationSchema = Yup.object().shape({
    proposals: Yup.array(Yup.object().shape({ id: Yup.number(), callId: Yup.number() }))
        .min(1)
        .required(),
    instrumentId: Yup.number().required(),
});
exports.removeProposalFromInstrumentValidationSchema = Yup.object().shape({
    proposalPk: Yup.number().required(),
    instrumentId: Yup.number().required(),
});
exports.assignScientistsToInstrumentValidationSchema = Yup.object().shape({
    scientistIds: Yup.array(Yup.number()).min(1).required(),
    instrumentId: Yup.number().required(),
});
exports.removeScientistFromInstrumentValidationSchema = Yup.object().shape({
    scientistId: Yup.number().required(),
    instrumentId: Yup.number().required(),
});
exports.setAvailabilityTimeOnInstrumentValidationSchema = Yup.object().shape({
    callId: Yup.number().required(),
    instrumentId: Yup.number().required(),
    availabilityTime: Yup.number().min(0).required(),
});
exports.submitInstrumentValidationSchema = Yup.object().shape({
    callId: Yup.number().required(),
    instrumentId: Yup.number().required(),
    sepId: Yup.number().required(),
});
//# sourceMappingURL=index.js.map