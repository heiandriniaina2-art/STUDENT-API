import { Student, IStudentRepository } from '../Interface/StudentInterface';

export class StudentRepository implements IStudentRepository {
    private students: Student[] = [
        { id: 1, firstName: "Ada", lastName: "Lovelace", email: "ada@dev.com", age: 22 },
        { id: 2, firstName: "Alan", lastName: "Turing", email: "alan@enigma.org", age: 24 }
    ];
    private nextId: number = 3;

    findAll(): Student[] {
        return this.students;
    }

    findById(id: number): Student | undefined {
        return this.students.find(s => s.id === id);
    }

    create(data: Omit<Student, 'id'>): Student {
        const newStudent: Student = { id: this.nextId++, ...data };
        this.students.push(newStudent);
        return newStudent;
    }

    update(id: number, data: Partial<Omit<Student, 'id'>>): Student | null {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) return null;
        this.students[index] = { ...this.students[index], ...data };
        return this.students[index];
    }

    delete(id: number): boolean {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) return false;
        this.students.splice(index, 1);
        return true;
    }
}

export const studentRepository = new StudentRepository();