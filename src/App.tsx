import Header from "./components/Header";
import ValueInput from "./components/ValueInput";
import ValueObjectProvider from "./context/ValueContext";

function App() {
	return (
		<div>
			<Header convertionType="Weight" />
			<ValueObjectProvider value={{ numericValue: "0", unit: "" }}>
				<ValueInput inputType="weight" />
				<ValueInput inputType="weight" />
			</ValueObjectProvider>
		</div>
	);
}

export default App;
