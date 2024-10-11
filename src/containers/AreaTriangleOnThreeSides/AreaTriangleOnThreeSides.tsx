import { useHookResultAreaTriangleOnThreeSides } from "../../hooks/hooks";

export const AreaTriangleOnThreeSides = () => {
	const { first, setFirst, second, setSecond, third, setThird, resultFormula } =
		useHookResultAreaTriangleOnThreeSides();

	// AreaTriangleOnThreeSides S = (a + b + c) / 2
	return (
		<>
			<form action=''>
				<input
					type='text'
					onChange={event => {
						setFirst(Number(event.target.value));
					}}
				/>
				<input
					type='text'
					onChange={event => {
						setSecond(Number(event.target.value));
					}}
				/>
				<input
					type='text'
					onChange={event => {
						setThird(Number(event.target.value));
					}}
				/>
			</form>
			<p>{resultFormula(first, second, third)}</p>
		</>
	);
};
