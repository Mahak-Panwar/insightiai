import Link from "next/link";

export default function Home() {
  return (
  <>
  <div className="w-full max-w-4/5 mx-4 my-10 flex flex-wrap justify-center flex-col items-center scroll-smooth">
    <div className=" text-center my-24">
      <h1 className="text-6xl my-4 font-bold">
        Audit Your AI Spend,
        <br/>
      Save Thousands
      </h1>
      <p className="mb-6 text-lg text-gray-600 max-w-2xl">
        Discover how much you can save on your AI costs with our free audit. Don't miss out on potential savings – get your free audit today!
      </p>
      
      <div className="flex gap-5 justify-center">
        <Link href="/auditForm" className="bg-black text-white p-3 rounded-2xl text-md font-bold hover:scale-105 ">
          Run your free audit
        </Link>
        <Link href="#how-it-works" className="border border-indigo-200  p-3 rounded-2xl text-md font-bold hover:scale-105 ">
          See How It Works
        </Link>
        
      </div>
    </div>
<div className="text-center">
  <h3 className="text-5xl font-bold mb-6">Spend Your Money Wisely</h3>
  <p className="mb-6 text-lg text-gray-600 max-w-4xl">
    Don't let your hard-earned money go to waste on unnecessary AI expenses. Our free audit helps you identify areas where you can optimize your AI spend, ensuring that every dollar is used effectively. Take control of your AI costs and start saving today!
  </p>
</div>
<section id="how-it-works" className=" scroll-smooth py-16">
  <div className="container mx-auto px-4">
    <h3 className="text-5xl font-bold text-center mb-6">How It Works</h3>
    <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
      Our simple three-step process makes it easy to audit your AI spending and identify savings opportunities.
    </p>
    <div className="flex flex-col md:flex-row mt-12 gap-8 justify-center w-full">
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold mb-4">Step 1: Enter your AI spend Expenses</h4>
        <p className="text-gray-600">
       Input Your monthly, spend and usage details of your AI services to get a comprehensive analysis of your costs.
        </p>
      </div>
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold mb-4">Step 2: Get Instant Insights</h4>
        <p className="text-gray-600">
     See a detailed breakdown of your AI expenses, including which services are costing you the most and where you can cut costs.
        </p>
      </div>
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold mb-4">Step 3: Save and Share Your Report</h4>
        <p className="text-gray-600">
         Save your audit report for future reference and share it with your team to make informed decisions about your AI spending.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container mx-auto px-4 py-16">
    <h3 className="text-5xl font-bold text-center mb-12">
      Trusted By Users
    </h3>
  
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold mb-4">John D., Tech Startup Founder</h4>
        <p className="text-gray-600">
          "The free AI spend audit was a game-changer for our startup. We identified several areas where we were overspending and were able to cut our AI costs by 30%!"
        </p>
      </div>
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold mb-4">Sarah M., Freelance AI Consultant</h4>
        <p className="text-gray-600">
          "As a freelancer, every dollar counts. The audit helped me optimize my AI expenses and save money, allowing me to invest more in my business."
        </p>
      </div>
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold mb-4">Emily R., E-commerce Business Owner</h4>
        <p className="text-gray-600">
          "I was surprised at how much I was overspending on AI services. The audit provided clear insights and actionable recommendations that helped me save a significant amount on my monthly costs."
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container mx-auto px-4 py-16">
    <h3 className="text-5xl font-bold text-center mb-6">Don't Miss Out on Savings</h3>
    <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
      Take advantage of our free AI spend audit and start saving money today. It's quick, easy, and could save you thousands on your AI costs.
    </p>
    <div className="flex justify-center">
      <button className="bg-black text-white p-3 rounded-2xl text-md font-bold hover:scale-105 ">
        Run your free audit
      </button>
    </div>
  </div>
</section>
  </div>

  </>
  );
}
