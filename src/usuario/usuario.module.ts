import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioSchema } from './entities/usuario.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'usuarios',
        schema: UsuarioSchema,
      },
    ]),
  ],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuarioModule {}
