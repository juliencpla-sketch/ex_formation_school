import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  dateOfBirth: Date;

  @IsString()
  @IsOptional()
  discordWehBook: string;

  @IsNumber()
  groupeId: number;
}
