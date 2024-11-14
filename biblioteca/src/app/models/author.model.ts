export interface Author {
  name: string;
  birth_date: string | null;
  first_publish_year: number;
  bio: string | null;
  cover_i?: number; // ID opcional de la imagen de portada
  key?: string; // Clave opcional del autor para detalles adicionales
}
