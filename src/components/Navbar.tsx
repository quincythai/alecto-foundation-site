import Image from "next/image";
import Link from "next/link";
import { PT_Sans } from "next/font/google";

const pt_sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className={`relative mb-4 ${pt_sans.className}`}>
      <div className="container mx-auto flex justify-between items-start p-6 relative z-10 h-48">
        <Link href="/" className="text-3xl text-white items-center flex gap-4">
          <Image
            src="/images/logo_white.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "40px", height: "auto" }}
            alt="logo"
          />
          Alecto AI
        </Link>

        <div className="flex gap-4">
          <Link
            href="/contact"
            className="text-l text-white hover:text-gray-300 hover:underline transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/donate"
            className="text-l text-white hover:text-gray-300 hover:underline transition duration-300"
          >
            Donate
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/images/gray-background.jpg"
          layout="fill"
          objectFit="cover"
          alt="background"
          className="z-0"
        />
      </div>
    </nav>
  );
}
