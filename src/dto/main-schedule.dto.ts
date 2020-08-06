import { IsDefined, IsDateString } from "class-validator";
export class MainScheduleDto {
  @IsDefined()
  name: string;
  
  @IsDateString()
  startDate: string;
  
  @IsDateString()
  endDate: string;

  screenId: string;
  
}