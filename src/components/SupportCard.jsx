import React from "react";

const SupportCard = ({ content,name, title,img }) =>  (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] roundend-full"/>
        <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[15px] leading-[32px] text-white">{name}</h4>
            <p className="font-poppins font-normal text-[8px] leading-[22px] text-dimwhite">{title}</p>
        </div>
      </div>
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-[white] my-10">{content}</p>
    </div>
  );

export default SupportCard;