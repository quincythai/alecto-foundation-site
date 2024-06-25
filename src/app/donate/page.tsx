import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Donate",
  description: "Alecto AI Donate Page",
};

export default function Donate() {
  return (
    <div className="container mx-auto px-4 flex flex-col flex-grow gap-6 min-h-screen">
      <p className="font-bold">
        Your contribution to the Alecto AI Foundation will support survivors of
        image based sexual violence - a form of sexual violence often referred
        to as “nonconsensual deepfake porn”, “revenge porn”, “upskirting” and
        “sextortion.” We see the whole person - not just their face - as worthy
        of dignity, respect and freedom.
      </p>
      <p className="font-bold">
        Here is where your contribution can help us ensure that we stop abusers
        - and the platforms that enable them - while also supporting survivors
        who are leading in this global movement and those who are suffering
        silently without support.
      </p>
      <ol className="list-decimal list-inside">
        <li>
          A global hotline for survivors that uses Alecto tech sourced to search
          every facet of the web to prevent and remove harmful images and track
          URLs for law enforcement (think of this a digital rape kit);
        </li>
        <li>
          A clearinghouse of direct providers of care and legal aid that/who
          would be trained by survivors;
        </li>
        <li>
          A global policy effort to align with the global regulators network and
          key policy levers n the US to ensure policies are survivor centered
          and that all aspects of image based sexual violence are
          survivor-centered and supportive of robust innovation to stop this
          abuse online for both adults and kids.{" "}
        </li>
        <li>Support for survivors in person and through the Alecto AI app.</li>
      </ol>

      <div>
        <p className="font-bold">
          Your donations are tax deductible to the fullest extent of the law.
        </p>
        <ul>
          <li>EIN: 99-0583514</li>
          <li>Phone: 617-785-9243</li>
        </ul>
      </div>
      <Button asChild className="w-24">
        <Link href="https://buy.stripe.com/8wM15z9GBbhhdxe8ww">Donate</Link>
      </Button>
    </div>
  );
}
