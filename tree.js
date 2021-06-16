/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }


  /** sumValues(): add up all of the values in the tree. */

  sumValues(onlyEvens=false, numGreater=false, num=0) {
    let sum = 0; 
    if(!this.root){
      return sum;
    }

    let stack = []; 
    stack.push(this.root); 
    while(stack.length > 0){
      let node = stack.pop();
      if(onlyEvens){
        if(node.val % 2 === 0)
        {
          sum++; 
        }
      } 
      else if(numGreater){
        if(node.val > num){
          sum++; 
        }
      }
      else{
        sum += node.val; 
      }
      if(node.children.length > 0){
        stack.push(...node.children); 
      }
    }        
    return sum; 
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return this.sumValues(true, false);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    return this.sumValues(false, true, lowerBound);
  }
}

module.exports = { Tree, TreeNode };
