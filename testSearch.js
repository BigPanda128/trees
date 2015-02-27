load("BSTtree.js");
load("searches.js");
load("traverse.js");

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

///////////////////////

var min = nums.getMin();
print("The minimum value of the BST is: " + min);
print("\n");
var max = nums.getMax();
print("The maximum value of the BST is: " + max);

/////////////////////////////

inOrder(nums.root);
print("\n");
print("Enter a value to search for: ");
var value = parseInt(readline());
var found = nums.find(value);
if (found !== null) {
	 print("Found " + value + " in the BST.");
}
else {
	 print(value + " was not found in the BST.");
}

/////////////////
