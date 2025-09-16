import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormationModule } from './formation/formation.module';
import { GroupeModule } from './groupe/groupe.module';
import { StudentModule } from './student/student.module';
import { TeamMemberModule } from './team-member/team-member.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    FormationModule,
    GroupeModule,
    StudentModule,
    TeamMemberModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
