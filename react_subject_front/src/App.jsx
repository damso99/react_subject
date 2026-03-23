import styles from "./App.module.css";
import SubjectList from "./content/SubjectList";

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1>강의 목록</h1>
      </header>
      <SubjectList />
    </div>
  );
}

export default App;
