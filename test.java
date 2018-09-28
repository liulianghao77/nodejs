package com.testada 

import java.util.List;
import com.sun.jmx.snmp.ThreadContext;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import jdk.nashorn.internal.runtime.arrays.ArrayData;
/**
 * Hello world!
 *
 */

public class App {
	private static ApplicationContext ctx;
	static {
		//查看 项目 classpath
		System.out.println(System.getProperty("java.class.path"));
		ctx=new ClassPathXmlApplicationContext("config/applicationContext.xml"); //applicationContext  Configuration
	}
	public static void main(String[] args) {
		String asd;
	}
}