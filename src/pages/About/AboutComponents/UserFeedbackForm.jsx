import { useState } from "react";
import Container from "../../../components/shared/Container";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_BB_HOSTING_KEY;
const image_upload_key = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UserFeedbackForm = () => {
  const axiosPublic = useAxiosPublic();
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({ name: "", title: "", review: "" });
  const { name, title, review } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    const form = e.target;
    const rating = form["rating-2"].value;
    const imageFile = form.image.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const { data } = await axiosPublic.post(image_upload_key, formData);
      const imageUrl = data.data.url;
      const feedInfo = {
        name,
        title,
        review,
        star: rating,
        image: imageUrl,
      };
      await axiosPublic.post("/feedback", feedInfo);
      setFormData({ name: "", title: "", review: "" });
      form.reset();
      toast.success("Your feedback successfully submited!❤️");
      setPending(false);
      // console.log(feedInfo);
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <div>
      <Container>
        <SectionTitle head={"User Valuable Feedback"}></SectionTitle>
        <div className="my-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left Column */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
                  required
                />
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-lg font-medium ">
                  Designation with Organization
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  value={formData.title}
                  placeholder="Student, Surer Tori"
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none "
                  required
                />
              </div>

              {/* Review */}
              <div>
                <label htmlFor="review" className="block text-lg font-medium">
                  Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  placeholder="Enter your feedback"
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                  value={formData.review}
                  className="w-full px-4 py-2 border border-gray-300 rounded-none  focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Image */}
              <div>
                <label className="block font-medium mb-2" htmlFor="image">
                  Image
                </label>
                <input
                  type="file"
                  id="profileImage"
                  name="image"
                  accept="image/*"
                  className="file-input text-zinc-700 file-input-bordered w-full rounded-none"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-lg font-medium">Rating</label>
                <div className="flex items-center space-x-2">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      value="1"
                      className="mask mask-star-2 bg-[#9C2227]"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      value="2"
                      className="mask mask-star-2 bg-[#9C2227]"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      value="3"
                      className="mask mask-star-2 bg-[#9C2227]"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      value="4"
                      className="mask mask-star-2 bg-[#9C2227]"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      value="5"
                      className="mask mask-star-2 bg-[#9C2227]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className={`w-full px-6 cursor-pointer py-3 font-semibold text-zinc-800 bg-[#d2ab69] focus:bg-[#a0804a] rounded-none border-none hover:bg-[#b09970] focus:outline-none ${
                    pending ? "disabled" : ""
                  }`}
                  disabled={pending}
                >
                  {pending ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    "Submit Review"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UserFeedbackForm;
