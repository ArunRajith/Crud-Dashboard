import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { fetchCharts } from "../fearures/chart/chartThunk";
import { logout } from "../fearures/auth/authThunk";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { charts, status } = useSelector((state) => state.chart);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCharts());
  }, [dispatch]);

  const handleLogout = async () => {
    const res = await dispatch(logout());
    if (res.type.endsWith("fulfilled")) navigate("/login");
  };

  if (status === "loading")
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl text-gray-700 animate-pulse">Loading charts...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, <span className="text-blue-600">{user?.name}</span>
          </h1>
          <p className="text-gray-600 text-sm">
            Dashboard Overview 
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition duration-300"
        >
          Logout
        </button>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            📊 Bar Chart Overview
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="label" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🥧 Pie Chart Breakdown
          </h2>
          <div className="h-72 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={charts}
                  dataKey="value"
                  nameKey="label"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {charts.map((_, i) => (
                    <Cell
                      key={i}
                      fill={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"][i % 4]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
