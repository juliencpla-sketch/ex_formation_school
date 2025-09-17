import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateStudentDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  lastName: string;

  @IsDate()
  @IsOptional()
  dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  discordWehBook?: string;

  @IsNumber()
  @IsOptional()
  groupeId: number;
}
