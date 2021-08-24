import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'normalize.css/normalize.css'

import '@/utils/common.js'

Vue.config.productionTip = false








new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


(function () {


  arr1 = [4, 2, 1, 3, 6, 5]
  arr2 = [1, 2, 3, 4, 5, 6]

  arr1 = ['A', 'B', 'D', 'H', 'I', 'E', 'J', 'C', 'F', 'K', 'G']
  arr2 = ['H', 'D', 'I', 'B', 'E', 'J', 'A', 'F', 'K', 'C', 'G']




  let p1 = p2 = 0,
    e1 = e2 = arr1.length;

  function node(p1, e1, p2, e2) {
    if ((e1 - p1) <= 1) return 1223;
    let el = arr1[p1];
    let index = arr2.indexOf(el);

    console.log(p1, e1, p2, e2, index)
    console.log('root : ' + el);
    let left = arr1[p1 + 1],
      right = arr1[index - p2 + p1 + 1];
    if (p2 >= index) {
      left = null;
    }
    if (e2 <= index) {
      right = null;
    }

    console.log('left: ' + left, 'right: ' + right);

    node(p1 + 1, index - p2 + p1 + 1, p2, index);
    node(index - p2 + p1 + 1, e1, index + 1, e2)
  }

  node(p1, e1, p2, e2)

})()

(function () {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */
  /**
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode}
   * 
   */

  var buildTree = function (preorder, inorder) {
   
    function createNode(ps, pe, is, ie, node = null) {
      // if ((pe - ps) <= 1) return null;
      if((pe - ps) === 0 || (ie - is) === 0) return null;
      if((pe - ps) === 1) return new TreeNode(preorder[ps]);
      let val = preorder[ps],
        lVal = null,
        rVal = null;
      let index = inorder.indexOf(val);
      if (node === null) node = new TreeNode(val);
      if (index+1 < ie) {
        rVal = preorder[index - is + ps + 1];
        node.right = new TreeNode(rVal)
      }
      if (index > is) {
        lVal = preorder[ps + 1];
        node.left = new TreeNode(lVal);
      };
      console.log('root: ' + val, ':::left: '+ lVal, ':::right: ' + rVal)
      createNode(ps + 1, ps + 1 + index - is, is, index, node.left)
      createNode(ps + 1 + index - is , pe, index + 1, ie, node.right)

      return node;
    }

    return createNode(0,preorder.length,0,inorder.length)
  };

  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  let arr1 = ['A', 'B', 'D', 'H', 'I', 'E', 'J', 'C', 'F', 'K', 'G'],
    arr2 = ['H', 'D', 'I', 'B', 'E', 'J', 'A', 'F', 'K', 'C', 'G'];

  arr1 = [1,2]

  arr2 = [2,1]

    console.log(buildTree(arr1, arr2))

})()




(function () {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */
  /**
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode}
   * 
   */

  var buildTree = function (preorder, inorder) {
    function createNode(ps, pe, is, ie) {
      // if ((pe - ps) <= 1) return null;
      if((pe - ps) === 0 || (ie - is) === 0) return null;
      // if((pe - ps) === 1) return new TreeNode(preorder[ps]);
      let val = preorder[ps];
      let index = inorder.indexOf(val);
      let  node = new TreeNode(val);
    
      // if (node === null) node = new TreeNode(val);
      // if (index+1 < ie) {
      //   rVal = preorder[index - is + ps + 1];
      //   return new TreeNode(rVal)
      // }
      // if (index > is) {
      //   lVal = preorder[ps + 1];
      //  return new TreeNode(lVal);
      // };
    
    
      node.left = createNode(ps + 1, ps + 1 + index - is, is, index)
      node.right = createNode(ps + 1 + index - is , pe, index + 1, ie)
    
      return node;
    }
    
    return createNode(0,preorder.length,0,inorder.length)
  }

  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  let arr1 = ['A', 'B', 'D', 'H', 'I', 'E', 'J', 'C', 'F', 'K', 'G'],
    arr2 = ['H', 'D', 'I', 'B', 'E', 'J', 'A', 'F', 'K', 'C', 'G'];

  arr1 = [1,2]

  arr2 = [2,1]

    console.log(buildTree(arr1, arr2))

})()


