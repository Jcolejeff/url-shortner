import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<Sidebar></Sidebar>
			<Nav></Nav>
			<Hero></Hero>
		</div>
	);
}

export default App;
