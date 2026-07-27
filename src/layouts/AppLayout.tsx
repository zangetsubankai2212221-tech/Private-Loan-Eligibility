import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { useEffect } from "react";

export function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative isolate flex min-h-screen flex-col">
      <Navbar />
      <main className="relative flex-1">
        <Outlet />
      </main>
    </div>
  );
}
