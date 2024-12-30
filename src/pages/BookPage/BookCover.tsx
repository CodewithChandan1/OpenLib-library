import { api } from "../../lib/api";

interface BookCoverProps {
  coverId: number;
  title: string;
}

export function BookCover({ coverId, title }: BookCoverProps) {
  return (
    <div className="aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden">
      <img
        src={api.getCover(coverId, "L")}
        alt={`Cover of ${title}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
