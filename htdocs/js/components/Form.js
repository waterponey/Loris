!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),FormElement=function(_React$Component){function FormElement(){_classCallCheck(this,FormElement);var _this=_possibleConstructorReturn(this,(FormElement.__proto__||Object.getPrototypeOf(FormElement)).call(this));return _this.getFormElements=_this.getFormElements.bind(_this),_this.handleSubmit=_this.handleSubmit.bind(_this),_this}return _inherits(FormElement,_React$Component),_createClass(FormElement,[{key:"getFormElements",value:function(){var formElementsHTML=[],columns=this.props.columns,maxColumnSize=12,colSize=Math.floor(maxColumnSize/columns),colClass="col-xs-12 col-sm-"+colSize+" col-md-"+colSize,filter=this.props.formElements;return Object.keys(filter).forEach(function(objKey,index){var userInput=this.props.onUserInput?this.props.onUserInput:filter[objKey].onUserInput,value=filter[objKey].value?filter[objKey].value:"";formElementsHTML.push(React.createElement("div",{key:"el_"+index,className:colClass},React.createElement(LorisElement,{element:filter[objKey],onUserInput:userInput,value:value})))}.bind(this)),React.Children.forEach(this.props.children,function(child,key){var elementClass="col-xs-12 col-sm-12 col-md-12";React.isValidElement(child)&&"function"==typeof child.type&&(elementClass=colClass),formElementsHTML.push(React.createElement("div",{key:"el_child_"+key,className:elementClass},child))}),formElementsHTML}},{key:"handleSubmit",value:function(e){this.props.onSubmit&&(e.preventDefault(),this.props.onSubmit(e))}},{key:"render",value:function(){var encType=this.props.fileUpload?"multipart/form-data":null,formElements=this.getFormElements(),rowStyles={display:"flex",flexWrap:"wrap"};return React.createElement("form",{name:this.props.name,id:this.props.id,className:this.props.class,method:this.props.method,action:this.props.action,encType:encType,onSubmit:this.handleSubmit},React.createElement("div",{className:"row",style:rowStyles},formElements))}}]),FormElement}(React.Component);FormElement.propTypes={name:React.PropTypes.string.isRequired,id:React.PropTypes.string,method:React.PropTypes.oneOf(["POST","GET"]),action:React.PropTypes.string,class:React.PropTypes.string,columns:React.PropTypes.number,formElements:React.PropTypes.shape({elementName:React.PropTypes.shape({name:React.PropTypes.string,type:React.PropTypes.string})}),onSubmit:React.PropTypes.func,onUserInput:React.PropTypes.func},FormElement.defaultProps={name:null,id:null,method:"POST",action:void 0,class:"form-horizontal",columns:1,fileUpload:!1,formElements:{},onSubmit:function(){console.warn("onSubmit() callback is not set!")}};var SearchableDropdown=function(_React$Component2){function SearchableDropdown(){_classCallCheck(this,SearchableDropdown);var _this2=_possibleConstructorReturn(this,(SearchableDropdown.__proto__||Object.getPrototypeOf(SearchableDropdown)).call(this));return _this2.getKeyFromValue=_this2.getKeyFromValue.bind(_this2),_this2.handleChange=_this2.handleChange.bind(_this2),_this2.handleBlur=_this2.handleBlur.bind(_this2),_this2.getTextInputValue=_this2.getTextInputValue.bind(_this2),_this2}return _inherits(SearchableDropdown,_React$Component2),_createClass(SearchableDropdown,[{key:"getKeyFromValue",value:function(value){var options=this.props.options;return Object.keys(options).find(function(o){return options[o]===value})}},{key:"handleChange",value:function(e){var value=this.getKeyFromValue(e.target.value);this.props.strictSearch||void 0!==value||(value=e.target.value),this.props.onUserInput(this.props.name,value)}},{key:"handleBlur",value:function(e){if(this.props.strictSearch){var value=e.target.value,options=this.props.options;Object.values(options).indexOf(value)===-1&&(document.querySelector('input[name="'+(this.props.name+"_input")+'"]').value="",this.props.onUserInput(this.props.name,""))}}},{key:"getTextInputValue",value:function(){return document.querySelector('input[name="'+(this.props.name+"_input")+'"]').value}},{key:"render",value:function(){var required=this.props.required?"required":null,disabled=this.props.disabled?"disabled":null,options=this.props.options,strictMessage="Entry must be included in provided list of options.",errorMessage=null,requiredHTML=null,elementClass="row form-group";if(required&&(requiredHTML=React.createElement("span",{className:"text-danger"},"*")),this.props.errorMessage)errorMessage=React.createElement("span",null,this.props.errorMessage),elementClass="row form-group has-error";else if(this.props.required&&""===this.props.value){var msg="This field is required!";msg+=this.props.strictSearch?" "+strictMessage:"",errorMessage=React.createElement("span",null,msg),elementClass="row form-group has-error"}else this.props.strictSearch&&""===this.props.value&&(errorMessage=React.createElement("span",null,strictMessage),elementClass="row form-group has-error");var value=void 0;return void 0!==this.props.value&&(value=Object.keys(options).indexOf(this.props.value)>-1?options[this.props.value]:this.getTextInputValue()),React.createElement("div",{className:elementClass},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.label},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},React.createElement("input",{type:"text",name:this.props.name+"_input",value:value,id:this.props.id,list:this.props.name+"_list",className:"form-control",disabled:disabled,placeholder:this.props.placeHolder,onChange:this.handleChange,onBlur:this.handleBlur,required:required}),React.createElement("datalist",{id:this.props.name+"_list"},Object.keys(options).map(function(option){return React.createElement("option",{value:options[option],key:option})})),errorMessage))}}]),SearchableDropdown}(React.Component);SearchableDropdown.propTypes={name:React.PropTypes.string.isRequired,options:React.PropTypes.object.isRequired,id:React.PropTypes.string,strictSearch:React.PropTypes.bool,label:React.PropTypes.string,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.array]),class:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,errorMessage:React.PropTypes.string,placeHolder:React.PropTypes.string,onUserInput:React.PropTypes.func},SearchableDropdown.defaultProps={name:"",options:{},strictSearch:!0,label:"",value:void 0,id:null,class:"",disabled:!1,required:!1,errorMessage:"",placeHolder:"",onUserInput:function(){console.warn("onUserInput() callback is not set")}};var SelectElement=function(_React$Component3){function SelectElement(){_classCallCheck(this,SelectElement);var _this3=_possibleConstructorReturn(this,(SelectElement.__proto__||Object.getPrototypeOf(SelectElement)).call(this));return _this3.handleChange=_this3.handleChange.bind(_this3),_this3}return _inherits(SelectElement,_React$Component3),_createClass(SelectElement,[{key:"handleChange",value:function(e){var value=e.target.value,options=e.target.options,numOfOptions=options.length;if(this.props.multiple&&numOfOptions>1){value=[];for(var i=0,l=numOfOptions;i<l;i++)options[i].selected&&value.push(options[i].value)}this.props.onUserInput(this.props.name,value)}},{key:"render",value:function(){var multiple=this.props.multiple?"multiple":null,required=this.props.required?"required":null,disabled=this.props.disabled?"disabled":null,options=this.props.options,errorMessage=null,emptyOptionHTML=null,requiredHTML=null,elementClass="row form-group";required&&(requiredHTML=React.createElement("span",{className:"text-danger"},"*")),this.props.emptyOption&&(emptyOptionHTML=React.createElement("option",null)),(this.props.hasError||this.props.required&&""===this.props.value)&&(errorMessage=React.createElement("span",null,this.props.errorMessage),elementClass="row form-group has-error");var value=this.props.value||(multiple?[]:"");return React.createElement("div",{className:elementClass},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.label},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},React.createElement("select",{name:this.props.name,multiple:multiple,className:"form-control",id:this.props.id,value:value,onChange:this.handleChange,required:required,disabled:disabled},emptyOptionHTML,Object.keys(options).map(function(option){return React.createElement("option",{value:option,key:option},options[option])})),errorMessage))}}]),SelectElement}(React.Component);SelectElement.propTypes={name:React.PropTypes.string.isRequired,options:React.PropTypes.object.isRequired,label:React.PropTypes.string,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.array]),id:React.PropTypes.string,class:React.PropTypes.string,multiple:React.PropTypes.bool,disabled:React.PropTypes.bool,required:React.PropTypes.bool,emptyOption:React.PropTypes.bool,hasError:React.PropTypes.bool,errorMessage:React.PropTypes.string,onUserInput:React.PropTypes.func},SelectElement.defaultProps={name:"",options:{},label:"",value:void 0,id:null,class:"",multiple:!1,disabled:!1,required:!1,emptyOption:!0,hasError:!1,errorMessage:"The field is required!",onUserInput:function(){console.warn("onUserInput() callback is not set")}};var TagsElement=function(_React$Component4){function TagsElement(){_classCallCheck(this,TagsElement);var _this4=_possibleConstructorReturn(this,(TagsElement.__proto__||Object.getPrototypeOf(TagsElement)).call(this));return _this4.handleChange=_this4.handleChange.bind(_this4),_this4.handleKeyPress=_this4.handleKeyPress.bind(_this4),_this4.handleAdd=_this4.handleAdd.bind(_this4),_this4.handleRemove=_this4.handleRemove.bind(_this4),_this4.getKeyFromValue=_this4.getKeyFromValue.bind(_this4),_this4.canAddItem=_this4.canAddItem.bind(_this4),_this4}return _inherits(TagsElement,_React$Component4),_createClass(TagsElement,[{key:"handleChange",value:function(e){this.props.onUserInput(this.props.pendingValKey,e.target.value)}},{key:"handleKeyPress",value:function(e){13!==e.keyCode&&13!==e.which||(e.preventDefault(),this.handleAdd())}},{key:"handleAdd",value:function(){var options=this.props.options,value=this.props.value;this.props.useSearch&&Object.values(options).indexOf(value)>-1&&(value=this.getKeyFromValue(value)),this.canAddItem(value)&&this.props.onUserAdd(this.props.name,value,this.props.pendingValKey)}},{key:"handleRemove",value:function(e){var value=e.target.getAttribute("data-item");this.props.onUserRemove(this.props.name,value)}},{key:"getKeyFromValue",value:function(value){var options=this.props.options;return Object.keys(options).find(function(o){return options[o]===value})}},{key:"canAddItem",value:function(value){var result=!0;return value?!this.props.allowDupl&&this.props.items.indexOf(value)>-1?result=!1:this.props.useSearch&&this.props.strictSearch&&Object.keys(this.props.options).indexOf(value)===-1&&(result=!1):result=!1,result}},{key:"render",value:function(){var disabled=this.props.disabled?"disabled":null,requiredHTML=null,emptyOptionHTML=null,errorMessage=null,elementClass="row form-group";this.props.required&&(requiredHTML=React.createElement("span",{className:"text-danger"},"*")),this.props.emptyOption&&(emptyOptionHTML=React.createElement("option",null)),this.props.errorMessage&&(errorMessage=React.createElement("span",null,this.props.errorMessage),elementClass="row form-group has-error");var input=void 0,options=this.props.options;input=Object.keys(options).length>0&&this.props.useSearch?React.createElement("div",null,React.createElement("input",{type:"text",name:this.props.name,id:this.props.id,list:this.props.id+"_list",className:"form-control",value:this.props.value||"",disabled:disabled,onChange:this.handleChange,onKeyPress:this.handleKeyPress}),React.createElement("datalist",{id:this.props.id+"_list"},Object.keys(options).map(function(option){return React.createElement("option",{value:options[option],key:option},options[option])}))):Object.keys(options).length>0?React.createElement("select",{name:this.props.name,className:"form-control",id:this.props.id,value:this.props.value,disabled:disabled,onChange:this.handleChange,onKeyPress:this.handleKeyPress},emptyOptionHTML,Object.keys(options).map(function(option){return React.createElement("option",{value:option,key:option},options[option])})):React.createElement("input",{type:"text",name:this.props.name,id:this.props.id,className:"form-control",value:this.props.value||"",disabled:disabled,onChange:this.handleChange,onKeyPress:this.handleKeyPress});var items=this.props.items.map(function(item){var itmTxt=void 0;return itmTxt=Object.keys(options).length>0&&void 0!==options[item]?options[item]:item,React.createElement("button",{className:"btn btn-info btn-inline",type:"button",onClick:this.handleRemove,"data-item":item},itmTxt," ",React.createElement("span",{className:"glyphicon glyphicon-remove","data-item":item}))},this);return React.createElement("div",{className:elementClass},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.id},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},items,input,errorMessage,React.createElement("button",{className:"btn btn-success btn-add-tag",id:this.props.id+"Add",type:"button",onClick:this.handleAdd},React.createElement("span",{className:"glyphicon glyphicon-plus"}),this.props.btnLabel)))}}]),TagsElement}(React.Component);TagsElement.propTypes={name:React.PropTypes.string.isRequired,id:React.PropTypes.string.isRequired,pendingValKey:React.PropTypes.string.isRequired,options:React.PropTypes.object,items:React.PropTypes.array,label:React.PropTypes.string,value:React.PropTypes.string,class:React.PropTypes.string,multiple:React.PropTypes.bool,required:React.PropTypes.bool,disabled:React.PropTypes.bool,emptyOption:React.PropTypes.bool,errorMessage:React.PropTypes.string,btnLabel:React.PropTypes.string,allowDupl:React.PropTypes.bool,useSearch:React.PropTypes.bool,strictSearch:React.PropTypes.bool,onUserInput:React.PropTypes.func,onUserAdd:React.PropTypes.func,onUserRemove:React.PropTypes.func},TagsElement.defaultProps={name:"",options:{},items:[],label:"",value:void 0,id:null,class:"",required:!1,disabled:!1,emptyOption:!0,hasError:!1,allowDupl:!1,useSearch:!1,strictSearch:!1,errorMessage:"",pendingValKey:"",btnLabel:"Add Tag",onUserInput:function(){console.warn("onUserInput() callback is not set")},onUserAdd:function(){console.warn("onUserAdd() callback is not set")},onUserRemove:function(){console.warn("onUserRemove() callback is not set")}};var TextareaElement=function(_React$Component5){function TextareaElement(){_classCallCheck(this,TextareaElement);var _this5=_possibleConstructorReturn(this,(TextareaElement.__proto__||Object.getPrototypeOf(TextareaElement)).call(this));return _this5.handleChange=_this5.handleChange.bind(_this5),_this5}return _inherits(TextareaElement,_React$Component5),_createClass(TextareaElement,[{key:"handleChange",value:function(e){this.props.onUserInput(this.props.name,e.target.value)}},{key:"render",value:function(){var disabled=this.props.disabled?"disabled":null,required=this.props.required?"required":null,requiredHTML=null;return required&&(requiredHTML=React.createElement("span",{className:"text-danger"},"*")),React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.id},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},React.createElement("textarea",{cols:this.props.cols,rows:this.props.rows,className:"form-control",name:this.props.name,id:this.props.id,value:this.props.value||"",required:required,disabled:disabled,onChange:this.handleChange})))}}]),TextareaElement}(React.Component);TextareaElement.propTypes={name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,rows:React.PropTypes.number,cols:React.PropTypes.number,onUserInput:React.PropTypes.func},TextareaElement.defaultProps={name:"",label:"",value:"",id:null,disabled:!1,required:!1,rows:4,cols:25,onUserInput:function(){console.warn("onUserInput() callback is not set")}};var TextboxElement=function(_React$Component6){function TextboxElement(){_classCallCheck(this,TextboxElement);var _this6=_possibleConstructorReturn(this,(TextboxElement.__proto__||Object.getPrototypeOf(TextboxElement)).call(this));return _this6.handleChange=_this6.handleChange.bind(_this6),_this6.handleBlur=_this6.handleBlur.bind(_this6),_this6}return _inherits(TextboxElement,_React$Component6),_createClass(TextboxElement,[{key:"handleChange",value:function(e){this.props.onUserInput(this.props.name,e.target.value)}},{key:"handleBlur",value:function(e){this.props.onUserBlur(this.props.name,e.target.value)}},{key:"render",value:function(){var disabled=this.props.disabled?"disabled":null,required=this.props.required?"required":null,errorMessage=null,requiredHTML=null,elementClass="row form-group";return required&&(requiredHTML=React.createElement("span",{className:"text-danger"},"*")),this.props.errorMessage&&(errorMessage=React.createElement("span",null,this.props.errorMessage),elementClass="row form-group has-error"),React.createElement("div",{className:elementClass},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.id},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},React.createElement("input",{type:"text",className:"form-control",name:this.props.name,id:this.props.id,value:this.props.value||"",required:required,disabled:disabled,onChange:this.handleChange,onBlur:this.handleBlur}),errorMessage))}}]),TextboxElement}(React.Component);TextboxElement.propTypes={name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,errorMessage:React.PropTypes.string,onUserInput:React.PropTypes.func,onUserBlur:React.PropTypes.func},TextboxElement.defaultProps={name:"",label:"",value:"",id:null,disabled:!1,required:!1,errorMessage:"",onUserInput:function(){console.warn("onUserInput() callback is not set")},onUserBlur:function(){}};var DateElement=function(_React$Component7){function DateElement(){_classCallCheck(this,DateElement);var _this7=_possibleConstructorReturn(this,(DateElement.__proto__||Object.getPrototypeOf(DateElement)).call(this));return _this7.handleChange=_this7.handleChange.bind(_this7),_this7}return _inherits(DateElement,_React$Component7),_createClass(DateElement,[{key:"handleChange",value:function(e){this.props.onUserInput(this.props.name,e.target.value)}},{key:"render",value:function(){var disabled=this.props.disabled?"disabled":null,required=this.props.required?"required":null,requiredHTML=null;return required&&(requiredHTML=React.createElement("span",{className:"text-danger"},"*")),React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.label},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},React.createElement("input",{type:"date",className:"form-control",name:this.props.name,id:this.props.id,min:this.props.minYear,max:this.props.maxYear,onChange:this.handleChange,value:this.props.value||"",required:required,disabled:disabled})))}}]),DateElement}(React.Component);DateElement.propTypes={name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,onUserInput:React.PropTypes.func},DateElement.defaultProps={name:"",label:"",value:"",id:null,disabled:!1,required:!1,onUserInput:function(){console.warn("onUserInput() callback is not set")}};var TimeElement=function(_React$Component8){function TimeElement(){_classCallCheck(this,TimeElement);var _this8=_possibleConstructorReturn(this,(TimeElement.__proto__||Object.getPrototypeOf(TimeElement)).call(this));return _this8.handleChange=_this8.handleChange.bind(_this8),_this8}return _inherits(TimeElement,_React$Component8),_createClass(TimeElement,[{key:"handleChange",value:function(e){this.props.onUserInput(this.props.name,e.target.value)}},{key:"render",value:function(){var disabled=this.props.disabled?"disabled":null,required=this.props.required?"required":null,requiredHTML=null;return required&&(requiredHTML=React.createElement("span",{className:"text-danger"},"*")),React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.label},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},React.createElement("input",{type:"time",className:"form-control",name:this.props.name,id:this.props.id,onChange:this.handleChange,value:this.props.value||"",required:required,disabled:disabled,pattern:"([0-1][0-9]|2[0-4]|[1-9]):([0-5][0-9])(:([0-5][0-9]))?",title:"Input must be in one of the following formats: HH:MM or HH:MM:SS"})))}}]),TimeElement}(React.Component);TimeElement.propTypes={name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,onUserInput:React.PropTypes.func},TimeElement.defaultProps={name:"",label:"",value:"",id:"",disabled:!1,required:!1,onUserInput:function(){console.warn("onUserInput() callback is not set")}};var NumericElement=function(_React$Component9){function NumericElement(){_classCallCheck(this,NumericElement);var _this9=_possibleConstructorReturn(this,(NumericElement.__proto__||Object.getPrototypeOf(NumericElement)).call(this));return _this9.handleChange=_this9.handleChange.bind(_this9),_this9}return _inherits(NumericElement,_React$Component9),_createClass(NumericElement,[{key:"handleChange",value:function(e){this.props.onUserInput(this.props.name,e.target.value)}},{key:"render",value:function(){var disabled=this.props.disabled?"disabled":null,required=this.props.required?"required":null,requiredHTML=null;return React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.id},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},React.createElement("input",{type:"number",className:"form-control",name:this.props.name,id:this.props.id,min:this.props.min,max:this.props.max,value:this.props.value,disabled:disabled,required:required,onChange:this.handleChange})))}}]),NumericElement}(React.Component);NumericElement.propTypes={name:React.PropTypes.string.isRequired,min:React.PropTypes.number.isRequired,max:React.PropTypes.number.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,onUserInput:React.PropTypes.func},NumericElement.defaultProps={name:"",min:null,max:null,label:"",value:"",id:null,required:!1,disabled:!1,onUserInput:function(){console.warn("onUserInput() callback is not set")}};var FileElement=function(_React$Component10){function FileElement(){_classCallCheck(this,FileElement);var _this10=_possibleConstructorReturn(this,(FileElement.__proto__||Object.getPrototypeOf(FileElement)).call(this));return _this10.handleChange=_this10.handleChange.bind(_this10),_this10}return _inherits(FileElement,_React$Component10),_createClass(FileElement,[{key:"handleChange",value:function(e){var file=e.target.files[0]?e.target.files[0]:"";this.props.onUserInput(this.props.name,file)}},{key:"render",value:function(){var required=this.props.required?"required":null,fileName=this.props.value?this.props.value.name:void 0,requiredHTML=null,errorMessage="",elementClass="row form-group";required&&(requiredHTML=React.createElement("span",{className:"text-danger"},"*"));var truncateEllipsis={display:"table",tableLayout:"fixed",width:"100%",whiteSpace:"nowrap"},truncateEllipsisChild={display:"table-cell",overflow:"hidden",textOverflow:"ellipsis"};this.props.hasError&&(errorMessage=this.props.errorMessage,elementClass="row form-group has-error");var fileHTML=document.querySelector(".fileUpload");return fileHTML&&!fileName&&(fileHTML.value=""),this.props.disabled?(truncateEllipsis.paddingTop="7px",React.createElement("div",{className:elementClass},React.createElement("label",{className:"col-sm-3 control-label"},this.props.label),React.createElement("div",{className:"col-sm-9"},React.createElement("div",{style:truncateEllipsis},React.createElement("span",{style:truncateEllipsisChild},fileName))))):React.createElement("div",{className:elementClass},React.createElement("label",{className:"col-sm-3 control-label"},this.props.label,requiredHTML),React.createElement("div",{className:"col-sm-9"},React.createElement("div",{className:"input-group"},React.createElement("div",{tabIndex:"-1",className:"form-control file-caption kv-fileinput-caption"},React.createElement("div",{style:truncateEllipsis},React.createElement("span",{style:truncateEllipsisChild},fileName)),React.createElement("div",{className:"file-caption-name",id:"video_file"})),React.createElement("div",{className:"input-group-btn"},React.createElement("div",{className:"btn btn-primary btn-file"},React.createElement("i",{className:"glyphicon glyphicon-folder-open"})," Browse",React.createElement("input",{type:"file",className:"fileUpload",name:this.props.name,onChange:this.handleChange,required:required})))),React.createElement("span",null,errorMessage)))}}]),FileElement}(React.Component);FileElement.propTypes={name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.object]),id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,hasError:React.PropTypes.bool,errorMessage:React.PropTypes.string,onUserInput:React.PropTypes.func},FileElement.defaultProps={name:"",label:"File to Upload",value:"",id:null,disabled:!1,required:!1,hasError:!1,errorMessage:"The field is required!",onUserInput:function(){console.warn("onUserInput() callback is not set")}};var StaticElement=function(_React$Component11){function StaticElement(){return _classCallCheck(this,StaticElement),_possibleConstructorReturn(this,(StaticElement.__proto__||Object.getPrototypeOf(StaticElement)).apply(this,arguments))}return _inherits(StaticElement,_React$Component11),_createClass(StaticElement,[{key:"render",value:function(){return React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label"},this.props.label),React.createElement("div",{className:"col-sm-9"},React.createElement("p",{className:"form-control-static"},this.props.text)))}}]),StaticElement}(React.Component);StaticElement.propTypes={label:React.PropTypes.string,text:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element])},StaticElement.defaultProps={label:"",text:null};var LinkElement=function(_React$Component12){function LinkElement(){return _classCallCheck(this,LinkElement),_possibleConstructorReturn(this,(LinkElement.__proto__||Object.getPrototypeOf(LinkElement)).apply(this,arguments))}return _inherits(LinkElement,_React$Component12),_createClass(LinkElement,[{key:"render",value:function(){return React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label"},this.props.label),React.createElement("div",{className:"col-sm-9"},React.createElement("p",{className:"form-control-static"},React.createElement("a",{href:this.props.href},this.props.text))))}}]),LinkElement}(React.Component);LinkElement.propTypes={label:React.PropTypes.string,text:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element]),href:React.PropTypes.string},LinkElement.defaultProps={label:"",text:null,href:null};var ButtonElement=function(_React$Component13){function ButtonElement(){_classCallCheck(this,ButtonElement);var _this13=_possibleConstructorReturn(this,(ButtonElement.__proto__||Object.getPrototypeOf(ButtonElement)).call(this));return _this13.handleClick=_this13.handleClick.bind(_this13),_this13}return _inherits(ButtonElement,_React$Component13),_createClass(ButtonElement,[{key:"handleClick",value:function(e){this.props.onUserInput(e)}},{key:"render",value:function(){return React.createElement("div",{className:"row form-group"},React.createElement("div",{className:this.props.columnSize},React.createElement("button",{type:this.props.type,className:this.props.buttonClass,onClick:this.handleClick},this.props.label)))}}]),ButtonElement}(React.Component);ButtonElement.propTypes={label:React.PropTypes.string,type:React.PropTypes.string,onUserInput:React.PropTypes.func},ButtonElement.defaultProps={label:"Submit",type:"submit",buttonClass:"btn btn-primary",columnSize:"col-sm-9 col-sm-offset-3",onUserInput:function(){console.warn("onUserInput() callback is not set")}};var LorisElement=function(_React$Component14){function LorisElement(){return _classCallCheck(this,LorisElement),_possibleConstructorReturn(this,(LorisElement.__proto__||Object.getPrototypeOf(LorisElement)).apply(this,arguments))}return _inherits(LorisElement,_React$Component14),_createClass(LorisElement,[{key:"render",value:function(){var elementProps=this.props.element;elementProps.ref=elementProps.name,elementProps.onUserInput=this.props.onUserInput;var elementHtml=React.createElement("div",null);switch(elementProps.type){case"text":elementHtml=React.createElement(TextboxElement,elementProps);break;case"tags":elementHtml=React.createElement(TagsElement,elementProps);break;case"select":elementHtml=React.createElement(SelectElement,elementProps);break;case"search":elementHtml=React.createElement(SearchableDropdown,elementProps);break;case"date":elementHtml=React.createElement(DateElement,elementProps);break;case"time":elementHtml=React.createElement(TimeElement,elementProps);break;case"numeric":elementHtml=React.createElement(NumericElement,elementProps);break;case"textarea":elementHtml=React.createElement(TextareaElement,elementProps);break;case"file":elementHtml=React.createElement(FileElement,elementProps);break;case"static":elementHtml=React.createElement(StaticElement,elementProps);
break;case"link":elementHtml=React.createElement(LinkElement,elementProps);break;default:console.warn("Element of type "+elementProps.type+" is not currently implemented!")}return elementHtml}}]),LorisElement}(React.Component);window.FormElement=FormElement,window.SelectElement=SelectElement,window.TagsElement=TagsElement,window.SearchableDropdown=SearchableDropdown,window.TextareaElement=TextareaElement,window.TextboxElement=TextboxElement,window.DateElement=DateElement,window.TimeElement=TimeElement,window.NumericElement=NumericElement,window.FileElement=FileElement,window.StaticElement=StaticElement,window.LinkElement=LinkElement,window.ButtonElement=ButtonElement,window.LorisElement=LorisElement,exports.default={FormElement:FormElement,SelectElement:SelectElement,TagsElement:TagsElement,SearchableDropdown:SearchableDropdown,TextareaElement:TextareaElement,TextboxElement:TextboxElement,DateElement:DateElement,TimeElement:TimeElement,NumericElement:NumericElement,FileElement:FileElement,StaticElement:StaticElement,LinkElement:LinkElement,ButtonElement:ButtonElement,LorisElement:LorisElement}}]);
//# sourceMappingURL=Form.js.map