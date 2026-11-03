// Importamos HttpContextToken.
// Sirve para crear información adicional en una petición HTTP.
import { HttpContextToken } from "@angular/common/http";

// Creamos una constante llamada SKIP_TOKEN.
// Es de tipo boolean.
// Su valor inicial es false.
export const SKIP_TOKEN = new HttpContextToken<boolean>(() => false);
