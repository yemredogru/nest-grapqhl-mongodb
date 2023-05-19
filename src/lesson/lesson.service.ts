import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,

    ){}
    async createLesson(name, startDate, endDate): Promise<Lesson> {
        const lesson = this.lessonRepository.create({
            name,
            startDate,
            endDate
        });

        return this.lessonRepository.save(lesson);

    }
}
