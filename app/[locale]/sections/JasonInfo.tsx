"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const JasonInfo = () => {
  useGSAP(() => {
    gsap.set(".jason", {
      marginTop: "-80vh",
    });

    // Create a timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".jason",
        start: "top 90%",
        end: "10% center",
        scrub: 2,
      },
    });

    // Add animations to the timeline
    tl.to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" }).to(
      ".jason .img-box",
      {
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<",
    );
  });
  const t = useTranslations("home");
  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>{t("jason_name")}</h1>
        <h2>{t("jason_subTitle")}</h2>
        <p>{t("jason_description")}</p>
        <div className="jason-2">
          <Image
            src="/images/jason-2.webp"
            width="3840"
            height="2160"
            alt={t("jason_image_alt_2")}
          />
        </div>
      </div>
      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <Image
            src="/images/jason-1.webp"
            width="3840"
            height="2160"
            alt={t("jason_image_alt_1")}
          />
        </div>
        <div className="jason-3">
          <Image
            src="/images/jason-3.webp"
            width="3840"
            height="2160"
            alt={t("jason_image_alt_3")}
          />
        </div>
      </div>
    </section>
  );
};

export default JasonInfo;
