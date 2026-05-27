import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { WorkTypesModule } from '@/modules/work-types/work-types.module';
import { WorkLogsModule } from '@/modules/work-logs/work-logs.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './core/config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot(appConfig),
    PrismaModule,
    WorkTypesModule,
    WorkLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
