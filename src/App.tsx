import ValueInput from "./components/ValueInput";
import ValueObjectProvider from "./ValueContext";

function App() {
	return (
		<div>
			<ValueObjectProvider value={{ numericValue: 0, unit: "m" }}>
				<ValueInput />
				<ValueInput />
			</ValueObjectProvider>
		</div>
	);
}

export default App;
