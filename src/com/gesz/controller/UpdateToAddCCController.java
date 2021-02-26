package com.gesz.controller;

import java.io.IOException;
import java.math.BigInteger;

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
import com.gesz.model.User;
import com.gesz.mybatis.GenSessionFactory;

@WebServlet("/pages/addcc")
public class UpdateToAddCCController extends HttpServlet{
	
	private static final long serialVersionUID = -3435554487273689111L;
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{	
		BigInteger ccno = new BigInteger(request.getParameter("ccno"));
		int id=7;
		RequestDispatcher dispatcher = null;
		HttpSession session = request.getSession();	
		
		//Implementation of mybatis
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();

				try(SqlSession sqlSession = sqlSessionFactory.openSession()){				
					AccountsMapper accounts = sqlSession.getMapper(AccountsMapper.class);
			
						int result = accounts.addCCNo(ccno,id);
						
						if(result == 1){//If Update is Success if will go here
							sqlSession.commit();
							sqlSession.close();
							request.setAttribute("updatemsg", "You have Successfully Added CC");
							dispatcher = request.getRequestDispatcher("/pages/userProfile.jsp");
							System.out.println("You have Successfully Added CC");
							dispatcher.forward(request, response);
						}
						else {//If Insert fails it will go here
							//request.setAttribute("user", user);
							sqlSession.close();
							request.setAttribute("updatemsg", "Failed to Add CC");
							dispatcher = request.getRequestDispatcher("/pages/userProfile");
							System.out.println("Failed to Add CC");
							dispatcher.forward(request, response);
							}
				}catch(Exception e) {//If Other Error Occurs it will go here
					dispatcher = request.getRequestDispatcher("/pages/userProfileResult.jsp");	
					System.out.println("CATCH ERROR");
					System.out.println(e);
					dispatcher.forward(request, response);
				}

		
	}
}
