import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupeDto } from './dto/create-groupe.dto';
import { UpdateGroupeDto } from './dto/update-groupe.dto';
import { PrismaService } from 'prisma/prisma.service';
import { IGroupe } from './interfaces/group.interface';
import { Groupe } from '@prisma/client';

@Injectable()
export class GroupeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Groupe[]> {
    return this.prisma.groupe.findMany();
  }

  async findOne(id: number): Promise<Groupe> {
    const groupe = await this.prisma.groupe.findUnique({ where: { id } });
    if (!groupe) {
      throw new NotFoundException(`Groupe avec l'id ${id} introuvable.`);
    }
    return groupe;
  }
  async create(createGroupeDto: CreateGroupeDto): Promise<Groupe> {
    return this.prisma.groupe.create({
      data: {
        name: createGroupeDto.name,
        formationId: createGroupeDto.formationId,
        //leadId: createGroupeDto.leadId, // number | undefined → valide
      },
      include: { formation: true, Student: true },
    });
  }

  async update(id: number, updateGroupeDto: UpdateGroupeDto) {
    try {
      return this.prisma.formation.update({
        where: { id },
        data: { name: updateGroupeDto.name },
      });
    } catch {
      throw new NotFoundException(`Formation ${id} introuvable.`);
    }
  }

  async remove(id: number) {
    try {
      return this.prisma.formation.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`Formation ${id} introuvable.`);
    }
  }
}
