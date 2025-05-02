import Container from "../../../components/shared/Container";
import SectionTitle from "../../../components/shared/SectionTitle";


const AdmissionProcess = () => {
    return (
        <div className="py-12 mb-10">
            <Container>
            <SectionTitle head={"Process of Admission"} />
            <div className=" p-6">
      <p className=" mb-4">
        Call us on <span className="font-semibold text-[#D2AB69]">+91 79807 86387</span>. 
        We would be happy to answer all your questions and clear your doubts 
        so you have a seamless experience with <span className="font-semibold">Deviprasad Mallick</span>.
      </p>
      <div className="mb-4">
        <h3 className="text-lg mb-1 text-[#9C2227] font-bold">Timings to Call:</h3>
        <ul className="list-disc list-inside">
          <li>10:00 AM - 11:59 AM</li>
          <li>5:00 PM - 7:00 PM</li>
          <li>Sunday: 7:00 PM - 9:00 PM</li>
        </ul>
      </div>
      <p className="">
        Email: <span className="text-[#D2AB69] font-medium">surertori.violin@gmail.com</span>
      </p>
    </div>
            </Container>
        </div>
    );
};

export default AdmissionProcess;