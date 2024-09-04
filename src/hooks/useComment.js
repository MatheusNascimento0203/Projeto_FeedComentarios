import { useState } from "react";
import getDate from "./getDate.js";
import getHour from "./getHour.js";

export default () => {
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("obc-comments-lib");
    if (!storedComments) return [];
    return JSON.parse(storedComments);
  });

  const createComment = ({ email, commentDescription }) => {
    const id = comments.length + 1;
    const currentDateTime = new Date();
    const formattedDate = getDate(currentDateTime);
    const formattedTime = getHour(currentDateTime);
    const description = {
      id,
      email,
      commentDescription,
      formattedDate,
      formattedTime,
    };

    setComments((state) => {
      const newStateAdd = [...state, description];
      localStorage.setItem("obc-comments-lib", JSON.stringify(newStateAdd));
      return newStateAdd;
    });
  };

  const deleteComment = (id) => {
    setComments((state) => {
      const newStateRemove = state.filter((comment) => comment.id !== id);
      localStorage.setItem("obc-comments-lib", JSON.stringify(newStateRemove));
      return newStateRemove;
    });
  };

  return { comments, createComment, deleteComment };
};
