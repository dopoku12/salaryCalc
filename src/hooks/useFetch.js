import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = () => {
    const apiKey = process.env.API_KEY
    useEffect(() => {
        return async () => {
            let data = await axios.post(
                `https://api.api-ninjas.com/v1/salestax?zip_code=` + 20759,
                {
                    headers: { 'API-KEY': apiKey }
                }
            )
            console.log(data);
        }

    }, [])
    return
}

export default useFetch;