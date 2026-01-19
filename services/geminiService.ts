import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Je bent de JelloBerry AI Assistent. Jouw doel is om potentiële klanten (ZZP'ers en MKB-bedrijven) in Nederland te helpen met informatie over de diensten van JelloBerry.

Bedrijfsinformatie:
- JelloBerry is een webdesign- en online marketing bureau.
- Wij bouwen vooral WordPress-websites en PHP maatwerk.
- Diensten: Webdesign, SEO (zoekmachine-optimalisatie), Hosting, Onderhoud, Online Marketing.
- Prijzenlijst:
  1. One-page / kleine website: €500 – €900
  2. Standaard WordPress-website (meerdere pagina’s): €800 – €1.500
  3. Uitgebreide of maatwerk website: €1.500 – €3.000+
  4. Hosting en onderhoud: €20 – €50 per maand (meestal rond €25).
- Contact: Alleen via telefoon/WhatsApp op +31 6 20151648.

Richtlijnen:
- Reageer altijd in het Nederlands.
- Wees vriendelijk, behulpzaam en professioneel.
- Als mensen vragen naar prijzen, geef dan de specifieke ranges uit de prijzenlijst.
- Verwijs voor een offerte of diepere vragen altijd naar het telefoonnummer: +31 6 20151648.
- Houd antwoorden bondig en to-the-point.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    // Initialize GoogleGenAI inside the function as per guidelines to ensure it uses the most up-to-date API key.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Create a chat session with the correct model and system instruction configuration.
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // Send the user message. sendMessage only accepts the message parameter.
    const response = await chat.sendMessage({ message: userMessage });
    
    // Access the text property directly from the GenerateContentResponse object.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mijn excuses, ik heb even moeite om te reageren. Neem gerust direct contact op via +31 6 20151648.";
  }
};
