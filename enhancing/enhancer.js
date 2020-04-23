module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return {
    ...item,
    enhancement: Math.min(item.enhancement + 1, 20),
  };
}

function fail(item) {
  return {
    ...item,
    durability: item.durability - (item.enhancement < 15 ? 5 : 10),
    enhancement: item.enhancement - (item.enhancement > 16 ? 1 : 0),
  };
}

function repair(item) {
  return {
    ...item,
    durability: 100,
  };
}

function get(item) {
  const prefix = item.enhancement > 0 ? `[+${item.enhancement}] ` : ``;
  return {
    ...item,
    name: prefix + item.name
  };
}
