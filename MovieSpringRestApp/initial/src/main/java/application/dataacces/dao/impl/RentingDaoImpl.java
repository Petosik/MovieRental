package application.dataacces.dao.impl;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import application.dataacces.dao.RentingDao;
import application.dataacces.entity.Movie;
import application.dataacces.entity.Renting;

@Repository
public class RentingDaoImpl extends AbstractDao<Renting, Long> implements RentingDao {

	@Override
	public Renting getRentingByMovie(Movie movie) {
		TypedQuery<Renting> query = entityManager.createQuery(
				"SELECT r FROM Renting r WHERE r.movie = :movie AND r.returningDate IS NULL", Renting.class);
		query.setParameter("movie", movie);
		return query.getSingleResult();
	}

}
