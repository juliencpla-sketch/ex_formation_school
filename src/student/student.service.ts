import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Student } from '@prisma/client';
import { CreateFormationDto } from 'src/formation/dto/create-formation.dto';
import { UpdateFormationDto } from 'src/formation/dto/update-formation.dto';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  //GET /formations - Récupérer une formation par son ID
  async findOne(id: number): Promise<Student> {
    const formation = await this.prisma.student.findUnique({ where: { id } });
    if (!formation) {
      throw new NotFoundException(`Student with id ${id} not found.`);
    }
    return formation;
  }

  findAllStudentsByGroup(groupeId: number) {
    return this.prisma.student.findMany({ where: { groupeId } });
  }

  //POST /formations - Créer une formation
  async create(data: CreateStudentDto): Promise<Student> {
    return this.prisma.student.create({
      data,
    });
  }

  //PUT /formations/:id Mettre à jour une formation existante
  async update(id: number, data: UpdateStudentDto) {
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student) {
      throw new NotFoundException(
        'No student with this ID, plz try another one.',
      );
    }
    return this.prisma.student.update({
      where: { id },
      data,
    });
  }

  //DELETE /formations/:id Supprimer une formation
  async remove(id: number): Promise<Student> {
    try {
      return await this.prisma.student.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`Student ${id} not found.`);
    }
  }
}
