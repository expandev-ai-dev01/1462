/**
 * @summary
 * Zod validation utilities
 * Provides reusable validation schemas and helpers
 *
 * @module utils/zodValidation
 */

import { z } from 'zod';

/**
 * @summary Common validation schemas
 */

export const zString = z.string().min(1);
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

export const zName = z.string().min(1).max(200);
export const zDescription = z.string().max(500);
export const zNullableDescription = z.string().max(500).nullable();

export const zEmail = z.string().email();
export const zPhone = z.string().min(10).max(20);

export const zBit = z.number().int().min(0).max(1);
export const zBoolean = z.boolean();

export const zFK = z.number().int().positive();
export const zNullableFK = z.number().int().positive().nullable();

export const zDate = z.coerce.date();
export const zDateString = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

export const zNumeric = z.number();
export const zPrice = z.number().min(0);
export const zQuantity = z.number().int().min(0);

export const zPercentage = z.number().min(0).max(100);
