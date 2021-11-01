import * as Yup from 'yup';
export declare const fileUploadQuestionValidationSchema: (field: any) => Yup.ArraySchema<import("yup/lib/object").RequiredObjectSchema<{
    id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<{
    id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>[] | undefined, import("yup/lib/object").AssertsShape<{
    id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>[] | undefined>;
