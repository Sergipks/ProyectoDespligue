import { Usuario } from './entities/usuario.entity';
export declare class UsuarioService {
    private readonly usuarioModel;
    buscar(login: string, password: string): Promise<Usuario | undefined>;
}
