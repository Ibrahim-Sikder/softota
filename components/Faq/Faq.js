"use client";

import React from "react";
import style from "./Faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Faq = () => {
  return (
    <div className="bg-[#EDFAFF] py-14 px-14">
      <div>
        <h2 className="text-3xl font-bold w-full text-center mb-10">FAQ</h2>
      </div>
      <div className={style.faqWrap}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Flight: FAQ Question & Answer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="mb-5">
                <p>
                  <strong>Q:</strong> I have a debit card. May I use my debit
                  card to book a flight from ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, you can easily book a flight with any
                  local or international card, debit or even your credit card.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> আমার ডেবিট কার্ড আছে। আমি কি ডেবিট
                  কার্ড ব্যবহার করে শেয়ারট্রিপ থেকে ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, আপনি আপনার লোকাল কিংবা
                  ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে
                  শেয়ারট্রি থেকে খুব সহজেই ফ্লাইট বুক করত পারবেন
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong> Can you book a domestic flight on
                  ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, we provide both domestic and
                  international flight services. Please let us know your travel
                  plan to assist you in finding the preferred flight.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong> প্রশ্ন:</strong> আমি কি শেয়ারট্রিপ থেকে ডোমেস্টিক
                  ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং
                  ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা
                  আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে
                  সাহায্য করতে পারি।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Can I make the payment later for an online
                  booking on ShareTrip?
                </p>
                <p>
                  <strong> A: </strong> Unfortunately, you cannot hold the
                  booking unless you pay. You instantly need to pay the amount
                  to confirm your purchase made online.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> অনলাইন বুকিং-এর ক্ষেত্রে আমি কি
                  পেমেন্ট পরে করতে পারি?
                </p>
                <p>
                  <strong>উত্তর:</strong> আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা
                  করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত
                  হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>May I have a hard-copy receipt sent by
                  post?
                </p>
                <p>
                  <strong> A: </strong> We don t send hard copy receipts by
                  post. We will email your booking details and confirmation to
                  you. Alternatively, you can come to our office for a hard copy
                  of your purchase, and we will provide the hard copy to you.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  pathano হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> দুঃখিত, ডাকযোগে রিসিপ্টের হার্ড কপি
                  পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত
                  বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে
                  রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Will it cost any extra charge if I purchase
                  through a card from ShareTrip?
                </p>
                <p>
                  <strong> A: </strong>During an online or an offline
                  transaction there is a convenience fee that customers have to
                  pay. However, there is no extra charge on anything you
                  purchase from ShareTrip be it online or offline.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ-এ কার্ডের মাধ্যমে বুকিং
                  দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> অনলাইন বা অফলাইন বুকিংয়ের সময় একটি
                  কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, শেয়ারট্রিপ-এ
                  থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ
                  নেই।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>What is ST Convenience Fee?
                </p>
                <p>
                  <strong> A: </strong>ST Convenience fee is the charge that the
                  customer needs to pay for the support, convenience and service
                  that he/she is availing from the online platforms.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ কনভিনিয়েন্স ফি কী?
                </p>
                <p>
                  <strong>উত্তর:</strong> কাস্টমাররা শেয়ারট্রিপ থেকে অনলাইনে
                  যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয়
                  চার্জকে শেয়ারট্রিপ কনভিনিয়েন্স ফি বলা হয়।
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Hotel: FAQ Question & Answer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="mb-5">
                <p>
                  <strong>Q:</strong> I have a debit card. May I use my debit
                  card to book a flight from ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, you can easily book a flight with any
                  local or international card, debit or even your credit card.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> আমার ডেবিট কার্ড আছে। আমি কি ডেবিট
                  কার্ড ব্যবহার করে শেয়ারট্রিপ থেকে ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, আপনি আপনার লোকাল কিংবা
                  ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে
                  শেয়ারট্রি থেকে খুব সহজেই ফ্লাইট বুক করত পারবেন
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong> Can you book a domestic flight on
                  ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, we provide both domestic and
                  international flight services. Please let us know your travel
                  plan to assist you in finding the preferred flight.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong> প্রশ্ন:</strong> আমি কি শেয়ারট্রিপ থেকে ডোমেস্টিক
                  ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং
                  ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা
                  আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে
                  সাহায্য করতে পারি।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Can I make the payment later for an online
                  booking on ShareTrip?
                </p>
                <p>
                  <strong> A: </strong> Unfortunately, you cannot hold the
                  booking unless you pay. You instantly need to pay the amount
                  to confirm your purchase made online.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> অনলাইন বুকিং-এর ক্ষেত্রে আমি কি
                  পেমেন্ট পরে করতে পারি?
                </p>
                <p>
                  <strong>উত্তর:</strong> আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা
                  করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত
                  হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>May I have a hard-copy receipt sent by
                  post?
                </p>
                <p>
                  <strong> A: </strong> We don t send hard copy receipts by
                  post. We will email your booking details and confirmation to
                  you. Alternatively, you can come to our office for a hard copy
                  of your purchase, and we will provide the hard copy to you.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  pathano হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> দুঃখিত, ডাকযোগে রিসিপ্টের হার্ড কপি
                  পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত
                  বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে
                  রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Will it cost any extra charge if I purchase
                  through a card from ShareTrip?
                </p>
                <p>
                  <strong> A: </strong>During an online or an offline
                  transaction there is a convenience fee that customers have to
                  pay. However, there is no extra charge on anything you
                  purchase from ShareTrip be it online or offline.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ-এ কার্ডের মাধ্যমে বুকিং
                  দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> অনলাইন বা অফলাইন বুকিংয়ের সময় একটি
                  কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, শেয়ারট্রিপ-এ
                  থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ
                  নেই।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>What is ST Convenience Fee?
                </p>
                <p>
                  <strong> A: </strong>ST Convenience fee is the charge that the
                  customer needs to pay for the support, convenience and service
                  that he/she is availing from the online platforms.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ কনভিনিয়েন্স ফি কী?
                </p>
                <p>
                  <strong>উত্তর:</strong> কাস্টমাররা শেয়ারট্রিপ থেকে অনলাইনে
                  যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয়
                  চার্জকে শেয়ারট্রিপ কনভিনিয়েন্স ফি বলা হয়।
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Visa: FAQ Question & Answer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="mb-5">
                <p>
                  <strong>Q:</strong> I have a debit card. May I use my debit
                  card to book a flight from ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, you can easily book a flight with any
                  local or international card, debit or even your credit card.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> আমার ডেবিট কার্ড আছে। আমি কি ডেবিট
                  কার্ড ব্যবহার করে শেয়ারট্রিপ থেকে ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, আপনি আপনার লোকাল কিংবা
                  ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে
                  শেয়ারট্রি থেকে খুব সহজেই ফ্লাইট বুক করত পারবেন
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong> Can you book a domestic flight on
                  ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, we provide both domestic and
                  international flight services. Please let us know your travel
                  plan to assist you in finding the preferred flight.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong> প্রশ্ন:</strong> আমি কি শেয়ারট্রিপ থেকে ডোমেস্টিক
                  ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং
                  ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা
                  আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে
                  সাহায্য করতে পারি।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Can I make the payment later for an online
                  booking on ShareTrip?
                </p>
                <p>
                  <strong> A: </strong> Unfortunately, you cannot hold the
                  booking unless you pay. You instantly need to pay the amount
                  to confirm your purchase made online.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> অনলাইন বুকিং-এর ক্ষেত্রে আমি কি
                  পেমেন্ট পরে করতে পারি?
                </p>
                <p>
                  <strong>উত্তর:</strong> আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা
                  করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত
                  হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>May I have a hard-copy receipt sent by
                  post?
                </p>
                <p>
                  <strong> A: </strong> We don t send hard copy receipts by
                  post. We will email your booking details and confirmation to
                  you. Alternatively, you can come to our office for a hard copy
                  of your purchase, and we will provide the hard copy to you.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  pathano হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> দুঃখিত, ডাকযোগে রিসিপ্টের হার্ড কপি
                  পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত
                  বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে
                  রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Will it cost any extra charge if I purchase
                  through a card from ShareTrip?
                </p>
                <p>
                  <strong> A: </strong>During an online or an offline
                  transaction there is a convenience fee that customers have to
                  pay. However, there is no extra charge on anything you
                  purchase from ShareTrip be it online or offline.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ-এ কার্ডের মাধ্যমে বুকিং
                  দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> অনলাইন বা অফলাইন বুকিংয়ের সময় একটি
                  কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, শেয়ারট্রিপ-এ
                  থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ
                  নেই।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>What is ST Convenience Fee?
                </p>
                <p>
                  <strong> A: </strong>ST Convenience fee is the charge that the
                  customer needs to pay for the support, convenience and service
                  that he/she is availing from the online platforms.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ কনভিনিয়েন্স ফি কী?
                </p>
                <p>
                  <strong>উত্তর:</strong> কাস্টমাররা শেয়ারট্রিপ থেকে অনলাইনে
                  যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয়
                  চার্জকে শেয়ারট্রিপ কনভিনিয়েন্স ফি বলা হয়।
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Tours: FAQ Question & Answer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="mb-5">
                <p>
                  <strong>Q:</strong> I have a debit card. May I use my debit
                  card to book a flight from ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, you can easily book a flight with any
                  local or international card, debit or even your credit card.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> আমার ডেবিট কার্ড আছে। আমি কি ডেবিট
                  কার্ড ব্যবহার করে শেয়ারট্রিপ থেকে ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, আপনি আপনার লোকাল কিংবা
                  ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে
                  শেয়ারট্রি থেকে খুব সহজেই ফ্লাইট বুক করত পারবেন
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong> Can you book a domestic flight on
                  ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, we provide both domestic and
                  international flight services. Please let us know your travel
                  plan to assist you in finding the preferred flight.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong> প্রশ্ন:</strong> আমি কি শেয়ারট্রিপ থেকে ডোমেস্টিক
                  ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং
                  ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা
                  আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে
                  সাহায্য করতে পারি।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Can I make the payment later for an online
                  booking on ShareTrip?
                </p>
                <p>
                  <strong> A: </strong> Unfortunately, you cannot hold the
                  booking unless you pay. You instantly need to pay the amount
                  to confirm your purchase made online.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> অনলাইন বুকিং-এর ক্ষেত্রে আমি কি
                  পেমেন্ট পরে করতে পারি?
                </p>
                <p>
                  <strong>উত্তর:</strong> আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা
                  করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত
                  হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>May I have a hard-copy receipt sent by
                  post?
                </p>
                <p>
                  <strong> A: </strong> We don t send hard copy receipts by
                  post. We will email your booking details and confirmation to
                  you. Alternatively, you can come to our office for a hard copy
                  of your purchase, and we will provide the hard copy to you.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  pathano হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> দুঃখিত, ডাকযোগে রিসিপ্টের হার্ড কপি
                  পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত
                  বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে
                  রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Will it cost any extra charge if I purchase
                  through a card from ShareTrip?
                </p>
                <p>
                  <strong> A: </strong>During an online or an offline
                  transaction there is a convenience fee that customers have to
                  pay. However, there is no extra charge on anything you
                  purchase from ShareTrip be it online or offline.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ-এ কার্ডের মাধ্যমে বুকিং
                  দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> অনলাইন বা অফলাইন বুকিংয়ের সময় একটি
                  কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, শেয়ারট্রিপ-এ
                  থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ
                  নেই।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>What is ST Convenience Fee?
                </p>
                <p>
                  <strong> A: </strong>ST Convenience fee is the charge that the
                  customer needs to pay for the support, convenience and service
                  that he/she is availing from the online platforms.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ কনভিনিয়েন্স ফি কী?
                </p>
                <p>
                  <strong>উত্তর:</strong> কাস্টমাররা শেয়ারট্রিপ থেকে অনলাইনে
                  যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয়
                  চার্জকে শেয়ারট্রিপ কনভিনিয়েন্স ফি বলা হয়।
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Buses: FAQ Question & Answer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="mb-5">
                <p>
                  <strong>Q:</strong> I have a debit card. May I use my debit
                  card to book a flight from ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, you can easily book a flight with any
                  local or international card, debit or even your credit card.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> আমার ডেবিট কার্ড আছে। আমি কি ডেবিট
                  কার্ড ব্যবহার করে শেয়ারট্রিপ থেকে ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, আপনি আপনার লোকাল কিংবা
                  ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে
                  শেয়ারট্রি থেকে খুব সহজেই ফ্লাইট বুক করত পারবেন
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong> Can you book a domestic flight on
                  ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, we provide both domestic and
                  international flight services. Please let us know your travel
                  plan to assist you in finding the preferred flight.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong> প্রশ্ন:</strong> আমি কি শেয়ারট্রিপ থেকে ডোমেস্টিক
                  ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং
                  ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা
                  আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে
                  সাহায্য করতে পারি।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Can I make the payment later for an online
                  booking on ShareTrip?
                </p>
                <p>
                  <strong> A: </strong> Unfortunately, you cannot hold the
                  booking unless you pay. You instantly need to pay the amount
                  to confirm your purchase made online.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> অনলাইন বুকিং-এর ক্ষেত্রে আমি কি
                  পেমেন্ট পরে করতে পারি?
                </p>
                <p>
                  <strong>উত্তর:</strong> আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা
                  করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত
                  হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>May I have a hard-copy receipt sent by
                  post?
                </p>
                <p>
                  <strong> A: </strong> We don t send hard copy receipts by
                  post. We will email your booking details and confirmation to
                  you. Alternatively, you can come to our office for a hard copy
                  of your purchase, and we will provide the hard copy to you.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  pathano হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> দুঃখিত, ডাকযোগে রিসিপ্টের হার্ড কপি
                  পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত
                  বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে
                  রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Will it cost any extra charge if I purchase
                  through a card from ShareTrip?
                </p>
                <p>
                  <strong> A: </strong>During an online or an offline
                  transaction there is a convenience fee that customers have to
                  pay. However, there is no extra charge on anything you
                  purchase from ShareTrip be it online or offline.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ-এ কার্ডের মাধ্যমে বুকিং
                  দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> অনলাইন বা অফলাইন বুকিংয়ের সময় একটি
                  কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, শেয়ারট্রিপ-এ
                  থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ
                  নেই।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>What is ST Convenience Fee?
                </p>
                <p>
                  <strong> A: </strong>ST Convenience fee is the charge that the
                  customer needs to pay for the support, convenience and service
                  that he/she is availing from the online platforms.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ কনভিনিয়েন্স ফি কী?
                </p>
                <p>
                  <strong>উত্তর:</strong> কাস্টমাররা শেয়ারট্রিপ থেকে অনলাইনে
                  যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয়
                  চার্জকে শেয়ারট্রিপ কনভিনিয়েন্স ফি বলা হয়।
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Train: FAQ Question & Answer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="mb-5">
                <p>
                  <strong>Q:</strong> I have a debit card. May I use my debit
                  card to book a flight from ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, you can easily book a flight with any
                  local or international card, debit or even your credit card.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> আমার ডেবিট কার্ড আছে। আমি কি ডেবিট
                  কার্ড ব্যবহার করে শেয়ারট্রিপ থেকে ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, আপনি আপনার লোকাল কিংবা
                  ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে
                  শেয়ারট্রি থেকে খুব সহজেই ফ্লাইট বুক করত পারবেন
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong> Can you book a domestic flight on
                  ShareTrip?
                </p>
                <p>
                  <strong>A:</strong> Yes, we provide both domestic and
                  international flight services. Please let us know your travel
                  plan to assist you in finding the preferred flight.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong> প্রশ্ন:</strong> আমি কি শেয়ারট্রিপ থেকে ডোমেস্টিক
                  ফ্লাইট বুক করতে পারবো?
                </p>
                <p>
                  <strong>উত্তর:</strong> হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং
                  ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা
                  আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে
                  সাহায্য করতে পারি।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Can I make the payment later for an online
                  booking on ShareTrip?
                </p>
                <p>
                  <strong> A: </strong> Unfortunately, you cannot hold the
                  booking unless you pay. You instantly need to pay the amount
                  to confirm your purchase made online.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong> অনলাইন বুকিং-এর ক্ষেত্রে আমি কি
                  পেমেন্ট পরে করতে পারি?
                </p>
                <p>
                  <strong>উত্তর:</strong> আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা
                  করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত
                  হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>May I have a hard-copy receipt sent by
                  post?
                </p>
                <p>
                  <strong> A: </strong> We don t send hard copy receipts by
                  post. We will email your booking details and confirmation to
                  you. Alternatively, you can come to our office for a hard copy
                  of your purchase, and we will provide the hard copy to you.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি
                  pathano হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> দুঃখিত, ডাকযোগে রিসিপ্টের হার্ড কপি
                  পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত
                  বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে
                  রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>Will it cost any extra charge if I purchase
                  through a card from ShareTrip?
                </p>
                <p>
                  <strong> A: </strong>During an online or an offline
                  transaction there is a convenience fee that customers have to
                  pay. However, there is no extra charge on anything you
                  purchase from ShareTrip be it online or offline.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ-এ কার্ডের মাধ্যমে বুকিং
                  দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?
                </p>
                <p>
                  <strong>উত্তর:</strong> অনলাইন বা অফলাইন বুকিংয়ের সময় একটি
                  কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, শেয়ারট্রিপ-এ
                  থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ
                  নেই।
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>Q.</strong>What is ST Convenience Fee?
                </p>
                <p>
                  <strong> A: </strong>ST Convenience fee is the charge that the
                  customer needs to pay for the support, convenience and service
                  that he/she is availing from the online platforms.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  <strong>প্রশ্ন:</strong>শেয়ারট্রিপ কনভিনিয়েন্স ফি কী?
                </p>
                <p>
                  <strong>উত্তর:</strong> কাস্টমাররা শেয়ারট্রিপ থেকে অনলাইনে
                  যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয়
                  চার্জকে শেয়ারট্রিপ কনভিনিয়েন্স ফি বলা হয়।
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
