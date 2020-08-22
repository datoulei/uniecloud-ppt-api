import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { LoggerProvider } from './providers/logger.provider'
import { AppService } from './services/app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseProvider } from './providers/database.provider';
import { ActivityController } from './controllers/activity.controller';
import { ScreenController } from './controllers/screen.controller';
import { MainScheduleController } from './controllers/main-schedule.controller';
import { SubScheduleController } from './controllers/sub-schedule.controller';
import { FileController } from './controllers/file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule,
    MulterModule.register({
      dest: './public'
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [
    AppController,
    ActivityController,
    ScreenController,
    MainScheduleController,
    SubScheduleController,
    FileController,
  ],
  providers: [
    DatabaseProvider,
    LoggerProvider,
    AppService
  ],
})
export class AppModule {}
