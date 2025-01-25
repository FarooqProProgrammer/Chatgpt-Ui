import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/Layout";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
