package com.gesz.mapper;

import java.math.BigInteger;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.gesz.model.User;


public interface AccountsMapper {
	@Select("Select count(user_id) valid from final_project_grp2_user where username = #{arg0} AND pass_word=#{arg1} AND isadmin =1")
	@Result(property="valid",column="valid")
	public int getAdminUser(String username, String password);
	
	@Select("Select Coalesce ((Select user_id valid from final_project_grp2_user where username = #{arg0} AND pass_word=#{arg1} AND isadmin =0),0) valid from dual")
	@Result(property="valid",column="valid")
	public int getUser(String username, String password);
	
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
	public String verifyEmail(String email);
	
	@Select("SELECT username FROM final_project_grp2_user WHERE username = #{arg0}")
	public String verifyUsername(String username);
	
	@Select("SELECT user_id, username, pass_word, first_name, last_name, mi, email, contact_no, address, ccno FROM final_project_grp2_user WHERE user_id = #{arg0}")
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
		@Result(property = "ccno", column ="CCNO")
	})
	public User getUserById(int id);
	
	@Select("SELECT user_id, username, pass_word, first_name, last_name, mi, email, contact_no, address, ccno FROM final_project_grp2_user WHERE user_id = #{arg0}")
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
	public User getUserByIdWCC(int id);//method for fetching user info w/ ccno
	
	@Select("SELECT CCNO FROM final_project_grp2_user WHERE email = #{arg0}")
	public String getcc(String id);
	//Update Button with Credit Card
	@Update("Update final_project_grp2_user set ccno=#{arg0} where user_id = #{arg1}")
	public int addCCNo(BigInteger ccno,int id);
	//Update Button for no Credit Card
	@Update("Update final_project_grp2_user set first_name=#{arg0}, last_name=#{arg1}, mi=#{arg2}, pass_word=#{arg3}, email=#{arg4}, contact_no=#{arg5}, address=#{arg6} where user_id = #{arg7}")
	public int updateNoCCProfile(String firstname, String lastname, String mi, String password, String email, BigInteger contact_no,String address,int id);
	//Update Button with Credit Card
	@Update("Update final_project_grp2_user set first_name=#{arg0}, last_name=#{arg1}, mi=#{arg2}, pass_word=#{arg3}, email=#{arg4}, contact_no=#{arg5}, address=#{arg6}, ccno=#{arg7}where user_id = #{arg8}")
	public int updateProfile(String firstname, String lastname, String mi, String password, String email, BigInteger contact_no,String address,BigInteger ccno,int id);
}
