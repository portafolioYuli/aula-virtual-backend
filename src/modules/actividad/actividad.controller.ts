import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from "./usuario.service";
import { Usuario } from "../../entities/usuario.entitie";

@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  getAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get('/:id')
  getId(id:number): Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

}
