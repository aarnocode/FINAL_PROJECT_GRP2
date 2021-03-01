package com.gesz.maintenance;

import com.gesz.service.CartExpiration;

public class RetrieveCartItems {

	public static void main(String[] args) {
		System.out.println("WARNING: If large data is being processed, it is better to turn down the server");
		System.out.println("to avoid conflicts/error.");
		System.out.println("Retrieving expired items in carts....");
		boolean result=retrieve();
		if(result == true) {
			System.out.println("Expired cart items successfully retrieved!");
		}

	}
	
	public static boolean retrieve() {
		try{
			CartExpiration.checkExpiredItems();
			return true;
		}catch (Exception e) {
			System.out.println("Retrieving FAILED!");
			System.out.print("CAUSE:");
			System.out.println(e.getMessage());
			return false;
		}
	}

}
