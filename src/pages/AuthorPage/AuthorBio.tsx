import { Author } from "../../types";

interface AuthorBioProps {
  author: Author;
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{author.name}</h1>
      {(author.birth_date || author.death_date) && (
        <p className="text-gray-600 mb-4">
          {author.birth_date} - {author.death_date || "Present"}
        </p>
      )}
      {author.bio && (
        <div className="prose max-w-none">
          <p className="text-gray-700">{author.bio}</p>
        </div>
      )}
    </div>
  );
}
