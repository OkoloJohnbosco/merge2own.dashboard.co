import agencyImg from "../../../src/assets/agency.svg";
import callImg from "../../../src/assets/call.svg";
import checkImg from "../../../src/assets/check.svg";
import companyImg from "../../../src/assets/company.svg";
import emailImg from "../../../src/assets/email.svg";
import locationImg from "../../../src/assets/location.svg";
import realtorImg from "../../../src/assets/realtor.svg";

export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const contacts = [
  { img: callImg, title: "Call", value: "+1 (548) 398-2025" },
  { img: emailImg, title: "Email", value: "info@merge2own.com" },
  { img: locationImg, title: "Location", value: "WaterLoo, Canada" },
];

export const truncateWord = (str: string, len = 30) => {
  if (str.trim().length < len) return str;

  return `${str.substring(0, len - 1)}..`;
};

export const reasons = [
  {
    title: "Al -Driven Matching System",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Financial Literacy Training",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Stability, Trust, and Security ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Property Assessment Tools",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const partners = [
  { img: realtorImg, text: "Realtors" },
  { img: agencyImg, text: "Agencies" },
  { img: companyImg, text: "Financial Insitutions" },
  { img: checkImg, text: "Background Check Providers" },
];
