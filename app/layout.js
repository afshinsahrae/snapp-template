import "./globals.css";

export const metadata = {
  title: "وب سایت اسنپ",
  description: "این درگاه متعلق به اسنپ است.",
  icons: { icon: "/img/Untitled.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" >
      <body>{children}</body>
    </html>
  );
}
