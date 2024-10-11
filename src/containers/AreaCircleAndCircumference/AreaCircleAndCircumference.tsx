import { useHookResultAreaCircleAndCircumference } from "../../hooks/hooks";

export const AreaCircleAndCircumference = () => {
	const { radius, setRadius, resultFormula } =
		useHookResultAreaCircleAndCircumference();

	// AreaCircleAndCircumference С = 2P * R
	return (
		<>
			<form action=''>
				<input
					type='text'
					onChange={event => setRadius(Number(event.target.value))}
				/>
			</form>
			<p>{resultFormula(radius)}</p>
		</>
	);
};
