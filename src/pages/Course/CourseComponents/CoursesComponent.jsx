import { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import { MdVerified } from "react-icons/md";


const CoursesComponent = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('/course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <Container>
           {courses.map((course) => (
        <div key={course.id} className="flex flex-col md:flex-row gap-4 my-4 justify-between items-center bg-white rounded-xl shadow-md overflow-hidden relative">
            <div className="md:w-1/2 lg:max-h-[450px] overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-center object-cover transition-transform transform hover:scale-105 hover:rotate-2 duration-300"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <MdVerified className="absolute hidden md:block top-3 right-1 text-7xl lg:text-9xl opacity-10" />
            <div>
              <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-500 mb-1">Instructor: {course.instructor}</p>
              <p className="text-sm text-gray-500 mb-1">Level: {course.level}</p>
              <p className="text-sm text-gray-500 mb-1">Duration: {course.duration}</p>
              <p className="text-sm text-gray-500 mb-2">Rating: ⭐ {course.rating}</p>
              <p className="text-gray-700 mb-4">{course.description}</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-semibold">${course.price}</span>
            </div>
          </div>
        </div>
      ))}
        </Container>
    );
};

export default CoursesComponent;