module Core.Collections.Specialized {
    /**
    *   Provides data for the CollectionChanged event.
    **/
    export class NotifyCollectionChangedData {
        public constructor(options: NotifyCollectionChangedData.Options) {
            this.Action = options.Action;
            this.NewItems = options.NewItems;
            this.NewStartingIndex = options.NewStartingIndex;
            this.OldItems = options.OldItems;
            this.OldStartingIndex = options.OldStartingIndex;
        }
        /**
        *   Gets the action that caused the event.
        **/
        public Action: NotifyCollectionChangedAction;

        /**
        *   Gets the list of new items involved in the change.
        **/
        public NewItems: any[];

        /**
        *   Gets the index at which the change occurred.
        **/
        public NewStartingIndex: number;

        /**
        *   Gets the list of items affected by a Replace, Remove, or Move action.
        **/
        public OldItems: any[];

        /**
        *   Gets the index at which a Move, Remove, or Replace action occurred.
        **/
        public OldStartingIndex: number;
    }
}

module Core.Collections.Specialized.NotifyCollectionChangedData {
    /**
    *   Provides data for the CollectionChanged event.
    **/
    export interface Options {
        Action: NotifyCollectionChangedAction;
        NewItems?: any[];
        NewStartingIndex?: number;
        OldItems?: any[];
        OldStartingIndex?: number;
    }
}