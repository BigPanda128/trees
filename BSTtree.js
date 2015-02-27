
//create a node object so that we can easily call upon it whenever
function Node(data, left, right) {
 this.data = data;
 this.count = 1;
 this.left = left;
 this.right = right;
 this.show = show;
}

//displays what is in the node
function show() {
 return this.data;
}

//create a base object for a binarty search tree
function BST() {
 this.root = null;
 this.insert = insert;
 this.inOrder = inOrder;
 this.preOrder = preOrder;
 this.postOrder = postOrder;
 this.getMin = getMin;
 this.getMax = getMax;
 this.find = find;
 //this.remove = remove;
 //this.removeNode = removeNode;
 this.update = update;
 this.prArray = prArray;
 this.genArray = genArray;
 }

//insert a new value into the tree
function insert(data) {
 var n = new Node(data, null, null);//create a nw node and give it data
 if (this.root === null) {//if no root node then that is where it goes
   this.root = n;//give the root the new node
   }
 else {//if there is a root node then do this
   var current = this.root;//position in tree gets the root node
   var parent;//create a new variable called parent
   while (true) {//runs this until it returns false or broken out of
     parent = current;//gives parent the variable that current stored
     if (data < current.data) {//if the data you are entering is smaller than current data then do this
       current = current.left;//send it down the left path
       if (current === null) {//ifhte new spot is empty put here
         parent.left = n;//inserts the new value
         break;//break out of while loop
         }
     }
   else {//else if is greater than current run this
     current = current.right;//sent it down the right path
     if (current === null) {//ifit empty then add here
       parent.right = n;//inserts data into the slot
       break;//ends while loop
       }//since it is a while loop, it will run this over and over till it finds its home!!!
     }
   }
 }
}

