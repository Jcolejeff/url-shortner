import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Sidebar></Sidebar>
			<Nav></Nav>
			<Hero></Hero>
			<Info></Info>
			<Footer></Footer>
		</div>
	);
}

export default App;
