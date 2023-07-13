import { UserId } from "./user-id";
import { Post } from "./post";

export interface Theme {
    "subscribers": string[];
    "posts": any;
    "_id": string;
    "themeName": string;
    "userId": UserId;
    "created_at": string;
    "updatedAt": string;
    "__v": number
}
