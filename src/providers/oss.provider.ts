import { ConfigService } from "../config/config.service";
import * as OSS from 'ali-oss'

export const OssProvider = {
  provide: 'OSS_SERVICE',
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    const client = new OSS(config.oss)
    return client
  },
}
