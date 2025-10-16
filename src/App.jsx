import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import CTASection from "./sections/CTASection";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";
import Footer from "./sections/Footer"

function App() {
	return (
		<>
			<Hero />
			<About />
			<Gallery />
			<Testimonial />
			<CTASection/>	
			<Contact />
			<Footer />
		</>
	);
}

export default App;
