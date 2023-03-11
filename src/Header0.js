import logo from "./logo.svg";

export function Header({ children, fnClick }) {
  return (
    <div>
      <button onClick={fnClick}>Click To Change Title Color</button>
      <br></br>
      <img src={logo} className="App-logo" alt="logo" />
      {children}

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export function HeaderTitle({ title, color }) {
  return <h1 style={{ color: color }}>{title}</h1>;
}
