import { useState } from "react";

export default ({ addComment }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addComment({ email, comment });
    setEmail("");
    setComment("");
  };

  return (
    <form className="pl-20 flex flex-col gap-4 " onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          className="w-96 h-8 border border-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          className="w-96 border h-32 border-black"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-96 border h-8 border-black  hover:bg-gray-400"
      >
        Enviar Comentário
      </button>
    </form>
  );
};
