
const Contact = () => {
  return (
    <div className=" w-[94%] m-10 flex text-slate-50 mt-8 max-sm:flex-col-reverse max-sm:w-full max-sm:items-center ">
      <div className="w-[94%] flex justify-between max-sm:flex-col">
        <section className="w-[48%] max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <h3 className="text-5xl text-orange-500 font-bold pt-10 max-sm:text-3xl max-sm:pt-2">
            CONTACT |
          </h3>
          <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </section>
        <section className="w-[44%] h-[400px] shadow-2xl shadow-zinc-950 border-zinc-950 border-[1px] rounded-lg max-sm:w-full ">
          <h3 className="text-5xl text-orange-500 font-bold pt-10 pl-8 max-sm:text-3xl">
            CONTACT FORM |
          </h3>
          <form
            action=""
            className="p-4 flex justify-center flex-col gap-5 max-sm:w-full "
          >
            <input
              type="name"
              placeholder="Your Name"
              className="border-b w-11/12  h-[35px] bg-gradient-to-r from-zinc-600 to-neutral-900 px-4 ml-4 rounded-lg border-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b w-11/12  h-[35px] bg-gradient-to-r from-zinc-600 to-neutral-900 px-4 ml-4 rounded-lg border-none"
            />
            <textarea
              placeholder="Message"
              name=""
              id=""
              className="w-11/12 bg-gradient-to-r from-zinc-600 to-neutral-900 px-4 py-2 ml-4 rounded-lg"
            ></textarea>
            <button className="w-[150px] h-10 flex items-center justify-center hover:text-orange-500 ml-4 rounded-lg bg-gradient-to-r from-zinc-600 to-neutral-900 ">
              SEND MESSAGE
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact