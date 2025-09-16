import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStudentDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly dateOfBirth?: Date;
  readonly discordWebHook?: string;
  readonly groupeId?: number;
}
