package com.gesz.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.gesz.mapper.AccountsMapper;
import com.gesz.mapper.ProductMapper;
import com.gesz.model.Product;
import com.gesz.model.User;
import com.gesz.mybatis.GenSessionFactory;
import com.gesz.service.Authenticator;
import com.sun.xml.internal.ws.resources.HttpserverMessages;

@WebServlet("/home")
public class LandingPageController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		HttpSession session = request.getSession();
		//Reset attributes
		session.setAttribute("addCartStatus", "");
		session.setAttribute("action","");
		session.setAttribute("isAdmin", "false");
		session.setAttribute("logMsg", "");
		RequestDispatcher dispatcher = null;
		String category = request.getParameter("category");
		
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
			 if(category.equals("All")) {
				 ArrayList<Product> products = product.getAllProduct();
				 session.setAttribute("products", products);
			 }else {
				 ArrayList<Product> products = product.getProductByCategory(category);
				 session.setAttribute("products", products);
			 }
			 ArrayList<String> categories = product.getCategories();
			 session.setAttribute("categories", categories);
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		dispatcher = request.getRequestDispatcher("pages/home.jsp");
		dispatcher.forward(request,response);
	}
}
