"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    province: "",
    country: "South Africa", // Default value
    subscribe: false,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Client-side check to ensure hydration consistency
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (event.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
  
    // Validation of input
    if (!formData.firstName.trim()) {
      setError("First name is required.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.lastName.trim()) {
      setError("Last name is required.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("A valid email address is required.");
      setIsSubmitting(false);
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.province) {
      setError("Please select a province.");
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Controleer of de response een geldige JSON is
      if (response.ok) {
        router.push("/welcome");
      } else {
        // Log de body van de response als tekst voor verder onderzoek
        const textResponse = await response.text();
        console.error("Registration failed:", textResponse); // Log de tekst van de response
        setError("An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Registration failed:", err); // Log eventuele netwerk- of serverfouten
      setError("Failed to register. Please try again later.");
    }
  
    setIsSubmitting(false);
  };
  

  // Render the component as usual, but only execute client-specific logic after mounting
  if (!isClient) {
    return <div />; // Avoid hydration issues by rendering a placeholder
  }

  return (
    <main className="max-w-md mx-auto mt-16 p-8 border border-gray-300 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create an Account</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label htmlFor="firstName" className="block mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Last Name */}
        <label htmlFor="lastName" className="block mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Email */}
        <label htmlFor="email" className="block mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Password */}
        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Province Dropdown */}
        <label htmlFor="province" className="block mb-2">
          Province
        </label>
        <select
          id="province"
          name="province"
          value={formData.province}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="">Select a Province</option>
          <option value="Eastern Cape">Eastern Cape</option>
          <option value="Free State">Free State</option>
          <option value="Gauteng">Gauteng</option>
          <option value="KwaZulu-Natal">KwaZulu-Natal</option>
          <option value="Limpopo">Limpopo</option>
          <option value="Mpumalanga">Mpumalanga</option>
          <option value="North West">North West</option>
          <option value="Northern Cape">Northern Cape</option>
          <option value="Western Cape">Western Cape</option>
          <option value="Outside South Africa">Outside South Africa</option>
        </select>

        {/* Country Dropdown */}
        <label htmlFor="country" className="block mb-2">
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="South Africa">South Africa</option>
          <option value="Namibia">Namibia</option>
          <option value="Botswana">Botswana</option>
          <option value="Zimbabwe">Zimbabwe</option>
          <option value="Other">Other</option>
        </select>

        {/* Newsletter */}
        <label htmlFor="subscribe" className="flex items-center mb-4">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            className="mr-2"
          />
          Sign up for the email newsletter
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </main>
  );
};

export default RegisterPage;
