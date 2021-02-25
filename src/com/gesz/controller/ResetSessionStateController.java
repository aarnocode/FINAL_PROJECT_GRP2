package com.gesz.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/resetstate")
public class ResetSessionStateController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		HttpSession session =request.getSession();
		session.setAttribute("isLoggedIn","");
		session.setAttribute("isAdmin", "false");
		session.setAttribute("logMsg", "");
	}
}
