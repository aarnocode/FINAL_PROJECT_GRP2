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
		
		
		dispatcher = request.getRequestDispatcher("pages/tempSuccessRegister.jsp");
		User user = new User(username,password,firstname,lastname,mi,email,contactno,address,isAdmin);
		request.setAttribute("user", user);
		HttpSession session = request.getSession();
		session.setAttribute("user", user);

		request.setAttribute("loginMessage", "Login failed, please try again");
		dispatcher=request.getRequestDispatcher("pages/adminLogin.jsp");
		
		dispatcher.forward(request, response);
	}

}
