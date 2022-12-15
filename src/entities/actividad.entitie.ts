import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Rol } from "./rol.entitie";

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  fecha_ingreso: string;

  @Column({ default: false })
  activo: boolean;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  @JoinColumn({ name: "rol_id" })
  rol: Rol

}

