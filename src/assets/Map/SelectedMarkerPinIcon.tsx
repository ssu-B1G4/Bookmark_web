interface IconProps {
  size?: number;
  startColor?: string;
  endColor?: string;
}

export const SelectedMarkerPinIcon = ({
  size = 45,
  startColor = '#198155',
  endColor = '#000000',
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_147_4266)">
      <g filter="url(#filter0_d_147_4266)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.4255 36.3519C29.2068 33.1394 35.1173 27.037 35.1173 20.2778C35.1173 16.8889 33.7711 13.6388 31.3748 11.2425C28.9785 8.84623 25.7284 7.5 22.3395 7.5C18.9507 7.5 15.7006 8.84623 13.3043 11.2425C10.908 13.6388 9.56177 16.8889 9.56177 20.2778C9.56177 27.0369 15.4722 33.1394 19.2535 36.3519C21.0554 37.8827 23.6237 37.8827 25.4255 36.3519ZM22.3125 23.0626C23.8658 23.0626 25.125 21.8034 25.125 20.2501C25.125 18.6968 23.8658 17.4376 22.3125 17.4376C20.7592 17.4376 19.5 18.6968 19.5 20.2501C19.5 21.8034 20.7592 23.0626 22.3125 23.0626Z"
          fill="url(#paint0_linear_147_4266)"
        />
        <path
          d="M25.4255 36.3519L25.1018 35.9709L25.4255 36.3519ZM31.3748 11.2425L31.0212 11.5961L31.3748 11.2425ZM13.3043 11.2425L13.6578 11.5961L13.3043 11.2425ZM19.2535 36.3519L18.9298 36.733H18.9298L19.2535 36.3519ZM34.6173 20.2778C34.6173 23.5135 33.2004 26.6282 31.2805 29.3571C29.3635 32.0818 26.9748 34.3796 25.1018 35.9709L25.7493 36.733C27.6575 35.1117 30.1147 32.752 32.0983 29.9326C34.079 27.1173 35.6173 23.8012 35.6173 20.2778H34.6173ZM31.0212 11.5961C33.3238 13.8986 34.6173 17.0215 34.6173 20.2778H35.6173C35.6173 16.7563 34.2184 13.379 31.7283 10.889L31.0212 11.5961ZM22.3395 8C25.5958 8 28.7187 9.29355 31.0212 11.5961L31.7283 10.889C29.2383 8.3989 25.861 7 22.3395 7V8ZM13.6578 11.5961C15.9604 9.29355 19.0833 8 22.3395 8V7C18.8181 7 15.4408 8.3989 12.9507 10.889L13.6578 11.5961ZM10.0618 20.2778C10.0618 17.0215 11.3553 13.8986 13.6578 11.5961L12.9507 10.889C10.4607 13.379 9.06177 16.7563 9.06177 20.2778H10.0618ZM19.5773 35.9709C17.7043 34.3796 15.3155 32.0818 13.3986 29.3571C11.4787 26.6282 10.0618 23.5135 10.0618 20.2778H9.06177C9.06177 23.8012 10.6001 27.1173 12.5807 29.9325C14.5643 32.752 17.0215 35.1117 18.9298 36.733L19.5773 35.9709ZM25.1018 35.9709C23.4867 37.343 21.1924 37.343 19.5773 35.9709L18.9298 36.733C20.9183 38.4223 23.7608 38.4223 25.7493 36.733L25.1018 35.9709ZM24.625 20.2501C24.625 21.5273 23.5897 22.5626 22.3125 22.5626V23.5626C24.1419 23.5626 25.625 22.0795 25.625 20.2501H24.625ZM22.3125 17.9376C23.5897 17.9376 24.625 18.9729 24.625 20.2501H25.625C25.625 18.4206 24.1419 16.9376 22.3125 16.9376V17.9376ZM20 20.2501C20 18.9729 21.0353 17.9376 22.3125 17.9376V16.9376C20.4831 16.9376 19 18.4206 19 20.2501H20ZM22.3125 22.5626C21.0353 22.5626 20 21.5273 20 20.2501H19C19 22.0795 20.4831 23.5626 22.3125 23.5626V22.5626Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_147_4266"
        x="5.06177"
        y="7"
        width="34.5555"
        height="39"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_147_4266" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_147_4266"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_147_4266"
        x1="22.3395"
        y1="7.5"
        x2="22.3395"
        y2="37.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={startColor} />
        <stop offset="1" stopColor={endColor} />
      </linearGradient>
      <clipPath id="clip0_147_4266">
        <rect width="45" height="45" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
