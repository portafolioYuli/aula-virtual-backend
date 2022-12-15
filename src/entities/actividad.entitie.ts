import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,BaseEntity } from "typeorm";
import { Usuario } from "./usuario.entitie";


export enum ETipoActividad {
  QUIZ = "QUIZ",
  TALLER = "TALLER"
}

@Entity()
export class Actividad  extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column( )
  fecha_apertura: string;

  @Column({ type: "timestamp" })
  fecha_cierre: string;

  @Column()
  duracion: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;

  @Column()
  ponderacion: number;


  @Column({
    type: "enum",
    enum: ETipoActividad
  })
  tipo: ETipoActividad.QUIZ | ETipoActividad.TALLER;

  @Column({ type: "timestamp" })
  fecha_creacion: boolean;

  @Column({ type: "timestamp" })
  fecha_actualizacion: boolean;


}

