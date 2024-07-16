import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import uxBootcamp from "../../public/assets/events/UX-Bootcamp.png";
import rebase01 from "../../public/assets/events/rebase-01.png";
import LLMs from "../../public/assets/events/LLMs.png";
import flutter01 from "../../public/assets/events/FLUTTER-yaswanth.png";
import flutter02 from "../../public/assets/events/Flutter-first-app.png";
import opensource from "../../public/assets/events/open-source-git-github.png";
import solutionchallenge from "../../public/assets/events/intro-google-solution-challenge.png";
import android from "../../public/assets/events/android.png";
import cvToCareer from "../../public/assets/events/cv-to-career.png";
import becomGdscLead2024 from "../../public/assets/events/become-gdsc-lead-2024.png";
import leftarrow from "../../public/assets/left-arrow.svg";
import worthyhack from "../../../public/assets/events/worthy.jpg";
import rightarrow from "../../public/assets/right-arrow.svg";

const Events = () => {
  const [showControls, setShowControls] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setShowControls(true);
    }
  }, [carouselRef]);

  const handlePrevClick = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="container px-28 sm:px-8">
        
        {/* event card carousel */}
        <div className=" relative mt-2">
          <div className="carousel" ref={carouselRef}>
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-cv-to-career/"
              title="CV to Career 📑"
              eventdate={"Mar 30, 2024"}
              featuredImage={cvToCareer}
              description="Session covering topics like career planning, how to crack internship & resume strategies."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-cv-to-career/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-road-to-becoming-google-developer-student-clubs-lead-1/"
              title='Road to becoming "Google Developer Student Clubs" Lead'
              featuredImage={becomGdscLead2024}
              eventdate={"Mar 25, 2024"}
              description="We  are bringing you a chance to be a part of the Google Developers Students Club, which is a group of passionate leaders at their universities who are dedicated to helping their peers learn and connect.              "
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-road-to-becoming-google-developer-student-clubs-lead-1/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-rebase/cohost-vignans-institute-of-information-technology-visakhapatnam"
              title="Intro to Rebase 🚀"
              featuredImage={rebase01}
              eventdate={"Mar 05, 2024"}
              description="Unleash your creativity and be part of Rebase<01>, a month-long online hackathon extravaganza! Check out this link for all the details and register for this great experience. https://www.rebase01.tech/"
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-rebase/cohost-vignans-institute-of-information-technology-visakhapatnam"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-from-gpt3-to-beyond-understanding-large-language-models/"
              title="From GPT3 to Beyond: Understanding LLMs"
              featuredImage={LLMs}
              eventdate={"Feb 15, 2024"}
              description="Dive into the world beyond GPT-3 with a comprehensive exploration of advanced Large Language Models (LLMs). Uncover the intricacies and applications of these cutting-edge technologies. Gain insights into the future of language processing and understanding."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-from-gpt3-to-beyond-understanding-large-language-models/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-android-accelerator-exploring-the-android-realm/"
              title="Android Accelerator: Exploring the Android Realm📲"
              featuredImage={android}
              eventdate={"Feb 06, 2024"}
              description="Dive into the dynamic world of Android app development with 'Exploring the Android Realm.' This workshop is your compass to mastering cutting-edge technologies and crafting seamless user experiences. Join us on this transformative journey and emerge ready to innovate in the Android landscape."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-android-accelerator-exploring-the-android-realm/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-getting-started-with-flutter-building-your-first-app/"
              title="Getting Started with Flutter: Building Your First App"
              featuredImage={flutter02}
              eventdate={"Oct 18, 2023"}
              description="Getting Started with Flutter: Building Your First App is a beginner-friendly session that introduces participants to the world of mobile app development using the Flutter framework. In this session, attendees will learn the fundamentals of Flutter, a popular open-source UI software development toolkit created by Google By the end of this session, participants will have built their first Flutter"
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-getting-started-with-flutter-building-your-first-app/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-design-wonderland/"
              title="Design Wonderland 🌈"
              featuredImage={uxBootcamp}
              eventdate={"Nov 24, 2023"}
              description="Embark on a transformative journey with GDSC's UI/UX design sessions. Dive into the art of crafting seamless user experiences, mastering user-centered design principles, and practical tools. Join hands-on projects, collaborate with enthusiasts, and gain insights from industry experts. Whether you're a beginner or seasoned designer, GDSC's sessions empower you to create innovative digital experience."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-design-wonderland/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-kalasalingam-academy-of-research-education-krishnankoil-presents-introduction-to-google-solution-challenge-2024/cohost-vignans-institute-of-information-technology-visakhapatnam/"
              title="Introduction to Google Solution Challenge 2024"
              featuredImage={solutionchallenge}
              eventdate={"Dec 15, 2023"}
              description="Get ready to embark on an exciting journey of learning and innovation with the Discover, Design, and Develop campaign by Google Developer Student Clubs! "
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-kalasalingam-academy-of-research-education-krishnankoil-presents-introduction-to-google-solution-challenge-2024/cohost-vignans-institute-of-information-technology-visakhapatnam/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-open-source-amp-hands-on-git-amp-github-1/"
              title="Intro to Open Source & Hands-on Git & Github"
              eventdate={"Oct 17, 2023"}
              featuredImage={opensource}
              description="In this GDSC session, we'll explore the world of open source software development, the Git version control system, and the collaborative platform, GitHub. These three elements play a crucial role in modern software development, enabling teams to work together efficiently, contribute to projects globally, and foster innovation in the tech community."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-open-source-amp-hands-on-git-amp-github-1/"
            />
            <EventCard
              className={`mr-6`}
              link="https://worthy-hack-23.devfolio.co/"
              title="Worthy Hack"
              eventdate={"Sept 9-10, 2023"}
              featuredImage={worthyhack}
              description="The Outcome of the Worthy Hack is to make students to develop innovative projects in team and develop projects relating to sustainable development and to showcase their technical skills."
              rsvp="https://worthy-hack-23.devfolio.co/"
            />
            <EventCard
              className={`mr-0`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-inauguration-followed-by-a-session-on-flutter/"
              title="Inauguration followed by a session on Flutter"
              eventdate={"Aug 26, 2023"}
              featuredImage={flutter01}
              description="The Gdsc VIIT Info Session has arrived, and we're excited to present our past GDSC highlights. Following that, Mr. Yashwanth Kumar Rajavarapu, lead organizer of the Hyderabad Flutter community, will lead a session on Flutter. This marks the first collaboration in Vizag."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-inauguration-followed-by-a-session-on-flutter/"
            />
          </div>
        </div>

        {/* navigation arrows */}
        <div className="controls flex items-center justify-evenly pb-10 sm:hidden">
          <motion.button
            className="control-btn prev"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevClick}
          >
            <Image src={leftarrow} alt="Previous" />
          </motion.button>

          <motion.button
            className="control-btn next"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextClick}
          >
            <Image src={rightarrow} alt="Next" />
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Events;
