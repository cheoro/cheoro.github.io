export type PublicationType =
  | "conference"
  | "journal";

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

  thumbnail?: string;

  selected?: boolean;
  anchor?: string;

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

    selected:
      true,

    anchor:
      "iccad-2026-cegf-tm",

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
      "/papers/tecs2026.pdf",

    // doi:
    //   "https://ieeexplore.ieee.org/document/12345678",

    thumbnail:
      "/images/publications/2026_ICCAD.pdf",

    keywords: [
      "Computer Architecture",
    ],
  },

  {
    year: 2026,

    venue:
      "ICCD",

    type:
      "conference",

    status:
      "accepted",

    selected:
      true,

    anchor:
      "iccd-2026-va-nuc",

    title:
      "VA-NUC: A Fully Streaming Architecture for Vignetting-Aware Non-Uniformity Correction with Deterministic Coefficient Caching",

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

    acceptanceRate:
      "26%",

    abstract:
      "This paper presents a guided-frame-reuse tone-mapping accelerator for real-time thermal imaging systems. The proposed architecture reduces histogram computation and on-chip memory requirements while preserving image quality and temporal consistency.",

    pdf:
      "/papers/tecs2026.pdf",

    // doi:
    //   "https://ieeexplore.ieee.org/document/12345678",

    thumbnail:
      "/images/publications/2026_ICCD.pdf",

    keywords: [
      "Computer Architecture",
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
      "under_review",

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
      "Computer Architecture",
    ],
  },

  {
    year:
      2025,

    venue:
      "ICCE-Asia",

    type:
      "conference",

    status:
      "published",

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
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/11263630",

    keywords: [
      "Computer Vision",
    ],
  },

  {
    year:
      2025,

    venue:
      "Electronics",

    type:
      "journal",

    status:
      "published",

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
      "/papers/tecs2026.pdf",

    doi:
      "https://www.mdpi.com/2079-9292/14/2/397",

    keywords: [
      "Artificial Intelligence",
    ],
  },

  {
    year:
      2025,

    venue:
      "ICCE",

    type:
      "conference",

    status:
      "published",

    title:
      "Region-Based Contrast Enhancement for Infrared Thermal Imaging Systems: Parameter-Wise Performance Evaluation and Comparative Analysis",

    authors:
      "Cheol-Ho Choi, Jeongwoo Cha, Hyunmin Choi, Joonhwan Han, ",

    publisher:
      "IEEE International Conference on Consumer Electronics",

    month:
      "January 2025",

    monthNumber:
      1,

    pages:
      "1-5",

    city:
      "Las Vegas, NV",

    country:
      "USA",

    abstract:
      "In the automotive industry, thermal imaging systems are increasingly explored for night vision applications. Building on our previous study, which introduced a region-based contrast enhancement algorithm designed to deliver consistent performance across varying driving environments, this paper focuses on a detailed performance analysis based on different parameters. Specifically, we investigate the algorithm's effectiveness using four operation bits (8, 10, 12, and 14) and four divided region (DR) parameters (4, 8, 16, and 32). Our experimental results demonstrate that the algorithm meets real-time processing requirements and performs optimally with an 8-bit operation and a DR parameter of 16. These findings indicate that this configuration provides the best balance between performance and real-time processing capabilities. Based on these results, we aim to offer users the most effective performance solutions for future night vision applications utilizing thermal imaging systems.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10930054",

    keywords: [
      "Computer Vision",
    ],
  },

  {
    year:
      2024,

    venue:
      "ICCE-Asia",

    type:
      "conference",

    status:
      "published",

    title:
      "Algorithm for LWIR Thermal Imaging Camera with Minimal Mechanical Shutter Utilization",

    authors:
      "Taehyun Kim, Joonhwan, Jeongwoo Cha, Hyunmin Choi, Jungho Shin, Eunchong Kim, Hyun Woo Oh, Cheol-Ho Choi, Seongtaek Hong, Taehyung Kim",

    publisher:
      "IEEE International Conference on Consumer Electronics",

    month:
      "November 2024",

    monthNumber:
      11,

    pages:
      "1-5",

    city:
      "Danang",

    country:
      "Vietnam",

    abstract:
      "Uncooled LWIR (Long-Wave InfraRed) thermal imaging cameras are characterized by non-uniformity. because infrared detectors exhibit nonlinear characteristics depending on the environmental temperature. In this paper, we propose a method to smoothly transition between a method of correcting non-uniformity using a shutter one time when the thermal imaging camera is not stable at the start-up, and a method of correcting non-uniformity by performing conventional NUC (Non-Uniformity Correction) when thermal image camera is stabilized. The proposed method was confirmed to have similar performance to the conventional method in which the thermal imaging camera uses the shutter several times during initial start-up. The conventional method closes the shutter multiple times to correct non-uniformity, which obscures information necessary for driving. In contrast, the proposed method closes the shutter only one time during initial start-up to correct non-uniformity, which does not obscure information necessary for driving. Therefore, it is suitable for auxiliary systems used in autonomous driving platforms.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10773806",

    keywords: [
      "Computer Vision",
    ],
  },

  {
    year:
      2024,

    venue:
      "ICCE-Asia",

    type:
      "conference",

    status:
      "published",

    title:
      "Infrared Thermal Imaging for Embedded Child Presence Detection System: Feasibility and Performance Evaluation",

    authors:
      "Cheol-Ho Choi, Seongtaek Hong, Eun Jin Jeong, Joonhwan Han",

    publisher:
      "IEEE International Conference on Consumer Electronics",

    month:
      "November 2024",

    monthNumber:
      11,

    pages:
      "1-4",

    city:
      "Danang",

    country:
      "Vietnam",

    abstract:
      "In the automotive industry, regulations and standards mandate that Child Presence Detection (CPD) systems must be installed. Most current CPD systems utilize radar or visible cameras to identify the presence or absence of objects based on bio-signals or movement information. However, these systems cannot determine if an emergency situation, such as heatstroke, occurs as the temperature inside the vehicle rises. In this paper, we propose an architecture for a thermal imaging-based CPD system that can perform simultaneous object detection, recognition, and status assessment, while also monitoring the internal environment of the vehicle. We further evaluate the feasibility of this thermal imaging-based CPD system in meeting the performance requirements outlined by regulations and standards for in-cabin use.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10773759",

    keywords: [
      "Artificial Intelligence",
    ],
  },

  {
    year:
      2024,

    venue:
      "RTCSA",

    type:
      "conference",

    status:
      "published",

    title:
      "A Compact Real-Time Thermal Imaging System Based on Heterogeneous System-on-Chip",

    authors:
      "Hyun Woo Oh, Cheol-Ho Choi, Jeong Woo Cha, Hyunmin Choi, Jung-Ho Shin, Joon Hwan Han",

    publisher:
      "IEEE International Conference on Embedded and Real-Time Computing Systems and Applications",

    month:
      "August 2024",

    monthNumber:
      8,

    pages:
      "97-107",

    city:
      "Sokcho",

    country:
      "Republic of Korea",

    abstract:
      "This paper presents a real-time embedded thermal imaging system architecture for compact, energy-efficient, high-quality imaging utilizing heterogeneous system-on-chip (SoC) and uncooled infrared focal plane arrays (IRFPAs). Unlike previous systems that organized separate devices for complex image processing, our system provides integrated image processing support for robust sensor-to-surveillance. The image processing organizes two algorithm stacks: a non-uniformity correction stack to mitigate the distinctive noise vulnerabilities of uncooled IRFPAs, and an image enhancement stack including contrast enhancement and temporal noise filters. We optimized these algorithms for domain-specific factors, including asymmetric multiprocessing (AMP), cache organization, single instruction multiple data (SIMD) instructions, and very long instruction word (VLIW) architectures. The implementation on the TI TDA3x SoC demonstrates that our system can process 640×480, 60 frames per second (FPS) videos at a peak core load of 57.5% while consuming power less than 2.2 W for the entire system, denoting the possibility of processing the 1280×1024, 30 FPS videos from the cutting-edge uncooled IRFPAs. Additionally, our system improves power efficiency by 9.42% and 9.96% at 30 and 60 FPS, respectively, compared to the state-of-the-art when executing similar image processing algorithms.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10695588",

    keywords: [
      "Computer Architecture",
    ],
  },

  {
    year:
      2024,

    venue:
      "ISOCC",

    type:
      "conference",

    status:
      "published",

    title:
      "Improved Contrast Enhancement Algorithm for Night Vision Systems Using Thermal Camera",

    authors:
      "Cheol-Ho Choi, Jeongwoo Cha, Joonhwan Han, Hyunmin Choi, Jungho Shin",

    publisher:
      "International SoC Design Conference",

    month:
      "August 2024",

    monthNumber:
      8,

    pages:
      "322-323",

    city:
      "Sapporo",

    country:
      "Japan",

    abstract:
      "Long-wave infrared-based thermal cameras employing uncooled detectors are extensively utilized in the night vision systems of autonomous driving platforms. In these cameras, contrast enhancement process is necessary to transition from low dynamic range to high dynamic range. Therefore, in this paper, we propose an improved contrast enhancement algorithm utilizing histogram equalization with gamma correction.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10695588",

    keywords: [
      "Computer Vision",
    ],
  },

  {
    year:
      2024,

    venue:
      "AICAS",

    type:
      "conference",

    status:
      "published",

    title:
      "Fast Object Detection Algorithm Using Edge-Based Operation Skip Scheme with Viola-Jones Method",

    authors:
      "Cheol-Ho Choi, Joonhwan Han, Jeongwoo Cha, Jungho Shin, Hyun Woo Oh",

    publisher:
      "IEEE International Conference on Artificial Intellience Circuits and Systems",

    month:
      "April 2024",

    monthNumber:
      4,

    pages:
      "322-323",

    city:
      "Abu Dhabi",

    country:
      "United Arab Emirates",

    abstract:
      "Machine learning approaches are preferred over deep learning in embedded systems due to their resource efficiency. The widely adopted Viola-Jones method and related algorithms are selected for their high detection accuracy and reasonable processing speed. However, a limitation arises as processing time increases with additional classification iterations based on sub-window operations. To address this issue, we propose an enhanced object detection algorithm that incorporates the Viola-Jones method with edge component calibration and an edge-based operation skip scheme. The introduction of edge component calibration ensures detection performance comparable to conventional methods. This scheme, relying on edge values, significantly reduces unnecessary computations in the background, leading to a marked decrease in classification operations compared to conventional methods. Visual comparisons in experimental results demonstrate that our method increases the detection precision factor while maintaining recall. In terms of classification operations, our approach reduces their number by 31.38% to 85.78% compared to conventional methods. In simpler terms, our method improves processing speed by minimizing classification operations, making it well-suited for embedded systems with limited resource utilization.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10695588",

    keywords: [
      "Artificial Intelligence",
    ],
  },

  {
    year:
      2024,

    venue:
      "Sensors",

    type:
      "journal",

    status:
      "published",

    title:
      "Contrast Enhancement Method Using Region-Based Dynamic Clipping Technique for LWIR-Based Thermal Camera of Night Vision Systems",

    authors:
      "Cheol-Ho Choi, Joonhwan Han, Jeongwoo Cha, Hyunmin Choi, Jungho Shin, Taehyun Kim, Hyun Woo Oh",

    publisher:
      "Sensors",

    month:
      "March 2024",

    monthNumber:
      3,

    pages:
      "1-25",

    abstract:
      "In the autonomous driving industry, there is a growing trend to employ long-wave infrared (LWIR)-based uncooled thermal-imaging cameras, capable of robustly collecting data even in extreme environments. Consequently, both industry and academia are actively researching contrast-enhancement techniques to improve the quality of LWIR-based thermal-imaging cameras. However, most research results only showcase experimental outcomes using mass-produced products that already incorporate contrast-enhancement techniques. Put differently, there is a lack of experimental data on contrast enhancement post-non-uniformity (NUC) and temperature compensation (TC) processes, which generate the images seen in the final products. To bridge this gap, we propose a histogram equalization (HE)-based contrast enhancement method that incorporates a region-based clipping technique. Furthermore, we present experimental results on the images obtained after applying NUC and TC processes. We simultaneously conducted visual and qualitative performance evaluations on images acquired after NUC and TC processes. In the visual evaluation, it was confirmed that the proposed method improves image clarity and contrast ratio compared to conventional HE-based methods, even in challenging driving scenarios such as tunnels. In the qualitative evaluation, the proposed method demonstrated upper-middle-class rankings in both image quality and processing speed metrics. Therefore, our proposed method proves to be effective for the essential contrast enhancement process in LWIR-based uncooled thermal-imaging cameras intended for autonomous driving platforms.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://www.mdpi.com/1424-8220/24/12/3829",

    keywords: [
      "Computer Vision",
    ],
  },

  {
    year:
      2023,

    venue:
      "Access",

    type:
      "journal",

    status:
      "published",

    selected:
      true,

    anchor:
      "access-2023-stereo",

    title:
      "Cell-Based Refinement Processor Utilizing Disparity Characteristics of Road Environment for SGM-Based Stereo Vision Systems",

    authors:
      "Cheol-Ho Choi, Hyun Woo Oh, Joonhwan Han, Jungho Shin",

    publisher:
      "IEEE Access",

    month:
      "December 2023",

    monthNumber:
      12,

    pages:
      "138122-138140",

    abstract:
      "Embedded stereo vision systems based on traditional approaches often require a disparity refinement process to enhance image quality. Weighted median filter (WMF)-based processors are commonly employed for their excellent refinement performance. However, when implemented on a field-programmable gate array (FPGA), WMF-based processors face a trade-off between hardware resource utilization and refinement performance. To address this trade-off, we previously proposed a new disparity refinement processor based on the hybrid max-median filter (HMMF). However, our earlier work did not guarantee flawless operation in large occluded and texture-less regions, particularly in areas with numerous holes. In order to overcome this limitation of conventional processors, we proposed a cell-based disparity refinement processor. This processor extends our previous HMMF-based disparity refinement processor. To evaluate its refinement performance, we conducted experiments using four types of publicly available stereo datasets. When comparing refinement performance, our proposed processor outperforms conventional processors when using the KITTI 2012 and 2015 stereo benchmark datasets. Additionally, the results demonstrate that our proposed processor exhibits superior refinement performance when applied to the Cityscapes and StereoDriving datasets in comparison to conventional processors. Furthermore, when considering hardware resource utilization, our proposed processor demonstrates lower resource requirements than conventional processors when implemented on an FPGA. Therefore, our proposed disparity refinement processor is well-suited for the disparity refinement process in stereo vision systems that require cost-effectiveness and high performance.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10695588",

    keywords: [
      "Computer Architecture",
    ],
  },

  {
    year:
      2023,

    venue:
      "DSD",

    type:
      "conference",

    status:
      "published",

    title:
      "An SoC FPGA-Based Integrated Real-Time Image Processor for Uncooled Infrared Focal Plane Array",

    authors:
      "Hyun Woo Oh, Cheol-Ho Choi, Jeong Woo Cha, Hyunmin Choi, Joon Hwan Han, Jung-Ho Shin",

    publisher:
      "Euromicro Conference on Digital System Design",

    month:
      "September 2023",

    monthNumber:
      9,

    pages:
      "660-668",

    city:
      "Golem",

    country:
      "Albania",

    abstract:
      "This paper presents an integrated image processor architecture designed for realtime interfacing and processing of high-resolution thermal video obtained from an uncooled infrared focal plane array (IRFPA) utilizing a modern system-on-chip field-programmable gate array (SoC FPGA). Our processor provides a one-chip solution for incorporating non-uniformity correction (NUC) algorithms and contrast enhancement methods (CEM) to be performed seamlessly. We have employed NUC algorithms that utilize multiple coefficients to ensure robust image quality, free from ghosting effects and blurring. These algorithms include polynomial modeling-based thermal drift compensation (TDC), two-point correction (TPC), and runtime discrete flat field correction (FFC). To address the memory bottlenecks originating from the parallel execution of NUC algorithms in realtime, we designed accelerators and parallel caching modules for pixel-wise algorithms based on a multi-parameter polynomial expression. Furthermore, we designed a specialized accelerator architecture to minimize the interrupted time for runtime FFC. The implementation on the XC7Z020CLG400 SoC FPGA with the QuantumRed VR thermal module demonstrates that our image processing module achieves a throughput of 60 frames per second (FPS) when processing 14-bit 640×480 resolution infrared video acquired from an uncooled IRFPA.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10456855",

    keywords: [
      "Computer Architecture",
    ],
  },

  {
    year:
      2023,

    venue:
      "DSD",

    type:
      "conference",

    status:
      "published",

    title:
      "Disparity Refinement Processor Architecture Utilizing Horizontal and Vertical Characteristics for Stereo Vision Systems",

    authors:
      "Cheol-Ho Choi, Hyun Woo Oh",

    publisher:
      "Euromicro Conference on Digital System Design",

    month:
      "September 2023",

    monthNumber:
      9,

    pages:
      "220-226",

    city:
      "Golem",

    country:
      "Albania",

    abstract:
      "In embedded stereo vision systems based on semi-global matching, the matching accuracy of the initial disparity map can be degraded because of various factors. To solve this problem, weighted median-based disparity refinement hardware architectures are utilized to improve the matching accuracy. However, for the conventional hardware architectures, there is a trade-off between hardware resource utilization and re-finement performance when they are implemented on a field programmable gate array (FPGA). Therefore, in this paper, we propose a hybrid max-median filter and its hardware architecture to improve the refinement performance and reduce hardware resource utilization. To evaluate the refinement performance, we used two public stereo datasets. When using the various window sizes for KITTI 2012 and 2015 stereo benchmark datasets, the proposed hardware architecture showed better matching accuracy performance compared with the conventional hardware architectures. In terms of the hardware resource utilization, when implemented on an FPGA, the proposed hardware architecture has low requirements for all types of hardware resources. That is, the proposed hardware architecture overcomes the trade-off between hardware resource utilization and refinement performance.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/10456793",

    keywords: [
      "Computer Architecture",
    ],
  },

  {
    year:
      2022,

    venue:
      "HCIS",

    type:
      "journal",

    status:
      "published",

    title:
      "Face Detection Using Haar Cascade Classifiers Based on Vertical Component Calibration",

    authors:
      "Cheol-Ho Choi, Junghwan Kim, Jongkil Hyun, Younghyeon Kim, Byungin Moon",

    publisher:
      "Human-centric Computing and Information Sciences",

    month:
      "March 2022",

    monthNumber:
      3,

    pages:
      "1-17",

    abstract:
      "The growing significance of the security and human management fields attracts active research related to face detection and recognition systems. Among these face detection techniques based on machine learning, Haar cascade classifiers are widely used because of their high accuracy for human frontal faces. However, the Haar cascade classifiers have a limitation in that the processing time increases as the number of false positives increases because they detect human faces based on the sub-window operation. Therefore, in this paper, a pre-processing method based on a 2D Haar discrete wavelet transform is proposed for face detection. The proposed method improves the processing speed by reducing the number of false positives through a vertical component calibration process using the vertical and horizontal components. The results of the facedetection experiments that use a public test dataset comprising 2,845 images showed that the proposed method improved the processing speed by 32.05% and reduced the number of false positives by 25.46%, compared with those of the histogram equalization that shows the best performance case among conventional filter-based pre-processing methods. In addition, the performance of the proposed method is similar to those of conventional image contraction-based methods. In an experiment using a private dataset, the proposed method showed a 53.85% reduction in the total number of false positives compared with that of the Gaussian filter while maintaining the total number of true positives. The F1 score of the proposed method shows a 1.39% improvement compared with those of Lanczos-3 that shows the best performance case.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://hcisj.com/articles/?HCIS202212011",

    keywords: [
      "Artificial Intelligence",
    ],
  },

  {
    year:
      2021,

    venue:
      "ISOCC",

    type:
      "conference",

    status:
      "published",

    title:
      "Haar Filter Hardware Architecture for the Accuracy Improvement of Stereo Vision Systems",

    authors:
      "Cheol-Ho Choi, Younghyeon Kim, Jiseok Ha, Byungin Moon",

    publisher:
      "International SoC Design Conference",

    month:
      "October 2021",

    monthNumber:
      10,

    pages:
      "401-402",

    city:
      "Jeju Island",

    country:
      "Republic of Korea",

    abstract:
      "In stereo vision systems, mismatching can occur frequently in specific regions containing noise and high-frequency components, such as checkered patterns. Therefore, this paper proposes a preprocessing method and architecture based on a 2-D Haar filter to improve the matching accuracy of disparity map by reducing the high-frequency and noise components. In this paper, the disparity map is computed by the semi-global matching (SGM) method, and separable weighted median filter is adopted as postprocessing. The SGM with proposed method reduces the average number of mismatching pixels by 3.5233% in non-occlusion condition and 3.2647% in occlusion condition compared to that with a 2-D Gaussian filter when using the KITTI 2015 stereo dataset. The proposed method is suitable for embedded stereo vision systems that requires high matching accuracy with reasonable resource overhead.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/9614032",

    keywords: [
      "Computer Architecture",
    ],
  },

  {
    year:
      2021,

    venue:
      "ISCAS",

    type:
      "conference",

    status:
      "published",

    title:
      "Hardware Architecture of a Haar Classifier Based Face Detection System Using a Skip Scheme",

    authors:
      "Jongkil Hyun, Junghwan Kim, Cheol-Ho Choi, Byungin Moon",

    publisher:
      "IEEE International Symposium on Circuits and Systems",

    month:
      "May 2021",

    monthNumber:
      5,

    pages:
      "1-4",

    city:
      "Daegu",

    country:
      "Republic of Korea",

    abstract:
      "Face recognition applications are being widely studied owing to their extensive usability in the field of computer vision. However, processing an entire image requires a considerable amount of time. To reduce the processing time, several algorithms that extract only the face from the image during pre-processing are studied. Haar classifiers are extensively used for the hardware implementation of face detection algorithms that improve the processing speed of face classification. This paper proposes a Haar classifier based face detection architecture that removes unnecessary iterations during classification to further improve the processing speed. The proposed architecture improves the processing speed by 4.46% compared to that of conventional Haar classifier based face detection architectures, for face detection using a VGA image with 30 faces. The proposed architecture tends to improve the processing speed as the number of faces in the image increases while matching the detection accuracy of conventional methods. Additionally, this architecture can be widely applied to classification algorithms that are based on iterations.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://ieeexplore.ieee.org/abstract/document/9614032",

    keywords: [
      "Computer Architecture",
    ],
  },

  {
    year:
      2019,

    venue:
      "MOTL",

    type:
      "journal",

    status:
      "published",

    title:
      "Heartbeat Detection Using a Doppler Radar Sensor Based on the Scaling Function of Wavelet Trasnform",

    authors:
      "Cheol-Ho Choi, Jae-Hyun Park, Ha-Neul Lee, Jong-Ryul Yang",

    publisher:
      "Microwave and Optical Technology Letters",

    month:
      "February 2019",

    monthNumber:
      2,

    pages:
      "1792-1796",

    abstract:
      "The heartbeat detection using the scaling function of Wavelet transform is proposed for a Doppler radar sensor. The conventional methods such as the fast-Fourier transform and the autocorrelation show the respiration rate and the heartbeat from the raw data of the radar sensors acquiring for a sufficient sampling time. The methods have the limit to detect the biometric information that varies with real-time because they only show the overall statistical information of the sampled data. In the proposed method, the scaling function in the Daubechies wavelet transform can be used to accurately find out the periodicity of radar signals for detecting heartbeat varying in real-time. The results of the signal processing using the radar signals acquired for 3 min results show that the proposed method lowered a mean error rate of 2.5% and a SD of 2.0% compared with the method using the wavelet function. The proposed method in the measurement for 1 minute using the radar sensor also showed the lowest mean error rate of 3.8% and the low SD of 3.2% using the contact sensor as the reference among various signal processing methods including auto-correlation and peak detection with filtering.",

    pdf:
      "/papers/tecs2026.pdf",

    doi:
      "https://onlinelibrary.wiley.com/doi/abs/10.1002/mop.31823",

    keywords: [
      "Signal Processing",
    ],
  },
];