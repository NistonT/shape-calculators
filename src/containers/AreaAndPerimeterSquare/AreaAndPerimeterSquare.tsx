import { useHookResultAreaAndPerimeterSquare } from "../../hooks/hooks";

export const AreaAndPerimeterSquare = () => {
	const { first, setFirst, resultFormula } =
		useHookResultAreaAndPerimeterSquare();

	// AreaAndPerimeterSquare S = a * a
	return (
		<>
			<form action=''>
				<input
					type='text'
					onChange={event => setFirst(Number(event.target.value))}
				/>
			</form>
			<p>{resultFormula(first)}</p>
		</>
	);
};
