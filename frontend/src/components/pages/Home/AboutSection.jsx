import React from "react";
import PropTypes from "prop-types";
import { UserIcon } from "../../icons";
import { Button } from "../../common/Button";
import DUMMY_USER_DATA from "../../../constants/data";

export const AboutSection = ({ navigateTo }) => (
  <div
    id="about"
    className="relative py-16 md:py-20 min-h-[50vh] overflow-hidden"
  >
    {/* Background gradient matching HeroSection */}
    {/* <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-purple-700/40 rounded-full filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 md:w-96 md:h-96 bg-pink-700/40 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-blue-700/40 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
    </div> */}

    {/* Subtle grid pattern overlay */}
    {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

    <div className="container mx-auto px-6">
      <div className="text-center mb-12 md:mb-16 fade-in-section">
        <div className="inline-flex items-center justify-center text-purple-400 mb-4">
          <UserIcon className="w-10 h-10 md:w-12 md:h-12 mr-3 text-purple-400" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            About Me
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="prose prose-xl text-slate-300 max-w-none space-y-6 fade-in-section">
          {DUMMY_USER_DATA.aboutMe.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <Button
            onClick={() => navigateTo("ContactPage")}
            variant="primary"
            className="mt-6"
          >
            Let's Connect
          </Button>
        </div>
        <div className="fade-in-section delay-200">
          <img
            src={`/logo.png`}
            // src={`https://placehold.co/500x550/0F172A/A78BFA?text=${DUMMY_USER_DATA.name.replace(" ", "+")}&font=inter&font_size=40`}
            alt={DUMMY_USER_DATA.name}
            className="rounded-xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
            // onError={(e) => e.target.src='https://placehold.co/500x550/0F172A/E0E7FF?text=Profile+Image'}

            onError={(e) => {
              e.currentTarget.onerror = null; // Prevent infinite loop
              e.currentTarget.src = `https://placehold.co/500x550/0F172A/A78BFA?text=${DUMMY_USER_DATA.name.replace(
                " ",
                "+"
              )}&font=inter&font_size=40`;
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

AboutSection.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};
