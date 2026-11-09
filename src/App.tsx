import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import People from './pages/People';
import Publications from './pages/Publications';
import OpenPositions from './pages/OpenPositions';
import OpenPositionProgram from './pages/OpenPositionProgram';
import RecruitmentTopics from './pages/RecruitmentTopics';
import Profile from './pages/Profile';
import Alumni from './pages/Alumni';
import InternshipProgram from './pages/InternshipProgram';
import Collaborators from './pages/Collaborators';
import FormerCollaborators from './pages/FormerCollaborators';
import News from './pages/News';
import NewsItem from './pages/NewsItem';
import Research from './pages/Research';
import MaterialsSystems from './pages/MaterialsSystems';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col items-center">
        <div className="w-full max-w-[1000px] flex flex-col flex-grow bg-white shadow-2xl relative">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/alumni" element={<Alumni />} />
              <Route path="/people/alumni/internships/:cohortId" element={<InternshipProgram />} />
              <Route path="/people/collaborators" element={<Collaborators />} />
              <Route path="/people/former-collaborators" element={<FormerCollaborators />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsItem />} />
              <Route path="/materials-systems" element={<MaterialsSystems />} />
              <Route path="/open-positions" element={<OpenPositions />} />
              <Route path="/open-positions/graduate-admissions" element={<OpenPositionProgram kind="graduate" />} />
              <Route path="/open-positions/winter-internship-2027" element={<OpenPositionProgram kind="internship" />} />
              <Route path="/open-positions/research-topics" element={<RecruitmentTopics />} />
              <Route path="/profile/taehun-lee" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
