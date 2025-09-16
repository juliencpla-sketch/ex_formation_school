import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGroupeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  formationId: number;
}
