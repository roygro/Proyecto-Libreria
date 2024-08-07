export interface Library{
    id?: number; //el signo ? nos dice que el campo es opcional
    title?: string;
    description?:string;
    image?: string;
    created_at?: Date
}