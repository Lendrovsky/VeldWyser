"use client";
import { useState, useEffect } from "react";
import { supabaseCreateClient } from "@/libs/supabase"; 
import { v4 as uuidv4 } from "uuid";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const POLL_ID = "3ea9c66a-ee93-4f02-b770-ea86372941cf"; 

const Poll = () => {
  const [votes, setVotes] = useState({ option1: 0, option2: 0, option3: 0 });
  const [voted, setVoted] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is mounted before performing client-side actions
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Only run this after the component has mounted

    if (typeof window !== "undefined" && window.localStorage) {
      let storedUserId = localStorage.getItem("user_id");
      if (!storedUserId) {
        storedUserId = uuidv4();
        localStorage.setItem("user_id", storedUserId);
      }
      setUserId(storedUserId);

      const fetchVotes = async () => {
        const { data, error } = await supabaseCreateClient
          .from("poll_votes")
          .select("option")
          .eq("poll_id", POLL_ID);

        if (error) {
          console.error("Error fetching votes:", error);
          return;
        }

        const counts = data.reduce((acc: any, vote: { option: string }) => {
          acc[vote.option] = (acc[vote.option] || 0) + 1;
          return acc;
        }, { option1: 0, option2: 0, option3: 0 });

        setVotes(counts);

        // Check if the user has already voted based on localStorage
        const { data: userVote } = await supabaseCreateClient
          .from("poll_votes")
          .select("id")
          .eq("poll_id", POLL_ID)
          .eq("user_id", storedUserId)
          .maybeSingle();

        if (userVote) setVoted(true);
      };

      fetchVotes();
    }
  }, [isMounted]); // Depend on isMounted so that it runs after mounting

  if (!isMounted) return null; // Return null until the component has mounted on the client

  const handleVote = async (option: string) => {
    if (voted) return; // Don't allow voting after already voted

    const { error: voteError } = await supabaseCreateClient
      .from("poll_votes")
      .insert([{ 
        poll_id: POLL_ID, 
        option,
        user_id: uuidv4()  // Random UUID for the vote (no association with user)
      }]);

    if (voteError) {
      console.error("❌ Error saving vote:", voteError);
    } else {
      setVoted(true);
    }
  };

  const chartData = [
    { name: "Awesome, yes I would!", votes: votes.option1 },
    { name: "Good, I would probably use it", votes: votes.option2 },
    { name: "I would probably not use it", votes: votes.option3 },
  ];

  return (
    <div className="border p-6 rounded-2xl shadow-md max-w-lg mx-auto bg-white">
      <h3 className="text-2xl font-bold mb-4 text-center">📊 Would you use Veld Wyser on your farm?</h3>
      <p className="text-sm text-gray-600 mb-6 text-center">Choose an option!</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(votes).map(([option, count], index) => (
          <button
            key={option}
            className="p-4 border rounded-xl flex flex-col items-center hover:bg-gray-100 transition disabled:opacity-50"
            onClick={() => handleVote(option)}
            disabled={voted}
          >
            <span className="text-3xl">{["🌱", "👍", "❌"][index]}</span>
            <span className="font-semibold mt-2">
              {["Awesome, yes I would!", "Good, I would probably use it", "I would probably not use it"][index]}
            </span>
            <span className="text-gray-500 text-sm">({count})</span>
          </button>
        ))}
      </div>

      {votes && voted && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-center">📊 Voting Results</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="votes" fill="#4F46E5" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Poll;
