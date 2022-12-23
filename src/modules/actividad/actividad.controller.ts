import {Controller, Get, Post, Param, Body, Delete} from "@nestjs/common";
import { Usuario } from "../../entities/usuario.entitie";
import { ActividadService } from "./actividad.service";
import { Actividad } from "../../entities/actividad.entitie";
import { ActividadInterface } from "./actividad.interface";

@Controller("actividad")
export class ActividadController {
  constructor(private readonly actividadService: ActividadService) {}

  @Get()
  getAll(): Promise<Actividad[]> {
    return this.actividadService.findAll();
  }

  @Get('/:id')
  getId(@Param("id") id:number): Promise<Actividad> {
    return this.actividadService.findOne(id);
  }

  @Post()
  save(@Body() actividad:ActividadInterface): Promise<Actividad> {
    return this.actividadService.save(actividad);
  }
  
  @Delete('/:id')
  eliminar(@Param("id") id:number): Promise<any>{
    return this.actividadService.remove(id);
  }


}
