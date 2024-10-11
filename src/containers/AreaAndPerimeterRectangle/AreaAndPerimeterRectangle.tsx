import { useHookResultAreaAndPerimeterRectangle } from "../../hooks/hooks";

export const AreaAndPerimeterRectangle = () => {
	const { first, second, setFirst, setSecond, resultFormula } =
		useHookResultAreaAndPerimeterRectangle();

	// AreaAndPerimeterRectangle S = a * b
	return (
		<>
			<form action=''>
				<input
					type='text'
					onChange={event => setFirst(Number(event.target.value))}
				/>
				<input
					type='text'
					onChange={event => setSecond(Number(event.target.value))}
				/>
			</form>
			<p>{resultFormula(first, second)}</p>
		</>
	);
};
