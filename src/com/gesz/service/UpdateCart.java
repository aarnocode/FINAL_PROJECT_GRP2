package com.gesz.service;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.gesz.mapper.CartMapper;
import com.gesz.mybatis.GenSessionFactory;

public class UpdateCart {
	
	public static int getCartCount(String UID) {
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		int count = 0;
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 CartMapper cart = sqlSession.getMapper(CartMapper.class);
			 count = cart.getCartCount(Integer.valueOf(UID));
		 }catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return count;
	}
}
