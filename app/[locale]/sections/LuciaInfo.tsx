"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";

const LuciaInfo = () => {
  useGSAP(() => {
    gsap.set(".lucia-life", {
      marginTop: "-80vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia-life",
        start: "top 80%",
        end: "10% center",
        scrub: 2,
      },
    });

    tl.to(".second-vd", { opacity: 0, duration: 1, ease: "power1.inOut" }).to(
      ".lucia-life .img-box",
      {
        scrollTrigger: {
          trigger: ".lucia-life",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -200,
        duration: 1,
        ease: "power1.inOut",
      },
      "<",
    );
  });
  const t = useTranslations("home");
  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="lucia-1">
          <Image
            width="3840"
            height="2160"
            src="/images/lucia-1.webp"
            alt={t("lucia_image_alt_1")}
          />
        </div>
        <div className="lucia-3">
          <Image
            width="3840"
            height="2160"
            src="/images/lucia-3.webp"
            alt={t("lucia_image_alt_3")}
          />
        </div>
      </div>
      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>{t("lucia_name")}</h1>
          <h2>{t("lucia_subTitle")}</h2>
          <p>{t("lucia_description")}</p>
        </div>
        <div className="lucia-2">
          <Image
            src="/images/lucia-2.webp"
            width="3840"
            height="2160"
            alt={t("lucia_image_alt_2")}
          />
        </div>
        <p className="max-w-xl lg:ps-32 ps-10">{t("lucia_more")}</p>
      </div>
    </section>
  );
};

export default LuciaInfo;
