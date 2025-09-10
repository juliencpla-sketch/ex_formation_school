import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { FormationService } from './formation.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import type { Formation } from './interfaces/formation.interfaces';
import { StudentService } from 'src/student/student.service';

@Controller('formations')
export class FormationController {
  constructor(
    private readonly formationService: FormationService,
    private readonly studentService: StudentService,
  ) {}

  @Post()
  create(@Body() createFormationDto: CreateFormationDto): Formation {
    return this.formationService.create(createFormationDto);
  }

  @Get()
  findAll(): Formation[] {
    return this.formationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.formationService.findOne(+id);

    //------------------------------------

    //Code correction du 10/09

    const formation = this.formationService.findOne(+id);
    if (!formation) throw new NotFoundException('Formation not found');
    return { data: { formation }, message: `Voici la formation ${formation}` };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFormationDto: UpdateFormationDto,
  ) {
    return this.formationService.update(+id, updateFormationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formationService.remove(+id);
  }
}
