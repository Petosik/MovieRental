package application.dataacces.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "movie")
public class Movie extends AbstractEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(nullable = false, length = 45)
	private String title;

	@Column(nullable = false, length = 45)
	private String director;

	@Column(nullable = false, length = 45)
	private String genre;

	@Column(nullable = false, length = 4)
	private int releaseYear;

	@Column(nullable = false, length = 45)
	private String productionCountry;

	@Column(nullable = false)
	private int duration;

	@Column(nullable = false)
	private String movieCoverUrl;

	@Column(nullable = false)
	private boolean isRented;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getProductionCountry() {
		return productionCountry;
	}

	public void setProductionCountry(String productionCountry) {
		this.productionCountry = productionCountry;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public boolean isAvaliable() {
		return isRented;
	}

	public void setAvaliable(boolean isAvaliable) {
		this.isRented = isAvaliable;
	}

	public String getMovieCoverUrl() {
		return movieCoverUrl;
	}

	public void setMovieCoverUrl(String movieCoverUrl) {
		this.movieCoverUrl = movieCoverUrl;
	}

	public boolean isRented() {
		return isRented;
	}

	public void setRented(boolean isRented) {
		this.isRented = isRented;
	}

	public int getReleaseYear() {
		return releaseYear;
	}

	public void setReleaseYear(int releaseYear) {
		this.releaseYear = releaseYear;
	}

	public Movie() {

	}

	public Movie(String title, String director, String genre, String productionCountry, int duration,
			String movieCoverUrl, int releaseYear) {
		this.title = title;
		this.director = director;
		this.genre = genre;
		this.productionCountry = productionCountry;
		this.duration = duration;
		this.setMovieCoverUrl(movieCoverUrl);
		this.setReleaseYear(releaseYear);
	}

}
