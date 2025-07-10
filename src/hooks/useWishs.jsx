import { useEffect, useState } from "react";

export const useWishs = () => {
  const [wishs, setWishs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedWishs = localStorage.getItem("userWishs");
    console.log(savedWishs);
    if (savedWishs) {
      try {
        const parsedWishs = JSON.parse(savedWishs);
        setWishs(parsedWishs);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("userWishs", JSON.stringify(wishs));
    }
  }, [wishs]);

  return {
    wishs,
    setWishs,
    loading,
    setLoading,
  };
};
