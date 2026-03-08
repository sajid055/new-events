"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  useRef,
  useState,
  type FormEvent,
  type HTMLInputTypeAttribute,
  type Ref,
} from "react";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  attendees?: string;
};

export default function DemoSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const attendees = formData.get("attendees")?.toString().trim() ?? "";

    const newErrors: FormErrors = {};

    if (!name || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid business email";
    }

    if (!phone || phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!attendees) {
      newErrors.attendees = "Please select number of attendees";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      nameRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      nameRef.current?.focus();
      return;
    }

    formRef.current.submit();
  };

  return (
    <section id="contact" className="relative bg-[#020b24] text-white py-20 px-6 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-500/30 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-blue-600/30 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-4 mb-8">
            <Badge text="G2" />
            <Badge text="Capterra" />
            <span className="px-4 py-2 bg-blue-900/40 border border-blue-700 rounded-full text-sm">
              Highest User Adoption 2024
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            READY TO GET <br /> STARTED?
          </h1>

          <p className="text-gray-300 max-w-xl mb-10">
            Please fill out the form and one of our event experts will get back
            to you shortly to discuss your event needs.
          </p>

          <p className="text-slate-400 text-sm tracking-[0.2em] uppercase mb-6">
            POWERING THE FUTURE OF STEM EDUCATION
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-gray-400 font-medium">
            <span>AI & Robotics Labs</span>
            <span>Coding</span>
            <span>Robotics</span>
            <span>Data Science</span>
            <span>K-12 Education</span>
            <span>Workshop</span>
            <span>Teacher Training</span>
            <span>Robotics Kits</span>
          </div>
        </motion.div>

        {/* FORM */}

        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-3xl shadow-2xl p-8 text-gray-900 w-full"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            <p className="text-sm font-medium">
              Book a Event with one of our experts
            </p>
          </div>

          <form
            ref={formRef}
            className="space-y-5"
            onSubmit={handleSubmit}
            noValidate
          >
            <Input
              name="name"
              label="Full Name"
              placeholder="John Doe"
              inputRef={nameRef}
              error={errors.name}
            />

            <Input
              name="email"
              label="Business Email"
              placeholder="name@company.com"
              type="email"
              error={errors.email}
            />

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>

              <div className="flex gap-3">
                <select className="border rounded-xl px-3 py-3 bg-white">
                  <option>India +91</option>
                  <option>US +1</option>
                </select>

                <input
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  className={`w-full border rounded-xl px-4 py-3 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
              </div>

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Expected Attendees
              </label>

              <select
                name="attendees"
                className={`w-full border rounded-xl px-4 py-3 ${
                  errors.attendees ? "border-red-500" : ""
                }`}
              >
                <option value="">Please Select</option>
                <option>10 - 50</option>
                <option>50 - 100</option>
                <option>100+</option>
              </select>

              {errors.attendees && (
                <p className="text-red-500 text-sm mt-1">{errors.attendees}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message (Optional)
              </label>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your event..."
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>
            <p className="text-xs text-gray-600">
              By submitting this form, you agree to our{" "}
              <span className="underline text-blue-600 cursor-pointer">
                terms
              </span>{" "}
              and{" "}
              <span className="underline text-blue-600 cursor-pointer">
                privacy policy
              </span>
              .
            </p>
            <button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 rounded-full hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Book Event
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

type BadgeProps = {
  text: string;
};

function Badge({ text }: BadgeProps) {
  return (
    <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">
      <div className="flex text-yellow-400">
        <Star size={14} fill="currentColor" />
        <Star size={14} fill="currentColor" />
        <Star size={14} fill="currentColor" />
        <Star size={14} fill="currentColor" />
        <Star size={14} fill="currentColor" />
      </div>
      {text}
    </div>
  );
}

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  inputRef?: Ref<HTMLInputElement>;
};

function Input({
  name,
  label,
  placeholder,
  type = "text",
  error,
  inputRef,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>

      <input
        ref={inputRef}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full border rounded-xl px-4 py-3 ${
          error ? "border-red-500" : ""
        }`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
