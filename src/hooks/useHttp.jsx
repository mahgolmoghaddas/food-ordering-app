import { useCallback, useEffect, useState } from "react";


const sendrequest = async (url, config) => {
  const respose = await fetch(url, config);

  const resData = await respose.json();

  if (!respose.ok) {
    throw new Error(data.message || "Failed to fetch");
  }

  return resData;
};

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const clearData = () => {
    setData(initialData);
  };


  //we wrap this function with the useCallback hook to prevent 
  //the infinit loop of useEffect
  //this function will be called when the component mounts
  const sendHttpRequest = useCallback(
    async function sendHttpRequest(data) {
      setIsLoading(true);
      try {
        //here we spread the config object to add the body to the request its needed for the post request
        const responseData = await sendrequest(url, {...config, body: data});
        setData(responseData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }

      setIsLoading(false);
    },
    [url, config],
  );

useEffect(() => {
    //here we check if the method is GET then we want to send the
    //http request right away
    if(!config || config.method === "GET"){
        sendHttpRequest();
    }
   
}, [sendHttpRequest]);

  return {
    data,
    isLoading,
    error,
    sendHttpRequest,
    clearData
  };
}
