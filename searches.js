function getMin() {
	var current = this.root;
	while (current.left !== null) {
		current = current.left;
	}
	return current.data;
}

function getMax() {
	var current = this.root;
	while (current.right !== null) {
		current = current.right;
	}
	return current.data;
}

function find(data) {
	 var current = this.root;
	  while (current && current.data != data) {
		   if (data < current.data) {
			    current = current.left;
			     }
		    else {
			     current = current.right;
			      }
		     }
	   return current;
}
