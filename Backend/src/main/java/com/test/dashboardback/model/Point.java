package com.test.dashboardback.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "point")
public class Point {
	@Id
	private String id;
	private Integer William;
	private Integer Santiago;
	private Integer Alvaro;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Integer getWilliam() {
		return William;
	}
	public void setWilliam(Integer william) {
		William = william;
	}
	public Integer getSantiago() {
		return Santiago;
	}
	public void setSantiago(Integer santiago) {
		Santiago = santiago;
	}
	public Integer getAlvaro() {
		return Alvaro;
	}
	public void setAlvaro(Integer alvaro) {
		Alvaro = alvaro;
	}
	
	
}
