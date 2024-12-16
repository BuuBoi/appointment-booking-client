import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import { Check } from "lucide-react";
import Pricing from "../../components/Pricing";

export default function DoctorLanding() {
    const features = [
        "Medical brings patients to you",
        "Seamless e-prescribing experience",
        "Integrated clinical noye-taking",
    ];
  return (
    <div className="min-h-screen bg-blue-100">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="py-10 px-4">
            <h2 className="text-3xl font-semibold">Build a thriving{" "}<span className="text-4xl text-blue-600 font-bold">direct-pay</span> practice with Medical App.</h2>
            <p className="py-4 leading-8">
              Welcome to Medical App , where connecting with patients is made
              easier than ever before. Our platform streamlines the process of
              managing appointments, providing care remotely, and keeping track
              of patient records. Join us in revolutionizing the way you
              interact with your patients and providing top-notch healthcare
              services.
            </p>
            <CustomButton titile="List Your Service" />
            {features.map((feature, idx) => {
                return(
                    <div key={idx} className="flex gap-4 items-center mt-5">
                        <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-400"/>
                        <p>{feature}</p>
                    </div>
                )
            })}
          </div>
          <img
            src="/doctor.jpg"
            alt=""
            width={627}
            height={940}
            className="w-full object-cover "
          />
        </div>
      </section>
      <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto gap-2">
                <Pricing/>  
            </div>
      </section>
    </div>
  );
}
