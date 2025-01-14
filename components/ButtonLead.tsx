"use client";

import React, { useState, useRef, FormEvent } from "react";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";

interface ButtonLeadProps {
  extraStyle?: string;
}

const ButtonLead: React.FC<ButtonLeadProps> = ({ extraStyle }) => {
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const [email, setEmail] = useState<string>("john.doe@example.org");
  const [name, setName] = useState<string>("John Doe");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleFocus =
    (setter: React.Dispatch<React.SetStateAction<string>>) => () => {
      setter("");
    };

  const handleBlur =
    (
      value: string,
      setter: React.Dispatch<React.SetStateAction<string>>,
      placeholder: string
    ) =>
    () => {
      if (!value) {
        setter(placeholder);
      }
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await apiClient.post("/lead", { email, name });

      toast.success("Thanks for joining the waitlist!");

      // Remove focus from inputs and reset values
      inputEmailRef.current?.blur();
      inputNameRef.current?.blur();
      setEmail("john.doe@example.org");
      setName("John Doe");
      setIsDisabled(true);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setIsDisabled(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className={`w-full max-w-xs space-y-3 ${extraStyle || ""}`}
      onSubmit={handleSubmit}
    >
      <input
        required
        type="text"
        value={name}
        ref={inputNameRef}
        autoComplete="name"
        className="input input-bordered w-full placeholder-white text-black"
        onFocus={handleFocus(setName)}
        onBlur={handleBlur(name, setName, "John Doe")}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type="email"
        value={email}
        ref={inputEmailRef}
        autoComplete="email"
        className="input input-bordered w-full placeholder-white text-black"
        onFocus={handleFocus(setEmail)}
        onBlur={handleBlur(email, setEmail, "john.doe@example.org")}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="btn btn-block text-white border-none"
        style={{ backgroundColor: "#EC6B0C" }}
        type="submit"
        disabled={isDisabled}
      >
        Join waitlist
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default ButtonLead;
