import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateGroupeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
