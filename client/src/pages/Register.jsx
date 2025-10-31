import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register as registerUser } from "../fearures/auth/authThunk";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const isLoading = status === "loading";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await dispatch(registerUser(data));
    if (res.type.endsWith("fulfilled")) {
      reset();
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-transform duration-300 hover:scale-[1.01]"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-green-600">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Sign up to get started
        </p>

        <div className="mb-4">
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name too short" },
            })}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Email Address"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          disabled={isLoading}
          className={`w-full py-3 mt-2 rounded-lg font-semibold text-white transition 
            ${
              isLoading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
        >
          {isLoading ? "Creating Account..." : "Register"}
        </button>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
