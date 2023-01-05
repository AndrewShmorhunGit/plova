export const GalleryLoader = () => {
  return (
    <div className="col one-third">
      <svg
        viewBox="0 0 718 330"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        speed="2"
        className="loader-placeholder loader-placeholder--store"
      >
        <rect
          clipPath="url(#4xelgxhh6zy)"
          x="0"
          y="0"
          width="718"
          height="330"
          style={{ fill: "url(#mvxkd7211q)" }}
        ></rect>
        <defs>
          <clipPath id="4xelgxhh6zy">
            <path d="M 0 16 C 0 7.163 7.163 0 16 0 h 686 c 8.837 0 16 7.163 16 16 v 248 c 0 8.837 -7.163 16 -16 16 H 16 c -8.837 0 -16 -7.163 -16 -16 V 16 z m 130 80 c -9.941 0 -18 8.059 -18 18 s 8.059 18 18 18 h 454 c 9.941 0 18 -8.059 18 -18 s -8.059 -18 -18 -18 H 130 z m 78 82 c 0 -5.523 4.477 -10 10 -10 h 116 c 5.523 0 10 4.477 10 10 s -4.477 10 -10 10 H 218 c -5.523 0 -10 -4.477 -10 -10 z m 164 0 c 0 -5.523 4.477 -10 10 -10 h 116 c 5.523 0 10 4.477 10 10 s -4.477 10 -10 10 H 382 c -5.523 0 -10 -4.477 -10 -10 z"></path>
            <path d="M 28 306 c -6.627 0 -12 5.373 -12 12 s 5.373 12 12 12 s 12 -5.373 12 -12 s -5.373 -12 -12 -12 z M 58 318 c 0 -6.627 5.373 -12 12 -12 h 112 c 6.627 0 12 5.373 12 12 s -5.373 12 -12 12 H 70 c -6.627 0 -12 -5.373 -12 -12 z M 424 318 c 0 -6.627 5.373 -12 12 -12 h 254 c 6.627 0 12 5.373 12 12 s -5.373 12 -12 12 H 436 c -6.627 0 -12 -5.373 -12 -12 z M 384 318 c 0 -6.627 5.373 -12 12 -12 s 12 5.373 12 12 s -5.373 12 -12 12 s -12 -5.373 -12 -12 z"></path>
          </clipPath>
          <linearGradient id="mvxkd7211q">
            <stop offset="0%" stopColor="#f9f9f9" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-2; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="50%" stopColor="#ecebeb" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1.5; 1.5"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="100%" stopColor="#f9f9f9" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
