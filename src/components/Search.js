const Search = () => {
  return (
    <header>
      <p className="header__subtitle">Search and buy available domain names</p>
      <h2 className="header__title">Want to own an ENS domain?.</h2>
      <div className="header__search">
        <input
          type="text"
          className="header__input"
          placeholder="Find your perfect domain name here"
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