import { NavLink } from "react-router-dom";

export const Navigator = ({ id_nav, name, to, img }: any) => {
	return (
		<>
			<NavLink key={id_nav} to={to} className='xl:w-1/4 md:w-1/2 p-4'>
				<div className='bg-gray-800 bg-opacity-40 p-6 rounded-lg'>
					<img
						className='h-40 rounded w-full object-cover object-center mb-6'
						src={img}
						alt='content'
					/>
					<h3 className='tracking-widest text-purple-400 text-xs font-medium title-font'>
						SUBTITLE
					</h3>
					<h2 className='text-lg text-white font-medium title-font mb-4'>
						{name}
					</h2>
					<p className='leading-relaxed text-base'></p>
				</div>
			</NavLink>
		</>
	);
};
