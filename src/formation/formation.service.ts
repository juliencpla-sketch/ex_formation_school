import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation } from './interfaces/formation.interfaces';

@Injectable()
export class FormationService {
  private formations: Formation[] = [
    { id: 1, name: 'NextJS', createdAt: new Date(), updatedAt: new Date() },
    { id: 2, name: 'Javascript', createdAt: new Date(), updatedAt: new Date() },
    { id: 3, name: 'Html', createdAt: new Date(), updatedAt: new Date() },
    { id: 5, name: 'React', createdAt: new Date(), updatedAt: new Date() },
  ];
  private currentId = Math.max(...this.formations.map((f) => f.id, 0));

  // GET /formations - Récupérer toutes les formations
  findAll(): Formation[] {
    return this.formations;
  }

  //GET /formations - Récupérer une formation par son ID
  findOne(id: number): Formation {
    const formation = this.formations.find((f) => f.id === id);
    if (!formation) {
      throw new NotFoundException(`Formation avec l'id ${id} introuvable.`);
    }
    return formation;
  }

  //POST /formations - Créer une formation
  create(createFormationDto: CreateFormationDto): Formation {
    this.currentId++;
    const newFormation: Formation = {
      id: this.currentId,
      name: createFormationDto.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.formations.push(newFormation);
    return newFormation;
  }

  //PUT /formations/:id Mettre à jour une formation existante
  update(id: number, name: string): Formation {
    // return `This action updates a #${id} formation`;
    const formation: Formation = this.findOne(id);
    formation.name = name;
    formation.updatedAt = new Date();
    return formation;
  }

  //DELETE /formations/:id Supprimer une formation
  remove(id: number) {
    const formation: Formation = this.findOne(id);
    const index = this.formations.findIndex((f) => f.id === id);
    this.formations.splice(index, 1);
    return formation;

    //return `This action removes a #${id} formation`;
  }
}
