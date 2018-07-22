package cn.momosv.blog;

import cn.momosv.blog.circle.model.TbUserPO;
import cn.momosv.blog.common.model.base.BasicExample;
import cn.momosv.blog.common.model.base.Msg;
import cn.momosv.blog.ws.model.TbFriendPO;
import cn.momosv.blog.ws.service.FriendService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;


@EnableScheduling//定时任务
@EnableAsync // 开启异步任务支持
@ConfigurationProperties("application.yml") //接收application.yml中的myProps下面的属性
@RestController
@SpringBootApplication
public class BlogWebApplication extends SpringBootServletInitializer {


	public static void main(String[] args) {
		SpringApplication.run(BlogWebApplication.class, args);
	}

	@RequestMapping("/")
	public String hello(){
		return "hello";
	}

	@Autowired
	FriendService friendService;

	@ResponseBody
	@RequestMapping("/hello")
	public Object addUser() throws Exception {
		TbFriendPO userPO = new TbFriendPO();
		userPO.setId(UUID.randomUUID().toString());
		friendService.insertOne(userPO);
		BasicExample e = new BasicExample(TbFriendPO.class);
		BasicExample.Criteria c= e.createCriteria();
		Page page = PageHelper.startPage(1,5);
		friendService.selectByExample(e);
		PageInfo info = new PageInfo(page.getResult());
		return new Msg().add("page",info);
	}
}
