import React from "react";
import Hero from "../../../components/Hero";
import Works from "../../../components/Works";
import Feature from "../../../components/Feature";
import CTA from "../../../components/CTA";
import Testimonials from "../../../components/Testimonials";
import Picture from "../../../components/Picture";
import BgRemover from "../../../components/Bgremover";
import { SampleSec } from "../../../components/SampleSec";

export default function Home() {
  return (
    <>
      <Hero />
      <SampleSec/>
      <BgRemover/>
      <Works />
      <Feature />
      <CTA />
      <Picture />
      <Testimonials />
    </>
  );
}
