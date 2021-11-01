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
exports.removeAssignedInstrumentFromCallValidationSchema = exports.assignInstrumentsToCallValidationSchema = exports.updateCallValidationSchemas = exports.createCallValidationSchemas = void 0;
const Yup = __importStar(require("yup"));
const util_1 = require("../util");
const firstStepCreateCallValidationSchema = Yup.object().shape({
    shortCode: Yup.string().required('Short Code is required'),
    startCall: Yup.date().required('Start call date is required'),
    endCall: Yup.date()
        .required('End call date is required')
        .when('startCall', (startCall, schema) => {
        if (!(0, util_1.isValidDate)(startCall)) {
            return schema;
        }
        return schema.min(startCall, 'End call date can not be before start call date.');
    }),
    templateId: Yup.number().required(),
    proposalWorkflowId: Yup.number().required(),
});
const firstStepUpdateCallValidationSchema = firstStepCreateCallValidationSchema.concat(Yup.object()
    .shape({
    id: Yup.number().required('Id is required'),
})
    .required());
const secondStepCallValidationSchema = Yup.object().shape({
    startReview: Yup.date().required('Start review date is required'),
    endReview: Yup.date()
        .required('End review date is required')
        .when('startReview', (startReview, schema) => {
        if (!(0, util_1.isValidDate)(startReview)) {
            return schema;
        }
        return schema.min(startReview, 'End review date can not be before start review date.');
    }),
    startSEPReview: Yup.date().nullable().notRequired(),
    endSEPReview: Yup.date()
        .nullable()
        .notRequired()
        .when('startSEPReview', (startSEPReview, schema) => {
        if (!(0, util_1.isValidDate)(startSEPReview)) {
            return schema;
        }
        return schema.min(startSEPReview, 'End SEP review date can not be before start SEP review date.');
    }),
    surveyComment: Yup.string()
        .max(100, 'Survey comment should be no longer than 100 characters')
        .required('Survey comment is required'),
});
const thirdStepCallValidationSchema = Yup.object().shape({
    startNotify: Yup.date().required('Start notify date is required'),
    endNotify: Yup.date()
        .required('End notify date is required')
        .when('startNotify', (startNotify, schema) => {
        if (!(0, util_1.isValidDate)(startNotify)) {
            return schema;
        }
        return schema.min(startNotify, 'End notify date can not be before start notify date.');
    }),
    startCycle: Yup.date().required('Start cycle date is required'),
    endCycle: Yup.date()
        .required('End cycle date is required')
        .when('startCycle', (startCycle, schema) => {
        if (!(0, util_1.isValidDate)(startCycle)) {
            return schema;
        }
        return schema.min(startCycle, 'End cycle date can not be before start cycle date.');
    }),
    cycleComment: Yup.string()
        .max(100, 'Cycle comment should be no longer than 100 characters')
        .required('Cycle comment is required'),
});
exports.createCallValidationSchemas = [
    firstStepCreateCallValidationSchema,
    secondStepCallValidationSchema,
    thirdStepCallValidationSchema,
];
exports.updateCallValidationSchemas = [
    firstStepUpdateCallValidationSchema,
    secondStepCallValidationSchema,
    thirdStepCallValidationSchema,
];
exports.assignInstrumentsToCallValidationSchema = Yup.object().shape({
    callId: Yup.number().required('callId is required'),
    instrumentIds: Yup.array(Yup.number())
        .required('At least one instrumentId is required')
        .min(1),
});
exports.removeAssignedInstrumentFromCallValidationSchema = Yup.object().shape({
    callId: Yup.number().required('callId is required'),
    instrumentId: Yup.number().required('instrumentId is required'),
});
//# sourceMappingURL=index.js.map