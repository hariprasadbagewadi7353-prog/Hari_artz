
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getArtConsultation(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are 'Aria', the virtual art curator for SoulSketch Studio. Your tone is elegant, sophisticated, and deeply passionate about portrait art. You help clients understand the emotional depth of our charcoal and graphite portraits. Keep responses concise and artistic.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Consultation Error:", error);
    return "I apologize, but my creative thoughts are currently obscured. Please reach out to our human staff for immediate assistance.";
  }
}

export async function analyzeCommissionRequest(description: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze this art commission description and provide a professional, encouraging artistic feedback on how it could be captured: "${description}"`,
      config: {
        systemInstruction: "You are a senior portrait artist. Provide a one-sentence artistic feedback that shows you understand the emotional intent of the client's request.",
      }
    });
    return response.text;
  } catch (error) {
    return null;
  }
}
