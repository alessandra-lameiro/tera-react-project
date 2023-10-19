import React from "react";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";

export default function PostForm() {
  // Como criar campos controlados no react -> ponto 1: criar o estado
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [isLoading, setIsloading] = React.useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsloading(true);

    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users/1/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      setTitle("");
      setContent("");
      setIsloading(false);
    });
  };

  console.log("title", title);
  console.log("content", content);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="create-post">
        <h1>Criar</h1>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
            {/* ponto 2: no campo que vc quer controlar, criar (no caso o input), criar o value referenciando o estado que a gnt criou. Ponto 3: criar o método onchange no campo (que sempre retorna uma função) pra fazer com que o novo valor so estado seja o atualizado do onchange */}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="name"
              name="title"
            />
          </div>
          <div className="create-post__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="content"
              id="content"
            ></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
