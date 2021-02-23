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
	    BigInteger contactno = new BigInteger(request.getParameter("contactno"));
		String address = request.getParameter("address");
		int isAdmin = 0;
		RequestDispatcher dispatcher = null;
		HttpSession session = request.getSession();
		
		
		//Implementation of mybatis
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
	
				try(SqlSession sqlSession = sqlSessionFactory.openSession()){				
				User user = new User(username,password,firstname,lastname,mi,email,contactno,address,isAdmin);
				AccountsMapper accounts = sqlSession.getMapper(AccountsMapper.class);
				String checkemail = accounts.verifyEmail(user.getEmail());
				String checkusername = accounts.verifyUsername(user.getUsername());
				
				//System.out.println("hey");
				//For Checking if Email and/or User already exist in the database
				if(checkemail != "" && checkemail != null){	//Will go here if email already exist in database			
					System.out.println("Email Address is already in use");
					request.setAttribute("message", "Email Address is already in use");	
					System.out.println("hey");
					if(checkusername != "" && checkusername != null){	//Will go here if username already exist in database			
						System.out.println("Username is already in use");
						request.setAttribute("message2", "Username is already in use");
					}
					dispatcher = request.getRequestDispatcher("/pages/userRegistrationResult.jsp");
					dispatcher.forward(request, response);
				}
				
				//For Checking if Email and/or User already exist in the database
				else if(checkusername != "" && checkusername != null){	//Will go here if username already exist in database			
					System.out.println("Username is already in use");
					request.setAttribute("message", "Username is already in use");
					dispatcher = request.getRequestDispatcher("/pages/userRegistrationResult.jsp");
					dispatcher.forward(request, response);
				}
				
				
				
				else {//Will go here if it user doesnt exist yet and will proceed to insert a new user			
					int result = accounts.registerUser(user.getFirstname(),user.getLastname(),user.getMi(),user.getUsername(),
					user.getPassword(),user.getEmail(),user.getContactno(),user.getAddress(),user.getIsAdmin());
					
					
					if(result == 1){//If Insert is Success if will go here
						sqlSession.commit();
						request.setAttribute("user", user);
						request.setAttribute("message", "You have Successfully Registered");
						dispatcher = request.getRequestDispatcher("/pages/userRegistrationResult.jsp");
						System.out.println("Success");
						dispatcher.forward(request, response);
					}
					else {//If Insert fails it will go here
						request.setAttribute("user", user);
						request.setAttribute("message", "Registration Failed");
						dispatcher = request.getRequestDispatcher("/pages/userRegistrationResult.jsp");
						System.out.println("ERROR");
						dispatcher.forward(request, response);
					}
				}
				
			}catch(Exception e) {//If Other Error Occurs it will go here
				dispatcher = request.getRequestDispatcher("/pages/userRegistrationResult.jsp");
				request.setAttribute("message", e.getMessage());	
				System.out.println("CATCH ERROR");
				System.out.println(e);
				dispatcher.forward(request, response);
			}
		
		
	}

}
