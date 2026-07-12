export type PublicationType = "conference" | "journal";

export type PublicationStatus =
  | "accepted"
  | "under_review"
  | "major_revision"
  | "published";

export type Publication = {
  year: number;
  venue: string;
  type: PublicationType;
  status: PublicationStatus;
  title: string;
  authors: string;
  publisher: string;
  abstract: string;

  pdf?: string;
  doi?: string;
  project?: string;
  bibtex?: string;

  month?: string;
  pages?: string;
  city?: string;
  country?: string;

  monthNumber?: number;

  volume?: string;
  number?: string;

  acceptanceRate?: string;

  keywords: string[];
};

export const publications: Publication[] = [
  {
    year: 2026,
    venue:
      "ICCAD",
    type:
      "conference",
    status:
      "accepted",
    title:
      "CEGF-TM: A Cost-Effective Streaming Tone-Mapping Accelerator Using Guided Frame Statistics for Thermal Imaging",
    authors: 
      "Cheol-Ho Choi, Hyunmin Choi, Taehyun Kim, Seongtaek Hong, Taehyung Kim, Jeongkyu Hong",
    publisher:
      "IEEE/ACM International Conference on Computer-Aided Design",
    month: 
      "November 2026",
    monthNumber:
      11,
    city:
      "San Jose, CA",
    country:
      "USA",
    // pages:
    //   "1-8",
    acceptanceRate:
      "24.09%",
    abstract:
      "This paper presents a guided-frame-reuse tone-mapping accelerator for real-time thermal imaging systems. The proposed architecture reduces histogram computation and on-chip memory requirements while preserving image quality and temporal consistency.",
    pdf:
      "/papers/2019_MOTL_Paper.pdf",
    // doi:
    //   "https://ieeexplore.ieee.org/document/12345678",
    // bibtex: `@inproceedings{choi2026iccad,
    //   title={FPGA-Based Thermal Tone Mapping Accelerator Using Guided Frame Reuse},
    //   author={Choi, Cheol-Ho and Coauthor, A. and Coauthor, B.},
    //   booktitle={Proceedings of the IEEE/ACM International Conference on Computer-Aided Design},
    //   year={2026}
    // }`,
    keywords: [
      "Thermal Imaging",
      "FPGA",
      "Tone Mapping",
      "Hardware Accelerator",
    ],
  },

  {
    year: 2026,
    venue:
      "ICCD",
    type:
      "conference",
    status:
      "under_review",
    title:
      "--",
    authors: 
      "Cheol-Ho Choi, Jeongkyu Hong",
    publisher:
      "IEEE International Conference on Computer Design",
    month: 
      "November 2026",
    monthNumber:
      11,
    city:
      "Hong Kong SAR",
    country:
      "China",
    // pages:
    //   "1-8",
    // acceptanceRate:
    //   "24.09%",
    abstract:
      "This paper presents a guided-frame-reuse tone-mapping accelerator for real-time thermal imaging systems. The proposed architecture reduces histogram computation and on-chip memory requirements while preserving image quality and temporal consistency.",
    pdf:
      "/papers/2019_MOTL_Paper.pdf",
    // doi:
    //   "https://ieeexplore.ieee.org/document/12345678",
    // bibtex: `@inproceedings{choi2026iccad,
    //   title={FPGA-Based Thermal Tone Mapping Accelerator Using Guided Frame Reuse},
    //   author={Choi, Cheol-Ho and Coauthor, A. and Coauthor, B.},
    //   booktitle={Proceedings of the IEEE/ACM International Conference on Computer-Aided Design},
    //   year={2026}
    // }`,
    keywords: [
      "Thermal Imaging",
      "FPGA",
      "Tone Mapping",
      "Hardware Accelerator",
    ],
  },

  {
    year:
      2026,
    venue:
      "ACM TECS",
    type:
      "journal",
    status:
      "major_revision",
    title:
      "FPGA-Based Thermal Imaging Architecture with Integrated Contrast Enhancement for Visibility Improvement",
    authors:
      "Cheol-Ho Choi, Seonyoung Lee, Jeongwoo Cha, Joonhwan Han, Jeongkyu Hong",
    publisher:
      "ACM Transactions on Embedded Computing Systems",
    abstract:
      "This paper presents an FPGA-based thermal imaging architecture integrating non-uniformity correction and contrast enhancement. The proposed architecture targets deterministic real-time operation using an efficient streaming pipeline with low hardware resource consumption.",
    pdf:
      "/papers/tecs2026.pdf",
    doi:
      "https://dl.acm.org/doi/xxxx",
    bibtex: 
      "",
    keywords: [
      "Long-wavelength Infrared",
      "Thermal Imaging System",
      "Contrast Enhancement",
      "Histogram Equalization",
      "FPGA",
    ],
  },

  {
    year: 2025,
    venue:
      "ICCE-Asia",
    type:
      "conference",
    status:
      "accepted",
    title:
      "Performance Evaluation of Optimal Parameter Settings for Region-Based Contrast Enhancement in Thermal Imaging Systems",
    authors: 
      "Cheol-Ho Choi, Seongtaek Hong, Taehyung Kim, Joonhwan Han",
    publisher:
      "IEEE/IEIE International Conference on Consumer Electronics-Asia",
    month: 
      "October 2025",
    monthNumber:
      10,
    city:
      "Busan",
    country:
      "Republic of Korea",
    pages:
      "1-6",
    abstract:
      "In embedded long-wavelength infrared thermal imaging systems, contrast enhancement is essential after the non–uniformity correction process to generate visually interpretable frames. To address this, our previous work proposed a region-based histogram equalization method with a dynamic clipping technique. However, that study had limitations, as it relied on only a small number of test frames and did not employ appropriate quantitative evaluation metrics. In this paper, we conduct additional experiments to identify optimal parameter configuration for the previously proposed method. Frame quality was evaluated using four assessment metrics on 4,768 test frames collected from 10 driving scenarios. The experimental results confirm that the configuration with the operation bit parameter set to 14 and the divided-region parameter set to 32 is the most effective and suitable for thermal imaging systems.",
    pdf:
      "/papers/2019_MOTL_Paper.pdf",
    doi:
      "https://ieeexplore.ieee.org/abstract/document/11263630",
    bibtex: 
      `@inproceedings{choi2025performance,
      title={Performance Evaluation of Optimal Parameter Settings for Region-Based Contrast Enhancement in Thermal Imaging Systems},
      author={Choi, Cheol-Ho and Hong, Seongtaek and Kim, Taehyung and Han, Joonhwan},
      booktitle={2025 IEEE/IEIE International Conference on Consumer Electronics-Asia (ICCE-Asia)},
      pages={1--6},
      year={2025},
      organization={IEEE}
    }`,
    keywords: [
      "Long-wavelength Infrared",
      "Thermal Imaging System",
      "Optimal Configuration",
      "Contrast Enhancement Algorithm",
    ],
  },

  {
    year: 2025,
    venue:
      "Electronics",
    type:
      "journal",
    status:
      "accepted",
    title:
      "EOS: Edge-Based Operation Skip Scheme for Real-Time Object Detection Using Viola-Jones Classifier",
    authors: 
      "Cheol-Ho Choi, Joonhwan Han, Hyun Woo Oh, Jeongwoo Cha, Jungho Shin",
    publisher:
      "Electronics",
    month: 
      "January 2025",
    monthNumber:
      1,
    pages:
      "1-24",
    abstract:
      "Machine learning-based object detection systems are preferred due to their cost-effectiveness compared to deep learning approaches. Among machine learning methods, the Viola-Jones classifier stands out for its reasonable accuracy and efficient resource utilization. However, as the number of classification iterations increases or the resolution of the input image increases, the detection processing speed may decrease. To address the detection speed issue related to input image resolution, an improved edge component calibration method is applied. Additionally, an edge-based operation skip scheme is proposed to overcome the detection processing speed problem caused by the number of classification iterations. Our experiments using the FDDB public dataset show that our method reduces classification iterations by 24.6157% to 84.1288% compared to conventional methods, except for our previous study. Importantly, our method maintains detection accuracy while reducing classification iterations. This result implies that our method can realize almost real-time object detection when implemented on field-programmable gate arrays.",
    pdf:
      "/papers/2019_MOTL_Paper.pdf",
    doi:
      "https://www.mdpi.com/2079-9292/14/2/397",
    bibtex: 
      `@article{choi2025eos,
      title={EOS: Edge-Based Operation Skip Scheme for Real-Time Object Detection Using Viola-Jones Classifier},
      author={Choi, Cheol-Ho and Han, Joonhwan and Oh, Hyun Woo and Cha, Jeongwoo and Shin, Jungho},
      journal={Electronics},
      volume={14},
      number={2},
      pages={397},
      year={2025},
      publisher={MDPI}
    }`,
    keywords: [
      "Object Detection",
      "Machine Learning",
      "Viola-Jones Classifier",
      "Operation Skip Scheme"
    ],
  },

  {
    year: 2025,
    venue:
      "ICCE",
    type:
      "conference",
    status:
      "accepted",
    title:
      "Region-Based Contrast Enhancement for Infrared Thermal Imaging Systems: Parameter-Wise Performance Evaluation and Comparative Analysis",
    authors: 
      "Cheol-Ho Choi, Jeongwoo Cha, Hyunmin Choi, Joonhwan Han, ",
    publisher:
      "Electronics",
    month: 
      "January 2025",
    monthNumber:
      1,
    pages:
      "1-24",
    abstract:
      "In the automotive industry, thermal imaging systems are increasingly explored for night vision applications. Building on our previous study, which introduced a region-based contrast enhancement algorithm designed to deliver consistent performance across varying driving environments, this paper focuses on a detailed performance analysis based on different parameters. Specifically, we investigate the algorithm's effectiveness using four operation bits (8, 10, 12, and 14) and four divided region (DR) parameters (4, 8, 16, and 32). Our experimental results demonstrate that the algorithm meets real-time processing requirements and performs optimally with an 8-bit operation and a DR parameter of 16. These findings indicate that this configuration provides the best balance between performance and real-time processing capabilities. Based on these results, we aim to offer users the most effective performance solutions for future night vision applications utilizing thermal imaging systems.",
    pdf:
      "/papers/2019_MOTL_Paper.pdf",
    doi:
      "https://ieeexplore.ieee.org/abstract/document/11263630",
    bibtex: 
      `@article{choi2025eos,
      title={EOS: Edge-Based Operation Skip Scheme for Real-Time Object Detection Using Viola-Jones Classifier},
      author={Choi, Cheol-Ho and Han, Joonhwan and Oh, Hyun Woo and Cha, Jeongwoo and Shin, Jungho},
      journal={Electronics},
      volume={14},
      number={2},
      pages={397},
      year={2025},
      publisher={MDPI}
    }`,
    keywords: [
      "Object Detection",
      "Machine Learning",
      "Viola-Jones Classifier",
      "Operation Skip Scheme"
    ],
  },
];