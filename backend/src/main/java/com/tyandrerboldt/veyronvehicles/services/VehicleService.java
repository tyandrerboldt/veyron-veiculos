package com.tyandrerboldt.veyronvehicles.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyandrerboldt.veyronvehicles.entities.Vehicle;
import com.tyandrerboldt.veyronvehicles.repositories.VehicleRepository;

@Service
public class VehicleService {

	@Autowired
	private VehicleRepository vehicleRepository;
	
	public List<Vehicle> findAll(){
		return vehicleRepository.findAll();
	}
	
}
