"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Copy, Check, Heart } from "lucide-react";
import { motion, Variants } from "motion/react";

type Idea = {
  _id: string;
  name: string;
  email: string;
  idea: string;
  createdAt?: string;
  isLiked?: boolean;
};

export default function AdminDashboard() {
  const router = useRouter();

  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const formatDate = (date?: string) => {
    if (!date) return { date: "N/A", time: "" };

    const d = new Date(date);

    return {
      date: d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: d.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  const copyEmail = async (email: string, id: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedId(id);
      toast.success("Email copied!");
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      toast.error("Failed to copy");
    }
  };

  const toggleLike = async (id: string) => {
    const token = sessionStorage.getItem("admin_token");

    // Instant UI update
    setIdeas((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, isLiked: !item.isLiked } : item,
      ),
    );

    try {
      const res = await fetch(
        `https://urav.up.railway.app/toggleLikeIdea/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          toast.error("Session expired");
          sessionStorage.removeItem("admin_token");
          setTimeout(() => (window.location.href = "/admin"), 1200);
          return;
        }
        throw new Error(data.message || "Failed");
      }

      setIdeas((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, isLiked: data.idea.isLiked } : item,
        ),
      );
    } catch (err: any) {
      setIdeas((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, isLiked: !item.isLiked } : item,
        ),
      );

      toast.error(err.message);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("admin_token");

    if (!token) {
      toast.error("Please login first");
      setTimeout(() => router.push("/admin"), 1200);
      setLoading(false);
      return;
    }

    const fetchIdeas = async () => {
      try {
        const res = await fetch("https://urav.up.railway.app/getIdeas", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          if (res.status === 401) {
            sessionStorage.removeItem("admin_token");
            toast.error("Session expired");
            setTimeout(() => router.push("/admin"), 1200);
            return;
          }
          throw new Error(data.message);
        }

        setIdeas(data.allIdeas || []);
      } catch (err: any) {
        toast.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, [router]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06 },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl text-white font-semibold">Feedbacks</h2>
            <p className="text-neutral-400 text-sm">User submitted ideas</p>
          </div>

          {!loading && !error && (
            <div className="text-sm text-neutral-300 bg-neutral-800 px-3 py-1 rounded-lg border border-neutral-700">
              {ideas.length} Feedbacks
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center text-neutral-400">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-400">{error}</div>
        ) : ideas.length === 0 ? (
          <div className="text-center text-neutral-400">No ideas found.</div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4"
          >
            {ideas.map((item) => {
              const { date, time } = formatDate(item.createdAt);
              const isExpanded = expandedId === item._id;
              const isExpandable = item.idea.length > 120;

              return (
                <motion.div
                  key={item._id}
                  variants={card}
                  initial={{ borderColor: "#404040" }}
                  whileHover={{
                    scale: 1.01,
                    borderColor: "#630D15",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="bg-neutral-900 border border-neutral-700 rounded-2xl p-5 shadow-md transition-colors"
                  onClick={() => {
                    if (!isExpandable) return;
                    setExpandedId(isExpanded ? null : item._id);
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-white font-semibold">{item.name}</h3>

                      <div
                        className="flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="text-sm text-neutral-400">{item.email}</p>

                        <button
                          onClick={() => copyEmail(item.email, item._id)}
                          className="text-neutral-300 hover:text-white "
                          aria-label="Copy email"
                        >
                          {copiedId === item._id ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} className="cursor-pointer" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-neutral-400">{date}</div>
                      <div className="text-[11px] text-neutral-400">{time}</div>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpandable
                        ? isExpanded
                          ? "auto"
                          : "60px"
                        : "auto",
                    }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-neutral-800 rounded-xl p-4 text-neutral-300 text-sm">
                      {item.idea}
                    </div>
                  </motion.div>

                  <div className="mt-3 flex justify-end items-center">
                    <div className="flex items-center gap-4">
                      {isExpandable && (
                        <span className="text-xs text-neutral-400 cursor-pointer">
                          {isExpanded ? "Click to collapse" : "Click to expand"}
                        </span>
                      )}

                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(item._id);
                        }}
                        whileTap={{ scale: 0.6 }}
                        whileHover={{ scale: 1.2 }}
                        animate={{
                          scale: item.isLiked ? [1, 1.3, 1] : [1, 0.9, 1],
                        }}
                        transition={{ duration: 0.2 }}
                        aria-label="Like toggle"
                      >
                        <Heart
                          size={20}
                          className={`transition cursor-pointer ${
                            item.isLiked
                              ? "text-red-500 fill-red-500"
                              : "text-neutral-300"
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}
