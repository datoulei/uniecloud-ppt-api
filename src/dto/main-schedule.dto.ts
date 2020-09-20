import { IsDefined, IsDateString, IsOptional, Matches } from "class-validator";
export class MainScheduleDto {
  @IsDefined()
  name: string;
  
  @Matches(/\d{2}:\d{2}/, { message: '开始时间格式错误'})
  startTime: string;
  
  @Matches(/\d{2}:\d{2}/, { message: '开始时间格式错误'})
  endTime: string;

  @IsOptional()
  order: number;
  
  screenId: string;
  
}