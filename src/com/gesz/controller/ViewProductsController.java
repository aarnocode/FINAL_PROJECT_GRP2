package com.gesz.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.gesz.mapper.ProductMapper;
import com.gesz.model.Product;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/viewproducts")
public class ViewProductsController extends HttpServlet{
	private static final long serialVersionUID = -3435554787273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		RequestDispatcher dispatcher = null;
		
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
			 ArrayList<Product> products = product.getAllProduct();
			 request.setAttribute("allproducts", products);
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		dispatcher = request.getRequestDispatcher("pages/adminTabs.jsp");
		dispatcher.forward(request,response);
	}
}
