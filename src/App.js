import Input from "./Input";
import Option from "./Option";
function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Salary Calculator
        </h1>
      </header>

      <main>
        <article>
          <p>
            Pick a State the tax amount for the selected state will be added on to the calculation,
            then enter salary information

          </p>
        </article>
        <br />
        <section>
          <Option />
          <Input />
        </section>
      </main>

    </div>
  );
}

export default App;
