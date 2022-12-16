import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from "typeorm";
import { Usuario } from "./usuario.entitie";

@Entity()
export class Rol {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;


  @Column({ default: false })
  activo: boolean; 

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  @JoinTable()
  usuarios: Usuario[]

}

