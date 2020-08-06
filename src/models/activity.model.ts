import { BaseModel } from "./base.model";
import { Table, Comment, Column } from "sequelize-typescript";

@Table({
  tableName: "activities"
})
export class Activity extends BaseModel<Activity> {

  @Comment('活动名称')
  @Column
  name: string;

  @Comment('活动开始时间')
  @Column
  beginDate: Date;

  @Comment('活动结束时间')
  @Column
  endDate: Date;

}