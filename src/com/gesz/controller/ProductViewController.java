package com.gesz.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.gesz.mapper.ProductMapper;
import com.gesz.model.Product;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/productview")
public class ProductViewController extends HttpServlet {
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		HttpSession session = request.getSession();
		RequestDispatcher dispatcher = null;
		int id = Integer.valueOf(request.getParameter("id"));
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
			 Product item = product.getByID(id);
			
			 session.setAttribute("productView",item);
			 session.setAttribute("productQuantity",1);
			 session.setMaxInactiveInterval(30*60);
			 
			/* request.setAttribute("item", item); */
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		dispatcher = request.getRequestDispatcher("pages/productview.jsp");
		dispatcher.forward(request,response);
	}
}
