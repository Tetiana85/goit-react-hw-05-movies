import { useState } from 'react';
import { getDetailsMovie } from 'Api/Api';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState({});
  const defultImages = 'https://fakeimg.pl/300x500?text=NO+IMAGE';

  const location = useLocation();

  useEffect(() => {
    const fetchDetailMovies = async () => {
      try {
        const data = await getDetailsMovie(movieId);
        // console.log(data);
        setDetailsMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetailMovies();
  }, [movieId]);

  const {
    id,
    title,
    poster_path,
    genres,
    overview,
    vote_average,
    vote_count,
    release_date,
  } = detailsMovie;

  return (
    <section className={css.section}>
      <Link to={location.state?.from ?? '/'} className={css.btnBack}>
        Go back
      </Link>
      <h1 className={css.title}>
        {title} ({new Date(release_date).getFullYear()})
      </h1>
      <div className={css.container}>
        <div className={css.cardInfomation}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : defultImages
            }
            alt="poster"
          />
          <h3>Additional information</h3>
          <span className={css.link}>
            <Link
              className={css.linkBtn}
              to={`/movies/${id}/cast`}
              state={{ from: location.state?.from } || ''}
            >
              Cast
            </Link>
            <Link
              className={css.linkBtn}
              to={`/movies/${id}/reviews`}
              state={{ from: location.state?.from } || ''}
            >
              Reviews
            </Link>
          </span>
        </div>
        <div className={css.cardInfomation}>
          <h3 className={css.titleCard}>Overview</h3>
          <p className={css.text}>{overview}</p>
          <h3 className={css.titleCard}>Genres</h3>
          <p className={css.text}>
            {genres && genres.map(el => el.name).join(' ')}
          </p>
        </div>

        <span>
          <h3 className={css.rating}> {vote_average}</h3>
          <p className={css.rating}>{vote_count} ratings</p>
        </span>
      </div>
      <Outlet />
    </section>
  );
};
export default MovieDetailsPage;
