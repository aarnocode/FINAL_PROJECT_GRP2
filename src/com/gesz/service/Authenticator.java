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
}
