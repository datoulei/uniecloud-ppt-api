import { ConfigService } from '../config/config.service';
import { Sequelize } from 'sequelize-typescript';
import { Activity } from "../models/activity.model";
import { Screen } from "../models/screen.model";
import { MainSchedule } from '../models/main-schedule.model';
import { SubSchedule } from '../models/sub-schedule.model';

export const DatabaseProvider = {
  provide: 'SEQUELIZE',
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    const sequelize = new Sequelize(config.sequelize);
    sequelize.addModels([
      Activity,
      Screen,
      MainSchedule,
      SubSchedule
    ]);
    if (process.env.NODE_ENV !== 'production') {
      await sequelize.sync({
        alter: true,
      });
    }
    return sequelize;
  },
};
