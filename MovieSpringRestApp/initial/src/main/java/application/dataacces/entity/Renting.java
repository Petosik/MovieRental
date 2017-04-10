package application.dataacces.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "renting")
public class Renting extends AbstractEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(nullable = false, length = 11)
	private String renterPeselNumber;

	@Column(nullable = false)
	private Date rentingDate;

	@Column(nullable = true)
	private Date returningDate;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "movie_id", nullable = false)
	private Movie movie;

	public String getRenterPeselNumber() {
		return renterPeselNumber;
	}

	public void setRenterPeselNumber(String renterPeselNumber) {
		this.renterPeselNumber = renterPeselNumber;
	}

	public Date getRentingDate() {
		return rentingDate;
	}

	public void setRentingDate(Date rentingDate) {
		this.rentingDate = rentingDate;
	}

	public Date getReturningDate() {
		return returningDate;
	}

	public void setReturningDate(Date returningDate) {
		this.returningDate = returningDate;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public Renting() {

	}

	public Renting(String peselNumber, Date rentingDate, Movie movie) {
		this.setRenterPeselNumber(peselNumber);
		this.setRentingDate(rentingDate);
		this.setMovie(movie);
	}

}
