import { IsDefined, IsDateString } from "class-validator";
export class ActivityDto {
  @IsDefined()
  name: string;
  
  @IsDateString()
  startDate: string;
  
  @IsDateString()
  endDate: string;
  
}