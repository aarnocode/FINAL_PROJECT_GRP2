package com.gesz.model;


public class Order {
	private String productName;
	private int qty;
	private int total;
	private String paymentMethod;
	private String purchaseDate;
	
	public Order(String productName, int qty, int total, String paymentMethod,  String purchaseDate) {
		this.productName = productName;
		this.qty = qty;
		this.total = total;
		this.paymentMethod = paymentMethod;
		this.purchaseDate = purchaseDate;
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
