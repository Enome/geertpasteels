import cx from "classnames";
import Image from "next/image";
import Contact from "@/components/contact";
import Languages from "@/components/languages";
import Profiles from "@/components/profiles";
import Interests from "@/components/interests";
import Skills from "@/components/skils-resume";

import MdxList from "@/components/mdx-list";

import { Section as ContentSection, Title } from "@/components/content";

import { MdxContent } from "@/components/loaders";

export default function Page() {
  return (
    <div
      className={cx(
        "w-[210mm]",
        "mx-auto",
        "border",
        "py-6",
        "px-14",
        "bg-white",
        "print:w-full",
        "print:mx-initial",
        "print:border-0",
        "print:py-0",
      )}
    >
      {/* Header */}
      <div
        className={cx(
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "gap-3",
          "mb-10",
          "pb-10",
          "border-b",
        )}
      >
        <Image
          className={cx("rounded-full", "border-2", "border-primary-500")}
          src="/me.jpg"
          alt="Picture of the author"
          width={80}
          height={80}
        />

        <div
          className={cx(
            "text-base",
            "font-extralight",
            "w-[360px]",
            "text-center",
          )}
        >
          <MdxContent path="/headline.mdx" />
        </div>

        <Contact className={cx("flex", "flex-row", "gap-6")} />
      </div>

      {/* Content */}

      <section className={cx("text-sm", "mb-10")}>
        <ContentSection>
          <Title id="about-me">About me</Title>
          <MdxContent path="/intro.mdx" />

          <p className="pt-2">
            For an extended version of this resume visit{" "}
            <a
              className={cx("text-pink-600", "hover:underline")}
              href="https://geertpasteels.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://geertpasteels.be
            </a>
          </p>
        </ContentSection>

        <ContentSection>
          <Title id="skills">Skills</Title>
          <Skills />
        </ContentSection>

        <ContentSection>
          <Title id="experience">Experience</Title>
          <MdxList pattern="/experience/*.mdx" />
        </ContentSection>

        <ContentSection>
          <Title id="education">Education</Title>
          <MdxList pattern="/education/*.mdx" />
        </ContentSection>

        <ContentSection>
          <Title id="references">References</Title>
          <MdxContent path="/references.mdx" />
        </ContentSection>
      </section>

      {/* Footer */}

      <div
        className={cx(
          "px-14",
          "pt-10",
          "flex",
          "items-start",
          "justify-center",
          "gap-28",
          "print:gap-20",
          "text-center",
          "text-sm",
          "border-t",
        )}
      >
        <Languages />
        <Interests />
        <Profiles />
      </div>
    </div>
  );
}
