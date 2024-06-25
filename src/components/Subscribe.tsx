import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import { Button } from "./ui/button";

export default function Subscribe() {
  return (
    <div className="bg-gray-300 flex flex-col mx-auto p-4 pb-8 mt-4">
      <div className="container">
        <h2 className="text-3xl text-center">Subscribe</h2>
        <p className="font-light text-center">Sign up to stay in touch!</p>
        <div className="flex justify-center">
          {/* <SubscribeForm /> */}
          <Button asChild className="w-24">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdG_ietN7BnboIkTT3ZRl2x1xZGKgcNbPOyv65M9cIQ1qRoTQ/viewform">
              Form
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
