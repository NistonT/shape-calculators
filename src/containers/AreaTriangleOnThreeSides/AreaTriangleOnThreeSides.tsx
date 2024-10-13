import { useHookResultAreaTriangleOnThreeSides } from "../../hooks/hooks";

export const AreaTriangleOnThreeSides = () => {
	const { first, setFirst, second, setSecond, third, setThird, resultFormula } =
		useHookResultAreaTriangleOnThreeSides();
	// AreaTriangleOnThreeSides S = (a + b + c) / 2

	const getTrianglePoints = () => {
		const height = Math.sqrt(second * second - (first / 2) * (first / 2));
		const pointA = [first / 2, 0];
		const pointB = [0, height];
		const pointC = [first, height];
		return [pointA, pointB, pointC];
	};

	const points = getTrianglePoints();
	return (
		<>
			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row justify-center'>
					<div className=''>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Triangle
						</h1>
						<div className='flex w-full md:justify-start justify-center items-end'>
							<div className='relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4'>
								<input
									onChange={event => setFirst(Number(event.target.value))}
									type='number'
									id='hero-field'
									name='hero-field'
									className='w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-purple-900 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</div>
						</div>
						<div className='flex w-full md:justify-start justify-center items-end'>
							<div className='relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4'>
								<input
									onChange={event => setSecond(Number(event.target.value))}
									type='number'
									id='hero-field'
									name='hero-field'
									className='w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-purple-900 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</div>
						</div>
						<div className='flex w-full md:justify-start justify-center items-end'>
							<div className='relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4'>
								<input
									onChange={event => setThird(Number(event.target.value))}
									type='number'
									id='hero-field'
									name='hero-field'
									className='w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-purple-900 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</div>
						</div>
						<p className='text-sm mt-2 text-gray-500 mb-8 w-full'>
							result {resultFormula(first, second, third)}
						</p>
					</div>
					<div className='w-96 h-96 bg-gray-200 border-1 border-purple-400 flex justify-center items-center overflow-hidden relative'>
						<svg
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
							viewBox='0 0 100 100'
						>
							<polygon
								points={points
									.map(point => `${point[0]},${point[1]}`)
									.join(" ")}
								fill='#c084fc'
							/>
						</svg>
					</div>
				</div>
			</section>
		</>
	);
};
