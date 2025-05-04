import { GiMusicalNotes, GiViolin } from "react-icons/gi";
import Container from "../../../components/shared/Container";
import theoryBG from "../../../assets/theory_bg.jpg";
import { useEffect, useState } from "react";

const Theory = () => {
  const [theory, setTheory] = useState();
  useEffect(() => {
    fetch("/theory.json")
      .then((res) => res.json())
      .then((data) => setTheory(data));
  }, []);
  //   console.log(theory);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(210, 171, 105, 0.3), rgba(210, 171, 105, 0.3)), url(${theoryBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // minHeight: "100vh",
      }}
      className="py-20 -mt-5 bg-[#fceed5]"
    >
      <Container>
        <div className="flex justify-center gap-4 mb-8 mt-8 text-gray-800">
          <GiMusicalNotes className="hidden lg:block text-3xl mt-2" />
          <h1 className="text-3xl font-bold mb-6">
            - Indian Music Theory: Main Note Viewpoint -
          </h1>
          <GiMusicalNotes className="hidden lg:block text-3xl mt-2" />
        </div>

        <GiViolin className="absolute top-auto right-24 opacity-15 text-[400px]" />

        {theory?.map((section, idx) => (
          <div key={idx} className="flex items-start gap-4 p-5">
            <div className="flex-shrink-0 mt-1">{section?.icon}</div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {section.title}
              </h2>
              <ol className="list-disc list-inside text-gray-800 space-y-1 pl-6">
                {section.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Theory;
