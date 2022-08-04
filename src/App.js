import Form from "./Form";
import Output from "./Output";

function App() {
  return (
    <div className="App">

      <header>
        <h1>
          Salary Calculator
        </h1>
      </header>
      <main>
        <section>
          <p>
            Pick a State the tax amount for the selected state will be added on to the calculation,
            then enter salary information

          </p>
        </section>
        <br />

        <Form />
        <Output />
      </main>
    </div>
  );
}

export default App;
