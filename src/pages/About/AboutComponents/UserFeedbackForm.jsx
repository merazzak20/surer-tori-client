import { useState } from "react";
import Container from "../../../components/shared/Container";
import SectionTitle from "../../../components/shared/SectionTitle";

const UserFeedbackForm = () => {
  const [formData, setFormData] = useState({ name: "", title: "", review: "" });
  const { name, title, review } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form["rating-2"].value;
    const img = form.image.value;
    console.log(name, title, review, rating, img);
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
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-zinc-700"
                >
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
                  className="w-full px-4 py-2 border text-zinc-700 border-gray-300 rounded-none focus:outline-none"
                  required
                />
              </div>

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-lg font-medium text-zinc-700"
                >
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
                <label
                  htmlFor="review"
                  className="block text-lg font-medium text-zinc-700"
                >
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-none text-zinc-700 focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Image */}
              <div>
                <label
                  className="block font-medium mb-2 text-zinc-700"
                  htmlFor="image"
                >
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
                <label className="block text-lg font-medium text-zinc-700">
                  Rating
                </label>
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
                  className="w-full px-6 py-3 font-semibold text-zinc-800 bg-[#d2ab69] focus:bg-[#a0804a] rounded-none hover:bg-[#b09970] focus:outline-none"
                >
                  Submit Review
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
