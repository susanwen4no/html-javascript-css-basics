class practiceClass {
	constructor(nameIn, numberIn) {
		this._title = nameIn;
		this._num = numberIn;
		}

	get title() {
		return this._title;
		}

	get num(){
		return this._num;
		}

	set num(x){
		this._num = x;
		}

	addNum(added){
		this.num = this._num + added;
		}
	
	present() {
		return "The name of the class is " + this.title + " and the number is " + this.num;
		}
	
}