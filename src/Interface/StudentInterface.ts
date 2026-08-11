export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age?: number;
}

export interface CustomError extends Error {
    statusCode?: number;
}

export interface IStudentRepository {
    findAll(): Student[];
    findById(id: number): Student | undefined;
    create(data: Omit<Student, 'id'>): Student;
    update(id: number, data: Partial<Omit<Student, 'id'>>): Student | null;
    delete(id: number): boolean;
}