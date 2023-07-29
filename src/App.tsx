import logo from './logo.svg';
import './App.css';
import Editor from "./components/lexical-editor/Editor";

function App() {
	return (
		<div className="App">
			<div className="editorWrapper">
				<Editor />
			</div>
		</div>
	);
}

export default App;
