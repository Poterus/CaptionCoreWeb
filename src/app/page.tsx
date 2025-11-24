import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import BuildAmazing from '@/components/Home/Build-Amazing'
import Preferred from '@/components/Home/preferred-plan';
// Counter removed from Home per request
import FaqQuestion from '@/components/Home/faq';
export const metadata: Metadata = {
  title: "CaptionCore",
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <BuildAmazing isSpace={true} />
      <Preferred/>
      <FaqQuestion/>
    </main>
  )
}
