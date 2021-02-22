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

@WebServlet("/updateproduct")
public class UpdateProductController extends HttpServlet {
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		int id= Integer.valueOf(request.getParameter("product_id"));
		String name = request.getParameter("name");
		double price = Double.valueOf(request.getParameter("price").replaceAll("[()\\s-]+", ""));
		int stock = Integer.valueOf(request.getParameter("stock").replaceAll("[()\\s-]+", ""));
		String image = request.getParameter("image");
		int result=0;
		RequestDispatcher dispatcher = null;
		
		//Implementation of mybatis over here
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
			 result = product.updateProduct(name, price, stock, image, id);
			 sqlSession.commit();
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		if(result == 1) {
			request.setAttribute("resultMessage", "Successfully updated the product!");
		}else {
			request.setAttribute("resultMessage", "Failed to update the product..");
		}
		dispatcher=request.getRequestDispatcher("pages/adminControl.jsp");
		dispatcher.forward(request, response);
	}
}
