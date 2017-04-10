package application.services.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import application.dataacces.dao.MovieDao;
import application.dataacces.dao.RentingDao;
import application.dataacces.entity.Movie;
import application.dataacces.entity.Renting;
import application.services.MovieService;

@Service
@Transactional
public class MovieServiceImpl implements MovieService {

	@Autowired
	MovieDao movieDao;

	@Autowired
	RentingDao rentingDao;

	@Override
	public List<Movie> getAllMovies() {
		return movieDao.findAll();
	}

	@Override
	public List<Movie> getAllAvailableMovies() {
		return movieDao.getAllAvailableMovies();
	}

	@Override
	public List<Movie> getAllRentedMovies() {
		return movieDao.getAllRentedMovies();
	}

	@Override
	public Movie addMovie(Movie movie) {
		return movieDao.save(movie);
	}

	@Override
	public void deleteMovie(Movie movie) {
		movieDao.delete(movie);
	}

	@Override
	public Movie updateMovie(Movie movie) {
		return movieDao.update(movie);
	}

	@Override
	public void rentMovie(Movie movie, String renterPesel) {
		Date dateNow = new Date();
		Renting movieRenting = new Renting(renterPesel, dateNow, movie);
		movie.setAvaliable(false);

		rentingDao.save(movieRenting);
		movieDao.update(movie);
	}

	@Override
	public void returnMovie(Movie movie) {
		Date dateNow = new Date();
		Renting movieRenting = rentingDao.getRentingByMovie(movie);
		movie.setAvaliable(true);
		movieRenting.setReturningDate(dateNow);

		rentingDao.update(movieRenting);
		movieDao.update(movie);
	}

}
