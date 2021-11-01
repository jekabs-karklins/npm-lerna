declare type KEY = string | number | symbol;
interface Dictionary<K extends KEY, V> {
    getKeys(): K[];
    getValues(): V[];
    get(key: K): V | null;
    put(key: K, val: V): void;
}
export declare class JSDict<K extends KEY, V> implements Dictionary<K, V> {
    static Create<Keys extends KEY, Values>(): JSDict<Keys, Values>;
    private dict;
    constructor();
    getKeys(): K[];
    getValues(): V[];
    get(key: K): V | null;
    put(key: K, val: V): void;
    private exists;
}
export declare type ResourceId = 'ACCOUNT_EXIST' | 'BAD_TOKEN' | 'COULD_NOT_FIND_USER_BY_EMAIL' | 'COULD_NOT_VERIFY_USER' | 'EMAIL_NOT_VERIFIED' | 'INSUFFICIENT_PERMISSIONS' | 'INTERNAL_ERROR' | 'NO_ACTIVE_CALL_FOUND' | 'NO_PROPOSER_ON_THE_PROPOSAL' | 'NOT_ALLOWED_PROPOSAL_SUBMITTED' | 'NOT_ALLOWED' | 'NOT_AUTHORIZED' | 'NOT_LOGGED_IN' | 'NOT_LOGGED' | 'NOT_REVIEWER_OF_PROPOSAL' | 'NOT_USER_OFFICER' | 'ORCID_HASH_MISMATCH' | 'PROPOSAL_DOES_NOT_EXIST' | 'TOO_SHORT_ABSTRACT' | 'TOO_SHORT_NAME' | 'TOO_SHORT_TITLE' | 'USER_DOES_NOT_EXIST' | 'VALUE_CONSTRAINT_REJECTION' | 'WRONG_EMAIL_OR_PASSWORD' | 'UNFEASIBLE' | 'PARTIALLY_FEASIBLE' | 'FEASIBLE' | 'NOT_FOUND' | 'UPDATED' | 'ACCEPTED' | 'REJECTED' | 'RESERVED' | 'SCHEDULED_EVENT_OVERLAP';
export declare function getTranslation(id: ResourceId): string;
export {};
