package application.services;

import java.util.List;

import application.dataacces.entity.Movie;

public interface MovieService {

	public List<Movie> getAllMovies();

	public List<Movie> getAllAvailableMovies();

	public List<Movie> getAllRentedMovies();
	
	public Movie addMovie(Movie movie);
	
	public void deleteMovie(Movie movie);
	
	public Movie updateMovie(Movie movie);
	
	public void rentMovie(Movie movie, String renterPesel);
	
	public void returnMovie(Movie movie);
	
}
