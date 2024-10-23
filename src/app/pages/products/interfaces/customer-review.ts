export interface CustomerReview {
  id: string; // ID único de la reseña
  title?: string; // Título de la reseña (opcional)
  text?: string; // Texto de la reseña (opcional)
  rating?: number; // Calificación de la reseña (opcional)
  review_submission_time: string; // Tiempo de envío de la reseña
  user_nickname?: string; // Apodo del usuario que dejó la reseña (opcional)
  nanoid?: string; // Identificador único generado por nanoid
}
