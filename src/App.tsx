import { getDay } from "date-fns";
import { useState, useEffect } from "react";
import { LucideSparkles, LucideHourglass } from "lucide-react";
import { generateNewsHeadline } from "./gemini.ts";
import logo from "/dDMF-logo.svg";

function calculateDaysTillFriday() {
  const date = new Date();
  const dayOfWeek = getDay(date);

  if (dayOfWeek < 5) {
    const daysTillFriday = 5 - dayOfWeek;
    return ` ${daysTillFriday}`;
  } else if (dayOfWeek === 5) {
    return "";
  } else {
    const daysTillNextFriday = 5 + (7 - dayOfWeek);
    return `${daysTillNextFriday}`;
  }
}

export function App() {
  const [newsHeadline, setNewsHeadline] = useState("");
  const [nextDebateOrTitle, setNextDebateOrTitle] = useState("");
  const daysTillFriday = calculateDaysTillFriday();

  useEffect(() => {
    // verifica se já foi gerada um título de debate
    if (Number(daysTillFriday) === 0) {
      async function fetchNewsHeadline() {
        try {
          const headline = await generateNewsHeadline();
          setNewsHeadline(headline);
        } catch (error) {
          console.log("Erro ao fazer o fetch da noticia: ", error);
        }
      }
      fetchNewsHeadline();
    }
  }, [daysTillFriday]);

  useEffect(() => {
    if (Number(daysTillFriday) === 0) {
      setNextDebateOrTitle("HOJE É DIA DE DEBATE!");
    } else {
      setNextDebateOrTitle("PRÓXIMO DEBATE EM:");
    }
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-10 text-white antialiased font-Inter font-semibold">
      <img src={logo} alt="logo" />

      <h1 className="lg:text-4xl md:text-4xl sm:text-4xl">
        {nextDebateOrTitle}
      </h1>

      <div className="flex bg-slate-800 w-auto h-auto p-5 justify-center items-center rounded">
        {Number(daysTillFriday) === 0 ? (
          <div>
            {newsHeadline ? (
              <div>
                <h3 className="flex text-2xl gap-2 justify-center items-center">
                  <LucideSparkles className="animate-pulse text-yellow-400" />
                  {newsHeadline}
                </h3>
              </div>
            ) : (
              <p className=" text-2xl">Carregando título da notícia...</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="text-6xl">{daysTillFriday}</h2>
            <h3 className="ml-0.5">DIAS</h3>
            <LucideHourglass className="animate-spin-slow " size={16} />
          </div>
        )}
      </div>
      <div></div>
      <div className="text-sm opacity-50">
        <p>Made with ❤ by Felipe Cavalcanti and Maria Clara</p>
      </div>
    </div>
  );
}
