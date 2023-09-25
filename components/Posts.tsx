import React from 'react';
import './style.css';

function Post() {
  return (
    <div className="post-1">
      {/* parte superior */}
      <div className="parte-superior">
        <div className="foto-perfil"></div>
        <div className="nome-usuario">Nome do Usuário</div>
      </div>

      {/* conteúdo */}
      <div className="conteudo">Conteúdo do post</div>

      {/* parte inferior */}
      <div className="parte-inferior">
        <div className="curtir">Curtir</div>
        <div className="coment">Comentário</div>
        <div className="compart">Compartilhar</div>
        <div className="salvar">Salvar</div>
      </div>
    </div>
  );
}

export default Post;
