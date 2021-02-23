package com.gesz.mapper;

import org.apache.ibatis.annotations.Results;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.gesz.model.Product;


public interface ProductMapper {
	
	@Select("Select MAX(product_id) from final_project_grp2_product")
	public int getMaxId();
	
	@Select("Select product_id, name, price, stock, image from final_project_grp2_product where product_id=#{arg0}")
	@Results({
			@Result(property = "id", column="product_id"),
			@Result(property = "name", column="NAME"),
			@Result(property = "price", column="PRICE"),
			@Result(property = "stock", column="STOCK"),
			@Result(property = "image", column="IMAGE")
	})
	public Product getByID(int ID);

	@Select("Select product_id, name, price, stock, image from final_project_grp2_product where name=#{arg0}")
	@Results(value= {
			@Result(property = "id", column="product_id"),
			@Result(property = "name", column="NAME"),
			@Result(property = "price", column="PRICE"),
			@Result(property = "stock", column="STOCK"),
			@Result(property = "image", column="IMAGE")
	})
	public Product getByName(String name);
	
	@Select("Select product_id,name,price, stock, image, description, product_category from final_project_grp2_product")
	@Results({
		@Result(property="id", column="product_id"),
		@Result(property="name",column="NAME"),
		@Result(property="price",column="PRICE"),
		@Result(property="stock",column="STOCK"),
		@Result(property="image",column="IMAGE"),
		@Result(property="description",column="DESCRIPTION"),
		@Result(property="category",column="PRODUCT_CATEGORY")
	})
	public ArrayList<Product> getAllProduct();
	 
	@Update("Update final_project_grp2_product set name=#{arg0}, price=#{arg1}, stock=#{arg2}, image=#{arg3} where product_id = #{arg4}")
	public int updateProduct(String name, double price, int stock, String image, int id);
	
	@Insert("Insert into final_project_grp2_product values (#{arg0},#{arg1},#{arg2},#{arg3},#{arg4},#{arg5},#{arg6})")
	public int addProduct(int id,String name, String description, String category, double price, int stock, String image);
}
