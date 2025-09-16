import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupeService } from './groupe.service';
import { CreateGroupeDto } from './dto/create-groupe.dto';
import { UpdateGroupeDto } from './dto/update-groupe.dto';

@Controller('groupe')
export class GroupeController {
  constructor(private readonly groupeService: GroupeService) {}

  @Post()
  async create(@Body() createGroupeDto: CreateGroupeDto) {
    return this.groupeService.create(createGroupeDto);
  }

  @Get()
  async findAll() {
    return this.groupeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.groupeService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGroupeDto: UpdateGroupeDto,
  ) {
    return this.groupeService.update(+id, updateGroupeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.groupeService.remove(+id);
  }
}
