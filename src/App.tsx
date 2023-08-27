import Header from "./components/Header";
import ValueInput from "./components/ValueInput";
import ValueObjectProvider from "./context/ValueContext";
import ConvertionTypeProvider from "./context/convertionTypeContext";

function App() {
	return (
		<ConvertionTypeProvider value="distance">
			<Header />
			<ValueObjectProvider value={{ numericValue: "0", unit: "" }}>
				<ValueInput />
				<ValueInput />
			</ValueObjectProvider>
		</ConvertionTypeProvider>
	);
}

export default App;
