import slugify from "slugify";

const getDataWebsite = () => {
  const data = [
    {
      id: 1,
      image: "/src/assets/images/jejakkebahagiaan-1.png",
      title: "JejakKebahagiaan",
      date: "Sept 2024 - Oct 2024",
      description:
        "The Jejakkebahagiaan Website is a digital platform offering various wedding services, including digital invitations, photo printing, creative photo designs, and gift presentations (seserahan). It also features a blog to share tips, ideas, and inspiration for couples planning their special day.",
      link_website: "https://jejakkebahagiaan.com/",
      link_github: "https://github.com/Suekko28/web-portofolio-app",
      video: "/src/assets/video/jejakkebahagiaan-preview.mp4",
      module: [
        {
          title: "Login",
          description:
            "The authentication module with Laravel UI provides Blade-based login and register features with frontend support such as Bootstrap, Vue, and React. Users can register with email and password validation, and then directly enter the system after registration. Login using Laravel Authentication Guard with “Remember Me” and logout options. Laravel also supports email verification before login. Implementation is easy with the commands composer require laravel/ui, php artisan ui bootstrap --auth, and npm install && npm run dev, which automatically generate authentication views. This module offers a quick and secure solution without the need to build a system from scratch.",
          image: [
            "/src/assets/images/jejakkebahagiaan-login.png",
            "/src/assets/images/jejakkebahagiaan-register.png",
          ],
        },
        {
          title: "Undangan Digital",
          description:
            "The Digital Invitation module in this system allows admins to create and manage with CRUD (Create, Read, Update, Delete) features. Each invitation is stored in the main table which has a relationship with the category table, namely Digital Invitations, Birthdays, Seminars, and Aqiqah. Each invitation can be edited or deleted as needed, thus providing flexibility for admins to update event information, change designs, or adjust other details. Users can see the design of the digital invitations offered by pressing the preview button and can order the digital invitations by pressing the message button.",
          image: [
            "/src/assets/images/jejakkebahagiaan-weddingdesign-2.png",
            "/src/assets/images/jejakkebahagiaan-weddingdesign-3.png",
            "/src/assets/images/jejakkebahagiaan-undangan-digital-1.png",
            "/src/assets/images/jejakkebahagiaan-undangan-digital-2.png",
            "/src/assets/images/jejakkebahagiaan-undangan-digital-3.png",
            "/src/assets/images/jejakkebahagiaan-undangan-digital-4.png",
          ],
        },
        {
          title: "Paket Cetak Foto",
          description:
            "The Photo Print module in this system allows admins to create and manage with CRUD (Create, Read, Update, Delete) features. For ease of transactions, orders can be made directly through e-commerce by pressing the Order button, which will direct users to the product page.",
          image: [
            "/src/assets/images/jejakkebahagiaan-cetak-foto-1.png",
            "/src/assets/images/jejakkebahagiaan-cetak-foto-2.png",
            "/src/assets/images/jejakkebahagiaan-cetak-foto-3.png",
          ],
        },
        {
          title: "Paket Cetak Kreasi Foto",
          description:
            "The Photo Creation Print module in this system allows admins to create and manage with CRUD (Create, Read, Update, Delete) features. For ease of transactions, orders can be made directly through e-commerce by pressing the Order button, which will direct users to the product page.",
          image: [
            "/src/assets/images/jejakkebahagiaan-gambarin-1.png",
            "/src/assets/images/jejakkebahagiaan-gambarin-2.png",
            "/src/assets/images/jejakkebahagiaan-gambarin-3.png",
          ],
        },
        {
          title: "Seserahan",
          description:
            "The Offerings module in this system allows the admin to create and manage with CRUD (Create, Read, Update, Delete) features. To see more details on this module, there is a see more button that will be directed to Instagram.",
          image: [
            "/src/assets/images/jejakkebahagiaan-seserahan-1.png",
            "/src/assets/images/jejakkebahagiaan-seserahan-2.png",
            "/src/assets/images/jejakkebahagiaan-seserahan-3.png",
          ],
        },
        {
          title: "Blog",
          description:
            "The Blog module allows admins to manage articles with CRUD (Create, Read, Update, Delete) features, where each blog created can be edited or deleted as needed. Admins have full control in adding content, updating information, and deleting articles that are no longer relevant. Users can view all blogs that have been published by the admin, so they can access any information, tips, or inspiration provided. With this system, content management becomes more structured and allows for more effective delivery of information to users.",
          image: [
            "/src/assets/images/jejakkebahagiaan-blog-1.png",
            "/src/assets/images/jejakkebahagiaan-blog-2.png",
            "/src/assets/images/jejakkebahagiaan-blog-3.png",
            "/src/assets/images/jejakkebahagiaan-blog-4.png",
          ],
        },
      ],
      tools: [
        "/src/assets/images/logo-html.png",
        "/src/assets/images/logo-css.png",
        "/src/assets/images/logo-bootstrap.png",
        "/src/assets/images/logo-sql.png",
        "/src/assets/images/logo-laravel.png",
        "/src/assets/images/logo-js.png",
      ],
    },

    {
      id: 2,
      image: "/src/assets/images/mhl-1.png",
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
      image: "/src/assets/images/sawitri-1.png",
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
