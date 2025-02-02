import axios from "axios";

const TRANSLATION_API_URL = "https://libretranslate.com/translate"; // Free API endpoint

export async function translateText(text: string, targetLang: string = "fr") {
    try {
        const response = await axios.post(TRANSLATION_API_URL, {
            q: text,
            source: "en",
            target: targetLang,
            format: "text",
        }, {
            headers: { "Content-Type": "application/json" }
        });

        return response.data.translatedText;
    } catch (error) {
        console.error("Translation Error:", error);
        return text; // Return original text in case of error
    }
}
