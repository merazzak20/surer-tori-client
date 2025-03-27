import Container from "./shared/Container";
import videoSrc from "../assets/video.mp4";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router";

const Video = () => {
  return (
    <div
      style={{
        position: "relative",
        maxHeight: "50vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(20, 5, 5, 0.8)", // Optional overlay
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Container>
          <Link className="hover:text-[#D2AB69]">
            <div className="flex gap-2 items-center text-2xl">
              <h1>Play Video</h1>
              <span>
                <FaPlayCircle></FaPlayCircle>{" "}
              </span>
            </div>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Video;
