import { getDay } from "date-fns";
import { useState, useEffect } from "react";
import { LucideSparkles, LucideLoader2 } from "lucide-react";
import { generateNewsHeadline } from "./gemini.ts";
import { Skeleton } from "./components/ui/skeleton.tsx";
import logo from "/dDMF-logo.svg";

function calculateDaysTillFriday() {
  const date = new Date();
  //const currentDayOfWeek = getDay(date);
  const currentDayOfWeek = 5;

  /* Calcula quantos dias faltam para a sexta-feira com base no dia atual */
  if (currentDayOfWeek < 5) {
    const daysUntilFriday = 5 - currentDayOfWeek;
    return ` ${daysUntilFriday}`;
  } else if (currentDayOfWeek === 5) {
    return "";
  } else {
    const daysUntilNextFriday = 5 + (7 - currentDayOfWeek);
    return `${daysUntilNextFriday}`;
  }
}

export function App() {
  const [newsHeadline, setNewsHeadline] = useState("");
  const [nextDebateOrTitle, setNextDebateOrTitle] = useState("");
  const daysUntilFriday = calculateDaysTillFriday();

  /* Faz a chamada da função caso seja sexta, e tenta fazer o fetch */
  useEffect(() => {
    if (Number(daysUntilFriday) === 0) {
      setNextDebateOrTitle("HOJE É DIA DE DEBATE!");
      async function fetchNewsHeadline() {
        try {
          const headline = await generateNewsHeadline();
          setNewsHeadline(headline);
        } catch (error) {
          console.log("Erro ao fazer o fetch da noticia: ", error);
        }
      }
      fetchNewsHeadline();
    } else {
      setNextDebateOrTitle("PRÓXIMO DEBATE EM:");
    }
  }, [daysUntilFriday]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-10 text-white antialiased font-Inter font-semibold">
      <img src={logo} alt="logo" />

      <h1 className="lg:text-4xl md:text-4xl sm:text-4xl">
        {nextDebateOrTitle}
      </h1>

      <div className="flex bg-slate-800 w-auto h-auto p-5 justify-center items-center rounded">
        {Number(daysUntilFriday) === 0 ? (
          <div>
            {newsHeadline ? (
              <div>
                <h3 className="flex text-2xl gap-2 justify-center items-center">
                  <LucideSparkles className="animate-pulse text-yellow-400" />
                  {newsHeadline}
                </h3>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Skeleton className="w-[100px] h-[10px] rounded-full" />
                <Skeleton className="w-[50px] h-[10px] rounded-full" />
                <Skeleton className="w-[200px] h-[10px] rounded-full" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="text-7xl text-rose-500">{daysUntilFriday}</h2>
            <h3 className="ml-0.5 text-xl">DIAS</h3>
            <LucideLoader2 className="animate-spin-slow " size={24} />
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
