// eslint-disable-next-line react/prop-types
const SectionTitle = ({ head }) => {
  return (
    <div className="relative">
      <h2 className="text-4xl md:text-3xl text-[#D2AB69] font-bold">
        {head}
        <span className="sectionTitle"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
