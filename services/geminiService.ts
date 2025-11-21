import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY;

// Initialize the client securely
const ai = new GoogleGenAI({ apiKey: apiKey });

export const getBusinessAdvice = async (query: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key not configured");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Não foi possível gerar uma resposta no momento.";
  } catch (error) {
    console.error("Error fetching AI advice:", error);
    throw error;
  }
};