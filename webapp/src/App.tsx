import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Providers } from "./providers/providers";
import { ThemeProvider } from "./providers/theme-provider";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Contracts from "./components/Contracts";
import { NavBar } from "./components/navBar";

export function App() {
  return (
    <Suspense>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Providers>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Providers>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
