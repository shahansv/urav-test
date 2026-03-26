"use client";

import { useState } from "react";
import { toast } from "sonner";
import { addIdea } from "@/lib/api";

type IdeaFormData = {
  name: string;
  email: string;
  idea: string;
};

export function IdeaForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<IdeaFormData>({
    name: "",
    email: "",
    idea: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!formData.name || !formData.email || !formData.idea) {
      toast.error("All fields are required");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const promise = addIdea(formData);

      await toast.promise(promise, {
        loading: "Submitting idea...",
        success: "Idea submitted successfully!",
        error: (err) => err.message || "Something went wrong",
      });

      setFormData({
        name: "",
        email: "",
        idea: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-[#630D15] rounded-3xl py-12 sm:py-14 lg:py-16"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-5 sm:gap-6 px-5 sm:px-8 lg:px-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#F5F2E9]">
            Shoot your ideas...!!
          </h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-[#F5F2E9] rounded-xl px-4 py-3 text-base text-black placeholder-neutral-500 outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#630D15] transition"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-[#F5F2E9] rounded-xl px-4 py-3 text-base text-black placeholder-neutral-500 outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#630D15] transition"
          />

          <textarea
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            placeholder="Shoot..."
            rows={5}
            className="w-full bg-[#F5F2E9] rounded-xl px-4 py-3 text-base text-black placeholder-neutral-500 outline-none resize-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#630D15] transition"
          />

          <div className="flex justify-center sm:justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-black text-[#F5F2E9] font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
