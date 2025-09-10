import { Module } from '@nestjs/common';
import { FormationService } from './formation.service';
import { FormationController } from './formation.controller';
import { StudentModule } from 'src/student/student.module';

@Module({
  controllers: [FormationController],
  providers: [FormationService],
  imports: [StudentModule],
})
export class FormationModule {}
