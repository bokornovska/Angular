import { UserId } from "./user-id"

export interface ThemeIn {
    
        "subscribers": string[];
        "posts": string[];
        "_id": string;
        "themeName": string;
        "userId": string;
        "created_at": string;
        "updatedAt": string;
        "__v": number;
}
export interface Post {

    "likes": string[];
    "_id": string;
    "text": string;
    "userId": UserId;
    "themeId": ThemeIn;
    "created_at": string;
    "updatedAt": string;
    "__v": number
}