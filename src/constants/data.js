import apartment from "../img/projects/apartment.jpg";
import office from "../img/projects/office.jpg";
import workOut from "../img/projects/work-out.jpg";
import commercial from "../img/projects/commercial.jpg";
import villa from "../img/projects/villa.jpg";
import {
  AnchorOutlined,
  DiamondOutlined,
  FormatColorFill,
  HeadsetMicOutlined,
} from "@mui/icons-material";
import images from "./images";
import person1 from "../img/personel/0001.jpg";
import person2 from "../img/personel/0002.jpg";
import person4 from "../img/personel/0004.jpg";
import person5 from "../img/personel/0005.jpg";
import person6 from "../img/personel/0006.jpg";
import person7 from "../img/personel/0007.jpg";
import person8 from "../img/personel/0008.jpg";
import person9 from "../img/personel/0009.jpg";
import person10 from "../img/personel/0010.jpg";
import person11 from "../img/personel/0011.jpg";

export const kavakData = [
  {
    id: 1,
    title: "Apartment",
    desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
    renderImage: <img className="img" src={apartment} alt={""} />,
    link: "/projects/apartment",
    projectList: [
      {
        id: 11,
        title: "Apartment",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={apartment} alt={""} />,
        link: "/projects/apartment",
      },
      {
        id: 12,
        title: "Apartment",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={apartment} alt={""} />,
        link: "/projects/apartment",
      },
      {
        id: 13,
        title: "Apartment",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={apartment} alt={""} />,
        link: "/projects/apartment",
      },
      {
        id: 14,
        title: "Apartment",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={apartment} alt={""} />,
        link: "/projects/apartment",
      },
      {
        id: 15,
        title: "Apartment",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={apartment} alt={""} />,
        link: "/projects/apartment",
      },
    ],
  },
  {
    id: 2,
    title: "Office",
    desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
    renderImage: <img className="img" src={office} alt={""} />,
    link: "/projects/office",
    projectList: [
      {
        id: 22,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/Office",
      },
      {
        id: 23,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/Office",
      },
      {
        id: 24,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/Office",
      },
      {
        id: 25,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/Office",
      },
      {
        id: 26,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/Office",
      },
    ],
  },
  {
    id: 3,
    title: "WorkOut",
    desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
    renderImage: <img className="img" src={workOut} alt={""} />,
    link: "/projects/workOut",
  },
  {
    id: 4,
    title: "Commercial",
    desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
    renderImage: <img className="img" src={commercial} alt={""} />,
    link: "/projects/commercial",
  },
  {
    id: 5,
    title: "Villa",
    desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
    renderImage: <img className="img" src={villa} alt={""} />,
    link: "/projects/villa",
  },
];

export const serviceCart = [
  {
    icon: <DiamondOutlined fontSize={"large"} />,
    title: "ARCHITECTURE",
    description: "Architecture has to do with planning and designing form",
  },
  {
    icon: <FormatColorFill fontSize={"large"} />,
    title: "INTERIOR DESIGN",
    description: "Architecture has to do with planning and designing form",
  },
  {
    icon: <AnchorOutlined fontSize={"large"} />,
    title: "FURNITURE DESIGN",
    description: "Architecture has to do with planning and designing form",
  },
  {
    icon: <HeadsetMicOutlined fontSize={"large"} />,
    title: "CONSULTING",
    description: "Architecture has to do with planning and designing form",
  },
];
export const projectsImage = [
  {
    tittle: "MOLANA BUILDING",
    image: images.molana,
  },
  { tittle: "ATAR BUILDING", image: images.atar },
  { tittle: "HAFEZ BUILDING", image: images.hafez },
];

export const ourTeamImages = [
  { image: person4, personName: "Khashayar Khamesi", job: "C.E.O" },
  { image: person10, personName: "Asma Bagheri ", job: "Design Manager" },
  { image: person5, personName: "Babak Khajeh", job: "Construction Manager" },
  { image: person9, personName: "Kasra Asgharpour ", job: "Business Manager" },
  {
    image: person7,
    personName: "Yashar Shahmansouri",
    job: "Construction Manager",
  },
  { image: person2, personName: "Ramin Mahzad", job: "Designer" },

  { image: person6, personName: "Amir Feyz", job: "3D Artist" },
  { image: person8, personName: "Melika Darvish ", job: "Designer" },
  { image: person11, personName: "Banafshe Azarli", job: "Designer" },

  { image: person1, personName: "Saba Saheli", job: "Interior Designer" },
];
