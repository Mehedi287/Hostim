import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const AskQuestion = () => {
  const [open, setOpen] = useState(0);
  const [first, setFirst] = useState(10);
  useEffect(() => {
    setFirst(0);
  }, []);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setFirst(1);
  };
  function Icon({ id, open }) {
    return (
      <div className="flex h-full justify-center items-center">
        {id === open ? (
          <div className="border-t-[2px] border-red-500 w-[47px] "></div>
        ) : (
          <div className="w-[47px] h-[47px] relative">
            <div className="absolute    border border-green-900"></div>
            <div className="absolute     rotate-90 border  border-green-900"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mt-[40px] lg:ml-[99.6px]  lg:mr-[99.6px]  lg:px-[96px] py-1 pb-8 px-3 md:px-[0px] mx-auto w-full  ">
      <div className="mb-[100px]">
        {" "}
        <h1 className="  text-center text-[32px] md:text-[40px] font-[600]   mt-4  leading-[32px] md:leading-[48px] ">
          Frequently Asked Questions
        </h1>
        <p>Everything you need to know about the product and billing.</p>
      </div>
      <div>
        <>
          <Accordion
            open={first === 0 ? true : open === 1}
            icon={<Icon id={first === 0 ? 0 : 1} open={open} />}
            onClick={() => handleOpen(1)}
          >
            <AccordionHeader className="text-[32px] font-[400]">
              Is there a free trial available?
            </AccordionHeader>
            <AccordionBody className=" font-[300] text-gray-700 text-[18px] text-start">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            onClick={() => handleOpen(2)}
          >
            <AccordionHeader className="text-[32px] font-[400]">
              Can I change my plan later?
            </AccordionHeader>
            <AccordionBody className="font-[300] text-gray-700 text-[18px] text-start">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            onClick={() => handleOpen(3)}
          >
            <AccordionHeader className="text-[32px] font-[400]">
              What is your cancellation policy?
            </AccordionHeader>
            <AccordionBody className="font-[300] text-gray-700 text-[18px] text-start">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            icon={<Icon id={4} open={open} />}
            onClick={() => handleOpen(4)}
          >
            <AccordionHeader className="text-[32px] font-[400]">
              Can other info be added to an invoice?
            </AccordionHeader>
            <AccordionBody className="font-[300] text-gray-700 text-[18px] text-start">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            icon={<Icon id={5} open={open} />}
            onClick={() => handleOpen(5)}
          >
            <AccordionHeader className="text-[32px] font-[400]">
              How does billing work?
            </AccordionHeader>
            <AccordionBody className="font-[300] text-gray-700 text-[18px] text-start">
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
        </>
      </div>
    </div>
  );
};

export default AskQuestion;
