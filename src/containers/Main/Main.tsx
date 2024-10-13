import { Navigator } from "./Navigator/Navigator";
import circle from "/media/circle.png";
import rectangle from "/media/rectangle.png";
import square from "/media/square.png";
import triangle from "/media/triangle.png";

export const Main = () => {
	interface INavigatorLinks {
		id: number;
		img: any;
		to: string;
		name: string;
	}

	const navigatorLinks: INavigatorLinks[] = [
		{
			id: 1,
			img: square,
			to: "/areaAndPerimeterSquare",
			name: "Площадь и периметр квадрата",
		},
		{
			id: 2,
			img: rectangle,
			to: "/areaAndPerimeterRectangle",
			name: "Площадь и периметр прямоугольника",
		},
		{
			id: 3,
			img: circle,
			to: "/areaCircleAndCircumference",
			name: "Площадь круга и длину окружности",
		},
		{
			id: 4,
			img: triangle,
			to: "/areaTriangleOnThreeSides",
			name: "Площадь треугольника по трем сторонам",
		},
	];

	return (
		<>
			<section className='text-gray-400 body-font bg-gray-900'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap w-full mb-20'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-white'>
								MATH-CALCULATOR
							</h1>
							<div className='h-1 w-20 bg-purple-500 rounded'></div>
						</div>
						<p className='lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90'>
							Our math calculator is more than just a calculation tool. It turns
							your data into interactive figures, making math more
							understandable and fun!
						</p>
					</div>
					<div className='flex flex-wrap -m-4'>
						{navigatorLinks.map(nav => (
							<Navigator
								id_nav={nav.id}
								name={nav.name}
								to={nav.to}
								img={nav.img}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
