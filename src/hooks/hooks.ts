import { useState } from "react";

export const useHookResultAreaAndPerimeterSquare = () => {
	const [first, setFirst] = useState<number>(0);

	const resultFormula = (num_1: number): number => {
		return num_1 * num_1;
	};

	return { first, setFirst, resultFormula };
};

export const useHookResultAreaAndPerimeterRectangle = () => {
	const [first, setFirst] = useState<number>(0);
	const [second, setSecond] = useState<number>(0);

	const resultFormula = (num_1: number, num_2: number): number => {
		return num_1 * num_2;
	};

	return { first, second, setFirst, setSecond, resultFormula };
};
