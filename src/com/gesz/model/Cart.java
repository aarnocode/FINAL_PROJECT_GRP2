package com.gesz.model;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Cart {
	private int cart_id;
	private int product_id;
	private String name;
	private int quantity;
	private double price;
	private String image;
	private String date;
	private int userId;
	
	public Cart(int cart_id, int product_id,String name, int quantity, double price, String image, String date) {
		this.cart_id = cart_id;
		this.product_id = product_id;
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.image = image;
		this.date = date;
	}
	
	public Cart(int cart_id, int product_id,String name, int quantity, double price, String image, String date,int userId) {
		this.cart_id = cart_id;
		this.product_id = product_id;
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.image = image;
		this.date = date;
		this.userId = userId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
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
	
	public static String getNewDate() {
		String result="";
		Date now = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
		result=formatter.format(now);
		return result;
	}
	
}
