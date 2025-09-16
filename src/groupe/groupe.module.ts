import { Module } from '@nestjs/common';
import { GroupeService } from './groupe.service';
import { GroupeController } from './groupe.controller';
import { StudentModule } from 'src/student/student.module';

@Module({
  controllers: [GroupeController],
  providers: [GroupeService],
  imports: [StudentModule],
})
export class GroupeModule {}
