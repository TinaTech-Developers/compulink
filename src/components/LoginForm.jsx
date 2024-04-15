"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Please enter valid credentials");
        return;
      }

      router.replace("home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border ">
        {/* <h1 className="text-xl font-bold my-4 text-center"></h1> */}
        <Image
          src={"/logo.png"}
          alt="Compulink"
          height={100}
          width={200}
          className="mx-auto py-5"
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-10  w-80">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            name="email"
            className="p-2 border border-b-2 outline-none"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
            className="p-2 border border-b-2 outline-none"
          />
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2"
          >
            {loading ? "Processing.... " : "Login"}
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          {/* <Link
            className="text-sm mt-3 text-right"
            href={"/dashboard/register"}
          >
            Don't have an account? <span className="underline">Register</span>
          </Link> */}
        </form>
      </div>
    </div>
  );
}
