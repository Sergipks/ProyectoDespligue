import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {
  @Prop({
    required: true,
    min: 1,
    max: 20,
  })
  login: string;

  @Prop({
    required: true,
  })
  password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
