import Footer from "./_components/footer";
import Header from "./_components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
