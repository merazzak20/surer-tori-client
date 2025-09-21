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
          <Link
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="hover:text-[#D2AB69]"
          >
            <div className="flex gap-2 items-center text-2xl">
              <h1>Play Video</h1>
              <span>
                <FaPlayCircle></FaPlayCircle>{" "}
              </span>
            </div>
          </Link>
        </Container>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl relative aspect-video">
          {/* YouTube video */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/2F_U109Hy8s?si=oyCvuv_kDL-q9lco&autoplay=1&mute=1&modestbranding=1&rel=0&controls=1"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Video;
