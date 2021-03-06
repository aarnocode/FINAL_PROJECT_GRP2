package com.gesz.mybatis;

import javax.sql.DataSource;

import org.apache.ibatis.datasource.pooled.PooledDataSource;
import org.apache.ibatis.mapping.Environment;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.apache.ibatis.transaction.jdbc.JdbcTransactionFactory;

import com.gesz.mapper.AccountsMapper;
import com.gesz.mapper.CartMapper;
import com.gesz.mapper.OrderMapper;
import com.gesz.mapper.ProductMapper;

public class GenSessionFactory {
	public static SqlSessionFactory buildqlSessionFactory() {
		DataSource dataSource = new PooledDataSource("oracle.jdbc.driver.OracleDriver", "jdbc:oracle:thin:HR/hr@//18.138.34.193:1521/BASELINE", "HR", "hr");
		
		Environment environment = new Environment("Development", new JdbcTransactionFactory(), dataSource);
		
		Configuration configuration = new Configuration(environment);
		configuration.addMapper(AccountsMapper.class);
		configuration.addMapper(ProductMapper.class);
		configuration.addMapper(CartMapper.class);
		configuration.addMapper(OrderMapper.class);
		
		SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
		return builder.build(configuration);
	}
}
