import { Controller, Get, OnApplicationBootstrap, Put } from '@nestjs/common';
import { UtilService } from '../services/util.service'
import { LoggerService } from 'nest-logger';
import * as moment from 'moment'

@Controller()
export class AppController implements OnApplicationBootstrap {
  private code: string;

  constructor(
    private readonly logger: LoggerService
  ) {
    this.code = UtilService.randomCharAndNumber(8)
    
  }
  onApplicationBootstrap() {
    this.logger.info(`登录验证码：${this.code}`)
  }

  @Get()
  getHello(): string {
    return 'Application now at ' + moment().format('YYYY-MM-DD HH:mm:ss')
  }

  @Get('/code')
  getCode(): string {
    return this.code
  }

  @Get('/refresh_code')
  refreshCode(): string {
    this.code = UtilService.randomCharAndNumber(8)
    return this.code
  }
}
