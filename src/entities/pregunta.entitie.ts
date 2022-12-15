import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,BaseEntity } from "typeorm";
import { Usuario } from "./usuario.entitie";
import { Actividad } from "./actividad.entitie";


@Entity()
export class Pregunta   extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ponderacion: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;

  @Column({ type: "timestamp" })
  fecha_creacion: boolean;


  @ManyToOne(() => Actividad, (actividad) =>actividad.preguntas)
  @JoinColumn({ name: "actividad_id" })
  actividad: Actividad;



}

