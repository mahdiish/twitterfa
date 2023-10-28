import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "توییترفا؛ برگزیده توییتر فارسی",
  description: "توییت های برگزیده توییتر فارسی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="rtl font-vazir">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
