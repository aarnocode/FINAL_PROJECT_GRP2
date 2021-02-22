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

@WebServlet("/home")
public class LandingPageController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		RequestDispatcher dispatcher = null;
		
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
			 ArrayList<Product> products = product.getAllProduct();
			 System.out.println(products.get(0));
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		dispatcher = request.getRequestDispatcher("pages/home.jsp");
		dispatcher.forward(request,response);
		
		/*
		 * if(result.equals("success")) { dispatcher =
		 * request.getRequestDispatcher("pages/adminControl.jsp"); User user = new
		 * User(username,password); request.setAttribute("user", user); HttpSession
		 * session = request.getSession(); session.setAttribute("user", user); }else {
		 * request.setAttribute("loginMessage", "Login failed, please try again");
		 * dispatcher=request.getRequestDispatcher("pages/adminLogin.jsp"); }
		 * dispatcher.forward(request, response);
		 */
	}
}
