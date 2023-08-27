import { createContext, useContext, useState, ReactNode } from "react";

const ConvertionTypeContext = createContext<string | null>(null);
const UpdateConvertionTypeContext = createContext<React.Dispatch<
	React.SetStateAction<string>
> | null>(null);

export const useConvertionType = () => {
	const currentConvertionTypeContext = useContext(ConvertionTypeContext);
	if (!currentConvertionTypeContext) {
		throw new Error("useConvertionType has to be used within <ConvertionTypeContext.Provider>");
	}
	return currentConvertionTypeContext;
};

export const useUpdateConvertionType = () => {
	const currentUpdateConvertionTypeContext = useContext(UpdateConvertionTypeContext);
	if (!currentUpdateConvertionTypeContext) {
		throw new Error(
			"useUpdateConvertionTypeContext has to be used within <UpdateConvertionTypeContext.Provider>"
		);
	}
	return currentUpdateConvertionTypeContext;
};

interface Props {
	value: string;
	children: ReactNode;
}

export const ConvertionTypeProvider = ({ value, children }: Props) => {
	const [ConvertionType, setConvertionType] = useState(value);
	return (
		<ConvertionTypeContext.Provider value={ConvertionType}>
			<UpdateConvertionTypeContext.Provider value={setConvertionType}>
				{children}
			</UpdateConvertionTypeContext.Provider>
		</ConvertionTypeContext.Provider>
	);
};

export default ConvertionTypeProvider;
