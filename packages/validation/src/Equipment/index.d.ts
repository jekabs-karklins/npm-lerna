import * as Yup from 'yup';
export declare const equipmentValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    maintenanceStartsAt: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    maintenanceEndsAt: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    maintenanceStartsAt: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    maintenanceEndsAt: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    maintenanceStartsAt: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    maintenanceEndsAt: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
}>>>;
