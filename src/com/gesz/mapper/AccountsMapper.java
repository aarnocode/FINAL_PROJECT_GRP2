package com.gesz.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Select;


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
			+ " VALUES (#{arg0},#{arg1},#{arg2},#{arg3},#{arg4},#{arg5},#{arg6},#{arg7},#{arg8},#{arg9})")
	public Integer RegisterUser(
				String userid,
				String firstname,
				String lastname,
				String mi,
				String username,
				String password,
				String email,
				String contactno,
				String address,
				String isAdmin
			);
	
	
}
