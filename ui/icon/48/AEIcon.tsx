import { forwardRef } from "react";

const AEIcon = forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<"svg">>(
  (props, ref) => (
    <svg
      ref={ref}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_731_432)">
        <rect width="48" height="48" rx="12" fill="black" />
        <g clipPath="url(#clip1_731_432)">
          <path
            d="M8.5 0.600006H39.5C44.2 0.600006 48 4.40001 48 9.10001V38.9C48 43.6 44.2 47.4 39.5 47.4H8.5C3.8 47.4 0 43.6 0 38.9V9.10001C0 4.40001 3.8 0.600006 8.5 0.600006Z"
            fill="#00005B"
          />
          <path
            d="M19.28 28.6H11.84L10.32 33.32C10.28 33.5 10.12 33.62 9.94002 33.6H6.18002C5.96002 33.6 5.90002 33.48 5.96002 33.24L12.4 14.78C12.46 14.58 12.52 14.4 12.6 14.16C12.68 13.74 12.72 13.3 12.72 12.86C12.7 12.76 12.78 12.66 12.88 12.64H12.94H18.06C18.2 12.64 18.3 12.7 18.32 12.8L25.62 33.2C25.68 33.42 25.62 33.52 25.42 33.52H21.24C21.1 33.54 20.96 33.44 20.92 33.3L19.28 28.5V28.6ZM13 24.62H18.08C17.96 24.2 17.8 23.7 17.62 23.18C17.44 22.64 17.26 22.06 17.08 21.46C16.88 20.84 16.7 20.24 16.5 19.62C16.3 19 16.12 18.42 15.96 17.84C15.8 17.28 15.66 16.76 15.52 16.28H15.48C15.3 17.14 15.08 18 14.8 18.86C14.5 19.82 14.2 20.82 13.88 21.82C13.62 22.84 13.3 23.78 13 24.62Z"
            fill="#9999FF"
          />
          <path
            d="M37.4 26.8H31.06C31.14 27.42 31.34 28.04 31.68 28.58C32.04 29.12 32.54 29.54 33.14 29.78C33.94 30.12 34.82 30.3 35.7 30.28C36.4 30.26 37.1 30.2 37.78 30.06C38.4 29.98 39 29.82 39.56 29.6C39.66 29.52 39.72 29.56 39.72 29.76V32.82C39.72 32.9 39.7 32.98 39.68 33.06C39.64 33.12 39.6 33.16 39.54 33.2C38.9 33.48 38.24 33.68 37.54 33.8C36.6 33.98 35.66 34.06 34.7 34.04C33.18 34.04 31.9 33.8 30.86 33.34C29.88 32.92 29.02 32.26 28.34 31.44C27.7 30.66 27.24 29.78 26.96 28.82C26.68 27.88 26.54 26.9 26.54 25.9C26.54 24.82 26.7 23.76 27.04 22.72C27.36 21.72 27.86 20.8 28.54 19.98C29.2 19.18 30.02 18.54 30.96 18.08C31.9 17.62 33.02 17.46 34.3 17.46C35.36 17.44 36.42 17.64 37.4 18.08C38.22 18.44 38.94 18.98 39.5 19.68C40.02 20.36 40.44 21.12 40.7 21.96C40.96 22.76 41.08 23.58 41.08 24.4C41.08 24.88 41.06 25.3 41.04 25.68C41 26.06 40.98 26.34 40.96 26.52C40.94 26.66 40.82 26.78 40.68 26.78C40.56 26.78 40.34 26.8 40.02 26.82C39.7 26.86 39.32 26.88 38.86 26.88C38.4 26.88 37.92 26.8 37.4 26.8ZM31.06 23.88H35.28C35.8 23.88 36.18 23.88 36.42 23.86C36.58 23.84 36.74 23.8 36.88 23.7V23.5C36.88 23.24 36.84 23 36.76 22.76C36.4 21.64 35.34 20.88 34.16 20.92C33.06 20.86 32.02 21.44 31.5 22.44C31.26 22.9 31.12 23.38 31.06 23.88Z"
            fill="#9999FF"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_731_432">
          <rect width="48" height="48" rx="12" fill="white" />
        </clipPath>
        <clipPath id="clip1_731_432">
          <rect
            width="48"
            height="46.8"
            fill="white"
            transform="translate(0 0.600006)"
          />
        </clipPath>
      </defs>
    </svg>
  )
);
AEIcon.displayName = "AEIcon";

export { AEIcon };
