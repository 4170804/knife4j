/*
 * Copyright 2017-2022 八一菜刀(xiaoymin@foxmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package com.github.xiaoymin.knife4j.core.conf;

/***
 *
 * @since  1.9.0
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a> 
 * 2019/02/02 19:57
 */
public class GlobalConstants {
    
    /**
     * HTTP Schema
     */
    public static final String PROTOCOL_HTTP = "http://";
    
    /**
     * HTTPS Schema
     */
    public static final String PROTOCOL_HTTPS = "https://";
    
    /**
     * 空字符串
     */
    public static final String EMPTY_STR = "";
    
    /**
     * Knife4j provider default username with basic auth.
     */
    public static final String BASIC_DEFAULT_USERNAME = "admin";
    
    /**
     * Knife4j provider default password with basic auth.
     */
    public static final String BASIC_DEFAULT_PASSWORD = "123321";
    
    /**
     * Cors max_age
     */
    public static final Long CORS_MAX_AGE = 10000L;
    
    /**
     * 动态生成class包名前缀
     */
    public static final String BASE_PACKAGE_PREFIX = "com.github.xiaoymin.knife4j.model.";
    
    /**
     * Knife4j增强扩展属性名称
     */
    public static final String EXTENSION_NAME = "extensions";
    
    /**
     * Knife4j增强扩展属性名称
     */
    public static final String EXTENSION_OPEN_API_NAME = "x-openapi";
    
    /**
     * Knife4j增强扩展配置属性
     */
    public static final String EXTENSION_OPEN_SETTING_NAME = "x-setting";
    
    /**
     * Knife4j增强扩展配置属性
     */
    public static final String EXTENSION_OPEN_MARKDOWN_NAME = "x-markdownFiles";
}
