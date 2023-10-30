export interface Alumnos {
    id?: string;
    rut: string;
    nombre: string;
    apellido: string;
    edad: number;
    sexo: 'Masculino' | 'Femenino' | 'Otro';
}
