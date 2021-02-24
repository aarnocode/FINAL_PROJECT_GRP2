package com.gesz.model;

import java.math.BigDecimal;

public class Product {
	private int id;
	private String name;
	private BigDecimal price;
	private int stock;
	private String image;
	private String description;
	private String category;
	
	public Product(int id,String name, BigDecimal price, int stock, String image) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.image = image;
	}
	
	public Product(int id,String name, BigDecimal price, int stock, String image, String description, String category) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.image = image;
		this.description = description;
		this.category = category;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
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

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}
