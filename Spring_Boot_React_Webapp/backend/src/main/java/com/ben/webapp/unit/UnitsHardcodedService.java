package com.ben.webapp.unit;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UnitsHardcodedService {

	private static List<Unit> units = new ArrayList<>();
	private static long idCounter = 0;

	static {
		units.add(new Unit(++idCounter, "Alice"));
		units.add(new Unit(++idCounter, "Bob"));
		units.add(new Unit(++idCounter, "Charlie"));
		units.add(new Unit(++idCounter, "Dave"));
	}

	public List<Unit> findAll() {
		return units;
	}

	public Unit save(Unit unit) {
		if (unit.getId() == -1 || unit.getId() == 0) {
			unit.setId(++idCounter);
			units.add(unit);
		} else {
			deleteById(unit.getId());
			units.add(unit);
		}
		return unit;
	}

	public Unit deleteById(long id) {
		Unit unit = findById(id);

		if (unit == null)
			return null;

		if (units.remove(unit)) {
			return unit;
		}

		return null;
	}

	public Unit findById(long id) {
		for (Unit unit : units) {
			if (unit.getId() == id) {
				return unit;
			}
		}

		return null;
	}
}