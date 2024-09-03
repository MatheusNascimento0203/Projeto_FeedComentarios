import { useState } from "react";
import NewFeedForm from "./Components/newFeedForm";

function App() {
  return (
    <div className="bg-[#EAEAEA] w-2/5 h-96 flex flex-col">
      <h2 className="font-bold text-xl pl-20 pt-10 pb-4">
        Seção de Comentários
      </h2>
      <NewFeedForm />
      <hr />
    </div>
  );
}

export default App;
