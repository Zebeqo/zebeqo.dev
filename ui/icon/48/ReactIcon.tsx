import { forwardRef } from "react";

const ReactIcon = forwardRef<
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
    <rect width="48" height="48" rx="12" fill="#61DAFB" />
    <g clipPath="url(#clip0_731_544)">
      <path
        d="M31.7322 20.2448C31.4769 20.1572 31.2195 20.0758 30.96 20.0007C31.0031 19.8254 31.0431 19.6494 31.08 19.4727C31.6643 16.6344 31.2824 14.3471 29.976 13.5937C28.7238 12.8716 26.6765 13.625 24.6083 15.425C24.4045 15.6024 24.2056 15.785 24.0115 15.9728C23.8814 15.8476 23.7492 15.7252 23.615 15.6055C21.4466 13.6824 19.273 12.8727 17.9687 13.6261C16.7197 14.3502 16.3492 16.5008 16.873 19.1909C16.9266 19.4574 16.9857 19.7224 17.0504 19.9861C16.7447 20.0737 16.4473 20.1666 16.1635 20.2657C13.6226 21.1527 12 22.5405 12 23.9805C12 25.4674 13.7426 26.9596 16.3889 27.8622C16.6031 27.936 16.8195 28.0041 17.0379 28.0667C16.967 28.3499 16.9043 28.6351 16.8501 28.9224C16.3471 31.5655 16.7395 33.665 17.9875 34.385C19.2751 35.128 21.4372 34.3641 23.544 32.5234C23.711 32.3787 23.8779 32.225 24.0449 32.0622C24.255 32.2661 24.4706 32.4636 24.6918 32.6549C26.7329 34.4101 28.7468 35.1175 29.9927 34.3975C31.2814 33.6514 31.6998 31.3965 31.1562 28.6532C31.1144 28.4445 31.0664 28.2309 31.0122 28.0125C31.1638 27.968 31.3127 27.9217 31.4588 27.8737C34.2104 26.9617 36 25.4873 36 23.9805C36 22.5342 34.3252 21.137 31.7322 20.2448ZM25.2835 16.1993C27.0553 14.657 28.7113 14.0497 29.4678 14.4838C30.2713 14.9471 30.5823 16.816 30.0772 19.2671C30.0445 19.4271 30.0087 19.5861 29.9697 19.744C28.9122 19.5043 27.8399 19.3348 26.76 19.2368C26.1412 18.348 25.4631 17.5019 24.7304 16.7043C24.9099 16.5318 25.0936 16.3634 25.2814 16.1993H25.2835ZM19.0852 25.2087C19.303 25.6288 19.5301 26.0427 19.7666 26.4504C20.008 26.8678 20.2591 27.2793 20.52 27.6848C19.777 27.6045 19.0387 27.4861 18.3078 27.3301C18.5207 26.6445 18.7816 25.9318 19.0863 25.2097L19.0852 25.2087ZM19.0852 22.7982C18.7868 22.0907 18.5322 21.3947 18.3235 20.7217C19.007 20.5683 19.7374 20.4431 20.4981 20.3481C20.2435 20.7447 19.9983 21.1481 19.7624 21.5586C19.5259 21.9662 19.3009 22.3794 19.0852 22.7982ZM19.6299 24.0045C19.9457 23.3471 20.2866 22.7022 20.6525 22.0699C21.0157 21.4368 21.4031 20.8194 21.815 20.2177C22.5287 20.1634 23.2602 20.1342 24 20.1342C24.743 20.1342 25.4755 20.1634 26.1892 20.2177C26.5962 20.8194 26.9816 21.4351 27.3454 22.0647C27.7113 22.6949 28.0563 23.3367 28.3805 23.9899C28.0605 24.6494 27.7169 25.297 27.3496 25.9328C26.9857 26.5645 26.6017 27.1836 26.1976 27.7902C25.4859 27.8424 24.7503 27.8674 24 27.8674C23.2529 27.8674 22.5266 27.8445 21.8275 27.7986C21.4129 27.1934 21.0219 26.5732 20.6546 25.9381C20.2887 25.305 19.9471 24.6601 19.6299 24.0034V24.0045ZM28.2386 26.4462C28.4793 26.0267 28.711 25.6024 28.9336 25.1732C29.2385 25.8628 29.5074 26.5677 29.7391 27.2852C29.0002 27.451 28.2531 27.5781 27.5009 27.6661C27.7541 27.264 27.9997 26.857 28.2376 26.4452L28.2386 26.4462ZM28.9231 22.7993C28.7019 22.3791 28.4723 21.9631 28.2344 21.5513C27.9993 21.1464 27.7558 20.7464 27.504 20.3513C28.2689 20.4483 29.0024 20.5767 29.6922 20.7342C29.4707 21.4354 29.214 22.1239 28.9231 22.7993ZM24.0104 17.44C24.5098 17.9842 24.9814 18.5532 25.4233 19.145C24.4786 19.0998 23.5332 19.0998 22.5871 19.145C23.0536 18.5294 23.5304 17.9575 24.0104 17.44ZM18.4842 14.513C19.2877 14.0487 21.0616 14.7113 22.9336 16.3735C23.0536 16.48 23.1736 16.5906 23.2936 16.7054C22.5566 17.5031 21.8734 18.3487 21.2483 19.2368C20.1716 19.3335 19.1022 19.4998 18.047 19.7346C17.9857 19.4897 17.9308 19.2427 17.8821 18.9937V18.9958C17.4303 16.6897 17.7297 14.9513 18.4842 14.5151V14.513ZM17.3113 27.0796C17.113 27.0226 16.9162 26.961 16.7207 26.8949C15.7037 26.575 14.7543 26.0706 13.92 25.4069C13.6812 25.2428 13.4787 25.0314 13.3249 24.7859C13.1711 24.5404 13.0692 24.2659 13.0257 23.9794C13.0257 23.1061 14.328 21.9916 16.5005 21.2351C16.7739 21.1391 17.0494 21.0521 17.327 20.9742C17.6493 22.009 18.0397 23.0213 18.4957 24.0045C18.034 25.002 17.6387 26.0289 17.3123 27.0786L17.3113 27.0796ZM22.8689 31.7544C22.0838 32.4745 21.173 33.0439 20.1819 33.4344C19.9208 33.5596 19.6369 33.6299 19.3476 33.641C19.0583 33.6521 18.7697 33.6038 18.4998 33.4991C17.7433 33.0608 17.4282 31.3767 17.857 29.1165C17.9085 28.8487 17.967 28.5829 18.0323 28.3193C19.0988 28.5481 20.1795 28.7043 21.2671 28.7867C21.8972 29.6796 22.5853 30.5302 23.327 31.3328C23.1781 31.4768 23.0257 31.617 22.8699 31.7534L22.8689 31.7544ZM24.0397 30.5941C23.5534 30.0702 23.0692 29.4901 22.5955 28.8661C23.0546 28.8841 23.5228 28.8932 24 28.8932C24.489 28.8932 24.9718 28.8827 25.4483 28.8619C25.0087 29.4629 24.5385 30.0411 24.0397 30.5941ZM30.2661 32.0205C30.244 32.3094 30.1629 32.5907 30.0277 32.847C29.8926 33.1033 29.7063 33.3291 29.4803 33.5106C28.7238 33.9488 27.1064 33.3791 25.3617 31.8786C25.1621 31.7074 24.961 31.5245 24.7586 31.3297C25.486 30.5245 26.1581 29.6711 26.7704 28.7753C27.8641 28.683 28.9502 28.5157 30.0209 28.2744C30.0696 28.472 30.1127 28.6654 30.1503 28.8546C30.3825 29.8942 30.4214 30.9678 30.265 32.0215L30.2661 32.0205ZM31.1363 26.9001C31.0038 26.944 30.8692 26.9857 30.7315 27.0254C30.3961 25.9857 29.9903 24.9702 29.5169 23.9857C29.9728 23.0146 30.3632 22.0141 30.6856 20.9909C30.9297 21.0608 31.1687 21.137 31.3983 21.2153C33.6209 21.9791 34.9753 23.1102 34.9753 23.9805C34.9753 24.9092 33.5113 26.1134 31.1353 26.9001H31.1363Z"
        fill="white"
      />
      <path
        d="M24 21.8371C24.424 21.8371 24.8385 21.9629 25.191 22.1985C25.5435 22.4341 25.8182 22.7689 25.9803 23.1607C26.1425 23.5525 26.1848 23.9835 26.102 24.3993C26.0191 24.8152 25.8148 25.1971 25.5148 25.4967C25.2148 25.7964 24.8328 26.0003 24.4169 26.0828C24.001 26.1653 23.5699 26.1225 23.1783 25.96C22.7867 25.7974 22.4521 25.5224 22.2169 25.1697C21.9816 24.8169 21.8563 24.4023 21.8567 23.9783C21.8575 23.4104 22.0837 22.8661 22.4856 22.4648C22.8874 22.0636 23.4321 21.8371 24 21.8371Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_731_544">
        <rect
          width="24"
          height="21.3532"
          fill="white"
          transform="translate(12 13.3234)"
        />
      </clipPath>
    </defs>
  </svg>
));
ReactIcon.displayName = "ReactIcon";

export { ReactIcon };