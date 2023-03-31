import React from "react";
import "./VideoFooter.css";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@barbarajovem</h3>
        <p>Descrição do Vídeo</p>
        <div className="videoFooter__music">
        <AudiotrackIcon className="videoFooter__icon"/>
        <div className="videoMusicFooter__text">
        <p>Título da Música</p>
        </div>
        </div>
      </div>
      <img 
      className="videoFooter__record"
      alt="Imagem de um vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"

      />
    </div>
  );
}

export default VideoFooter;
