import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Limpieza } from './entities/limpieza.entity';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';

@Injectable()
export class LimpiezaService {
  constructor(
    @InjectModel('limpiezas')
    private readonly limpiezaModel: Model<Limpieza>,
    @InjectModel('habitaciones')
    private readonly habitacionModel: Model<Habitacion>,
  ) {}
  async create(createLimpiezaDto: CreateLimpiezaDto) {
    const nuevaLimpieza = await this.limpiezaModel.create(createLimpiezaDto);
    return nuevaLimpieza;
  }

  async findAllByRoomId(id: string) {
    const limpiezas = await this.limpiezaModel.findById(id).sort({ fecha: -1 }).exec();
    return limpiezas;
  }

  async update(id: string, updateLimpiezaDto: UpdateLimpiezaDto): Promise<Limpieza> {
    const limpieza = await this.limpiezaModel.findById(id);
    if (!limpieza) {
      throw new NotFoundException('Limpieza no encontrada');
    }

    if (updateLimpiezaDto.fecha) {
      limpieza.fecha = updateLimpiezaDto.fecha;
    }
    if (updateLimpiezaDto.observaciones) {
      limpieza.observaciones = updateLimpiezaDto.observaciones;
    }

    try {
      await limpieza.save();
      return limpieza;
    } catch (error) {
      throw new BadRequestException('La actualización no fue exitosa');
    }
  }

  async checkLimpiezaToday(habitacionId: string): Promise<boolean> {
    const habitacion = await this.habitacionModel.findById(habitacionId);
    if (!habitacion) {
      throw new NotFoundException('Habitación no encontrada');
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const ultimaLimpieza = habitacion.ultimaLimpieza;
    return ultimaLimpieza.getTime() === hoy.getTime();
  }

  async getAllHabitaciones(): Promise<Habitacion[]> {
    return this.habitacionModel.find().exec();
  }
}
