
var apple = 'Winesap';
var inventory = 12;
var delivered = 100;
var newQty = inventory + delivered;
var label = newQty + ' ' + apple + 's';
console.log(label);

function createAppleLabel(apple, inventory, delivered){
	var newQty = inventory + delivered;
	var label = newQty + ' ' + apple + 's';
	return label;
}

createAppleLabel('Macoun', 5, 100);

var appleLabel = createAppleLabel('Jonagold', 22, 200);

