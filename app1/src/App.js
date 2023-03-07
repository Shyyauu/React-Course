function App() {
    const styleComponent = {
    backgroundColor: 'gray'
    }
    
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={styleComponent}
      />
    </div>
  );   
}

export default App;