import { Part } from '@google/genai';

/**
 * Sends image data and a prompt to a secure backend endpoint for AI image generation.
 * This function no longer calls the Gemini API directly from the client-side.
 *
 * @param imageParts - An array of Gemini-compatible Part objects representing the uploaded images.
 * @param prompt - The text prompt to guide the AI image generation.
 * @returns A Promise that resolves with the base64 encoded string of the generated image.
 */
export async function generateFusedImage(
  imageParts: Part[],
  prompt: string
): Promise<string> {
  // This fetch call points to a serverless function that must be deployed
  // alongside the frontend. This backend endpoint securely handles the Gemini API key.
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      imageParts,
      prompt,
    }),
  });

  if (!response.ok) {
    // Try to parse a JSON error message from the backend, otherwise use a generic message.
    try {
        const errorData = await response.json();
        throw new Error(errorData.error || `Request failed with status ${response.status}`);
    } catch {
        throw new Error(`Request failed with status ${response.status}`);
    }
  }

  const result = await response.json();

  if (!result.imageBase64) {
      throw new Error('Invalid response from server: missing imageBase64 data.');
  }

  // The backend is expected to return a JSON object with the raw base64 string.
  // The component will prepend the necessary data URL prefix.
  return result.imageBase64;
}
