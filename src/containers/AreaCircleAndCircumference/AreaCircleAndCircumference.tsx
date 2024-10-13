import { useHookResultAreaCircleAndCircumference } from "../../hooks/hooks";

export const AreaCircleAndCircumference = () => {
	const { radius, setRadius, resultFormula } =
		useHookResultAreaCircleAndCircumference();

	// AreaCircleAndCircumference С = 2P * R
	return (
		<>
			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row justify-center'>
					<div className=''>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Circle
						</h1>
						<div className='flex w-full md:justify-start justify-center items-end'>
							<div className='relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4'>
								<input
									onChange={event => setRadius(Number(event.target.value))}
									type='number'
									id='hero-field'
									name='hero-field'
									className='w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-purple-900 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</div>
						</div>
						<p className='text-sm mt-2 text-gray-500 mb-8 w-full'>
							result {resultFormula(radius)}
						</p>
					</div>
					<div className='w-96 h-96 bg-gray-200 border-1 border-purple-400 flex justify-center items-center overflow-hidden'>
						<div
							style={{
								width: radius,
								height: radius,
							}}
							className={`object-cover object-center bg-gray-200 border-4 border-purple-400 flex justify-center items-center transition-all rounded-full`}
						>
							<span className='text-3xl relative top-6'>
								{resultFormula(radius)}
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
