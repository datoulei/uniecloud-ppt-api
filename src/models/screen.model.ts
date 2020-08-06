import { BaseModel } from "./base.model";
import { Table, Comment, Column, Default } from "sequelize-typescript";

@Table({
  tableName: "screens"
})
export class Screen extends BaseModel<Screen> {

  @Comment('活动id')
  @Column
  activityId: number;

  @Comment('屏幕名称')
  @Column
  name: string;

  @Comment('显示名称')
  @Column
  displayName: string;

  @Comment('日期')
  @Column
  date: string;

  @Comment('logo')
  @Column
  logo: string;

  @Comment('显示风格')
  @Column
  style: string;

  @Comment('登录码')
  @Column
  loginCode: string;

  @Comment('主日程数量')
  @Default(0)
  @Column
  mainScheduleCount: number;
  
  @Comment('PPT数量')
  @Default(0)
  @Column
  pptCount: number;
}