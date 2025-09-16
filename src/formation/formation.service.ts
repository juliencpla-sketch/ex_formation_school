import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { IFormation } from './interfaces/formation.interfaces';
import { PrismaService } from 'prisma/prisma.service';
import { Formation } from '@prisma/client';

@Injectable()
export class FormationService {
  constructor(private readonly prisma: PrismaService) {}

  // GET /formations - Récupérer toutes les formations
  async findAll(): Promise<Formation[]> {
    return this.prisma.formation.findMany();
  }

  //GET /formations - Récupérer une formation par son ID
  async findOne(id: number): Promise<Formation> {
    const formation = await this.prisma.formation.findUnique({ where: { id } });
    if (!formation) {
      throw new NotFoundException(`Formation avec l'id ${id} introuvable.`);
    }
    return formation;
  }

  //POST /formations - Créer une formation
  async create(createFormationDto: CreateFormationDto): Promise<Formation> {
    return this.prisma.formation.create({
      data: createFormationDto,
    });
  }

  //PUT /formations/:id Mettre à jour une formation existante
  async update(
    id: number,
    updateFormationDto: UpdateFormationDto,
  ): Promise<Formation> {
    try {
      return this.prisma.formation.update({
        where: { id },
        data: { name: updateFormationDto.name },
      });
    } catch {
      throw new NotFoundException(`Formation ${id} introuvable.`);
    }
  }

  //DELETE /formations/:id Supprimer une formation
  async remove(id: number): Promise<Formation> {
    try {
      return this.prisma.formation.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`Formation ${id} introuvable.`);
    }
  }
}
