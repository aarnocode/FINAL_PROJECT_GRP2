package com.gesz.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.gesz.mapper.CartMapper;
import com.gesz.mapper.OrderMapper;
import com.gesz.mapper.ProductMapper;
import com.gesz.model.Cart;
import com.gesz.model.Product;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/transact")
public class TransactionController extends HttpServlet{
	private static final long serialVersionUID = -3437554487273689111L;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		HttpSession session = request.getSession();
		String action= (String)session.getAttribute("action");	
		int userId = Integer.valueOf((String)session.getAttribute("UID"));
		String method = request.getParameter("method");
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			OrderMapper order = sqlSession.getMapper(OrderMapper.class);
			CartMapper cart = sqlSession.getMapper(CartMapper.class);
			ProductMapper item = sqlSession.getMapper(ProductMapper.class);
			if(action.equals("cartCheckout")) {
				ArrayList<Cart> myCart = (ArrayList<Cart>)session.getAttribute("myCart");
				for(Cart c : myCart) {
					order.recordTransaction(order.getId()+1, userId, c.getProduct_id(), c.getQuantity(), 
											getTotal(c), method, getNewDate());
					cart.removeItem(userId, c.getProduct_id());
				}
			} else {
				Product product = (Product)session.getAttribute("productView");
				int quantity = Integer.valueOf((int)session.getAttribute("productQuantity"));
				order.recordTransaction(order.getId()+1, userId, product.getId(), quantity,
										product.getPrice().doubleValue()*quantity, method, getNewDate());
			}
			sqlSession.commit();
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	public double getTotal(Cart cart) {
		return cart.getPrice()*cart.getQuantity();
	}
	
	public  String getNewDate() {
		String result="";
		Date now = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
		result=formatter.format(now);
		return result;
	}
	
}
