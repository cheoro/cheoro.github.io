import {
  Column,
  Heading,
  Meta,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";

import {
  baseURL,
  person,
  news,
} from "@/resources";

import React from "react";

/* ========================================================= */
/* Metadata */
/* ========================================================= */

export async function generateMetadata() {
  return Meta.generate({
    title: "News",
    description:
      "News and updates from Cheol-Ho Choi.",
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: "/news",
  });
}

/* ========================================================= */
/* News Page */
/* ========================================================= */

export default function NewsPage() {
  /* ======================================================= */
  /* Sort all news */
  /* ======================================================= */

  const sortedNews = [...news].sort(
    (a, b) =>
      b.date.localeCompare(a.date)
  );

  /* ======================================================= */
  /* Extract years */
  /* ======================================================= */

  const years = Array.from(
    new Set(
      sortedNews.map((item) =>
        Number(
          item.date.substring(
            0,
            4
          )
        )
      )
    )
  ).sort((a, b) => b - a);

  return (
    <main
      style={{
        width: "min(100% - 40px, 1000px)",
        margin: "0 auto",
        padding: "120px 0 100px",
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="News"
        description="News and updates from Cheol-Ho Choi."
        path="/news"
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* =================================================== */}
      {/* Header */}
      {/* =================================================== */}

      <Column
        fillWidth
        marginBottom="48"
      >
        <Heading
          as="h1"
          variant="display-strong-xl"
        >
          News
        </Heading>

        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
        >
          News and updates.
        </Text>
      </Column>

      {/* =================================================== */}
      {/* News by Year */}
      {/* =================================================== */}

      <Column fillWidth>
        {years.map(
          (year, yearIndex) => {
            const newsForYear =
              sortedNews.filter(
                (item) =>
                  Number(
                    item.date.substring(
                      0,
                      4
                    )
                  ) === year
              );

            return (
              <React.Fragment
                key={year}
              >
                <section>
                  {/* ======================================= */}
                  {/* Year Header */}
                  {/* ======================================= */}

                  <Row
                    fillWidth
                    vertical="center"
                    gap="16"
                    marginBottom="l"
                  >
                    <Text
                      variant="body-strong-m"
                      onBackground="brand-medium"
                      style={{
                        whiteSpace:
                          "nowrap",
                      }}
                    >
                      [{year}]
                    </Text>

                    <div
                      style={{
                        flex: 1,
                        height:
                          "1px",
                        background:
                          "var(--neutral-alpha-medium)",
                      }}
                    />
                  </Row>

                  {/* ======================================= */}
                  {/* Entries */}
                  {/* ======================================= */}

                  <Column
                    fillWidth
                    gap="12"
                  >
                    {newsForYear.map(
                      (
                        item,
                        index
                      ) => {
                        const formattedDate =
                          new Intl.DateTimeFormat(
                            "en-US",
                            {
                              year:
                                "numeric",
                              month:
                                "short",
                            }
                          ).format(
                            new Date(
                              `${item.date}T00:00:00`
                            )
                          );

                        return (
                          <Row
                            key={`${item.date}-${index}`}
                            fillWidth
                            vertical="start"
                            gap="24"
                            paddingY="4"
                            s={{
                              direction:
                                "column",
                              gap: "4",
                            }}
                          >
                            <Text
                              variant="body-default-s"
                              onBackground="brand-medium"
                              style={{
                                minWidth:
                                  "96px",
                                whiteSpace:
                                  "nowrap",
                              }}
                            >
                              {
                                formattedDate
                              }
                            </Text>

                            <Text
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

                {/* ========================================= */}
                {/* Divider between years */}
                {/* ========================================= */}

                {yearIndex <
                  years.length -
                    1 && (
                  <div
                    style={{
                      width:
                        "100%",
                      height:
                        "1px",
                      background:
                        "var(--neutral-alpha-medium)",
                      margin:
                        "32px 0",
                    }}
                  />
                )}
              </React.Fragment>
            );
          }
        )}
      </Column>
    </main>
  );
}