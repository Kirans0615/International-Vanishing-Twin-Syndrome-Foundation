interface SectionWaveProps {
  fromColor?: string;
  toColor?: string;
  className?: string;
  flip?: boolean;
}

export function SectionWave({
  fromColor = "#F0EBF8",
  toColor = "#FAF8FF",
  className,
  flip = false,
}: SectionWaveProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className ?? ""}`}
      style={{
        backgroundColor: toColor,
        transform: flip ? "rotate(180deg)" : undefined,
      }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
}
