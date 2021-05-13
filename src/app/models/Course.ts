import { VideoItems } from "./Video";

export class Course {
    _id:number;
    name?: string;
    description?: string;
    instructor?: string;
    instructorId?: number;
    price?: string;
    category?: string;
    courseCategory?: string[];
    courseVids?: VideoItems[];
    image?:any;
    students?: number;
    rating?: number;
    productImage?:any;
}
