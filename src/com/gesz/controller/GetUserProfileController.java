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
//@WebServlet("/userProfile")
public class GetUserProfileController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;

//	@Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        // Preprocess request: we actually don't need to do any business stuff, so just display JSP.
//        request.getRequestDispatcher("/pages/userProfile.jsp").forward(request, response);
//    }
	//@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{	
			int id = 7;
			RequestDispatcher dispatcher = null;
			HttpSession session = request.getSession();	
			
			//Implementation of mybatis
			SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
			
	
					try(SqlSession sqlSession = sqlSessionFactory.openSession()){				
					
					AccountsMapper accounts = sqlSession.getMapper(AccountsMapper.class);
					User user = accounts.getUserByIdWCC(id);
					String[] add_split = user.getAddress().split(", ");
					request.setAttribute("message", "Got User");
					request.setAttribute("streetaddress", add_split[0]);
					request.setAttribute("zipcode", add_split[1]);
					request.setAttribute("city", add_split[2]);
					request.setAttribute("state", add_split[3]);
					request.setAttribute("country", add_split[4]);
					request.setAttribute("myuser", user);
					
					
					dispatcher = request.getRequestDispatcher("/pages/userProfileResult.jsp");
					//System.out.println("Success "+user.getFirstname());
					sqlSession.close();
					dispatcher.forward(request, response);
					
					
					
					}catch(Exception e) {//If Other Error Occurs it will go here
						request.setAttribute("errMessage", "Uh Oh Some Error Occured, Please Reload");
						dispatcher = request.getRequestDispatcher("/pages/userProfileResult.jsp");	
						System.out.println("Catch Error");
						System.out.println(e);
						dispatcher.forward(request, response);
					}
			
			
		}
	
}
