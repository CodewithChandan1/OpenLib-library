import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { BookPage } from "./pages/BookPage";
import { AuthorPage } from "./pages/AuthorPage";
import { SubjectsPage } from "./pages/SubjectsPage";
import { ReadingListsPage } from "./pages/ReadingListsPage";
import { RecentChangesPage } from "./pages/RecentChangesPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:workId" element={<BookPage />} />
            <Route path="/authors/:authorId" element={<AuthorPage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/reading-lists" element={<ReadingListsPage />} />
            <Route path="/recent" element={<RecentChangesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
