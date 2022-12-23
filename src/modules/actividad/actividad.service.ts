import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Actividad, ETipoActividad } from "../../entities/actividad.entitie";
import { ActividadInterface } from "./actividad.interface";
import { Usuario } from "../../entities/usuario.entitie";
import { Pregunta } from "../../entities/pregunta.entitie";


@Injectable()
export class ActividadService {
  constructor(
    @InjectRepository(Actividad)
    private repository: Repository<Actividad>,
    @InjectRepository(Usuario)
    private repositoryUsuario: Repository<Usuario>
  ) {
  }

  findAll(): Promise<Actividad[]> {
    return this.repository.find({
        relations: {
          usuario: true,
          preguntas: true
        }
      }
    );
  }

  findOne(id: number): Promise<Actividad> {
    return this.repository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<any> {
   
    await this.repository.delete(id);
    
    //let actividad = this.repository.findOneBy({id:id});
    //this.repository.remove(actividad);
  }

  async save(actividad: ActividadInterface): Promise<Actividad> {

    let actividadEntity: Actividad = this.repository.create();
    actividadEntity.nombre = actividad.nombre;
    actividadEntity.duracion = actividad.duracion;
    actividadEntity.fecha_apertura = actividad.fecha_apertura;
    actividadEntity.fecha_cierre = actividad.fecha_cierre;
    actividadEntity.ponderacion = actividad.ponderacion;

    await this.repositoryUsuario
      .findOneBy({ id: actividad.usuarioId })
      .then(value => actividadEntity.usuario = value);

    if (actividad.tipo.toUpperCase() == ETipoActividad.QUIZ.valueOf()) {
      actividadEntity.tipo = ETipoActividad.QUIZ;

    } else {
      actividadEntity.tipo = ETipoActividad.TALLER;
    }
    actividadEntity.preguntas = [];

    actividad.preguntas.forEach((value) => {
      let pregunta: Pregunta = Pregunta.create();
      pregunta.nombre = value.nombre;
      pregunta.ponderacion = value.ponderacion;
      pregunta.usuario = actividadEntity.usuario;

      actividadEntity.preguntas.push(pregunta);
    });


    return this.repository.save(actividadEntity);
  }


}
