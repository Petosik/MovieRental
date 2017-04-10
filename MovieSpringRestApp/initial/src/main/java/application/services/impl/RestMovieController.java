package application.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import application.dataacces.entity.Movie;
import application.services.MovieService;

@RestController
public class RestMovieController {

	@Autowired
	MovieService movieService;

	@CrossOrigin
	@RequestMapping(value = "/allMovies", method = RequestMethod.GET, produces = "application/json")
	public List<Movie> getAllMovies() {
		return movieService.getAllMovies();
	}

	@CrossOrigin
	@RequestMapping(value = "/available", method = RequestMethod.GET, produces = "application/json")
	public List<Movie> getAllAvailableMovies() {
		return movieService.getAllAvailableMovies();
	}

	@CrossOrigin
	@RequestMapping(value = "/rented", method = RequestMethod.GET, produces = "application/json")
	public List<Movie> getAllRentedMovies() {
		return movieService.getAllRentedMovies();
	}

	@CrossOrigin
	@RequestMapping(value = "/newMovie", method = RequestMethod.POST, produces = "application/json")
	public Movie addMovie(@RequestBody Movie movie) {
		Movie resultMovie = movieService.addMovie(movie);
		return resultMovie;
		//return movieService.addMovie(movie);
	}

	@CrossOrigin
    @RequestMapping(value = "/deleteMovie", method = RequestMethod.DELETE, produces = "application/json")
    public void deleteMovie(@RequestBody Movie movie) {
        movieService.deleteMovie(movie);
    }
	
	@CrossOrigin
    @RequestMapping(value = "/updateMovie", method = RequestMethod.POST, produces = "application/json")
    public void updateMovie(@RequestBody Movie movie) {
        movieService.updateMovie(movie);
    }
	
	// TODO: Tutaj trzeba zaznaczyc ze obydwa parametry sa wymagane
	@CrossOrigin
    @RequestMapping(value = "/rentMovie", method = RequestMethod.POST, produces = "application/json")
    public void rentMovie(Movie movie, String renterPesel) {
        movieService.rentMovie(movie, renterPesel);
    }
	
	@CrossOrigin
    @RequestMapping(value = "/returnMovie", method = RequestMethod.POST, produces = "application/json")
    public void returnMovie(@RequestBody Movie movie) {
        movieService.returnMovie(movie);
    }
	
	
}