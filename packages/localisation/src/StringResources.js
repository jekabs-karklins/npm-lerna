"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTranslation = exports.JSDict = void 0;
const EnDictionary_1 = require("./EnDictionary");
class JSDict {
    constructor() {
        this.dict = {};
    }
    static Create() {
        return new JSDict();
    }
    getKeys() {
        const keys = [];
        for (const key in this.dict) {
            if (this.dict.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    }
    getValues() {
        const vals = [];
        for (const key in this.dict) {
            if (this.dict.hasOwnProperty(key)) {
                const v = this.dict[key];
                if (this.exists(v)) {
                    vals.push(v);
                }
            }
        }
        return vals;
    }
    get(key) {
        const v = this.dict[key];
        return this.exists(v) ? v : null;
    }
    put(key, val) {
        this.dict[key] = val;
    }
    // Type predicate to ensure v exists
    exists(v) {
        return v != null && typeof v !== 'undefined';
    }
}
exports.JSDict = JSDict;
const dictionary = new EnDictionary_1.EnDictionary();
function getTranslation(id) {
    return dictionary.map.get(id) || id;
}
exports.getTranslation = getTranslation;
//# sourceMappingURL=StringResources.js.map