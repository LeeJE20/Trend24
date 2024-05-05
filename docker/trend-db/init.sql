-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS trend
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- 생성된 데이터베이스 사용
USE trend;

create table IF NOT EXISTS trend.admin
(
    id           int auto_increment
        primary key,
    created_time datetime(6)  null,
    updated_time datetime(6)  null,
    admin_id     varchar(100) null,
    admin_pw     varchar(100) null,
    branch       varchar(100) null,
    layout       tinyint      null,
    name         varchar(100) null
);

create table IF NOT EXISTS trend.book
(
    id                   int auto_increment
        primary key,
    created_time         datetime(6)  null,
    updated_time         datetime(6)  null,
    category_id          varchar(50)  null,
    category_name        varchar(100) null,
    contents             text         null,
    product_id           int          null,
    product_name         varchar(255) null,
    sale_price           int          null,
    search_keyword       varchar(255) null,
    total_click_count    int          null,
    total_order_amount   int          null,
    total_order_count    int          null,
    total_purchase_count int          null
);

create table IF NOT EXISTS trend.book_click
(
    id           int auto_increment
        primary key,
    created_time datetime(6) null,
    updated_time datetime(6) null,
    count        int         null,
    book_id      int         null,
    constraint FKi5f80n3polapytnh6my34vd9m
        foreign key (book_id) references trend.book (id)
);

create table IF NOT EXISTS trend.box
(
    id           int auto_increment
        primary key,
    created_time datetime(6)  null,
    updated_time datetime(6)  null,
    name         varchar(100) null,
    admin_id     int          null,
    constraint FKbfgh7scfjbvhouj4n5g708t05
        foreign key (admin_id) references trend.admin (id)
);

create table IF NOT EXISTS trend.box_book
(
    id           int auto_increment
        primary key,
    created_time datetime(6) null,
    updated_time datetime(6) null,
    book_id      int         null,
    box_id       int         null,
    constraint FK1mxtl6892ojl5qevn46wmiip5
        foreign key (book_id) references trend.book (id),
    constraint FKgua71qmyj0ycj4aocri26m959
        foreign key (box_id) references trend.box (id)
);

create table IF NOT EXISTS trend.daily_recommend
(
    id           int auto_increment
        primary key,
    created_time datetime(6) null,
    updated_time datetime(6) null,
    book_id      int         null,
    constraint FKe0botldy11bmwkn9freitqdwg
        foreign key (book_id) references trend.book (id)
);

create table IF NOT EXISTS trend.platform
(
    id           int auto_increment
        primary key,
    created_time datetime(6)  null,
    updated_time datetime(6)  null,
    name         varchar(100) null
);

create table IF NOT EXISTS trend.tag
(
    id           int auto_increment
        primary key,
    created_time datetime(6)  null,
    updated_time datetime(6)  null,
    topic        varchar(255) null,
    book_id      int          null,
    constraint FK23a8a47o1u9njpmica5ujvpql
        foreign key (book_id) references trend.book (id)
);

create table IF NOT EXISTS trend.thema_code
(
    id           int auto_increment
        primary key,
    created_time datetime(6)  null,
    updated_time datetime(6)  null,
    description  varchar(200) null,
    note         varchar(200) null,
    rerank_score double       null,
    value        varchar(100) null,
    book_id      int          null,
    constraint FKrmvqtc8v5jnv4utqkahg2rvq0
        foreign key (book_id) references trend.book (id)
);

create table IF NOT EXISTS trend.trend_category
(
    id           int auto_increment
        primary key,
    created_time datetime(6)  null,
    updated_time datetime(6)  null,
    code         tinyint      null,
    name         varchar(100) null
);

create table IF NOT EXISTS trend.keyword
(
    id           int auto_increment
        primary key,
    created_time datetime(6)  null,
    updated_time datetime(6)  null,
    click_count  int          null,
    name         varchar(255) null,
    ranking      int          null,
    selected     bit          null,
    category_id  int          null,
    constraint FKkh74d5y871fcn8oh38qc0ky4h
        foreign key (category_id) references trend.trend_category (id)
);

create table IF NOT EXISTS trend.origin_data
(
    id           int auto_increment
        primary key,
    created_time datetime(6) null,
    updated_time datetime(6) null,
    contents     json        null,
    category_id  int         null,
    platform_id  int         null,
    constraint FKarh8i5tw15xv2qnqef3ib2c46
        foreign key (category_id) references trend.trend_category (id),
    constraint FKsgr09xjc0vfuhlpx7b0cwjjae
        foreign key (platform_id) references trend.platform (id)
);

create table IF NOT EXISTS trend.recommend_keyword
(
    id                int auto_increment
        primary key,
    created_time      datetime(6) null,
    updated_time      datetime(6) null,
    keywords_id       int         null,
    recommend_book_id int         null,
    constraint FK6xgbyrsvtket4wp7lqlpcqj97
        foreign key (recommend_book_id) references trend.book (id),
    constraint FKdt541y1xrjny5ur141051plvj
        foreign key (keywords_id) references trend.keyword (id)
);

create table IF NOT EXISTS trend.trend_source
(
    id             int auto_increment
        primary key,
    created_time   datetime(6) null,
    updated_time   datetime(6) null,
    keyword_id     int         null,
    origin_data_id int         null,
    constraint FKrck4xkxy61jqeojgw6ptlw5dg
        foreign key (keyword_id) references trend.keyword (id),
    constraint FKskr0lxk4l37j095yja5jn3vcp
        foreign key (origin_data_id) references trend.origin_data (id)
);
