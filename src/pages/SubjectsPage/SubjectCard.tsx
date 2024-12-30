import { Link } from "react-router-dom";
import { Subject } from "../../types";
import { BookOpen } from "lucide-react";

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <Link
      to={`/subjects/${subject.name.toLowerCase()}`}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <BookOpen className="h-6 w-6 text-indigo-600" />
        <h3 className="text-xl font-semibold">{subject.name}</h3>
      </div>
      <p className="text-gray-600 mb-2">
        {subject.work_count.toLocaleString()} books
      </p>
    </Link>
  );
}
