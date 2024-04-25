import { LimpiezaService } from './limpieza.service';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
export declare class LimpiezaController {
    private readonly limpiezaService;
    constructor(limpiezaService: LimpiezaService);
    create(createLimpiezaDto: CreateLimpiezaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLimpiezaDto: UpdateLimpiezaDto): string;
    remove(id: string): string;
}
