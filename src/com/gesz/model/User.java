package com.gesz.model;

public class User {
	private int id;
	private String username;
	private String password;
	private String firstname;
	private String lastname;
	private String mi;
	private String email;
	private int contactno;
	private String address;
	private int isAdmin;
	
	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}
	
	public User(String username, String password,String firstname,String lastname,String mi,
				String email,int contactno,String address,int isAdmin) {
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.mi = mi;
		this.email = email;
		this.contactno = contactno;
		this.address = address;
		this.isAdmin = 0;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public String getFirstname() {
		return firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public String getMi() {
		return mi;
	}

	public String getEmail() {
		return email;
	}

	public int getContactno() {
		return contactno;
	}

	public String getAddress() {
		return address;
	}

	public int getIsAdmin() {
		return isAdmin;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
