import { IsDefined, IsDateString, IsString, Matches, IsOptional, IsUrl, IsInt, IsIn } from "class-validator";
export class SubScheduleDto {
  @IsDefined()
  name: string;
  
  @IsString()
  @Matches(/^\d{2}:\d{2}$/, { message: '时间格式应为HH:mm' })
  startTime: string;
  
  @IsString()
  @Matches(/^\d{2}:\d{2}$/, { message: '时间格式应为HH:mm' })
  endTime: string;

  @IsOptional()
  avatar: string;
  
  @IsOptional()
  identity: string;
  
  @IsOptional()
  guestName: string;
  
  @IsOptional()
  work: string;
  
  @IsOptional()
  ppt: string;

  @IsInt()
  minutes: number;

  @IsIn(['rightTop', 'rightBottom', 'leftTop', 'leftBottom'], { message: '显示位置必须为[rightTop, rightBottom, leftTop, leftBottom]之一'})
  position: string;

  @IsOptional()
  order: number;
  
  parentId: string;
  
}