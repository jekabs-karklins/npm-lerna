import * as Yup from 'yup';
export declare const createScheduledEventValidationSchema: (bookingTypesMap: Record<string, string>) => Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    bookingType: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    description: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    bookingType: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    description: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    bookingType: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    description: Yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}>>>;
export declare const bulkUpsertScheduledEventsValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalBookingId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    scheduledEvents: Yup.ArraySchema<Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>[] | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>[] | undefined>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalBookingId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    scheduledEvents: Yup.ArraySchema<Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>[] | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>[] | undefined>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    proposalBookingId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    scheduledEvents: Yup.ArraySchema<Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>>, import("yup/lib/types").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>[] | undefined, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
        startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
        endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    }>>[] | undefined>;
}>>>;
export declare const updateScheduledEventValidationSchema: Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    scheduledEventId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    scheduledEventId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    scheduledEventId: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    startsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    endsAt: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
}>>>;
