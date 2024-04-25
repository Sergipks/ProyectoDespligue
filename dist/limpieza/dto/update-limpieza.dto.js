"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLimpiezaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_limpieza_dto_1 = require("./create-limpieza.dto");
class UpdateLimpiezaDto extends (0, mapped_types_1.PartialType)(create_limpieza_dto_1.CreateLimpiezaDto) {
}
exports.UpdateLimpiezaDto = UpdateLimpiezaDto;
//# sourceMappingURL=update-limpieza.dto.js.map