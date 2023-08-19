import ValueInput from "./components/ValueInput";
import ValueObjectProvider from "./context/ValueContext";

function App() {
	return (
		<div>
			<ValueObjectProvider value={{ numericValue: "0", unit: "" }}>
				<ValueInput inputType="weight" />
				<ValueInput inputType="weight" />
			</ValueObjectProvider>
		</div>
	);
}

export default App;
