import { AuthService } from './auth.service';
import { UsuarioDto } from 'src/usuario/dto/usuario.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(usuarioDto: UsuarioDto): Promise<{
        ok: boolean;
        resultado: any;
    }>;
}
