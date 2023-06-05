function App() {
  return (
    <div>
      <button
        onClick={async () => {
          const response = await fetch("/api");
          const data = await response.json();
          console.log(data.message);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
