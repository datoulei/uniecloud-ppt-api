import { IsDefined, IsDateString, IsOptional } from "class-validator";
export class MainScheduleDto {
  @IsDefined()
  name: string;
  
  @IsDateString()
  startDate: string;
  
  @IsDateString()
  endDate: string;

  @IsOptional()
  order: number;
  
  screenId: string;
  
}