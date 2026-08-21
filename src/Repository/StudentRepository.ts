import { Student } from '../Model/StudentModel';\n\nexport class StudentRepository {\n  private students: Student[] = [];\n\n  async findAll(): Promise<Student[]> {\n    return this.students;\n  }\n}
