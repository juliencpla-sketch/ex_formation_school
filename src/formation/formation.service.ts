import { Injectable } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation } from './interfaces/formation.interfaces';

@Injectable()
export class FormationService {
  private readonly formations: Formation[] = [];
  private idCounter = 1;

  // GET /formations - Récupérer toutes les formations
  findAll(): Formation[] {
    return this.formations;
  }

  //GET /formations - Récupérer une formation par son ID
  findOne(id: number) {
    return `This action returns a #${id} formation`;
  }

  //POST /formations - Créer une formation
  create(createFormationDto: CreateFormationDto): Formation {
    const newFormation: Formation = {
      id: this.idCounter++,
      name: createFormationDto.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.formations.push(newFormation);
    return newFormation;
  }

  //PUT /formations/:id Mettre à jour une formation existante
  update(id: number, updateFormationDto: UpdateFormationDto) {
    return `This action updates a #${id} formation`;
  }

  //DELETE /formations/:id Supprimer une formation
  remove(id: number) {
    return `This action removes a #${id} formation`;
  }
}
