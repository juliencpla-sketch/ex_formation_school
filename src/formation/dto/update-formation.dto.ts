import { PartialType } from '@nestjs/mapped-types';
import { CreateFormationDto } from './create-formation.dto';

export class UpdateFormationDto extends PartialType(CreateFormationDto) {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
