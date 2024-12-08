"use client";

import { IoIosSearch} from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { TbMessageFilled } from "react-icons/tb";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import React from "react";

export const ContactUsPage = () => {
  return (
    <main className="bg-white flex flex-col items-center w-full">
      <section className="w-full max-w-[1440px] px-4 py-8">
        <h1 className="text-center text-2xl font-medium text-[#111111]">GET HELP</h1>

        <div className="mt-4 flex justify-center">
          <div className="w-[457px] rounded-lg border text-gray-500/80 py-3 px-4 border-slate-800">
            What can we help you with?
          </div>
          <div className="-ml-11 mt-4">
            <IoIosSearch />
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <article className="flex-1">
            <h2 className="text-xl ml-4 font-semibold text-[#111111]">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="ml-5 mt-4 text-sm text-[#111111]">
              We want to make buying your favourite Nike shoes and gear online fast and easy. We accept:
            </p>
            <ul className="mt-2 ml-5 list-disc pl-5 text-sm text-[#111111]">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Visa Electron, Maestro</li>
              <li>Apple Pay</li>
            </ul>
            <p className="mt-4 ml-5 text-sm text-[#111111]">
              Nike Members can store multiple debit or credit cards in their profile for faster checkout.{" "}
              <a href="#" className="underline">
                Join us
              </a>{" "}
              today.
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-slate-900 rounded-full py-2 px-4 text-white">JOIN US</button>
              <button className="bg-slate-900 rounded-full py-2 px-4 text-white">SHOP NIKE</button>
            </div>
            <div className="ml-2 mt-8">
              <h1 className="text-lg font-semibold">FAQs</h1>
              <h2 className="text-slate-900 font-semibold mt-4">Does my card need international purchases enabled?</h2>
              <p className="text-slate-900/90">
                Yes, we recommend asking your bank to enable international purchases on your card.
              </p>
              <h2 className="text-slate-900 font-semibold mt-4">Can I pay for my order with multiple methods?</h2>
              <p className="text-slate-900/90">
                No, payment for Nike orders can't be split between multiple payment methods.
              </p>
              <h2 className="text-slate-900 font-semibold mt-4">Why don't I see Apple Pay as an option?</h2>
              <p className="text-slate-900/90">
                Ensure you're using a compatible Apple device with a supported card in your Wallet and Safari.
              </p>
              <h2 className="text-slate-900 font-semibold mt-5">Was this answer helpful?</h2>
              <div className="flex mt-2">
                <BiSolidLike className="w-8 h-8 cursor-pointer" />
                <BiSolidDislike className="w-8 h-8 cursor-pointer ml-4" />
              </div>
            </div>
          </article>

          <aside className="w-full lg:w-[300px] text-center border-l h-[650px]">
            <h3 className="text-lg font-semibold text-[#111111]">CONTACT US</h3>
            <ul className="mt-4 space-y-4 text-sm text-[#111111]">
              <li className="font-medium">000 800 919 0566</li>
              <li>
                Products & Orders: 24 hours a day,
                <br /> 7 days a week
              </li>
              <li>
                Company Info & Enquiries: 07:30 -
                <br /> 16:30, Monday - Friday
              </li>
            </ul>
            <div className="flex flex-col mt-8 items-center">
              <RiMessage2Fill className="w-9 h-9" />
              <p>24 hours a day</p>
              <p>7 days a week</p>
              <TbMessageFilled className="w-9 h-9 mt-8" />
              <p>We’ll reply within</p>
              <p>Five business days</p>
              <p>STORE LOCATION</p>
              <p>Find Nike retail stores near you</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
