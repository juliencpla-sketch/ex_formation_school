import { Module } from '@nestjs/common';
import { FormationService } from './formation.service';
import { FormationController } from './formation.controller';
import { StudentModule } from 'src/student/student.module';
import { GroupeModule } from 'src/groupe/groupe.module';

@Module({
  controllers: [FormationController],
  providers: [FormationService],
  imports: [StudentModule, GroupeModule],
})
export class FormationModule {}
