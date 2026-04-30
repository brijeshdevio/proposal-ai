import { isAxiosError } from "axios";
import type { FieldErrors } from "react-hook-form";

export function errorTransform(clientErrs: FieldErrors, serverErrs: unknown) {
  const err: Record<string, { message: string }> = {};
  if (isAxiosError(serverErrs)) {
    if (Array.isArray(serverErrs.response?.data?.error?.details)) {
      for (const x of serverErrs.response.data.error.details) {
        err[x.field] = { message: x.message };
      }
    }
  }

  return { ...err, ...clientErrs };
}
