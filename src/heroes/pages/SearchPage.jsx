import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0 && heroes.length === 0);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(searchText.trim().length === 0) return;

    navigate(`?q=${searchText}`);

  }

  return (
    <>
      <div
        className="row"
      >
        <div className="col-5">
          <h4>Searching</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <input
              type="submit"
              className="btn btn-outline-primary mt-3"
              value="Search"
            />

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <div
            className="alert alert-primary"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger"
            style={{ display: showError ? '' : 'none' }}
          >
            Hero not found <b>{ q }</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }


        </div>
      </div>

    </>
  )
}
