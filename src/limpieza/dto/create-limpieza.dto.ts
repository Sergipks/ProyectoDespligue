import { IsDateString, IsMongoId, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateLimpiezaDto {
  @IsMongoId()
  readonly habitacion: string | Types.ObjectId;

  @IsDateString()
  readonly fecha: Date;

  @IsOptional()
  @IsString()
  readonly observaciones?: string;
}
