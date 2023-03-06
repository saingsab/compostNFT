import Footer from "../components/navigation/footer";
import { HeaderMenuColored } from "../components/navigation/navbar";

export default function MainLayout({ children }) {
	return (
		<div>
			<HeaderMenuColored links={[]} />
			{children}
			<Footer />
		</div>
	);
}
