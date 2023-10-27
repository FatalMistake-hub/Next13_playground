import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/atoms/theme-provider";
import { ModeToggle } from "@/components/molecules/mode-toggle";
import LoginForm from "@/components/molecules/login-form";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import getCurrentUser from "./actions/getCurrentUser";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/components/atoms/auth-provider";
import NavBar from "@/components/organisms/nav-bar";
const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Play Ground",
  description: "...",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider session={currentUser}>
              <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
                  <div className="lg:col-span-3">
                    <div className="py-8 lg:pr-4 lg:pr-8">
                      <div className="space-y-5 lg:space-y-8">
                        <div
                          className="w-full justify-between flex"
                          suppressHydrationWarning={true}
                        >
                          <NavBar />
                        </div>
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AuthProvider>
          </ThemeProvider>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
