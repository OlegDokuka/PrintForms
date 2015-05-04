module Core.Collections.Specialized {
    /**
    *   Notifies listeners of dynamic changes, 
    *   such as when items get added and removed 
    *   or the whole list is refreshed.
    **/
    export interface INotifyCollectionChanged {
        /**
        *   Occurs when the collection changes.
        **/
        CollectionChanged: NotifyCollectionChangedEvent;
    }
}  