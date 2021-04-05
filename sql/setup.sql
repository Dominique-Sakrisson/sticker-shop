DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item_id VARCHAR(6),
  item_name VARCHAR(50),
  item_price DOUBLE PRECISION,
  quantity INTEGER CHECK (quantity > 0)
);
-- CREATE TABLE items (
--   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   item_id VARCHAR(6),
--   item_name VARCHAR(50),
--   item_price DOUBLE PRECISION,
--   quantity INTEGER CHECK (quantity > 0)
-- )
