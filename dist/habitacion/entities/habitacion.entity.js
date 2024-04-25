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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitacionSchema = exports.Habitacion = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Habitacion = class Habitacion extends mongoose_2.Document {
};
exports.Habitacion = Habitacion;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        min: 1,
        max: 50,
    }),
    __metadata("design:type", Number)
], Habitacion.prototype, "numero", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: ['individual', 'doble', 'familiar', 'suite'],
        required: true,
    }),
    __metadata("design:type", String)
], Habitacion.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Habitacion.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: Date.now,
    }),
    __metadata("design:type", Date)
], Habitacion.prototype, "ultimaLimpieza", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        min: 0,
        max: 300,
    }),
    __metadata("design:type", Number)
], Habitacion.prototype, "precio", void 0);
exports.Habitacion = Habitacion = __decorate([
    (0, mongoose_1.Schema)()
], Habitacion);
exports.HabitacionSchema = mongoose_1.SchemaFactory.createForClass(Habitacion);
//# sourceMappingURL=habitacion.entity.js.map