package application.dataacces.dao.impl;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import application.dataacces.dao.MovieDao;
import application.dataacces.entity.Movie;

@Repository
public class MovieDaoImpl extends AbstractDao<Movie, Long> implements MovieDao {

	@Override
	public List<Movie> getAllAvailableMovies() {
		TypedQuery<Movie> query = entityManager.createQuery("SELECT m FROM Movie m WHERE isRented is false", Movie.class);
		return query.getResultList();
	}

	@Override
	public List<Movie> getAllRentedMovies() {
		TypedQuery<Movie> query = entityManager.createQuery("SELECT m FROM Movie m WHERE isRented is true ", Movie.class);
		return query.getResultList();
	}

}
