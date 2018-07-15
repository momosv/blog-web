//package cn.momosv.blogweb.dataSource;
//
//import org.springframework.beans.propertyeditors.CustomDateEditor;
//import org.springframework.web.bind.WebDataBinder;
//import org.springframework.web.bind.support.WebBindingInitializer;
//import org.springframework.web.context.request.WebRequest;
//
//import java.text.DateFormat;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//
//public class CustomDate implements WebBindingInitializer {
//
//
//  //  2.0
///*   @Override
//    public void initBinder(WebDataBinder binder) {
//       // TODO Auto-generated method stub
//       //转换日期
//       DateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//       binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
//    }*/
////1.x
//    @Override
//    public void initBinder(WebDataBinder webDataBinder, WebRequest webRequest) {
//        // TODO Auto-generated method stub
//        //转换日期
//        DateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        webDataBinder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
//    }
//}
