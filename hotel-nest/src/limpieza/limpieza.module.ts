import { Module } from '@nestjs/common';
import { LimpiezaService } from './limpieza.service';
import { LimpiezaController } from './limpieza.controller';
import { HabitacionSchema } from 'src/habitacion/entities/habitacion.entity';
import { LimpiezaSchema } from './entities/limpieza.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'habitaciones',
        schema: HabitacionSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'limpiezas',
        schema: LimpiezaSchema,
      },
    ]),
  ],
  controllers: [LimpiezaController],
  providers: [LimpiezaService],
})
export class LimpiezaModule {}
