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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkUpsertLostTimeValidationSchema = void 0;
const moment_1 = __importDefault(require("moment"));
const Yup = __importStar(require("yup"));
const util_1 = require("../util");
exports.bulkUpsertLostTimeValidationSchema = Yup.object().shape({
    proposalBookingId: Yup.number().required('ProposalBooking ID is required'),
    lostTimes: Yup.array()
        .of(Yup.object().shape({
        id: Yup.string().required('LostTime ID is required'),
        startsAt: Yup.date().typeError(util_1.TYPE_ERR_INVALID_DATE).required(),
        endsAt: Yup.date()
            .typeError(util_1.TYPE_ERR_INVALID_DATE)
            .when('startsAt', (startsAt) => {
            const min = (0, moment_1.default)(startsAt).add(1, 'minute');
            return Yup.date().min(min.toDate(), (0, util_1.atOrLaterThanMsg)(min.format(util_1.TZ_LESS_DATE_TIME_FORMAT)));
        })
            .required(),
    }))
        .max(50), // hard limit
});
//# sourceMappingURL=index.js.map