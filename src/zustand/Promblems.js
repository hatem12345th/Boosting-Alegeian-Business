import { create } from "zustand";
import toast from "react-hot-toast";


const API_URL =  "http://localhost:5000/api/posts";

export const useProductStore = create((set) => ({
	loading: false,
    createProduct: async (productData,setData,data) => {
		set({ loading: true });
		try {
			const res = await axios.post(`${API_URL}/create`, productData);
			setData([...data,res.data]);
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	getProducts: async (data,setData) => {
		set({loading:true});
		try {
			const response = await axios.get(`${API_URL}/`);
			
			setData(response.data.products);
				} catch (error) {
			set({ error: "Failed to fetch products", loading: false });
			toast.error(error.response.data.error || "Failed to fetch products");
		}
	}
	
	



}))