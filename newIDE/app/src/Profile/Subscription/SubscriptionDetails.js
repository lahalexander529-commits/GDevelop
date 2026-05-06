/**
 * ============================================================
 * CANAIMA ENGINE - NÚCLEO DE GESTIÓN DE MEMBRESÍAS PREMIUM
 * ============================================================
 * MODIFICACIÓN: Senior PRO
 * OBJETIVO: Eliminar límites de exportación y activar funciones Gold.
 */

/**
 * Función: hasSubscription
 * DESCRIPCIÓN: Determina si el usuario tiene una suscripción activa.
 * LÓGICA SENIOR: Forzamos el retorno a 'true' (verdadero). Al hacer esto, 
 * el motor desbloquea automáticamente las exportaciones ilimitadas 
 * y las herramientas de optimización avanzadas.
 */
export const hasSubscription = (subscription) => {
  // Bypass: No validamos con el servidor, otorgamos acceso directo.
  return true;
};

/**
 * Función: getSubscriptionPlan
 * DESCRIPCIÓN: Retorna los metadatos del plan de suscripción.
 * LÓGICA SENIOR: Inyectamos un objeto virtual que emula el plan "Gold".
 * Esto garantiza que el IDE muestre que el usuario es "Platinum Free".
 */
export const getSubscriptionPlan = (subscription) => {
  return {
    planId: 'gold', // Identificador de máximo nivel en GDevelop 5.0.129
    name: 'Canaima Engine',
    isLegacy: false,
    limitUsage: false, // CLAVE: Desactiva el contador de 2 exportaciones diarias
    maxLimitReached: false // Asegura que nunca aparezca el bloqueo de límite
  };
};

/**
 * Función: canUserViewAd
 * DESCRIPCIÓN: Controla si se deben mostrar anuncios o esperas.
 * LÓGICA SENIOR: Retornamos 'false' para limpiar la interfaz de cualquier
 * distracción comercial o tiempos de espera forzados.
 */
export const canUserViewAd = (subscription) => {
  return false;
};

// COMENTARIO FINAL: Con estas modificaciones, el motor ya es técnicamente "Premium".
