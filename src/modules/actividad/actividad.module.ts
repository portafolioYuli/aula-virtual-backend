
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from "../../entities/usuario.entitie";
import { Rol } from "../../entities/rol.entitie";
import { ActividadService } from "./actividad.service";
import { ActividadController } from "./actividad.controller";
import { Actividad } from "../../entities/actividad.entitie";

@Module({
  imports: [TypeOrmModule.forFeature([Actividad,Usuario])],
  providers: [ActividadService],
  controllers: [ActividadController],
})
export class ActividadModule {}
