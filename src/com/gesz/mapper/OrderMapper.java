package com.gesz.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

public interface OrderMapper {
	@Insert("INSERT INTO FINAL_PROJECT_GRP2_ORDER VALUES (#{arg0},#{arg1},#{arg2},#{arg3},#{arg4},#{arg5},#{arg6})")
	public int recordTransaction(int orderId, int userId, int prodId, int quantity, double total,
								 String method, String purchaseDate);
	
	@Select("SELECT COALESCE((SELECT MAX(ORDER_ID) FROM FINAL_PROJECT_GRP2_ORDER),1) FROM DUAL")
	public int getId();
}
