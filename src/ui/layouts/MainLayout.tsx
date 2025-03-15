import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto mt-6">{children}</main>
      <Footer />

    </div>
  );
}
