import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className="w-full max-w-4/5 mx-4 my-10">
    <h1 className="text-3xl my-4 font-bold">
      Stop Overspending.
      <br/>
      Audit Your AI Spending for Free
    </h1>
    <p className="mb-6 text-sm text-gray-600">
      AI is transforming the way we work and live, but it can also be expensive. Many businesses and individuals are overspending on AI without realizing it. With our free AI spending audit, you can identify areas where you can save money and optimize your AI investments. Do not let overspending on AI drain your resources get your free audit today and start saving!
    </p>
    
    <div>
      <button className="bg-black text-white p-3 rounded-3xl text-md font-bold hover:scale-105 ">
        Run your Audit for free
      </button>
    </div>
  </div>
  </>
  );
}
