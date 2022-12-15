import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  user: Rol

rol_id
}

