import "./App.css";
import Header from "./Header";
import Experience from "./Experience";
import data from "./data";

function App() {
  const experience = data.map((exp) => {
    return <Experience city={exp.city} />;
  });

  return (
    <div className="App">
      <Header />
      {experience}
    </div>
  );
}

export default App;
