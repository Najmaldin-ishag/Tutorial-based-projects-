import React from "react";
import Navbar from "../components/Navbar";
import "@/app/globals.css";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        <main className="font-work-sans">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

export default layout;
