import axios from 'axios';

export const getImage = async () => {
    try {
        const apiKey = 'igTYbpX3wY3egaRL95anvKY3L6p3c1DN';
        const { data } = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { url } = data.data.images.original;
        return url;
    } catch (error) {
        console.log(error);
    }
};