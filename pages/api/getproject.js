const projectsData = [
    {
      projectHeading: "KreatePoll- Polling Website",
      projectType: "Web",
      projectImage: "/polling.jpg",
      endpoint: "kreatepoll",
      about: "It is a website that can allow you create your own poll and a local poll system can be established by this website. it consist of features like creating a poll and edit it if you want to and anyone can vote in it, the options also indicates percentage of that option that is picked by people, data is stored in a SQL database that is combined with the django framework ie a backend framework handling all user login data and all the polls, also latest polls are visible on home page, you can also filter the most polpular polls in all the polls ie a filter system is also managed in this site. Only when you are logged in then only you can create a poll and also you cannot vote twice in a single poll.",
      tech:"Html, CSS, Javascript, Django(Python), SQL",
      team:"A team of 2 members",
      role:"Frontend"
    },
    {
      projectHeading: "Ecommerce Website",
      projectType: "Web",
      projectImage: "/ecommerce.jpg",
      endpoint: "ecommerce",
      about: "Ecommerce website like amazon where we can buy items and also add it to our cart and we can also remove those items from our cart, order is also available but here only information is passed to the backend. You can only add products to the cart only after login, you can register yourself from the sign up form then you can access features like admin panel from where the owner can add there products to database, they can add prices, description and remove items if they like.Also on the home page pagination is also available where products are populated from the database which is handled by mongoDB and all the backend logic is written in and handled by NodeJS framework(Javascript).",
      tech:"Html, CSS, JavaScript, EJS, NodeJS, MongoDB",
      team:"Solo Project",
      role:"All",

    },
    {
      projectHeading: "Obstacle Avoiding Robot",
      projectType: "Iot",
      projectImage: "/robot.jpg",
      endpoint: "obstacle-avoiding-robot",
      about: "This is basically an Obstacle Avoiding Robot which works on fundamental Embedded System techniques. Obstacle Avoiding Robot is an intelligent device that can automatically sense the obstacle in front of it and avoid them by turning itself in another direction. This design allows the robot to navigate in an unknown environment by avoiding collisions, which is a primary requirement for any autonomous mobile robot. The application of the Obstacle Avoiding robot is not limited. It is one of the base for some more advance robots. Video: https://www.youtube.com/watch?v=IuPVCZulkXc",
      tech:"Arduino Uno, Motor Driver Shield, Wheels (x4), TT Gear Motor (x4), Servo Motor, HC-SR04 Ultrasonic Sensor, 18650 Li-on battery(x2), Jumper wires Sheet (for base), DC Power switch",
      team:"A team of 3 members",
      role:"Not specific role",
      link:"https://www.youtube.com/watch?v=IuPVCZulkXc"
    },
    {
      projectHeading: "Moviessaga",
      projectType: "Web",
      projectImage: "/moviessaga.PNG",
      endpoint: "moviessaga",
      about: "Movies website recommends trending and top-rated movies, as well as TV series. Users can view details such as directors, stars, and ratings, and can bookmark movies to be stored in their profile after logging in or signing up.",
      tech:"Javascript, Next JS, Redux, Tailwind CSS, MongoDB, REST-APIs",
      team:"Solo Project",
      role:"All",
      link:"https://moviessaga.vercel.app/"
    },
];

export default function getproject(req, res) {
    const slug = req.query.slug;
    const CurrentProject = projectsData.find(ele => ele.endpoint === slug)
    res.status(200).json({ ProjectName: CurrentProject })
  }
  