/**
 * @summary
 * Request validation middleware using Zod schemas
 * Validates request body, params, and query parameters
 *
 * @module middleware/validationMiddleware
 */

import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';

/**
 * @summary
 * Creates validation middleware for request data
 *
 * @function validationMiddleware
 * @module middleware
 *
 * @param {ZodSchema} schema - Zod validation schema
 *
 * @returns {Function} Express middleware function
 */
export function validationMiddleware(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Request validation failed',
            details: error.errors,
          },
          timestamp: new Date().toISOString(),
        });
      } else {
        next(error);
      }
    }
  };
}
