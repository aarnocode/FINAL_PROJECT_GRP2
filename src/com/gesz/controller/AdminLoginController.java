package com.gesz.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.gesz.model.User;
import com.gesz.service.Authenticator;

@WebServlet("/adminlogin")
public class AdminLoginController extends HttpServlet {
private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		Authenticator authenticator = new Authenticator();
		String result = authenticator.authenticate(username,password);
		if(result.equals("success")) {
			User user = new User(username,password);
			request.setAttribute("user", user);
			HttpSession session = request.getSession();
			session.setAttribute("user", user);
			session.setAttribute("isAdmin", "true");
		}else {
			request.setAttribute("loginMessage", "Login failed, please try again");
		}
	}
}
