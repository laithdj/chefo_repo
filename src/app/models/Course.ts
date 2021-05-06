import { VideoItems } from "./Video";

export class Course {
    _id:number;
    name?: string;
    description?: string;
    instructor?: string;
    price?: string;
    category?: string;
    courseCategory?: string[];
    courseVids?: VideoItems[];
    image?:string;
    students?: number;
    rating?: number;
    productImage?:any;
}