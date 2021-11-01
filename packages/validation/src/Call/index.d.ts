import * as Yup from 'yup';
export declare const createCallValidationSchemas: (Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    shortCode: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    proposalWorkflowId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    shortCode: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    proposalWorkflowId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    shortCode: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    proposalWorkflowId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>> | Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    endSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    surveyComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    endSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    surveyComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    endSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    surveyComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>> | Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    cycleComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    cycleComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    cycleComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>>)[];
export declare const updateCallValidationSchemas: (Yup.ObjectSchema<{
    [x: string]: Yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>;
} & {
    shortCode: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    proposalWorkflowId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
} & import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    [x: string]: Yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>;
} & {
    shortCode: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    proposalWorkflowId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
} & import("yup/lib/object").ObjectShape> | null | undefined, import("yup/lib/object").AssertsShape<{
    [x: string]: Yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>;
} & {
    shortCode: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCall: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    proposalWorkflowId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
} & import("yup/lib/object").ObjectShape> | null | undefined> | Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    endSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    surveyComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    endSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    surveyComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endReview: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    endSEPReview: Yup.DateSchema<Date | null | undefined, import("yup/lib/types").AnyObject, Date | null | undefined>;
    surveyComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>> | Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    cycleComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    cycleComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    startNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endNotify: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    startCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endCycle: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    cycleComment: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>>)[];
export declare const assignInstrumentsToCallValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    instrumentIds: import("yup/lib/array").RequiredArraySchema<Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    instrumentIds: import("yup/lib/array").RequiredArraySchema<Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    instrumentIds: import("yup/lib/array").RequiredArraySchema<Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined>;
}>>>;
export declare const removeAssignedInstrumentFromCallValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    instrumentId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    instrumentId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    callId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    instrumentId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
