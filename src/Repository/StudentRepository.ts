export class StudentRepository {
    private students: any[] = [];

    findAll(): any[] {
        return this.students;
    }

    findById(id: number): any | null {
        return this.students.find(s => s.id === id) || null;
    }

    create(studentData: any): any {
        const newStudent = { id: Date.now(), ...studentData };
        this.students.push(newStudent);
        return newStudent;
    }

    update(id: number, studentData: any): any | null {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) return null;
        this.students[index] = { ...this.students[index], ...studentData };
        return this.students[index];
    }

    delete(id: number): any | null {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) return null;
        const deletedStudent = this.students[index];
        this.students.splice(index, 1);
        return deletedStudent;
    }
}

export const studentRepository = new StudentRepository();

