import { useState } from "react";
import NewFeedForm from "./Components/newFeedForm";

import Comment from "./Components/Comment";
import useComment from "./hooks/useComment";

function App() {
  const { createComment, comments, deleteComment } = useComment();

  return (
    <div className="bg-[#EAEAEA] w-2/5 h-[600px] flex flex-col gap-2 overflow-y-auto px-10 items-start">
      <h2 className="font-bold text-xl pt-10 pb-4">Seção de Comentários</h2>
      <NewFeedForm createComment={createComment} />
      <hr className="border-1 border-black w-full" />
      <div className="w-full">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment.commentDescription}
              email={comment.email}
              date={comment.formattedDate}
              hour={comment.formattedTime}
              onRemove={() => {
                deleteComment(comment.id);
              }}
            />
          ))
        ) : (
          <p>Seja o primeiro a comentar.</p>
        )}
      </div>
    </div>
  );
}

export default App;
