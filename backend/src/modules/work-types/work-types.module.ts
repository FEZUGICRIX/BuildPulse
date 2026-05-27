import { Module } from '@nestjs/common';
import { WorkTypesController } from './work-types.controller';
import { WorkTypesService } from './work-types.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WorkTypesController],
  providers: [WorkTypesService],
})
export class WorkTypesModule {}
