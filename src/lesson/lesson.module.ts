import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { StudentModule } from 'src/student/student.module';
import { LessonService } from './lesson.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Lesson
        ]),
        StudentModule
    ],
    providers: [
        LessonResolver,
        LessonService
    ]
})
export class LessonModule {}
