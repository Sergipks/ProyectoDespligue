"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimpiezaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LimpiezaService = class LimpiezaService {
    constructor(limpiezaModel, habitacionModel) {
        this.limpiezaModel = limpiezaModel;
        this.habitacionModel = habitacionModel;
    }
    async create(createLimpiezaDto) {
        const nuevaLimpieza = await this.limpiezaModel.create(createLimpiezaDto);
        return nuevaLimpieza;
    }
    async findAllByRoomId(id) {
        const limpiezas = await this.limpiezaModel.findById(id).sort({ fecha: -1 }).exec();
        return limpiezas;
    }
    async update(id, updateLimpiezaDto) {
        const limpieza = await this.limpiezaModel.findById(id);
        if (!limpieza) {
            throw new common_1.NotFoundException('Limpieza no encontrada');
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
        }
        catch (error) {
            throw new common_1.BadRequestException('La actualización no fue exitosa');
        }
    }
    async checkLimpiezaToday(habitacionId) {
        const habitacion = await this.habitacionModel.findById(habitacionId);
        if (!habitacion) {
            throw new common_1.NotFoundException('Habitación no encontrada');
        }
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const ultimaLimpieza = habitacion.ultimaLimpieza;
        return ultimaLimpieza.getTime() === hoy.getTime();
    }
    async getAllHabitaciones() {
        return this.habitacionModel.find().exec();
    }
};
exports.LimpiezaService = LimpiezaService;
exports.LimpiezaService = LimpiezaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('limpiezas')),
    __param(1, (0, mongoose_1.InjectModel)('habitaciones')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LimpiezaService);
//# sourceMappingURL=limpieza.service.js.map