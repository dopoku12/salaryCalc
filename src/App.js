import Input from "./Input";
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

        <article>
          The federal overtime provisions are contained in the
          Fair Labor Standards Act (FLSA). Unless exempt,
          employees covered by the Act must receive overtime pay
          for hours worked over 40 in a workweek at a rate not
          less than time and one-half their regular
          rates of pay.
          <a href="https://www.dol.gov/agencies/whd/overtime#:~:text=The%20federal%20overtime%20provisions%20are,their%20regular%20rates%20of%20pay." target='_blank'>
            View here</a>
        </article>
        <section>
          <Input />
        </section>
      </main>

    </div>
  );
}

export default App;
