// collections.js does not come with vanilla JS you have to install it using npm
const Deque = require('collections/deque');

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// breadth first search
// function tree_min_value(root) {
//     let queue = new Deque(([root]))
//     let min = root.val

//     while (queue.length > 0) {
//         let current = queue.shift();
//         if (current.val < min) {
//             min = current.val
//         }

//         if(current.left) queue.push(current.left);
//         if(current.right) queue.push(current.right);
//     }
//     return min;
// }

// recursive
function tree_min_value(root) {
    if (!root) return Infinity;
    let leftBranch = tree_min_value(root.left);
    let rightBranch = tree_min_value(root.right);
    return Math.min(root.val, leftBranch, rightBranch)
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(-2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(tree_min_value(a)) //2