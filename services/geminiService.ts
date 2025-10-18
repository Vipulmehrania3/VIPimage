import { GoogleGenAI, Modality, Part } from '@google/genai';

// FIX: Per coding guidelines, assume API_KEY is always available in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateFusedImage(
  imageParts: Part[],
  prompt: string
): Promise<string> {
  const allParts = [...imageParts, { text: prompt }];

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: allParts,
    },
    config: {
      responseModalities: [Modality.IMAGE],
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return part.inlineData.data;
    }
  }

  throw new Error('No image data found in the Gemini API response.');
}
