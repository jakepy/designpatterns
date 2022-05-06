// Loop over objects

const items = [1, 'jacob', false, 4.4]

function Iterator() {
    this.items = items
    this.index = 0
}

// Methods for our iterator
Iterator.prototype = {
    hasNext: function() {
        return this.index < this.items.length
    },
    next: function() {
        return this.items[this.index++]
    }
}

const iter = new Iterator(items)

while(iter.hasNext())
    console.log(iter.next())