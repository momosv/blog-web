package cn.momosv.blog.web.dataSource;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.spring.boot.autoconfigure.DruidDataSourceBuilder;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;
import java.sql.SQLException;

@Configuration
@EnableAutoConfiguration
public class DatasourceConfig {
	private Logger logger = LoggerFactory.getLogger(DatasourceConfig.class);
    @Bean(name="dataSource")
    @Primary //不要漏了这
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource dataSource(){
        DruidDataSource datasource = DruidDataSourceBuilder.create().build();
        try {  
	      /*  datasource.setUrl(this.url);
	        datasource.setDbType(dbType);
	        datasource.setUsername(username);  
	        datasource.setPassword(password);  
	        datasource.setDriverClassName(driverClassName);  
	        datasource.setInitialSize(initialSize);  
	        datasource.setMinIdle(minIdle);  
	        datasource.setMaxActive(maxActive);  
	        datasource.setMaxWait(maxWait);  
	        datasource.setTimeBetweenEvictionRunsMillis(timeBetweenEvictionRunsMillis);  
	        datasource.setMinEvictableIdleTimeMillis(minEvictableIdleTimeMillis);  
	        datasource.setValidationQuery(validationQuery);  
	        datasource.setTestWhileIdle(testWhileIdle);  
	        datasource.setTestOnBorrow(testOnBorrow);  
	        datasource.setTestOnReturn(testOnReturn);  
	        datasource.setPoolPreparedStatements(poolPreparedStatements);  
            datasource.setFilters(filters);
            datasource.setRemoveAbandoned(true);*/
        //    datasource.setUseGlobalDataSourceStat(true);
        } catch (Exception e) {
            logger.error("druid configuration initialization filter", e);  
        }  
        return datasource;  
    }
    /////////  下面是druid 监控访问的设置  /////////////////  
    @Bean  
    public ServletRegistrationBean druidServlet() {  
        ServletRegistrationBean reg = new ServletRegistrationBean();  
        reg.setServlet(new StatViewServlet());  
        reg.addUrlMappings("/druid/*");  //url 匹配  
      //  reg.addInitParameter("allow", "192.168.16.110,127.0.0.1"); // IP白名单 (没有配置或者为空，则允许所有访问)  
      //  reg.addInitParameter("deny", "192.168.16.111"); //IP黑名单 (存在共同时，deny优先于allow)  
        reg.addInitParameter("loginUsername", this.druidLoginName);//登录名  
        reg.addInitParameter("loginPassword", this.druidPassword);//登录密码  
        reg.addInitParameter("resetEnable", "false"); // 禁用HTML页面上的“Reset All”功能  
        return reg;  
    }  
  
    @Bean(name="druidWebStatFilter")  
    public FilterRegistrationBean filterRegistrationBean() {  
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();  
        filterRegistrationBean.setFilter(new WebStatFilter());  
        filterRegistrationBean.addUrlPatterns("/*");  
        filterRegistrationBean.addInitParameter("exclusions", "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*"); //忽略资源  
        filterRegistrationBean.addInitParameter("profileEnable", "true");  
        filterRegistrationBean.addInitParameter("principalCookieName", "USER_COOKIE");  
        filterRegistrationBean.addInitParameter("principalSessionName", "USER_SESSION");  
        return filterRegistrationBean;  
    }


  /*  @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.db-type}")
    private String dbType;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.name}")
    private String name;

    @Value("${spring.datasource.password}")
    private String password;

    @Value("${spring.datasource.driver-class-name}")
    private String driverClassName;

    @Value("${spring.datasource.initialSize}")
    private int initialSize;

    @Value("${spring.datasource.minIdle}")
    private int minIdle;

    @Value("${spring.datasource.maxActive}")
    private int maxActive;

    @Value("${spring.datasource.maxWait}")
    private int maxWait;

    @Value("${spring.datasource.timeBetweenEvictionRunsMillis}")
    private int timeBetweenEvictionRunsMillis;

    @Value("${spring.datasource.minEvictableIdleTimeMillis}")
    private int minEvictableIdleTimeMillis;

    @Value("${spring.datasource.validationQuery}")
    private String validationQuery;

    @Value("${spring.datasource.testWhileIdle}")
    private boolean testWhileIdle;

    @Value("${spring.datasource.testOnBorrow}")
    private boolean testOnBorrow;

    @Value("${spring.datasource.testOnReturn}")
    private boolean testOnReturn;

    @Value("${spring.datasource.poolPreparedStatements}")
    private boolean poolPreparedStatements;

    @Value("${spring.datasource.filters}")
    private String filters;*/

    @Value("${spring.datasource.druidLoginName}")
    private String druidLoginName;

    @Value("${spring.datasource.druidPassword}")
    private String druidPassword;
}  

