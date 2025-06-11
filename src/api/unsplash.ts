import axios from "axios";

const AccESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const searchImages = async (query: string) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params:{
            query,
            per_page: 20,
        },
        headers:{
            Authorization: `Client-ID ${AccESS_KEY}`
        }
    });

    return response.data.results;
}