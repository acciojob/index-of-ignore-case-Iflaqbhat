function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 const normalizedStr = s1.toLowerCase();
    const normalizedSubStr = s2.toLowerCase();
    
    // Use indexOf to find the starting index of the substring
    const index = normalizedStr.indexOf(normalizedSubStr);
    
    return index;
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
