interface LanguageSelectorProps {
  value: string;
  onChange: (language: string) => void;
}

export default function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <div className="border-2 border-cyan-500/30 p-4 rounded-lg bg-black/60 backdrop-blur-sm">
      <label className="text-cyan-400 font-mono text-xs uppercase tracking-wide block mb-2">
        Target Language:
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-black/80 text-cyan-400 border border-cyan-500/50 rounded px-3 py-2 font-mono text-sm w-full"
      >
        <option value="es">Spanish (Español)</option>
        <option value="fr">French (Français)</option>
        <option value="de">German (Deutsch)</option>
        <option value="it">Italian (Italiano)</option>
        <option value="pt">Portuguese (Português)</option>
        <option value="ja">Japanese (日本語)</option>
        <option value="ko">Korean (한국어)</option>
        <option value="zh">Chinese (中文)</option>
        <option value="ar">Arabic (العربية)</option>
        <option value="hi">Hindi (हिन्दी)</option>
        <option value="gu">Gujarati (ગુજરાતી)</option>
      </select>
    </div>
  );
}
