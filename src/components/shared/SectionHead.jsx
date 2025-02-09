// eslint-disable-next-line react/prop-types
const SectionHead = ({ head }) => {
  return (
    <div className="relative">
      <h2 className="text-2xl md:text-3xl text-[#D2AB69] font-semibold">
        {head}
        <span className="title"></span>
      </h2>
    </div>
  );
};

export default SectionHead;
