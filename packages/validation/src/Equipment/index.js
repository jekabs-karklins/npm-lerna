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
exports.equipmentValidationSchema = void 0;
const moment_1 = __importDefault(require("moment"));
const Yup = __importStar(require("yup"));
const util_1 = require("../util");
exports.equipmentValidationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(100).required(),
    maintenanceStartsAt: Yup.date()
        .nullable()
        .typeError(util_1.TYPE_ERR_INVALID_DATE)
        .notRequired(),
    maintenanceEndsAt: Yup.date()
        .nullable()
        .typeError(util_1.TYPE_ERR_INVALID_DATE)
        .when('maintenanceStartsAt', (maintenanceStartsAt, schema) => {
        if (!maintenanceStartsAt) {
            return schema;
        }
        const min = (0, moment_1.default)(maintenanceStartsAt).add(1, 'minute');
        if (!min.isValid()) {
            return schema;
        }
        return schema
            .nullable()
            .typeError(util_1.TYPE_ERR_INVALID_DATE)
            .min(min.toDate(), (0, util_1.atOrLaterThanMsg)(min.format(util_1.TZ_LESS_DATE_TIME_FORMAT)))
            .notRequired();
    })
        .notRequired(),
});
//# sourceMappingURL=index.js.map