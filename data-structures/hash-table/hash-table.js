class HashTable {
  // This hash table implementation uses linear probing to 
  // resolve collisions: https://en.wikipedia.org/wiki/Linear_probing
  constructor(size = 32) {
    this.table = Array(size).fill(null);
  }

  hash(key) {
    // Naïve hash function that adds all character codes in the key
    const hash = [...key].reduce((acc, letter) => acc + letter.charCodeAt(0), 0);
    return hash % this.table.length;
  }

  add(key, value) {
    let hash = this.hash(key);

    // Check if the hash is already in the table
    // and incremement it (linear probing) if it is
    while (this.table[hash] !== null && this.table[hash][0] !== key) {
      hash = (hash + 1) % this.table.length;
    }

    // Insert the key or update the exisitng value
    this.table[hash] = [key, value];
  }

  exists(key) {
    let hash = this.hash(key);

    // The hash doesn't exist in the table
    if (this.table[hash] === null) {
      return false;
    }

    // Handle possible collisions by seeing if the hash
    // exists and has a different key than the one provided
    while (this.table[hash] !== null && this.table[hash][0] !== key) {
      hash = (hash + 1) % this.table.length;
    }

    return this.table[hash][0] === key;
  }

  get(key) {
    let hash = this.hash(key);

    // Handle possible collisions by seeing if the hash
    // exists and has a different key than the one provided
    while(this.table[hash] !== null && this.table[hash][0] !== key) {
      hash = (hash + 1) % this.table.length;
    }

    // Return the value if found
    return this.table[hash] && this.table[hash][0] === key
      ? this.table[hash][1]
      : undefined;
  }

  remove(key) {
    let hash = this.hash(key);

    while(this.table[hash] !== null && this.table[hash][0] !== key) {
      hash = (hash + 1) % this.table.length;
    }

    if (this.table[hash][0] === key) {
      this.table[hash] = null;
    }
  }
}

module.exports = HashTable;
