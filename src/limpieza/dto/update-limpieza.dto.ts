import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateLimpiezaDto {
  @IsOptional()
  @IsDateString()
  fecha?: Date;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
