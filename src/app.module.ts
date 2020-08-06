import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { LoggerProvider } from './providers/logger.provider'
import { AppService } from './services/app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseProvider } from './providers/database.provider';

@Module({
  imports: [
    ConfigModule
  ],
  controllers: [AppController],
  providers: [
    DatabaseProvider,
    LoggerProvider,
    AppService
  ],
})
export class AppModule {}
