package com.gesz.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.gesz.mapper.ProductMapper;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/addproduct")
public class AddProductController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		String name = request.getParameter("name");
		String description = request.getParameter("description");
		String category = request.getParameter("category");
		double price = Double.valueOf(request.getParameter("price").replaceAll("[()\\s-]+", ""));
		int stock = Integer.valueOf(request.getParameter("stock").replaceAll("[()\\s-]+", ""));
		String image = request.getParameter("image");
		int result=0;
		System.out.println(name);
		System.out.println(description);
		System.out.println(category);
		System.out.println(price);
		System.out.println(stock);
		System.out.println(image);
		RequestDispatcher dispatcher = null;
		
		//Implementation of mybatis over here
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
			 result = product.addProduct(product.getMaxId()+1, name, description, category, price, stock, image);
			 sqlSession.commit();
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		if(result == 1) {
			request.setAttribute("resultMessage", "Successfully added a new product!");
		}else {
			request.setAttribute("resultMessage", "Failed to add the product..");
		}
		dispatcher=request.getRequestDispatcher("pages/adminControl.jsp");
		dispatcher.forward(request, response);
	}
}
