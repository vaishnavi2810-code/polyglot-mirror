import LanguageSelector from './LanguageSelector';

interface ControlPanelProps {
  targetLanguage: string;
  onLanguageChange: (language: string) => void;
  isListening: boolean;
  onToggleListening: () => void;
}

export default function ControlPanel({
  targetLanguage,
  onLanguageChange,
  isListening,
  onToggleListening
}: ControlPanelProps) {
  return (
    <div className="absolute top-6 left-6 z-30 space-y-4">
      {/* Status */}
      <div className="border-2 border-cyan-500/30 p-4 rounded-lg bg-black/60 backdrop-blur-sm">
        <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest animate-pulse">
          • Neural Link Established
        </p>
      </div>

      {/* Language Selector */}
      <LanguageSelector value={targetLanguage} onChange={onLanguageChange} />

      {/* Listen Button */}
      <button
        onClick={onToggleListening}
        className={`w-full border-2 p-4 rounded-lg font-mono text-sm uppercase tracking-wide transition-all ${
          isListening
            ? 'border-red-500 bg-red-500/20 text-red-400 hover:bg-red-500/30'
            : 'border-cyan-500 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
        }`}
      >
        {isListening ? '⏸ Stop Listening' : '▶ Start Listening'}
      </button>
    </div>
  );
}
