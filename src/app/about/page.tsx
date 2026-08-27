import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
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
  rightContent,
}: {
  id: string;
  title: string;
  rightContent?: React.ReactNode;
}) {
  return (
    <Row
      fillWidth
      vertical="center"
      gap="16"
      marginBottom="l"
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

      {/* Section divider only */}
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "var(--neutral-alpha-medium)",
        }}
      />

      {rightContent}
    </Row>
  );
}

export default function About() {
  /* ========================================================= */
  /* Latest News */
  /* ========================================================= */

  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

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
          fillWidth
          style={{
            minWidth: 0,
          }}
        >
          <Column
            id={about.intro.title}
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
              variant="display-strong-xl"
            >
              {person.name}
            </Heading>

            <Text
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {social.length > 0 && (
              <Row
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
          />

          <Column
            fillWidth
            gap="16"
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
            marginBottom: "64px",
          }}
        >
          <SectionHeader
            id="Selected Publications"
            title="Selected Publications"
            rightContent={
              <Button
                href="/publications"
                label="View all"
                size="s"
                variant="secondary"
                arrowIcon
              />
            }
          />

          <Column
            fillWidth
            gap="16"
          >
            {selectedPublications.map(
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
                    className={styles.selectedItem}
                    fillWidth
                    vertical="start"
                    gap="12"
                    paddingY="4"
                  >
                    {/* Venue */}

                    <Text
                      className={styles.selectedVenue}
                      variant="body-strong-m"
                      onBackground="brand-medium"
                      style={{
                        minWidth: "72px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {paper.venue}
                    </Text>

                    {/* Separator */}

                    <Text
                      className={styles.selectedSeparator}
                      variant="body-default-m"
                      onBackground="neutral-weak"
                    >
                      —
                    </Text>

                    {/* Clickable Title */}

                    <a
                      href={destination}
                      className={styles.selectedTitle}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        lineHeight: 1.55,
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
        </section>
      )}

      {/* ===================================================== */}
      {/* Work and Research Experience */}
      {/* ===================================================== */}

      {about.work.display && (
        <section
          style={{
            marginBottom: "64px",
          }}
        >
          <SectionHeader
            id={about.work.title}
            title={about.work.title}
          />

          <Column
            fillWidth
            gap="xl"
          >
            {about.work.experiences.map(
              (
                experience,
                index
              ) => (
                <Column
                  key={`${experience.company}-${experience.role}-${index}`}
                  fillWidth
                >
                  <Row
                    fillWidth
                    horizontal="between"
                    vertical="end"
                    marginBottom="4"
                    gap="24"
                  >
                    <Text
                      id={experience.company}
                      variant="heading-strong-l"
                    >
                      {experience.company}
                    </Text>

                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      {experience.timeframe}
                    </Text>
                  </Row>

                  <Text
                    variant="body-default-s"
                    onBackground="brand-weak"
                    marginBottom="m"
                  >
                    {experience.role}
                  </Text>

                  <Column
                    as="ul"
                    gap="16"
                  >
                    {experience.achievements.map(
                      (
                        achievement:
                          React.ReactNode,
                        achievementIndex:
                          number
                      ) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${achievementIndex}`}
                        >
                          {achievement}
                        </Text>
                      )
                    )}
                  </Column>

                  {experience.images &&
                    experience.images.length > 0 && (
                      <Row
                        fillWidth
                        paddingTop="m"
                        paddingLeft="40"
                        gap="12"
                        wrap
                      >
                        {experience.images.map(
                          (
                            image,
                            imageIndex
                          ) => (
                            <Row
                              key={imageIndex}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                          )
                        )}
                      </Row>
                    )}
                </Column>
              )
            )}
          </Column>
        </section>
      )}

      {/* ===================================================== */}
      {/* Education */}
      {/* ===================================================== */}

      {about.studies.display && (
        <section
          style={{
            marginBottom: "64px",
          }}
        >
          <SectionHeader
            id={about.studies.title}
            title={about.studies.title}
          />

          <Column
            fillWidth
            gap="xl"
          >
            {about.studies.institutions.map(
              (
                institution,
                index
              ) => (
                <Row
                  key={`${institution.name}-${index}`}
                  fillWidth
                  horizontal="between"
                  vertical="start"
                  gap="40"
                >
                  <Column
                    flex={8}
                    gap="4"
                  >
                    <Text
                      id={institution.name}
                      variant="heading-strong-l"
                    >
                      {institution.name}
                    </Text>

                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {institution.description}
                    </Text>
                  </Column>

                  <Column
                    flex={2}
                    horizontal="end"
                    gap="4"
                    style={{
                      minWidth: "150px",
                    }}
                  >
                    <Text
                      variant="body-default-m"
                      onBackground="brand-medium"
                    >
                      {institution.period}
                    </Text>

                    <Text
                      variant="body-default-s"
                      onBackground="neutral-weak"
                    >
                      {institution.location}
                    </Text>
                  </Column>
                </Row>
              )
            )}
          </Column>
        </section>
      )}

      {/* ===================================================== */}
      {/* Research and Technical Interests */}
      {/* ===================================================== */}

      {about.technical.display && (
        <section>
          <SectionHeader
            id={about.technical.title}
            title={about.technical.title}
          />

          <Column
            fillWidth
            gap="xl"
          >
            {about.technical.skills.map(
              (
                skill,
                index
              ) => (
                <Column
                  key={`${skill.title}-${index}`}
                  fillWidth
                  gap="4"
                >
                  <Text
                    id={skill.title}
                    variant="heading-strong-l"
                  >
                    {skill.title}
                  </Text>

                  <Text
                    variant="body-default-m"
                    onBackground="neutral-weak"
                  >
                    {skill.description}
                  </Text>

                  {skill.tags &&
                    skill.tags.length > 0 && (
                      <Row
                        wrap
                        gap="8"
                        paddingTop="8"
                      >
                        {skill.tags.map(
                          (
                            tag,
                            tagIndex
                          ) => (
                            <Tag
                              key={`${skill.title}-${tagIndex}`}
                              size="l"
                              prefixIcon={tag.icon}
                            >
                              {tag.name}
                            </Tag>
                          )
                        )}
                      </Row>
                    )}

                  {skill.images &&
                    skill.images.length > 0 && (
                      <Row
                        fillWidth
                        paddingTop="m"
                        gap="12"
                        wrap
                      >
                        {skill.images.map(
                          (
                            image,
                            imageIndex
                          ) => (
                            <Row
                              key={imageIndex}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                          )
                        )}
                      </Row>
                    )}
                </Column>
              )
            )}
          </Column>
        </section>
      )}
    </main>
  );
}