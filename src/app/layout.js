import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "توییترفا؛ برگزیده توییتر فارسی",
  description: "توییت های برگزیده توییتر فارسی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
