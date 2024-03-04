export const requestAndShowPermission = () => {
  Notification.requestPermission((status) => {
    if (status === "granted") {
      showNotification();
    }
  });
};

function showNotification() {
  let title = "Você ativou as notificações.";
  let icon = "./src/assets/bell-ring.svg";
  let body = "Você será lembrado do debate na sexta-feira!";

  let notification = new Notification(title, { body, icon });

  notification.onclick = () => {
    notification.close();
    window.parent.focus();
  };
}
