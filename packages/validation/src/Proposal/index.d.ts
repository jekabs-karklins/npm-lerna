import * as Yup from 'yup';
export declare const createProposalValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const updateProposalValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    title: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    abstract: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    answers: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    topicsCompleted: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    users: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    proposerId: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    partialSave: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    title: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    abstract: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    answers: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    topicsCompleted: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    users: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    proposerId: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    partialSave: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    title: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    abstract: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    answers: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    topicsCompleted: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    users: Yup.ArraySchema<Yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[] | undefined, any[] | undefined>;
    proposerId: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    partialSave: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>>;
export declare const submitProposalValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const deleteProposalValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const proposalNotifyValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const administrationProposalValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    statusId: Yup.NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
    finalStatus: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    commentForUser: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    commentForManagement: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    rankOrder: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    managementTimeAllocation: Yup.NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
    managementDecisionSubmitted: Yup.BooleanSchema<boolean | null | undefined, import("yup/lib/types").AnyObject, boolean | null | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    statusId: Yup.NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
    finalStatus: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    commentForUser: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    commentForManagement: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    rankOrder: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    managementTimeAllocation: Yup.NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
    managementDecisionSubmitted: Yup.BooleanSchema<boolean | null | undefined, import("yup/lib/types").AnyObject, boolean | null | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalPk: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    statusId: Yup.NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
    finalStatus: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    commentForUser: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    commentForManagement: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
    rankOrder: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    managementTimeAllocation: Yup.NumberSchema<number | null | undefined, import("yup/lib/types").AnyObject, number | null | undefined>;
    managementDecisionSubmitted: Yup.BooleanSchema<boolean | null | undefined, import("yup/lib/types").AnyObject, boolean | null | undefined>;
}>>>;
export declare const generalInfoUpdateValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    abstract: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    abstract: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    abstract: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>>;
