import { LucideBellPlus, LucideCheck } from "lucide-react";
import { useState } from "react";
import { requestAndShowPermission } from "./activatedNotifications";

export function RemindButton() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Me lembre!");
  const [buttonColor, setButtonColor] = useState("bg-slate-600");
  const [notificationIcon, setNotificationIcon] = useState(
    <LucideBellPlus className="text-white" />
  );

  const handleButtonClick = () => {
    if (!isButtonClicked) {
      requestAndShowPermission();
      setIsButtonClicked(true);
      setButtonText("Lembrete ativado!");
      setButtonColor("bg-slate-800");
      setNotificationIcon(<LucideCheck className="text-white" />);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`flex p-3 space-x-2 rounded-full focus:outline-none focus:ring focus:ring-violet-800 font-Inter ${buttonColor} transition-all duration-300`}
    >
      {notificationIcon}
      <span className="text-white">{buttonText}</span>
    </button>
  );
}
