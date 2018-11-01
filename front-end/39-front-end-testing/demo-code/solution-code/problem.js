const binaryTreeIntersection = (treeA, treeB) => {
	const treeASet = new Set();
	const intersection = new Set();
	
	// 1 - traverse treeA and put all its values into a the map.
	// Time : O(A) = O(N)
	// Space : 3 factors to think about: treeASet, intersection, array (optional) , recursion 
	// treeASet = O(A) => O(N)
	// intersection = O(I) where I is intersection O(N)
	// recursion = O(H) => O(N) (worst case)
	// O(N + N + H) = O(N)
	// We assume that A and B are REALLY BIG and the same size
	const traverseA = () = > { };

	// 2 - traverse B while checking for duplicates using treeASet
	// Time : O(B) = O(N)
	const traverseB = () = > { };

	// 3 - return either a set or an array represetation of our set
};
