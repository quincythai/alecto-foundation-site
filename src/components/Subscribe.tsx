import SubscribeForm from "./SubscribeForm";

export default function Subscribe() {
  return (
    <div className="bg-gray-300 flex flex-col mx-auto gap-8 p-4 pb-8 mt-4">
      <div className="container">
        <h2 className="text-3xl text-center">Subscribe</h2>
        <p className="font-light text-center">Sign up to stay in touch!</p>
        <div className="flex justify-center">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}
