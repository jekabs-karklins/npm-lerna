import * as Yup from 'yup';
export declare const createTemplateValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    description: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    description: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    description: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>>;
export declare const cloneTemplateValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const deleteTemplateValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const createTopicValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    sortOrder: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    sortOrder: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    sortOrder: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const updateTopicValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    title: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    isEnabled: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    title: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    isEnabled: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    id: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    title: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    isEnabled: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>>;
export declare const deleteTopicValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const createQuestionValidationSchema: (dataType: any) => Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    dataType: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    dataType: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    dataType: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>>;
export declare const updateQuestionValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    naturalKey: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    question: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    config: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    naturalKey: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    question: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    config: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    naturalKey: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    question: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    config: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}>>>;
export declare const deleteQuestionValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const updateQuestionTemplateRelationValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    sortOrder: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    config: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    dependency: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape> | null>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    sortOrder: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    config: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    dependency: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape> | null>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    sortOrder: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    config: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    dependency: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape> | null>;
}>>>;
export declare const deleteQuestionTemplateRelationValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
export declare const updateTopicOrderValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    topicOrder: Yup.ArraySchema<Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined, (number | undefined)[] | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    topicOrder: Yup.ArraySchema<Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined, (number | undefined)[] | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    topicOrder: Yup.ArraySchema<Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>, import("yup/lib/types").AnyObject, (number | undefined)[] | undefined, (number | undefined)[] | undefined>;
}>>>;
export declare const updateQuestionsTopicRelsValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    questionIds: import("yup/lib/array").RequiredArraySchema<Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    questionIds: import("yup/lib/array").RequiredArraySchema<Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    questionIds: import("yup/lib/array").RequiredArraySchema<Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>, import("yup/lib/types").AnyObject, (string | undefined)[] | undefined>;
}>>>;
export declare const updateTemplateValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    name: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    description: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    isArchived: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    name: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    description: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    isArchived: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    name: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    description: Yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    isArchived: Yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
}>>>;
export declare const createQuestionTemplateRelationValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    sortOrder: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    sortOrder: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    templateId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    questionId: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    sortOrder: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    topicId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
}>>>;
