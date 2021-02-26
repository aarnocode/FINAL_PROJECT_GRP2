package com.gesz.controller;

import java.io.IOException;
import java.util.ArrayList;

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
import com.gesz.service.UpdateCart;

@WebServlet("/removecartitem")
public class RemoveCartItemController extends HttpServlet{
	private static final long serialVersionUID = -3435574487273789111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		int cartId = Integer.valueOf(request.getParameter("cartId"));
		int quantity = Integer.valueOf(request.getParameter("quantity"));
		HttpSession session = request.getSession();
		int userId = Integer.valueOf((String)session.getAttribute("UID"));
		
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			CartMapper cart = sqlSession.getMapper(CartMapper.class);
			ProductMapper item = sqlSession.getMapper(ProductMapper.class);
			int prodId = cart.getProductId(userId, cartId);
			int stock = item.checkStock(prodId);
			cart.removeCartItem(userId, cartId);
			item.decreaseStock(stock+quantity, prodId);
			ArrayList<Cart> mycart = cart.getCartById(userId);
			session.setAttribute("myCart", mycart);
			sqlSession.commit();
			session.setAttribute("cartCount", UpdateCart.getCartCount(String.valueOf(userId)));
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
