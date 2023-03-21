import "@/styles/globals.css";
import "lxgw-wenkai-lite-webfont/style.css";
import { Noto_Sans_SC } from "next/font/google";
import type { Metadata } from "next";
import ThemeProvider from "@/components/Provider/ThemeProvider";
import { TooltipProvider } from "@/ui/primitive/Tooltip";
import JotaiProvider, {
  JotaiDevTools,
} from "@/components/Provider/JotaiProvider";
import { Header } from "@/components/Header";
import { navbarStore } from "@/ui/primitive/Navbar";

// use in production
// https://github.com/vercel/next.js/issues/45080
const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// use in development
// const notoSansSC = { variable: "font-['Noto_Sans_SC']" };

export const metadata: Metadata = {
  title: {
    default: "主页 | Zebeqo",
    template: `%s | Zebeqo`,
  },
  description: "Zebeqo 的个人网站",
  keywords: ["Blog", "Zebeqo", "Next.js", "React", "Tailwind CSS", "Portfolio"],
  authors: [
    {
      name: "zebeqo",
      url: "https://zebeqo.dev",
    },
  ],
  creator: "zebeqo",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://zebeqo.dev/",
    title: "zebeqo.dev",
    description: "Zebeqo 的个人网站",
    siteName: "zebeqo.dev",
    // TODO: OG Image
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let JotaiDevToolsComponent: React.ReactNode = null;
  if (process.env.NODE_ENV === "development") {
    JotaiDevToolsComponent = <JotaiDevTools store={navbarStore} />; // put your debug store here, or remove store prop to debug global store
  }

  return (
    // https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564
    <html
      lang="zh"
      className={`${notoSansSC.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="container mx-auto bg-neutral-2 px-4 selection:bg-primary-9 selection:text-white dark:bg-neutral-1 sm:px-12 lg:px-24 2xl:max-w-screen-xl">
        <ThemeProvider attribute="class" enableSystem={false}>
          <JotaiProvider>
            {/*{JotaiDevToolsComponent}*/}
            <TooltipProvider>
              <Header />
              {children}
            </TooltipProvider>
          </JotaiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
