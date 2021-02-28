package com.gesz.model;


public class Order {
	private String productImage;
	private String productName;
	private int qty;
	private int total;
	private String paymentMethod;
	private String purchaseDate;
	
	public Order(String productImage,String productName, int qty, int total, String paymentMethod,  String purchaseDate) {
		this.productImage = productImage;
		this.productName = productName;
		this.qty = qty;
		this.total = total;
		this.paymentMethod = paymentMethod;
		this.purchaseDate = purchaseDate;
	}
	
	public String getImage() {
		return productImage;
	}
	
	public String getProductName() {
		return productName;
	}
	public int getQty() {
		return qty;
	}
	public int getTotal() {
		return total;
	}
	public String getPaymentMethod() {
		return paymentMethod;
	}
	public String getPurchaseDate() {
		return purchaseDate;
	}
	
	
	
}
