import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    login(login: string, password: string): Promise<any>;
}
