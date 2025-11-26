import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact"
        description="Reach out to us however it works best for you."

      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
