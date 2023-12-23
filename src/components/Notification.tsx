import { Notification } from "react-rainbow-components";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

type AlertProps = {
  title?: string;
  description?: string;
  icon?: string;
  onRequestClose?: () => void;
  hideCloseButton: boolean;
};

export const Alert: React.FC<AlertProps> = ({
  title,
  description,
  icon,
  onRequestClose,
  hideCloseButton,
}) => {
  return (
    <Notification
      title={title}
      description={description}
      icon={icon}
      onRequestClose={onRequestClose}
      hideCloseButton={hideCloseButton}
    />
  );
};

type AnnouncementProps = {
  onClick?: () => void;
  to: string;
  title: string;
  description?: string;
};

export const Announcement: React.FC<AnnouncementProps> = ({
  onClick,
  to,
  title,
  description,
}) => {
  return (
    <Draggable>
      <div className="absolute right-0 xs:inset-x-0 flex items-center justify-between gap-4 bg-teal-600 px-4 py-3 text-white z-50">
        <p className="text-sm font-medium">
          {title}
          <Link to={to} className="inline-block underline">
            {description}
          </Link>
        </p>

        <button
          aria-label="Dismiss"
          className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </Draggable>
  );
};

type greetingProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

export const Greeting: React.FC<greetingProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-gray-100 py-2 px-4 text-teal-600">
      <p className="text-xs font-medium">
        {title} <span className="inline-block underline">{description}</span>
      </p>

      <button
        className="flex items-center rounded border border-teal-600 px-4 py-2 text-teal-600 hover:bg-teal-600 hover:text-white focus:outline-none focus:ring-none active:bg-teal-500"
        onClick={onClick}
      >
        <span className="text-xs font-medium">Accept</span>
      </button>
    </div>
  );
};
