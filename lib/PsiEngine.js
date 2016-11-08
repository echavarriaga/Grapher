/* Generated power ModelPsi (@VERSION 2.1) 
* Model Name: PsiEngine
* Version: 3.0
* Author: Enrique Chavarriaga
* 
* Copyright 2015.
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
* http://www.b2tconcept/psiXml/license
*
*/

/* Type DEBUG Psi -------------- */
if (PsiOut && PsiOut.console) PsiOut.console.debug = false;
/* ----------------------------- */


/*-----------------------------------------------------
*=Script[inheritance]: Inheritance
* Description: Classical Inheritance in JavaScript
*-----------------------------------------------------*/
/*-----------------------------------------------------
* Classical Inheritance in JavaScript
* Douglas Crockford
* copy: http://www.crockford.com/javascript/inheritance.html
*-----------------------------------------------------*/

Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};

Function.prototype.methods = function(functions) {
  for (var name in functions)
    this.prototype[name] = functions[name];
  return this;
};

/* It should be called after both classes are defined, but 
   before the inheriting class's methods are added. */
Function.method('inherits', function(parent) {
  var d = {}, p = (this.prototype = new parent());
  this.method('uber', function uber(name) {
    if (!(name in d)) {
      d[name] = 0;
    }
    var f, r, t = d[name], v = parent.prototype;
    if (t) {
      while (t) {
        v = v.constructor.prototype;
        t -= 1;
      }
      f = v[name];
    } else {
      f = p[name];
      if (f == this[name]) {
        f = v[name];
      }
    }
    d[name] += 1;
    r = f.apply(this, Array.prototype.slice.apply(arguments, [1]));
    d[name] -= 1;
    return r;
  });
  return this;
});


/* The swiss method loops through the arguments. 
For each name, it copies a member from the parent's 
prototype to the new class's prototype. */
Function.method('swiss', function(parent) {
  for (var i = 1; i < arguments.length; i += 1) {
    var name = arguments[i];
    this.prototype[name] = parent.prototype[name];
  }
  return this;
});


/*-----------------------------------------------------
*=Script[utils]: Utils
* Description: Utils JavaScript
*-----------------------------------------------------*/
/*-----------------------------------------------------
* Function:  gup
*-----------------------------------------------------*/
function gup(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)",
      regex = new RegExp(regexS),
      results = regex.exec(window.location.href);
  return results ? results[1] : null;
}
/*-----------------------------------------------------
* Function: apply
*-----------------------------------------------------*/
var APPLY_PATTERN = /\{\{([\w\.:@-]*)\}\}/g;  
function apply(source, data) {
  return source.replace(APPLY_PATTERN, function (str, key) {
    var keys = key.split("."),
        v = data[keys.shift()];
    if (v.jquery)
      switch(keys.length){
        case 0: v =  v.text(); break;
        case 1: v = v.attr(keys[0]); break;
        case 2: v = keys[1]=="*" ? v.find(keys[0]).text() : v.find(keys[0]).attr(keys[1]); break;
      }
      //v = keys.length==1 ? v.attr(keys[0]) : v.text();
    if ($.isPlainObject(v))
      for (var i = 0, l = keys.length; i < l; i++) 
      	v = v[keys[i]];
    return (typeof v !== "undefined" && v !== null) ? v : "";
  }); 
}
  

