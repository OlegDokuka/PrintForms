/// <reference path="Core/Collections/ObjectModel/ObservableCollection.ts"/>
/// <reference path="Core/View/DependencyObject.ts"/>
/// <reference path="Core/Annotation/Handler"/>
/// <reference path="Base/ComponentModel/BaseViewModel.ts"/>
/// <reference path="Base/ComponentModel/GroupViewModel.ts"/>
/// <reference path="Base/View/BaseView.ts"/>
/// <reference path="Base/View/View.ts"/>
/// <reference path="Base/View/GroupView.ts"/>
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

import View = PF.View;
import ComponentModel = PF.ComponentModel;
import injection = PF.Annotation.injection;
import inject = PF.Annotation.inject;
import resolve = PF.Annotation.resolve
import handler = PF.Annotation.handler;
import DocumentView = PF.View.DocumentView;
import DocumentViewModel = PF.ComponentModel.DocumentViewModel;
import LinearLayout = PF.View.LinearLayout
import LinearLayoutViewModel = PF.ComponentModel.LinearLayoutViewModel;

declare var $;
var cntView;
var textViewModel: PF.ComponentModel.TextViewModel, containerViewModel;

window.onload = () => {
    let document: DocumentView, documentVM: DocumentViewModel;
    let presenter: LinearLayout<LinearLayoutViewModel>, presenterViewModel: LinearLayoutViewModel;

    document = new DocumentView();
    documentVM = new DocumentViewModel();
    presenter = new LinearLayout();
    presenterViewModel = new LinearLayoutViewModel();

    document.dataContext = documentVM;
    presenter.dataContext = presenterViewModel;
    document.onDrop(presenter);
};