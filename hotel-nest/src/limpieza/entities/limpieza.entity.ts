import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';

@Schema()
export class Limpieza extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: Habitacion.name,
    required: true,
  })
  habitacion: Habitacion | Types.ObjectId;

  @Prop({
    type: Date,
    default: Date.now,
    required: true,
  })
  fecha: Date;

  @Prop({
    type: String,
  })
  observaciones: string;
}

export const LimpiezaSchema = SchemaFactory.createForClass(Limpieza);
