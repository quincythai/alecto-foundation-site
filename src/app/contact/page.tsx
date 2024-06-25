import type { Metadata } from "next/types";
import RootLayout from "../layout";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Alecto AI Contact Page",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 flex-grow">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl">Email us today.</h2>
          <div>
            <h3 className="font-bold">Media Inquiry</h3>
            <p>pr@alectoai.com</p>
          </div>
          <div>
            <h3 className="font-bold">Partnership</h3>
            <p>info@alectoai.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
