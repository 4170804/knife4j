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


package com.github.xiaoymin.knife4j.spring.gateway.discover.router;

import com.github.xiaoymin.knife4j.spring.gateway.Knife4jGatewayProperties;
import com.github.xiaoymin.knife4j.spring.gateway.discover.ServiceRouterHolder;
import com.github.xiaoymin.knife4j.spring.gateway.enums.GatewayRouterStrategy;
import com.github.xiaoymin.knife4j.spring.gateway.utils.ServiceUtils;
import com.github.xiaoymin.knife4j.spring.gateway.utils.StrUtil;
import io.netty.util.internal.StringUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;

import java.util.Map;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2023/8/3 16:02
 * @since knife4j v4.3.0
 */
@AllArgsConstructor
@Slf4j
public class DiscoverClientRouteServiceConvert extends AbstactServiceRouterConvert {
    
    final DiscoveryClientRouteDefinitionLocator discoveryClientRouteDefinitionLocator;
    final Knife4jGatewayProperties knife4jGatewayProperties;
    @Override
    public void process(ServiceRouterHolder holder) {
        // 取默认子服务的路径规则
        discoveryClientRouteDefinitionLocator.getRouteDefinitions().filter(routeDefinition -> ServiceUtils.startLoadBalance(routeDefinition.getUri()))
                .filter(routeDefinition -> ServiceUtils.includeService(routeDefinition.getUri(), holder.getService(), holder.getExcludeService()))
                .subscribe(routeDefinition -> parseRouteDefinition(holder, this.knife4jGatewayProperties.getDiscover(), routeDefinition.getPredicates(), routeDefinition.getId(),
                        routeDefinition.getUri().getHost()));
    }
    
    @Override
    String convertPathPrefix(Map<String, String> predicateArgs) {
        String value = predicateArgs.get(GatewayRouterStrategy.REACTIVE.getRule());
        if (StrUtil.isNotBlank(value)) {
            return value.replace("**", StringUtil.EMPTY_STRING);
        }
        return StringUtil.EMPTY_STRING;
    }
    
    @Override
    public int order() {
        return GatewayRouterStrategy.REACTIVE.getOrder();
    }
}