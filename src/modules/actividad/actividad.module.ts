
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from "../../entities/usuario.entitie";
import { ActividadService } from "./actividad.service";
import { ActividadController } from "./actividad.controller";
import { Actividad } from "../../entities/actividad.entitie";
import { Pregunta } from "../../entities/pregunta.entitie";

@Module({
  imports: [TypeOrmModule.forFeature([Actividad,Usuario,Pregunta])],
  providers: [ActividadService],
  controllers: [ActividadController],
})
export class ActividadModule {}
