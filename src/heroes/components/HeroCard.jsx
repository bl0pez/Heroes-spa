import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `https://raw.githubusercontent.com/bl0pez/Heroes-spa/master/public/assets/heroes/${id}.jpg`;

    const charactesByHero = (<p className="card-text">{ characters }</p>)

  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="card">
            <div className="row no-gutters">
            <div className="col-4">
                <img src={heroImageUrl} alt={ superhero }  className="card-img" />
            </div>
            <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>

                { (alter_ego !== characters) && charactesByHero }

                <p className="card-text">
                    <small className="text-muted">{ first_appearance }</small>
                </p>

                <Link to={`/hero/${id}`}>
                    Más...
                </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
