import about from "../../assets/hero1.jpg";

const PageHeader = ({ pageTitle }) => {
  return (
    <div
      className="bg-[#551516] py-24 mb-5"
      style={{
        backgroundImage: `linear-gradient(rgba(85, 21, 22, 0.9), rgba(85, 21, 22, 0.8)), url(${about})`,
        backgroundPosition: "topnnn",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <h1
        data-aos="zoom-in"
        className="pt-16 mx-auto text-center text-5xl mutalis text-[#d2ab69] font-bold "
      >
        {pageTitle}
      </h1>
      {/* {additional ? <p className="text-center text-[#d2ab69] font-semibold mt-4">{additional}</p> : ""} */}
    </div>
  );
};

export default PageHeader;
