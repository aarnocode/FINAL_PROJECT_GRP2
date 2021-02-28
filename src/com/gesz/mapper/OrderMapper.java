package com.gesz.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.gesz.model.Order;

public interface OrderMapper {
	@Insert("INSERT INTO FINAL_PROJECT_GRP2_ORDER VALUES (#{arg0},#{arg1},#{arg2},#{arg3},#{arg4},#{arg5},#{arg6})")
	public int recordTransaction(int orderId, int userId, int prodId, int quantity, double total,
								 String method, String purchaseDate);
	
	@Select("SELECT COALESCE((SELECT MAX(ORDER_ID) FROM FINAL_PROJECT_GRP2_ORDER),1) FROM DUAL")
	public int getId();
	
	@Select("SELECT p.IMAGE, p.NAME, o.QUANTITY, o.TOTAL, o.P_METHOD, o.PURCHASE_DATE FROM final_project_grp2_order o, final_project_grp2_product p"
			+ " WHERE o.PRODUCT_ID = p.PRODUCT_ID AND o.USER_ID = #{arg0} ORDER BY ORDER_ID DESC")
	@Results({
		@Result(property = "productImage", column = "p.IMAGE"),
		@Result(property = "productName", column = "p.NAME"),
		@Result(property = "qty", column = "o.QUANTITY"),
		@Result(property = "total", column = "o.TOTAL"),
		@Result(property = "paymentMethod", column = "o.P_METHOD"),
		@Result(property = "purchaseDate", column = "o.PURCHASE_DATE")
	})
	public ArrayList<Order> GetUserOrderHistory(int userid);
}
