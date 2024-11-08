interface IconProps {
  size?: number;
  color?: string;
}

export const CirclepathIcon = ({ size = 14, color = '#000000' }: IconProps) => (
  <svg
    width={size}
    height={(size * 15) / 13}
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_316_2018)">
      <path
        d="M0.00632668 7.73337C0.00632668 11.2811 2.95539 14.2302 6.50317 14.2302C10.0573 14.2302 13 11.2811 13 7.73337C13 4.17921 10.0637 1.23653 6.50954 1.23653V2.31934C9.51591 2.31934 11.9108 4.72698 11.9108 7.73337C11.9108 10.7398 9.50955 13.1474 6.50317 13.1474C3.4968 13.1474 1.07644 10.7398 1.08916 7.73337C1.09549 5.91807 1.9745 4.32571 3.3312 3.35119C3.59236 3.15373 3.67512 2.85437 3.51591 2.58685C3.35664 2.33208 3.00633 2.26201 2.72606 2.47857C1.10188 3.68876 0.00632668 5.58686 0.00632668 7.73337ZM7.73247 0.45309C7.73247 -0.00551009 7.42037 -0.12016 7.06368 0.128248L5.03822 1.555C4.74524 1.7652 4.75157 2.07093 5.03822 2.27475L7.07005 3.70151C7.42037 3.94354 7.73247 3.82889 7.73247 3.37666V0.45309Z"
        fill={color}
        stroke={color}
        strokeWidth={0.2}
      />
    </g>
    <defs>
      <clipPath id="clip0_316_2018">
        <rect width="14.4667" height="13" fill="white" transform="matrix(0 1 -1 0 13 0)" />
      </clipPath>
    </defs>
  </svg>
);