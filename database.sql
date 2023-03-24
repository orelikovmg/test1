
create table customer(
    customer_id serial primary key,
    firstname text,
    lastname text,
    phone text,
    addr text
);

create table orders(
    order_id serial primary key,
    order_number bigint,
    order_description text,
    price numeric,
    order_customer_id integer,
    foreign key (order_customer_id) references customer(customer_id)
);

CREATE TABLE IF NOT EXISTS public.customer
(
    customer_id integer NOT NULL DEFAULT 'nextval('customer_customer_id_seq'::regclass)',
    firstname text COLLATE pg_catalog."default",
    lastname text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    addr text COLLATE pg_catalog."default",
    CONSTRAINT customer_pkey PRIMARY KEY (customer_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.customer
    OWNER to postgres;


CREATE TABLE IF NOT EXISTS public.orders
(
    order_id integer NOT NULL DEFAULT 'nextval('orders_order_id_seq'::regclass)',
    order_number bigint,
    order_description text COLLATE pg_catalog."default",
    price numeric,
    order_customer_id integer,
    CONSTRAINT orders_pkey PRIMARY KEY (order_id),
    CONSTRAINT customer_fk FOREIGN KEY (order_customer_id)
        REFERENCES public.customer (customer_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orders
    OWNER to postgres;