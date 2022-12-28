import {Controller, Get, Post, Param, Body, Delete} from "@nestjs/common";
import {Usuario} from "../../entities/usuario.entitie";
import {ActividadService} from "./actividad.service";
import {Actividad} from "../../entities/actividad.entitie";
import {ActividadInterface, PreguntaInterface} from "./actividad.interface";
import {Pregunta} from "../../entities/pregunta.entitie";

@Controller("actividad")
export class ActividadController {
    constructor(private readonly actividadService: ActividadService) {
    }

    @Get()
    getAll(): Promise<Actividad[]> {
        return this.actividadService.findAll();
    }

    @Get('/:id')
    getId(@Param("id") id: number): Promise<Actividad> {
        return this.actividadService.findOne(id);
    }

    @Post()
    save(@Body() actividad: ActividadInterface): Promise<Actividad> {
        return this.actividadService.save(actividad);
    }

    @Delete('/:id')
    eliminar(@Param("id") id: number): Promise<any> {
        return this.actividadService.remove(id);
    }


    @Post('/:idActividad/pregunta')
    savePregunta(@Param("idActividad") idActividad: number, @Body() pregunta: PreguntaInterface): Promise<Pregunta> {
        return this.actividadService.savePregunta(idActividad, pregunta)
    }

}
