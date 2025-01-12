import ThemeRegistry from '@/lib/ThemeRegistry';
import { AuthProvider } from '../../src/contexts/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
