/*
 * Copyright © 2017-2023 Knife4j(xiaoymin@foxmail.com)
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


package com.github.xiaoymin.knife4j.spring.gateway.spec.v2;

import com.github.xiaoymin.knife4j.spring.gateway.Knife4jGatewayProperties;
import com.github.xiaoymin.knife4j.spring.gateway.spec.AbstractOpenAPIResource;
import lombok.Getter;
import lombok.Setter;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Objects;

/**
 * @author <a href="milo.xiaomeng@gmail.com">milo.xiaomeng@gmail.com</a>
 *     23/02/26 20:43
 * @since gateway-spring-boot-starter v4.1.0
 */
@Setter
@Getter
public class OpenAPI2Resource extends AbstractOpenAPIResource {
    
    private String name;
    private String url;
    private String contextPath;
    private String id;
    
    public OpenAPI2Resource(Integer order, Boolean discovered) {
        super(order, discovered);
    }
    
    /**
     * 基于Router配置对象构建接口Resource
     * @param router Config配置对象
     * @since v4.2.0
     */
    public OpenAPI2Resource(Knife4jGatewayProperties.Router router) {
        super(router.getOrder(), false);
        this.name = router.getName();
        this.url = router.getUrl();
        this.contextPath = router.getContextPath();
        this.id = Base64.getEncoder().encodeToString((router.getName() + router.getUrl() +
                router.getContextPath()).getBytes(StandardCharsets.UTF_8));
    }
    
    /**
     * 基于参数配置构建Resource对象
     * @param url 分组url
     * @param order 排序
     * @param discover 是否服务发现
     * @param groupName 名称
     * @param contextPath 当前contextPath
     * @since v4.2.0
     */
    public OpenAPI2Resource(String url,
                            int order,
                            boolean discover,
                            String groupName,
                            String contextPath) {
        super(order, discover);
        this.name = groupName;
        this.url = url;
        this.contextPath = contextPath;
        this.id = Base64.getEncoder().encodeToString((groupName + url +
                contextPath).getBytes(StandardCharsets.UTF_8));
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OpenAPI2Resource that = (OpenAPI2Resource) o;
        return Objects.equals(getName(), that.getName()) && Objects.equals(getUrl(), that.getUrl()) && Objects.equals(getContextPath(), that.getContextPath()) && Objects.equals(getId(), that.getId());
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(getName(), getUrl(), getContextPath(), getId());
    }
    
}
