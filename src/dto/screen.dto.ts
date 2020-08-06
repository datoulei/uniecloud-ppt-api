import {  IsDefined, IsOptional } from "class-validator";
export class ScreenDto {
  @IsDefined()
  name: string;
  
  @IsDefined()
  displayName: string;

  @IsDefined()
  date: string;

  @IsOptional()
  logo: string;

  @IsOptional()
  style: string;

  activityId: string;
  loginCode: string;
  
}