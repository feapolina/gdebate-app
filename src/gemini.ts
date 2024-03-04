import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAsZogl6HK9Lsc7csx5MEEDO6BmKYajVuk";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateNewsHeadline() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt =
    "Quero criar um debate com minha namorada. Escolha um tema atual e polêmico e interessante que seja possível debater sobre. Apenas um título. Evite temas sobre inteligência artificial. Evite colocar o caractere *";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  
  // retornar o texto gerado
  return response.text();
}
