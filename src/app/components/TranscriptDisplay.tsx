interface TranscriptDisplayProps {
  transcript: string;
  isListening: boolean;
}

export default function TranscriptDisplay({ transcript, isListening }: TranscriptDisplayProps) {
  if (!isListening || !transcript) return null;

  return (
    <div className="absolute bottom-6 left-6 right-6 z-30">
      <div className="border-2 border-cyan-500/30 p-4 rounded-lg bg-black/70 backdrop-blur-sm">
        <p className="text-cyan-400/60 font-mono text-xs uppercase mb-1">Original:</p>
        <p className="text-white font-mono text-sm">{transcript}</p>
      </div>
    </div>
  );
}
