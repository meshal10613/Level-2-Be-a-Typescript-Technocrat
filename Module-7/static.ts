// static

class Counter {
    static count: number = 0;
    
	increment(){
		return Counter.count += 1;
	}

	decrement(){
		return Counter.count -= 1;
	}
}

const count1 = new Counter();
console.log(count1.increment())
console.log(count1.increment())
console.log(count1.increment())
console.log("-------------------------")
const coutn2 = new Counter(); 
console.log(coutn2.increment())
console.log(coutn2.increment())
console.log(coutn2.increment())
