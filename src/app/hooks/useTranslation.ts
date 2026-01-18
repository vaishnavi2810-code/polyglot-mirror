import { useState, useCallback } from 'react';

export function useTranslation(targetLanguage: string) {
  const [translatedText, setTranslatedText] = useState<string>("");
  const [isTranslating, setIsTranslating] = useState(false);

  const translate = useCallback(async (text: string) => {
    if (!text) return;

    setIsTranslating(true);
    console.log(`🌐 Translating "${text}" to ${targetLanguage}...`);

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          targetLanguage,
        }),
      });

      if (!response.ok) {
        throw new Error(`Translation failed: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("✅ Translation:", data.translatedText);
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error("❌ Translation error:", error);
      setTranslatedText(`[Translation failed: ${text}]`);
    } finally {
      setIsTranslating(false);
    }
  }, [targetLanguage]);

  return { translatedText, isTranslating, translate };
}
