interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <h2>{message}</h2>;
};

export default Notification;
