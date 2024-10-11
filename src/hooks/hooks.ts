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

export const useHookResultAreaCircleAndCircumference = () => {
	const [radius, setRadius] = useState<number>(0);

	const resultFormula = (radius: number): number => {
		return 2 * Math.PI * radius;
	};

	return { radius, setRadius, resultFormula };
};

export const useHookResultAreaTriangleOnThreeSides = () => {
	const [first, setFirst] = useState<number>(0);
	const [second, setSecond] = useState<number>(0);
	const [third, setThird] = useState<number>(0);

	const resultFormula = (first: number, second: number, third: number) => {
		return (first + second + third) / 2;
	};

	return { first, setFirst, second, setSecond, third, setThird, resultFormula };
};
