import { createContext, useContext, useState, ReactNode } from "react";

interface valueObjectTemplate {
	numericValue: string;
	unit: string;
}

const ValueObjectContext = createContext<valueObjectTemplate | null>(null);
const UpdateValueObjectContext = createContext<React.Dispatch<
	React.SetStateAction<valueObjectTemplate>
> | null>(null);

export const useValueObject = () => {
	const currentValueObjectContext = useContext(ValueObjectContext);
	if (!currentValueObjectContext) {
		throw new Error("useValueObject has to be used within <ValueObjectContext.Provider>");
	}
	return currentValueObjectContext;
};

export const useUpdateValueObject = () => {
	const currentUpdateValueObjectContext = useContext(UpdateValueObjectContext);
	if (!currentUpdateValueObjectContext) {
		throw new Error(
			"useUpdateValueObjectContext has to be used within <UpdateValueObjectContext.Provider>"
		);
	}
	return currentUpdateValueObjectContext;
};

interface Props {
	value: valueObjectTemplate;
	children: ReactNode;
}

export const ValueObjectProvider = ({ value, children }: Props) => {
	const [valueObject, setValueObject] = useState(value);
	return (
		<ValueObjectContext.Provider value={valueObject}>
			<UpdateValueObjectContext.Provider value={setValueObject}>
				{children}
			</UpdateValueObjectContext.Provider>
		</ValueObjectContext.Provider>
	);
};

export default ValueObjectProvider;
