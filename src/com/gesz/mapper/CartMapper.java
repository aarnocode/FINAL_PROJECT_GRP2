package com.gesz.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.gesz.model.Cart;

public interface CartMapper {
	@Select("SELECT c.cart_id, c.product_id, p.name, c.quantity, p.price, p.image, c.add_date\r\n" + 
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
		@Result(property = "image", column = "IMAGE"),
		@Result(property = "date", column = "ADD_DATE")
	})
	public ArrayList<Cart> getCartById(int id);
	
	@Select("SELECT c.cart_id, c.product_id, p.name, c.quantity, p.price, p.image, c.add_date, c.user_id\r\n" + 
			"    FROM FINAL_PROJECT_GRP2_CART c,\r\n" + 
			"         FINAL_PROJECT_GRP2_PRODUCT p\r\n" + 
			"    WHERE c.product_id = p.product_id")
	@Results({
		@Result(property = "cart_id", column = "CART_ID"),
		@Result(property = "product_id", column = "PRODUCT_ID"),
		@Result(property = "name",column= "NAME"),
		@Result(property = "quantity", column = "QUANTITY"),
		@Result(property = "price", column = "PRICE"),
		@Result(property = "image", column = "IMAGE"),
		@Result(property = "date", column = "ADD_DATE"),
		@Result(property = "userId", column="USER_ID")
	})
	public ArrayList<Cart> getAllCart();
	
	@Select("SELECT c.cart_id, c.product_id, p.name, c.quantity, p.price, p.image, c.add_date\r\n" + 
			"    FROM FINAL_PROJECT_GRP2_CART c,\r\n" + 
			"         FINAL_PROJECT_GRP2_PRODUCT p\r\n" + 
			"    WHERE c.cart_id = #{arg0}\r\n" + 
			"    AND c.product_id = p.product_id")
	@Results({
		@Result(property = "cart_id", column = "CART_ID"),
		@Result(property = "product_id", column = "PRODUCT_ID"),
		@Result(property = "name",column= "NAME"),
		@Result(property = "quantity", column = "QUANTITY"),
		@Result(property = "price", column = "PRICE"),
		@Result(property = "image", column = "IMAGE"),
		@Result(property = "date", column = "ADD_DATE")
	})
	public Cart getCartItem(int cartId);
	
	@Select("SELECT COALESCE ((SELECT MAX(cart_id) FROM FINAL_PROJECT_GRP2_CART),0) FROM DUAL")
	public int getId();
	
	@Select("SELECT COALESCE ((SELECT quantity FROM FINAL_PROJECT_GRP2_CART WHERE user_id = #{arg0} AND product_id = #{arg1}), 0)FROM dual")
	public int checkIfExist(int userId, int prodId);
	
	@Select("SELECT cart_id FROM FINAL_PROJECT_GRP2_CART WHERE user_id =#{arg0} AND product_id = #{arg1}")
	public int getCartId(int userId, int prodId);
	
	@Select("SELECT COUNT(user_id) FROM FINAL_PROJECT_GRP2_CART WHERE user_id = #{arg0}")
	public int getCartCount(int userId);
	
	@Select("SELECT product_id FROM FINAL_PROJECT_GRP2_CART WHERE user_id = #{arg0} AND cart_id = #{arg1}")
	public int getProductId(int userId, int cartId);
	
	@Update("UPDATE FINAL_PROJECT_GRP2_CART SET quantity = #{arg0} WHERE cart_id=#{arg1}")
	public int updateCart(int quantity, int id);
	
	@Insert("INSERT INTO FINAL_PROJECT_GRP2_CART VALUES(#{arg0},#{arg1},#{arg2},#{arg3},#{arg4})")
	public int addToCart(int cartId, int userId, int prodId, int quantity, String date);
	
	@Delete("DELETE FROM FINAL_PROJECT_GRP2_CART WHERE user_id = #{arg0} AND product_id = #{arg1}")
	public int removeItem(int userId, int prodId);
	
	@Delete("DELETE FROM FINAL_PROJECT_GRP2_CART WHERE user_id = #{arg0} AND cart_id = #{arg1}")
	public int removeCartItem(int userId, int cartId);
}
