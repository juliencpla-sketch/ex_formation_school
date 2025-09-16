/*export class CreateFormationDto {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}*/

import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
