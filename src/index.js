import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
        <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="IMG_5057.jpeg" alt="George Harris" />;
}

function Intro() {
  return (
    <div>
      <h1>George Harris</h1>
      <p>National Accounts Manager and Buiness Analyst seeking my next opportunity.
        When I'm not serving my customers and growing business, I like to travel around the world.</p>
    </div>
  );
}

function SkillList() {
  return (
  <div className="skill-list">
    <Skill
      name="Domo"
      emoji="📊"
      color="cyan"
    />
    <Skill
      name="JavaScript"
      emoji="👨🏻‍💻"
      color="yellow"
    />
    <Skill
      name="Excel"
      emoji="📈"
      color="green"
    />
  </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);