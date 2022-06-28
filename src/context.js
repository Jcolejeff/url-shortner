import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { products_url as url } from "../utils/constants";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const fetchUrl = async (url) => {
		try {
			const response = await axios.get("");
			const singleProduct = response.data.data;
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchUrl();
	}, []);
	return (
		<AppContext.Provider value={{ openSidebar, closeSidebar, isSidebarOpen }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
const useGlobalContext = () => {
	return useContext(AppContext);
};

export default useGlobalContext;
