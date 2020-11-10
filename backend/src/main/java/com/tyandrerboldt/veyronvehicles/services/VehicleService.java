package com.tyandrerboldt.veyronvehicles.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tyandrerboldt.veyronvehicles.dtos.VehicleDTO;
import com.tyandrerboldt.veyronvehicles.entities.Vehicle;
import com.tyandrerboldt.veyronvehicles.repositories.VehicleRepository;
import com.tyandrerboldt.veyronvehicles.services.exceptions.DatabaseException;
import com.tyandrerboldt.veyronvehicles.services.exceptions.ResourceNotFoundException;

@Service
public class VehicleService {

	@Autowired
	private VehicleRepository vehicleRepository;

	@Transactional(readOnly = true)
	public List<VehicleDTO> findAll() {
		return vehicleRepository.findAll().stream().map(vehicle -> new VehicleDTO(vehicle))
				.collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public VehicleDTO findById(Long vehicleId) {
		Vehicle vehicle = findOrFail(vehicleId);
		return new VehicleDTO(vehicle);
	}

	@Transactional
	public VehicleDTO create(VehicleDTO vehicleDTO) {
		Vehicle vehicle = new Vehicle();
		copyDtoToEntity(vehicleDTO, vehicle);
		vehicle = vehicleRepository.save(vehicle);
		return new VehicleDTO(vehicle);
	}

	@Transactional
	public VehicleDTO update(Long vehicleId, VehicleDTO vehicleDTO) {
		try {
			Vehicle vehicle = vehicleRepository.getOne(vehicleId);
			copyDtoToEntity(vehicleDTO, vehicle);
			vehicle = vehicleRepository.save(vehicle);
			return new VehicleDTO(vehicle);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Veículo não encontrado. ID: " + vehicleId);
		}
	}
	
	public void delete(Long vehicleId) {
		try {
			vehicleRepository.deleteById(vehicleId);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Veículo não encontrado. ID:" + vehicleId);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Este produto está relacionado com outros registros.");
		}
	}

	@Transactional(readOnly = true)
	public Vehicle findOrFail(Long vehicleId) {
		return vehicleRepository.findById(vehicleId)
				.orElseThrow(() -> new ResourceNotFoundException("Veículo não encontrado!"));
	}

	private void copyDtoToEntity(VehicleDTO vehicleDTO, Vehicle vehicle) {
		vehicle.setModel(vehicleDTO.getModel());
		vehicle.setBoard(vehicleDTO.getBoard());
		vehicle.setColor(vehicleDTO.getColor());
		vehicle.setYear(vehicleDTO.getYear());
		vehicle.setFuel(vehicleDTO.getFuel());
	}

}
