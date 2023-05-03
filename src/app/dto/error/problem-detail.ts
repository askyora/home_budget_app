import { Error } from "./error";

export interface ProblemDetail {
    name:string;
    message:string;
    title:string;
    status:string;
    statusText:string;
    error?:Error;
    success?:string;
}
