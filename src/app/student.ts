export class Student {
    public constructor(init?: Partial<Student >) {
        Object.assign(this, init);
    }
    firstName: string;
    lastName: string;
    rollNo: string;
}
