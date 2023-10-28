/**
 * Helper function to format API response
 */
export const apiResponse = (status: number, data: any) => ({ status, data });

/**
 * Helper function to format API errors
 */
export const apiError = (status: number, message: string) => apiResponse(status, { message });
