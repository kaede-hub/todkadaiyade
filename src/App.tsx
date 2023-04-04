import ToDoApp from "./components/ToDoApp";
function App() {
  return (
    <div className="container is-fluid">
      <ToDoApp onAdd={function (arg0: string): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
}
export default App;