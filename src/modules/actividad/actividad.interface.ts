
export enum TipoActividadEnum {
  QUIZ = "QUIZ",
  TALLER = "TALLER"
}

export interface ActividadInterface {

  id: number;
  nombre: string;
  fecha_apertura: string;
  fecha_cierre: string;
  duracion: number;
  usuarioId: number;
  ponderacion: number;
  tipo: TipoActividadEnum;


}

