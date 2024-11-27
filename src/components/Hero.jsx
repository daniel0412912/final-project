import { Link } from "react-router-dom";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center align-center bg-white">
      <div>
        <div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/react-native-programmer-illustration-download-in-svg-png-gif-file-formats--logo-api-code-javascript-pack-design-development-illustrations-6109661.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Daniel!</h1>
          <p className="text-2xl font-light">
            <span>Information Technology Student</span> |{" "}
            <span>Business Administration Graduate</span>
          </p>
        </div>
        <div className="w-full flex justify-between gap-4 mb-8">
          <a
            href="https://www.torontomu.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold py-3 hover:text-yellow-500 tmu"
          >
            Toronto Metropolitan University
          </a>
          <a
            href="https://www.senecapolytechnic.ca/home.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 text-lg font-semibold py-3 hover:text-gray-800"
          >
            Seneca College
          </a>
        </div>
        <div className="flex justify-center">
          <Button>
            <Link to="about">MY RESUME</Link>
          </Button>
        </div>
        <div className="absolute bottom-10 animate-bounce left-[15%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="absolute bottom-10 animate-bounce right-[15%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
