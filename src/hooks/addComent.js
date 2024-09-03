import { useState } from "react";
import getDate from "./getDate";
import getHour from "./getHour";

export default () => {
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("obc-comments-lib");
    if (!storedComments) return [];
    return JSON.parse(storedComments);
  });

  const createComent = ({ email, description }) => {
    const id = Math.floor(Math.random() * 1000000);
    const currentDateTime = new Date();
    const formattedDate = getDate(currentDateTime);
    const formattedTime = getHour(currentDateTime);
    const comment = { id, email, description, formattedDate, formattedTime };
    setComments((state) => {
      const newStateAdd = [...state, comment];
      localStorage.setItem("obc-comments-lib", JSON.stringify(newStateAdd));
    });
  };

  return { comments, createComent };
};
