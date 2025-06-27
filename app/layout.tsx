// app/layout.tsx
import Navbar from '../components/Navbar';
import './globals.css'

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio de Hanane Mouftaou',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
