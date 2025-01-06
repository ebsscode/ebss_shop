

const paginate = (pageSize = null) =>{
    return {
        current: 1,
        total: null,
        pageSize: parseInt(localStorage.getItem('pageSize')?localStorage.getItem('pageSize'):(pageSize?pageSize:20)),
        showTotal: (total, range) => `当前:${range[0]}-${range[1]}  共:${total} 条`,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['10', '20', '50', '100', '500', '5000'],
    }
}

export {
    paginate
}
