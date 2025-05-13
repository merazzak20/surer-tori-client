import { useRef, useState } from "react";
import image from "../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();
  const [pending, setPending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current["name"].value;
    setPending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success(`Thanks, ${name}! We’ve received your message.👍`);
          setPending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center my-10"
    >
      {/* Left side with image */}
      <div
        className="relative bg-cover bg-center w-full md:w-10/12 min-h-[450px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-[#140505]/80  flex items-center justify-center">
          <h2 className="text-white text-6xl font-bold mutalis">
            Get In Touch
          </h2>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-10/12 h-[450px] border border-[#551516] border-x-0 p-10">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Email and Name */}
          <div className="flex gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-1/2 rounded-none"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input input-bordered w-1/2 rounded-none"
              required
            />
          </div>

          {/* Date */}
          <input
            type="number"
            name="number"
            placeholder="Phone number"
            className="input input-bordered w-full rounded-none"
            required
          />

          {/* Message */}
          <textarea
            placeholder="Enter your message"
            name="message"
            className="textarea textarea-bordered w-full h-32 rounded-none"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            className={`btn bg-[#D2AB69] border-none shadow-none rounded-none w-full ${
              pending ? "disabled" : ""
            } `}
            disabled={pending}
          >
            {pending ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
// justify-center h-[500px] max-w-xl rounded-lg shadow-2xl bg-cover bg-center"

export default ContactUs;
