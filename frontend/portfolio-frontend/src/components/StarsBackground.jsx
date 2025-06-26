const STAR_COUNT = 100;
const STAR_MIN_SIZE = 1;
const STAR_MAX_SIZE = 3;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const StarsBackground = () => {
  const stars = Array.from({ length: STAR_COUNT }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = getRandomInt(STAR_MIN_SIZE, STAR_MAX_SIZE);
    const duration = Math.random() * 2 + 1; // 1s to 3s
    const delay = Math.random() * 3; // 0s to 3s
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-80"
        style={{
          top: `${top}vh`,
          left: `${left}vw`,
          width: size,
          height: size,
          boxShadow: `0 0 ${size * 4}px white`,
          animation: `twinkle ${duration}s infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="fixed top-0 left-0 w-full">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.2; }
        }
      `}</style>
      {stars}
    </div>
  );
};

export default StarsBackground;
