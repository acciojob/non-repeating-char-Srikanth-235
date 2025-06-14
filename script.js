function firstNonRepeatedChar(str) {
 // Write your code here
	const arr = new Array(26).fill(0);
	for(let i=0;i<str.length;i++){
		let index=str.charCodeAt(i)-'a'.charCodeAt(0);
		arr[index]++;
	}
	for(let i=0;i<str.length;i++){
		let index=str.charCodeAt(i)-'a'.charCodeAt(0);
		if(arr[index]==1){
			return str[i];
		}
	}
	return null;
	
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
