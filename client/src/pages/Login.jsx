import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../fearures/auth/authThunk";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const isLoading = status === "loading";

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await dispatch(login(data));
    if (res.type.endsWith("fulfilled")) {
      navigate("/dashboard");
    } else {
      setError("root", {
        message: res.payload?.message || "Invalid credentials. Try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-transform duration-300 hover:scale-[1.01]"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-blue-600">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Please login to continue
        </p>

        {errors.root && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-4 border border-red-300">
            {errors.root.message}
          </div>
        )}

        <div className="mb-4">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Email"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
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
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};
