package com.gesz.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/logout")
public class LogoutController extends HttpServlet{

	private static final long serialVersionUID = -3435553487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		HttpSession session = request.getSession();
		String isAdmin = (String)session.getAttribute("isAdmin");
		if(isAdmin.equals("true")) {
			session.setAttribute("isAdmin", "false");
		}else {
			session.invalidate();
		}
	}
}
