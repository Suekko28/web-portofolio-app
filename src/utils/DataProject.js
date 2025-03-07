import slugify from "slugify";

const getDataWebsite = () => {
  const data = [
    {
      id: 1,
      image: [
        "/src/assets/images/jejakkebahagiaan-1.png",
        "/src/assets/images/jejakkebahagiaan-2.png",
        "/src/assets/images/jejakkebahagiaan-3.png",
        "/src/assets/images/jejakkebahagiaan-4.png",
        "/src/assets/images/jejakkebahagiaan-5.png",
        "/src/assets/images/jejakkebahagiaan-6.png",
        "/src/assets/images/jejakkebahagiaan-7.png",
        "/src/assets/images/jejakkebahagiaan-8.png",
      ],
      title: "JejakKebahagiaan",
      date: "Sept 2024 - Oct 2024",
      description:
        "The Jejakkebahagiaan Website is a digital platform offering various wedding services, including digital invitations, photo printing, creative photo designs, and gift presentations (seserahan). It also features a blog to share tips, ideas, and inspiration for couples planning their special day.",
      link_website: "https://jejakkebahagiaan.com/",
      link_github: "https://github.com/Suekko28/web-portofolio-app",
      video: "/src/assets/video/jejakkebahagiaan-preview.mp4",
    },
    {
      id: 2,
      image: [
        "/src/assets/images/mhl-1.png",
        "/src/assets/images/mhl-2.png",
        "/src/assets/images/mhl-3.png",
        "/src/assets/images/mhl-4.png",
        "/src/assets/images/mhl-5.png",
        "/src/assets/images/mhl-6.png",
        "/src/assets/images/mhl-7.png",
        "/src/assets/images/mhl-8.png",
        "/src/assets/images/mhl-9.png",
        "/src/assets/images/mhl-10.png",
      ],
      title: "MHL",
      date: "Aug 2024 - Oct 2024",
      description:
        "I was responsible for redesigning the MHL.co.id website with the main goal of improving performance and enhancing visual aesthetics to create a more modern and responsive design.",
      link_website: "https://mhl.co.id/en/",
      link_github: "",
      video: "/src/assets/video/mhl-preview.mp4",
    },
    {
      id: 3,
      image: [
        "/src/assets/images/sawitri-1.png",
        "/src/assets/images/sawitri-2.png",
        "/src/assets/images/sawitri-3.png",
        "/src/assets/images/sawitri-4.png",
        "/src/assets/images/sawitri-5.png",
        "/src/assets/images/sawitri-6.png",
        "/src/assets/images/sawitri-7.png",
        "/src/assets/images/sawitri-8.png",
        "/src/assets/images/sawitri-9.png",
        "/src/assets/images/sawitri-10.png",
      ],
      title: "Tarikolot Village Administration System Website",
      date: "Jun 2024 - Aug 2024",
      description:
        "The Tarikolot Village Administration System website is an integrated platform that manages important village data. The system tracks village circulation activities to keep residents informed and engaged and has a reporting module to document activities.",
      link_website: "",
      link_github: "https://github.com/Suekko28/web-desa-app",
      video: "/src/assets/video/sawitri-preview.mp4",
    },
    {
      id: 4,
      image: [
        "/src/assets/images/e-learning-1.png",
        "/src/assets/images/e-learning-2.png",
        "/src/assets/images/e-learning-3.png",
        "/src/assets/images/e-learning-4.png",
        "/src/assets/images/e-learning-5.png",
        "/src/assets/images/e-learning-6.png",
      ],
      title: "Website E-Learning SMK 2 Triple “J”",
      date: "Nov 2023 - Jan 2024",
      description:
        "Website E-Learning SMK 2 Triple “J” SMK 2 Triple “J” E-Learning website is a specialized learning platform designed for TJKT (Computer Network and Telecommunication Engineering) program, which provides educational resources tailored to students' needs in mastering the curriculum.",
      link_website: "",
      link_github: "https://github.com/Suekko28/e-learning-app",
      video: "/src/assets/video/e-learning-preview.mp4",
    },
    {
      id: 5,
      image: [
        "/src/assets/images/murgana-1.png",
        "/src/assets/images/murgana-2.png",
        "/src/assets/images/murgana-3.png",
        "/src/assets/images/murgana-4.png",
        "/src/assets/images/murgana-5.png",
        "/src/assets/images/murgana-6.png",
      ],
      title: "Website Warehouse Murgana",
      date: "Aug 2023 - Nov 2023",
      description:
        "Murgana Warehouse is used to manage and track equipment needs for partner companies, ensuring efficient inventory and smooth collaboration based on their specific needs.",
      link_website: "",
      link_github: "https://github.com/Suekko28/WarehouseMurgana",
      video: "/src/assets/video/murgana-preview.mp4",
    },
    {
      id: 6,
      image: [
        "/src/assets/images/but-1.png",
        "/src/assets/images/but-2.png",
        "/src/assets/images/but-3.png",
        "/src/assets/images/but-4.png",
        "/src/assets/images/but-5.png",
        "/src/assets/images/but-6.png",
        "/src/assets/images/but-7.png",
        "/src/assets/images/but-8.png",
      ],
      title: "Website Warehouse BUT",
      date: "Jun 2023 - Aug 2023",
      description:
        "Warehouse BUT handles storage, inventory management, and distribution to support efficient supply chain operations.",
      link_website: "",
      link_github: "https://github.com/Suekko28/WarehouseBUT",
      video: "/src/assets/video/but-preview.mp4",
    },
  ];

  return data.map((project) => ({
    ...project,
    slug: slugify(project.title, { lower: true, strict: true }),
  }));
};


export { getDataWebsite };
