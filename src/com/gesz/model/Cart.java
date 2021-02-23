package com.gesz.model;

public class Cart {
	private int cart_id;
	private int product_id;
	private String name;
	private int quantity;
	private double price;
	private String image;
	
	public Cart(int cart_id, int product_id,String name, int quantity, double price, String image) {
		this.cart_id = cart_id;
		this.product_id = product_id;
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public int getCart_id() {
		return cart_id;
	}

	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
}
