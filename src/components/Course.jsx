import { useEffect, useState } from "react";
import SectionTitle from "./shared/SectionTitle";
import Container from "./shared/Container";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiChalkboardTeacherBold } from "react-icons/pi";

const Course = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("/course.json") // Ensure the correct path
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  console.log(course);
  return (
    <div id="course" className="py-12 mb-10">
      <div className="w-11/12 lg:w-10/12 mx-auto relative mb-12">
        <SectionTitle head={"Our Popular Courses"} />
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque
          maxime voluptate vero facere obcaecati, quia aliquam. Quos, unde
          voluptate.
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {course.map((cr) => (
            <div
              key={cr.id}
              className="rounded-2xl  transition-transform transform p-5  "
            >
              <figure className="relative overflow-hidden">
                <img
                  src={cr?.image}
                  alt={cr.title}
                  className="w-full h-50 object-cover rounded-lg hover:scale-110 hover:rotate-2 transition-all duration-300"
                />
              </figure>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{cr.title}</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 mt-2">
                    <PiChalkboardTeacherBold className="text-xl" />
                    <p className="text-gray-600 text-md font-bold mt-1">
                      {cr.instructor}
                    </p>
                  </div>
                  <span className="bg-[#D2AB69] text-white text-xs px-2 py-1 rounded-lg font-semibold">
                    {cr.level}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  {cr?.description?.slice(0, 80)}...
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-semibold text-[#D2AB69]">
                  ${cr.price}
                </span>
              </div>
              {/* <div className="mt-3 flex justify-between items-center">
                <span className="text-gray-600 text-sm">
                  ⭐ {cr.rating} / 5
                </span>
                <button className="bg-[#7D1E1F] text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Enroll Now
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Course;
