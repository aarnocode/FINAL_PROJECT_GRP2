package com.gesz.mapper;

import java.math.BigInteger;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.gesz.model.User;


public interface AccountsMapper {
	@Select("Select count(user_id) valid from final_project_grp2_user where username = #{arg0} AND pass_word=#{arg1} AND isadmin =1")
	@Result(property="valid",column="valid")
	public int getAdminUser(String username, String password);
	
	@Select("Select count(id) num from accounts_am")
	public int getCountId();
	
	@Insert("Insert into accounts_am values (#{arg0},#{arg1},#{arg2})")
	public Integer register(
				int id,
				String username,
				String password
			);
	
	@Insert("INSERT INTO final_project_grp2_user(USER_ID,FIRST_NAME,LAST_NAME,MI,USERNAME,PASS_WORD,EMAIL,CONTACT_NO,ADDRESS,ISADMIN)"
			+ " VALUES (GRP2USER_USER_ID_PK.nextval,#{arg0},#{arg1},#{arg2},#{arg3},#{arg4},#{arg5},#{arg6},#{arg7},#{arg8})")
	public Integer registerUser(
				String firstname,
				String lastname,
				String mi,
				String username,
				String password,
				String email,
				BigInteger contactno,
				String address,
				int isAdmin
			);
	
	@Select("SELECT email FROM final_project_grp2_user WHERE email = #{arg0}")
	public String verifyEmail(
					String email);
	
	@Select("SELECT username FROM final_project_grp2_user WHERE username = #{arg0}")
	public String verifyUsername(
					String username);
	
	@Select("SELECT user_id, username, pass_word, first_name, last_name, mi, email, contact_no, address FROM final_project_grp2_user WHERE user_id = #{arg0}")
	@Results({
		@Result(property = "id", column = "USER_ID"),
		@Result(property = "username", column = "USERNAME"),
		@Result(property = "password", column = "PASS_WORD"),
		@Result(property = "firstname", column = "FIRST_NAME"),
		@Result(property = "lastname", column = "LAST_NAME"),
		@Result(property = "mi", column = "MI"),
		@Result(property = "email", column = "EMAIL"),
		@Result(property = "contactno", column = "CONTACT_NO"),
		@Result(property = "address", column = "ADDRESS")
	})
	public User getUserById(int id);
	
	@Select("SELECT user_id, username, pass_word, first_name, last_name, mi, email, contact_no, address FROM final_project_grp2_user WHERE user_id = #{arg0}")
	@Results({
		@Result(property = "id", column = "USER_ID"),
		@Result(property = "username", column = "USERNAME"),
		@Result(property = "password", column = "PASS_WORD"),
		@Result(property = "firstname", column = "FIRST_NAME"),
		@Result(property = "lastname", column = "LAST_NAME"),
		@Result(property = "mi", column = "MI"),
		@Result(property = "email", column = "EMAIL"),
		@Result(property = "contactno", column = "CONTACT_NO"),
		@Result(property = "address", column = "ADDRESS"),
		@Result(property = "ccno", column = "CCNO")
	})
	public User getUserById(int id,int id2);
}
