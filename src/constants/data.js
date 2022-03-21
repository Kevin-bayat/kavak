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
import person1 from "../img/persons/person1.jpg";
import person2 from "../img/persons/person2.jpg";
import person3 from "../img/persons/person3.jpg";
import person4 from "../img/persons/person4.jpg";
import person5 from "../img/persons/person5.jpg";
import person6 from "../img/persons/person6.jpg";
import person7 from "../img/persons/person7.jpg";
import person8 from "../img/persons/person8.jpg";

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
        link: "/projects/apartment",
      },
      {
        id: 23,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/apartment",
      },
      {
        id: 24,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/apartment",
      },
      {
        id: 25,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/apartment",
      },
      {
        id: 26,
        title: "Office",
        desc: "Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found",
        renderImage: <img className="img" src={office} alt={""} />,
        link: "/projects/apartment",
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
  { image: person1, title: "Asmah Bageri", job: "Design Manager" },
  { image: person2, title: "Khashayar Khamesi", job: "Manager" },
  { image: person3, title: "Keyvan Bayat", job: "Web Designer" },
  { image: person4, title: "Richard Cennedy", job: "Creative Director" },
  { image: person5, title: "Donna Flowers", job: "Designer" },
  { image: person6, title: "Edwin Charles", job: "Designer" },
  { image: person7, title: "John Doe", job: "Designer" },
  { image: person8, title: "John Richmond", job: "Designer" },
];
