interface IconProps {
  size?: number;
  color?: string;
}

export const PlaceSearchIcon = ({ size = 16, color = '#131214' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3333 13.3334L10.7555 10.7556M12.1482 7.40749C12.1482 10.0257 10.0257 12.1482 7.40742 12.1482C4.78919 12.1482 2.66669 10.0257 2.66669 7.40749C2.66669 4.78925 4.78919 2.66675 7.40742 2.66675C10.0257 2.66675 12.1482 4.78925 12.1482 7.40749Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
