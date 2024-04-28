import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      // Para no tener que importar el módulo en cada componente
      global: true,
      // Palabra secreta
      // Podemos guardarla en fichero .env externo, por ejemplo
      secret: 'mi_palabra_secreta',
      signOptions: {expiresIn: '2h'}
    })    
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
