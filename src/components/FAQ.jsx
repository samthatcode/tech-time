import React from "react";
import FAQCompo from "./FAQCompo";
import { faqData } from "../data";

const FAQ = () => {
  return (
    <div id="community" className="bg-[#ffffff]  pt-5  ">
      <div className="container mx-auto px-4 md:px-40 ">
        <div className="text-center mb-8">
          <div className="capitalize text-4xl font-bold text-[#000F24] ">
            frequently asked questions
          </div>
          <div className="mt-2 capitalize text-[#845757]">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </div>
          {/* <div className="text-[#004DB3] font-[900] text-[24px] flex-none order-0 flex-grow-0 w-[333px] h-[32px] "> Is there a free trial available?</div> */}
        </div>
        <div className="mx-auto flex w-[90%] max-w-[75rem] flex-col justify-center">
          {faqData.map((faq, index) => (
            <FAQCompo key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
