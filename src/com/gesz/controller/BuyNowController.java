package com.gesz.controller;

import java.io.IOException;

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
import com.gesz.model.Product;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/buynow")
public class BuyNowController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		HttpSession session = request.getSession();
		Product product = (Product)session.getAttribute("productView");
		String action = request.getParameter("action");
		
		int UID = Integer.valueOf((String)session.getAttribute("UID"));
		int prodId = product.getId();
		int isExisting = 0;
		
		//Implementation of mybatis over here
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 CartMapper cart = sqlSession.getMapper(CartMapper.class);
			 isExisting = cart.checkIfExist(UID, prodId);
			 if(action.equals("buy")) {
				 
				 if(isExisting > 0) {
					 cart.updateCart(isExisting+1, cart.getCartId(UID, prodId));
				 }else {
					 cart.addToCart(cart.getId()+1, UID, prodId, 1,Cart.getNewDate());
				 }
				 sqlSession.commit();
				 session.setAttribute("action", "buynow");
			 }else if(action.equals("cancel")) {
				 int quantity = Integer.valueOf(request.getParameter("quantity"));
				 System.out.println(quantity);
				 System.out.println(isExisting);
				 if(isExisting > quantity) {
					 cart.updateCart(isExisting-quantity, cart.getCartId(UID, prodId));
				 }else {
					 cart.removeItem(UID, prodId);
				 }
				 sqlSession.commit();
			 }
			 
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}
}
