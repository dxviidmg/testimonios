import '../css/Testimony.css'

export function Testimony({photo, name, country, position, company, testimony}){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" alt="{name}'s potho" src={require(`../images/${photo}`)}/>

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{name}</strong> en {country}</p>
                <p className="cargo-testimonio">{position} en <strong>{company}</strong></p>
                <p className="texto-testimonio">{testimony}</p>
            </div>

        </div>

    );
}