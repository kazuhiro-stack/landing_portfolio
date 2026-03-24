export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 700"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "90%",
        maxWidth: "520px",
        animation: "floatPath 6s ease-in-out infinite",
      }}
    >
      <defs>
        <radialGradient id="globeGrad" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#2a6b6e" stopOpacity={0.15} />
          <stop offset="100%" stopColor="#2a6b6e" stopOpacity={0} />
        </radialGradient>
      </defs>
      {/* Meridians */}
      <ellipse cx={300} cy={330} rx={220} ry={280} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.3} />
      <ellipse cx={300} cy={330} rx={140} ry={280} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.3} />
      <ellipse cx={300} cy={330} rx={60} ry={280} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.3} />
      {/* Parallels */}
      <ellipse cx={300} cy={200} rx={180} ry={30} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.3} />
      <ellipse cx={300} cy={280} rx={210} ry={20} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.3} />
      <ellipse cx={300} cy={380} rx={210} ry={20} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.3} />
      <ellipse cx={300} cy={460} rx={180} ry={28} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.3} />
      {/* Globe circle */}
      <circle cx={300} cy={330} r={240} fill="url(#globeGrad)" stroke="#2a6b6e" strokeWidth={1} opacity={0.4} />
      {/* Route path */}
      <path d="M 120 460 Q 200 200 480 180" fill="none" stroke="#b85c38" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.7} />
      {/* Destination dots */}
      <circle cx={120} cy={460} r={6} fill="#b85c38" opacity={0.9} />
      <circle cx={480} cy={180} r={6} fill="#b85c38" opacity={0.9} />
      <circle cx={260} cy={310} r={4} fill="#c49a3c" opacity={0.8} />
      <circle cx={380} cy={240} r={4} fill="#c49a3c" opacity={0.8} />
      {/* Plane icon */}
      <g transform="translate(310, 265) rotate(-38)">
        <path d="M0,-10 L6,6 L0,3 L-6,6 Z" fill="#b85c38" opacity={0.9} />
        <path d="M-8,2 L8,2" stroke="#b85c38" strokeWidth={1.5} opacity={0.7} />
      </g>
      {/* Labels */}
      <text x={100} y={490} fontFamily="Space Mono, monospace" fontSize={8} fill="#0d0d0d" opacity={0.5} letterSpacing={2}>JAPAN</text>
      <text x={470} y={165} fontFamily="Space Mono, monospace" fontSize={8} fill="#0d0d0d" opacity={0.5} letterSpacing={2}>EUROPE</text>
      {/* Compass rose */}
      <g transform="translate(510, 580)" opacity={0.3}>
        <line x1={0} y1={-22} x2={0} y2={22} stroke="#2a6b6e" strokeWidth={1} />
        <line x1={-22} y1={0} x2={22} y2={0} stroke="#2a6b6e" strokeWidth={1} />
        <polygon points="0,-24 4,-10 -4,-10" fill="#2a6b6e" />
        <text x={-4} y={-28} fontFamily="Space Mono, monospace" fontSize={8} fill="#2a6b6e">N</text>
      </g>
      {/* Border */}
      <rect x={40} y={40} width={520} height={620} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.2} />
      <rect x={50} y={50} width={500} height={600} fill="none" stroke="#d4c4a0" strokeWidth={0.5} opacity={0.15} />
    </svg>
  );
}
