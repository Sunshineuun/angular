## Angular and SpringBoot 跨域问题解决方式

### 实现
#### 服务器端
```
@Configuration
public class CORSConfiguration {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedHeaders("*")
                        .allowedMethods("*")
                        .allowedOrigins("*");
            }
        };
    }
}
```
#### 客户端-Angular
1.配置：在angular项目根目录下创建：proxy.config.json
proxy.config.json文件：
```
{
  "/":{
    "target":"http://127.0.0.1:8080"
  }
}

"/"：代表后台项目路径
"target":"http://127.0.0.1:8080"  指明访问地址
```
2.修改package.json 为
```
"scripts": {
    "ng": "ng",
    "start": "ng serve  --proxy-config proxy.config.json",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
```
