import nodemailer from "nodemailer";
import supabase from "@/lib/supabase";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required." }), { status: 400 });
  }

  // Check if the email already exists
  const { data: existing, error: lookupError } = await supabase
    .from("subscriber")
    .select("email")
    .eq("email", email)
    .single();

  if (existing) {
    return new Response(JSON.stringify({ message: "You are already subscribed." }), { status: 409 });
  }

  // Insert the new subscriber
  const { error: insertError } = await supabase
    .from("subscribers")
    .insert([{ email }]);

  if (insertError) {
    console.error("❌ Supabase insert error:", insertError);
    return new Response(JSON.stringify({ error: "Database insert failed." }), { status: 500 });
  }

  // Send email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: {
      name: "AfriChild News",
      address: process.env.MAIL_USER,
    },
    to: process.env.MAIL_USER,
    subject: "New Subscriber Alert!",
    text: `A new subscriber has joined: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Successfully subscribed." }), { status: 200 });
  } catch (err) {
    console.error("❌ Email send error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
}
