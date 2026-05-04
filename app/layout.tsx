import "./globals.css";
import { Metadata } from "next";
import { primary, secondary } from "@/fonts";
import { AOSInit } from "@/src/utils/aos";
import { ScrollToTopButton } from "@/src/components/scroll-to-top";
import { cn } from "@/src/utils/shadcn";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/src/components/theme-provider";
import { ModeToggle } from "@/src/components/mode-toggle";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Moshate Consulting",
  description:
    "Moshate Consulting - ICT and Management Consulting firm focused on innovative business management and digital solution services.",
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        primary.variable,
        secondary.variable,
        "font-primary text-base leading-[1.875] text-accent-800 [&.dark]:text-body",
      )}
    >
      <AOSInit />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className={cn("text-accent-800 dark:text-body")}>
            <main>{children}</main>
          </div>
        </ThemeProvider>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
