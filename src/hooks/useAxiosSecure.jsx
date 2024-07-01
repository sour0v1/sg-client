import axios from "axios";

const axiosSecure = axios.create({
    baseURL : 'https://swapnashray-granthagar-server.vercel.app'
})

const useAxiosSecure = () => {
    return (
        axiosSecure
    );
};

export default useAxiosSecure;