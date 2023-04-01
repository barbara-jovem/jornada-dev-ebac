import "./App.css";
import Video from "./pages/video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Barbara"
          descriptions="Frajola goleiro"
          music="musica epica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
        />
        <Video
          likes={444}
          messages={555}
          shares={666}
          name="Guilherme"
          descriptions="Gato chapado"
          music="clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
