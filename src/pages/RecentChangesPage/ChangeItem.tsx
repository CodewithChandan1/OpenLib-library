import { Link } from "react-router-dom";
import { formatRelativeTime } from "../../utils/date";

interface Change {
  key: string;
  timestamp: string;
  title: string;
  type: string;
}

interface ChangeItemProps {
  change: Change;
}

export function ChangeItem({ change }: ChangeItemProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <Link to={change.key} className="block">
        <h3 className="font-semibold text-lg mb-2">{change.title}</h3>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{change.type}</span>
          <span>{formatRelativeTime(change.timestamp)}</span>
        </div>
      </Link>
    </div>
  );
}
