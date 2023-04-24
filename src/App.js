
import './App.css';
import Astrologers from './components/body/astrologers/Astrologers';
import Header from './components/body/header/Header';
import ProblemSection from './components/body/problemSection/ProblemSection';
import UserReview from './components/body/userReview/UserReview';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Astrologers/>
     <ProblemSection/>
      <UserReview/>
      <Footer/> 
    </div>
  );
}

export default App;
