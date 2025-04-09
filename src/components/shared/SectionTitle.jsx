import { GiViolin } from "react-icons/gi";
// eslint-disable-next-line react/prop-types
const SectionTitle = ({ head }) => {
  return (
    <div className="relative">
      <h2 className="inline-block text-4xl md:text-4xl text-[#D2AB69] font-bold mutalis">
        <div className="flex gap-3 items-center">
          {head}
          <GiViolin className="mb-3 text-5xl" />
        </div>
        <span className="sectionTitle1"></span>
      </h2>
    </div>
  );
};
// after:content-[''] after:block after:h-[5px] after:w-14 after:bg-[#9C2227] after:mt-1 after:ml-14 after:clip-custom
export default SectionTitle;
