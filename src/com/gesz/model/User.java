package com.gesz.model;

import java.math.BigInteger;

public class User {
	private int id;
	private String username;
	private String password;
	private String firstname;
	private String lastname;
	private String mi;
	private String email;
	private BigInteger contactno;
	private String address;
	private BigInteger ccno;
	private int isAdmin;
	private BigInteger ccno;
	
	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}
	//overload for registering user
	public User(String username, String password,String firstname,String lastname,String mi,
				String email,BigInteger contactno,String address,int isAdmin) {
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
	//overloaded method for fetching user info w/ ccno for UserProfile
	public User(int id,String username, String password,String firstname,String lastname,String mi,
			String email,BigInteger contactno,String address,BigInteger ccno) {
	this.username = username;
	this.password = password;
	this.firstname = firstname;
	this.lastname = lastname;
	this.mi = mi;
	this.email = email;
	this.contactno = contactno;
	this.address = address;
	this.ccno = ccno;
}
	
	
	public User(int id, String username, String password, String firstname, String lastname, String mi, String email, BigInteger contactno,String address,BigInteger ccno) {
		this.id = id;
		this.username=username;
		this.password=password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.mi = mi;
		this.email = email;
		this.contactno=contactno;
		this.address = address;
		this.ccno = ccno;
	}

	public BigInteger getCcno() {
		return ccno;
	}

	public void setCcno(BigInteger ccno) {
		this.ccno = ccno;
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

	public BigInteger getContactno() {
		return contactno;
	}

	public String getAddress() {
		return address;
	}

	public int getIsAdmin() {
		return isAdmin;
	}
	public BigInteger getCcno() {
		return ccno;
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
