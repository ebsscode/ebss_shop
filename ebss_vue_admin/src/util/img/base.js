import {Modal} from "ant-design-vue";

const imgPreview = (img) => {
    const modal = Modal.success({
        title: `${img}`,
        content: `${img}`,
    });
}

export {
    imgPreview,
}
