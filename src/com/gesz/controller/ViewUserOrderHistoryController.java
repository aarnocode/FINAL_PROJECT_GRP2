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

import com.gesz.mapper.OrderMapper;
import com.gesz.model.Order;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/pages/orderhistory")
public class ViewUserOrderHistoryController extends HttpServlet{
	private static final long serialVersionUID = -3435554487273689111L;
	
public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		RequestDispatcher dispatcher = null;
		HttpSession session = request.getSession();
		//int id=Integer.valueOf((String)session.getAttribute("UID"));
		int id= 5;
		System.out.println("a");
		//Implementation of mybatis
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
			try(SqlSession sqlSession = sqlSessionFactory.openSession()){		
				OrderMapper order = sqlSession.getMapper(OrderMapper.class);
				ArrayList<Order> userorder = order.GetUserOrderHistory(id);
				request.setAttribute("orders", userorder);
				request.setAttribute("message", "Order Retrieved");
//				for(Order ord: userorder) {
//					System.out.println(userorder.getProductName());
//				}
				//sqlSession.close();
				dispatcher = request.getRequestDispatcher("/pages/userOrderHistoryResult.jsp");
				System.out.println(userorder.size());					
			}catch(Exception e) {//If Other Error Occurs it will go here
				System.out.println("Failed to Retrieve Order");
				System.out.println(e);
				request.setAttribute("message", "Failed to Retrieve Order");
				dispatcher = request.getRequestDispatcher("/pages/userOrderHistoryResult.jsp");		
			}
			dispatcher.forward(request, response);
		
	}

}
