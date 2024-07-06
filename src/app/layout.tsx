import type { Metadata } from "next";
import "./globals.css";
import AppLayouts from "@/components/layouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/utils/redux/provider";

export const metadata: Metadata = {
  title: "Best baby shop in UAE | Online baby shop in UAE | Smart Baby",
  description: "Best baby shop in UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ToastContainer />
          <AppLayouts>{children}</AppLayouts>
        </ReduxProvider>
      </body>
    </html>
  );
}
