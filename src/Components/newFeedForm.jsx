import { useState } from "react";

export default ({ createComment }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    createComment({ email, commentDescription: comment });
    setEmail("");
    setComment("");
  };

  return (
    <form className="flex flex-col gap-4 w-full " onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
          className="w-full h-8 border border-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => {
            return setComment(e.target.value);
          }}
          className="w-full border h-32 border-black"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full border h-8 border-black  hover:bg-gray-400"
      >
        Enviar Comentário
      </button>
    </form>
  );
};
