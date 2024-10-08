import { NavLink } from "react-router-dom";

export const Navigation = () => {
	interface INavLinks {
		id: number;
		to: string;
		name: string;
	}

	const navLinks: INavLinks[] = [
		{ id: 0, to: "/", name: "Главная страница" },
		{
			id: 1,
			to: "/areaAndPerimeterSquare",
			name: "Площадь и периметр квадрата",
		},
		{
			id: 2,
			to: "/areaAndPerimeterRectangle",
			name: "Площадь и периметр прямоугольника",
		},
		{
			id: 3,
			to: "/areaCircleAndCircumference",
			name: "Площадь круга и длину окружности",
		},
		{
			id: 4,
			to: "/areaTriangleOnThreeSides",
			name: "Площадь треугольника по трем сторонам",
		},
	];

	return (
		<>
			<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
				{navLinks.map(link => (
					<NavLink className='mr-5 hover:text-white' to={link.to}>
						{link.name}
					</NavLink>
				))}
			</nav>
		</>
	);
};
