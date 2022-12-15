
export enum TipoActividadEnum {
  QUIZ = "QUIZ",
  TALLER = "TALLER"
}
export interface PreguntaInterface{
  nombre: string;
  ponderacion: number;
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
  preguntas:PreguntaInterface[];


}

