import { Student } from '../Model/StudentModel';\n\nexport interface IStudentService {\n  getStudentById(id: string): Promise<Student | null>;\n}
