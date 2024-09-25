import XEClipboard from "xe-clipboard";
import {message} from "ant-design-vue";

const copy = (text) => {
    XEClipboard.copy(text)
    message.info('复制成功');
}

export {
    copy,
}
