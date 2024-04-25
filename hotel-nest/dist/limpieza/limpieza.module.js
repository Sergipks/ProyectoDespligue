"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimpiezaModule = void 0;
const common_1 = require("@nestjs/common");
const limpieza_service_1 = require("./limpieza.service");
const limpieza_controller_1 = require("./limpieza.controller");
let LimpiezaModule = class LimpiezaModule {
};
exports.LimpiezaModule = LimpiezaModule;
exports.LimpiezaModule = LimpiezaModule = __decorate([
    (0, common_1.Module)({
        controllers: [limpieza_controller_1.LimpiezaController],
        providers: [limpieza_service_1.LimpiezaService],
    })
], LimpiezaModule);
//# sourceMappingURL=limpieza.module.js.map