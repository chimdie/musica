import { FaHome } from "react-icons/fa";
import { ReactComponent as Home } from "../../assets/sidebar/Home.svg";
import { ReactComponent as musicLib } from "../../assets/sidebar/musicLib.svg";
import { ReactComponent as Radio } from "../../assets/sidebar/radio.svg";
import { ReactComponent as Video } from "../../assets/sidebar/video.svg";
import { ReactComponent as User } from "../../assets/sidebar/user.svg";
import { ReactComponent as Logout } from "../../assets/sidebar/Logout.svg";

export const sideToplinks = [
  {
    title: "Dashboard",
    url: "/",
    icon: FaHome,
  },
  {
    title: "About",
    url: "/about",
    icon: musicLib,
  },
  {
    title: "Trend",
    url: "/trend",
    icon: Radio,
  },
  {
    title: "Groups",
    url: "/groups",
    icon: Video,
  },
];

export const sideBottomlinks = [
  {
    title: "Groups",
    url: "/groups",
    icon: User,
  },
  {
    title: "Groups",
    url: "/groups",
    icon: Logout,
  },
];
