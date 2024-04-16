package com.ben.webapp.unit;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class UnitResource {

	@Autowired
	private UnitsHardcodedService unitManagementService;

	@GetMapping("/units")
	public List<Unit> getAllUnits() {
		return unitManagementService.findAll();
	}

	@GetMapping("/units/{id}")
	public Unit getUnit(@PathVariable long id) {
		return unitManagementService.findById(id);
	}

	@DeleteMapping("/units/{id}")
	public ResponseEntity<Void> deleteUnit(@PathVariable long id) {

		Unit unit = unitManagementService.deleteById(id);

		if (unit != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}

	@PutMapping("/units/{id}")
	public ResponseEntity<Unit> updateUnit(@PathVariable long id,
			@RequestBody Unit unit) {

		Unit unitUpdated = unitManagementService.save(unit);

		return new ResponseEntity<Unit>(unitUpdated, HttpStatus.OK);
	}

	@PostMapping("/units")
	public ResponseEntity<Void> createUnit(@RequestBody Unit unit) {

		Unit createdUnit = unitManagementService.save(unit);

		// Location
		// Get current resource url
		/// {id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdUnit.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

}