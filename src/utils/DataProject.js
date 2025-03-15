import slugify from "slugify";

const getDataWebsite = () => {
  const data = [
    {
      id: 1,
      image: "/assets/images/jejakkebahagiaan-1.png",
      title: "JejakKebahagiaan",
      date: "Sept 2024 - Oct 2024",
      description:
        "The JejakKebahagiaan.com website that I have created is a platform to share stories, inspirations and moments of happiness in various aspects of life.With an elegant and user-friendly design, this website provides a comfortable experience for visitors in exploring meaningful content. Features such as inspirational articles, a gallery of happy moments, and user interaction spaces make it a place to share and discover everyday happiness.Engaging visuals and intuitive navigation further enrich the user experience, inspiring them to find and share happiness in life.",
      link_website: "https://jejakkebahagiaan.com/",
      link_github: "https://github.com/Suekko28/web-portofolio-app",
      video: "/assets/video/jejakkebahagiaan-preview.mp4",
      module: [
        {
          title: "Login & Register",
          description:
            "The authentication module with Laravel UI provides Blade-based login and register features with frontend support such as Bootstrap, Vue, and React. Users can register with email and password validation, and then directly enter the system after registration. Login using Laravel Authentication Guard with “Remember Me” and logout options. Laravel also supports email verification before login. Implementation is easy with the commands composer require laravel/ui, php artisan ui bootstrap --auth, and npm install && npm run dev, which automatically generate authentication views. This module offers a quick and secure solution without the need to build a system from scratch.",
          image: [
            "/assets/images/jejakkebahagiaan-login.png",
            "/assets/images/jejakkebahagiaan-register.png",
          ],
        },
        {
          title: "Undangan Digital",
          description:
            "The Digital Invitation module in this system allows admins to create and manage with CRUD (Create, Read, Update, Delete) features. Each invitation is stored in the main table which has a relationship with the category table, namely Digital Invitations, Birthdays, Seminars, and Aqiqah. Each invitation can be edited or deleted as needed, thus providing flexibility for admins to update event information, change designs, or adjust other details. Users can see the design of the digital invitations offered by pressing the preview button and can order the digital invitations by pressing the message button.",
          image: [
            "/assets/images/jejakkebahagiaan-weddingdesign-2.png",
            "/assets/images/jejakkebahagiaan-weddingdesign-3.png",
            "/assets/images/jejakkebahagiaan-undangan-digital-1.png",
            "/assets/images/jejakkebahagiaan-undangan-digital-2.png",
            "/assets/images/jejakkebahagiaan-undangan-digital-3.png",
            "/assets/images/jejakkebahagiaan-undangan-digital-4.png",
          ],
        },
        {
          title: "Paket Cetak Foto",
          description:
            "The Photo Print module in this system allows admins to create and manage with CRUD (Create, Read, Update, Delete) features. For ease of transactions, orders can be made directly through e-commerce by pressing the Order button, which will direct users to the product page.",
          image: [
            "/assets/images/jejakkebahagiaan-cetak-foto-1.png",
            "/assets/images/jejakkebahagiaan-cetak-foto-2.png",
            "/assets/images/jejakkebahagiaan-cetak-foto-3.png",
          ],
        },
        {
          title: "Paket Cetak Kreasi Foto",
          description:
            "The Photo Creation Print module in this system allows admins to create and manage with CRUD (Create, Read, Update, Delete) features. For ease of transactions, orders can be made directly through e-commerce by pressing the Order button, which will direct users to the product page.",
          image: [
            "/assets/images/jejakkebahagiaan-gambarin-1.png",
            "/assets/images/jejakkebahagiaan-gambarin-2.png",
            "/assets/images/jejakkebahagiaan-gambarin-3.png",
          ],
        },
        {
          title: "Seserahan",
          description:
            "The Offerings module in this system allows the admin to create and manage with CRUD (Create, Read, Update, Delete) features. To see more details on this module, there is a see more button that will be directed to Instagram.",
          image: [
            "/assets/images/jejakkebahagiaan-seserahan-1.png",
            "/assets/images/jejakkebahagiaan-seserahan-2.png",
            "/assets/images/jejakkebahagiaan-seserahan-3.png",
          ],
        },
        {
          title: "Blog",
          description:
            "The Blog module allows admins to manage articles with CRUD (Create, Read, Update, Delete) features, where each blog created can be edited or deleted as needed. Admins have full control in adding content, updating information, and deleting articles that are no longer relevant. Users can view all blogs that have been published by the admin, so they can access any information, tips, or inspiration provided. With this system, content management becomes more structured and allows for more effective delivery of information to users.",
          image: [
            "/assets/images/jejakkebahagiaan-blog-1.png",
            "/assets/images/jejakkebahagiaan-blog-2.png",
            "/assets/images/jejakkebahagiaan-blog-3.png",
            "/assets/images/jejakkebahagiaan-blog-4.png",
          ],
        },
      ],
      tools: [
        {
          name: "HTML",
          image: "/assets/images/logo-html.png",
        },
        {
          name: "CSS",
          image: "/assets/images/logo-css.png",
        },
        {
          name: "Bootstrap",
          image: "/assets/images/logo-bootstrap.png",
        },
        {
          name: "MySQL",
          image: "/assets/images/logo-sql.png",
        },
        {
          name: "Laravel",
          image: "/assets/images/logo-laravel.png",
        },
        {
          name: "JavaScript",
          image: "/assets/images/logo-js.png",
        },
        {
          name: "Vite",
          image: "/assets/images/logo-vite.png",
        },
      ],
    },

    {
      id: 2,
      image: "/assets/images/mhl-1.png",
      title: "MHL",
      date: "Aug 2024 - Oct 2024",
      description:
        "The redesigned website of PT Menthobi Hijau Lestari (MHL) now looks more modern, professional and user-friendly.With more intuitive navigation and a cleaner design, visitors can easily access information about the company, eco-friendly products, services and partnership opportunities.A more dynamic and responsive visual display also enhances the user experience on various devices.The website is now optimized as an information and collaboration hub for business partners and the sustainability community.",
      link_website: "https://mhl.co.id/en/",
      link_github: "",
      video: "/assets/video/mhl-preview.mp4",
      module: [
        {
          title: "Home",
          description:
            "The main page of PT Menthobi Hijau Lestari's website presents a comprehensive overview of the company's commitment to creating sustainable solutions in the palm oil industry. With a professional and user-friendly design, this page introduces the company's vision in managing natural resources responsibly, as well as showcasing the various products and services offered, such as organic fertilizers and biofuels. In addition, visitors can find up-to-date information through articles and news related to the company's sustainability practices and innovations. Through intuitive navigation, the main page also directs users to various important modules, including company information, partnership opportunities, and contacts for further communication.",
          image: [
            "/assets/images/mhl-1.png",
            "/assets/images/mhl-2.png",
            "/assets/images/mhl-3.png",
            "/assets/images/mhl-11.png",
            "/assets/images/mhl-12.png",
          ],
        },
        {
          title: "About Us",
          description:
            "The “About Us” module on PT Menthobi Hijau Lestari's website provides an in-depth overview of the company's identity and commitment to the sustainable palm oil industry. In this module, the company explains its vision and mission that focuses on the responsible management of natural resources and the application of environmentally friendly technologies. It also highlights the company's core values that reflect a dedication to sustainability, efficiency and innovation. With information on its history, achievements, and environmental and social commitments, the “About Us” module aims to build trust with business partners, customers, and the wider public who want to understand more about the company's role in the green industry.",
          image: [
            "/assets/images/mhl-4.png",
            "/assets/images/mhl-5.png",
            "/assets/images/mhl-13.png",
            "/assets/images/mhl-14.png",
          ],
        },
        {
          title: "Product & Services",
          description:
            "The “Product & Services” module on the PT Menthobi Hijau Lestari website showcases the various products and services the company offers in support of the sustainable palm oil industry. The module includes information on key products such as organic fertilizers and biofuels, which are developed with environmentally friendly technologies to increase efficiency and reduce negative impacts on the ecosystem. In addition, the company also provides consulting services in palm oil industry waste management, assisting business partners in implementing more sustainable practices. With clear details on the benefits and advantages of each product and service, the module aims to provide innovative solutions for industries looking to transition to greener and more responsible practices.",
          image: [
            "/assets/images/mhl-6.png",
            "/assets/images/mhl-7.png",
            "/assets/images/mhl-15.png",
            "/assets/images/mhl-16.png",
            "/assets/images/mhl-17.png",
          ],
        },
        {
          title: "Articles",
          description:
            "The “Articles” module on PT Menthobi Hijau Lestari's website serves as an information center that presents various writings, news, and updates related to the palm oil industry and sustainability practices. In this module, visitors can find articles that discuss the latest innovations, environmentally friendly technologies, and industrial waste management strategies to support a greener ecosystem. In addition, the articles also provide insights into the company's efforts in creating sustainable solutions and its contribution to a more responsible industry. With informative and relevant content, this module aims to educate and inspire industry players, business partners, and the general public interested in the development of a sustainable palm oil sector.",
          image: [
            "/assets/images/mhl-8.png",
            "/assets/images/mhl-18.png",
          ],
        },
        {
          title: "Be a Partner",
          description:
            "The “Be a Partner” module on the PT Menthobi Hijau Lestari website is designed to invite various parties, ranging from industry players, investors, to communities, to collaborate in creating a sustainable and environmentally friendly business. In this module, the company explains the partnership opportunities available, both in the field of palm oil industry waste treatment, distribution of environmentally friendly products, and green technology innovation. In addition, the module highlights the benefits of strategic partnerships, such as increased operational efficiency, positive environmental impact, and contribution to building a more responsible palm oil industry. With an open approach to cooperation, PT Menthobi Hijau Lestari hopes to establish long-term relationships with partners who share the same vision in realizing a greener future. By using wpforms plugin for its form feature",
          image: [
            "/assets/images/mhl-9.png",
            "/assets/images/mhl-19.png",
          ],
        },
        {
          title: "Contact Us",
          description:
            "The “Contact Us” module on the PT Menthobi Hijau Lestari website provides a means of communication for visitors who wish to establish a further relationship with the company.In this module, there is contact information that includes the head office address, phone number, and official email for various purposes, such as business inquiries, partnerships, or consultations regarding products and services.In addition, there is a contact form that allows users to send direct messages to the company's team easily and quickly.With this module, PT Menthobi Hijau Lestari is committed to providing prompt and professional responses, and building closer relationships with business partners, customers, and communities interested in the sustainability solutions offered. By using wpforms plugin for its form feature",
          image: [
            "/assets/images/mhl-20.png",
            "/assets/images/mhl-21.png",
          ],
        },
      ],
      tools: [
        {
          name: "Wordpress",
          image: "/assets/images/logo-wordpress.png",
        },
        {
          name: "Polylang",
          image: "/assets/images/logo-polylang.jpg",
        },
        {
          name: "WPForms",
          image: "/assets/images/logo-wpforms.png",
        },
      ],
    },
    {
      id: 3,
      image: "/assets/images/sawitri-1.png",
      title: "Tarikolot Village Administration System Website",
      date: "Jun 2024 - Aug 2024",
      description:
        "Tarikolot Village is committed to developing a more integrated civil registration system to improve efficiency and transparency in village data management. The system is designed to include a population data collection process that is directly linked to village circulation data, including the recording of deceased residents and residents who have moved. In addition, the system will be equipped with an Activity Accountability Report (LPJ) feature as an official document that summarizes the implementation of activities from start to finish. With website-based technology, administrative processes can be carried out in real-time, transparently, and integrated, thus supporting the progress and development of the village as a whole.",
      link_website: "",
      link_github: "https://github.com/Suekko28/web-desa-app",
      video: "/assets/video/sawitri-preview.mp4",
      module: [
        {
          title: "Login & Register",
          description:
            "The authentication module with Laravel UI provides Blade-based login and register features with frontend support such as Bootstrap, Vue, and React. Users can register with email and password validation, and then directly enter the system after registration. Login using Laravel Authentication Guard with “Remember Me” and logout options. Laravel also supports email verification before login. Implementation is easy with the commands composer require laravel/ui, php artisan ui bootstrap --auth, and npm install && npm run dev, which automatically generate authentication views. This module offers a quick and secure solution without the need to build a system from scratch.",
          image: [
            "/assets/images/sawitri-13.png",
            "/assets/images/sawitri-12.png",
          ],
        },
        {
          title: "Dashboard",
          description:
            "The Dashboard module in the population administration system of Tarikolot Village is designed to provide a visual and real-time overview of village population data. The dashboard displays population statistics such as the total population, the number by gender, and information on E-KTP ownership in the form of a pie chart. In addition, population circulation data is available which includes the number of deaths, births, and moves in and out. Marital status is also displayed in pie charts, including the categories of Unmarried, Married, Divorced, and Divorced. Information on nationality and religion is also presented to provide a more complete picture of village demographics.",
          image: [
            "/assets/images/sawitri-1.png",
            "/assets/images/sawitri-14.png",
            "/assets/images/sawitri-15.png",
            "/assets/images/sawitri-16.png",
          ],
        },
        {
          title: "Government Institution Data",
          description:
            "The Village Government Institution Data module is designed to manage information about village official profiles in a structured and integrated manner. This module allows users to add, edit, delete, and view village official data through responsive and easy-to-use CRUD (Create, Read, Update, Delete) features. Each official's profile includes important information such as name, position, duty period, and other relevant supporting data. In addition, the view data feature allows users to see the complete details of each official, ensuring transparency and easy access to village government information. With this organized system, village administration can more efficiently manage institutional data and ensure information is always updated as needed.",
          image: [
            "/assets/images/sawitri-11.png",
            "/assets/images/sawitri-17.png",
            "/assets/images/sawitri-18.png",
          ],
        },
        {
          title: "Population Data",
          description:
            "The Population Data module in Sawitri Apps is designed to manage village population information in a structured and efficient manner. This module is equipped with search and filter features based on education, occupation, BPJS ownership, e-KTP ownership, gender, marital status, religion, as well as age, RW, and RT to facilitate access to data as needed. In addition, there is a CRUD (Create, Read, Update, Delete) feature that allows users to add, edit, and delete population data easily. Additional features such as data export to CSV or Excel and data import options are also available to facilitate the processing of large amounts of information. With an intuitive interface and clear navigation, this module supports more accurate and transparent population data management for village governments.",
          image: [
            "/assets/images/sawitri-19.png",
            "/assets/images/sawitri-2.png",
          ],
        },
        {
          title: "Village Circulation Data",
          description:
            "The Village Circulation Data module in Sawitri Apps serves to manage and monitor population dynamics in the village through recording data on births, deaths, newcomers, and residents who move. This module is integrated with the Resident Data table, ensuring that any changes in the village population are recorded accurately and up-to-date. With CRUD (Create, Read, Update, Delete) features, users can easily add, update, and delete population circulation data as events occur. The relationship with Resident Data allows for automatic updates of individual statuses in the village database, such as the addition of new residents from births, deletion of deceased residents, and recording residents who arrive or move. In addition, this module is equipped with search, filter, and statistical report features to assist village officials in making data-driven decisions related to village demographic development.",
          image: [
            "/assets/images/sawitri-3.png",
            "/assets/images/sawitri-20.png",
            "/assets/images/sawitri-4.png",
            "/assets/images/sawitri-21.png",
            "/assets/images/sawitri-5.png",
            "/assets/images/sawitri-22.png",
            "/assets/images/sawitri-6.png",
            "/assets/images/sawitri-23.png",
          ],
        },
        {
          title: "Activity Accountability Report",
          description:
            "The Village Circulation Data module is a feature that records various population events within a village, including birth, death, newcomer, and migration data. This module is integrated with the Resident Data table, ensuring that any changes that occur can be directly linked to the information of the individual concerned. With the CRUD (Create, Read, Update, Delete) feature, village administrators can easily manage real-time population circulation data, monitor demographic changes, and generate accurate reports for village administration purposes.",
          image: [
            "/assets/images/sawitri-7.png",
            "/assets/images/sawitri-24.png",
            "/assets/images/sawitri-8.png",
            "/assets/images/sawitri-25.png",
            "/assets/images/sawitri-26.png",
            "/assets/images/sawitri-27.png",
            "/assets/images/sawitri-28.png",
          ],
        },
      ],
      tools: [
        {
          name: "HTML",
          image: "/assets/images/logo-html.png",
        },
        {
          name: "CSS",
          image: "/assets/images/logo-css.png",
        },
        {
          name: "Bootstrap",
          image: "/assets/images/logo-bootstrap.png",
        },
        {
          name: "MySQL",
          image: "/assets/images/logo-sql.png",
        },
        {
          name: "Laravel",
          image: "/assets/images/logo-laravel.png",
        },
        {
          name: "JavaScript",
          image: "/assets/images/logo-js.png",
        },
        {
          name: "Vite",
          image: "/assets/images/logo-vite.png",
        },
        {
          name: "Yajra Box",
          image: "/assets/images/logo-yajra.svg",
        },
      ],
    },
    {
      id: 4,
      image: [
        "/assets/images/e-learning-1.png",
        "/assets/images/e-learning-2.png",
        "/assets/images/e-learning-3.png",
        "/assets/images/e-learning-4.png",
        "/assets/images/e-learning-5.png",
        "/assets/images/e-learning-6.png",
      ],
      title: "Website E-Learning SMK 2 Triple “J”",
      date: "Nov 2023 - Jan 2024",
      description:
        "Website E-Learning SMK 2 Triple “J” SMK 2 Triple “J” E-Learning website is a specialized learning platform designed for TJKT (Computer Network and Telecommunication Engineering) program, which provides educational resources tailored to students' needs in mastering the curriculum.",
      link_website: "",
      link_github: "https://github.com/Suekko28/e-learning-app",
      video: "/assets/video/e-learning-preview.mp4",
    },
    {
      id: 5,
      image: [
        "/assets/images/murgana-1.png",
        "/assets/images/murgana-2.png",
        "/assets/images/murgana-3.png",
        "/assets/images/murgana-4.png",
        "/assets/images/murgana-5.png",
        "/assets/images/murgana-6.png",
      ],
      title: "Website Warehouse Murgana",
      date: "Aug 2023 - Nov 2023",
      description:
        "Murgana Warehouse is used to manage and track equipment needs for partner companies, ensuring efficient inventory and smooth collaboration based on their specific needs.",
      link_website: "",
      link_github: "https://github.com/Suekko28/WarehouseMurgana",
      video: "/assets/video/murgana-preview.mp4",
    },
    {
      id: 6,
      image: [
        "/assets/images/but-1.png",
        "/assets/images/but-2.png",
        "/assets/images/but-3.png",
        "/assets/images/but-4.png",
        "/assets/images/but-5.png",
        "/assets/images/but-6.png",
        "/assets/images/but-7.png",
        "/assets/images/but-8.png",
      ],
      title: "Website Warehouse BUT",
      date: "Jun 2023 - Aug 2023",
      description:
        "Warehouse BUT handles storage, inventory management, and distribution to support efficient supply chain operations.",
      link_website: "",
      link_github: "https://github.com/Suekko28/WarehouseBUT",
      video: "/assets/video/but-preview.mp4",
    },
  ];

  return data.map((project) => ({
    ...project,
    slug: slugify(project.title, { lower: true, strict: true }),
  }));
};

export { getDataWebsite };
