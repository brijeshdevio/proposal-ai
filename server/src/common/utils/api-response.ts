export interface ApiResponse<T> {
  message?: string;
  data?: T | null;
  meta?: Record<string, unknown>;
}

export const apiResponse = <T>({ message, data, meta }: ApiResponse<T>) => {
  data = data ?? null;
  return { success: true, message, data, ...(meta && { meta }) };
};
