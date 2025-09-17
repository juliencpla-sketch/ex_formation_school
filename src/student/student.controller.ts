import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from '@prisma/client';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createFormationDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createFormationDto);
  }

  @Get('/all')
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get('/all/formation/:groupeId')
  findAllStudentsByGroup(@Param('groupeId', ParseIntPipe) groupeId: number) {
    return this.studentService.findAllStudentsByGroup(groupeId);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.update(Number(id), updateStudentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Student> {
    return this.studentService.remove(Number(id));
  }
}
