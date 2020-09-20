import { BaseModel } from "./base.model";
import { Table, Comment, Column, Default } from "sequelize-typescript";

@Table({
  tableName: "ppt_main_schedules"
})
export class MainSchedule extends BaseModel<MainSchedule> {

  @Comment('屏幕id')
  @Column
  screenId: number;

  @Comment('主日程名称')
  @Column
  name: string;

  @Comment('开始时间')
  @Column
  startTime: string;

  @Comment('结束时间')
  @Column
  endTime: string;

  @Comment('排序值')
  @Default(0)
  @Column
  order: number;
  
}