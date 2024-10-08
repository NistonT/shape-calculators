import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { AreaAndPerimeterRectangle } from "../AreaAndPerimeterRectangle/AreaAndPerimeterRectangle";
import { AreaAndPerimeterSquare } from "../AreaAndPerimeterSquare/AreaAndPerimeterSquare";
import { AreaCircleAndCircumference } from "../AreaCircleAndCircumference/AreaCircleAndCircumference";
import { AreaTriangleOnThreeSides } from "../AreaTriangleOnThreeSides/AreaTriangleOnThreeSides";
import { Main } from "../Main/Main";

export const Router = () => {
	interface IRouters {
		id: number;
		path: string;
		element: ReactElement;
	}

	const routers: IRouters[] = [
		{ id: 0, path: "/", element: <Main /> },
		{
			id: 1,
			path: "/areaAndPerimeterSquare",
			element: <AreaAndPerimeterSquare />,
		},
		{
			id: 2,
			path: "/areaAndPerimeterRectangle",
			element: <AreaAndPerimeterRectangle />,
		},
		{
			id: 3,
			path: "/areaCircleAndCircumference",
			element: <AreaCircleAndCircumference />,
		},
		{
			id: 4,
			path: "/areaTriangleOnThreeSides",
			element: <AreaTriangleOnThreeSides />,
		},
	];

	return (
		<>
			<div>
				<Routes>
					{routers.map(router => (
						<Route
							key={router.id}
							path={router.path}
							element={router.element}
						/>
					))}
				</Routes>
			</div>
		</>
	);
};
