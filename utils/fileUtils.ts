
import { Part } from '@google/genai';

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // result is a data URL: "data:image/jpeg;base64,LzlqLzRBQ...". We only want the base64 part.
      const result = reader.result as string;
      resolve(result.split(',')[1]);
    };
    reader.onerror = (error) => reject(error);
  });
}

export async function fileToGenerativePart(file: File): Promise<Part> {
  const base64Data = await fileToBase64(file);
  return {
    inlineData: {
      mimeType: file.type,
      data: base64Data,
    },
  };
}
