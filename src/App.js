import logo from './logo.svg';
import './App.css';
import Display from "./components/StudentsTable";
import DisplayHouseCards from "./components/DisplayHouseCards";
import Header from "./components/Header";

function App() {

  return (
    <>
      <header className="App-header">
    <Header/>

      </header>
        <main className='App-main'>
            <section className='SectionHouses'>
                <DisplayHouseCards/>
            </section>
            <section className='SectionTable'>
                <Display/>
            </section>
        </main>
    </>
  );
}

export default App;
