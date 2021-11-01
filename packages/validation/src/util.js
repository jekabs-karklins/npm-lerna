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
exports.isValidDate = exports.NumericalID = exports.ID = exports.atOrLaterThanMsg = exports.oneOfMsg = exports.maxCharactersMsg = exports.minCharactersMsg = exports.TYPE_ERR_INVALID_DATE = exports.TZ_LESS_DATE_TIME_FORMAT = void 0;
const Yup = __importStar(require("yup"));
exports.TZ_LESS_DATE_TIME_FORMAT = 'yyyy-MM-DD HH:mm:ss';
exports.TYPE_ERR_INVALID_DATE = 'Invalid Date Format';
const minCharactersMsg = ({ min }) => `Must be at least ${min} characters`;
exports.minCharactersMsg = minCharactersMsg;
const maxCharactersMsg = ({ max }) => `Must be at most ${max} characters`;
exports.maxCharactersMsg = maxCharactersMsg;
const oneOfMsg = (types) => `Must be one of the following values: ${Array.isArray(types) ? types.join(', ') : Object.values(types).join(', ')}`;
exports.oneOfMsg = oneOfMsg;
const atOrLaterThanMsg = (time) => `Must be at or later than ${time}`;
exports.atOrLaterThanMsg = atOrLaterThanMsg;
exports.ID = Yup.string()
    .min(1, exports.minCharactersMsg)
    .max(15, exports.maxCharactersMsg)
    .typeError('Invalid ID');
exports.NumericalID = exports.ID.matches(/^[\d]+$/, 'Invalid NumericalID').typeError('Invalid NumericalID');
const isValidDate = (d) => d instanceof Date && !isNaN(d.getTime());
exports.isValidDate = isValidDate;
//# sourceMappingURL=util.js.map