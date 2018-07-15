package cn.momosv.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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
}
