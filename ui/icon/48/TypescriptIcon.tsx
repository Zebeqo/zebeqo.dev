import { forwardRef } from "react";

const TypescriptIcon = forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>((props, ref) => (
  <svg
    ref={ref}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="48" height="48" rx="12" fill="#3178C6" />
    <g clipPath="url(#clip0_731_551)">
      <path
        d="M13.875 12H34.125C35.1606 12 36 12.8394 36 13.875V34.125C36 35.1606 35.1606 36 34.125 36H13.875C12.8394 36 12 35.1606 12 34.125V13.875C12 12.8394 12.8394 12 13.875 12Z"
        fill="white"
      />
      <path
        d="M26.1111 30.7945V33.3839C26.5322 33.5997 27.0303 33.7615 27.6052 33.8694C28.1802 33.9773 28.7862 34.0312 29.4233 34.0312C30.0442 34.0312 30.634 33.9719 31.1928 33.8532C31.7515 33.7345 32.2416 33.539 32.6626 33.2666C33.0837 32.9942 33.4171 32.6381 33.6628 32.1984C33.9084 31.7588 34.0312 31.2154 34.0312 30.568C34.0312 30.0987 33.961 29.6873 33.8207 29.334C33.6819 28.983 33.4755 28.6628 33.2133 28.3913C32.9488 28.1162 32.6316 27.8694 32.2618 27.6509C31.892 27.4325 31.4749 27.2261 31.0105 27.032C30.6704 26.8916 30.3654 26.7555 30.0954 26.6233C29.8255 26.4911 29.596 26.3563 29.4071 26.2187C29.2181 26.0812 29.0723 25.9355 28.9698 25.7817C28.8672 25.628 28.8159 25.4541 28.8159 25.2598C28.8159 25.0818 28.8618 24.9214 28.9536 24.7784C29.0453 24.6354 29.175 24.5127 29.3423 24.4103C29.5097 24.3077 29.7148 24.2282 29.9578 24.1715C30.2007 24.1148 30.4707 24.0865 30.7676 24.0865C30.9836 24.0865 31.2117 24.1027 31.4519 24.1351C31.6922 24.1674 31.9338 24.2173 32.1768 24.2848C32.419 24.352 32.6559 24.4372 32.8853 24.5397C33.1079 24.6383 33.3207 24.7575 33.5211 24.8957V22.4763C33.1269 22.3253 32.6963 22.2133 32.2294 22.1405C31.7624 22.0676 31.2265 22.0312 30.6218 22.0312C30.0064 22.0312 29.4233 22.0973 28.8727 22.2295C28.322 22.3616 27.8374 22.568 27.419 22.8485C27.0006 23.1291 26.6699 23.4864 26.4269 23.9207C26.184 24.3549 26.0625 24.8741 26.0625 25.4783C26.0625 26.2497 26.2852 26.9078 26.7307 27.4527C27.1761 27.9975 27.8522 28.4587 28.7592 28.8364C29.0941 28.9727 29.4262 29.1157 29.7553 29.2653C30.0631 29.4055 30.329 29.5511 30.553 29.7022C30.7771 29.8532 30.9539 30.0177 31.0835 30.1957C31.213 30.3738 31.2778 30.5761 31.2778 30.8027C31.2789 30.9658 31.237 31.1262 31.1563 31.268C31.0754 31.4108 30.9525 31.535 30.7879 31.6402C30.6233 31.7453 30.418 31.8276 30.1724 31.8869C29.9268 31.9462 29.6393 31.976 29.3099 31.976C28.7484 31.976 28.1924 31.8775 27.6417 31.6806C27.0909 31.4837 26.5808 31.1884 26.1111 30.7945ZM21.7952 24.3508H25.125V22.2188H15.8438V24.3508H19.1573V33.8438H21.7952V24.3508Z"
        fill="#3178C6"
      />
    </g>
    <defs>
      <clipPath id="clip0_731_551">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(12 12)"
        />
      </clipPath>
    </defs>
  </svg>
));
TypescriptIcon.displayName = "TypescriptIcon";

export { TypescriptIcon };