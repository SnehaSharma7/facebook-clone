import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center overflow-y-scroll">
      <div className="w-full flex flex-col md:flex-row items-center justify-center overflow-y-scroll">
        {/* LEFT SECTION */}
        <div className="flex flex-col md:w-2/3 md:pr-10 sm:pb-4 sm:w-full md:border-r-2">
          <img
            src="./assets/logo.png"
            alt="Facebook"
            className="w-16 md:ml-8 mx-auto md:mt-8"
          />

          {/* Mock story visuals */}
          <div className="min-h-screen hidden md:flex flex-col">
            <div className="relative w-full">
              <img
                src="./assets/facebook-web.png"
                className="w-[70%] h-[60%] ml-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 ml-6">
              Explore the things <br />
              <span className="text-blue-600">you love.</span>
            </h1>
          </div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="w-full sm:w-[620px] md:w-[520px] mx-auto">
          <div className="bg-white p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Log in to Facebook</h2>
            <SignIn />
          </div>

          <p className="text-center text-sm text-gray-500">
            <span className="font-medium text-lg flex items-center justify-center gap-1">
              <img src="./assets/meta.png" className="w-5" /> Meta
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
