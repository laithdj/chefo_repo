export class Course {
    name: string;
    description: string;
    instructor: string;
    price?: number;
    category: string;
    courseCategory: string;
    students: string;
    rating: string;
    _id: string;
    created_at: any;
    __v: number;
}
export class Instructor {
    name: string;
    description: string;
    courses: string;
    rating: number;
    _id: string;
    created_at: number;
    __v: number;
}