import { BaseModel } from "./base.model";
import { Table, Comment, Column, DataType } from "sequelize-typescript";
import * as moment from 'moment';

export enum ActivityStatus {
  apply = 0,
  reject = -1,
  todo = 1,
  doing = 2,
  done = 3,
}

@Table({
  tableName: "activities"
})
export class Activity extends BaseModel<Activity> {

  @Comment('活动名称')
  @Column
  name: string;

  @Comment('活动开始时间')
  @Column
  startTime: Date;

  @Comment('活动结束时间')
  @Column
  endTime: Date;

  @Column({
    type: DataType.VIRTUAL,
    get(this: Activity): any {
      const startTime = this.getDataValue('startTime');
      const endTime = this.getDataValue('endTime')
        const today = moment()
        if (today.isBefore(moment(startTime))) {
          return ActivityStatus.todo
        } else if (today.isBefore(moment(endTime))) {
          return ActivityStatus.doing
        } else {
          return ActivityStatus.done
        }
    },
  })
  status: ActivityStatus;

}