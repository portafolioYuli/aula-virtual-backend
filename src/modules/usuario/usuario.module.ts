
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from "../../entities/usuario.entitie";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";
import { Rol } from "../../entities/rol.entitie";

@Module({
  imports: [TypeOrmModule.forFeature([Usuario,Rol])],
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
