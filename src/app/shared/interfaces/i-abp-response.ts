export interface IAbpResponse<Type> {
    result: Type;
    targetUrl?: string;
    success?: boolean;
    error?: any;
    unAuthorizedRequest?: boolean;
    __abp?: boolean;
}
