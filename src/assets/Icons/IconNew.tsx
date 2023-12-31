import { IconProps } from "./Icon.type";

const IconNew: React.FC<IconProps> = ({ size = 24 }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#c4c4c4"
        stroke="none"
      >
        <path
          d="M2471 5109 c-183 -36 -334 -197 -361 -384 -6 -41 -10 -397 -10 -861
       l0 -791 -26 -27 -27 -26 -791 0 c-464 0 -820 -4 -861 -10 -248 -35 -427 -275
       -387 -517 33 -200 189 -354 387 -383 42 -6 384 -10 861 -10 l791 0 27 -26 26
       -27 0 -791 c0 -464 4 -820 10 -861 35 -247 275 -427 516 -387 201 33 356 190
       384 387 6 41 10 397 10 861 l0 791 26 27 27 26 791 0 c477 0 819 4 861 10 249
       36 427 274 387 517 -33 200 -189 354 -387 383 -42 6 -384 10 -861 10 l-791 0
       -27 26 -26 27 0 791 c0 477 -4 819 -10 861 -38 258 -285 434 -539 384z"
        />
      </g>
    </svg>
  );
};

export default IconNew;
