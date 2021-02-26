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

@WebServlet("/pages/updateprofile")
public class UpdateUserProfileController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{	
		System.out.println("H");
//		String firstname = "dell";
//		String lastname = "dell";
//		String mi = "D";
//		String password = "delldell";
//		String email = "ralph@ralph.com";
//		BigInteger contactno = new BigInteger("123456");
//		BigInteger ccno = new BigInteger("987654");
//		String streetaddress = "#3 dell St.";
//		String zipcode = "1221";
//		String city = "Manila";
//		String state = "NCR";
//		String country = "Philippines";
		String firstname = request.getParameter("firstname");
		String lastname = request.getParameter("lastname");
		String mi = request.getParameter("mi");
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		BigInteger contactno = new BigInteger(request.getParameter("contactno"));
		BigInteger ccno = new BigInteger(request.getParameter("ccno"));
		String streetaddress = request.getParameter("streetaddress");
		String zipcode = request.getParameter("zipcode");
		String city = request.getParameter("city");
		String state = request.getParameter("state");
		String country = request.getParameter("country");
		String address = streetaddress+", "+zipcode+", "+city+", "+state+", "+country;
		Boolean sameemail = Boolean.parseBoolean(request.getParameter("sameemail"));
		int id=2;
		RequestDispatcher dispatcher = null;
		HttpSession session = request.getSession();	
		System.out.println("Happy");
		
		//Implementation of mybatis
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		System.out.println("birthday");

				label:try(SqlSession sqlSession = sqlSessionFactory.openSession()){				
					System.out.println("to");
					AccountsMapper accounts = sqlSession.getMapper(AccountsMapper.class);
					String checkemail = accounts.verifyEmail(email);
					
					System.out.println("you");
					//For Checking if Email and/or User already exist in the database
					if(checkemail != "" && checkemail != null && sameemail == false){	//Will go here if email already exist in database			
						System.out.println("Email Address is already in use");
						request.setAttribute("updatemsg", "Another person have already used this Email");		
						dispatcher = request.getRequestDispatcher("/pages/userProfile.jsp");
						sqlSession.close();
						break label;
					}
					//CCNO validation will go in here if user doesnt have CC yet or User didnt change his/her CC
					if((BigInteger.valueOf(0).compareTo(ccno) == 0)){	//Will go here if user doesnt have Credit Card#		
						System.out.println("You have Successfully Updated with No CC");
						System.out.println(sameemail);
						int result = accounts.updateNoCCProfile(firstname,lastname,mi,password,email,contactno,address,id);
						sqlSession.commit();
						sqlSession.close();
						request.setAttribute("updatemsg", "You have Successfully Updated with No CC");
						dispatcher = request.getRequestDispatcher("/pages/userProfile.jsp");
						System.out.println("Success Insert");
						dispatcher.forward(request, response);
					}
					else {//Will go here if user have Credit Card#		
						int result = accounts.updateProfile(firstname,lastname,mi,password,email,contactno,address,ccno,id);
						
						if(result == 1){//If Update is Success if will go here
							sqlSession.commit();
							sqlSession.close();
							//request.setAttribute("user", user);
							request.setAttribute("updatemsg", "You have Successfully Update");
							dispatcher = request.getRequestDispatcher("/pages/userProfile.jsp");
							System.out.println("You have Successfully Update");
							dispatcher.forward(request, response);
						}
						else {//If Insert fails it will go here
							//request.setAttribute("user", user);
							sqlSession.close();
							request.setAttribute("updatemsg", "Failed to Update");
							dispatcher = request.getRequestDispatcher("/pages/userProfile");
							System.out.println("Not Updated");
							dispatcher.forward(request, response);
						}
					}
				}catch(Exception e) {//If Other Error Occurs it will go here
					dispatcher = request.getRequestDispatcher("/pages/userProfileResult.jsp");	
					System.out.println("CATCH ERROR");
					System.out.println(e);
					dispatcher.forward(request, response);
				}
			//	dispatcher.forward(request, response);
		
	}
}
