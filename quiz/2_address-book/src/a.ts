function fetchItems(): Promise<string[]> {
  // Promise에서 resolve된 값의 타입이 반환 타입으로 들어가야 한다.
  let items = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}

fetchItems();
