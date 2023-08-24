import { useEffect, useState } from "react";

export const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => { 
      setIsPending(true)
      try {
        const req = await fetch(url)
        if (!req.ok) {
          throw new Error(req.statusText)
        }
        const data = await req.json()
        setData(data)
        setIsPending(false)
        setError(null)
      }
      catch (err) {
        setIsPending(false)
        setError(err.message)
        console.log(err.message);
        
      }
    }
    
getData()
    
  }, [url])
  return {data, isPending, error}
};


