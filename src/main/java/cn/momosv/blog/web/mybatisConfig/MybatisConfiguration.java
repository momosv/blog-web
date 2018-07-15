package cn.momosv.blog.web.mybatisConfig;




import cn.momosv.blog.web.dataSource.SqlPrintInterceptor;
import com.github.pagehelper.PageHelper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.TransactionManagementConfigurer;


import javax.sql.DataSource;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

/**
 * mybatis的相关配置设置
 * @author Jfei
 *
 */

@MapperScan({MybatisConfiguration.BASIC_MAPPER_DAO})
@Configuration
@ConfigurationProperties
@EnableTransactionManagement
public class MybatisConfiguration implements TransactionManagementConfigurer {

        private static Log logger = LogFactory.getLog(MybatisConfiguration.class);

        //  配置类型别名
        @Value("${mybatis-common.type-aliases-package}")
        private   String typeAliasesPackage;
        //  配置mapper的扫描，找到所有的mapper.xml映射文件
         final static String BASIC_MAPPER_DAO="cn.momosv.blog.common.dao";
        @Value("${mybatis-common.mapper-locations}")
        private  List<String> BASIC_MAPPER_LOCATIONS;

        //  加载全局的配置文件
            @Value("${mybatis-common.config-location}")
            private String configLocation;
        //--------------------上面是公共包---------------------


        //  配置mapper的扫描，找到所有的mapper.xml映射文件
        @Value("${mybatis.ext.mapper-locations}")
        private List<String> extMapperLocations;

        @Autowired
        private DataSource dataSource;

        // 提供SqlSeesion
        @Bean(name = "sqlSessionFactory")
        @Primary
        public SqlSessionFactory sqlSessionFactory() {
            try {
                SqlSessionFactoryBean sessionFactoryBean = new SqlSessionFactoryBean();
                sessionFactoryBean.setDataSource(dataSource);
                // 读取配置 
                sessionFactoryBean.setTypeAliasesPackage(typeAliasesPackage);
                
                //设置mapper.xml文件所在位置
                BASIC_MAPPER_LOCATIONS.addAll(extMapperLocations);
                List<Resource> rL = new ArrayList<>();
                for (String mapperLocation : BASIC_MAPPER_LOCATIONS) {
                    Resource[] resources = new PathMatchingResourcePatternResolver().getResources(mapperLocation);
                    rL.addAll(Arrays.asList(resources));
                }
                sessionFactoryBean.setMapperLocations(rL.toArray(new Resource[rL.size()]));
             //设置mybatis-config.xml配置文件位置
                sessionFactoryBean.setConfigLocation(new DefaultResourceLoader().getResource(configLocation));

                //添加分页插件、打印sql插件
                Interceptor[] plugins = new Interceptor[]{pageHelper(),sqlPrintInterceptor()};
                sessionFactoryBean.setPlugins(plugins);
                
                return sessionFactoryBean.getObject();
            } catch (IOException e) {
                logger.error("mybatis resolver ws-mapper*xml is error",e);
                return null;
            } catch (Exception e) {
                logger.error("mybatis sqlSessionFactoryBean create error",e);
                return null;
            }
        }

        @Bean
        public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {
        	return new SqlSessionTemplate(sqlSessionFactory);
        }
        
        //事务管理
        @Bean(name = "DataSourceTransactionManager")
        public PlatformTransactionManager annotationDrivenTransactionManager() {
            return new DataSourceTransactionManager(dataSource);
        }



        //将要执行的sql进行日志打印(不想拦截，就把这方法注释掉)
        @Bean
        public SqlPrintInterceptor sqlPrintInterceptor(){
        	return new SqlPrintInterceptor();
        }



        /**
         * 分页插件
         * @return
         */

        @Bean
        public PageHelper pageHelper() {
            PageHelper pageHelper = new PageHelper();
            Properties p = new Properties();
            p.setProperty("offsetAsPageNum", "true");
            p.setProperty("rowBoundsWithCount", "true");
            p.setProperty("reasonable", "true");
            p.setProperty("returnPageInfo", "check");
            p.setProperty("params", "count=countSql");
            p.setProperty("pageSizeZero", "true");//分页尺寸为0时查询所有纪录不再执行分页
            p.setProperty("reasonable", "true");//页码<=0 查询第一页，页码>=总页数查询最后一页
            p.setProperty("supportMethodsArguments", "true");//支持通过 Mapper 接口参数来传递分页参数
            pageHelper.setProperties(p);
            return pageHelper;
        }


}
