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
import com.gesz.model.Product;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/searchproduct")
public class SearchProductController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		
		String option = request.getParameter("option");
		String value = request.getParameter("searchValue");
		RequestDispatcher dispatcher = null;
		
		//Implementation of mybatis over here
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		if(option.equals("byID")) {
			try(SqlSession sqlSession = sqlSessionFactory.openSession()){
				 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
				 Product result = product.getByID(Integer.valueOf(value));
				 request.setAttribute("product", result);
			 }catch (Exception e) {
				System.out.println(e.getMessage());
			}
		}else {
			try(SqlSession sqlSession = sqlSessionFactory.openSession()){
				 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
				 Product result = product.getByName(value); 
				 System.out.println(result.getName());
				 request.setAttribute("product", result);
			 }catch (Exception e) {
				System.out.println(e.getMessage());
			}
		}
		dispatcher=request.getRequestDispatcher("pages/adminTabs.jsp");
		dispatcher.forward(request, response);
		
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
