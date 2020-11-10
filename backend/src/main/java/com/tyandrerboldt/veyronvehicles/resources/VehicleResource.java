package com.tyandrerboldt.veyronvehicles.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tyandrerboldt.veyronvehicles.dtos.VehicleDTO;
import com.tyandrerboldt.veyronvehicles.services.VehicleService;

@RestController
@RequestMapping("/vehicles")
public class VehicleResource {

	@Autowired
	VehicleService vehicleService;
	
	@GetMapping
	public ResponseEntity<List<VehicleDTO>> findAll(){
		List<VehicleDTO> vehicles = vehicleService.findAll();		
		return ResponseEntity.ok().body(vehicles);
	}
	
}