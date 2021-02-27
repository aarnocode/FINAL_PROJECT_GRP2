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
import com.gesz.mapper.ProductMapper;
import com.gesz.model.Cart;
import com.gesz.model.Product;
import com.gesz.mybatis.GenSessionFactory;
import com.gesz.service.UpdateCart;

@WebServlet("/addtocart")
public class AddToCartController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273789111L;
	
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
			 ProductMapper item = sqlSession.getMapper(ProductMapper.class);
			 isExisting = cart.checkIfExist(UID, prodId);
			 if(action.equals("addToCart")) {
				 int stock = item.checkStock(prodId);
				 if(stock > 0) {
					 //stock
					 item.decreaseStock(stock-1, prodId);
					 if(isExisting > 0) {
						 cart.updateCart(isExisting+1, cart.getCartId(UID, prodId));
					 }else {
						 cart.addToCart(cart.getId()+1, UID, prodId, 1,Cart.getNewDate());
					 }
					 sqlSession.commit();
					 session.setAttribute("cartCount",UpdateCart.getCartCount(String.valueOf(UID)));
					 //prompt success
					 session.setAttribute("addCartStatus", "success");
				 }else {
					 //prompt no stock
					 session.setAttribute("addCartStatus", "failed");
				 }
			 }
			 
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}
}
