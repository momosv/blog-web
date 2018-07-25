package cn.momosv.blog;

import cn.momosv.blog.base.mybatis.model.base.BasicExample;
import cn.momosv.blog.base.mybatis.model.base.Msg;
import cn.momosv.blog.ws.model.TbFriendPO;
import cn.momosv.blog.ws.service.FriendService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.catalina.connector.Connector;
import org.apache.coyote.http11.Http11NioProtocol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.embedded.tomcat.TomcatConnectorCustomizer;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;


@EnableScheduling//定时任务
@EnableAsync // 开启异步任务支持
@EnableCaching //开启缓存
@ConfigurationProperties("application.yml") //接收application.yml中的myProps下面的属性
@RestController
@SpringBootApplication
public class BlogWebApplication extends SpringBootServletInitializer  {


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

/*	implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>
	@Override
	public void customize(ConfigurableServletWebServerFactory factory) {
		((TomcatServletWebServerFactory)factory).addConnectorCustomizers(new TomcatConnectorCustomizer() {
			@Override
			public void customize(Connector connector) {
				Http11NioProtocol protocol = (Http11NioProtocol) connector.getProtocolHandler();
				protocol.setMaxConnections(2000);
				protocol.setMaxThreads(20000);
				protocol.setSelectorTimeout(3000);
				protocol.setSessionTimeout(1800);
				protocol.setConnectionTimeout(1800);
			}
		});
	}*/
}

