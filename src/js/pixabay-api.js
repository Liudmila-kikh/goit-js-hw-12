import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '51783155-d60e9242c7f61df87da62484d',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    },
});

export async function getImagesByQuery(query, page, per_page = 15) {
    const response = await axios.get('', {
        params: {
            q: query,
            page: page,
            per_page: per_page,
        }
    });
    return response.data;
}