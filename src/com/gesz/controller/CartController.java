package com.gesz.controller;

import java.io.IOException;
import java.util.ArrayList;

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
import com.gesz.model.Cart;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/cart")
public class CartController extends HttpServlet {
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		RequestDispatcher dispatcher = null;
		HttpSession session=request.getSession();
		session.setAttribute("addCartStatus", "");
		session.setAttribute("action", "cartCheckout");
		
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 CartMapper cart = sqlSession.getMapper(CartMapper.class);
			 ArrayList<Cart> mycart = cart.getCartById(Integer.valueOf((String)session.getAttribute("UID")));
			 session.setAttribute("myCart", mycart);
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		dispatcher = request.getRequestDispatcher("pages/cart.jsp");
		dispatcher.forward(request, response);
	}
}
