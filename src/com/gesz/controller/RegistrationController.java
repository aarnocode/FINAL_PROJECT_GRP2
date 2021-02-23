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

import com.gesz.mapper.AccountsMapper;
import com.gesz.model.User;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/pages/register")
public class RegistrationController extends HttpServlet{
private static final long serialVersionUID = -3435554487273689111L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String firstname = request.getParameter("firstname");
	    String lastname = request.getParameter("lastname");
	    String mi = request.getParameter("mi");
	    String email = request.getParameter("email");
		int contactno = Integer.parseInt(request.getParameter("contactno"));
		String address = request.getParameter("address");
		int isAdmin = 0;
		RequestDispatcher dispatcher = null;
		HttpSession session = request.getSession();
		
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		System.out.println("GG");
		request.setAttribute("message", "User Added");
		dispatcher = request.getRequestDispatcher("");
		dispatcher.forward(request, response);
		//request.getRequestDispatcher("").forward(request,response);
//		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
//		//	String userid = "hdd_user_id_pk.nextval";
//			
//			
//			User user = new User(username,password,firstname,lastname,mi,email,contactno,address,isAdmin);
//			AccountsMapper accounts = sqlSession.getMapper(AccountsMapper.class);
//			int result = accounts.registerUser(user.getFirstname(),user.getLastname(),user.getMi(),user.getUsername(),
//					user.getPassword(),user.getEmail(),user.getContactno(),user.getAddress(),user.getIsAdmin());
//			
//			
//			if(result == 1){
//				sqlSession.commit();
//				request.setAttribute("user", user);
//				request.setAttribute("message", "User Added");
//				dispatcher = request.getRequestDispatcher("pages/tempSuccessRegister.jsp");
//				System.out.println("GOOOOD");
//				request.getRequestDispatcher("").forward(request,response);
//			}
//			else {
//				request.setAttribute("user", user);
//				request.setAttribute("message", "User Not Added");
//				dispatcher = request.getRequestDispatcher("pages/tempSuccessRegister.jsp");
//				System.out.println("BAD");
//				dispatcher.forward(request, response);
//			}
//			
//		}catch(Exception e) {
//			dispatcher = request.getRequestDispatcher("pages/tempSuccessRegister.jsp");
//			request.setAttribute("message", e.getMessage());	
//			System.out.println("BAAAAAD");
//			System.out.println(e);
//			dispatcher.forward(request, response);
//		}
		
		
		//dispatcher.forward(request, response);
		
		
	}

}
