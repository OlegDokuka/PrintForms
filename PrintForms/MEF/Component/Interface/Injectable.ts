module PF.Component.Interface {
    import Class = Type.Class;
    export interface Injectable {
        clazz: Class;
        isSingleton: boolean;
    }
} 