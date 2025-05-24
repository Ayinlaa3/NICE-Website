import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    regNo: "",
    email: "",
    phone: "",
    firstName: "",
    middleName: "",
    lastName: "",
    grade: "Member",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data", form);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-xl w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Join NICE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold">Reg. Number</label>
            <input
              name="regNo"
              value={form.regNo}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Member Grade</label>
            <select
              name="grade"
              value={form.grade}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
            >
              <option>Student</option>
              <option>Graduate</option>
              <option>Associate</option>
              <option>Member</option>
              <option>Fellow</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold">First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Middle Name</label>
            <input
              name="middleName"
              value={form.middleName}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Last Name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
            />
          </div>
        </div>

        <Button type="submit" className="w-full">Create Account</Button>
      </form>
    </div>
  );
};

export default Signup;
