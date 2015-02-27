function update(data) {
	 var grade = this.find(data);
	  grade.count++;
	   return grade;
}

function prArray(arr) {
	 print(arr[0].toString() + ' ');
	  for (var i = 1; i < arr.length; ++i) {
		   print(arr[i].toString() + ' ');
		    if (i % 10 === 0) {
			     print("\n");
			      }
		     }
}

function genArray(length) {
	 var arr = [];
	  for (var i = 0; i < length; ++i) {
		   arr[i] = Math.floor(Math.random() * 101);
		    }
	   return arr;
}
