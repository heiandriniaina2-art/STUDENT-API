import { Student } from '../Interface/StudentInterface';

let students: Student[] = [
    { id: 1, firstName: "Ada", lastName: "Lovelace", email: "ada@dev.com", age: 22 },
    { id: 2, firstName: "Alan", lastName: "Turing", email: "alan@enigma.org", age: 24 }
];

let nextId: number = 3;

export const StudentModel = {
    findAll: (): Student[] => students,

    findById: (id: number): Student | undefined => students.find(s => s.id === id),

    create: (data: Omit<Student, 'id'>): Student => {
        const newStudent: Student = { id: nextId++, ...data };
        students.push(newStudent);
        return newStudent;
    },

    update: (id: number, data: Partial<Omit<Student, 'id'>>): Student | null => {
        const index = students.findIndex(s => s.id === id);
        if (index === -1) return null;
        students[index] = { ...students[index], ...data };
        return students[index];
    },

    delete: (id: number): boolean => {
        const index = students.findIndex(s => s.id === id);
        if (index === -1) return false;
        students.splice(index, 1);
        return true;
    }
};