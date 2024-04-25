import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
export declare class LimpiezaService {
    create(createLimpiezaDto: CreateLimpiezaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLimpiezaDto: UpdateLimpiezaDto): string;
    remove(id: number): string;
}
