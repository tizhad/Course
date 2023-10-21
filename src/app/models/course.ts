export class Course {
    name: string;
    id: string;
    description: string;
    image: string;
    pricing: Price[];
    enrollDate: string;
    updatedAt: string;
    createdAt: string;
    publishDate: string;
}

export class Price {
    value: number;
    currency: number
}

export class UserData {
    name: string;
    email: string;
    password: string;
    courseList: Course[];
}

export enum SortOptions {
    NAME = 'NAME',
    DESCRIPTION = 'DESCRIPTION',
    PRICE = 'PRICE'
}
