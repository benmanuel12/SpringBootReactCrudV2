package com.ben.webapp.unit;

import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class UnitController {

	private final UnitRepository unitRepository;
  
	public UnitController(UnitRepository unitRepository) {
	  this.unitRepository = unitRepository;
	}

	// Get All Units
	@GetMapping("/units")
	public Iterable<Unit> getAllUnits() {
		return this.unitRepository.findAll();
	}

	// Get Unit By Id
	@GetMapping("/units/{id}")
	public Optional<Unit> getUnitById(@PathVariable int id) {
		return this.unitRepository.findById(id);
	}

	// Delete Unit By Id
	@DeleteMapping("/units/{id}")
	public void deleteUnitById(@PathVariable int id) {
		this.unitRepository.deleteById(id);
	}

	// Update Unit by Id
	@PutMapping("/units/{id}")
	public Unit updateUnit(@PathVariable long id,
	@RequestBody Unit unit) {
		return this.unitRepository.save(unit);
	}

	// Create Unit
	@PostMapping("/units")
	public Unit createUnit(@RequestBody Unit unit) {
		return this.unitRepository.save(unit);
	}
  }