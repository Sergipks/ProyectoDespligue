import { Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsuarioService {
  @InjectModel('usuarios')
  private readonly usuarioModel: Model<Usuario>
    
    async buscar(login: string, password: string): Promise<Usuario | undefined> {
      const usuario = await this.usuarioModel.findOne({ login, password }).exec();
      return usuario;
    }
}