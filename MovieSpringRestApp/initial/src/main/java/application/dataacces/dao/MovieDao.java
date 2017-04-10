package application.dataacces.dao;

import java.util.List;

import application.dataacces.entity.Movie;

public interface MovieDao extends Dao<Movie, Long>{
	
	List<Movie> getAllAvailableMovies();
	
	List<Movie> getAllRentedMovies();
}
