package com.gesz.service;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.gesz.mapper.AccountsMapper;
import com.gesz.mybatis.GenSessionFactory;

public class Authenticator {

	public String authenticate(String username, String password) {
		
		//Implementation of mybatis over here
		 SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		 try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 AccountsMapper accounts = sqlSession.getMapper(AccountsMapper.class);
			 int valid = accounts.getAdminUser(username, password);
			 if(valid == 1) {
				 return "success";
			 }else {
				 return "failed";
			 }
		 }
	}
	
	public String[] userAuthenticate(String username, String password) {
		
		String [] result = new String[2];
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		 try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			 AccountsMapper accounts = sqlSession.getMapper(AccountsMapper.class);
			 int valid = accounts.getUser(username, password);
			 if(valid > 0) {
				 result[0] = "success";
				 result[1] = String.valueOf(valid);
				 return result;
			 }else {
				 result[0] = "failed";
				 result[1] = String.valueOf(valid);
				 return result;
			 }
		 }
	}
}
