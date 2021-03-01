package com.gesz.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.gesz.mapper.CartMapper;
import com.gesz.mapper.ProductMapper;
import com.gesz.model.Cart;
import com.gesz.mybatis.GenSessionFactory;

public class CartExpiration {
	
	public static void checkExpiredItems(int UID) {
		Date now = new Date();
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			CartMapper cart = sqlSession.getMapper(CartMapper.class);
			ProductMapper item = sqlSession.getMapper(ProductMapper.class);
			
			ArrayList<Cart> mycart = cart.getCartById(UID);
			for(Cart c : mycart) {
				String itemDate = c.getDate();
				if(getDifference(itemDate,now) > 7) {
					int stock = item.checkStock(c.getProduct_id());
					item.decreaseStock(stock+c.getQuantity(), c.getProduct_id());
					cart.removeCartItem(UID, c.getCart_id());
					sqlSession.commit();
				}
			}
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	public static void checkExpiredItems() {
		Date now = new Date();
		SqlSessionFactory sqlSessionFactory = GenSessionFactory.buildqlSessionFactory();
		
		try(SqlSession sqlSession = sqlSessionFactory.openSession()){
			CartMapper cart = sqlSession.getMapper(CartMapper.class);
			ProductMapper item = sqlSession.getMapper(ProductMapper.class);
			
			ArrayList<Cart> mycart = cart.getAllCart();
			for(Cart c : mycart) {
				String itemDate = c.getDate();
				if(getDifference(itemDate,now) > 7) {
					int stock = item.checkStock(c.getProduct_id());
					item.decreaseStock(stock+c.getQuantity(), c.getProduct_id());
					cart.removeCartItem(c.getUserId(), c.getCart_id());
					sqlSession.commit();
				}
			}
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	public static long getDifference(String itemDate, Date now){
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
		long difference = 0;
		try {
			Date date = formatter.parse(itemDate);
			difference = ((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)) % 365;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return difference;
	}
}
