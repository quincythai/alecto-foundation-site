import Image from "next/image";
import Subscribe from "@/components/Subscribe";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Alecto AI",
  description: "Alecto AI Home Page",
};

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 flex flex-col gap-6">
        <h2 className="text-3xl">
          Thank you for joining Alecto AI and believing in the power of
          survivors to heal thrive and become the advocates.
        </h2>
        <p>
          Thank you for joining Alecto AI and believing in the power of
          survivors to heal, thrive and become the advocates we need today to
          stop image based sexual violence in the future.
        </p>
        <p>
          The Alecto AI Foundation globally supports survivors of all forms of
          image based sexual violence. We believe that survivors can and should
          lead the movement to ensure that no one else suffers alone after
          experiencing this form of sexual violence. Digital safety should be
          the right of everyone, not the privilege of the few.
        </p>

        <div className="font-extrabold">
          <p>
            “I wish that we lived in a world where this app is not necessary,
            but thank you for making this app.”
          </p>
          <p>— Alecto AI User Chat Forum</p>
        </div>

        <div className="flex gap-6">
          <Image
            src="/images/home2.jpg"
            alt="woman holding up hand with x mark"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "30%", height: "auto" }}
            className="rounded-md"
          />

          <div className="flex flex-col gap-8 justify-center items-center w-full">
            <h2>Survivors do not have to suffer alone. We offer:</h2>
            <ol className="list-decimal list-inside">
              <li>A community of lived experience and survivorship</li>
              <li>
                Connections to resources to learn where and how to get help
              </li>
              <li>
                Access to group chats and forums to share, learn and heal.
              </li>
            </ol>
          </div>
        </div>

        <div className="font-extrabold">
          <p>
            “Please know that you are not alone in this. Many others have gone
            through similar experiences and have come out stronger on the other
            side. It’s important to remember that you are not defined by what
            has happened to you.”
          </p>
          <p>— Alecto AI User Chat Forum</p>
        </div>
      </div>

      <Subscribe />
    </>
  );
}
