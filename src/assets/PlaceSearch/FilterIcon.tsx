interface IconProps {
  size?: number;
  color?: string;
}

export const FilterIcon = ({ size = 14, color = '#09090B' }: IconProps) => (
  <svg
    width={size}
    height={(size * 11) / 14}
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33333 3H13M6.33333 3C6.33333 4.10457 5.4379 5 4.33333 5C3.22876 5 2.33333 4.10457 2.33333 3M6.33333 3C6.33333 1.89543 5.4379 1 4.33333 1C3.22876 1 2.33333 1.89543 2.33333 3M2.33333 3H1M7.66667 8.33333H1M7.66667 8.33333C7.66667 7.22876 8.5621 6.33333 9.66667 6.33333C10.7712 6.33333 11.6667 7.22876 11.6667 8.33333M7.66667 8.33333C7.66667 9.4379 8.5621 10.3333 9.66667 10.3333C10.7712 10.3333 11.6667 9.4379 11.6667 8.33333M11.6667 8.33333H13"
      stroke={color}
      strokeWidth="0.291667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
