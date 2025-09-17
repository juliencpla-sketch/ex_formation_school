import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateGroupeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  // @Min(1)
  // @Max(4)
  formationId: number;

  
}
