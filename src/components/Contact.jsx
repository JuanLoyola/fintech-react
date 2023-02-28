import React from "react";
import { useForm } from "react-form";
import Field from './UI/Field'

function Contact() {
  const {
    Form,
    meta: { isSubmitting },
  } = useForm({
    onSubmit: async (values, instance) => {
      console.log("submit: ", values);
    },
  });

  return (
    <div className="w-full pt-24 lg:pt-0 flex flex-col justify-center items-center">
      {/* main content */}
      <section className="w-full lg:max-w-5xl flex flex-col lg:flex-row lg:gap-x-7 justify-center items-center md:items-start">
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-[#1565d8] font-bold text-lg md:text-3xl uppercase"
        >
          Contact
        </h1>
        <Form
          data-aos="fade-up"
          data-aos-duration="2300"
          action=""
          className=" w-3/4 flex flex-col justify-center items-center md:items-start gap-y-5"
        >
          <span className="flex flex-col md:flex-row justify-center items-center gap-y-7 md:gap-y-0">
            <Field name={"Name"} />

            <Field name={"Email"} />

            <Field name={"Company"} />

            <Field name={"Phone"} />
          </span>
          <span className="flex flex-col md:flex-row justify-center md:justify-around items-end">
            <textarea
              className="w-full max-w-xs md:max-w-none"
              name="message"
              id="message"
              cols="60"
              rows="3"
              placeholder="Let your message here"
            ></textarea>
            <button
              type="submit"
              className="w-[16em] mt-5 md:mt-0 md:ml-3 bg-[#1565d8] text-white px-7 py-2 rounded-md"
            >
              Send
            </button>
          </span>
        </Form>
      </section>
    </div>
  );
}

export default Contact;
