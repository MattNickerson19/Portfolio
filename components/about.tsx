"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a diploma in{" "}
        <span className="font-medium">Instrumentation and Controls Engineering</span>, I decided to transition into web development.
        I then graduated with a diploma in {" "}
        <span className="font-medium">Accelerated Software Development</span>{" "} from the College of the North Atlantic. I have worked the past
        <span className="italic"> 3 years</span> as a Software Developer, working at Compusult Limited in Mount Pearl, Newfoundland.
        My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Java, Python and Tailwind. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
