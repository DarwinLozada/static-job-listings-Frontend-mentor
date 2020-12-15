const imageRoute = "/images/";

const jobOffers = [
  {
    company: "Photosnap",
    companyLogo: `${imageRoute}photosnap.svg`,
    newJob: true,
    featured: true,
    jobTitle: "Senior Frontend Developer",
    info: {
      timeSincePosted: "1d ago",
      jobType: "Full Time",
      workModality: "USA only",
    },
    tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    company: "Manage",
    companyLogo: `${imageRoute}manage.svg`,
    newJob: true,
    featured: true,
    jobTitle: "Fullstack Developer",
    info: {
      timeSincePosted: "1d ago",
      jobType: "Part Time",
      workModality: "Remote",
    },
    tags: ["Fullstack", "Midweight", "Python", "React"],
  },

  {
    company: "Account",
    companyLogo: `${imageRoute}account.svg`,
    newJob: true,
    featured: false,
    jobTitle: "Junior Frontend Developer",
    info: {
      timeSincePosted: "2d ago",
      jobType: "Part Time",
      workModality: "USA only",
    },
    tags: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
  },
  {
    company: "MyHome",
    companyLogo: `${imageRoute}myhome.svg`,
    newJob: false,
    featured: false,
    jobTitle: "Junior Frontend Developer",
    info: {
      timeSincePosted: "5d ago",
      jobType: "Contract",
      workModality: "USA only",
    },
    tags: ["Frontend", "Junior", "CSS", "JavaScript"],
  },
  {
    company: "Loop Studios",
    companyLogo: `${imageRoute}loop-studios.svg`,
    newJob: false,
    featured: false,
    jobTitle: "Software Engineer",
    info: {
      timeSincePosted: "1w ago",
      jobType: "Full Time",
      workModality: "Worldwide",
    },
    tags: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"],
  },
  {
    company: "FaceIt",
    companyLogo: `${imageRoute}faceit.svg`,
    newJob: false,
    featured: false,
    jobTitle: "Junior Backend Developer",
    info: {
      timeSincePosted: "2w ago",
      jobType: "Full Time",
      workModality: "UK only",
    },
    tags: ["Backend", "Junior", "Ruby", "RoR"],
  },
  {
    company: "Shortly",
    companyLogo: `${imageRoute}shortly.svg`,
    newJob: false,
    featured: false,
    jobTitle: "Junior Developer",
    info: {
      timeSincePosted: "2w ago",
      jobType: "Full Time",
      workModality: "Worldwide",
    },
    tags: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
  },
  {
    company: "Insure",
    companyLogo: `${imageRoute}insure.svg`,
    newJob: false,
    featured: false,
    jobTitle: "Junior Frontend Developer",
    info: {
      timeSincePosted: "2w ago",
      jobType: "Full Time",
      workModality: "USA only",
    },
    tags: ["Frontend", "Junior", "Vue", "Javascript", "Sass"],
  },
  {
    company: "Eyecam Co.",
    companyLogo: `${imageRoute}eyecam-co.svg`,
    newJob: false,
    featured: false,
    jobTitle: "Full Stack Engineer",
    info: {
      timeSincePosted: "3w ago",
      jobType: "Full Time",
      workModality: "Worldwide",
    },
    tags: ["Fullstack", "Midweight", "Javascript", "Django", "Python"],
  },
  {
    company: "The Air Filter Company",
    companyLogo: `${imageRoute}the-air-filter-company.svg`,
    newJob: false,
    featured: false,
    jobTitle: "Front-end Dev",
    info: {
      timeSincePosted: "1mo ago",
      jobType: "Part Time",
      workModality: "Worldwide",
    },
    tags: ["Frontend", "Junior", "React", "Sass", "Javascript"],
  },
];

export default jobOffers;
