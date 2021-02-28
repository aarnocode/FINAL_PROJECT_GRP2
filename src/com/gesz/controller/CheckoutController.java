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

import com.gesz.mapper.AccountsMapper;
import com.gesz.mapper.CartMapper;
import com.gesz.mapper.ProductMapper;
import com.gesz.model.Cart;
import com.gesz.model.Product;
import com.gesz.model.User;
import com.gesz.mybatis.GenSessionFactory;
import com.gesz.service.UpdateCart;

@WebServlet("/checkout")
public class CheckoutController extends HttpServlet {
	private static final long serialVersionUID = -3435554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		RequestDispatcher dispatcher = null;
		HttpSession session=request.getSession();
		session.setAttribute("notice", "");
		session.setAttribute("checkoutStatus", "");
		int UID = Integer.valueOf((String)session.getAttribute("UID"));
		String action = (String)session.getAttribute("action");
		
		
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 CartMapper cart = sqlSession.getMapper(CartMapper.class);
			 AccountsMapper account = sqlSession.getMapper(AccountsMapper.class);
			 User user = account.getUserById(UID);
			 session.setAttribute("user", user);
			 if(action.equals("cartCheckout")) {
				 String selected = request.getParameter("selected");
					if(selected.length() > 0 ) {
						selected = selected.substring(0,selected.length()-1);
					}
				String [] item = selected.split(",");
				 ArrayList<Cart> mycart = new ArrayList<Cart>();
				 for(int i = 0; i < item.length; i++) {
					 mycart.add(cart.getCartItem(Integer.valueOf(item[i])));
				 }
				 session.setAttribute("myCart", mycart);
			 }else {
				 Product prod = (Product)session.getAttribute("productView");
				 int quantity = Integer.valueOf(request.getParameter("quantity"));
				 session.setAttribute("user", user);
				 //Check availability of stocks
				 ProductMapper product = sqlSession.getMapper(ProductMapper.class);
				 int stock = product.checkStock(prod.getId());
				
				 if(stock < quantity) { 
					 session.setAttribute("notice","Cannot add more. Currently out of stock."); 
					 session.setAttribute("productQuantity", quantity-1);
				}else {
//					product.decreaseStock(quantity, prod.getId());
					session.setAttribute("productQuantity", quantity);
				}
				 
			 }
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		dispatcher = request.getRequestDispatcher("pages/checkout.jsp");
		dispatcher.forward(request, response);
	}
}
