var PF;
(function (PF) {
    var Collections;
    (function (Collections) {
        var ObjectModel;
        (function (ObjectModel) {
            var ObservableCollection = (function () {
                function ObservableCollection() {
                    this._collection = new Array();
                    this._observer = new CollectionObserver().observe(this);
                    this.CollectionChanged = new Collections.Specialized.NotifyCollectionChangedEvent();
                    this.propertyChanged = new PF.ComponentModel.PropertyChangedEvent();
                }
                Object.defineProperty(ObservableCollection.prototype, "Observer", {
                    get: function () {
                        return this._observer;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ObservableCollection.prototype, "length", {
                    /**
                      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
                      */
                    get: function () {
                        return this._collection.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                  * Returns a string representation of an array.
                  */
                ObservableCollection.prototype.toString = function () {
                    return this._collection.toString();
                };
                ObservableCollection.prototype.toLocaleString = function () {
                    return this._collection.toLocaleString();
                };
                /**
                  * Appends new elements to an array, and returns the new length of the array.
                  * @param items New elements of the Array.
                  */
                ObservableCollection.prototype.push = function () {
                    var items = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        items[_i - 0] = arguments[_i];
                    }
                    try {
                        return this._collection.push.apply(this._collection, items);
                    }
                    finally {
                        this.CollectionChanged.Trigger(new Collections.Specialized.NotifyCollectionChangedData({
                            Action: Collections.Specialized.NotifyCollectionChangedAction.Add,
                            NewItems: items,
                            NewStartingIndex: this.length - items.length
                        }), this);
                    }
                };
                /**
                  * Removes the last element from an array and returns it.
                  */
                ObservableCollection.prototype.pop = function () {
                    return this._collection.pop();
                };
                /**
                  * Combines two or more arrays.
                  * @param items Additional items to add to the end of array1.
                  */
                ObservableCollection.prototype.concat = function () {
                    var items = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        items[_i - 0] = arguments[_i];
                    }
                    return this._collection.concat.apply(this._collection, items);
                };
                /**
                  * Adds all the elements of an array separated by the specified separator string.
                  * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
                  */
                ObservableCollection.prototype.join = function (separator) {
                    return this._collection.join(separator);
                };
                /**
                  * Reverses the elements in an Array.
                  */
                ObservableCollection.prototype.reverse = function () {
                    return this._collection.reverse();
                };
                /**
                  * Removes the first element from an array and returns it.
                  */
                ObservableCollection.prototype.shift = function () {
                    return this._collection.shift();
                };
                /**
                  * Returns a section of an array.
                  * @param start The beginning of the specified portion of the array.
                  * @param end The end of the specified portion of the array.
                  */
                ObservableCollection.prototype.slice = function (start, end) {
                    return this._collection.slice(start, end);
                };
                /**
                  * Sorts an array.
                  * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
                  */
                ObservableCollection.prototype.sort = function (compareFn) {
                    return this._collection.sort(compareFn);
                };
                /**
                  * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
                  * @param start The zero-PFd location in the array from which to start removing elements.
                  * @param deleteCount The number of elements to remove.
                  * @param items Elements to insert into the array in place of the deleted elements.
                  */
                ObservableCollection.prototype.splice = function (start, deleteCount) {
                    var items = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        items[_i - 2] = arguments[_i];
                    }
                    return this._collection.splice.apply(this._collection, this.splice.arguments);
                };
                /**
                  * Inserts new elements at the start of an array.
                  * @param items  Elements to insert at the start of the Array.
                  */
                ObservableCollection.prototype.unshift = function () {
                    var items = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        items[_i - 0] = arguments[_i];
                    }
                    return this._collection.unshift.apply(this._collection, items);
                };
                /**
                  * Returns the index of the first occurrence of a value in an array.
                  * @param searchElement The value to locate in the array.
                  * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
                  */
                ObservableCollection.prototype.indexOf = function (searchElement, fromIndex) {
                    return this._collection.indexOf(searchElement, fromIndex);
                };
                /**
                  * Returns the index of the last occurrence of a specified value in an array.
                  * @param searchElement The value to locate in the array.
                  * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
                  */
                ObservableCollection.prototype.lastIndexOf = function (searchElement, fromIndex) {
                    return this._collection.lastIndexOf(searchElement, fromIndex);
                };
                /**
                  * Determines whether all the members of an array satisfy the specified test.
                  * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
                  * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
                  */
                ObservableCollection.prototype.every = function (callbackfn, thisArg) {
                    return this._collection.every(callbackfn, thisArg);
                };
                /**
                  * Determines whether the specified callback function returns true for any element of an array.
                  * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
                  * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
                  */
                ObservableCollection.prototype.some = function (callbackfn, thisArg) {
                    return this._collection.some(callbackfn, thisArg);
                };
                /**
                  * Performs the specified action for each element in an array.
                  * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
                  * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
                  */
                ObservableCollection.prototype.forEach = function (callbackfn, thisArg) {
                    return this._collection.forEach(callbackfn, thisArg);
                };
                /**
                  * Calls a defined callback function on each element of an array, and returns an array that contains the results.
                  * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
                  * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
                  */
                ObservableCollection.prototype.map = function (callbackfn, thisArg) {
                    return this._collection.map(callbackfn, thisArg);
                };
                /**
                  * Returns the elements of an array that meet the condition specified in a callback function.
                  * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
                  * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
                  */
                ObservableCollection.prototype.filter = function (callbackfn, thisArg) {
                    return this._collection.filter(callbackfn, thisArg);
                };
                /**
                  * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
                  * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
                  * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
                  */
                ObservableCollection.prototype.reduce = function (callbackfn, initialValue) {
                    return this._collection.reduce(callbackfn, initialValue);
                };
                /**
                  * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
                  * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
                  * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
                  */
                ObservableCollection.prototype.reduceRight = function (callbackfn, initialValue) {
                    return this._collection.reduceRight(callbackfn, initialValue);
                };
                /**
                  * Value getter
                  * @param n Index of element in array
                  */
                ObservableCollection.prototype.get = function (n) {
                    return this._collection[n];
                };
                /**
                  * Value getter
                  * @param n Index of element in array
                  * @param value new value of element in array
                  */
                ObservableCollection.prototype.set = function (n, value) {
                    this._collection[n] = value;
                };
                return ObservableCollection;
            })();
            ObjectModel.ObservableCollection = ObservableCollection;
            var CollectionObserver = (function () {
                function CollectionObserver() {
                }
                CollectionObserver.prototype.observe = function (target) {
                    this._target = target;
                    return this;
                };
                CollectionObserver.prototype.unobserve = function () {
                };
                CollectionObserver.prototype.silent = function () {
                    return this._target["_collection"];
                };
                return CollectionObserver;
            })();
        })(ObjectModel = Collections.ObjectModel || (Collections.ObjectModel = {}));
    })(Collections = PF.Collections || (PF.Collections = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Annotation;
    (function (Annotation) {
        /**
         *
         * @param {any} prototype
         * @param {string} propertyName
         * @param {TypedPropertyDescriptor<any>} propertyDescriptor
         * @returns
         */
        function property(prototype, propertyName, propertyDescriptor) {
            var ctor = prototype.constructor;
            if (!ctor || !(prototype instanceof PF.View.DependencyObject)) {
                return;
            }
            ctor["registeredProperties"].push(propertyName);
        }
        Annotation.property = property;
    })(Annotation = PF.Annotation || (PF.Annotation = {}));
})(PF || (PF = {}));
///<reference path="../Annotation/Property"/> 
/**
    * User-inteface namespace
    * @namespace
    */
var PF;
(function (PF) {
    var View;
    (function (View) {
        /**
          * @class
          */
        var DependencyObject = (function () {
            function DependencyObject() {
                this._dataContext = undefined;
            }
            Object.defineProperty(DependencyObject.prototype, "dataContext", {
                get: function () {
                    return this._dataContext;
                },
                /**
                * DataContext setter
                * @param {ComponentModel.INotifyPropertyChanged} dataContext
                */
                set: function (dataContext) {
                    this._dataContext = dataContext;
                    this.initializeDataContext();
                },
                enumerable: true,
                configurable: true
            });
            DependencyObject.prototype.initializeDataContext = function () {
                var _this = this;
                this.constructor["registeredProperties"].forEach(function (propertyKey) {
                    _this[propertyKey] = _this._dataContext[propertyKey];
                });
                this._dataContext.propertyChanged.Subscribe(this.onDataContextPropertyChanged, this);
            };
            DependencyObject.prototype.onDataContextPropertyChanged = function (e) {
                if (this[e.name] !== e.value) {
                    this[e.name] = e.value;
                }
            };
            DependencyObject.registeredProperties = new Array();
            return DependencyObject;
        })();
        View.DependencyObject = DependencyObject;
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
/// <reference path="../../Core/ComponentModel/INotifyPropertyChanged"/>
var PF;
(function (PF) {
    var ComponentModel;
    (function (ComponentModel) {
        var BaseViewModel = (function () {
            function BaseViewModel() {
                this.propertyChanged = new PF.ComponentModel.PropertyChangedEvent();
            }
            BaseViewModel.prototype.onPropertyChanged = function (propertyName, value) {
                this.propertyChanged.Trigger({ name: propertyName, value: value });
            };
            return BaseViewModel;
        })();
        ComponentModel.BaseViewModel = BaseViewModel;
    })(ComponentModel = PF.ComponentModel || (PF.ComponentModel = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Annotation;
    (function (Annotation) {
        /**
         * Handle function with specify name when in the property set
         * value
         * @param {string} functionName specify property name
         * @returns {PropertyDescriptor} new wrapper property descriptor
         */
        function handler(functionName) {
            return function (prototype, pName, pDescriptor) {
                var localValue, getter, setter;
                getter = pDescriptor ?
                    (pDescriptor.get ? pDescriptor.get : function () { return pDescriptor.value; }) :
                    function () { return localValue; };
                setter = pDescriptor ?
                    (pDescriptor.set ?
                        function (value) {
                            var handledFunction;
                            pDescriptor.set(value);
                            if (handledFunction = this[functionName]) {
                                handledFunction.call(this, pName, value);
                            }
                        } :
                        function (value) {
                            var handledFunction;
                            pDescriptor.value = value;
                            if (handledFunction = this[functionName]) {
                                handledFunction.call(this, pName, value);
                            }
                        }) :
                    function (value) {
                        var handledFunction;
                        localValue = value;
                        if (handledFunction = this[functionName]) {
                            handledFunction.call(this, pName, value);
                        }
                    };
                Object.defineProperty(prototype, pName, {
                    enumerable: pDescriptor ? pDescriptor.enumerable : true,
                    configurable: pDescriptor ? pDescriptor.configurable : true,
                    get: getter,
                    set: setter
                });
            };
        }
        Annotation.handler = handler;
    })(Annotation = PF.Annotation || (PF.Annotation = {}));
})(PF || (PF = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../../Core/Annotation/Handler"/>
var PF;
(function (PF) {
    var ComponentModel;
    (function (ComponentModel) {
        var ObservableCollection = PF.Collections.ObjectModel.ObservableCollection;
        var handler = PF.Annotation.handler;
        var GroupViewModel = (function (_super) {
            __extends(GroupViewModel, _super);
            function GroupViewModel() {
                _super.apply(this, arguments);
                this.children = new ObservableCollection();
            }
            __decorate([
                handler("onPropertyChanged")
            ], GroupViewModel.prototype, "children");
            return GroupViewModel;
        })(ComponentModel.BaseViewModel);
        ComponentModel.GroupViewModel = GroupViewModel;
    })(ComponentModel = PF.ComponentModel || (PF.ComponentModel = {}));
})(PF || (PF = {}));
/// <reference path="../../Core/View/DependencyObject.ts"/>
var PF;
(function (PF) {
    var View;
    (function (View) {
        var BaseView = (function (_super) {
            __extends(BaseView, _super);
            function BaseView() {
                _super.call(this);
                this.createElement();
                this.initializeElement();
            }
            BaseView.prototype.createElement = function () {
            };
            BaseView.prototype.initializeElement = function () {
            };
            BaseView.prototype.setValue = function (propertyName) {
                var newValue = this[propertyName];
                this[propertyName] = newValue;
                this.dataContext[propertyName] = newValue;
            };
            return BaseView;
        })(PF.View.DependencyObject);
        View.BaseView = BaseView;
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var View;
    (function (View) {
        var ViewScope = (function () {
            function ViewScope() {
            }
            ViewScope.put = function (domElement, view) {
                var position;
                position = ViewScope.domElementList.push(domElement);
                ViewScope.viewList.push(view);
            };
            ViewScope.get = function (domElement) {
                var index = ViewScope.domElementList.indexOf(domElement), view;
                if (index < 0) {
                    throw new Error("No registered view for DOM element");
                }
                return ViewScope.viewList[index];
            };
            ViewScope.domElementList = new Array();
            ViewScope.viewList = new Array();
            return ViewScope;
        })();
        View.ViewScope = ViewScope;
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
///<reference path="Interface/IChild"/>
///<reference path="ViewScope"/>
var PF;
(function (PF) {
    var View;
    (function (View_1) {
        var View = (function (_super) {
            __extends(View, _super);
            function View() {
                _super.apply(this, arguments);
                this._parent = undefined;
            }
            View.prototype.initializeElement = function () {
                View_1.ViewScope.put(this.element[0], this);
                this.element.draggable({
                    cancel: "a.ui-icon",
                    revert: "invalid",
                    //containment: "document",
                    //helper: "clone",
                    cursor: "move"
                });
                _super.prototype.initializeElement.call(this);
            };
            Object.defineProperty(View.prototype, "parent", {
                get: function () {
                    return this._parent;
                },
                enumerable: true,
                configurable: true
            });
            View.prototype.onDrag = function () {
            };
            return View;
        })(View_1.BaseView);
        View_1.View = View;
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
///<reference path="Interface/IContainer"/>
///<reference path="../ComponentModel/GroupViewModel"/>
var PF;
(function (PF) {
    var View;
    (function (View) {
        var GroupView = (function (_super) {
            __extends(GroupView, _super);
            function GroupView() {
                _super.apply(this, arguments);
                this._children = new Array();
            }
            GroupView.prototype.initializeElement = function () {
                var _this = this;
                this.element.droppable({
                    drop: function (event, ui) {
                        var view = View.ViewScope.get(ui.draggable[0]);
                        if (!view) {
                            throw new Error("Something bad was happed with this view");
                        }
                        $(ui.draggable[0]).css({ left: 0, top: 0 });
                        _this.onDrop(view);
                    }
                });
                _super.prototype.initializeElement.call(this);
            };
            GroupView.prototype.initializeDataContext = function () {
                this.dataContext.children.CollectionChanged.Subscribe(this.onDataContextChildrenCollectionChanged, this);
            };
            GroupView.prototype.removeViewAt = function (index) {
                return this._children.splice(index, 1).length > 0;
            };
            GroupView.prototype.removeViews = function (start, count) {
                return this._children.splice(start, count).length > 0;
            };
            GroupView.prototype.removeView = function (child) {
                var index = this._children.indexOf(child, 0);
                if (index != undefined) {
                    this._children.splice(index, 1);
                    return true;
                }
                return false;
            };
            GroupView.prototype.appendView = function (child) {
                this._children.push(child);
                this.element.append(child['element']);
                child["_parent"] = this;
                this.dataContext.children.Observer.silent().push(child.dataContext);
            };
            GroupView.prototype.prependView = function (child) {
                this._children.unshift(child);
                this.element.prepend(child['element']);
                child["_parent"] = this;
                this.dataContext.children.Observer.silent().unshift(child.dataContext);
            };
            GroupView.prototype.onDrop = function (draggable) {
                var oldParent = draggable.parent;
                if (oldParent) {
                    oldParent.removeView(draggable);
                }
                this.appendView(draggable);
            };
            GroupView.prototype.onDataContextChildrenCollectionChanged = function (data, sender) {
                var _this = this;
                data.NewItems.forEach(function (viewModel) {
                    var view = View.ViewFactory.create(viewModel);
                    _this._children.push(view);
                    _this.element.append(view['element']);
                    view["_parent"] = _this;
                });
            };
            return GroupView;
        })(View.View);
        View.GroupView = GroupView;
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var ComponentModel;
    (function (ComponentModel) {
        var handler = PF.Annotation.handler;
        var TextViewModel = (function (_super) {
            __extends(TextViewModel, _super);
            function TextViewModel() {
                _super.apply(this, arguments);
            }
            __decorate([
                handler("onPropertyChanged")
            ], TextViewModel.prototype, "text");
            return TextViewModel;
        })(ComponentModel.BaseViewModel);
        ComponentModel.TextViewModel = TextViewModel;
    })(ComponentModel = PF.ComponentModel || (PF.ComponentModel = {}));
})(PF || (PF = {}));
///<reference path="../../Base/View/View"/>
var PF;
(function (PF) {
    var View;
    (function (View) {
        var property = PF.Annotation.property;
        var TextView = (function (_super) {
            __extends(TextView, _super);
            function TextView() {
                _super.apply(this, arguments);
            }
            TextView.prototype.createElement = function () {
                this.element = $("<input>");
            };
            TextView.prototype.initializeElement = function () {
                this.element.change(this.setValue.bind(this, "text"));
                _super.prototype.initializeElement.call(this);
            };
            Object.defineProperty(TextView.prototype, "text", {
                get: function () {
                    return this.element.val();
                },
                set: function (text) {
                    this.element.val(text);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextView.prototype, "text",
                __decorate([
                    property
                ], TextView.prototype, "text", Object.getOwnPropertyDescriptor(TextView.prototype, "text")));
            TextView = __decorate([
                test
            ], TextView);
            return TextView;
        })(View.View);
        View.TextView = TextView;
        function test() {
        }
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var ComponentModel;
    (function (ComponentModel) {
        var handler = PF.Annotation.handler;
        var DocumentViewModel = (function (_super) {
            __extends(DocumentViewModel, _super);
            function DocumentViewModel() {
                _super.apply(this, arguments);
            }
            __decorate([
                handler("onPropertyChanged")
            ], DocumentViewModel.prototype, "presenter");
            return DocumentViewModel;
        })(ComponentModel.GroupViewModel);
        ComponentModel.DocumentViewModel = DocumentViewModel;
    })(ComponentModel = PF.ComponentModel || (PF.ComponentModel = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var View;
    (function (View) {
        var DocumentView = (function (_super) {
            __extends(DocumentView, _super);
            function DocumentView() {
                _super.apply(this, arguments);
            }
            Object.defineProperty(DocumentView.prototype, "presenter", {
                get: function () {
                    return this._presenter;
                },
                set: function (groupView) {
                    this._presenter = groupView;
                    this.element.append(groupView["element"].attr("ui-presenter", ""));
                    groupView["_parent"] = this;
                },
                enumerable: true,
                configurable: true
            });
            DocumentView.prototype.createElement = function () {
                this.element = $("<div>").appendTo("body");
            };
            DocumentView.prototype.initializeElement = function () {
                _super.prototype.initializeElement.call(this);
                this.element.attr("ui-document", "").draggable("disable");
            };
            DocumentView.prototype.removeViewAt = function (index) {
                return this._presenter.removeViewAt(index);
            };
            DocumentView.prototype.removeViews = function (start, count) {
                return this._presenter.removeViews(start, count);
            };
            DocumentView.prototype.removeView = function (child) {
                return this._presenter.removeView(child);
            };
            DocumentView.prototype.appendView = function (child) {
                this._presenter.appendView(child);
            };
            DocumentView.prototype.prependView = function (child) {
                this._presenter.prependView(child);
            };
            return DocumentView;
        })(View.GroupView);
        View.DocumentView = DocumentView;
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
/// <reference path="../../Base/ComponentModel/GroupViewModel"/>
var PF;
(function (PF) {
    var ComponentModel;
    (function (ComponentModel) {
        var handler = PF.Annotation.handler;
        var LinearLayoutViewModel = (function (_super) {
            __extends(LinearLayoutViewModel, _super);
            function LinearLayoutViewModel() {
                _super.apply(this, arguments);
            }
            __decorate([
                handler("onPropertyChanged")
            ], LinearLayoutViewModel.prototype, "orientation");
            return LinearLayoutViewModel;
        })(ComponentModel.GroupViewModel);
        ComponentModel.LinearLayoutViewModel = LinearLayoutViewModel;
    })(ComponentModel = PF.ComponentModel || (PF.ComponentModel = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var View;
    (function (View) {
        var property = PF.Annotation.property;
        var LinearLayout = (function (_super) {
            __extends(LinearLayout, _super);
            function LinearLayout() {
                _super.apply(this, arguments);
            }
            LinearLayout.prototype.createElement = function () {
                this.element = $("<div>");
            };
            LinearLayout.prototype.initializeElement = function () {
                var _this = this;
                this.element.attr("ui-linear-layout", "");
                this.element.attrchange(function (event) {
                    if (event.attributeName === "ui-layout-orientation") {
                        _this.setValue("orientation");
                    }
                });
                _super.prototype.initializeElement.call(this);
            };
            Object.defineProperty(LinearLayout.prototype, "orientation", {
                get: function () {
                    return this.element.attr("ui-layout-orientation");
                },
                set: function (val) {
                    this.element.attr("ui-layout-orientation", val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LinearLayout.prototype, "orientation",
                __decorate([
                    property
                ], LinearLayout.prototype, "orientation", Object.getOwnPropertyDescriptor(LinearLayout.prototype, "orientation")));
            return LinearLayout;
        })(View.GroupView);
        View.LinearLayout = LinearLayout;
        var LinearLayout;
        (function (LinearLayout) {
            (function (LayoutOrientation) {
                LayoutOrientation[LayoutOrientation["HORIZONTAL"] = 0] = "HORIZONTAL";
                LayoutOrientation[LayoutOrientation["VERTICAL"] = 1] = "VERTICAL";
            })(LinearLayout.LayoutOrientation || (LinearLayout.LayoutOrientation = {}));
            var LayoutOrientation = LinearLayout.LayoutOrientation;
        })(LinearLayout = View.LinearLayout || (View.LinearLayout = {}));
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Component;
    (function (Component) {
        var Injector = (function () {
            function Injector() {
            }
            Injector.register = function (injectable) {
                var injectablePosition = -1;
                Injector.registeredClassesAndMetadata.forEach(function (value, index) {
                    injectablePosition = value.clazz.prototype === injectable.clazz.prototype
                        ? index : injectablePosition;
                });
                if (injectablePosition >= 0) {
                    Injector.registeredClassesAndMetadata[injectablePosition] = injectable;
                    return;
                }
                Injector.registeredClassesAndMetadata.push(injectable);
            };
            Injector.instance = function (clazz) {
                var injectable;
                injectable = Injector.registeredClassesAndMetadata.filter(function (value, index) {
                    return value.clazz.prototype === clazz.prototype;
                })[0];
                if (!injectable) {
                    throw new Error("No registeret instance for type");
                }
                if (injectable.isSingleton) {
                    return Injector.singletonInstance(clazz);
                }
                return new clazz();
            };
            Injector.singletonInstance = function (clazz) {
                var singleton, singletonIndex = -1;
                Injector.createdSingletons.forEach(function (value, index) {
                    singletonIndex = value.clazz === clazz ? index : singletonIndex;
                });
                if (singletonIndex > -1) {
                    return Injector.createdSingletons[singletonIndex].instance;
                }
                singleton = { clazz: clazz, instance: new clazz() };
                Injector.createdSingletons.push(singleton);
                return singleton.instance;
            };
            Injector.registeredClassesAndMetadata = new Array();
            Injector.createdSingletons = new Array();
            return Injector;
        })();
        Component.Injector = Injector;
    })(Component = PF.Component || (PF.Component = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Component;
    (function (Component) {
        var Resolver = (function () {
            function Resolver() {
            }
            Resolver.request = function (parentType, propertyName, propertyType) {
                var resolvableIndex = -1, emptyDependencyList;
                Resolver.registeredResolvables.forEach(function (value, index) {
                    resolvableIndex = value.clazz === parentType ? index : resolvableIndex;
                });
                if (resolvableIndex > -1) {
                    Resolver.registeredResolvables[resolvableIndex].dependencyList[propertyName] = propertyType;
                    return;
                }
                emptyDependencyList = {};
                emptyDependencyList[propertyName] = propertyType;
                Resolver.registeredResolvables.push({
                    clazz: parentType,
                    dependencyList: emptyDependencyList
                });
            };
            Resolver.resolve = function (clazz) {
                return Resolver.registeredResolvables
                    .filter(function (value, index) { return value.clazz === clazz; })[0].dependencyList;
            };
            Resolver.registeredResolvables = new Array();
            return Resolver;
        })();
        Component.Resolver = Resolver;
    })(Component = PF.Component || (PF.Component = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Annotation;
    (function (Annotation) {
        var Resolver = PF.Component.Resolver;
        function inject(requestType) {
            return function (prototype, propertyName) {
                Resolver.request(prototype.constructor, propertyName, requestType);
            };
        }
        Annotation.inject = inject;
    })(Annotation = PF.Annotation || (PF.Annotation = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Annotation;
    (function (Annotation) {
        var Injector = PF.Component.Injector;
        function injection(value) {
            if (value === void 0) { value = true; }
            if (typeof value === typeof true) {
                return function (clazz) {
                    Injector.register({ isSingleton: value, clazz: clazz });
                };
            }
            else {
                Injector.register({ isSingleton: true, clazz: value });
            }
        }
        Annotation.injection = injection;
    })(Annotation = PF.Annotation || (PF.Annotation = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Annotation;
    (function (Annotation) {
        var Resolver = PF.Component.Resolver;
        var Injector = PF.Component.Injector;
        /**
         * Mark class as class that need several injection
         * Resolve decrator call when of annotated class create new instance
         * and Injector inject on fly field that marked @inject
         * @param {Class} clazz - class, marked with @resolve
         * @returns decorated class
         */
        function resolve(clazz) {
            var classWrapper = function () {
                var argArray = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    argArray[_i - 0] = arguments[_i];
                }
                clazz.apply(this, argArray);
                var dependencyList = Resolver.resolve(clazz);
                for (var propertyName in dependencyList) {
                    var propertyType = dependencyList[propertyName];
                    this[propertyName] = Injector.instance(propertyType);
                }
            };
            __extends(classWrapper, clazz);
            return classWrapper;
        }
        Annotation.resolve = resolve;
    })(Annotation = PF.Annotation || (PF.Annotation = {}));
})(PF || (PF = {}));
/// <reference path="Core/Collections/ObjectModel/ObservableCollection.ts"/>
/// <reference path="Core/View/DependencyObject.ts"/>
/// <reference path="Core/Annotation/Handler"/>
/// <reference path="Base/ComponentModel/BaseViewModel.ts"/>
/// <reference path="Base/ComponentModel/GroupViewModel.ts"/>
/// <reference path="Base/View/BaseView.ts"/>
/// <reference path="Base/View/View.ts"/>
/// <reference path="Base/View/GroupView.ts"/>
/// <reference path="Extra/ComponentModel/TextViewModel.ts"/>
/// <reference path="Extra/View/TextView.ts"/>
/// <reference path="Extra/ComponentModel/DocumentViewModel.ts"/>
/// <reference path="Extra/View/DocumentView.ts"/>
/// <reference path="Extra/ComponentModel/LinearLayoutViewModel.ts"/>
/// <reference path="Extra/View/LinearLayout.ts"/>
/// <reference path="MEF/Component/Interface/Injectable"/>
/// <reference path="MEF/Component/Interface/Resolvable"/>
/// <reference path="MEF/Component/Interface/Singleton"/>
/// <reference path="MEF/Component/Injector"/>
/// <reference path="MEF/Component/Resolver"/>
/// <reference path="MEF/Annotation/Inject"/>
/// <reference path="MEF/Annotation/Injection"/>
/// <reference path="MEF/Annotation/Resolve"/>
var View = PF.View;
var ComponentModel = PF.ComponentModel;
var injection = PF.Annotation.injection;
var inject = PF.Annotation.inject;
var resolve = PF.Annotation.resolve;
var handler = PF.Annotation.handler;
var DocumentView = PF.View.DocumentView;
var DocumentViewModel = PF.ComponentModel.DocumentViewModel;
var LinearLayout = PF.View.LinearLayout;
var LinearLayoutViewModel = PF.ComponentModel.LinearLayoutViewModel;
var TextView = PF.View.TextView;
var TextViewModel = PF.ComponentModel.TextViewModel;
window.onload = function () {
    var document, documentVM;
    var presenter, presenterViewModel;
    var view, viewModel;
    var container, containerViewModel;
    document = new DocumentView();
    documentVM = new DocumentViewModel();
    presenter = new LinearLayout();
    presenterViewModel = new LinearLayoutViewModel();
    view = new TextView();
    viewModel = new TextViewModel();
    container = new LinearLayout();
    containerViewModel = new LinearLayoutViewModel();
    document.dataContext = documentVM;
    presenter.dataContext = presenterViewModel;
    document.presenter = presenter;
    view.dataContext = viewModel;
    container.dataContext = containerViewModel;
    document.appendView(container);
    document.appendView(view);
};
var PF;
(function (PF) {
    var Component;
    (function (Component) {
        var Binding = (function () {
            function Binding() {
            }
            Binding.prototype.create = function () {
                this._sourceProxy = Component.Proxy.add(this.source, this.sourcePropertyName, this.targetProxySetter.bind(this));
                this._targetProxy = Component.Proxy.add(this.target, this.targetPropertyName, this.sourceProxySetter.bind(this));
            };
            Binding.prototype.sourceProxySetter = function (value) {
                this._sourceProxy.setSourceValue(value);
            };
            Binding.prototype.targetProxySetter = function (value) {
                this._targetProxy.setSourceValue(value);
            };
            return Binding;
        })();
        Component.Binding = Binding;
        var Binding;
        (function (Binding) {
            /**
            * Binding Builder
            * Simple way to create binding
            * **/
            var Builder = (function () {
                function Builder() {
                    this._binding = new Binding();
                }
                /**
                * Set dependency object to binding
                * @param target View in other word
                * **/
                Builder.prototype.connect = function (target) {
                    this._binding.target = target;
                    return new BuilderHelper(this, this._binding, "targetPropertyName");
                };
                /**
                * Set view model to binding
                * @param source ViewModel in other word
                * **/
                Builder.prototype.with = function (source) {
                    this._binding.source = source;
                    return new BuilderHelper(this, this._binding, "sourcePropertyName");
                };
                Builder.prototype.bind = function () {
                    this._binding.create();
                    return this._binding;
                };
                Builder.create = function () {
                    return new Builder();
                };
                return Builder;
            })();
            Binding.Builder = Builder;
            var BuilderHelper = (function () {
                function BuilderHelper(builder, binding, settedPropertyName) {
                    this._builder = builder;
                    this._binding = binding;
                    this._settedPropertyName = settedPropertyName;
                }
                /** On what property name it should be create binding
                * @param propertyName Property name
                *  **/
                BuilderHelper.prototype.on = function (propertyName) {
                    this._binding[this._settedPropertyName] = propertyName;
                    return this._builder;
                };
                return BuilderHelper;
            })();
        })(Binding = Component.Binding || (Component.Binding = {}));
    })(Component = PF.Component || (PF.Component = {}));
})(PF || (PF = {}));
/// <reference path="../../Core/Component/IObserver"/>
var PF;
(function (PF) {
    var Component;
    (function (Component) {
        var Observer = (function () {
            function Observer(callback) {
            }
            Observer.prototype.observe = function (object) {
                return this;
            };
            Observer.prototype.unobserve = function () {
            };
            Observer.prototype.silent = function () {
                return undefined;
            };
            return Observer;
        })();
        Component.Observer = Observer;
    })(Component = PF.Component || (PF.Component = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Component;
    (function (Component) {
        var Proxy = (function () {
            function Proxy() {
            }
            Proxy.prototype.remove = function () {
                Object.defineProperty(this.object, this.propertyName, this.oldPropertyDescriptor);
            };
            Proxy.prototype.initialize = function () {
                this.oldPropertyDescriptor.value;
                Object.defineProperty(this.object, this.propertyName, {
                    configurable: true,
                    enumerable: true,
                    get: this.getter.bind(this),
                    set: this.setter.bind(this)
                });
            };
            Proxy.prototype.getter = function () {
                return this.oldPropertyDescriptor.get ? this.oldPropertyDescriptor.get() : this.oldPropertyDescriptor.value;
            };
            Proxy.prototype.setter = function (value) {
                var oldValue = this.getter();
                if (value === oldValue) {
                    return;
                }
                this.proxyFunction(value, oldValue);
            };
            Proxy.prototype.setSourceValue = function (value) {
                if (this.oldPropertyDescriptor.set) {
                    this.oldPropertyDescriptor.set(value);
                }
                else {
                    this.oldPropertyDescriptor.value = value;
                }
            };
            Proxy.add = function (object, propertyName, proxyFunction) {
                var proxy = new Proxy();
                proxy.object = object;
                proxy.propertyName = propertyName;
                proxy.oldPropertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
                proxy.proxyFunction = proxyFunction;
                proxy.initialize();
                return proxy;
            };
            return Proxy;
        })();
        Component.Proxy = Proxy;
    })(Component = PF.Component || (PF.Component = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var ComponentModel;
    (function (ComponentModel) {
        var ObservableViewModel = (function (_super) {
            __extends(ObservableViewModel, _super);
            function ObservableViewModel() {
                _super.call(this);
            }
            return ObservableViewModel;
        })(ComponentModel.BaseViewModel);
        ComponentModel.ObservableViewModel = ObservableViewModel;
    })(ComponentModel = PF.ComponentModel || (PF.ComponentModel = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var View;
    (function (View) {
        var ViewFactory = (function () {
            function ViewFactory() {
            }
            ViewFactory.create = function (viewModel) {
                var index = ViewFactory.registeredViewModels.indexOf(viewModel.constructor), viewCtor, view;
                if (index < 0) {
                    throw new Error("No registered type");
                }
                viewCtor = ViewFactory.registeredViews[index];
                view = new viewCtor();
                view.dataContext = viewModel;
                return view;
            };
            ViewFactory.register = function (viewModel, view) {
                ViewFactory.registeredViews.push(view);
                ViewFactory.registeredViewModels.push(viewModel);
            };
            ViewFactory.registeredViews = [];
            ViewFactory.registeredViewModels = [];
            return ViewFactory;
        })();
        View.ViewFactory = ViewFactory;
    })(View = PF.View || (PF.View = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Collections;
    (function (Collections) {
        var Specialized;
        (function (Specialized) {
            (function (NotifyCollectionChangedAction) {
                NotifyCollectionChangedAction[NotifyCollectionChangedAction["Add"] = 0] = "Add";
                NotifyCollectionChangedAction[NotifyCollectionChangedAction["Move"] = 1] = "Move";
                NotifyCollectionChangedAction[NotifyCollectionChangedAction["Remove"] = 2] = "Remove";
                NotifyCollectionChangedAction[NotifyCollectionChangedAction["Replace"] = 3] = "Replace";
                NotifyCollectionChangedAction[NotifyCollectionChangedAction["Reset"] = 4] = "Reset";
            })(Specialized.NotifyCollectionChangedAction || (Specialized.NotifyCollectionChangedAction = {}));
            var NotifyCollectionChangedAction = Specialized.NotifyCollectionChangedAction;
        })(Specialized = Collections.Specialized || (Collections.Specialized = {}));
    })(Collections = PF.Collections || (PF.Collections = {}));
})(PF || (PF = {}));
var PF;
(function (PF) {
    var Collections;
    (function (Collections) {
        var Specialized;
        (function (Specialized) {
            /**
            *   Provides data for the CollectionChanged event.
            **/
            var NotifyCollectionChangedData = (function () {
                function NotifyCollectionChangedData(options) {
                    this.Action = options.Action;
                    this.NewItems = options.NewItems;
                    this.NewStartingIndex = options.NewStartingIndex;
                    this.OldItems = options.OldItems;
                    this.OldStartingIndex = options.OldStartingIndex;
                }
                return NotifyCollectionChangedData;
            })();
            Specialized.NotifyCollectionChangedData = NotifyCollectionChangedData;
        })(Specialized = Collections.Specialized || (Collections.Specialized = {}));
    })(Collections = PF.Collections || (PF.Collections = {}));
})(PF || (PF = {}));
/// <reference path="Interface/IEvent.ts" />
// PF View Module -------
// Realize PF view class and halper classes such as Point and etc.
var PF;
(function (PF) {
    var Event;
    (function (Event_1) {
        var Event = (function () {
            function Event() {
                this.Callbacks = [];
                this.Trigger = function (arg, context) {
                    var callbacks = this.Callbacks, callback;
                    for (var i = 0; i < callbacks.length; i++) {
                        callback = callbacks[i];
                        callback.Callback.apply(callback.Subscriber, [arg, context]);
                    }
                };
            }
            /** Подписаться на событие
            * @param {ICallback<ArgType>} callback Callback, который будет вызван при вызове функции
            * @param {any} subscriber Контекст, в котором должен быть вызван callback
            * @returns {ITypedSubscription<ArgType>} Объект типизированной подписки
            */
            Event.prototype.Subscribe = function (callback, subscriber) {
                var that = this, res = {
                    Callback: callback,
                    Event: that,
                    Unsubscribe: function () { that.Unsubscribe(callback); }
                };
                this.Callbacks.push({ Callback: callback, Subscriber: subscriber });
                return res;
            };
            /**
            *   Unsubscribe some callback from current event
            *   @param {Interface.ICallback<ArgType>} subscribet callback
            **/
            Event.prototype.Unsubscribe = function (callback) {
                var filteredList = [];
                for (var i = 0; i < this.Callbacks.length; i++) {
                    if (this.Callbacks[i].Callback !== callback) {
                        filteredList.push(this.Callbacks[i]);
                    }
                }
                this.Callbacks = filteredList;
            };
            return Event;
        })();
        Event_1.Event = Event;
    })(Event = PF.Event || (PF.Event = {}));
})(PF || (PF = {}));
///<reference path="../../Event/Event.ts"/> 
var PF;
(function (PF) {
    var Collections;
    (function (Collections) {
        var Specialized;
        (function (Specialized) {
            var NotifyCollectionChangedEvent = (function (_super) {
                __extends(NotifyCollectionChangedEvent, _super);
                function NotifyCollectionChangedEvent() {
                    _super.apply(this, arguments);
                }
                return NotifyCollectionChangedEvent;
            })(PF.Event.Event);
            Specialized.NotifyCollectionChangedEvent = NotifyCollectionChangedEvent;
        })(Specialized = Collections.Specialized || (Collections.Specialized = {}));
    })(Collections = PF.Collections || (PF.Collections = {}));
})(PF || (PF = {}));
///<reference path="../Event/Event.ts"/>
var PF;
(function (PF) {
    var ComponentModel;
    (function (ComponentModel) {
        var PropertyChangedEvent = (function (_super) {
            __extends(PropertyChangedEvent, _super);
            function PropertyChangedEvent() {
                _super.apply(this, arguments);
            }
            return PropertyChangedEvent;
        })(PF.Event.Event);
        ComponentModel.PropertyChangedEvent = PropertyChangedEvent;
    })(ComponentModel = PF.ComponentModel || (PF.ComponentModel = {}));
})(PF || (PF = {}));
//# sourceMappingURL=compiled.js.map