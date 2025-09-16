import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { FormationService } from './formation.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import type { IFormation } from './interfaces/formation.interfaces';
import { StudentService } from 'src/student/student.service';
import { Formation } from '@prisma/client';

@Controller('formations')
export class FormationController {
  constructor(
    private readonly formationService: FormationService,
    private readonly studentService: StudentService,
  ) {}

  @Post()
  async create(
    @Body() createFormationDto: CreateFormationDto,
  ): Promise<Formation> {
    return this.formationService.create(createFormationDto);
  }

  @Get()
  async findAll(): Promise<Formation[]> {
    return this.formationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Formation> {
    return this.formationService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateFormationDto,
  ): Promise<Formation> {
    return this.formationService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Formation> {
    return this.formationService.remove(Number(id));
  }
}
