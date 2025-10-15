import "./App.css";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

function App() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Gallery />
			<Testimonial />
		</>
	);
}

export default App;
