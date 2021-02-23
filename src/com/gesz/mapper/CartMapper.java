package com.gesz.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.gesz.model.Cart;

public interface CartMapper {
	@Select("SELECT c.cart_id, c.product_id, p.name, c.quantity, p.price, p.image\r\n" + 
			"    FROM FINAL_PROJECT_GRP2_CART c,\r\n" + 
			"         FINAL_PROJECT_GRP2_PRODUCT p\r\n" + 
			"    WHERE c.user_id = #{arg0}\r\n" + 
			"    AND c.product_id = p.product_id")
	@Results({
		@Result(property = "cart_id", column = "CART_ID"),
		@Result(property = "product_id", column = "PRODUCT_ID"),
		@Result(property = "name",column= "NAME"),
		@Result(property = "quantity", column = "QUANTITY"),
		@Result(property = "price", column = "PRICE"),
		@Result(property = "image", column = "IMAGE")
	})
	public ArrayList<Cart> getCartById(int id);
	
	@Update("UPDATE FINAL_PROJECT_GRP2_CART SET quantity = #{arg0} WHERE cart_id=#{arg1}")
	public int updateCart(int quantity, int id);
}
