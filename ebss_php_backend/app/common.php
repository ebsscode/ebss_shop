<?php

use app\service\db\BaseDao;

function table($table){
    return BaseDao::instance($table)->initTable();
}
function getAliPayOptions($platform=null)
{
    //开发文档 https://github.com/alipay/alipay-easysdk/tree/0b0f31d7f901b43031531fe241ff1bf0db668fb5/php
    $options = new \Alipay\EasySDK\Kernel\Config();
    $options->protocol = 'https';
    $options->gatewayHost = 'openapi.alipay.com';
    $options->signType = 'RSA2';

    if($platform=='app'||$platform=='2021004105679021'){
        $options->appId = '2021004105679021';
        $options->merchantPrivateKey = 'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCEnzbxpLzkQtu6WFzfylh/1EjKmPXT3gMjXie5Q5cOPpoxwQkGA9RZey/lkhPo7fAf/KhXBM2jdbZqf6rXSwOQeDpgquqNISBxD8wQjNtKpz1K0zEB5gX/9JEPnQdeNBX6YjuFYx08zi/buO2FZYnpIOJB5Me1QlXRUSkwdaW1PRht3FP6hn6TOmNa9L/FHp6CHILqyEynsojXDhjjK33+YGW8S8/NXFNKwkTku19KEqkBHPiak69hZKffxTnf+Clda/o/FgB7YUCgV136qf8O+ZokMVIMm21pGj5vFUNZxEBeA04N4Y59SWCRhyGN1Ckcgr6u+oXU1S/jz4tillPTAgMBAAECggEAG/0Z9F9m+eleQ/J4D0a97KRZhGBJqR/2m5U4XvHzxC7UDeIGTH2saAIGdrWgfA0TGz0QLeU2nOOvzsQIwwzywJ+O+m23uHcgSJwj3e5MLXIkDlGJyzPHWmA76Qaj0m69oKzwkNL9DaMaGI3rmrZ2J3woI+3rc8Z/JACz56U8hoYDa3qVU8jWlZuj4K6JIl/wbA3T1owlPx/3SnOz77sujAxOvr2npIzNbnLhOdqr/ziAISV2taafKy+gI0PwygYzr/6amJClz4/EdwDcclZ9qi1znwsLgbHEqboYmpxlsnWxZ/fB/hpbpojYbz6pJIoLshnFc1bJsfeMwzoECG4Q2QKBgQDCLDsUwx+i3ojjN37RVGjbEjYpUW44GcYqLTQwsAg8YQxfn3of1zbpTupDJC+VVgqKhV/QW1Znhi165sReXP6PB1DaspXX6BnlCYxahvBt3J6tKeEzXJtQHs2c7UMMKzMl8RYtW752vzHin83j4CFDsEoCFkeM0YeC/nOQHmFYXwKBgQCu2bzr9JlmXjuk0VPzt4/JUrmKlfcKql4xflFbnWDGiwHBKkSRB2gtROTEArMa5U7Hz8JqnmOGH+giuHqgzR9w30pUQn8dcos69i7haPjjDN87mHFaJMm/FoihpGCxeXdSjS9Htzh5sedQMB29CUdREbjF1JvaqZXGBFkD5uaJDQKBgHCmxKgpBEOzo+tfGP5NYIAosq+KBM4bdfKmQy80EbMmAs2/clTiwYLeO980MT8MqhTviEUTmK97EwvIsoiknzNP5ULcdT7L86oDviAPRZIXex+vum3X/mufU18F7+4xaf1LP7iVD41JI6H9YLAiKmpg7q8DSgOS1HHVOiqU1Zk1AoGAcUmGTGL4mQjpIAq4mCoQsWI18QLlQzXLPcoYMIGxWDJseplGP6lK6DnA9vbA0OZNusxzrNzeouI9Z3GbkmAUxO8Hm7xR2+SBLTygd0+qIoIOiPBmUP+Q74xMDl8QfyyyEPyE67RclQydUKk8O2StnmsbCqKMMIq8DcZ3Xj3WlGkCgYALhde909KimpUFie9nZeQCLvAObKT4w2P1zCp1Eo4k7915Bi3pb51NIdhBKt9LZwlgHVGf3fInE4N1yYPp6j3SSu0csMXjdctpkYMAcj8qfjY2pjhjx5Up25wWVDpXIvJvXfaUdJrVUfJtuk+LADSch9jbNioUDoHTND4ON3g96w==';
        $options->alipayPublicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm/De5ku9FHEhnJ6KmAYwRyZijcVFruLe5lAKaksi53iTogVrPBta7pOEbSubR2uImaBPGmtlWkdjR5h8DHR+4f6TMPErGLE8Ydnk+wH2m44B9r+XV2Rbnovybtmug1t6KGA0DGBWlAzPv0AAPmJ6/Y/zqIsbO4B0SVIz1V7WIC6Ic4PIFvMWfnHgmO0M/K0NV4+13vEJlIitHXpoJfVqPOnhL4YZZQkxKpESqVcOLhFhSPgWjaZb0h2eBwynf3rqn/lZjYU2A2gDh1Ei1e0bNNks2Rj5Ztp/88sglEos+W6RQ/vg/XilftRUulivUI2vCdrJsYnDZb6h/XUYYrPnAwIDAQAB';
    }
    if($platform=='miniapp'||$platform=='2021004105629022'){
        $options->appId = '2021004105629022';
        $options->merchantPrivateKey = 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDkU7gJjblDDvs+QzDzb2yQsotOWHVqrHJKYW117KKPBB3eCIOZE4dqQVyxb5utH+Jq3O9p864kGXn2dRY5Otlh3AKOYxex9KZPuEp3uO7wVJUv2ssj66eWu2mEIB9Cvj2S/ifqXq3IGDEN5AOI6O0zQ6bpqPYwzkc9UWUyxHWuiulNowshVA/j7GuWjx+3A26U5A0gl8cqSrBG+IV9+LlpoAsoEzF6XSEhHreRqvlIUymkNc8oXVFWCynWrNK9UDIyv1MC9sP/x2s6w7Ts4mxlVNoED7Ipu110NOWYfGW8JAhbj99ntEWC9HUql8lUpnhpodN8MxYZlwImo2Z9nZX9AgMBAAECggEBAKtyvd/WnsVe64OuOoShJ3ljyD0VKV3njY6Sp/oDrXEMm0zNQdvhES7VU8Ac2V3fckniCpiZlSqgQrew5fYlXXQhG35FpFZJKdT0wl4x7KFkMf4UIbOgUWBa6/l9kVuxtFS7KcfQPlfg6nzOuWTF2s9CvoP4Dp1JV68Qfpfnc6KSWvfoiM3NPBdoKphrwnYso+OXLjaMv6mNPBkaAqpyyo4q5na2ebZzfJYNQVbDIpzIWc4xWLOCLQAMHuUiJXXLuMRvHFD0ePUv+2zlv2facvkxxgO2C+5Q179HZ1Gcwty3kLy4AP56Xc427E4kRgQviY8AjAztJaTKoEodfsWTPfUCgYEA/Npd53Fjhm9k4mqMK0i261c84jCw/fET86GQOmmCHAO3K5C1cDOhACGpWuG4gBDmYEXUf+1xrBjetymvrHpkobPgcmAOHJyGY+inc5KhcIb4CUb+qW8xEM9oWNTHZTuL5xVRWvQm57mEjOgHH9OR3eKKIYkQ1ugqLZ1iUVIvqycCgYEA5ys1R5xzzpfDCDgwErkUEICagGyogBSfc5oSTHtrs2ndt4LdeCFPXQmfyHbOETzR2DJunJ4AB6FO2YO3HFNiQ0UPeLQXp7pFCUWr2NLoGhQ4mkEpsaDSgQnen78vnjDVZyxizwP/KnBw8z8aSatAPXWjlY86BHY4qcq76j3cPDsCgYBoQmY7+44tLZtsnMBlTJtYGOWa4rboTtKKP9EntL+Ya5PIm+ekdzVox3h8Z9xauh00Dzca9L5NVwfmgILWXLVH09K1dpP7CjOD2LfLOOfmbVCzCpoRJS8XHl6JWltJi68ZProIBepQ3Dcinr3pSqS32CRaxZiy9JIHswCKRZgwOwKBgH0uL7bsqOWJ1wo/awDoik35ZjD/Jivdfw8ZsqkJ+KN6Q58ZVZa06wYlrQngE+zPs47QmIdlI/z9w/YT1neXS9HDtwIU++5O9w1zVgCfDSL6KkCV4t8WiIdp8c0tubp/FUC+j28s6eNwaim+1RxpiOr/JitaGP/LiRmg+Ct7fiR7AoGALFFoJ9oWTN3uN+uVdsjj3KoNqmvCIaTH8O0LymrAz96VkL+uO6AM984VVOLIZ/VppSkgWRO1flNNqz/Am/ULCNYm0C2vutRememAL3OHq6RblyqMtqM4M1OQooT6elQRzUYy9OdpXTXcGRA7iaa98eNNuwl+H2YKHDQL6CK/ELc=';
        $options->alipayPublicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm/De5ku9FHEhnJ6KmAYwRyZijcVFruLe5lAKaksi53iTogVrPBta7pOEbSubR2uImaBPGmtlWkdjR5h8DHR+4f6TMPErGLE8Ydnk+wH2m44B9r+XV2Rbnovybtmug1t6KGA0DGBWlAzPv0AAPmJ6/Y/zqIsbO4B0SVIz1V7WIC6Ic4PIFvMWfnHgmO0M/K0NV4+13vEJlIitHXpoJfVqPOnhL4YZZQkxKpESqVcOLhFhSPgWjaZb0h2eBwynf3rqn/lZjYU2A2gDh1Ei1e0bNNks2Rj5Ztp/88sglEos+W6RQ/vg/XilftRUulivUI2vCdrJsYnDZb6h/XUYYrPnAwIDAQAB';
    }
    if($platform=='web'||$platform=='2021004103601008'){
        $options->appId = '2021004103601008';
        $options->merchantPrivateKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMx2ioMp/PVl47lnW0SLioFBKQ+/xctFEUlVKlefGU1eFqlb9AjgHJ3Iy7ZQ59tKjG8o6kglGoymHeyb/wGoWQggG16oatYe+aVpAKkR0fFF/vRxmeuQA3FA0Ub98x63CrzE6WLperUn7ogH3Ly2EjS4mU0y1EGJHU/6p/ixlj+u3aIHOHrCCTRxMXhRFkUXAVYrlzbO9qtjjUklFdwHXCn71AZ+qRqFbUtj8gFbkk9+O5IxTztGE8dQlRh6SnVV7/vI8i1ACGDp+rb1WAlFimdKlk5Qxq1D3/vzhmOnF43PkFrYus0WEkXeMkPS/lazCRA5OdhbcL3tpXbZ1+M3ftAgMBAAECggEADkheQVT+lnyEqA1PelqUHoz/2oLo0CJ3gUME96uwsNvWFBQLudntwAGVA0ECKLxgBThHwKuiPG6ZMuvJalq/NBwNOH36FL++8XnWJBaI/HD0XAEOhWaL4EuSufkvjRDJ1AG0/X6Ub4uadGb53yv5Q3fySaINBzHbggqu/qRaCgIHd3MSMe7b6IRsAmgFa1mE+7tlIdMvsFUbCIcp7GVxlQ230dUdZ0Qyq+Qe4VXaaY2S+Z9sNaG4uqOI73XQaFQZjUPfLmBYfpTKkVo46bNZ858WvMCwNhAv8McSPpkPp5og5wtA1vR10UTYsPf78BQvXYbUEdF6LmAwMqpsZ46GYQKBgQDxLXuB+9i7ZqMIJX7Sis/TTl4fzGVICKXnSWJfHdKwGly0SWEH6aYnW6MuB0zB7HXTITPpi1oLrGoLtnxw+sIvK3x7XvPkHBU15fNjdWM+daWMgsFf0opW7nM5xBetNT7T7ein9OiUgoVCFlAD+MqtipkHcU7jqrUCSb3KjZx1hQKBgQDZXUE31SI0F7t6vdNnCmb9w7FFodwNkEeTQiU5WFOXQc+6MNP2oPllZqkPyH0JZlI07gxNO1QY8d6L2/fGgwvw29fh6BTRtQFbib0CO8ogzQFirL4VK6wUYLYt65j6xq6jYAHUatRQbYAH8kctYH63PPRX09z+Sa0zPPn4k5GxSQKBgQDFY5pAKmWaC0jHtBh2LRInOW6jy9/g8uMFxvPyMTBs3Uaeb6gwl7RbZg7J70ONPAC7CeO480qBX11ztKlotnMTtB2vw2kNe0aI1Gk9L6hISHVz6NhnmqOKvqIj1zAhnQCM55yRSkrIsYJrMmPOvGL1YggZJU2R2/dFpiDllL1HGQKBgQCbXajMO6/jBEOhjCWbNThAkqwXVYZwu3wtqc3pm1TEfOn58ATR+GXLMQIOogOdwGFqK+znF00ZN2kXFveYEPtsAffhJX4cFwENaPqMqifkIiSnX0nO4BRzzFzrnccPGQyjAnDMYD+57UriYy61JI/uccdFL856hDcktKUIJJKy4QKBgEOwU85QGgVv+UUaN1oOLMurtksmzPOR1BySsBSnmRBSLAQn+hm0QKUzx8AdO+lXdCn3eOTbbgPUjfZDSdFxFGDnjhukAXG/0/qlsNh3CHGwM6rztY6RDHMdjuD66/2PTLmyPUhUMuFMMcE7B4wKvdmwMmp758gwyzxEEv1zf2oL';
        $options->alipayPublicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm/De5ku9FHEhnJ6KmAYwRyZijcVFruLe5lAKaksi53iTogVrPBta7pOEbSubR2uImaBPGmtlWkdjR5h8DHR+4f6TMPErGLE8Ydnk+wH2m44B9r+XV2Rbnovybtmug1t6KGA0DGBWlAzPv0AAPmJ6/Y/zqIsbO4B0SVIz1V7WIC6Ic4PIFvMWfnHgmO0M/K0NV4+13vEJlIitHXpoJfVqPOnhL4YZZQkxKpESqVcOLhFhSPgWjaZb0h2eBwynf3rqn/lZjYU2A2gDh1Ei1e0bNNks2Rj5Ztp/88sglEos+W6RQ/vg/XilftRUulivUI2vCdrJsYnDZb6h/XUYYrPnAwIDAQAB';
    }

    //可设置异步通知接收服务地址（可选）
    $options->notifyUrl = request()->domain() . '/index/notify/alipay';
    return $options;
}
function decodeJson($v){
    return json_decode($v,true);
}
function encodeJson($v){
    return json_encode($v,JSON_UNESCAPED_UNICODE);
}

function getTree($list, $root = 0, $pk = 'id', $pid = 'parent_id', $child = 'children')
{
    // 创建Tree
    $tree = array();
    if (is_array($list)) {
        // 创建基于主键的数组引用
        $refer = array();
        foreach ($list as $key => &$data) {
            $data[$child]=[];
            $refer[$data[$pk]] = &$list[$key];
        }
        unset($data);

        foreach ($list as $key => $data) {
            // 判断是否存在parent
            $parentId = 0;
            if (isset($data[$pid])) {
                $parentId = $data[$pid];
            }
            if ((string)$root == $parentId) {
                $tree[] = &$list[$key];
            } else {
                if (isset($refer[$parentId])) {
                    $parent = &$refer[$parentId];
                    $parent[$child][] = &$list[$key];
                }
            }
        }
    }
    return $tree;
}