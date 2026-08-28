import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";

import {
  baseURL,
  about,
  person,
  social,
  news,
} from "@/resources";

import { publications } from "@/resources/publications";

import styles from "@/components/about/about.module.scss";

import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: about.path,
  });
}

/* ========================================================= */
/* Section Header */
/* ========================================================= */

function SectionHeader({
  id,
  title,
  href,
}: {
  id: string;
  title: string;
  href?: string;
}) {
  return (
    <Row
      fillWidth
      vertical="center"
      gap="16"
      marginBottom="l"
    >
      {href ? (
        <a
          href={href}
          style={{
            color: "inherit",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <Heading
            as="h2"
            id={id}
            variant="display-strong-s"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Heading>
        </a>
      ) : (
        <Heading
          as="h2"
          id={id}
          variant="display-strong-s"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Heading>
      )}

      <div
        style={{
          flex: 1,
          height: "1px",
          background: "var(--neutral-alpha-medium)",
        }}
      />
    </Row>
  );
}

export default function About() {
  /* ========================================================= */
  /* Latest News */
  /* ========================================================= */

  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  /* ========================================================= */
  /* Selected Publications */
  /* ========================================================= */

  const selectedPublications = publications
    .filter((paper) => paper.selected)
    .sort((a, b) => {
      if (b.year !== a.year) {
        return b.year - a.year;
      }

      return (b.monthNumber ?? 0) - (a.monthNumber ?? 0);
    });

  /* ========================================================= */
  /* Selected Publication Years */
  /* ========================================================= */

  const selectedYears = Array.from(
    new Set(
      selectedPublications.map(
        (paper) => paper.year
      )
    )
  ).sort((a, b) => b - a);

  return (
    <main
      style={{
        width: "min(100% - 40px, 1000px)",
        margin: "0 auto",
        padding: "120px 0 80px",
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ===================================================== */}
      {/* Profile + Introduction */}
      {/* ===================================================== */}

      <div
        className={styles.profileGrid}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "220px minmax(0, 1fr)",
          columnGap: "48px",
          alignItems: "start",
          marginBottom: "72px",
        }}
      >
        {/* =================================================== */}
        {/* Left Profile */}
        {/* =================================================== */}

        {about.avatar.display && (
          <Column
            className={styles.profileSidebar}
            fitHeight
            fillWidth
            gap="m"
            horizontal="center"
            style={{
              transform: "translateX(-24px)",
            }}
          >
            <Avatar
              src={person.avatar}
              size="xl"
            />

            <Row
              gap="8"
              vertical="center"
            >
              <Icon
                onBackground="accent-weak"
                name="globe"
              />

              {person.location}
            </Row>

            {person.languages &&
              person.languages.length > 0 && (
                <Row
                  wrap
                  gap="8"
                  horizontal="center"
                >
                  {person.languages.map(
                    (language, index) => (
                      <Tag
                        key={index}
                        size="l"
                      >
                        {language}
                      </Tag>
                    )
                  )}
                </Row>
              )}
          </Column>
        )}

        {/* =================================================== */}
        {/* Introduction */}
        {/* =================================================== */}

        <Column
          className={styles.profileContent}
          fillWidth
          style={{
            minWidth: 0,
          }}
        >
          <Column
            id={about.intro.title}
            className={styles.profileHeader}
            fillWidth
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                style={{
                  backdropFilter:
                    "blur(var(--static-space-1))",
                }}
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />

                <Row paddingX="8">
                  Schedule a call
                </Row>

                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}

            <Heading
              className={styles.profileName}
              variant="display-strong-xl"
            >
              {person.name}
            </Heading>

            <Text
              className={styles.profileRole}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {social.length > 0 && (
              <Row
                className={styles.socialRow}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment
                          key={item.name}
                        >
                          <Row
                            s={{
                              hide: true,
                            }}
                          >
                            <Button
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>

                          <Row
                            hide
                            s={{
                              hide: false,
                            }}
                          >
                            <IconButton
                              size="l"
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      )
                  )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column
              className={styles.introText}
              textVariant="body-default-l"
              fillWidth
              gap="m"
            >
              {about.intro.description}
            </Column>
          )}
        </Column>
      </div>

      {/* ===================================================== */}
      {/* News */}
      {/* ===================================================== */}

      {latestNews.length > 0 && (
        <section
          style={{
            marginBottom: "64px",
          }}
        >
          <SectionHeader
            id="News"
            title="News"
            href="/news"
          />

          <Column
            fillWidth
            gap="12"
          >
            {latestNews.map(
              (item, index) => {
                const formattedDate =
                  new Intl.DateTimeFormat(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                    }
                  ).format(
                    new Date(
                      `${item.date}T00:00:00`
                    )
                  );

                return (
                  <Row
                    key={`${item.date}-${index}`}
                    className={styles.newsItem}
                    fillWidth
                    vertical="start"
                    gap="24"
                    paddingY="4"
                  >
                    <Text
                      className={styles.newsDate}
                      variant="body-default-s"
                      onBackground="brand-medium"
                      style={{
                        minWidth: "96px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {formattedDate}
                    </Text>

                    <Text
                      className={styles.newsText}
                      variant="body-default-m"
                      style={{
                        flex: 1,
                      }}
                    >
                      {item.text}
                    </Text>
                  </Row>
                );
              }
            )}
          </Column>
        </section>
      )}

      {/* ===================================================== */}
      {/* Selected Publications */}
      {/* ===================================================== */}

      {selectedPublications.length > 0 && (
        <section
          style={{
            marginBottom: "48px",
          }}
        >
          <SectionHeader
            id="Selected Publications"
            title="Selected Publications"
            href="/publications"
          />

          <Column fillWidth>
            {selectedYears.map(
              (year, yearIndex) => {
                const papersForYear =
                  selectedPublications.filter(
                    (paper) =>
                      paper.year === year
                  );

                return (
                  <React.Fragment
                    key={year}
                  >
                    <div
                      className={
                        styles.selectedYearGroup
                      }
                    >
                      <Text
                        variant="body-strong-m"
                        onBackground="brand-medium"
                        className={
                          styles.selectedYear
                        }
                      >
                        [{year}]
                      </Text>

                      <Column
                        fillWidth
                        gap="12"
                      >
                        {papersForYear.map(
                          (paper) => {
                            const paperKey =
                              `${paper.year}-${paper.venue}-${paper.title}`;

                            const destination =
                              paper.anchor
                                ? `/publications#${paper.anchor}`
                                : "/publications";

                            return (
                              <Row
                                key={paperKey}
                                className={
                                  styles.selectedItem
                                }
                                fillWidth
                                vertical="start"
                                gap="12"
                                paddingY="4"
                              >
                                <Text
                                  className={
                                    styles.selectedVenue
                                  }
                                  variant="body-strong-m"
                                  onBackground="brand-medium"
                                  style={{
                                    minWidth:
                                      "64px",
                                    whiteSpace:
                                      "nowrap",
                                  }}
                                >
                                  {paper.venue}
                                </Text>

                                <Text
                                  className={
                                    styles.selectedSeparator
                                  }
                                  variant="body-default-m"
                                  onBackground="neutral-weak"
                                  style={{
                                    marginRight:
                                      "10px",
                                  }}
                                >
                                  —
                                </Text>

                                <a
                                  href={destination}
                                  className={
                                    styles.selectedTitle
                                  }
                                  style={{
                                    color:
                                      "inherit",
                                    textDecoration:
                                      "none",
                                    lineHeight:
                                      1.55,
                                    flex: 1,
                                  }}
                                >
                                  {paper.title}
                                </a>
                              </Row>
                            );
                          }
                        )}
                      </Column>
                    </div>

                    {yearIndex <
                      selectedYears.length -
                        1 && (
                      <div
                        className={
                          styles.yearDivider
                        }
                      />
                    )}
                  </React.Fragment>
                );
              }
            )}
          </Column>
        </section>
      )}

      {/* ===================================================== */}
      {/* Conference Schedule */}
      {/* ===================================================== */}

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href="/conferences"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            color: "var(--neutral-on-background-weak)",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: 1.5,
            textDecoration: "none",
            transition: "opacity 0.15s ease",
          }}
        >
          Conference Schedule

          <span
            aria-hidden="true"
            style={{
              fontSize: "13px",
              opacity: 0.7,
            }}
          >
            →
          </span>
        </a>
      </div>
    </main>
  );
}