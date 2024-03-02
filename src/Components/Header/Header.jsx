import "./Header.css";
export const Header = () => {
  return (
    <header className="Header">
      <div className="Container" >
        <img
          className="Logo"
          src="https://wwe.cinecalidad.gg/wp-content/themes/Cinecalidad/assets/img/logo.svg?v=1aaaaaa.0"
        />
        <div className="Navegation">
          <input
            type="searchBar"
            className="SearchBar"
            placeholder="Buscar Película"
          ></input>
          <button className="Buscar" type="Submit">
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
};
