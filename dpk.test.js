const { deterministicPartitionKey, deterministicPartitionKey_v2 } = require("./dpk");

const event1 = null
const event2 = { }
const event3 = { 'partitionKey': 123 }
const event4 = { 'paritionKey': { 'name': 'mark'  } };
const event5 = { partitionKey: 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862' }

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for null input: ", () => {
    expect(deterministicPartitionKey(event1)).toBe(deterministicPartitionKey_v2(event1))
  });
});

describe("deterministicPartitionKey", () => {
  it("Testing equality for empty input: ", () => {
    expect(deterministicPartitionKey(event2)).toBe(deterministicPartitionKey_v2(event2))
  });
});

describe("deterministicPartitionKey", () => {
  it("Return has when received an integer input: { 'partitionKey': 123 }", () => {
    expect(deterministicPartitionKey(event3)).toBe(deterministicPartitionKey_v2(event3))
  });
});

describe("deterministicPartitionKey", () => {
  it("Return value of partitionKey when presented: { 'paritionKey': { 'name': 'mark'  } }", () => {
    expect(deterministicPartitionKey(event4)).toBe(deterministicPartitionKey_v2(event4))
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the partion key value if length less than MAX_PARTITION_KEY_LENGTH: { partitionKey: 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862' }", () => {
    const trivialKey = deterministicPartitionKey();
    expect(deterministicPartitionKey(event5)).toBe(deterministicPartitionKey_v2(event5))
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns hashkey of length 128 with out partitionKey", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toHaveLength(128);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns hashkey of length 128 with partitionKey length greater than MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862'});
    expect(trivialKey).toHaveLength(128);
  });
});