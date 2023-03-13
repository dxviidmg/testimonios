import '../css/Testimonio.css'

export function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" alt="Foto de emma" src={require("../images/testimonio-emma.png")}/>

        <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio">Emma Bostian en Suecia</p>
            <p className="nombre-testimonio">Ingerniera de Software en Spotify</p>
            <p className="cargo-testimonio">fasd asdf asdf asdf asdf asdf sdf sdf sdf sdf sdf fasd asdf asdf asdf asdf asdf sdf sdf sdf sdf sdf fasd asdf asdf asdf asdf asdf sdf sdf sdf sdf sdf fasd asdf asdf asdf asdf asdf sdf sdf sdf sdf sdf</p>
        </div>

        </div>

    );
}