package com.tyandrerboldt.veyronvehicles.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyandrerboldt.veyronvehicles.dtos.VehicleDTO;
import com.tyandrerboldt.veyronvehicles.entities.Vehicle;
import com.tyandrerboldt.veyronvehicles.repositories.VehicleRepository;
import com.tyandrerboldt.veyronvehicles.services.exceptions.ResourceNotFoundException;

@Service
public class VehicleService {

	@Autowired
	private VehicleRepository vehicleRepository;
	
	public List<VehicleDTO> findAll(){
		return vehicleRepository.findAll().stream().map(
				vehicle -> new VehicleDTO(vehicle))
				.collect(Collectors.toList());
	}
	
	public VehicleDTO findById(Long vehicleId) {
		Vehicle vehicle = findOrFail(vehicleId);
		return new VehicleDTO(vehicle);
	}
	
	public Vehicle findOrFail(Long vehicleId) {
		return vehicleRepository.findById(vehicleId)
				.orElseThrow(() -> new ResourceNotFoundException("Veículo não encontrado!"));
	}
	
}
