package application.dataacces.dao;

import application.dataacces.entity.Movie;
import application.dataacces.entity.Renting;

public interface RentingDao extends Dao<Renting, Long> {

	public Renting getRentingByMovie(Movie movie);

}
