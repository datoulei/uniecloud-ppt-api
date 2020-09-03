import { BaseModel } from "./base.model";
import { Table, Comment, Column, Default } from "sequelize-typescript";

@Table({
  tableName: "ppt_sub_schedules"
})
export class SubSchedule extends BaseModel<SubSchedule> {

  @Comment('主日程id')
  @Column
  parentId: number;

  @Comment('子日程名称')
  @Column
  name: string;

  @Comment('开始时间')
  @Column
  startTime: string;

  @Comment('结束时间')
  @Column
  endTime: string;

  @Comment('头像')
  @Column
  avatar: string;

  @Comment('身份类型')
  @Column
  identity: string;

  @Comment('姓名')
  @Column
  guestName: string;

  @Comment('单位名称')
  @Column
  work: string;

  @Comment('ppt')
  @Column
  ppt: string;

  @Comment('ppt name')
  @Column
  pptName: string;

  @Comment('演讲时长')
  @Column
  minutes: number;

  @Comment('倒计时显示位置')
  @Default('rightTop')
  @Column
  position: string;

  @Comment('排序值')
  @Default(0)
  @Column
  order: number;
  
}