import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./create-student.input";
import { StudentService } from "./student.service";
import { Student } from "./student.entity";

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private StudentService: StudentService,
    ){}
    @Query(returns => StudentType)
    async student( 
        @Args('id') id: string,
        ){
            return this.StudentService.getStudent(id);
        }
    @Query(returs => [StudentType])
    async students(){
        return this.StudentService.getStudents();
    }
    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createStudentInput') CreateStudentInput: CreateStudentInput
    ){
        return this.StudentService.createStudent(CreateStudentInput);
    }
}