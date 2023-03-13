import '../css/Testimonio.css'

export function Testimonio({photo, name, country, position, company, testimony}){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" alt="{name}'s potho" src={require(`../images/${photo}`)}/>

        <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio">{name} en {country}</p>
            <p className="cargo-testimonio">{position} en {company}</p>
            <p className="texto-testimonio">{testimony}</p>
        </div>

        </div>

    );
}