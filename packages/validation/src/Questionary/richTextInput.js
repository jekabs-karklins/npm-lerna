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
exports.richTextInputQuestionValidationSchema = void 0;
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const Yup = __importStar(require("yup"));
// options to remove all html tags and get only text characters count
const sanitizerValidationConfig = {
    allowedTags: [],
    disallowedTagsMode: 'discard',
    allowedAttributes: {},
    allowedStyles: {},
    selfClosing: [],
    allowedSchemes: [],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [],
};
const sanitizeHtmlAndCleanText = (htmlString) => {
    const sanitized = (0, sanitize_html_1.default)(htmlString, sanitizerValidationConfig);
    /**
     * NOTE:
     * 1. Remove all newline characters from counting.
     * 2. Replace the surrogate pairs(emojis) with _ and count them as one character instead of two ("😀".length = 2).
     *    https://stackoverflow.com/questions/31986614/what-is-a-surrogate-pair
     */
    const sanitizedCleaned = sanitized
        .replace(/(\r\n|\n|\r)/gm, '')
        .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_')
        .trim();
    return sanitizedCleaned;
};
const richTextInputQuestionValidationSchema = (field) => {
    let schema = Yup.string().transform(function (value) {
        return sanitizeHtmlAndCleanText(value);
    });
    const config = field.config;
    if (config.required) {
        schema = schema.required('This is a required field');
    }
    if (config.max) {
        schema = schema.max(config.max, `Value must be at most ${config.max} characters`);
    }
    return schema;
};
exports.richTextInputQuestionValidationSchema = richTextInputQuestionValidationSchema;
//# sourceMappingURL=richTextInput.js.map