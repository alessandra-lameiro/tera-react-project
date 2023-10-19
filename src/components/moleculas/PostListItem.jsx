import React from "react";

import post2 from "../../images/placeholders/post-2.jpg";

export default function PostListItem() {
  return (
    <div className="user-blog__posts-item">
      <div className="user-blog__posts-item-photo">
        <img src={post2} className="responsive" alt="" />
      </div>
      <h2 className="user-blog__posts-item-title">Você conhece o JSX?</h2>
      <div className="user-blog__posts-date">Publicado em 14/06/2022</div>
      <div className="user-blog__post-content">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </div>
    </div>
  );
}