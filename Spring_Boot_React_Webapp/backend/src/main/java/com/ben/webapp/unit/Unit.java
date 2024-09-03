package com.ben.webapp.unit;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Units")
public class Unit {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String name;

	public Unit() {

	}

	public Unit(int id, String username) {
		super();
		this.id = id;
		this.name = username;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String username) {
		this.name = username;
	}

	// @Override
	// public int hashCode() {
	// 	final int prime = 31;
	// 	int result = 1;
	// 	result = prime * result + ((id == null) ? 0 : id.hashCode());
	// 	result = prime * result + ((name == null) ? 0 : name.hashCode());
	// 	return result;
	// }

	// @Override
	// public boolean equals(Object obj) {
	// 	if (this == obj)
	// 		return true;
	// 	if (obj == null)
	// 		return false;
	// 	if (getClass() != obj.getClass())
	// 		return false;
	// 	Unit other = (Unit) obj;
	// 	if (id == null) {
	// 		if (other.id != null)
	// 			return false;
	// 	} else if (!id.equals(other.id))
	// 		return false;
	// 	if (name == null) {
	// 		if (other.name != null)
	// 			return false;
	// 	} else if (!name.equals(other.name))
	// 		return false;
	// 	return true;
	// }

}