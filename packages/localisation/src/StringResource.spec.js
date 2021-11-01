"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringResources_1 = require("./StringResources");
test('Test translation', () => {
    expect((0, StringResources_1.getTranslation)('ACCOUNT_EXIST')).toBe('Account already exists');
});
//# sourceMappingURL=StringResource.spec.js.map