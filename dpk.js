const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

/**
Possible cases:
1. event is null
2. event.partitionKey is null
3. event.partitionKey is a string | number | object
4. event.partitionKey length < 256
5. event.partitionKey length >= 256
*/


function getCandidate(event) {
  if (event.partitionKey) {
    return event.partitionKey;
  }

  const data = JSON.stringify(event);
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

function getCandidateAsString(event) {
  const candidate = getCandidate(event);
  if (typeof candidate == "string") {
    return candidate;
  }
  return JSON.stringify(candidate);
}

exports.deterministicPartitionKey_v2 = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const candidate = getCandidateAsString(event);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};