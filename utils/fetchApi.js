import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'd507d30f22msh920251aff76b1f8p1742d8jsn177191401c74',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
    });

    return data;
}

