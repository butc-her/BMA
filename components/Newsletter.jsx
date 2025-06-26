"use client";

import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus(result.error || "Something went wrong");
        return;
      }

      setStatus("✅ Successfully subscribed!");
      setEmail(""); // clear the input
    } catch (err) {
      console.error("❌ Network error:", err);
      setStatus("❌ Network or server error.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-120">
      <div className="max-w-screen-2xl mx-auto px-4 lg:p-10 flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-[2.5rem] lg:text-[3.125rem]">Subscribe to our Newsletter</h2>
          <p className="sm:text-[1.25rem] md:text-[1.5rem]">Stay updated with the latest news and offers</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-[70px] flex items-center justify-between p-2 mt-10 lg:w-[600px]">
          <input
            type="email"
            name="user-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="py-3 px-6 w-full rounded-full border"
          />
          <button type="submit" className="bg-[#ff6f00] text-white rounded-[100px] h-full py-3 px-6 hover:bg-[#ff7f00]">
            Subscribe
          </button>
        </form>
        {status && <p className="mt-4 text-gray-600">{status}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
