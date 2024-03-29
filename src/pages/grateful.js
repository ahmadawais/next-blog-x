import React from "react";
import Layout from "@components/layout";
import SEO from "@components/seo";

const Grateful = () => {
  return (
    <Layout className="max-w-2xl text-lg prose sm:prose-lg">
      <SEO
        title="Patronage"
        description="Support Brandon Pittman's open source work."
      />

      <h1 className="text-4xl font-bold">Support My Work</h1>

      <p className="mt-4 text-lg">
        If you're interested in showing support for the projects I work on or
        you'd just like to say "Thanks for being such a great guy", there are a
        couple good ways to do so. If you'd like to get something for yourself
        and support me at the same time,{" "}
        <a
          href="https://usefathom.com/ref/HTO6KY"
          target="_blank"
          rel="noopener noreferrer"
        >
          consider signing up for Fathom Analytics with my affiliate link.
        </a>
      </p>

      <p className="mt-4 text-lg">
        If you don't need any analytics, I have a patronage page over at{" "}
        <a
          href="https://www.buymeacoffee.com/blp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Me A Coffee.
        </a>{" "}
        You can make a one-time donation or sign up for a membership. The
        membership option gets you access to a members-only chat room where I'll
        answer questions you have about dev topics like Gridsome and Tailwind or
        even questions about my 15+ years living in Japan! Your support is
        greatly appreciated, and allows me to dedicate more time to open-source
        work. Thank you for supporting me!
      </p>
    </Layout>
  );
};

export default Grateful;
