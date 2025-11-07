/**
 * @constants routes
 * @summary Application route constants
 * @domain core
 * @category constants
 */

export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '*',
} as const;

export type RouteKey = keyof typeof ROUTES;
