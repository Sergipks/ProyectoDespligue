import { Controller, Get, Post, Body, Patch, Param, UsePipes, ValidationPipe, Put, NotFoundException } from '@nestjs/common';
import { LimpiezaService } from './limpieza.service';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('limpieza')
@UsePipes(ValidationPipe)
export class LimpiezaController {
  constructor(private readonly limpiezaService: LimpiezaService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createLimpiezaDto: CreateLimpiezaDto) {
    return this.limpiezaService.create(createLimpiezaDto);
  }

  @Get(':id')
  findAllByRoomId(@Param('id') id: string) {
    return this.limpiezaService.findAllByRoomId(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateLimpiezaDto: UpdateLimpiezaDto) {
    const updatedLimpieza = this.limpiezaService.update(id, updateLimpiezaDto);
    if (!updatedLimpieza) {
      throw new NotFoundException('Limpieza no encontrada');
    }
    return updatedLimpieza;
  }

  @Get('limpia/:id')
  async checkLimpiezaToday(@Param('id') id: string): Promise<{ ok: boolean }> {
    try {
      const limpiaHoy = await this.limpiezaService.checkLimpiezaToday(id);
      return { ok: limpiaHoy };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw error;
      }
    }
  }

  @Get('limpias')
  async getHabitacionesLimpiasHoy(): Promise<Habitacion[]> {
    const habitacionesLimpiasHoy: Habitacion[] = [];

    // Obtener todas las habitaciones
    const habitaciones = await this.limpiezaService.getAllHabitaciones();

    // Filtrar las habitaciones que se han limpiado hoy
    for (const habitacion of habitaciones) {
      const limpiaHoy = await this.limpiezaService.checkLimpiezaToday(habitacion.id);
      if (limpiaHoy) {
        habitacionesLimpiasHoy.push(habitacion);
      }
    }

    return habitacionesLimpiasHoy;
  }
}
