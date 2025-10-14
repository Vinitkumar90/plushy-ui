
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4  ">
      <h1 className="text-5xl font-bold mb-6 text-slate-300">
        Welcome to Plushy find-matches
      </h1>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl">
        Lets get u rolling
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          
        >
          <button
              className="btn btn-outline btn-primary mt-4"
            >
               lets gooo
            </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
