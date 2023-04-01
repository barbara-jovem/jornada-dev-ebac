import React from "react";
import "./VideoFooter.css";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

function VideoFooter({ name, descriptions, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{name}</h3>
        <p>{descriptions}</p>
        <div className="videoFooter__music">
          <AudiotrackIcon className="videoFooter__icon" />
          <div className="videoMusicFooter__text">
            <p>{music}</p>
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
