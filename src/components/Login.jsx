import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-indigo-400 font-bold p-2">
          OPTIMIZE YOUR SCHEDULE WITH MYTIME
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Make Every Minute Count.
        </h1>

        <button
          onClick={signInWithGoogle}
          className="bg-indigo-400 w-[200px] rounded-md font-medium my-2 mb-6 mx-auto py-3 text-black"
        >
          Sign in with Google
        </button>

        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Efficient, intuitive time management.
        </p>
      </div>
    </div>
  );
};

export default Login;
