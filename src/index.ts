import type { google } from "./ima";
export { default as loadImaSdk } from "./loadImaSdk";
export { default as loadScript } from "./loadScript";
export type ImaSdk = typeof google.ima;
export { google };
