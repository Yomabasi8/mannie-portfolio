const bars = [
  { height: "35%", color: "bg-brand-button" },
  { height: "55%", color: "bg-brand-button" },
  { height: "80%", color: "bg-[#7C3AED]" },
  { height: "100%", color: "bg-[#7C3AED]" },
  { height: "70%", color: "bg-brand-button" },
  { height: "85%", color: "bg-[#7C3AED]" },
  { height: "45%", color: "bg-brand-button" },
  { height: "30%", color: "bg-brand-button" },
];

export type Track = { title: string; gradient: string; src: string };

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-0.5">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

export function TrackCard({
  track,
  isPlaying,
  onToggle,
  audioRef,
  onEnded,
}: {
  track: Track;
  isPlaying: boolean;
  onToggle: () => void;
  audioRef: (el: HTMLAudioElement | null) => void;
  onEnded: () => void;
}) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-[6px_6px_0px_0px_#060606] p-6 flex flex-col items-center text-center">
      <h3 className="font-jetbrains text-sm font-bold text-brand-black-dark mb-4 leading-snug">{track.title}</h3>
      <div className="w-full h-20 bg-[#EDEAFB] rounded-xl flex items-end justify-center gap-1.5 px-4 py-3 mb-6">
        {bars.map((bar, i) => (
          <span
            key={i}
            className={`w-1.5 rounded-full origin-bottom ${bar.color} ${isPlaying ? "animate-wave-bar" : ""}`}
            style={{ height: bar.height, animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onToggle}
        aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br cursor-pointer ${track.gradient}`}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <audio ref={audioRef} src={track.src} onEnded={onEnded} preload="none" />
    </div>
  );
}
