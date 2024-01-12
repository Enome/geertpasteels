import cx from "classnames";
import Image from "next/image";

import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Languages from "@/components/languages";
import Profiles from "@/components/profiles";
import Interests from "@/components/interests";

import MdxList from "@/components/mdx-list";

import { Section as SidebarSection } from "@/components/sidebar";
import { Section as ContentSection, Title } from "@/components/content";

import { MdxContent } from "@/components/loaders";

import Navigation, { Link } from "@/components/navigation";

export default async function Home() {
  return (
    <>
      <div
        className={cx(
          "md:mx-auto",
          "md:max-w-5xl",
          "md:shadow-lg",
          "md:shadow-gray-300",
        )}
      >
        <main
          className={cx("bg-white", "grid", "grid-cols-1", "md:grid-cols-7")}
        >
          {/* Sidebar */}

          <aside className={cx("bg-primary-100", "md:col-span-2")}>
            <SidebarSection className={cx("bg-primary-500", "text-white")}>
              <Image
                className={cx(
                  "rounded-full",
                  "mx-auto",
                  "border-2",
                  "border-white",
                )}
                src="/me.jpg"
                alt="Picture of me looking to the right"
                width={120}
                height={120}
              />

              <div
                className={cx(
                  "text-base",
                  "font-extralight",
                  "max-w-72",
                  "md:max-w-full",
                  "md:px-4",
                  "md:mb-2",
                )}
              >
                <MdxContent path="/headline.mdx" />
              </div>

              <div className={cx("mb-2")}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className={cx(
                    "bg-primary-800",
                    "hover:bg-primary-900",
                    "text-white",
                    "px-4 py-3",
                    "rounded",
                    "font-normal",
                  )}
                >
                  Download Résumé
                </a>
              </div>
            </SidebarSection>

            <SidebarSection className={cx("bg-primary-200")}>
              <Contact />
            </SidebarSection>

            <SidebarSection>
              <Languages />
              <Profiles />
              <Interests />
            </SidebarSection>
          </aside>

          {/* Content */}

          <section className={cx("md:col-span-5")}>
            <Navigation>
              <Link to="about-me">About me</Link>
              <Link to="skills">Skills</Link>
              <Link to="experience">Experience</Link>
              <Link to="projects">Projects</Link>
              <Link to="education">Education</Link>
              <Link to="fiscal">Fiscal</Link>
            </Navigation>

            <div className={cx("py-6", "px-10")}>
              <ContentSection>
                <Title id="about-me">About me</Title>
                <MdxContent path="/intro.mdx" />

                <p className={cx("pt-4", "mb-10")}>
                  <a
                    title="Contact me"
                    href="mailto:geert.pasteels@gmail.com"
                    target="_blank"
                    className={cx(
                      "transition-all",
                      "inline-block",
                      "border",
                      "border-1",
                      "border-emerald-400",
                      "bg-emerald-50",
                      "text-emerald-700",
                      "hover:bg-emerald-200",
                      "px-4 py-3",
                      "rounded",
                      "text-sm",
                      "font-bold",
                    )}
                  >
                    Contact me
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
                <Title id="projects">Projects</Title>
                <MdxList pattern="/projects/*.mdx" />
              </ContentSection>

              <ContentSection>
                <Title id="education">Education</Title>
                <MdxList pattern="/education/*.mdx" />
              </ContentSection>

              <ContentSection>
                <Title id="fiscal">Fiscal</Title>
                <MdxContent path="/fiscal.mdx" />
              </ContentSection>
            </div>
          </section>
        </main>
      </div>

      <footer className={cx("text-center", "py-6")}>
        Designed & Developed by me
      </footer>
    </>
  );
}
