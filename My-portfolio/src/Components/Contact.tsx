import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const isFormValid = () => {
    return name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name.trim() == "") {
      setNameError("Please fill in the Name field.");
    }
    if (email.trim() == "") {
      setEmailError("Please fill in the Email field.");
    }
    if (message.trim() == "") {
      setMessageError("Please fill in the Message field.");
    }
    if (isFormValid()) {
      try {
        await addDoc(collection(db, "users"), {
          name: name,
          email: email,
          message: message,
        });
        toast.success("Message sent successfully!", {
          theme: "dark",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setName("");
        setEmail("");
        setMessage("");
        // Reset error messages
        setNameError("");
        setEmailError("");
        setMessageError("");
      } catch (e) {
        console.error("Error adding document: ", e);

        toast.error("Error submitting data. Please try again.");
      }
    }
  };

  return (
    <div className=" w-[94%] m-10 flex text-slate-300 mt-8 max-sm:flex-col-reverse max-sm:w-full max-sm:items-center ">
      <div className="w-[94%] flex justify-between max-sm:flex-col">
        <section className="w-[48%] max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <h3 className="text-5xl text-orange-500 font-bold pt-10 max-sm:text-3xl max-sm:pt-2">
            CONTACT |
          </h3>
          <p className="my-8 text-xl flex flex-col gap-4">
            <span> Hey There, </span>
            <span>
              I'm super excited that you're here. You've got a burning question,
              remote job opportunities, website development gigs, an awesome
              project idea, or just want to chat ? I'm all ears! I can't wait to
              hear what's on your mind.
            </span>
            <span>
              Feel free to drop me a line using the form or reach out directly
              via
              <a
                className="text-orange-500 px-2 hover:underline cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:cosmasdaniella@gmail.com")
                }
              >
                email.
              </a>
              I aim to respond promptly and look forward to engaging in
              meaningful conversations. Let's turn ideas into reality together!
            </span>
          </p>
        </section>
        <section className="w-[44%] h-full shadow-2xl shadow-zinc-950 border-zinc-950 border-[1px] rounded-lg max-sm:w-full ">
          <h3 className="text-5xl text-orange-500 font-bold pt-10 pl-8 max-sm:text-3xl">
            CONTACT FORM |
          </h3>
          <form
            onSubmit={handleSubmit}
            action=""
            className="p-4 flex justify-center flex-col gap-5 max-sm:w-full "
          >
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="border-b w-11/12  h-[35px] bg-gradient-to-r from-zinc-600 to-neutral-900 px-4 ml-4 rounded-lg border-none"
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className=" ml-4 text-red-600">{nameError}</p>}
              <label></label>
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="border-b w-11/12  h-[35px] bg-gradient-to-r from-zinc-600 to-neutral-900 px-4 ml-4 rounded-lg border-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className=" ml-4 text-red-600">{emailError}</p>}
            </div>
            <div>
              <textarea
                placeholder="Message"
                name=""
                id=""
                className="w-11/12 bg-gradient-to-r from-zinc-600 to-neutral-900 px-4 py-2 ml-4 rounded-lg"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {messageError && (
                <p className=" ml-4 text-red-600">{messageError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-[150px] h-10 flex items-center justify-center hover:text-orange-500 ml-4 rounded-lg bg-gradient-to-r from-zinc-600 to-neutral-900 "
            >
              SEND MESSAGE
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
