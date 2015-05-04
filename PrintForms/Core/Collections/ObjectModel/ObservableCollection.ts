module Core.Collections.ObjectModel {
    export class ObservableCollection<T> implements ComponentModel.INotifyPropertyChanged, Collections.Specialized.INotifyCollectionChanged {
        private _collection: T[] = new Array<T>();
        private _observer = new CollectionObserver<T>().observe(this);
        public CollectionChanged: Collections.Specialized.NotifyCollectionChangedEvent = new Collections.Specialized.NotifyCollectionChangedEvent();
        public propertyChanged: ComponentModel.PropertyChangedEvent = new ComponentModel.PropertyChangedEvent();

        public get Observer() {
            return this._observer;
        }

        /**
          * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
          */
        public get length() {
            return this._collection.length;
        }

        
        /**
          * Returns a string representation of an array.
          */
        public toString(): string {
            return this._collection.toString();
        }
        public toLocaleString(): string {
            return this._collection.toLocaleString();
        }
        /**
          * Appends new elements to an array, and returns the new length of the array.
          * @param items New elements of the Array.
          */
        public push(...items: T[]): number {
            try {
                return this._collection.push.apply(this._collection, items);
            }
            finally {
                this.CollectionChanged.Trigger(new Specialized.NotifyCollectionChangedData({
                    Action: Specialized.NotifyCollectionChangedAction.Add,
                    NewItems: items,
                    NewStartingIndex: this.length - items.length
                }), this);
            }
        }
        /**
          * Removes the last element from an array and returns it.
          */
        public pop(): T {
            return this._collection.pop();
        }
        /**
          * Combines two or more arrays.
          * @param items Additional items to add to the end of array1.
          */
        public concat<U extends T[]>(...items: U[]): T[]
        /**
          * Combines two or more arrays.
          * @param items Additional items to add to the end of array1.
          */
        public concat(...items: T[]): T[] {
            return this._collection.concat.apply(this._collection, items);
        }
        /**
          * Adds all the elements of an array separated by the specified separator string.
          * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
          */
        public join(separator?: string): string {
            return this._collection.join(separator);
        }
        /**
          * Reverses the elements in an Array. 
          */
        public reverse(): T[] {
            return this._collection.reverse();
        }
        /**
          * Removes the first element from an array and returns it.
          */
        public shift(): T {
            return this._collection.shift();
        }
        /** 
          * Returns a section of an array.
          * @param start The beginning of the specified portion of the array.
          * @param end The end of the specified portion of the array.
          */
        public slice(start?: number, end?: number): T[] {
            return this._collection.slice(start, end);
        }

        /**
          * Sorts an array.
          * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
          */
        public sort(compareFn?: (a: T, b: T) => number): T[] {
            return this._collection.sort(compareFn);
        }

        /**
          * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
          * @param start The zero-based location in the array from which to start removing elements.
          */
        public splice(start: number): T[] 
        /**
          * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
          * @param start The zero-based location in the array from which to start removing elements.
          * @param deleteCount The number of elements to remove.
          * @param items Elements to insert into the array in place of the deleted elements.
          */
        public splice(start: number, deleteCount?: number, ...items: T[]): T[] {
            return this._collection.splice.apply(this._collection, this.splice.arguments);
        }

        /**
          * Inserts new elements at the start of an array.
          * @param items  Elements to insert at the start of the Array.
          */
        public unshift(...items: T[]): number {
            return this._collection.unshift.apply(this._collection, items);
        }

        /**
          * Returns the index of the first occurrence of a value in an array.
          * @param searchElement The value to locate in the array.
          * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
          */
        public indexOf(searchElement: T, fromIndex?: number): number {
            return this._collection.indexOf(searchElement, fromIndex);
        }

        /**
          * Returns the index of the last occurrence of a specified value in an array.
          * @param searchElement The value to locate in the array.
          * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
          */
        public lastIndexOf(searchElement: T, fromIndex?: number): number {
            return this._collection.lastIndexOf(searchElement, fromIndex);
        }

        /**
          * Determines whether all the members of an array satisfy the specified test.
          * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
          * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
          */
        public every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean {
            return this._collection.every(callbackfn, thisArg);
        }

        /**
          * Determines whether the specified callback function returns true for any element of an array.
          * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
          * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
          */
        public some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean {
            return this._collection.some(callbackfn, thisArg);
        }

        /**
          * Performs the specified action for each element in an array.
          * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. 
          * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
          */
        public forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
            return this._collection.forEach(callbackfn, thisArg);
        }

        /**
          * Calls a defined callback function on each element of an array, and returns an array that contains the results.
          * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. 
          * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
          */
        public map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
            return this._collection.map(callbackfn, thisArg);
        }

        /**
          * Returns the elements of an array that meet the condition specified in a callback function. 
          * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. 
          * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
          */
        public filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[] {
            return this._collection.filter(callbackfn, thisArg);
        }

        /**
          * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
          * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
          * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
          */
        public reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T 
        /**
          * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
          * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
          * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
          */
        public reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
            return this._collection.reduce(callbackfn, initialValue);
        }

        /** 
          * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
          * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. 
          * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
          */
        public reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T
       
        /** 
          * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
          * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. 
          * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
          */
        public reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
            return this._collection.reduceRight(callbackfn, initialValue);
        }
        /**
          * Value getter
          * @param n Index of element in array
          */
        public get(n: number): T {
            return this._collection[n];
        }
        /**
          * Value getter
          * @param n Index of element in array
          * @param value new value of element in array
          */
        public set(n: number, value: T): void {
            this._collection[n] = value;
        }
    }
    
    class CollectionObserver<T> implements Component.IObserver<ObservableCollection<T>>{
        private _target: ObservableCollection<T>;
        public observe(target: ObservableCollection<T>): CollectionObserver<T> {
            this._target = target;
            return this;
        }
        public unobserve(): void {

        }

        public silent(): ObservableCollection<T> {
            return <any>this._target["_collection"];
        }
    }
}
