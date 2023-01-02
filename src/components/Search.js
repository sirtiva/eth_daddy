const Search = () => {
  return (
    <header>
      <p className="header__subtitle">Search and buy available domain names</p>
      <h2 className="header__title">It all begins with a domain name.</h2>
      <div className="header__search">
        <input
          type="text"
          className="header__input"
          placeholder="Find your perfect domain name"
        />
        <button
          type="button"
          className='header__button'
        >
          Search
        </button>
      </div>
    </header>
  );
}

export default Search;