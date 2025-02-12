// eslint-disable-next-line react/prop-types
const SectionTitle = ({ head }) => {
  return (
    <div className="relative">
      <h2 className="inline-block text-4xl md:text-3xl text-[#D2AB69] font-bold after:content-[''] after:block after:h-[5px] after:w-14 after:bg-[#9C2227] after:mt-1 after:ml-14 after:clip-custom koffin">
        {head}
        <span className="sectionTitle"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
