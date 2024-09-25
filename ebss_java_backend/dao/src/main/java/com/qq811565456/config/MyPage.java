package com.qq811565456.config;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.metadata.OrderItem;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.function.Predicate;

@Data
public class MyPage<T> implements IPage<T> {
    private static final long serialVersionUID = 8545996863226528798L;
    protected List<T> data;
    protected long total;
    protected long per_page;
    protected long current_page;
    protected List<OrderItem> orders;
    protected boolean optimizeCountSql;
    protected boolean searchCount;
    protected boolean optimizeJoinOfCountSql;
    protected Long maxLimit;
    protected String countId;

    public MyPage() {
        this.data = Collections.emptyList();
        this.total = 0L;
        this.per_page = 10L;
        this.current_page = 1L;
        this.orders = new ArrayList<>();
        this.optimizeCountSql = true;
        this.searchCount = true;
        this.optimizeJoinOfCountSql = true;
    }

    public MyPage(long current_page, long per_page) {
        this(current_page, per_page, 0L);
    }

    public MyPage(long current_page, long per_page, long total) {
        this(current_page, per_page, total, true);
    }

    public MyPage(long current_page, long per_page, boolean searchCount) {
        this(current_page, per_page, 0L, searchCount);
    }

    public MyPage(long current_page, long per_page, long total, boolean searchCount) {
        this.data = Collections.emptyList();
        this.per_page = 10L;
        this.current_page = 1L;
        this.orders = new ArrayList();
        this.optimizeCountSql = true;
        this.searchCount = true;
        this.optimizeJoinOfCountSql = true;
        if (current_page > 1L) {
            this.current_page = current_page;
        }

        this.per_page = per_page;
        this.total = total;
        this.searchCount = searchCount;
    }

    public boolean hasPrevious() {
        return this.current_page > 1L;
    }

    public boolean hasNext() {
        return this.current_page < this.getPages();
    }

    public List<T> getRecords() {
        return this.data;
    }

    public MyPage<T> setRecords(List<T> data) {
        this.data = data;
        return this;
    }

    public long getTotal() {
        return this.total;
    }

    public MyPage<T> setTotal(long total) {
        this.total = total;
        return this;
    }

    public long getSize() {
        return this.per_page;
    }

    public MyPage<T> setSize(long per_page) {
        this.per_page = per_page;
        return this;
    }

    public long getCurrent() {
        return this.current_page;
    }

    public MyPage<T> setCurrent(long current_page) {
        this.current_page = current_page;
        return this;
    }

    public String countId() {
        return this.countId;
    }

    public Long maxLimit() {
        return this.maxLimit;
    }

    private String[] mapOrderToArray(Predicate<OrderItem> filter) {
        List<String> columns = new ArrayList<>(this.orders.size());
        this.orders.forEach((i) -> {
            if (filter.test(i)) {
                columns.add(i.getColumn());
            }
        });
        return (String[])columns.toArray(new String[0]);
    }

    private void removeOrder(Predicate<OrderItem> filter) {
        for(int i = this.orders.size() - 1; i >= 0; --i) {
            if (filter.test((OrderItem)this.orders.get(i))) {
                this.orders.remove(i);
            }
        }

    }

    public MyPage<T> addOrder(OrderItem... items) {
        this.orders.addAll(Arrays.asList(items));
        return this;
    }

    public MyPage<T> addOrder(List<OrderItem> items) {
        this.orders.addAll(items);
        return this;
    }

    public List<OrderItem> orders() {
        return this.orders;
    }

    public boolean optimizeCountSql() {
        return this.optimizeCountSql;
    }

    public static <T> MyPage<T> of(long current_page, long per_page, long total, boolean searchCount) {
        return new MyPage<T>(current_page, per_page, total, searchCount);
    }

    public boolean optimizeJoinOfCountSql() {
        return this.optimizeJoinOfCountSql;
    }

    public MyPage<T> setSearchCount(boolean searchCount) {
        this.searchCount = searchCount;
        return this;
    }

    public MyPage<T> setOptimizeCountSql(boolean optimizeCountSql) {
        this.optimizeCountSql = optimizeCountSql;
        return this;
    }

//    public long getPages() {
//        return super.getPages();
//    }

    public static <T> MyPage<T> of(long current_page, long per_page) {
        return of(current_page, per_page, 0L);
    }

    public static <T> MyPage<T> of(long current_page, long per_page, long total) {
        return of(current_page, per_page, total, true);
    }

    public static <T> MyPage<T> of(long current_page, long per_page, boolean searchCount) {
        return of(current_page, per_page, 0L, searchCount);
    }

    public boolean searchCount() {
        return this.total < 0L ? false : this.searchCount;
    }

    public void setOrders(final List<OrderItem> orders) {
        this.orders = orders;
    }

    public void setOptimizeJoinOfCountSql(final boolean optimizeJoinOfCountSql) {
        this.optimizeJoinOfCountSql = optimizeJoinOfCountSql;
    }

    public void setMaxLimit(final Long maxLimit) {
        this.maxLimit = maxLimit;
    }

    public void setCountId(final String countId) {
        this.countId = countId;
    }
}
