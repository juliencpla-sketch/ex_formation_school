import { PartialType } from '@nestjs/mapped-types';
import { CreateFormationDto } from './create-formation.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateFormationDto extends PartialType(CreateFormationDto) {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
