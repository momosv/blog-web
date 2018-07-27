package cn.momosv.blog.web;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Calendar;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BlogWebApplicationTests {

	@Test
	public void contextLoads() {
		Calendar date = Calendar.getInstance();
		//int monthStage = ((int)Math.ceil((date.get(Calendar.MONTH)+1)/3.0))*3;
		date.set(Calendar.MONTH, 12);
		date.set(Calendar.DAY_OF_MONTH,1);
		date.add(Calendar.DAY_OF_MONTH,-1);
	}

}
