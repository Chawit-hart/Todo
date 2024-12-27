// src/app/layout.tsx
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Todos</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Todo App</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
