import { GiMusicalNotes, GiViolin } from "react-icons/gi";
import Container from "../../../components/shared/Container";
import theoryBG from "../../../assets/theory_bg.jpg";

const theorySections = [
  {
    title: " 1.The Main Note is 'Sa' (सा / ਸਾ / స / சா)",
    description: [
      "In Indian classical music, Sa is the primary, foundational note.",
      "It is similar to the Western music's 'Do' in 'Do-Re-Mi' (solfège), but even more important.",
      "Sa is constant — it does not change (no sharp or flat versions).",
    ],
  },
  {
    title: "2. The Full Basic Scale (Saptak)",
    description: [
      "The seven basic notes are: Sa, Re, Ga, Ma, Pa, Dha, Ni (like Do, Re, Mi, Fa, So, La, Ti).",
      "This group of seven notes is called the Saptak (meaning 'seven').",
    ],
  },
  {
    title: "3. Sa is the Tonic — the Reference for Everything",
    description: [
      "Every other note's tuning depends on Sa.",
      "Sa is usually tuned exactly to the artist’s vocal range or instrument's tuning.",
      "On the violin (or sitar, bansuri, etc.), you tune Sa carefully — it’s your home base.",
    ],
  },
  {
    title: "4. Shruti (Microtones)",
    description: [
      "Indian music recognizes 22 Shrutis (microtones) within an octave.",
      "Sa itself is fixed, but other notes (like Re, Ga) can be slightly higher or lower based on the raga (melodic framework).",
      "This gives Indian music its very rich, flexible sound.",
    ],
  },
  {
    title: "5. Two Main Systems",
    description: [
      "Hindustani music (North India).",
      "Carnatic music (South India).",
      "Both systems revolve around Sa but differ in style, ornamentation, and theory depth.",
    ],
  },
  {
    title: "6. Raga System",
    description: [
      "In Indian music, instead of 'key' or 'scale', we use ragas.",
      "A raga defines: -Which notes (and which versions) are used. -How the notes move (ascending, descending). -Emotional flavor (happy, romantic, sad, devotional, etc).",
      "Sa is always at the center of the raga structure.",
    ],
  },
  {
    title: "7. Drone and Sa",
    description: [
      "Instruments like tanpura constantly play Sa (and Pa or Ma) in the background.",
      "The constant drone helps musicians stay in tune and centered emotionally.",
    ],
  },
];

const Theory = () => {
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

        {theorySections.map((section, idx) => (
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
