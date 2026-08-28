export type Conference = {
  name: string;
  fullName: string;
  field: string;
  location: string;
  submissionDeadline: string;
  conferenceDates: string;
  website: string;
  note?: string;
};

export type ConferenceYear = {
  year: number;
  conferences: Conference[];
};

export const conferenceYears: ConferenceYear[] = [
  {
    year: 2027,
    conferences: [
      {
        name: "ISCA",
        fullName:
          "International Symposium on Computer Architecture",
        field: "Computer Architecture",
        location: "TBD",
        submissionDeadline: "TBD",
        conferenceDates: "TBD",
        website: "https://www.iscaconf.org/",
      },
      {
        name: "HPCA",
        fullName:
          "IEEE International Symposium on High-Performance Computer Architecture",
        field: "Computer Architecture",
        location: "Salt Lake City, Utah, USA",
        submissionDeadline: "July 31, 2026",
        conferenceDates: "March 20–24, 2027",
        website:
          "https://conf.researchr.org/home/hpca-2027",
      },
      {
        name: "MICRO",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture / Microarchitecture",
        location: "TBD",
        submissionDeadline: "TBD",
        conferenceDates: "TBD",
        website: "https://www.microarch.org/",
      },
      {
        name: "ISLPED",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture / Microarchitecture",
        location: "TBD",
        submissionDeadline: "TBD",
        conferenceDates: "TBD",
        website: "https://www.microarch.org/",
      },
    ],
  },

  {
    year: 2026,
    conferences: [
      {
        name: "ISCA",
        fullName:
          "International Symposium on Computer Architecture",
        field: "Computer Architecture",
        location: "Raleigh, USA",
        submissionDeadline: "November 17, 2025",
        conferenceDates: "June 27 – July 1, 2026",
        website: "https://www.iscaconf.org/",
      },
      {
        name: "HPCA",
        fullName:
          "IEEE International Symposium on High-Performance Computer Architecture",
        field: "Computer Architecture",
        location: "Sydney, Australia",
        submissionDeadline: "August 1, 2026",
        conferenceDates: "January 31 – February 4, 2027",
        website:
          "https://2026.hpca-conf.org/track/hpca-2026-main-conference",
      },
      {
        name: "MICRO",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture",
        location: "Athens, Greece",
        submissionDeadline: "April 7, 2026",
        conferenceDates: "October 31 – November 4, 2026",
        website: "https://www.microarch.org/micro59/",
      },
      {
        name: "ISLPED",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture / Microarchitecture",
        location: "TBD",
        submissionDeadline: "TBD",
        conferenceDates: "TBD",
        website: "https://www.microarch.org/",
      },
    ],
  },

  {
    year: 2025,
    conferences: [
      {
        name: "ISCA",
        fullName:
          "International Symposium on Computer Architecture",
        field: "Computer Architecture",
        location: "Tokyo, Japan",
        submissionDeadline: "November 22, 2024",
        conferenceDates: "June 21–25, 2025",
        website: "https://www.iscaconf.org/",
      },
      {
        name: "HPCA",
        fullName:
          "IEEE International Symposium on High-Performance Computer Architecture",
        field: "Computer Architecture",
        location: "Las Vegas, NV, USA",
        submissionDeadline: "July 26, 2024",
        conferenceDates: "March 1–5, 2025",
        website:
          "https://hpca-conf.org/2025/",
      },
      {
        name: "MICRO",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture",
        location: "Seoul, Korea",
        submissionDeadline: "April 11, 2025",
        conferenceDates: "October 18–22, 2025",
        website: "https://www.microarch.org/micro58/index.php",
      },
      {
        name: "ICCAD",
        fullName:
          "IEEE/ACM International Conference on Computer-Aided Design",
        field: "Computer Architecture",
        location: "Munich, Germany",
        submissionDeadline: "April 21, 2025",
        conferenceDates: "October 26–30, 2025",
        website: "https://2025.iccad.com",
      },
      {
        name: "DATE",
        fullName:
          "Design, Automation, Test in Europe",
        field: "Computer Architecture",
        location: "Seoul, Korea",
        submissionDeadline: "September 22, 2024",
        conferenceDates: "March 31 – April 22, 2025",
        website: "https://dac.com/2026",
      },
      {
        name: "DAC",
        fullName:
          "Design Automation Conference",
        field: "Computer Architecture",
        location: "San Francisco, CA, USA",
        submissionDeadline: "April 11, 2025",
        conferenceDates: "October 18–22, 2025",
        website: "https://dac.com/2026/events/dac-2025",
      },
      {
        name: "ICCD",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture",
        location: "Seoul, Korea",
        submissionDeadline: "April 11, 2025",
        conferenceDates: "October 18–22, 2025",
        website: "https://www.microarch.org/micro58/index.php",
      },
      {
        name: "ISLPED",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture",
        location: "Seoul, Korea",
        submissionDeadline: "April 11, 2025",
        conferenceDates: "October 18–22, 2025",
        website: "https://www.microarch.org/micro58/index.php",
      },
      {
        name: "CVPR",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture",
        location: "Seoul, Korea",
        submissionDeadline: "April 11, 2025",
        conferenceDates: "October 18–22, 2025",
        website: "https://www.microarch.org/micro58/index.php",
      },
      {
        name: "ECCV",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture",
        location: "Seoul, Korea",
        submissionDeadline: "April 11, 2025",
        conferenceDates: "October 18–22, 2025",
        website: "https://www.microarch.org/micro58/index.php",
      },
      {
        name: "ICCV",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture",
        location: "Seoul, Korea",
        submissionDeadline: "April 11, 2025",
        conferenceDates: "October 18–22, 2025",
        website: "https://www.microarch.org/micro58/index.php",
      },
      {
        name: "ICML",
        fullName:
          "IEEE/ACM International Symposium on Microarchitecture",
        field: "Computer Architecture",
        location: "Seoul, Korea",
        submissionDeadline: "April 11, 2025",
        conferenceDates: "October 18–22, 2025",
        website: "https://www.microarch.org/micro58/index.php",
      },
    ],
  },
];