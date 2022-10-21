import React from "react";
import { Phone, MapPin, Envelope } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:tuanvanvo2003@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };
  return (
    <div className="h-screen relative flex flex-col max-w-7xl overflow-hidden md:text-center text-left md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase text-2xl tracking-[20px] text-gray-500 pb-2">
        Contact
      </h3>
      <div className="md:static xl:absolute xl:top-32 flex flex-col md:space-y-8 space-y-5">
        <div className="flex flex-col space-y-2 text-center">
          <h4 className="md:text-4xl text-2xl font-semibold">
            I have got just what you need.{""}
          </h4>
          <h4 className="decoration-[#F7AB0A]/50 underline md:text-4xl text-2xl font-semibold text-center">
            Lets talk.
          </h4>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <Phone
            size={28}
            weight="bold"
            className="text-[#F7AB0A] animate-pulse"
          />
          <p className="md:text-2xl text-xl">+0984253413</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <Envelope
            size={28}
            weight="bold"
            className="text-[#F7AB0A] animate-pulse"
          />
          <p className="md:text-2xl text-xl">tuanvanvo2003@gmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <MapPin
            size={28}
            weight="bold"
            className="text-[#F7AB0A] animate-pulse"
          />
          <p className="md:text-2xl text-xl">
            Tran Dai Nghia street, Ngu Hoanh Son, Da Nang city.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-2"
        >
          <div className="flex gap-x-2">
            <input
              {...register("name")}
              className="inputContact"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="inputContact"
              placeholder="Email"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            className="inputContact"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            className="inputContact"
            placeholder="Message"
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
