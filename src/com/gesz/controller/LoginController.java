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

import com.gesz.mapper.CartMapper;
import com.gesz.mapper.ProductMapper;
import com.gesz.model.Product;
import com.gesz.mybatis.GenSessionFactory;
import com.gesz.service.Authenticator;

@WebServlet("/login")
public class LoginController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		RequestDispatcher dispatcher = null;
		HttpSession session = request.getSession();
		
		Authenticator authenticator = new Authenticator();
		String [] result = authenticator.userAuthenticate(username, password);
		if(result[0].equals("success")) {
			System.out.println("success");
			session.setAttribute("UID", result[1]);
			session.setAttribute("isLoggedIn", true);
			session.setAttribute("cartCount", getCartCount(result[1]));
		}else {
			System.out.println("failed");
			session.setAttribute("logMsg", "Login failed, please try again");
		}
	}
	
	public int getCartCount(String UID) {
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		int count = 0;
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 CartMapper cart = sqlSession.getMapper(CartMapper.class);
			 count = cart.getCartCount(Integer.valueOf(UID));
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return count;
	}
}