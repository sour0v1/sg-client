import axios from "axios";

const axiosPublic = axios.create({
    baseURL : 'https://swapnashray-granthagar-server.vercel.app'
})

const useAxiosPublic = () => {
    return (
        axiosPublic
    );
};

export default useAxiosPublic;