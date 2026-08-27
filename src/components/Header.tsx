"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Fade,
  Flex,
  Line,
  Row,
  ToggleButton,
} from "@once-ui-system/core";

import {
  routes,
  display,
  person,
  about,
  blog,
  work,
  gallery,
} from "@/resources";

import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      const timeString = new Intl.DateTimeFormat(
        locale,
        options
      ).format(now);

      setCurrentTime(timeString);
    };

    updateTime();

    const intervalId = setInterval(
      updateTime,
      1000
    );

    return () => {
      clearInterval(intervalId);
    };
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isWork = pathname.startsWith("/work");
  const isPublications =
    pathname.startsWith("/publications");
  const isCV = pathname === "/cv";
  const isBlog = pathname.startsWith("/blog");
  const isGallery =
    pathname.startsWith("/gallery");

  return (
    <>
      <Fade
        s={{
          hide: true,
        }}
        fillWidth
        position="fixed"
        height="80"
        zIndex={9}
      />

      <Fade
        hide
        s={{
          hide: false,
        }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />

      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        {/* ================================================= */}
        {/* Left */}
        {/* ================================================= */}

        <Row
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        >
          {display.location && (
            <Row
              s={{
                hide: true,
              }}
            >
              {person.location}
            </Row>
          )}
        </Row>

        {/* ================================================= */}
        {/* Navigation */}
        {/* ================================================= */}

        <Row
          fillWidth
          horizontal="center"
        >
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
            >
              {/* =========================================== */}
              {/* Home */}
              {/* =========================================== */}

              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={isHome}
                />
              )}

              <Line
                background="neutral-alpha-medium"
                vert
                maxHeight="24"
              />

              {/* =========================================== */}
              {/* About */}
              {/* =========================================== */}

              {routes["/about"] && (
                <>
                  {/* Desktop */}

                  <Row
                    s={{
                      hide: true,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={about.label}
                      selected={isAbout}
                    />
                  </Row>

                  {/* Mobile */}

                  <Row
                    hide
                    s={{
                      hide: false,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={
                        isAbout
                          ? about.label
                          : undefined
                      }
                      selected={isAbout}
                    />
                  </Row>
                </>
              )}

              {/* =========================================== */}
              {/* Work */}
              {/* =========================================== */}

              {routes["/work"] && (
                <>
                  {/* Desktop */}

                  <Row
                    s={{
                      hide: true,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="grid"
                      href="/work"
                      label={work.label}
                      selected={isWork}
                    />
                  </Row>

                  {/* Mobile */}

                  <Row
                    hide
                    s={{
                      hide: false,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="grid"
                      href="/work"
                      label={
                        isWork
                          ? work.label
                          : undefined
                      }
                      selected={isWork}
                    />
                  </Row>
                </>
              )}

              {/* =========================================== */}
              {/* Publications */}
              {/* =========================================== */}

              {routes["/publications"] && (
                <>
                  {/* Desktop */}

                  <Row
                    s={{
                      hide: true,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="book"
                      href="/publications"
                      label="Publications"
                      selected={isPublications}
                    />
                  </Row>

                  {/* Mobile */}

                  <Row
                    hide
                    s={{
                      hide: false,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="book"
                      href="/publications"
                      label={
                        isPublications
                          ? "Publications"
                          : undefined
                      }
                      selected={isPublications}
                    />
                  </Row>
                </>
              )}

              {/* =========================================== */}
              {/* CV */}
              {/* =========================================== */}

              {routes["/cv"] && (
                <>
                  {/* Desktop */}

                  <Row
                    s={{
                      hide: true,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="document"
                      href="/cv"
                      label="CV"
                      selected={isCV}
                    />
                  </Row>

                  {/* Mobile */}

                  <Row
                    hide
                    s={{
                      hide: false,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="document"
                      href="/cv"
                      label={
                        isCV
                          ? "CV"
                          : undefined
                      }
                      selected={isCV}
                    />
                  </Row>
                </>
              )}

              {/* =========================================== */}
              {/* Blog */}
              {/* =========================================== */}

              {routes["/blog"] && (
                <>
                  {/* Desktop */}

                  <Row
                    s={{
                      hide: true,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="book"
                      href="/blog"
                      label={blog.label}
                      selected={isBlog}
                    />
                  </Row>

                  {/* Mobile */}

                  <Row
                    hide
                    s={{
                      hide: false,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="book"
                      href="/blog"
                      label={
                        isBlog
                          ? blog.label
                          : undefined
                      }
                      selected={isBlog}
                    />
                  </Row>
                </>
              )}

              {/* =========================================== */}
              {/* Gallery */}
              {/* =========================================== */}

              {routes["/gallery"] && (
                <>
                  {/* Desktop */}

                  <Row
                    s={{
                      hide: true,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      label={gallery.label}
                      selected={isGallery}
                    />
                  </Row>

                  {/* Mobile */}

                  <Row
                    hide
                    s={{
                      hide: false,
                    }}
                  >
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      label={
                        isGallery
                          ? gallery.label
                          : undefined
                      }
                      selected={isGallery}
                    />
                  </Row>
                </>
              )}

              {/* =========================================== */}
              {/* Theme */}
              {/* =========================================== */}

              {display.themeSwitcher && (
                <>
                  <Line
                    background="neutral-alpha-medium"
                    vert
                    maxHeight="24"
                  />

                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>

        {/* ================================================= */}
        {/* Right */}
        {/* ================================================= */}

        <Flex
          fillWidth
          horizontal="end"
          vertical="center"
        >
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex
              s={{
                hide: true,
              }}
            >
              {display.time && (
                <TimeDisplay
                  timeZone={person.location}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};