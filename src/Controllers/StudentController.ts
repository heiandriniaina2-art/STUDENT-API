import { Request, Response, NextFunction } from 'express';
import { studentRepository } from '../Repository/StudentRepository';
import { CustomError } from '../Interface/StudentInterface';

export const getAllStudents = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const students = studentRepository.findAll();
        res.status(200).json({ success: true, count: students.length, data: students });
    } catch (error) {
        next(error);
    }
};

export const getStudentById = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const id = parseInt(<string>req.params['id'], 10);
        const student = studentRepository.findById(id);

        if (!student) {
            const err = new Error(`Étudiant avec l'ID ${req.params['id']} introuvable !`) as CustomError;
            err.statusCode = 404;
            throw err;
        }

        res.status(200).json({ success: true, data: student });
    } catch (error) {
        next(error);
    }
};

export const createStudent = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { firstName, lastName, email, age } = req.body;

        if (!firstName || !lastName || !email) {
            const err = new Error("Les champs firstName, lastName et email sont obligatoires !") as CustomError;
            err.statusCode = 400;
            throw err;
        }

        const newStudent = studentRepository.create({ firstName, lastName, email, age });
        res.status(201).json({ success: true, message: "Étudiant créé avec succès !", data: newStudent });
    } catch (error) {
        next(error);
    }
};

export const updateStudent = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const id = parseInt(<string>req.params['id'], 10);
        const updatedStudent = studentRepository.update(id, req.body);

        if (!updatedStudent) {
            const err = new Error(`Impossible de mettre à jour : Étudiant ${req.params['id']} introuvable`) as CustomError;
            err.statusCode = 404;
            throw err;
        }

        res.status(200).json({ success: true, message: "Étudiant mis à jour !", data: updatedStudent });
    } catch (error) {
        next(error);
    }
};

export const deleteStudent = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const id = parseInt(<string>req.params['id'], 10);
        const deleted = studentRepository.delete(id);

        if (!deleted) {
            const err = new Error(`Impossible de supprimer : Étudiant ${req.params['id']} introuvable`) as CustomError;
            err.statusCode = 404;
            throw err;
        }

        res.status(200).json({ success: true, message: "Étudiant supprimé avec succès !" });
    } catch (error) {
        next(error);
    }
};