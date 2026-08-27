import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";

import { Line, Row, Text } from "@once-ui-system/core";
import type { ReactNode } from "react";

const person: Person = {
  firstName: "Cheol-Ho",
  lastName: "Choi",
  name: `Cheol-Ho Choi`,
  role: "FPGA Architect and Researcher",
  avatar: "/images/C.Choi.jpg",
  email: "cheoro1994@uos.ac.kr",
  location: "Asia/Seoul",
  languages: ["Korean", "English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Research updates and technical notes</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cheoro",
    essential: true,
  },
  {
    name: "Google Scholar",
    icon: "googleScholar",
    link: "https://scholar.google.com/citations?user=tO-MrjEAAAAJ&hl=en",
    essential: true,
  },
  {
    name: "ORCID",
    icon: "orcid",
    link: "https://orcid.org/0000-0002-2836-395X",
    essential: true,
  },
  {
    name: "ResearchGate",
    icon: "researchGate",
    link: "https://www.researchgate.net/profile/Cheol-Ho-Choi",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/cheol-ho-choi-b03a472a8/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:{cheoro1994.uos.ac.kr}`,
    essential: true,
  },
];

/* ========================================================= */
/* News */
/* ========================================================= */

export type NewsItem = {
  date: string;
  text: ReactNode;
};

const news: NewsItem[] = [
  {
    date: "2026-08-21",
    text: (
      <>
        Our paper <strong>“VA-NUC”</strong> was accepted to{" "}
        <strong>IEEE ICCD 2026</strong> !
      </>
    ),
  },
  {
    date: "2026-07-11",
    text: (
      <>
        Our paper <strong>“CEGF-TM”</strong> was accepted to{" "}
        <strong>IEEE/ACM ICCAD 2026</strong> !
      </>
    ),
  },
  {
    date: "2025-03-01",
    text: "Started my Ph.D. program in Electrical and Computer Engineering at the University of Seoul (UoS) and joined the ACAS Lab under the supervision of Prof. Jeongkyu Hong.",
  },
  {
    date: "2025-03-01",
    text: "Promoted to Engineer at Hanwha Systems.",
  },
  {
    date: "2024-05-01",
    text: (
      <>
        Presented our work in the <strong>“In-Cabin Session at AutoSens USA 2024”</strong> !
      </>
    ),
  },
  {
    date: "2023-01-01",
    text: "Joined Hanwha Systems as a Junior Engineer.",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – FPGA Research Portfolio`,
  description:
    "Research portfolio of Cheol-Ho Choi, focusing on FPGA acceleration, thermal imaging, embedded vision, and edge AI.",
  headline: <>FPGA Architect for Real-Time Thermal Imaging Systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ICCAD 2026</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured publication
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I am {person.name}, an FPGA architect and researcher working on{" "}
      <Text as="span" size="xl" weight="strong">
        thermal imaging, embedded vision, and edge AI
      </Text>
      . My research focuses on real-time streaming architectures, efficient
      hardware acceleration, and FPGA-based imaging systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description:
    `${person.name} is an FPGA architect and researcher specializing in ` +
    "real-time thermal imaging, embedded vision, and hardware acceleration.",

  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: true,
  },

  calendar: {
    display: false,
    link: "",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p
          style={{
            width: "100%",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Hello! I am <strong>{person.name}</strong>.
        </p>

        <p
          style={{
            width: "100%",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          I am a Ph.D. student at the University of Seoul and an Engineer at
          Hanwha Systems Co., Ltd., where I work on FPGA-based acceleration and
          real-time image processing systems for embedded vision and thermal
          imaging applications.
        </p>

        <p
          style={{
            width: "100%",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          My research lies at the intersection of computer architecture, image
          processing, and hardware-software co-design. I build efficient real-time
          systems under strict latency, memory, and power constraints, with a
          particular focus on FPGA accelerators, thermal imaging systems, embedded
          vision, and heterogeneous SoC architectures.
        </p>

        <p
          style={{
            width: "100%",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          My work spans algorithm development, architecture exploration, RTL
          implementation, FPGA prototyping, and system integration for real-time
          embedded systems.
        </p>
      </>
    ),
  },

  work: {
    display: true,
    title: "Work and Research Experience",

    experiences: [
      {
        company: "Hanwha Systems Co., Ltd.",
        timeframe: "2023 – Present",
        role: "Junior Engineer · FPGA Image Processing",

        achievements: [
          <>
            Design FPGA-based real-time image-processing architectures for
            infrared and thermal imaging systems.
          </>,
          <>
            Develop image-enhancement and image-processing algorithms for
            infrared object-detection platforms.
          </>,
          <>
            Implement streaming hardware accelerators and embedded vision
            pipelines using FPGA and SoC platforms.
          </>,
          <>
            Conduct research on non-uniformity correction, tone mapping,
            contrast enhancement, and embedded AI for thermal imaging.
          </>,
        ],

        images: [],
      },

      {
        company: "System-on-Chip Laboratory",
        timeframe: "2020 – 2022",
        role: "Graduate Researcher",

        achievements: [
          <>
            Designed FPGA-based real-time stereo vision systems using traditional
            computer-vision algorithms for mobile and autonomous-driving
            platforms.
          </>,
          <>
            Designed FPGA-based fast object-detection systems using
            machine-learning techniques for embedded and autonomous platforms.
          </>,
          <>
            Developed FPGA–SoC co-processing architectures combining
            programmable logic and processing systems.
          </>,
          <>
            Implemented algorithms using MATLAB and C/C++, and translated
            computationally intensive functions into hardware accelerators.
          </>,
        ],

        images: [],
      },

      {
        company: "Milimeter-wave Integrated Systems Laboratory",
        timeframe: "2017 - 2019",
        role: "Undergraduate Researcher",

        achievements: [
          <>
            Designed 2.45-GHz and 5.8-GHz low-noise amplifier circuits for
            Doppler radar sensors.
          </>,
          <>
            Developed real-time bio-signal detection algorithms for 2.45-GHz
            Doppler radar sensing systems.
          </>,
          <>
            Implemented and evaluated signal-processing algorithms using MATLAB
            and C/C++.
          </>,
        ],

        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",

    institutions: [
      {
        name: "University of Seoul",

        period: "2025 - Present",

        location: "Seoul, Korea",

        description: (
          <>
            <strong>Ph.D. in Electronic and Computer Engineering</strong>
            <br />
            Advisor: Prof. Jeongkyu Hong
          </>
        ),
      },

      {
        name: "Kyungpook National University",

        period: "2020 - 2022",

        location: "Daegu, Korea",

        description: (
          <>
            <strong>M.S. in Electronic and Electrical Engineering</strong>
            <br />
            Advisor: Prof. Byungin Moon
          </>
        ),
      },

      {
        name: "Yeungnam University",

        period: "2013 - 2020",

        location: "Gyeongsan, Korea",

        description: (
          <>
            <strong>B.S. in Electronic Engineering</strong>
            <br />
            Advisor: Prof. Jong-Ryul Yang
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Research and Technical Interests",

    skills: [
      {
        title: "FPGA and SoC Architecture",

        description: (
          <>
            Design of real-time streaming accelerators and FPGA–SoC
            co-processing architectures for embedded imaging applications.
          </>
        ),

        tags: [
          { name: "Verilog HDL" },
          { name: "SystemVerilog" },
          { name: "Vivado" },
          { name: "Zynq MPSoC" },
          { name: "AXI" },
        ],

        images: [],
      },

      {
        title: "Thermal Imaging",

        description: (
          <>
            Hardware and algorithm development for infrared image correction,
            enhancement, tone mapping, and target detection.
          </>
        ),

        tags: [
          { name: "NUC" },
          { name: "Tone Mapping" },
          { name: "Contrast Enhancement" },
          { name: "Thermal Vision" },
        ],

        images: [],
      },

      {
        title: "Embedded Vision and AI",

        description: (
          <>
            Development and evaluation of real-time computer-vision and
            machine-learning systems for embedded and autonomous platforms.
          </>
        ),

        tags: [
          { name: "Computer Vision" },
          { name: "Embedded AI" },
          { name: "Object Detection" },
          { name: "PyTorch" },
          { name: "C/C++" },
          { name: "MATLAB" },
        ],

        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Research Notes",
  description: `Technical notes and research updates by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Research Projects – ${person.name}`,
  description: `FPGA, thermal imaging, and embedded vision projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,

  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  news,
};