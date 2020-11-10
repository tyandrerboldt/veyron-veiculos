package com.tyandrerboldt.veyronvehicles.resources;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
	
	@GetMapping("/{vehicleId}")
	public ResponseEntity<VehicleDTO> findById(@PathVariable Long vehicleId){
		VehicleDTO vehicleDTO = vehicleService.findById(vehicleId);
		return ResponseEntity.ok().body(vehicleDTO);
	}
	
	@PostMapping
	public ResponseEntity<VehicleDTO> create(@Valid @RequestBody VehicleDTO vehicleDTO){
		vehicleDTO = vehicleService.create(vehicleDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{productId}")
				.buildAndExpand(vehicleDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(vehicleDTO);		
	}
	
	@PutMapping("/{vehicleId}")
	public ResponseEntity<VehicleDTO> update(@PathVariable Long vehicleId, 
			@Valid @RequestBody VehicleDTO vehicleDTO){
		vehicleDTO = vehicleService.update(vehicleId, vehicleDTO);
		return ResponseEntity.ok().body(vehicleDTO);
	}
	
	@DeleteMapping("/{vehicleId}")
	public ResponseEntity<VehicleDTO> delete(@PathVariable Long vehicleId){
		vehicleService.delete(vehicleId);
		return ResponseEntity.noContent().build();
	}
	
	
	
}
