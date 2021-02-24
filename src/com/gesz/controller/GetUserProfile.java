package com.gesz.controller;

import java.io.IOException;
import java.math.BigInteger;

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
import com.gesz.model.User;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/pages/profile")
public class GetUserProfile extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{	
		int id = 2;
		RequestDispatcher dispatcher = null;
		HttpSession session = request.getSession();	
		
		//Implementation of mybatis
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
				System.out.println("hey");
				try(SqlSession sqlSession = sqlSessionFactory.openSession()){				
				
				AccountsMapper accounts = sqlSession.getMapper(AccountsMapper.class);
				User user = accounts.getUserByIdWCC(id);
				User user2 = new User("juan","luna");
				System.out.println("soul");
				
				request.setAttribute("message", "Got User");
				
				request.setAttribute("myuser", user);
				
				
				dispatcher = request.getRequestDispatcher("/pages/userProfileResult.jsp");
				System.out.println("Success "+user.getFirstname());
				dispatcher.forward(request, response);
				
				
				
				}catch(Exception e) {//If Other Error Occurs it will go here
					dispatcher = request.getRequestDispatcher("/pages/userProfileResult.jsp");	
					System.out.println("CATCH ERROR");
					System.out.println(e);
					dispatcher.forward(request, response);
				}
		
		
	}
	
}