/*-----------------------------------------------------
*=Component[psi_texts]: PsiText
* Description: Administration of informative messages,warnings and errors for any Psi language
*-----------------------------------------------------*/
var PsiText = (function () {  

  //Component Properties   
  //Property: setTexts. Description: Set of text sets  
  var setTexts = {};


/*-----------------------------------------------------
*=Class[texts]: Texts
* Description: Manage a list of texts
*-----------------------------------------------------*/
function Texts (alias, map, lang) {
  //Properties   
  //Property: alias. Description: Alias  
  this.alias = alias;  
  //Property: map. Description: Map of texts  
  this.map = map;  
  //Property: lang. Description: Text language. The default value is 'ES'  
  this.lang = lang?lang:'ES'; 
}; 
//* Definitions Events and Methods
Texts.methods({
  //Methods   
  //Method: exist. Description: Establish if there is text  
  exist: function(key){ 
    return this.map[this.lang]!=null && this.map[this.lang][key]!=null;
   },  
  //Method: get. Description: Get with input parameters  
  get: function(key, params){ 
  try { 
    //Determinar existencia de texto;
    if (!this.exist(key)) throw new Error("Undefined text: Alias="+this.alias+"; key="+key+", params="+params);
    //Construir texto
    var text =this.map[this.lang][key];
    for (var i=0; i<params.length; i++)
      text = text.replace("$"+(i+1).toString(), params[i]!=null ? params[i].toString() : "");
    return text;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"get", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Texts"; }
});


  //Component Methods   
  //Method: _getObjectAndText. Description: Get object and text of the arguments  
  function _getObjectAndText(alias, args){ 
    var result = { object: typeof args[0] != 'string' ? args[0] : null, text:  null, debug: null }, 
        key = result.object==null ? args[0] : args.length>1 ? args[1] : null,
        params = new Array(), 
        init = result.object!=null ? 2:1;
    for(var i=init; i<args.length; i++)
      params.push(args[i]);
    result.text = this.TEXT(alias, key, params);
    result.debug = result.object && result.object.toDebug 
                 ? result.object.toDebug()+"-> " 
                 : result.object && result.object.program ? result.object.program.toDebug()+"-> " : ""; 
    return result;
   };  
  //Method: registerSet. Description: Register the set of texts with an alias  
  function registerSet(alias, map, lang){ 
  try { 
    var newTexts = new Texts(alias, map, lang);
    setTexts[alias] = newTexts;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"registerSet", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: getSet. Description: Get set of texts Obtener conjunto de textos  
  function getSet(alias){ 
    if (setTexts[alias]!=null) return setTexts[alias];
    throw new Error("Undefined set of texts with alias '"+alias+"'"); 
   };  
  //Method: modifyLang. Description: Modify the language of a set of texts  
  function modifyLang(alias, lang){ 
    this.getSet(alias).lang = lang; 
   };  
  //Method: get. Description: Get text of a set  
  function get(key, params){ 
    var s = key.split(".");
    return this.getSet(s[0]).get(s[1], params); 
   };  
  //Method: TEXT. Description:   
  function TEXT(alias, key, params){ 
    return this.getSet(alias).get(key, params); 
   };  
  //Method: DEBUG. Description:   
  function DEBUG(alias, args){ 
    var val = this._getObjectAndText(alias, args);
    if (typeof opera == "object")
      opera.postError(val.debug+val.text);
    else 
      console.log(val.debug+val.text);
    return val.text;
   };  
  //Method: ERROR. Description:   
  function ERROR(alias, args){ 
    var val = this._getObjectAndText(alias, args);
    if (typeof opera == "object") {
      opera.postError(val.debug+val.text);
      if (val.object) opera.postError(val.object);
    } else {
      console.error(val.debug+val.text);
      if (val.object) console.log(val.object);
    }
    return val.text;
   };  
  //Method: WARNING. Description:   
  function WARNING(alias, args){ 
    var val = this._getObjectAndText(alias, args);
    if (typeof opera == "object") {
      opera.postError(val.debug+val.text);
      if (val.object) opera.postError(val.object);
    } else {
      console.warn(val.debug+val.text);
      if (val.object) console.log(val.object);
    }
    return val.text;
   };


/*-----------------------------------------------------
* Component Definition: PsiText  
*-----------------------------------------------------*/
return {
  //Content 
  //Properties 
  setTexts: setTexts,
  //Methods 
  _getObjectAndText: _getObjectAndText,
  registerSet: registerSet,
  getSet: getSet,
  modifyLang: modifyLang,
  get: get,
  TEXT: TEXT,
  DEBUG: DEBUG,
  ERROR: ERROR,
  WARNING: WARNING,
  toString: function() { return "PsiText"; }
};
})(); 

/*-----------------------------------------------------
*=Enum[psi_out_type]: PsiOutType
* Description: Output type
*-----------------------------------------------------*/
var PsiOutType = {   
  Error: 'error',  
  Warning: 'warning',  
  Debug: 'debug',  
  Watch: 'watch'
};   

/*-----------------------------------------------------
*=Class[psi_out]: PsiOut
* Description: Handling Psi Message outputs
*-----------------------------------------------------*/
function PsiOut (key, params, debug, type) {
  //Properties   
  //Property: type. Description: Output type PsiOutType ('error', 'warning', 'debug')  
  this.type = 'debug'; 
  //Initialize class
  this._init(key, params, debug, type);
};
//Inheritance
PsiOut.inherits(Error);  
//Static: console. Description: Output to console  
PsiOut.console = {
    debug: false,
    add: function(output){
      if ($("#psi_out").length==1) {
        try { $("#psi_out").debugger("addOutput", output); }
        catch(e){}
        return;
      } 
      if (typeof opera=="undefined")
        switch(output.type){
          case "error": console.error(output.message); break;
          case "warning": console.warn(output.message); break;
          case "debug": if (this.debug) console.log(output.message); break;
          case "watch": console.log(output.message); break; 
        }
      else opera.postError(output.message);
    },
    openDebugger: function(){
      if ( $("#psi_out").length==0 )
      	$("<div id='psi_out'/>").appendTo("body").debugger();
    }
  };  
//Static: log. Description: List of outputs  
PsiOut.log = {error: new Array(), warning: new Array(), debug: new Array(), watch: new Array()};  
//Static: size. Description: Size of outputs list  
PsiOut.size = 500; 
//* Definitions Events and Methods
PsiOut.methods({
  //Methods   
  //Method: _init. Description: Initialize output message  
  _init: function(key, params, debug, type, code){ 
    if (key) {
      if (type) this.type = type;
      this.message = PsiText.get(key, params);
      this.code = code;
      this.debug = debug;
      PsiOut.log[this.type].push(this);
      if (PsiOut.size<=PsiOut.log[this.type].length)
        PsiOut.log[this.type].shift();
      PsiOut.console.add(this);
      if (this.type=="error" && $.isFunction(this.send))
        this.send(key, this, PsiText.get(key.replace(".","_MAP."), params));
    }
   },
  //Events 
  toString: function() { return "PsiOut"; }
});

/*-----------------------------------------------------
*=Class[psi_error]: PsiError
* Description: Handle Psi error
*-----------------------------------------------------*/
function PsiError (key, params, debug, code ) {
  //Properties  
  //Initialize class
  this._init(key, params, debug, 'error', code);
};
//Inheritance
PsiError.inherits(PsiOut); 
//* Definitions Events and Methods
PsiError.methods({
  //Methods 
  //Events 
  toString: function() { return "PsiError"; }
});

/*-----------------------------------------------------
*=Class[psi_warning]: PsiWarning
* Description: Handle Psi Warning
*-----------------------------------------------------*/
function PsiWarning (key, params, debug, code) {
  //Properties  
  //Initialize class
  this._init(key, params, debug, 'warning', code);
};
//Inheritance
PsiWarning.inherits(PsiOut); 
//* Definitions Events and Methods
PsiWarning.methods({
  //Methods 
  //Events 
  toString: function() { return "PsiWarning"; }
});

/*-----------------------------------------------------
*=Function[psi_debug]: PSIDEBUG
* Description: Handle Psi debug
*-----------------------------------------------------*/
function PSIDEBUG (key, params, debug) { new PsiOut(key, params, debug); };   

/*-----------------------------------------------------
*=Function[psi_watch]: PSIWATCH
* Description: Psi Watcher
*-----------------------------------------------------*/
function PSIWATCH (message, debug) { 
  var params = new Array();
  params.push(message);
  new PsiOut("PSIXML.WATCHED", params, debug, "watch");
 };   

/*-----------------------------------------------------
*=Widget[debugger]: psi.debugger
* Description: Debug
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.debugger",  $.ui.dialog, {
  options: {   
    //Option: title. Description: Title  
    title: "Depurador Psi",  
    //Option: dialogClass. Description: CSS Classes  
    dialogClass: "tdpsi-toolbar tdpsi-scrubber",  
    //Option: width. Description: Dialog box width  
    width: 500,  
    //Option: height. Description: Dialog box height  
    height: 600,  
    //Option: position. Description: Dialog box position on window  
    position: {my: 'right-10 top-10', at: 'right top', collision: 'flip flip', of: window} 
  },
  //Properties 
  //Methods   
  //Method: addOutput. Description: Show Psi Output  
  addOutput: function(output){ 
  try { 
    var out = this.content.find("#scrubber-tabs-"+output.type),
        mess = $("<div>"+output.message+"</div>").appendTo(out);
    if (out.children().length%2==0)
      mess.addClass(output.type=="error" ? "scrubber-error" : output.type=="warning" ? "scrubber-warning" : "scrubber-debug")
      
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"addOutput", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: open. Description: Open the Psi debug bar  
  open: function(self, ref, context){ 
  try { 
    this._super();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"open", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: close. Description: Destroy dialog box  
  close: function(){ 
  try { 
    this._super();
    this.destroy();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"close", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: destroy. Description: Destroy Psi debug bar  
  destroy: function(){ 
  try { 
    $(this.element).empty();
    this._super();
    $(this.element).remove();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"destroy", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: _create. Description: Create toolbar  
  _create: function(){ 
  try { 
    this._super();
    
    //Adicionar botton de minimizarÃ§
    this.uiDialogTitlebarMinimize = $("<a href='#'><span class='ui-icon ui-icon-minusthick'></span></a>")
     	.addClass( "tdpsi-toolbar-minimize ui-corner-all" )
     	.attr( "role", "button" )
     	.hover( 
        function () { $(this).addClass("ui-state-hover"); }, 
        function () { $(this).removeClass("ui-state-hover"); }
        )
     	.click(function(event) {
     		event.preventDefault();	
     		$("span",this).toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");
        $(this).parent().parent().find(".ui-dialog-content").toggle(); 
     		})
     	.appendTo(this.uiDialogTitlebar);
    this.nav = $("<div></div>").appendTo(this.element);
    var tabs = '<div id="scrubber-tabs" style="width:98%;">'
             + '  <ul>'
             + '    <li><a href="#scrubber-tabs-error">Errors</a></li>'
             + '    <li><a href="#scrubber-tabs-warning">Warnings</a></li>'
             + '    <li><a href="#scrubber-tabs-debug">Debug</a></li>'
             + '    <li><a href="#scrubber-tabs-watch">Watch</a></li>'
             + '  </ul>'
             + '  <div id="scrubber-tabs-error" class="content-scrubber"></div>'
             + '  <div id="scrubber-tabs-warning" class="content-scrubber"></div>'
             + '  <div id="scrubber-tabs-debug" class="content-scrubber"></div>'
             + '  <div id="scrubber-tabs-watch" class="content-scrubber"></div>'
             + '</div>';
    this.content = $(tabs).appendTo(this.element).tabs();
    $("<button>Limpiar</button>")
      .appendTo(this.nav)
      .button({ icons: { primary: "ui-icon-trash" }, content: this.content})
      .click(function(){
        $(this).button("option", "content").find(".content-scrubber").empty();
        //Adicionar Outputs
        for(var i in PsiOutType) 
          PsiOut.log[PsiOutType[i]] = new Array();
      });
    //Adicionar Outputs
    for(var i in PsiOutType) {
      var items = PsiOut.log[PsiOutType[i]]; 
      for(var j in items)
        this.addOutput( items[j] );
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=Object[psi_data]: PsiData
* Description: Define Psi data objects.
*-----------------------------------------------------*/
var PsiData = {
  //Properties 
  //Methods   
  //Method: register. Description: Register a new Psi data object  
  register: function(name, functions){ 
  try { 
    if (this[name]==null)
      this[name] = $.extend({},{
        exist: function(key) { return this[key] != null; },
        get: function(key) { return this[key]; },
        set: function(key, item) { this[key] = item; },
        remove: function(key) { 
          if(this.exist(key)) 
            delete this[key]; 
        },
        register: function(key, item) {
          if(this.exist(key)) return this[key];
          this[key] = item;
          return this[key]; 
        },
        rewrite: function(key, item){
          this.remove(key);
          return this.register(key, item); 
        }
      }, functions);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"register", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: remove. Description: Remove a Psi data object  
  remove: function(name){ 
  try { 
   if (this[name])
      delete this[name];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"remove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  }
};   

/*-----------------------------------------------------
*=Component[psixml]: PsiXML
* Description: PsiXML evaluation engine for execution of XML languages in web clients
*-----------------------------------------------------*/
var PsiXML = (function () {  

  //Component Properties 


/*-----------------------------------------------------
*=Texts[psi_xml_messages]: PSIXML
* Description: Manage of PsiXml messages
*-----------------------------------------------------*/
var PSIXML_SHORT_MAP = { 
  ES: { 
    VALIDATE_DIGITS: "El atributo '$1' debe ser un dígito numérico",
    VALIDATE_NUMBER: "El atributo '$1' debe ser número decimal. Use '.' como separador de decimales",
    VALIDATE_INTEGER: "El atributo '$1' debe ser número entero",
    VALIDATE_RANGE: "El atributo '$1' fuera de rango [$2, $3]",
    VALIDATE_BOOLEAN: "El atributo '$1' no es booleano",
    VALIDATE_IDENTIFIER: "El atributo '$1' debe ser un identificador. Use a-z, A-Z, 0-9, '_' o '-'",
    VALIDATE_VARIABLE: "El atributo '$1' debe ser un nombre de variable. Use a-z, A-Z, 0-9 o '_'",
    VALIDATE_CLASSCSS: "El atributo '$1' debe ser un nombre de clase CSS. Use a-z, A-Z, 0-9 o '_' o '-' o ':' o '.'",
    VALIDATE_SELECT: "El atributo '$1' debe ser una de las siguientes opciones: $2",
    VALIDATE_DATETIME: "El atributo '$1' debe ser de tipo fecha",
    VALIDATE_DATEISO: "El atributo '$1' debe ser de tipo fecha ISO (aaaa/mm/dd)",
    VALIDATE_EMAIL: "El atributo '$1' debe ser de tipo email",
    VALIDATE_URL: "El atributo '$1' debe ser de tipo url",
    PSI_ELEMENT_ATTRIBUTE_MANDATORY: "Elemento '$1', el atributo '$2' es obligatorio",
    PSI_ELEMENT_ATTRIBUTE_REMOVE_MANDATORY: "Elemento '$1', el atributo '$2' es obligatorio y no se puede remover",
    DEFINITION_ELEMENT_INVALID_ATTRIBUTE: "Elemento '$1', el atributo '$2' no esta bien definido",
    DEFINE_ELEMENT_CHILDREN_INVALID: "Elemento '$1', el elemento hijo '$2' no esta definido",
    DOCUMENT_ERROR: "Error lectura de documento XML. URL: $1. Estado: '$2'. Detalle: $3",
    PROCESS: "Element: $1.$2[id=$3]. Error: $4.",
    SCANNER_DOCUMENT_LOADED: "$1-> Documento XML '$2' cargado",
    SCANNER_DOCUMENT_SOURCE_STRING: "$1-> Documento escaneado",
    SCANNER_NOT_PROGRAM: "$1-> Programa NO definido",
    LANGUAGE_PSI_NULL_ELEMENT: "Al Lenguaje XML '$1' se intentando crear un elemento nulo",
    LANGUAGE_PSI_NULL_DOCUMENT: "Al Lenguaje XML '$1' se intentando crear un elemento sin documento",
    LANGUAGE_PSI_NOT_EXIST_ELEMENT: "Al Lenguaje XML '$1' no de ha definido el tag '$2'",
    LANGUAGE_PSI_FACTORY_ERROR_NAME: "Al Lenguaje XML '$1' no se ha definido NAME",
    LANGUAGE_PSI_FACTORY_ERROR_TAGS: "Al Lenguaje XML '$1' no se ha definido TAGS",
    LANGUAGE_PSI_FACTORY_ERROR_ROOT: "Al Lenguaje XML '$1' no se ha definido ROOT",
    TRASH_ADD_ELEMENT: "Trash elemento adicionado: $1",
    TRASH_REMOVE_ERROR: "Trash error: $1",
    PARSE_ERROR: "$1-> Error de compilación. Detalle: $2",
    PARSE_WARNING: "$1-> Warning de compilación (Tag=$2). Detalle: $3",
    PARSE_INIT: "$1-> Inicio de compilación",
    PARSE_FINNISH: "$1-> Fin de compilación",
    PARSE_ELEMENT: "$1-> Analizando: $2",
    PROGRAM_INIT: "$1-> Programa iniciado",
    PROGRAM_SCANNER: "$1-> Cargando programa fuente Psi",
    PROGRAM_PARSE: "$1-> Iniciando análisis",
    PROGRAM_ERROR: "$1-> Programa con errores",
    PROGRAM_RUN: "$1-> Programa ejecutándose",
    PROGRAM_STOP: "$1-> Programa terminado",
    PROGRAM_NOT_SOURCE: "$1-> No se pudo obtener Xml",
    INTERPRETER_ERROR_EXIST_PROGRAM: "Nombre de programa '$1' ya registrado",
    WATCHED: "$1"
  },
  EN: { 
    VALIDATE_DIGITS: "El atributo '$1' debe ser un dígito numérico",
    VALIDATE_NUMBER: "El atributo '$1' debe ser número decimal. Use '.' como separador de decimales",
    VALIDATE_INTEGER: "El atributo '$1' debe ser número entero",
    VALIDATE_RANGE: "El atributo '$1' fuera de rango [$2, $3]",
    VALIDATE_BOOLEAN: "El atributo '$1' no es booleano",
    VALIDATE_IDENTIFIER: "El atributo '$1' debe ser un identificador. Use a-z, A-Z, 0-9, '_' o '-'",
    VALIDATE_VARIABLE: "El atributo '$1' debe ser un nombre de variable. Use a-z, A-Z, 0-9 o '_'",
    VALIDATE_CLASSCSS: "El atributo '$1' debe ser un nombre de clase CSS. Use a-z, A-Z, 0-9 o '_' o '-' o ':' o '.'",
    VALIDATE_SELECT: "El atributo '$1' debe ser una de las siguientes opciones: $2",
    VALIDATE_DATETIME: "El atributo '$1' debe ser de tipo fecha",
    VALIDATE_DATEISO: "El atributo '$1' debe ser de tipo fecha ISO (aaaa/mm/dd)",
    VALIDATE_EMAIL: "El atributo '$1' debe ser de tipo email",
    VALIDATE_URL: "El atributo '$1' debe ser de tipo url",
    PSI_ELEMENT_ATTRIBUTE_MANDATORY: "Elemento '$1', el atributo '$2' es obligatorio",
    PSI_ELEMENT_ATTRIBUTE_REMOVE_MANDATORY: "Elemento '$1', el atributo '$2' es obligatorio y no se puede remover",
    DEFINITION_ELEMENT_INVALID_ATTRIBUTE: "Elemento '$1', el atributo '$2' no esta bien definido",
    DEFINE_ELEMENT_CHILDREN_INVALID: "Elemento '$1', el elemento hijo '$2' no esta definido",
    DOCUMENT_ERROR: "Error lectura de documento XML. URL: $1. Estado: '$2'. Detalle: $3",
    PROCESS: "Element: $1.$2[id=$3]. Error: $4.",
    SCANNER_DOCUMENT_LOADED: "$1-> Documento XML '$2' cargado",
    SCANNER_DOCUMENT_SOURCE_STRING: "$1-> Documento escaneado",
    SCANNER_NOT_PROGRAM: "$1-> Programa NO definido",
    LANGUAGE_PSI_NULL_ELEMENT: "Al Lenguaje XML '$1' se intentando crear un elemento nulo",
    LANGUAGE_PSI_NULL_DOCUMENT: "Al Lenguaje XML '$1' se intentando crear un elemento sin documento",
    LANGUAGE_PSI_NOT_EXIST_ELEMENT: "Al Lenguaje XML '$1' no de ha definido el tag '$2'",
    LANGUAGE_PSI_FACTORY_ERROR_NAME: "Al Lenguaje XML '$1' no se ha definido NAME",
    LANGUAGE_PSI_FACTORY_ERROR_TAGS: "Al Lenguaje XML '$1' no se ha definido TAGS",
    LANGUAGE_PSI_FACTORY_ERROR_ROOT: "Al Lenguaje XML '$1' no se ha definido ROOT",
    TRASH_ADD_ELEMENT: "Trash elemento adicionado: $1",
    TRASH_REMOVE_ERROR: "Trash error: $1",
    PARSE_ERROR: "$1-> Error de compilación. Detalle: $2",
    PARSE_WARNING: "$1-> Warning de compilación (Tag=$2). Detalle: $3",
    PARSE_INIT: "$1-> Inicio de compilación",
    PARSE_FINNISH: "$1-> Fin de compilación",
    PARSE_ELEMENT: "$1-> Analizando: $2",
    PROGRAM_INIT: "$1-> Programa iniciado",
    PROGRAM_SCANNER: "$1-> Cargando programa fuente Psi",
    PROGRAM_PARSE: "$1-> Iniciando análisis",
    PROGRAM_ERROR: "$1-> Programa con errores",
    PROGRAM_RUN: "$1-> Programa ejecutándose",
    PROGRAM_STOP: "$1-> Programa terminado",
    PROGRAM_NOT_SOURCE: "$1-> No se pudo obtener Xml",
    INTERPRETER_ERROR_EXIST_PROGRAM: "Nombre de programa '$1' ya registrado",
    WATCHED: "$1"
  }
}; 
var PSIXML_MAP = { 
  ES: { 
    VALIDATE_DIGITS: "El atributo '$1' debe ser un dígito numérico",
    VALIDATE_NUMBER: "El atributo '$1' debe ser número decimal. Use '.' como separador de decimales",
    VALIDATE_INTEGER: "El atributo '$1' debe ser número entero",
    VALIDATE_RANGE: "El atributo '$1' fuera de rango [$2, $3]",
    VALIDATE_BOOLEAN: "El atributo '$1' no es booleano",
    VALIDATE_IDENTIFIER: "El atributo '$1' debe ser un identificador. Use a-z, A-Z, 0-9, '_' o '-'",
    VALIDATE_VARIABLE: "El atributo '$1' debe ser un nombre de variable. Use a-z, A-Z, 0-9 o '_'",
    VALIDATE_CLASSCSS: "El atributo '$1' debe ser un nombre de clase CSS. Use a-z, A-Z, 0-9 o '_' o '-' o ':' o '.'",
    VALIDATE_SELECT: "El atributo '$1' debe ser una de las siguientes opciones: $2",
    VALIDATE_DATETIME: "El atributo '$1' debe ser de tipo fecha",
    VALIDATE_DATEISO: "El atributo '$1' debe ser de tipo fecha ISO (aaaa/mm/dd)",
    VALIDATE_EMAIL: "El atributo '$1' debe ser de tipo email",
    VALIDATE_URL: "El atributo '$1' debe ser de tipo url",
    PSI_ELEMENT_ATTRIBUTE_MANDATORY: "Elemento '$1', el atributo '$2' es obligatorio",
    PSI_ELEMENT_ATTRIBUTE_REMOVE_MANDATORY: "Elemento '$1', el atributo '$2' es obligatorio y no se puede remover",
    DEFINITION_ELEMENT_INVALID_ATTRIBUTE: "Elemento '$1', el atributo '$2' no esta bien definido",
    DEFINE_ELEMENT_CHILDREN_INVALID: "Elemento '$1', el elemento hijo '$2' no esta definido",
    DOCUMENT_ERROR: "Error lectura de documento XML. URL: $1. Estado: '$2'. Detalle: $3",
    PROCESS: "Element: $1.$2[id=$3]. Error: $4.",
    SCANNER_DOCUMENT_LOADED: "$1-> Documento XML '$2' cargado",
    SCANNER_DOCUMENT_SOURCE_STRING: "$1-> Documento escaneado",
    SCANNER_NOT_PROGRAM: "$1-> Programa NO definido",
    LANGUAGE_PSI_NULL_ELEMENT: "Al Lenguaje XML '$1' se intentando crear un elemento nulo",
    LANGUAGE_PSI_NULL_DOCUMENT: "Al Lenguaje XML '$1' se intentando crear un elemento sin documento",
    LANGUAGE_PSI_NOT_EXIST_ELEMENT: "Al Lenguaje XML '$1' no de ha definido el tag '$2'",
    LANGUAGE_PSI_FACTORY_ERROR_NAME: "Al Lenguaje XML '$1' no se ha definido NAME",
    LANGUAGE_PSI_FACTORY_ERROR_TAGS: "Al Lenguaje XML '$1' no se ha definido TAGS",
    LANGUAGE_PSI_FACTORY_ERROR_ROOT: "Al Lenguaje XML '$1' no se ha definido ROOT",
    TRASH_ADD_ELEMENT: "Trash elemento adicionado: $1",
    TRASH_REMOVE_ERROR: "Trash error: $1",
    PARSE_ERROR: "$1-> Error de compilación. Detalle: $2",
    PARSE_WARNING: "$1-> Warning de compilación (Tag=$2). Detalle: $3",
    PARSE_INIT: "$1-> Inicio de compilación",
    PARSE_FINNISH: "$1-> Fin de compilación",
    PARSE_ELEMENT: "$1-> Analizando: $2",
    PROGRAM_INIT: "$1-> Programa iniciado",
    PROGRAM_SCANNER: "$1-> Cargando programa fuente Psi",
    PROGRAM_PARSE: "$1-> Iniciando análisis",
    PROGRAM_ERROR: "$1-> Programa con errores",
    PROGRAM_RUN: "$1-> Programa ejecutándose",
    PROGRAM_STOP: "$1-> Programa terminado",
    PROGRAM_NOT_SOURCE: "$1-> No se pudo obtener Xml",
    INTERPRETER_ERROR_EXIST_PROGRAM: "Nombre de programa '$1' ya registrado",
    WATCHED: "$1"
  },
  EN: { 
    VALIDATE_DIGITS: "El atributo '$1' debe ser un dígito numérico",
    VALIDATE_NUMBER: "El atributo '$1' debe ser número decimal. Use '.' como separador de decimales",
    VALIDATE_INTEGER: "El atributo '$1' debe ser número entero",
    VALIDATE_RANGE: "El atributo '$1' fuera de rango [$2, $3]",
    VALIDATE_BOOLEAN: "El atributo '$1' no es booleano",
    VALIDATE_IDENTIFIER: "El atributo '$1' debe ser un identificador. Use a-z, A-Z, 0-9, '_' o '-'",
    VALIDATE_VARIABLE: "El atributo '$1' debe ser un nombre de variable. Use a-z, A-Z, 0-9 o '_'",
    VALIDATE_CLASSCSS: "El atributo '$1' debe ser un nombre de clase CSS. Use a-z, A-Z, 0-9 o '_' o '-' o ':' o '.'",
    VALIDATE_SELECT: "El atributo '$1' debe ser una de las siguientes opciones: $2",
    VALIDATE_DATETIME: "El atributo '$1' debe ser de tipo fecha",
    VALIDATE_DATEISO: "El atributo '$1' debe ser de tipo fecha ISO (aaaa/mm/dd)",
    VALIDATE_EMAIL: "El atributo '$1' debe ser de tipo email",
    VALIDATE_URL: "El atributo '$1' debe ser de tipo url",
    PSI_ELEMENT_ATTRIBUTE_MANDATORY: "Elemento '$1', el atributo '$2' es obligatorio",
    PSI_ELEMENT_ATTRIBUTE_REMOVE_MANDATORY: "Elemento '$1', el atributo '$2' es obligatorio y no se puede remover",
    DEFINITION_ELEMENT_INVALID_ATTRIBUTE: "Elemento '$1', el atributo '$2' no esta bien definido",
    DEFINE_ELEMENT_CHILDREN_INVALID: "Elemento '$1', el elemento hijo '$2' no esta definido",
    DOCUMENT_ERROR: "Error lectura de documento XML. URL: $1. Estado: '$2'. Detalle: $3",
    PROCESS: "Element: $1.$2[id=$3]. Error: $4.",
    SCANNER_DOCUMENT_LOADED: "$1-> Documento XML '$2' cargado",
    SCANNER_DOCUMENT_SOURCE_STRING: "$1-> Documento escaneado",
    SCANNER_NOT_PROGRAM: "$1-> Programa NO definido",
    LANGUAGE_PSI_NULL_ELEMENT: "Al Lenguaje XML '$1' se intentando crear un elemento nulo",
    LANGUAGE_PSI_NULL_DOCUMENT: "Al Lenguaje XML '$1' se intentando crear un elemento sin documento",
    LANGUAGE_PSI_NOT_EXIST_ELEMENT: "Al Lenguaje XML '$1' no de ha definido el tag '$2'",
    LANGUAGE_PSI_FACTORY_ERROR_NAME: "Al Lenguaje XML '$1' no se ha definido NAME",
    LANGUAGE_PSI_FACTORY_ERROR_TAGS: "Al Lenguaje XML '$1' no se ha definido TAGS",
    LANGUAGE_PSI_FACTORY_ERROR_ROOT: "Al Lenguaje XML '$1' no se ha definido ROOT",
    TRASH_ADD_ELEMENT: "Trash elemento adicionado: $1",
    TRASH_REMOVE_ERROR: "Trash error: $1",
    PARSE_ERROR: "$1-> Error de compilación. Detalle: $2",
    PARSE_WARNING: "$1-> Warning de compilación (Tag=$2). Detalle: $3",
    PARSE_INIT: "$1-> Inicio de compilación",
    PARSE_FINNISH: "$1-> Fin de compilación",
    PARSE_ELEMENT: "$1-> Analizando: $2",
    PROGRAM_INIT: "$1-> Programa iniciado",
    PROGRAM_SCANNER: "$1-> Cargando programa fuente Psi",
    PROGRAM_PARSE: "$1-> Iniciando análisis",
    PROGRAM_ERROR: "$1-> Programa con errores",
    PROGRAM_RUN: "$1-> Programa ejecutándose",
    PROGRAM_STOP: "$1-> Programa terminado",
    PROGRAM_NOT_SOURCE: "$1-> No se pudo obtener Xml",
    INTERPRETER_ERROR_EXIST_PROGRAM: "Nombre de programa '$1' ya registrado",
    WATCHED: "$1"
  }
};//* Register texts PsiXML
if (PsiOut.console.debug) PSIXML_SHORT_MAP = PSIXML_MAP;
PsiText.registerSet("PSIXML", PsiOut.console.debug ? PSIXML_MAP : PSIXML_SHORT_MAP);
PsiText.registerSet("PSIXML_MAP", PSIXML_MAP);
//Send type
var PSIXML_SEND = [];

/*-----------------------------------------------------
*=Component[language_psi]: LanguagePsi
* Description: Definition and registration of a Psi language
*-----------------------------------------------------*/
var LanguagePsi = (function () {  

  //Component Properties   
  //Property: languages. Description: Map of languages registered  
  var languages = {};


/*-----------------------------------------------------
*=Object[validator]: Validator
* Description: Administration of attribute validation for any Psi language
*-----------------------------------------------------*/
var Validator = {
  //Properties 
  //Methods   
  //Method: _attrToString. Description: Return an attribute like a character string in order to handling errors  
  _attrToString: function(attr){ 
    return '<' + attr.tag + ' ... ' + attr.name + '="' + attr.value + '" />';
   },  
  //Method: _append. Description: Add validation  
  _append: function(name, impl){ 
    this[name] = impl;
   },  
  //Method: digits. Description: Validation of digits  
  digits: function(attr){ 
    if (typeof attr.value =='number') return attr.value;
    if (!/^\d+$/.test(attr.value))
      throw new PsiError("PSIXML.VALIDATE_DIGITS", [this._attrToString(attr)], [attr]);
    return parseInt(attr.value);
   },  
  //Method: number. Description: Validation of numbers with decimals  
  number: function(attr){ 
    if (attr.value==null || typeof attr.value =='number') return attr.value;
    if (!(/^[-+]?\d+(\.\d+)?$/.test(attr.value.replace(/^\s+|\s+$/g, ''))))
      throw new PsiError("PSIXML.VALIDATE_NUMBER", [this._attrToString(attr)], [attr]);
    return parseFloat(attr.value);
   },  
  //Method: integer. Description: Validation of integers  
  integer: function(attr){ 
    if (attr.value==null || typeof attr.value =='number') return attr.value;
    if (!(/^[-]?\d+(\.\d+)?$/.test(attr.value.replace(/^\s+|\s+$/g, ''))))
      throw new PsiError("PSIXML.VALIDATE_INTEGER", [this._attrToString(attr)], [attr]);
    return parseInt(attr.value);
   },  
  //Method: range. Description: Validation of numbers rank  
  range: function(attr, params){ 
    var min = (params == null || params.length == 0) ? -Infinity : params.length >= 1 ? (params[0] != '-' ? parseFloat(params[0]) : -Infinity) : -Infinity,
        max = (params == null || params.length == 0) ? Infinity : params.length >= 2 ? (params[1] != '-' ? parseFloat(params[1]) : Infinity) : Infinity,
        value = parseFloat(attr.value);
    if (!(min <= value && value <= max))
      throw new PsiError("PSIXML.VALIDATE_RANGE", [this._attrToString(attr), min, max], [attr]);
    return parseFloat(attr.value);
   },  
  //Method: boolean. Description: Validation of booleans values  
  boolean: function(attr){ 
    if (typeof attr.value=='boolean') return attr.value;
    if ( !(/(true|false)/.test(attr.value)) )
      throw new PsiError("PSIXML.VALIDATE_BOOLEAN", [this._attrToString(attr)], [attr]);
    return eval(attr.value);
   },  
  //Method: identifier. Description: Validation of identifier of DOM elements  
  identifier: function(attr){ 
    if (!(/^[a-zA-Z0-9_.\-]+$/.test(attr.value)))
      throw new PsiError("PSIXML.VALIDATE_IDENTIFIER", [this._attrToString(attr)], [attr]);
    return attr.value;
   },  
  //Method: variable. Description: Validation of variable name  
  variable: function(attr){ 
    if (!(/^[a-zA-Z0-9_]+$/.test(attr.value)))
      throw new PsiError("PSIXML.VALIDATE_VARIABLE", [this._attrToString(attr)], [attr]);
    return attr.value;
   },  
  //Method: classcss. Description: Validation of name of CSS class  
  classcss: function(attr){ 
    if (!(/^[ a-zA-Z0-9_.:\-]+$/.test(attr.value)))
      throw new PsiError("PSIXML.VALIDATE_CLASSCSS", [this._attrToString(attr)], [attr]);
    return attr.value;
   },  
  //Method: select. Description: Validation of a selection list  
  select: function(attr, params){ 
    if (params.indexOf(attr.value) < 0)
        throw new PsiError("PSIXML.VALIDATE_SELECT", [this._attrToString(attr), params], [attr]);
    return attr.value;
   },  
  //Method: text. Description: Text validation  
  text: function(attr){ 
    return attr.value;
   },  
  //Method: dateTime. Description: Validation of date and hour  
  dateTime: function(attr){ 
    if (!/Invalid|NaN/.test(new Date(attr.value)))
      throw new PsiError("PSIXML.VALIDATE_DATETIME", [this._attrToString(attr)], [attr]);
    return new Date(attr.value);
   },  
  //Method: dateISO. Description: Validation of Date ISO  
  dateISO: function(attr){ 
    if (!/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(attr.value))
      throw new PsiError("PSIXML.VALIDATE_DATEISO", [this._attrToString(attr)], [attr]);
    var date = attr.value.split("/");
    return new Date(parseInt(date[0]), parseInt(date[1]), parseInt(date[2]));
   },  
  //Method: email. Description: Email validation  
  email: function(attr){ 
    if (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(attr.value))
      throw new PsiError("PSIXML.VALIDATE_EMAIL", [this._attrToString(attr)], [attr]);
    return attr.value;
   },  
  //Method: url. Description: Url validation  
  url: function(attr){ 
    if (!/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(attr.value))
      throw new PsiError("PSIXML.VALIDATE_URL", [this._attrToString(attr)], [attr]);
    return attr.value;
   }
};   

/*-----------------------------------------------------
*=Class[definition_attribute]: DefinitionAttribute
* Description: Administration of attribute validation for any Psi language
*-----------------------------------------------------*/
function DefinitionAttribute (name, mandatory, defaultValue) {
  //Properties   
  //Property: name. Description: Attribute name  
  this.name = name;  
  //Property: mandatory. Description: is mandatory  
  this.mandatory = mandatory;  
  //Property: defaultValue. Description: Default value  
  this.defaultValue = defaultValue;  
  //Property: validates. Description: List of validators  
  this.validates = {}; 
}; 
//* Definitions Events and Methods
DefinitionAttribute.methods({
  //Methods   
  //Method: addValidate. Description: Add validation to attribute  
  addValidate: function(name, params){ 
    this.validates[name] = params;
   },  
  //Method: compute. Description: Validate the attribute  
  compute: function(attr){ 
    //Determinar existencia de validadores
    if (jQuery.isEmptyObject(this.validates)) 
      return attr.value;
    //Validar atributo y computar valor
    var value = null;
    if (attr.value==null && this.defaultValue!=null) 
      attr.value = this.defaultValue;
    if (this.mandatory && attr.value==null) 
      throw new PsiError("PSIXML.PSI_ELEMENT_ATTRIBUTE_MANDATORY", [attr.tag, attr.name], [this, attr]);
    for (var name in this.validates) 
      value = Validator[name](attr, this.validates[name]);
    return value;
   },  
  //Method: getDefault. Description: Get default value  
  getDefault: function(tag){ 
    if (jQuery.isEmptyObject(this.validates)) 
      return this.defaultValue;
    var attr = {name: this.name, value: this.defaultValue, tag: tag};
    for (var name in this.validates) 
      value = Validator[name](attr, this.validates[name]);
    return value;
   },
  //Events 
  toString: function() { return "DefinitionAttribute"; }
});

/*-----------------------------------------------------
*=Class[definition_element]: DefinitionElement
* Description: Administration of attribute validation for any Psi language
*-----------------------------------------------------*/
function DefinitionElement (key, tag, STRUCTURE) {
  //Properties   
  //Property: key. Description: Key of Psi element  
  this.key = key;  
  //Property: tag. Description: Tag of Psi element   
  this.tag = tag;  
  //Property: STRUCTURE. Description: Structure Psi of element  
  this.STRUCTURE = STRUCTURE;  
  //Property: mandatoryAttributes. Description: Array for mandatory attributes  
  this.mandatoryAttributes = new Array();  
  //Property: attributes. Description: List of attributes  
  this.attributes = this._buildingAttributes(STRUCTURE.VALIDATOR); 
}; 
//* Definitions Events and Methods
DefinitionElement.methods({
  //Methods   
  //Method: _buildingAttributes. Description: Build the list of attributes  
  _buildingAttributes: function(source){ 
    //Languages inline: [  [['*'] <attr> ['=' <default>] ':' [<validate> '(' [<param> [',']] ')'] [';']] ['|'] ]  
    var attributes = {};
    if (source == null || source=="") return attributes;

    //Adicionar lista de atributos a la definición del elemento Psi
    var attrs = source.split('|');
    for (var i = 0; i < attrs.length; i++) {
      var item = attrs[i].split(':');
      
      //Determinar estructura de validación
      if (item.length != 2)
        throw new PsiError("PSIXML.DEFINE_ELEMENT_CHILDREN_INVALID", [this.tag, item], [this, item]);
      
      //Crear lista de definición de atributos para el elemento
      var s = item[0][0] == '*' ? item[0].substr(1) : item[0],
          l = s.split("="), name = l[0],
          attr = new DefinitionAttribute(name, item[0][0] == '*', l.length > 1 ? l[1] : null);
      
      //Adicionar a lista de atributos obligatorios
      if (attr.mandatory && attr.defaultValue==null)
        this.mandatoryAttributes.push(name);
        
      // Lista de validaciones del atributo
      var validates = null;
      if (item[1] && item[1].indexOf(";")>=0) validates = item[1].split(';');
      else {
        validates = new Array();
        if (item[1]) validates.push(item[1]);
      }
      for (var j = 0; j < validates.length; j++) {
        var ctype = validates[j], type = null, params = null;
        if (ctype.lastIndexOf('(') >= 0) {
          var list = ctype.substr(ctype.lastIndexOf('(') + 1, ctype.lastIndexOf(')') - ctype.lastIndexOf('(') - 1).split(',');
          type = ctype.substr(0, ctype.lastIndexOf('('));
          //Create params Validator
          params = new Array();
          for (var p = 0; p < list.length; p++)
            //Para comas escapar con @@ = '@', @# = ",", @% = ";" @= = "|"
            params.push(list[p].replace(/@@/g,":").replace(/@#/g,",").replace(/@%/g,";").replace(/@=/g,"|"));
        }
        else type = ctype;

        //Add Validator
        attr.addValidate(type, params);
      }
      
      //Add attribute
      attributes[attr.name] = attr;
    }
    return attributes;
   },  
  //Method: getAttribute. Description: Get attribute of list of attributes defined  
  getAttribute: function(name){ 
    return this.attributes[name]; 
   },  
  //Method: validChildren. Description: Validate Psi elements which are children of a element  
  validChildren: function(children){ 
    var structure = this.STRUCTURE, 
        invalidElements = new Array();
    
    //Validate children
    if (structure.STRICT) {
      children.each(function() {
        if (structure.CHILDREN[this.nodeName]==null) 
          invalidElements.push(this.nodeName);
      });
      if (invalidElements.length>0)
        throw new PsiError("PSIXML.DEFINE_ELEMENT_CHILDREN_INVALID", [this.tag, invalidElements.toString()], [this, invalidElements]);
    }
   },  
  //Method: create. Description: Create a new Psi element  
  create: function(reference, parent, program, context){ 
  try { 
    var CLASS = this.STRUCTURE.CLASS ? this.STRUCTURE.CLASS : "PsiElement",
        newElement = eval("new "+ CLASS + "()");
    newElement._init(reference, this, parent, program, context);
    return newElement;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "DefinitionElement"; }
});

/*-----------------------------------------------------
*=Class[definition_language]: DefinitionLanguage
* Description: Definition of a Psi language. It contain the list of Psi elements of language
*-----------------------------------------------------*/
function DefinitionLanguage (alias, GRAMMAR, parserClass) {
  //Properties   
  //Property: ALIAS. Description: Alias of Psi language  
  this.ALIAS = alias;  
  //Property: GRAMMAR. Description: Grammar of Psi language  
  this.GRAMMAR = GRAMMAR;  
  //Property: parserClass. Description: Name of the analyst class  
  this.parserClass = parserClass;  
  //Property: elements. Description: Elements/Tags of Psi language  
  this.elements = this._initElements(GRAMMAR.TAGS); 
}; 
//* Definitions Events and Methods
DefinitionLanguage.methods({
  //Methods   
  //Method: _initElements. Description: Initialize the list of elements of Psi language  
  _initElements: function(TAGS){ 
  try { 
    var map = {};
    for (var key in TAGS)
      map[key] = new DefinitionElement(key, TAGS[key].TAG, TAGS[key]);
    return map;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_initElements", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: tagsToCodeMirror. Description: Create object of tags of language for Code Mirror  
  tagsToCodeMirror: function(){ 
  try { 
    var root = this.GRAMMAR.TAGS[this.GRAMMAR.ROOT].TAG,
        tags = {};
    tags["!"+root] = [root];
    for (var key in this.GRAMMAR.TAGS) {
      var t = this.GRAMMAR.TAGS[key];
      //Establecer atributos
      var attrsElement = this.elements[key].attributes, 
          attributes = {};
      for(var name in attrsElement){
        var attr = attrsElement[name]; 
        attributes[name] = null;
        for (var i in attr.validates) {
          var array = attr.validates[i];
          if (array && attributes[name])
            attributes[name] = attributes[name].concat(array);
          else if (array)
            attributes[name] = array.slice(0);
        }  
      }
      //Establecer hijos
      var children = new Array();
      for (var name in t.CHILDREN)
        children.push(name);
      //Crear registro para CodeMirror
      tags[t.TAG] = { attrs: attributes, children: children };
    };
    return tags;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"tagsToCodeMirror", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: createElement. Description: Create element to Psi language  
  createElement: function(elementId, reference, parent, program, context){ 
    if (!reference) 
      throw new PsiError("PSIXML.LANGUAGE_PSI_NULL_ELEMENT", [this.GRAMMAR.NAME], [program, elementId, reference, parent]);
    if (!program) 
      throw new PsiError("PSIXML.LANGUAGE_PSI_NULL_DOCUMENT", [this.GRAMMAR.NAME], [program, elementId, reference, parent]);
    if (!this.elements[elementId])
      throw new PsiError("PSIXML.LANGUAGE_PSI_NOT_EXIST_ELEMENT", [this.GRAMMAR.NAME, reference.nodeName], [program, elementId, reference, parent]);
    return this.elements[elementId].create(reference, parent, program, context);
   },
  //Events 
  toString: function() { return "DefinitionLanguage"; }
});


  //Component Methods   
  //Method: register. Description: Register Psi language  
  function register(alias, GRAMMAR, parserClass){ 
    //Registrar Lenguage Psi si existe en la gramatica NAME, TAGS and ROOT
    if (GRAMMAR["NAME"]==null) 
      throw new PsiError("PSIXML.LANGUAGE_PSI_FACTORY_ERROR_NAME", [alias], [this, alias, GRAMMAR]);
    if (GRAMMAR["TAGS"]==null) 
      throw new PsiError("PSIXML.LANGUAGE_PSI_FACTORY_ERROR_TAGS", [alias], [this, alias, GRAMMAR]);
    if (GRAMMAR["ROOT"]==null) 
      throw new PsiError("PSIXML.LANGUAGE_PSI_FACTORY_ERROR_ROOT", [alias], [this, alias, GRAMMAR]);
    
    //Registrar Lenguaje Psi
    languages[alias] = new DefinitionLanguage(alias, GRAMMAR, parserClass);
    return this;
   };  
  //Method: get. Description: Get a registered Psi language  
  function get(alias){ 
    return languages[alias];
   };  
  //Method: getAll. Description: Get the map of registered Psi languages  
  function getAll(){ 
    return languages;
   };  
  //Method: addValidate. Description: Add validator to Psi language  
  function addValidate(name, impl){ 
    validator.appendValidator(name, impl);
   };


/*-----------------------------------------------------
* Component Definition: LanguagePsi  
*-----------------------------------------------------*/
return {
  //Content 
  DefinitionLanguage: DefinitionLanguage, //* Type: Class
  //Properties 
  languages: languages,
  //Methods 
  register: register,
  get: get,
  getAll: getAll,
  addValidate: addValidate,
  toString: function() { return "LanguagePsi"; }
};
})(); 

/*-----------------------------------------------------
*=Class[scanner]: Scanner
* Description: Scanner of Psi program
*-----------------------------------------------------*/
function Scanner (program, options) {
  //Properties   
  //Property: program. Description: Pointer to Psi program  
  this.program = program;  
  //Property: options. Description: Options list  
  this.options = options; 
}; 
//* Definitions Events and Methods
Scanner.methods({
  //Methods   
  //Method: _load. Description: Upload file with Psi language  
  _load: function(url, data, type){ 
  try { 
    var source = loadXMLSync(url, data, {type: type ? type : "GET"});
    PSIDEBUG("PSIXML.SCANNER_DOCUMENT_LOADED", [this.program.toDebug(), url]);
    return source;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_load", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _string. Description: Upload a Psi language of a character string  
  _string: function(sourceString){ 
  try { 
    var source = $.parseXML(sourceString);
    PSIDEBUG("PSIXML.SCANNER_DOCUMENT_SOURCE_STRING", [this.program.toDebug()]);
    return source;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_string", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: execute. Description: Execute Scanner of Psi interpreter  
  execute: function(){ 
    if (this.options.url)
      return this._load(this.options.url, this.options.data, this.options.type);
    else if (this.options.source)
      return this._string(this.options.source);
    else if (this.options.document)
      return PsiData.document.get(this.options.document);
    else if  (this.options.xml && $.isXMLDoc(this.options.xml))
      return this.options.xml;
    throw new PsiError("PSIXML.SCANNER_NOT_PROGRAM",[this.program.toDebug()],[this]);
   },
  //Events 
  toString: function() { return "Scanner"; }
});

/*-----------------------------------------------------
*=Class[parser]: Parser
* Description: Parser of Psi interpetrer for a Psi program
*-----------------------------------------------------*/
function Parser () {
  //Properties  
}; 
//* Definitions Events and Methods
Parser.methods({
  //Methods   
  //Method: init. Description: Initialize Parser Psi  
  init: function(program){ 
    this.program = program;
    this.language = this.program.language;
    this.onInit();
   },  
  //Method: validateStructure. Description: Validation of structure of a Psi element  
  validateStructure: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"validateStructure", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: parseElementBy. Description: Parse Psi element  
  parseElementBy: function(elementId, reference, parent, context){ 
    var newElement = null;
    try {
      newElement = this.language.createElement(elementId, reference, parent, this.program, context);
      PSIDEBUG("PSIXML.PARSE_ELEMENT", [this.toDebug(), newElement.toStringWithAttributes()]);
      
      //Add element parent
      if (parent != null) 
        parent.addChild(newElement);
      else 
        this.program.object = newElement;
      
      //Validar nuevo elmento del Lenguaje Psi y su estructura de elementos hijos
      newElement.validAllAttr();
      newElement._def.validChildren($(reference).children());
      
      //Adicionar objeto a la table de elementos del program Psi
      this.defineProperties(newElement);
      this.program.addObject(newElement); 
      this.onNewElement(elementId, newElement, context);
      
      //Gets children elements
      var CHILDREN = newElement._def.STRUCTURE.CHILDREN; 
      if (CHILDREN) {
        var self = this;
        $(reference).children().each(function () {
          if (CHILDREN[this.tagName]) {
            var newChild = self.parseElementBy(CHILDREN[this.tagName], this, newElement, context);
            self.onAddChild(elementId, newElement, newChild, context);
          }
        });
      }
      this.onChildrenCreated(elementId, newElement, context);
      newElement.onChildrenCreated(context);
      return newElement;
    }
    catch (e) {
      if (e && e.stop===true) throw e;
      if (newElement)
        newElement.parseError = e;
      if (this.onContinueParse(elementId, newElement)){
        this.program.trashCompiler.add(newElement);
        new PsiError("PSIXML.PARSE_WARNING", [this.toDebug(), elementId, e.message], [newElement, e]);
      }
      else{
        e.stop = true;
        throw e;
      }
    }
    return null;
   },  
  //Method: parseProgram. Description: Parse Psi program  
  parseProgram: function(context){ 
    try {
      PSIDEBUG("PSIXML.PARSE_INIT", [this.toDebug()]);
      this.parseElementBy(this.language.GRAMMAR.ROOT, this.program.rootDocument, null, context);
      PSIDEBUG("PSIXML.PARSE_FINNISH", [this.toDebug()]);
      this.onFinish(this.program.object, context);
    }
    catch (e) {
      this.program.parseError = new PsiError("PSIXML.PARSE_ERROR", [this.program.name, e.message], [this.program, e]);
      this.program.parseError.stop = true;
      throw this.program.parseError;
    }
   },  
  //Method: toDebug. Description: Information for Psi debugger  
  toDebug: function(){ 
  try { 
    return "Parser(language=" + this.language.ALIAS + ", program=" + this.program.name + ")";
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"toDebug", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Event when the parser of a Psi program is initialized  
  onInit: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onFinish. Description: Event when the parser of a Psi program is finished  
  onFinish: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onFinish", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onNewElement. Description: Event when a new Psi element is created  
  onNewElement: function(elementId, newElement, context){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onNewElement", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onChildrenCreated. Description: Event when children elements of a Psi element are created   
  onChildrenCreated: function(elementId, newElement, context){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onAddChild. Description: Event when a new psi child element is added  
  onAddChild: function(elementId, newElement, newChild, context){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onAddChild", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onContinueParse. Description: Event for determine if the analisys process must go on  
  onContinueParse: function(elementId, newElement){ 
  try {  return true;  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onContinueParse", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Parser"; }
});

/*-----------------------------------------------------
*=Class[psi_element]: PsiElement
* Description: Definition of an element for Psi Language
*-----------------------------------------------------*/
function PsiElement () {
  //Properties   
  //Property: _def. Description: Pointer to definition of Psi element  
  this._def = null;  
  //Property: _data. Description: Data related to Psi element  
  this._data = null;  
  //Property: _psixml. Description: Pointer to PsiXML interpreter  
  this._psixml = PsiXML;  
  //Property: children. Description: Map of children of element through UID  
  this.children = {};  
  //Property: parent. Description: Reference to Psi parent element  
  this.parent = null; 
}; 
//* Definitions Events and Methods
PsiElement.methods({
  //Methods   
  //Method: _init. Description: Initialize Psi element  
  _init: function(reference, definition, parent, program, context){ 
  try { 
    //Iniciar propiedades
    this._ref = reference;
    this._ref["_ref"] = this;
    this._def = definition;
    this.parent = parent;
    this.program = program;
    this.root = this.program.object;
    this.children = {};
    this.tag = reference.nodeName;
    this.context = context;
    this.parseError = null;
   
    //Inicializar elementos data
    this._data = {};
    this._dataRemove = this.hasAttr("data-remove") && this.attr("data-remove")=="yes";
    this.datakey = {};
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i];
      this.initData(attr.name);
    }  
    this.uid = this.program.getUID(this.tag);
    
    //Adicionar objeto a contexto
    if (this._def.STRUCTURE.SEND_CONTEXT && context && context.add)
      context.add(this.id(), this);
    //Adicionar path element
    this._pathtag = (this.parent ? this.parent._pathtag+"." : "")+this.tag+(this.hasAttr("id") ? "[id="+this.id()+"]" : ""); 
    this.onInit();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: id. Description: Identifier of Psi element  
  id: function(newId){ 
    if (newId) $(this._ref).attr("id", newId);
    return $(this._ref).attr("id");
   },  
  //Method: initData. Description: Initialize associated data model  
  initData: function(name){ 
  try { 
    var data = name ? this.hasAttr(name) ? name.split("-") : null : null;
    if ((data && data[0]!="data") || name=="data-remove") return;
    
    //Procesar atributo
    var values = $(this._ref).attr(name).split("$$"), 
        type = data[1];
    for (var i=0; i<values.length;  i++){
      var val = values[i], dp = val.indexOf(":"), key = val.substr(0,dp),
          obj = type=="context" 
              ? this.context[key]
              : PsiData[type] ? PsiData[type].get(key) : null,
          ig = val.indexOf("="), alias = val.substr(dp+1, ig-dp-1), args = val.substr(ig+1);
      if ($.isXMLDoc(obj) || (obj && obj.jquery) || $.isFunction(obj)){
        if ($.isFunction(obj)) 
          this.data(alias, eval("obj("+args+")"));
        else 
          this.data(alias, $(obj).find(args));
        this.datakey[alias] = key;
      }
      else if ($.isArray(obj) || $.isPlainObject(obj)){
        var arg = args.split("."), result = obj;
        for(var i=0; i<arg.length; i++)
          if (result!=null) result = result[arg[i]];
        this.data(alias, result);
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"initData", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: processValue. Description: Process the value of attribute with the associated data model  
  processValue: function(_value){ 
  try { 
    if (_value==null || typeof _value!='string') return _value;
    
    var value   = $.isEmptyObject(this._data) ? _value : apply(_value, this._data),
        command = value.substr(0, 2),
        body    = value.substr(2);
    
    /* 
    * command: $> with function    
    *          $= with function inlline   
    *          $* with function inlline pero devuelve el resultado como string.   
    *          $? reference functions, parameters: self, options, extend 
    *          $@ get data key
    */    
    switch (command) {
      case "$>":
        var execute = new Function("self", "context", body);
        return execute(this, this.context);
      case "$=":
        var execute = new Function("self", "context", "return " + body);
        return execute(this, this.context);
      case "$*":
        var execute = new Function("self", "context", "return '\"'+" + body+"+'\"'");
        return execute(this, this.context);
      case "$?":
        var str = body, p = str.indexOf("("),
            name = p>0 ? str.substr(0,p).replace(" ", "") : str.replace(" ", ""), 
            options = p>0 ? str.substr(p+1,str.indexOf(")")-p-1).split(",") : null;
        if (PsiData.function[name]) 
          return PsiData.function[name](this, this.context, options);
        return null;
      case "$@": 
        var s = "{{"+body.replace(" ", "")+"}}";
        return apply(s, this._data);
    }
    return value;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"processValue", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: attr. Description: Handle one or many attributes  
  attr: function(name, newValue){ 
  try { 
    if (typeof name == 'string'){
      var attrdef = this._def.getAttribute(name);
      if (newValue!=null) {
        var pval = this.processValue(newValue),
            val = attrdef!=null ? attrdef.compute( {name: name, value: pval, tag: this.tag, ref: this} ) : pval;
        $(this._ref).attr(name, newValue);
        return val;
      }
      var pval = this.processValue($(this._ref).attr(name));
      return attrdef!=null ? attrdef.compute( {name: name, value: pval, tag: this.tag, ref: this} ) : pval; 
    }
    else if ($.isPlainObject(name)){
      var map = {}, list = name;
      for(var i in list){
        var pval = this.processValue(list[i]),
            attrdef = this._def.getAttribute(list[i]),
            val = attrdef!=null ? attrdef.compute( {name: i, value: pval, tag: this.tag, ref: this} ) : pval;
        $(this._ref).attr(i, list[i]);
        map[i] = val;
      }
      return map;
    }
    throw new PsiError("PSIXML.DEFINITION_ELEMENT_INVALID_ATTRIBUTE", [this.tag, this.name], [this]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"attr", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: hasAttr. Description: Determine if there is attribute  
  hasAttr: function(name, empty){ 
    return $(this._ref).attr(name)!=null 
        && (empty=!null ? (empty ? $(this._ref).attr(name)!="" : true)  : true);
   },  
  //Method: validAttr. Description: Validate attribute in definition Psi of element  
  validAttr: function(name){ 
  try { 
    var attrdef = this._def.getAttribute(name);
    if (attrdef==null) return;
    if (attrdef.mandatory && ($(this._ref).attr(name)==null || $(this._ref).attr(name)==""))
      throw new PsiError("PSIXML.PSI_ELEMENT_ATTRIBUTE_MANDATORY", [this.tag, name], [this, this._ref]);
    attrdef.compute( {name: name, value: this.processValue($(this._ref).attr(name)), tag: this.tag, ref: this} );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"validAttr", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: validAllAttr. Description: Validate every attributes with 'validAttr'  
  validAllAttr: function(){ 
  try { 
    for(var i in this._def.mandatoryAttributes){
      var nameAttr = this._def.mandatoryAttributes[i];
      if (this._ref.attributes.getNamedItem(nameAttr)==null)
        throw new PsiError("PSIXML.PSI_ELEMENT_ATTRIBUTE_MANDATORY", [this.tag, nameAttr], [this, this._ref]);
    }
    for(var i in this._ref.attributes)
      this.validAttr(this._ref.attributes[i].name);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"validAllAttr", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: removeAttr. Description: Remove an attribute  
  removeAttr: function(name){ 
  try { 
    if (this._def.mandatoryAttributes.indexOf(name)!=-1)
      throw new PsiError("PSIXML.PSI_ELEMENT_ATTRIBUTE_REMOVE_MANDATORY", [this.tag, name], [this, this._def]);
    $(this._ref).removeAttr(name);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"removeAttr", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: remove. Description: Remove element of Psi program  
  remove: function(){ 
  try { 
    this.removeChild(true);
    this.onRemove();
    //Eliminar objeto de contexto
    if (this._def.STRUCTURE.SEND_CONTEXT && this.context && this.context.remove)
      this.context.remove(this.id());
    //Eliminar elemento Psi
    $(this._ref).remove();
    //Eliminar data asociados
    if (this._dataRemove)
      for(var i in this._data){
        if (this._data[i].jquery!=null)
          this._data[i].remove();
        delete this._data[i];
      }
    delete this.parent.children[this.uid];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"remove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: text. Description: Handle content of Psi element  
  text: function(newValue){ 
  try { 
    if (newValue!=null){
      var pval = this.processValue(newValue);
      $(this._ref).text(newValue);
      return pval;
    }
    return this.processValue( $(this._ref).text() );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"text", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: data. Description: Handling of XML information into Psi element  
  data: function(key, value){ 
  try { 
    if ($.isPlainObject(key)){ 
      this._data = $.extend(true, this._data, key);
      return this._data;
    }
    if (value) this._data[key]=value; 
    return this._data[key];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"data", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: find. Description: Return the find of Psi elements in an object  
  find: function(selector){ 
  try { 
    var search = $(this._ref).find(selector);
    switch (search.size()){
      case 0: return null;
      case 1: return search.get(0)._ref;
      default:
        var map = new Array();
        search.each(function(){
          if (this._ref!=null) 
            map.push(this._ref);
        });
        return map; 
    } 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"find", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: addChild. Description: Add element Psi child  
  addChild: function(element){ 
  try { 
    this.children[element.uid] = element;
    this.onAddChild(element.uid, element);
    return this.children[element.uid];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"addChild", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: removeChild. Description: Remove element Psi child  
  removeChild: function(element){ 
  try { 
    if ($.isEmptyObject(this.children)) return;
    if (element._psixml && this.children[element.uid]) 
      this.children[element.uid].remove(); 
    else if ($.type(element)==="string" && this.children[element]) 
      this.children[element].remove();
    else if ($.type(element)==="boolean" && element==true)
      for(var id in this.children)
        this.children[id].remove();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"removeChild", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: createElement. Description: Create new element within reference document  
  createElement: function(nodeName){ 
    return this.program.createElement(nodeName);
   },  
  //Method: parseElement. Description: Parse element  
  parseElement: function(newElement){ 
    return this.program.parseElement(newElement, this);
   },  
  //Method: toStringWithAttributes. Description: Return a String with list of attributes and values  
  toStringWithAttributes: function(){ 
    var attributes = new Array();
    for(var i=0; i<this._ref.attributes.length; i++) {
      var attr = this._ref.attributes[i], 
          attrdef = this._def.getAttribute(attr.name); 
      attributes.push((attrdef && attrdef.mandatory? '*': '')+attr.name+(attrdef && attrdef.defaultValue? '[default:'+attrdef.defaultValue+']': '')+"="+attr.value);
    }
    return this.toString()+"(tag=" + this.tag + ", attributes={" + attributes + "})";
   },
  //Events   
  //Event: onInit. Description: Event when Psi element is initialized  
  onInit: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onAddChild. Description: Event when a Psi child element is added  
  onAddChild: function(uid, psiElement){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onAddChild", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onRemove. Description: Event when a Psi element is deleted  
  onRemove: function(self){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onRemove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onChildrenCreated. Description: Event when the creation of all children of a Psi element is finished  
  onChildrenCreated: function(context){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "PsiElement"; }
});

/*-----------------------------------------------------
*=Enum[program_state]: ProgramState
* Description: Execution state of a Psi program
*-----------------------------------------------------*/
var ProgramState = {   
  INIT: 'Init',  
  SCANNER: 'Scanner',  
  PARSE: 'Parse',  
  RUN: 'Run',  
  STOP: 'Stop',  
  ERROR: 'Error'
};   

/*-----------------------------------------------------
*=Class[program]: Program
* Description: Parser for a Psi program 
*-----------------------------------------------------*/
function Program (name, language, options, context) {
  //Properties   
  //Property: _sequenceUID. Description: Secuanciado UID. Default: 1  
  this._sequenceUID = 1;  
  //Property: scanner. Description: Pointer to Scanner  
  this.scanner = null;  
  //Property: parser. Description: Pointer to parser  
  this.parser = null;  
  //Property: object. Description: Psi object obtained from program  
  this.object = null;  
  //Property: language. Description: Pointer to language  
  this.language = null;  
  //Property: trash. Description: Trash of Psi program  
  this.trash = null;  
  //Property: state. Description: Execution state of Psi program  
  this.state = this._init(name, language, options, context); 
}; 
//* Definitions Events and Methods
Program.methods({
  //Methods   
  //Method: _init. Description: To initialize Psi program  
  _init: function(name, language, options, context){ 
  try { 
    this.name = name;
    this.language = language;
    this.parserClass = this.language.parserClass;
    this.options = options;
    this.context = context;
    this.trashExecute = new Trash(this);
    this.trashCompiler = new Trash(this);
    this.object = null;
    this.objectsTable = {};
    this.objectsTags = {};
    this.objectsIds = {};
    this.context = context;
    this.state = ProgramState.INIT;
    PSIDEBUG("PSIXML.PROGRAM_INIT", [this.toDebug()]);
    return ProgramState.INIT;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _scanner. Description: Make scanner of Psi program  
  _scanner: function(){ 
    if (this.state == ProgramState.INIT) {
      this.state = ProgramState.SCANNER;
      PSIDEBUG("PSIXML.PROGRAM_SCANNER", [this.toDebug()]);
      var scanner = new Scanner(this, this.options);
      this.source = scanner.execute();
      this.rootDocument = this.source.documentElement;
      this.rootName = this.source.documentElement.nodeName;
    }
   },  
  //Method: _parse. Description: Execute Parser of Psi program  
  _parse: function(){ 
    this.state = ProgramState.PARSE;
    PSIDEBUG("PSIXML.PROGRAM_PARSE", [this.toDebug()]);
    this.parse = new this.parserClass();
    this.parse.init(this);
    return this.parse.parseProgram(this.context);
   },  
  //Method: _error. Description: Error in Psi program  
  _error: function(e){ 
    this.state = ProgramState.ERROR;
    if (e && e.stop===true) throw e;
   },  
  //Method: _run. Description: Execute Psi program  
  _run: function(){ 
    if (this.state==ProgramState.STOP) return null;
    this.state = ProgramState.RUN;
    PSIDEBUG("PSIXML.PROGRAM_RUN", [this.toDebug()]);
    this.url = this.source ? this.source.URL : "Source String";
    return this.object;
   },  
  //Method: _stop. Description: Stop Psi program  
  _stop: function(){ 
  try { 
    this.object.stop();
    this.state = ProgramState.STOP;
    PSIDEBUG("PSIXML.PROGRAM_STOP", [this.toDebug()]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_stop", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getUID. Description:  Get UID unique identificator for a Psi element  
  getUID: function(tag){ 
    return this.name + "-" + tag + "-" + (this._sequenceUID++ / 100000).toString().substr(2);
   },  
  //Method: execute. Description: Excute requested Psi program  
  execute: function(context){ 
    try {
      this.context = context;
      this._scanner();
      this._parse();
      this._run();
    }
    catch (e) {
      this._error(e);
    }
    return this.object;
   },  
  //Method: addObject. Description: Add Psi object  
  addObject: function(obj){ 
  try { 
    this.objectsTable[obj.uid] = obj;
    this.objectsIds[obj.id()] = obj;
    if (!this.objectsTags[obj.tag]) 
      this.objectsTags[obj.tag] = {};
    if (obj.id()) 
      this.objectsTags[obj.tag][obj.id()] = obj;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"addObject", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getObjectByTag. Description: Get Psi object through tag and identificator  
  getObjectByTag: function(id, implementation){ 
    if (this.objectsTags[tag] && this.objectsTags[tag][id]) 
      return this.objectsTags[tag][id];
    return null;
   },  
  //Method: getObjectByUID. Description: Get object through unique identificator  
  getObjectByUID: function(uid){ 
    return this.objectsTable[uid];
   },  
  //Method: toXml. Description: Serialize in Xml the Psi program  
  toXml: function(){ 
  try { 
    return (this.source)
          ? (this.source.xml || (new XMLSerializer()).serializeToString(this.source))
          : PsiText.get("PSIXML.DOCUMENT_NO_ADDED", [this.toDebug()]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"toXml", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: createElement. Description: Create a new Psi element  
  createElement: function(nodeName){ 
    return this.source.createElement(nodeName);
   },  
  //Method: parseElement. Description: Parse a Psi element  
  parseElement: function(newElement, _parent){ 
  try { 
    var parent = _parent==null
               ? this.rootDocument
               : $.type(_parent)==="string" 
                  ? $(_parent, this.source).get(0) 
                  : _parent.jquery!=null
                    ? _parent.get(0)
                    : _parent._psixml!=null
                      ? _parent._ref
                      : _parent;
    if (parent) {
      var psiId = $(newElement).attr("psi-id");
      if (psiId) {
        $(newElement).removeAttr("psi-id");
        $(parent).append(newElement); 
        return this.parse.parseElementBy(psiId, newElement.jquery!=null ? newElement.get(0) : newElement, parent._ref, this.context);
      }
    }
    return null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"parseElement", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: toDebug. Description: Information for Psi debug  
  toDebug: function(newElement, selector){ 
    return "Program(language=" + this.language.ALIAS + ", name=" + this.name + ", state=" + this.state + ")";
   },
  //Events 
  toString: function() { return "Program"; }
});

/*-----------------------------------------------------
*=Class[trash]: Trash
* Description: Administration of trash for Psi elements of a Psi language
*-----------------------------------------------------*/
function Trash (program) {
  //Properties   
  //Property: map. Description: Map of trash elements  
  this.map = {};  
  //Property: program. Description: Pointer to Psi program  
  this.program = program; 
}; 
//* Definitions Events and Methods
Trash.methods({
  //Methods   
  //Method: add. Description: Add Psi elemento to trash  
  add: function(element){ 
  try { 
    if (element != null) {
      PSIDEBUG("PSIXML.TRASH_ADD_ELEMENT", [element.tag]);
      this.map[element.uid] = element;
      return element.uid;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"add", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: get. Description: Get a Psi element of trash  
  get: function(uid){ 
  try { 
    return this.map[uid];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"get", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: remove. Description: Remove Psi element of trash  
  remove: function(uid){ 
  try { 
    if (this.map[uid])
      try {
        this.map[uid].destroy();
        delete this.map[index];
      }
      catch (e) {
        throw new PsiError("PSIXML.TRASH_REMOVE_ERROR", [e.message], [this, e]);
      }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"remove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: kill. Description: Eliminate permanently element of Psi program  
  kill: function(uid){ 
  try { 
    if (this.map[uid]) 
      delete this.map[index];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"kill", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: clean. Description: Clean trash of Psi program   
  clean: function(uid){ 
  try { 
    for (var uid in this.map)
      this.kill(uid);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"clean", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Trash"; }
});

/*-----------------------------------------------------
*=Object[programs]: Programs
* Description: Definition and registry of Psi programs.
*-----------------------------------------------------*/
var Programs = {
  //Properties   
  //Property: map. Description: Map of programs executed on client  
  map: {},
  //Methods   
  //Method: exist. Description: Establish if there is a Psi program  
  exist: function(name){ 
    return this.map[name] != null;
   },  
  //Method: get. Description: Get a Psi program  
  get: function(name){ 
    return this.map[name];
   },  
  //Method: all. Description: Get all Psi programs  
  all: function(){ 
    return this.map;
   },  
  //Method: append. Description: Add Psi program  
  append: function(name, program){ 
    this.map[name] = program; 
   },  
  //Method: remove. Description: Remove Psi program  
  remove: function(name){ 
    if(this.map[name]) 
      delete this.map[name];
   }
};   


  //Component Methods   
  //Method: registerLanguagePsi. Description: Register Psi language  
  function registerLanguagePsi(alias, GRAMMAR, parserClass){ 
  try { 
    LanguagePsi.register(alias, GRAMMAR, parserClass);    
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"registerLanguagePsi", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: traductor_PxmlToPobj. Description: Translation of a Psi program to a Psi object  
  function traductor_PxmlToPobj(alias, name, options, context){ 
    if (Programs.exist(name))
      throw new PsiError("PSIXML.INTERPRETER_ERROR_EXIST_PROGRAM", [name], [alias, name, options]);
    
    // Obtener el lemguaje Psi
    var language = LanguagePsi.get(alias),
        program = new Program(name, language, options);
        
    //* Compilar y ejecutar programa Psi
    program.execute(context);
    if (program.state == ProgramState.RUN)
      Programs.append(name, program);
      
    //* Retornar programa Psi
    return program;   
   };  
  //Method: load. Description: Obtain by means of AJAX a document, fragment, etc. It uses every parameters of jQuery.ajax(...)  
  function load(url, data, _options){ 
  try { 
    var source = null,
        options = $.extend({}, {url: url, async: false, data: data, dataType: "text", contentType: "application/x-www-form-urlencoded; charset=utf-8"}, _options);
    //Ejecutar llamado AJAX
    $.ajax(options)
      .done(function(data, textStatus, jqXHR) { 
        if (textStatus != "success")
          throw new PsiError("PSIXML.DOCUMENT_ERROR", [this.url, textStatus, jqXHR.textXML], [this, arguments]);
        source = data;
      })
      .fail(function(jqXHR, textStatus, errorThrown) { 
        throw new PsiError("PSIXML.DOCUMENT_ERROR", [this.url, textStatus, errorThrown], [this, arguments]);
      });
    return source;    
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"load", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: loadXMLSync. Description: Obtain by means of AJAX a synchronic XML document  
  function loadXMLSync(url, data, _options){ 
  try { 
    var options = $.extend({}, {dataType: "xml", type: "GET", contentType: "application/x-www-form-urlencoded; charset=utf-8"}, _options);
    return load(url, data, options);    
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"loadXMLSync", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: createModule. Description: Create Psi module in window object  
  function createModule(name){ 
  try { 
    if ($.type(name)=="string") {
      var modules = name.split("."), 
          current = window;
      for(var i in modules){
        var module = modules[i];
        if (current[module]==null) current[module] = {};
        current = current[module];
      }
      return current;
    }
    return null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createModule", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: createClass. Description: Create class in a Psi module  
  function createClass(nameClass, constructor, properties, methods, inherits, init){ 
  try { 
    if ($.type(nameClass)=="string" && window[nameClass]==null) {
      var define = nameClass+" = function(" + (constructor?constructor:"") + "){ \n"
          pm = $.extend({}, properties, methods);
      
      //Adicionar propiedades
      for(var name in properties)
        define += "this."+name+" = "+properties[name]+";\n";
      //Adicionar init
      if (init)
        define += init+";";
      define += "\n};";
      
      //Adicionar herencia
      if ( $.type(inherits)=="string" )
        define += nameClass+".inherits("+inherits+");\n";
        
      //Adicionar propiedades y mátodos
      define += nameClass+".methods( pm );\n\n";
      
      //Crear definición de clase Psi
      eval(define);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createClass", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };


/*-----------------------------------------------------
* Module Initialize: InitPsiXML  
*-----------------------------------------------------*/
function InitPsiXML() { 
    //Registrar base de datos de funciones Psi
    PsiData.register("function");
    PsiData.register("var");
    
    //Registrar base de datos de documentos Psi
    PsiData.register("document", {
      get: function(key){
        if ($.isPlainObject(this[key]))
          this[key] = loadXMLSync(this[key].url, this[key].data, this[key].type);
        return this[key];
      },
      register: function(key, url, data, type){
        if (this.exist(key)) return this[key];
        this[key] = {url: url, data: data, type: type};
        return this[key]; 
      }
    });
    
    //Registrar base de datos de documentos Psi
    PsiData.register("command", {
      register: function(key, bodyDef, help, options){
        if (this.exist(key)) return this[key];
        var keydef = key+"--def";
        this[keydef] = new Function("proxy", "event", "help", bodyDef); 
        this[keydef].help = help;
        this[keydef].default = options ? options : {};
        //Crear comando
        var bodyCommand = "var cmddef = this['"+keydef+"']; proxy.options = $.extend({}, cmddef.default, proxy.options);"
                        + "return cmddef(proxy, event, cmddef.help);";
        this[key] = new Function("proxy", "event", bodyCommand); 
      }
    });
  
}
InitPsiXML();

/*-----------------------------------------------------
* Component Definition: PsiXML  
*-----------------------------------------------------*/
return {
  //Content 
  LanguagePsi: LanguagePsi, //* Type: Component
  Scanner: Scanner, //* Type: Class
  Parser: Parser, //* Type: Class
  PsiElement: PsiElement, //* Type: Class
  ProgramState: ProgramState, //* Type: Enum
  Program: Program, //* Type: Class
  Trash: Trash, //* Type: Class
  Programs: Programs, //* Type: Object
  //Properties 
  //Methods 
  registerLanguagePsi: registerLanguagePsi,
  traductor_PxmlToPobj: traductor_PxmlToPobj,
  load: load,
  loadXMLSync: loadXMLSync,
  createModule: createModule,
  createClass: createClass,
  toString: function() { return "PsiXML"; }
};
})(); 

