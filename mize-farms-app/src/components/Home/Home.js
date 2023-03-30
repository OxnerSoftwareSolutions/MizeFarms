import { Box } from "@material-ui/core";
import classNames from "classnames";
import { NavBar } from "../NavBar/NavBar";
import Info from "../../Info/Info";
import Style from "./Home.css";
import Logo from "../../images/Logo.jpg";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";

export default function Home() {
  console.log("Info.miniBio:", Info.miniBio);
  console.log("Info.socials:", Info.socials);
  return (
    <>
      <NavBar />
      <img src={Logo} alt="Mize-Farms-Logo" />
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"calc(100vh - 175px)"}
        position={"relative"}
      >
          <h1>
            Welcome to Mize Farms!{" "}
            <span
              style={{
                background: Info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {Info.firstName}
            </span>
            <span className={Style.hand}>🤚</span>
          </h1>
          <h2>We provide quality home grown grass fed beef.</h2>
          <Box component={"ul"} p={"0.8rem"}>
            {Info.miniBio && Info.miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            fontSize={{ xs: "2rem", md: "2.5rem" }}
          >
            {Info.socials && Info.socials.map((social, index) => (
              <SocialIcon
                key={index}
                link={social.link}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </Box>
        </Box>
    </>
  );
}