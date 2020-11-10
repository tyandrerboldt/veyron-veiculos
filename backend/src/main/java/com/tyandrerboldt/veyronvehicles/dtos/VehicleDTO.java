package com.tyandrerboldt.veyronvehicles.dtos;

import java.io.Serializable;

import com.tyandrerboldt.veyronvehicles.entities.Vehicle;
import com.tyandrerboldt.veyronvehicles.entities.enums.Fuel;

public class VehicleDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String model;
	private String board;
	private String color;
	private Integer year;
	private Fuel fuel;

	public VehicleDTO() {
	}

	public VehicleDTO(Vehicle vehicle) {
		super();
		this.id = vehicle.getId();
		this.model = vehicle.getModel();
		this.board = vehicle.getBoard();
		this.color = vehicle.getColor();
		this.year = vehicle.getYear();
		this.fuel = vehicle.getFuel();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getBoard() {
		return board;
	}

	public void setBoard(String board) {
		this.board = board;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public Fuel getFuel() {
		return fuel;
	}

	public void setFuel(Fuel fuel) {
		this.fuel = fuel;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		VehicleDTO other = (VehicleDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
