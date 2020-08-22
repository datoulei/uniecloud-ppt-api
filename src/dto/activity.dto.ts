import { IsDefined, IsDateString } from "class-validator";
export class ActivityDto {
  @IsDefined()
  name: string;
  
  @IsDateString()
  startTime: string;
  
  @IsDateString()
  endTime: string;
  
}