/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root){
      return 0;
    }

    const queue = [];
    queue.push([this.root, 1]); 

    while(queue.length > 0){
      let node = queue.shift();
      if(!node[0].left && !node[0].right){
        return node[1]; 
      }

      if(node[0].left){
        queue.push([node[0].left, node[1] + 1]);
      }
      if(node[0].right){
        queue.push([node[0].right, node[1] + 1]);
      }

    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root){
      return 0;
    }

    const queue = [];
    queue.push([this.root, 1]); 
    let max = 1; 

    while(queue.length > 0){
      let node = queue.shift();

      if(node[0].left || node[0].right){
        if(node[1] + 1 > max){
          max = node[1] + 1; 
        }
      }

      if(node[0].left){
        queue.push([node[0].left, node[1] + 1]);
      }
      if(node[0].right){
        queue.push([node[0].right, node[1] + 1]);
      }

    }
    return max; 
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root){
      return 0; 
    }
    let max = null;
    let stack = []; 
    stack.push(this.root); 
    while(stack.length > 0){
      let node = stack.pop(); 
      let val = _maxSum(node); 
      if(max === null || val > max){
        max = val;
      }
      
      if(node.left){
        stack.push(node.left);
      }
      if(node.right){
        stack.push(node.right);
      }

    }
    return max;       

    function _maxSum(node){
      let stack = []; 
      let max = node.val;

      let left = node.left; 
      let right = node.right; 
      if(left){
        let val = node.val + left.val + ((right && right.val > 0) ? right.val : 0);
        stack.push([left, val]);
        if(val > max){
          max = val;
        }        
      }
      if(right){
        let val = node.val + right.val + ((left && left.val > 0) ? left.val : 0);
        stack.push([right, val]);
        if(val > max){
          max = val;
        }
      }
      
      while(stack.length > 0){
        node = stack.pop(); 
        if(!node[0].left && !node[0].right){
          if(node[1] > max){
            max = node[1];
          }
        }

        if(node[0].right){
          stack.push([node[0].right, node[1] + node[0].right.val]); 
        }

        if(node[0].left){
          stack.push([node[0].left, node[1] + node[0].left.val]); 

        }
      }
      
      return max; 
    }
    
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root){
      return null; 
    }

    let stack = [];
    let current = null;  
    stack.push(this.root); 
    while(stack.length > 0){
      let node = stack.pop(); 
      if(node.val > lowerBound){
        if(!current || node.val < current){
          current  = node.val;
        }
      }
      if(node.left){
        stack.push(node.left); 
      }

      if(node.right){
        stack.push(node.right);
      }
    }
    return current;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
