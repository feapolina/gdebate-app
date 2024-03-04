import { getDay } from "date-fns";
import { RemindButton } from "./RemindButton.tsx";
import { useState, useEffect } from "react";
import { LucideSparkles } from "lucide-react";
import { generateNewsHeadline } from "./gemini.ts";

const sendNotification = () => {
  let title = "Hoje é dia de debate!";
  let body = "Clique na notificação para descobrir qual o tema de hoje!";

  let notification = new Notification(title, { body });

  notification.onclick = () => {
    notification.close();
    window.parent.focus();
  };
};

function calculateDaysTillFriday() {
  const date = new Date();
  const dayOfWeek = getDay(date);
  const [isNotificationSent, setIsNotificationSent] = useState(false);

  useEffect(() => {
    // verifica se já foi enviada uma notificação hoje
    const hasNotificationSentToday = localStorage.getItem(
      `hasNotificationSentToday`
    );
    if (dayOfWeek === 5 && !isNotificationSent && !hasNotificationSentToday) {
      sendNotification();
      setIsNotificationSent(true);

      // Marca que a notificação foi enviada hoje
      localStorage.setItem("hasNotificationSentToday", "true");
    }
  });

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
  const [hasTitleBeenGenerated, setHasTitleBeenGenerated] = useState(false);
  const daysTillFriday = calculateDaysTillFriday();

  useEffect(() => {
    // verifica se já foi gerada um título de debate
    const storedTitle = localStorage.getItem("generatedNewsHeadline");
    if (Number(daysTillFriday) === 0 && !hasTitleBeenGenerated) {
      if (storedTitle) {
        setNewsHeadline(storedTitle);
      } else {
        async function fetchNewsHeadline() {
          try {
            const headline = await generateNewsHeadline();
            setNewsHeadline(headline);

            // armazena o titulo no local storage
            localStorage.setItem("generatedNewsHeadline", headline);
          } catch (error) {
            console.log("Erro ao fazer o fetch da noticia: ", error);
          }
        }
        fetchNewsHeadline();
        setHasTitleBeenGenerated(true);
        // Marca que o titulo foi gerado hoje
        localStorage.setItem("hasTitleBeenGenerated", "true");
      }
    }
  }, [daysTillFriday, hasTitleBeenGenerated]);

  useEffect(() => {
    if (Number(daysTillFriday) === 0) {
      setNextDebateOrTitle("HOJE É DIA DE DEBATE!");
    } else {
      setNextDebateOrTitle("PRÓXIMO DEBATE EM:");
    }
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-10 text-white antialiased font-Inter font-semibold">
      <img src="./src/assets/dDMF.svg" alt="Logo da página" />

      <h1 className="text-4xl">{nextDebateOrTitle}</h1>

      <div className="flex bg-slate-800 w-auto h-auto p-5 justify-center items-center rounded">
        {Number(daysTillFriday) === 0 ? (
          <div>
            {newsHeadline ? (
              <div>
                <h3 className="flex text-2xl gap-2">
                  <LucideSparkles />
                  {newsHeadline}
                </h3>
              </div>
            ) : (
              <p className=" text-2xl">Carregando título da notícia...</p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-6xl">{daysTillFriday}</h2>
            <h3 className="ml-0.5">DIAS</h3>
          </div>
        )}
      </div>
      <div>
        <RemindButton />
      </div>
      <div>
        <p>Made with ❤ by Felipe Cavalcanti and Maria Clara</p>
      </div>
    </div>
  );
}
