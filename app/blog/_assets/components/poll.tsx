"use client"; 
import { useState, useEffect } from "react";
import { supabaseCreateClient } from '@/libs/supabase';  // Importeer supabase-client

// Definieer een type voor de stemmen
interface Votes {
  option1: number;
  option2: number;
  option3: number;
}

const Poll = () => {
  const [votes, setVotes] = useState<Votes>({ option1: 0, option2: 0, option3: 0 });
  const [voted, setVoted] = useState(false);

  const handleVote = async (option: string) => {
    const { data, error } = await supabaseCreateClient
      .from('poll_votes')
      .insert([{ poll_id: "3ea9c66a-ee93-4f02-b770-ea86372941cf", option }]); // Vervang "123" met de juiste poll ID

    if (error) {
      console.error("Fout bij stemmen:", error);
    } else {
      console.log("Stem opgeslagen:", data);
      setVoted(true); // Zet 'voted' op true nadat iemand heeft gestemd
    }
  };

  useEffect(() => {
    const fetchVotes = async () => {
      const { data, error } = await supabaseCreateClient
        .from('poll_votes')
        .select('option');

      if (error) {
        console.error("Fout bij ophalen stemmen:", error);
      } else {
        console.log("Stem opgeslagen:", data);
        setVoted(true); // Zet 'voted' op true nadat iemand heeft gestemd
            const counts = data.reduce((acc: Votes, vote: { option: string }) => {
          // Zorg ervoor dat de juiste optie wordt toegevoegd aan de acc
          acc[vote.option as keyof Votes] = (acc[vote.option as keyof Votes] || 0) + 1;
          return acc;
        }, { option1: 0, option2: 0, option3: 0 });

        setVotes(counts);
      }
    };

    fetchVotes();
  }, []);

  return (
    <div className="border p-6 rounded-2xl shadow-md max-w-lg mx-auto bg-white">
      <h3 className="text-2xl font-bold mb-4 text-center">📊 Would you use Veld Wyser on your farm?</h3>
      <p className="text-sm text-gray-600 mb-6 text-center">Choose an opion!</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(votes).map(([option, count], index) => (
          <button
            key={option}
            className="p-4 border rounded-xl flex flex-col items-center hover:bg-gray-100 transition disabled:opacity-50"
            onClick={() => handleVote(option as "option1" | "option2" | "option3")}
            disabled={voted}
          >
            <span className="text-3xl">{["🌱", "👍", "❌"][index]}</span>
            <span className="font-semibold mt-2">{["Awesome, yes I would!", "Good, I would probably use it", "I Would probably not use it"][index]}</span>
            <span className="text-gray-500 text-sm">({count})</span>
          </button>
        ))}
      </div>

      {voted && <p className="mt-4 text-center text-green-600">Thank you for voting! 🎉</p>}
    </div>
  );
};

export default Poll;
