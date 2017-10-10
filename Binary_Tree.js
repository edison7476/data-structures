function Tree(root) {
    this.root = null;
}

Tree.prototype.addValue = function(val) {
    // create a Node object
    const node = new Node(val);
    if (!this.root) {
        this.root = node;
    } else {
        this.root.addNode(node);
    }
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

Node.prototype.addNode = function(newNode) {
    // newNode is a Node object
    // `this` is pointing to the Node constructor
    
    // Ignore the same node values
    if (newNode.val < this.val) {
        console.log(`Node value: ${newNode.val} < current node value: ${this.val}`);
        console.log(`Create a "LEFT NODE" of ${newNode.val} on the current node of ${this.val}`);
        console.log('------------------------------');
        this.left ?
        this.left.addNode(newNode) :
        this.left = newNode;  // Let left node to be a Node object
                              // so we preserve the addNode function on the left node
    } else if (newNode.val > this.val) {
        console.log(`Node value: ${newNode.val} > current node value: ${this.val}`);
        console.log(`Create a "RIGHT NODE" of ${newNode.val} on the current node of ${this.val}`);
        console.log('------------------------------');
        this.right ?
        this.right.addNode(newNode) :
        this.right = newNode; // Let right node to be a Node object
                              // so we preserve the addNode function on the right node
    }
}

function createRandomNodes() {
    for (let i = 0; i < 10; i++) {
        // Create 10 nodes with random node value 1 ~ 100
        const nodeValue = Math.floor(Math.random() * 100) + 1;
        tree.addValue(nodeValue);
    }
}

function inOrderTraverse(node) {
    if (node) {
        inOrderTraverse(node.left);
        console.log('node value = ', node.val);
        inOrderTraverse(node.right);
    }   
}

let tree = new Tree();
createRandomNodes();
inOrderTraverse(tree.root);
console.dir(tree);