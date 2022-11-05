const { deterministicPartitionKey, deterministicPartitionKey_v2 } = require("./dpk");

const event1 = null
const event2 = { }
const event3 = { 'partitionKey': 123 }
const event4 = { 'partitionKey': '123456' }
const event5 = { 'paritionKey': { 'name': 'mark'  } };
const event6 = { 'partitionKey': 'dpktest' }
const event7 = { partitionKey: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' }

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for input: empty", () => {
    expect(deterministicPartitionKey(event1)).toBe(deterministicPartitionKey_v2(event1))
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for input: { }", () => {
    expect(deterministicPartitionKey(event2)).toBe(deterministicPartitionKey_v2(event2))
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for input: { 'partitionKey': 123 }", () => {
    const trivialKey = deterministicPartitionKey();
    expect(deterministicPartitionKey(event3)).toBe(deterministicPartitionKey_v2(event3))
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for input: { 'partitionKey': '123456' } ", () => {
    const trivialKey = deterministicPartitionKey();
    expect(deterministicPartitionKey(event4)).toBe(deterministicPartitionKey_v2(event4))
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for input: { 'paritionKey': { 'name': 'mark'  } }", () => {
    const trivialKey = deterministicPartitionKey();
    expect(deterministicPartitionKey(event5)).toBe(deterministicPartitionKey_v2(event5))
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for input: { 'partitionKey': 'dpktest' }", () => {
    const trivialKey = deterministicPartitionKey();
    expect(deterministicPartitionKey(event6)).toBe(deterministicPartitionKey_v2(event6))
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for input: { partitionKey: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' }", () => {
    const trivialKey = deterministicPartitionKey();
    expect(deterministicPartitionKey(event7)).toBe(deterministicPartitionKey_v2(event7))
  });
});