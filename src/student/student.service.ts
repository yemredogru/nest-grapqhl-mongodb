import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ){}
    async getStudent(id: string): Promise<Student> {
        return this.studentRepository.findOneBy({ id })
    }
    async createStudent(createStudentInput: CreateStudentInput): Promise<Student>{
        const {firstName, lastName} = createStudentInput
        const student = this.studentRepository.create({
            firstName,
            lastName,
        })
        return this.studentRepository.save(student);
    }
    async getStudents(): Promise<Student[]> {
        return this.studentRepository.find();
    }
    async getManyStudents(studentIds: string[]): Promise<Student[]> {
        return this.studentRepository.find({
            where:{
                ...studentIds.map(id=> ({id}))
            }
        })
    }
}
