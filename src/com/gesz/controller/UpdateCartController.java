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
import com.gesz.mapper.ProductMapper;
import com.gesz.model.Cart;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/updatecart")
public class UpdateCartController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		HttpSession session=request.getSession();
		int id = Integer.valueOf(request.getParameter("id"));
		int quantity = Integer.valueOf(request.getParameter("quantity"));
		int userId = Integer.valueOf((String)session.getAttribute("UID"));
		String action = request.getParameter("action");
		RequestDispatcher dispatcher = null;
		session.setAttribute("cartNotice", "");
		
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 CartMapper cart = sqlSession.getMapper(CartMapper.class);
			 ProductMapper item = sqlSession.getMapper(ProductMapper.class);
			 int prodId = cart.getProductId(userId, id);
			 int stock = item.checkStock(prodId);
			 cart.updateCart(quantity, id);

			 
			 if(action.equals("increase")) {
				 if(stock == 0) {
					 session.setAttribute("cartNotice","Cannot add more. Currently out of stock.");
					 cart.updateCart(quantity-1, id);
				 }else {
					 item.decreaseStock(stock-1, prodId);
				 }
			 }else if(action.equals("decrease")) {
				 item.decreaseStock(stock+1, prodId);
			 }
			 sqlSession.commit();
			 ArrayList<Cart> mycart = cart.getCartById(Integer.valueOf((String)session.getAttribute("UID")));//MAke usre get user ID from session
			 session.setAttribute("myCart", mycart);
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		dispatcher = request.getRequestDispatcher("pages/cart.jsp");
		dispatcher.forward(request, response);
	}
}
