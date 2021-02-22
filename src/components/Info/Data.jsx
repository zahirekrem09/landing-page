import CarSvg from "../InfoImg/Img1";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-4.svg";
import Icon3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: Icon1,
  alt: "car",
  svg: <CarSvg />,
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: Icon2,
  alt: "Piggybanck",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Premium Bank",
  headline: "Creating an account is extremely easy",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: Icon3,
  alt: "car",
  primary: false,
  darkText: true,
};
