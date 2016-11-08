/* Generated power ModelPsi (@VERSION 2.0) 
* Model Name: Diagram for Graphs Library based PsiXML
* Version: 1.0
* 
* Copyright 2013, B2T Concept
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
* http://www.b2tconcept/psiXml/license
*
*/

/* Type DEBUG Psi -------------- */
if (PsiOut && PsiOut.console) PsiOut.console.debug = true;
/* ----------------------------- */


/*-----------------------------------------------------
*=ComponentPsi[d_psi]: DPsi
* Description: Diagram for Graphs Library based PsiXML
*-----------------------------------------------------*/
var DPsi = (function () {  


/*-----------------------------------------------------
* Constants Identifiers Grammar: DPsi 
*-----------------------------------------------------*/
var ID_TAG_DIAGRAM_PSI = "diagram_psi";
var ID_TAG_PARAMS = "params";
var ID_TAG_INCLUDE = "include";
var ID_TAG_LOAD_FUNCTION = "load_function";
var ID_TAG_MAKE = "make";
var ID_TAG_SKELETON = "skeleton";
var ID_TAG_LAYER = "layer";
var ID_TAG_ICON = "icon";
var ID_TAG_NODE = "node";
var ID_TAG_FIGURE = "figure";
var ID_TAG_PANEL = "panel";
var ID_TAG_LATERAL = "lateral";
var ID_TAG_LIST = "list";
var ID_TAG_SECTION = "section";
var ID_TAG_LINE = "line";
var ID_TAG_CONNECTOR = "connector";
var ID_TAG_BIND_TOOLS = "bind_tools";
var ID_TAG_SETTING = "setting";
var ID_TAG_TEXT = "text";
ID_TAGS = {};

/*-----------------------------------------------------
* Structure to GrammarPsi: DPsi
*-----------------------------------------------------*/
ID_TAGS[ID_TAG_DIAGRAM_PSI] = {
  CLASS: "DPsi.Diagram",
  TAG: "Diagram",
  MULTIPLICITY: { "Params": "0..1","Include": "0..n","Bind": "0..1","Function": "0..n","Make": "0..n","Skeleton": "0..n","Layer": "0..n" },
  CHILDREN: { "Params": ID_TAG_PARAMS,"Include": ID_TAG_INCLUDE,"Bind": ID_TAG_BIND_TOOLS,"Function": ID_TAG_LOAD_FUNCTION,"Make": ID_TAG_MAKE,"Skeleton": ID_TAG_SKELETON,"Layer": ID_TAG_LAYER },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: null
};
ID_TAGS[ID_TAG_PARAMS] = {
  CLASS: "DPsi.Params",
  TAG: "Params",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "type:text|theme:text"
};
ID_TAGS[ID_TAG_INCLUDE] = {
  CLASS: "DPsi.Include",
  TAG: "Include",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*alias:text|*type:select(diagram,graph-library,document,tool)|*url:text|rewrite=no:select(yes,no)"
};
ID_TAGS[ID_TAG_LOAD_FUNCTION] = {
  CLASS: "DPsi.LoadFunction",
  TAG: "Function",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|arguments:text"
};
ID_TAGS[ID_TAG_MAKE] = {
  CLASS: "DPsi.Make",
  TAG: "Make",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "id:identifier|ref:identifier"
};
ID_TAGS[ID_TAG_SKELETON] = {
  CLASS: "DPsi.Skeleton",
  TAG: "Skeleton",
  MULTIPLICITY: { "Setting": "0..n","Text": "0..n","Bind": "0..1","Section": "0..n","Make": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING,"Text": ID_TAG_TEXT,"Bind": ID_TAG_BIND_TOOLS,"Section": ID_TAG_SECTION,"Make": ID_TAG_MAKE },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|*graph:identifier|start-label:text|start-label-pos:text|start-label-class:text|middle-label:text|middle-label-pos:text|middle-label-class:text|end-label:text|end-label-pos:text|end-label-class:text"
};
ID_TAGS[ID_TAG_LAYER] = {
  CLASS: "DPsi.Layer",
  TAG: "Layer",
  MULTIPLICITY: { "Bind": "0..1","Make": "0..n","Layer": "0..n","Icon": "0..n","Node": "0..n","Figure": "0..n","Panel": "0..n","List": "0..n","Line": "0..n","Connector": "0..n" },
  CHILDREN: { "Bind": ID_TAG_BIND_TOOLS,"Make": ID_TAG_MAKE,"Layer": ID_TAG_LAYER,"Icon": ID_TAG_ICON,"Node": ID_TAG_NODE,"Figure": ID_TAG_FIGURE,"Panel": ID_TAG_PANEL,"List": ID_TAG_LIST,"Line": ID_TAG_LINE,"Connector": ID_TAG_CONNECTOR },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier"
};
ID_TAGS[ID_TAG_ICON] = {
  CLASS: "DPsi.Icon",
  TAG: "Icon",
  MULTIPLICITY: { "Setting": "0..n","Bind": "0..1","Make": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING,"Bind": ID_TAG_BIND_TOOLS,"Make": ID_TAG_MAKE },
  STRICT: true,
  SEND_CONTEXT: true,
  VALIDATOR: "*id:identifier|*x:number|*y:number|sx=1:number|sy=1:number|angle=0:number|graph:identifier|skeleton:identifier"
};
ID_TAGS[ID_TAG_NODE] = {
  CLASS: "DPsi.Graph.Node",
  TAG: "Node",
  MULTIPLICITY: { "Setting": "0..n","Text": "0..n","Bind": "0..1","Make": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING,"Text": ID_TAG_TEXT,"Bind": ID_TAG_BIND_TOOLS,"Make": ID_TAG_MAKE },
  STRICT: true,
  SEND_CONTEXT: true,
  VALIDATOR: "*id:identifier|*x:number|*y:number|sx=1:number|sy=1:number|angle=0:number|graph:identifier|skeleton:identifier"
};
ID_TAGS[ID_TAG_FIGURE] = {
  CLASS: "DPsi.Graph.Figure",
  TAG: "Figure",
  MULTIPLICITY: { "Setting": "0..n","Text": "0..n","Bind": "0..1","Make": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING,"Text": ID_TAG_TEXT,"Bind": ID_TAG_BIND_TOOLS,"Make": ID_TAG_MAKE },
  STRICT: true,
  SEND_CONTEXT: true,
  VALIDATOR: "*id:identifier|*x:number|*y:number|sx=1:number|sy=1:number|angle=0:number|graph:identifier|skeleton:identifier"
};
ID_TAGS[ID_TAG_PANEL] = {
  CLASS: "DPsi.Graph.Panel",
  TAG: "Panel",
  MULTIPLICITY: { "Setting": "0..n","Text": "0..n","Bind": "0..1","Layer": "0..n","Make": "0..n","Left": "0..1","Right": "0..1","Icon": "0..n","Node": "0..n","Figure": "0..n","List": "0..n","Panel": "0..n","Line": "0..n","Connector": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING,"Text": ID_TAG_TEXT,"Bind": ID_TAG_BIND_TOOLS,"Layer": ID_TAG_LAYER,"Make": ID_TAG_MAKE,"Left": ID_TAG_LATERAL,"Right": ID_TAG_LATERAL,"Icon": ID_TAG_ICON,"Node": ID_TAG_NODE,"Figure": ID_TAG_FIGURE,"List": ID_TAG_LIST,"Panel": ID_TAG_PANEL,"Line": ID_TAG_LINE,"Connector": ID_TAG_CONNECTOR },
  STRICT: true,
  SEND_CONTEXT: true,
  VALIDATOR: "*id:identifier|*x:number|*y:number|*width:number|*height:number|sx=1:number|sy=1:number|graph:identifier|skeleton:identifier"
};
ID_TAGS[ID_TAG_LATERAL] = {
  CLASS: "DPsi.Graph.Lateral",
  TAG: "Lateral",
  MULTIPLICITY: { "Make": "0..n","Icon": "0..n","Node": "0..n","Figure": "0..n","List": "0..n","Line": "0..n","Connector": "0..n" },
  CHILDREN: { "Make": ID_TAG_MAKE,"Icon": ID_TAG_ICON,"Node": ID_TAG_NODE,"Figure": ID_TAG_FIGURE,"List": ID_TAG_LIST,"Line": ID_TAG_LINE,"Connector": ID_TAG_CONNECTOR },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*width:number"
};
ID_TAGS[ID_TAG_LIST] = {
  CLASS: "DPsi.Graph.List",
  TAG: "List",
  MULTIPLICITY: { "Setting": "0..n","Text": "0..n","Bind": "0..1","Section": "0..n","Make": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING,"Text": ID_TAG_TEXT,"Bind": ID_TAG_BIND_TOOLS,"Section": ID_TAG_SECTION,"Make": ID_TAG_MAKE },
  STRICT: true,
  SEND_CONTEXT: true,
  VALIDATOR: "*id:identifier|*x:number|*y:number|*width:number|sx=1:number|sy=1:number|angle=0:number|items:text|graph:identifier|skeleton:identifier"
};
ID_TAGS[ID_TAG_SECTION] = {
  CLASS: "DPsi.Graph.Section",
  TAG: "Section",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*key:identifier|class:text"
};
ID_TAGS[ID_TAG_LINE] = {
  CLASS: "DPsi.Lines.Line",
  TAG: "Line",
  MULTIPLICITY: { "Setting": "0..n","Bind": "0..1","Make": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING,"Bind": ID_TAG_BIND_TOOLS,"Make": ID_TAG_MAKE },
  STRICT: true,
  SEND_CONTEXT: true,
  VALIDATOR: "*id:identifier|graph:identifier|skeleton:identifier|*start:text|*path:text|*end:text|class:text"
};
ID_TAGS[ID_TAG_CONNECTOR] = {
  CLASS: "DPsi.Lines.Connector",
  TAG: "Connector",
  MULTIPLICITY: { "Setting": "0..n","Bind": "0..1","Make": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING,"Bind": ID_TAG_BIND_TOOLS,"Make": ID_TAG_MAKE },
  STRICT: true,
  SEND_CONTEXT: true,
  VALIDATOR: "*id:identifier|graph:identifier|skeleton:identifier|from:identifier|*start:text|*path:text|to:identifier|*end:text|class:text"
};
ID_TAGS[ID_TAG_BIND_TOOLS] = {
  CLASS: "DPsi.BindTools",
  TAG: "Bind",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "help.operator:text(Operator +=open -=close *=destroy #=toggle)|help.type:text(Tool command@#dialog@#toolbar@#tooltip@#popup@#drop@#dragdrop@#generator)|help.command:text(Operator Tool=selector@=event@=key)"
};
ID_TAGS[ID_TAG_SETTING] = {
  CLASS: "DPsi.Setting",
  TAG: "Setting",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*key:identifier"
};
ID_TAGS[ID_TAG_TEXT] = {
  CLASS: "DPsi.Text",
  TAG: "Text",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*key:identifier"
};

var GRAMMAR = {
      NAME: "DPsi",
      TAGS: ID_TAGS,
      ROOT: ID_TAG_DIAGRAM_PSI
    };
var ALIAS = "DPsi";


/*-----------------------------------------------------
* Component:  Properties
*-----------------------------------------------------*/


/*-----------------------------------------------------
*=Texts[dpsi_messages]: DPSI
* Description: Lista de textos de diagrama Psi
*-----------------------------------------------------*/
var DPSI_SHORT_MAP = { 
  ES: { 
    MANAGER_DIAGRAM_ERROR_INDEX: "Desincronización en la lista de administradores de diagrama Psi. Identificador '$1' no registrado",
    GRAPH_BASE_INIT: "Error creado elemento gráfico '$1'",
    EVENTS_BIND_ERROR: "$1 Error enlazando evento '$2'",
    NODE_GRAPH_ERROR: "No se definio en el nodo el atributo 'graph' o atributo 'skeleton'",
    FIGURE_GRAPH_ERROR: "No se definio en la figura el atributo 'graph' o atributo 'skeleton'",
    PANEL_GRAPH_ERROR: "No se definio en el panel el atributo 'graph' o atributo 'skeleton'",
    PANEL_GRAPH_LATERAL_ERROR: "Error en definición de lateral '$1' de Panel Psi '$2'.",
    LIST_GRAPH_ERROR: "No se definio en la lista el atributo 'graph' o atributo 'skeleton'",
    LINE_ERROR: "No se definio en la línea el atributo 'graph' o atributo 'skeleton'",
    CONNECTOR_ERROR: "No se definio en el connector el atributo 'graph' o atributo 'skeleton'",
    APPLY_SETTINGS_ERROR: "Error aplicando ajuste key='$1'. Valor: $2",
    APPLY_TEXTS_ERROR: "Error aplicando ajuste de texto key='$1'.",
    DEBUG_INCLUDE_EXIST: "Ya existe '$1' con alias '$2'. No se incluirá nuevamente",
    DEBUG_INCLUDE_REGISTER: "Ejecutándo Diagrama Psi con alias '$1'",
    MAKE_NOT_EXIST_LOCAL: "No existe Make local='$1'",
    BIND_ERROR_DEFINE_ATTR: "Error definición de enlace a herramienta $1='$2' en elemento con identificador '$3'. Definición: [type=selector ':' event]",
    BIND_ERROR_DEFINE_ATTR_TYPE: "Error definición de enlace a herramienta $1='$2' en elemento con identificador '$3'. Tipo de herramienta '$4' no definido. Tipos válidos: $5",
    BIND_ERROR_EVENT: "Herramienta indefinida. Tipo: $1. Identificador: $2",
    BIND_ERROR_EVENT_METHOD: "Herramienta con mátodo indefinido. Tipo: $1. Mátodo: $2. Identificador: $3",
    MAKE_NOT_EXIT: "No existe Make en PsiData con identificador '$1'",
    ERROR_DEFINE_ELEMENT: "No se ha definido un referencia gráfico ni un esqueleto para el elemento gráfico '$1'",
    ERROR_DEFINE_ELEMENT_SKELETON: "No existe un esqueleto '$1' para el elemento gráfico '$2'",
    ERROR_SELECT_TYPE: "Tipo de elemento Psi no existe: '$1'"
  }
}; 
var DPSI_MAP = { 
  ES: { 
    MANAGER_DIAGRAM_ERROR_INDEX: "Desincronización en la lista de administradores de diagrama Psi. Identificador '$1' no registrado",
    GRAPH_BASE_INIT: "Error creado elemento gráfico '$1'",
    EVENTS_BIND_ERROR: "$1 Error enlazando evento '$2'",
    NODE_GRAPH_ERROR: "No se definio en el nodo el atributo 'graph' o atributo 'skeleton'",
    FIGURE_GRAPH_ERROR: "No se definio en la figura el atributo 'graph' o atributo 'skeleton'",
    PANEL_GRAPH_ERROR: "No se definio en el panel el atributo 'graph' o atributo 'skeleton'",
    PANEL_GRAPH_LATERAL_ERROR: "Error en definición de lateral '$1' de Panel Psi '$2'.",
    LIST_GRAPH_ERROR: "No se definio en la lista el atributo 'graph' o atributo 'skeleton'",
    LINE_ERROR: "No se definio en la línea el atributo 'graph' o atributo 'skeleton'",
    CONNECTOR_ERROR: "No se definio en el connector el atributo 'graph' o atributo 'skeleton'",
    APPLY_SETTINGS_ERROR: "Error aplicando ajuste key='$1'. Valor: $2",
    APPLY_TEXTS_ERROR: "Error aplicando ajuste de texto key='$1'.",
    DEBUG_INCLUDE_EXIST: "Ya existe '$1' con alias '$2'. No se incluirá nuevamente",
    DEBUG_INCLUDE_REGISTER: "Ejecutándo Diagrama Psi con alias '$1'",
    MAKE_NOT_EXIST_LOCAL: "No existe Make local='$1'",
    BIND_ERROR_DEFINE_ATTR: "Error definición de enlace a herramienta $1='$2' en elemento con identificador '$3'. Definición: [type=selector ':' event]",
    BIND_ERROR_DEFINE_ATTR_TYPE: "Error definición de enlace a herramienta $1='$2' en elemento con identificador '$3'. Tipo de herramienta '$4' no definido. Tipos válidos: $5",
    BIND_ERROR_EVENT: "Herramienta indefinida. Tipo: $1. Identificador: $2",
    BIND_ERROR_EVENT_METHOD: "Herramienta con mátodo indefinido. Tipo: $1. Mátodo: $2. Identificador: $3",
    MAKE_NOT_EXIT: "No existe Make en PsiData con identificador '$1'",
    ERROR_DEFINE_ELEMENT: "No se ha definido un referencia gráfico ni un esqueleto para el elemento gráfico '$1'",
    ERROR_DEFINE_ELEMENT_SKELETON: "No existe un esqueleto '$1' para el elemento gráfico '$2'",
    ERROR_SELECT_TYPE: "Tipo de elemento Psi no existe: '$1'"
  }
};//* Register texts PsiXML
if (PsiOut.console.debug) DPSI_SHORT_MAP = DPSI_MAP;
PsiText.registerSet("DPSI", PsiOut.console.debug ? DPSI_MAP : DPSI_SHORT_MAP);
PsiText.registerSet("DPSI_MAP", DPSI_MAP);
//Send type
var DPSI_SEND = [];

/*-----------------------------------------------------
*=Enum[include_type]: IncludeType
* Description: Tipo de elementos a incluir en un Programa Psi
*-----------------------------------------------------*/
var IncludeType = {   
  Diagram: 'diagram',  
  GraphLibrary: 'graph-library',  
  Document: 'document',  
  Tool: 'tool'
};   

/*-----------------------------------------------------
*=Class[include]: Include
* Description: Adiciona un nuevo documento a la lista de documentyo de PsiXML
*-----------------------------------------------------*/
function Include () {
  //Properties  
};
//Inheritance
Include.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Include.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Incluir el elemento vía AJAX al Programa Psi  
  onInit: function(){ 
  try { 
    var alias = this.attr("alias"),
        type = this.attr("type");
    if (GLPsi.exist(alias) && this.attr("rewrite")=="no") {
      PSIDEBUG("DPSI.DEBUG_INCLUDE_EXIST", [type, alias], [this]);
      return;
    }
    PSIDEBUG("DPSI.DEBUG_INCLUDE_REGISTER", [alias]);
    switch(type){
      case IncludeType.Diagram: this.context.run(alias, { url: this.attr("url") }); break;
      case IncludeType.GraphLibrary:
        GLPsi.register(alias, { url: this.attr("url") }, this.attr("rewrite")=="yes"); 
        break;
      case IncludeType.Document:
        if (this.attr("rewrite")=="yes") 
          PsiData.document.rewrite(this.attr("alias"), this.attr("url"), this.attr("data"), this.attr("action"));   
        else 
          PsiData.document.register(this.attr("alias"), this.attr("url"), this.attr("data"), this.attr("action"));
        break;
      case IncludeType.Tool:
        TPsi.run(this.attr("alias"), { url: this.attr("url"), data: this.attr("data")});
        break;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Include"; }
});

/*-----------------------------------------------------
*=Class[load_function]: LoadFunction
* Description: Adiciona una nueva función al programa de diagrama Psi
*-----------------------------------------------------*/
function LoadFunction () {
  //Properties  
};
//Inheritance
LoadFunction.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
LoadFunction.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Crear función para programa Psi  
  onInit: function(){ 
  try { 
    var name = this.root.alias+"."+this.id();
    PsiData.function.register(name, new Function("self", "context", "options", $(this._ref).text()));
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "LoadFunction"; }
});

/*-----------------------------------------------------
*=Enum[bind_tool_type]: BindToolType
* Description: Tipo de elementos a incluir en un Programa Psi
*-----------------------------------------------------*/
var BindToolType = {   
  Command: 'command',  
  Dialog: 'dialog',  
  Toolbar: 'toolbar',  
  Tooltip: 'tooltip',  
  Popup: 'popup',  
  Drop: 'drop',  
  DragDrop: 'dragdrop',  
  Generator: 'generator'
};   

/*-----------------------------------------------------
*=Class[bind_tools]: BindTools
* Description: Definición de enlaces a herramientas Psi a un elemento gráfico Psi. Definición: [[+|-|*]type=selector '|' event '|' key]. Los mátodos: (+) open (-)close (*)destroy
*-----------------------------------------------------*/
function BindTools () {
  //Properties   
  //Property: _map. Description: Lista de herramientas Psi a encadenar  
  this._map = {}; 
};
//Inheritance
BindTools.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
BindTools.methods({
  //Methods   
  //Method: _bindTool. Description: Enlazar herramienta Psi  
  _bindTool: function(parent, tool, id, options, context){ 
  try { 
    var fevent = function(event){
          var p = this.args[event.type], o = this.params[event.type];
          
          //Determinar tipo de herramienta
          o.parent = event.target; 
          if (p.type==BindToolType.Command && p.method=="+") 
            PsiData.command[p.id](o, event);
          else if (PsiData[p.type] && PsiData[p.type][p.id])
            switch(p.method){
              case "+": PsiData[p.type][p.id].open(o); break;
              case "-": PsiData[p.type][p.id].close(o); break;
              case "*": PsiData[p.type][p.id].destroy(o.key); break;
              case "#": 
                if ( PsiData[p.type][p.id].isOpen(o) )
                  PsiData[p.type][p.id].close(o);
                else 
                  PsiData[p.type][p.id].open(o);
                break;
              case "%":
                if (event.type==p.open)
                  PsiData[p.type][p.id].open(o);
                else if (event.type==p.close)
                  PsiData[p.type][p.id].close(o); 
                else
                  new PsiWarning("DPSI.BIND_ERROR_EVENT_METHOD", [p.type, p.method, p.id], [this, p]);
                break;
              default: PsiWarning("DPSI.BIND_ERROR_EVENT_METHOD", [p.type, p.method, p.id], [this, p]);
            }
          else
            new PsiWarning("DPSI.BIND_ERROR_EVENT", [p.type, p.id], [this, p]);
          event.stopImmediatePropagation();
          return false;
        },
        args = {type: tool.type, method: tool.method, id: id},  
        params = {key: tool.key=="*" ? $(parent).attr("id") : tool.key, parent: parent, ref: parent ? parent._ref : null, options: options, context: context};
    //Procesa encadenamiento    
    if (tool.method=="%"){
      var e = tool.event.split(",");
      params.open = e[0];
      params.close = e[1];
      $(tool.selector, parent)
        .bind(e[0], fevent)
        .bind(e[1], fevent)
        .each(function(){ 
          if (this.args==null) this.args = {};
          this.args[tool.event] = args;
          if (this.params==null) this.params = {};
          this.params[tool.event] = params;  
        });
    }
    else
      $(tool.selector, parent)
        .bind(tool.event, fevent)
        .each(function(){
          if (this.args==null) this.args = {};
          this.args[tool.event] = args;
          if (this.params==null) this.params = {};
          this.params[tool.event] = params; 
        });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindTool", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getMap. Description: Obtener mapa de enlaces a herramientas Psi  
  getMap: function(){ 
  try { 
    return this._map; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getMap", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: build. Description: Enlazar mapa de enlaces a herramientas Psi  
  build: function(parent, options, context, otherMap){ 
  try { 
    var map = $.extend({}, this._map, otherMap);
    for (var id in map)
      this._bindTool(parent, map[id], id, options, context);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"build", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar mapa de enlaces a herramientas Psi para elementos gráficos Psi.  
  onInit: function(){ 
  try { 
    for (var i=0; i<this._ref.attributes.length; i++) {
      var attr = this._ref.attributes[i],
          method = attr.value[0],
          type = attr.value.indexOf("=")>0 ? attr.value.substr(1, attr.value.indexOf("=")-1) : null;
      switch (type) {
        case BindToolType.Command: 
        case BindToolType.Dialog: 
        case BindToolType.Toolbar: 
        case BindToolType.Tooltip: 
        case BindToolType.Popup:
        case BindToolType.Drop:
        case BindToolType.DragDrop:
        case BindToolType.Generator:
          var value = attr.value.substr(attr.value.indexOf("=")+1),
              div1 = value.lastIndexOf("|"),
              div2 = value.substr(0,div1).lastIndexOf("|");
          if (div1>0 && div2>0)
            this._map[attr.name] = { 
              type: type,
              method: method, 
              selector: value.substr(0,div2), 
              event: value.substr(div2+1,div1-div2-1),
              key: value.substr(div1+1) 
            };
          else
            new PsiWarning("DPSI.BIND_ERROR_DEFINE_ATTR", [attr.name, attr.value, this.parent.id()], [this, attr]);
          break;
        default :
          new PsiWarning("DPSI.BIND_ERROR_DEFINE_ATTR_TYPE", [attr.name, attr.value, this.parent.id(), type, BindToolType], [this, attr, BindToolType]);
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "BindTools"; }
});

/*-----------------------------------------------------
*=Class[setting]: Setting
* Description: Ajustes a un elmento svg de un elemento Psi
*-----------------------------------------------------*/
function Setting () {
  //Properties  
};
//Inheritance
Setting.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Setting.methods({
  //Methods   
  //Method: getMap. Description: Obtener ajustes para un elemento svg de un elemento Psi  
  getMap: function(){ 
  try { 
    var map = {};
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i]; 
      if (attr.name!="key")
        map[attr.name] = attr.value;
    }
    return map;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getMap", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: set. Description: Actualizar lista de atributos  
  set: function(settings){ 
  try { 
    for(var name in settings) 
      this.attr(name, settings[name]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"set", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar propiedad 'key'  
  onInit: function(){ 
  try { 
    this.key = this.attr("key");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Setting"; }
});

/*-----------------------------------------------------
*=Class[text]: Text
* Description: Ajustes de un elmento text svg de un elemento Psi
*-----------------------------------------------------*/
function Text () {
  //Properties  
};
//Inheritance
Text.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Text.methods({
  //Methods   
  //Method: getParams. Description: Obtener parámetros  
  getParams: function(){ 
  try { 
    var params = {};
    //Parámetros númericos
    var numbers = ["x", "y", "width", "height", "spacing"];
    for(var i in numbers) {
      name = numbers[i];
      if (this.hasAttr(name))
      	params[name] = parseFloat(this.attr(name));
    }
    //Parámetros posicionamiento
    var strings = ["halign", "valign"];
    for(var i in strings) {
      name = strings[i];
      if (this.hasAttr(name))
      	params[name] = this.attr(name);
    }
    return params;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getParams", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: apply. Description: Aplicar ajustes un 'text' svg de un elemento Psi  
  apply: function(current, content, params){ 
  try { 
    $(current).empty();
    var ts = this.context.svggen.other(current, "tspan"), 
        aux = content ? content.split(" ") : [""], words = new Array(),
        cts = 1, nwords=0, row = "", spacing = params.spacing ? params.spacing:0;
    
    //Preprocesar
    for (var i=0; i<aux.length; i++){
      var w = aux[i], l=w.length; 
      if (l<=8) words.push({word: w, dash:false});
      else {
        var n = l<10 ? 3 : l<15 ? 4 : l<20 ? 5 : l<25 ? 6 : 8, 
            m = Math.floor(w.length/n);
        for(var i=0; i<n; i++) words.push({word: w.substr(i*m,m), dash: i<n-1});
      }
    }
    
    //Crear líneas
    $(ts).text(content);
    var hc = ts.offsetHeight!=null ? ts.offsetHeight : ts.getBoundingClientRect().height;
    //var hc = ts.getBoundingClientRect().height;
    for (var i=0; i<words.length; i++){
      var w = words[i];
      $(ts).text((row!=""?row+" ":"")+w.word);
      if (ts.getComputedTextLength()<params.width){
        row += (i>0 && words[i-1].dash ? "":" ")+w.word;
        continue;
      } 
      $(ts).text(row+(i>0 && words[i-1].dash?"-":""));
      row = w.word;
      ts = this.context.svggen.other(current, "tspan");
    }
    $(ts).text(row);
    
    //Crear espaciado
    var tspans = $("tspan", current), 
        spacing = params.spacing ? params.spacing : 0,
        h = hc*tspans.length+(tspans.length-1)*spacing,
        top = params.valign=="start" 
            ? params.y 
            : params.valign=="end"
              ? params.y+params.height-h-hc
              : params.y+params.height/2-h/2-hc/2+3,
        halign = params.halign ? params.halign : "start",
        left = halign=="start" 
             ? params.x
             : halign=="end"
               ? params.x+params.width
               : params.x+params.width/2;
    current.setAttribute("text-anchor", halign);
    tspans.each(function(){
      top += hc;
      this.setAttribute("x",left);
      this.setAttribute("y",top);
      top += spacing;
    });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"apply", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar propiedad 'key'  
  onInit: function(){ 
  try { 
    this.key = this.attr("key");
    this.params = this.getParams();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Text"; }
});

/*-----------------------------------------------------
*=Class[params]: Params
* Description: Parámetros de entrada para el diagrama Psi
*-----------------------------------------------------*/
function Params () {
  //Properties  
};
//Inheritance
Params.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Params.methods({
  //Methods   
  //Method: set. Description: Actualizar un parámetro de entrada de tipo string  
  set: function(name, value){ 
  try { 
    if (name!="set") {
      if ($.type(value)==="string") this.attr(name, "'"+value+"'");
      else this.attr(name, value);
      this[attr.name] = value;
    }  
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"set", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar parámetros de entrada  
  onInit: function(){ 
  try { 
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i];
      this[attr.name] = eval( this.attr(attr.name) );
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Params"; }
});

/*-----------------------------------------------------
*=Class[select_base]: SelectBase
* Description: Seleccionar elemento gráfico Psi (lineas, conectores, figuras, nodos, listas, paneles, etc.)
*-----------------------------------------------------*/
function SelectBase () {
  //Properties   
  //Property: _manager. Description: Apuntador a administrador de programa  
  this._manager = null;  
  //Property: _ref. Description: Referencia a elemento gráfico Psi  
  this._ref = null;  
  //Property: _svg. Description: Diagrama SVG  
  this._svg = null;  
  //Property: frame. Description: Marco del elemento gráfico Psi  
  this.frame = null; 
}; 
//* Definitions Events and Methods
SelectBase.methods({
  //Methods   
  //Method: _settings. Description: Mátodo abstracto para configuración por defecto  
  _settings: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_settings", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _createFrame. Description: Mátodo abstracto para crear marco de referencia del elemento gráfico Psi  
  _createFrame: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_createFrame", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _init. Description: Inicializa la seleccion del elemento Psi  
  _init: function(manager, ref){ 
  try { 
    //Inicializar atributos
    this._manager = manager;
    this._ref = ref; 
    this._svg = ref._svg;
    this.frame = this._createFrame();
    
    //Configurar marco de referencia
    $(this.frame).attr("select", "yes");
    var addclass = this._ref._lib.attr("select-class");
    if (addclass) {
      this._oldclass = $(this.frame).attr("class");
      this.frame.setAttribute("class", this._oldclass+" "+addclass);
    }
    else
      this._manager.svggen.change(this.frame, this._settings());
    
    //Asociar referencia cruzadas
    this._ref._select = this;
    if (this.frame)
      this.frame._ref = this._ref;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: move. Description: Mátodo abstracto para mover elemento Psi seleccionado  
  move: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"move", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: destroy. Description: Eliminar marco de referencia del elemento gráfico  
  destroy: function(){ 
  try { 
    this._ref._select = null;
    $(this.frame).remove();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"destroy", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "SelectBase"; }
});

/*-----------------------------------------------------
*=Enum[element_type]: ElementType
* Description: Tipo de elementos a incluir en un Programa Psi
*-----------------------------------------------------*/
var ElementType = {   
  Line: 'line',  
  Graph: 'graph'
};   

/*-----------------------------------------------------
*=Class[dbase]: DBase
* Description: elemento gráfico base para el manejo de exceptiones visuales dentro de un diagrama Psi
*-----------------------------------------------------*/
function DBase () {
  //Properties   
  //Property: keys. Description: Lista de llaves  
  this.keys = null; 
};
//Inheritance
DBase.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
DBase.methods({
  //Methods   
  //Method: _createReferences. Description: Crear referencias entre DPsi->GLPsi, DPsi<->DOM, DPsi<->SVG y SVG<->DOM  
  _createReferences: function(_svg){ 
  try { 
    if (_svg==null)
      throw new DError(this, "GRAPH_BASE_INIT", this.id());
    this.svggen = this.context.svggen;
    this.svgroot = this.context.svgroot;
    this._svg = _svg;
    this._ref._svg = _svg;
    this._svg._ref = this;
    this._svg._dom = this._ref;
    if (this.hasAttr("filter"))
      $(this._svg).attr("filter", this.attr("filter"));
    
    //Crear lista de 'keys' si los tiene
    var keys = {};
    $(_svg).find("[key]").each(function(){
      keys[$(this).attr("key")] = this;
    });
    this.keys = keys;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_createReferences", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setSetting. Description: Adicionar cambios en elementos registrados en 'keys'  
  setSetting: function(key, settings){ 
  try { 
    if (this.keys && this.keys[key])
      this.svggen.change(this.keys[key], settings);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setSetting", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onRemove. Description: Remueve el SVG del diagrama Psi  
  onRemove: function(self){ 
  try { 
    $(this._svg).remove();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onRemove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "DBase"; }
});

/*-----------------------------------------------------
*=Class[dcommon]: DCommon
* Description: Clase base para los elementos gráficos de un diagrama Psi
*-----------------------------------------------------*/
function DCommon () {
  //Properties   
  //Property: attachments. Description: Mapa de elementos gráficos asociados  
  this.attachments = null; 
};
//Inheritance
DCommon.inherits(DBase); 
//* Definitions Events and Methods
DCommon.methods({
  //Methods   
  //Method: _executeMake. Description: Ejecutar makes de inicio  
  _executeMake: function(key){ 
  try { 
    if (key!=null && PsiData.make[key]!=null)
      PsiData.make[key](this.svggen, this._svg, {}, this, this._data);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_executeMake", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _applySettings. Description: Obtener aplicar lista de ajustes a los elementos svg del elemento gráfico Psi  
  _applySettings: function(settings){ 
  try { 
    for(var key in settings) {
      var current = $("[key="+key+"]", this._svg).get(0),
          setting = settings[key];
      if (current) 
        try {
          var process = {};
          for (var name in setting) 
            try {
              if (name=="text") 
                $(current).text(this.processValue(setting[name]));
              else 
                process[name] =  this.processValue(setting[name]);
            }
            catch(e) { 
              new PsiWarning("DPSI.APPLY_SETTINGS_ERROR", [name, setting[name]], [this]); 
            }
          this.context.svggen.change(current, process);
        }
        catch(e) { new PsiWarning("DPSI.APPLY_SETTINGS_ERROR", [key, setting], [e, setting]); }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_applySettings", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _applyTexts. Description: Aplicar ajustes a elementos text SVG  
  _applyTexts: function(){ 
  try { 
    var texts = this.skeleton ? $.extend({}, this.skeleton.texts, this.texts) : this.texts;
    for(var key in texts)
      try {
        var current = $("text[key="+key+"]", this._svg).get(0),
            text    = texts[key],
            params  = this.skeleton && this.skeleton.texts[key] ? $.extend({}, this.skeleton.texts[key].params) : {};
            content = this.texts[key] && this.texts[key].hasAttr("text") 
                    ? this.processValue( $(this.texts[key]._ref).attr("text") )
                    : this.skeleton && this.skeleton.texts[key] && this.skeleton.texts[key].hasAttr("text")
                      ? this.processValue( $(this.skeleton.texts[key]._ref).attr("text") )
                      : "";
        params = $.extend(params, this.texts[key] ? this.texts[key].getParams() : {});
        text.apply(current, content, params);
      }
      catch(e) { new PsiWarning("DPSI.APPLY_TEXTS_ERROR", [key], [e, texts]); }  
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_applyTexts", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _mapSettings. Description: Obtener mapa de ajustes de elementos svg del elemento gráfico Psi  
  _mapSettings: function(){ 
  try { 
    var map = {};    
    for(var key in this.settings) 
      map[key] = this.settings[key].getMap();
    return map;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_mapSettings", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _processAttachments. Description: Procesar elementos adjuntos Psi  
  _processAttachments: function(){ 
  try { 
    //Procesar attached-to
    if (this.attr("attached-to")) {
      var graph = this.context.map[this.attr("attached-to")];
      if (graph && graph.attachments[this.id()]==null)
        graph.addAttached(this);
    }
    //Procesar attachements
    if (this.attr("attachments")){
      var list = this.attr("attachments").split(",");
      for(var i in list){
        var attached = this.context.map[list[i]];
        if (attached)
          this.addAttached(attached);
      }  
    }  
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_processAttachments", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _setAttachements. Description: Guardar la lista de adjuntos en el atributo 'attachments'  
  _setAttachements: function(){ 
  try { 
    var result = "";
    for(var id in this.attachments)
      result = (result!="" ? ",":"")+id;
    if (result=="")
      this.removeAttr("attachments");
    else
      this.attr("attachments", result);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_setAttachements", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: create. Description: Mátodo abstracto para la creación de un elemento gráfico Psi  
  create: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Mátodo abstracto para refrescar el elemento gráfico Psi  
  refresh: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: attrExt. Description: Atributo extendido usando el skeleton  
  attrExt: function(name){ 
    var value = this.attr("name");
    if (value) return value;
    //trar atributo del skeleton si existe
    if (this.skeleton)
      return this.processValue( $(this.skeleton._ref).attr("name") );
    return null;
   },  
  //Method: addAttached. Description: Adicionar elemento adjunto Psi  
  addAttached: function(graph){ 
  try { 
    this.attachments[graph.id()] = new Attached(graph);
    graph.attr("attached-to", this.id());
    this._setAttachements();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"addAttached", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: removeAttached. Description: Remover elemento adjunto Psi  
  removeAttached: function(graph){ 
  try { 
    if (this.attachments[graph.id()]) {
      delete this.attachments[graph.id()];
      graph.removeAttr("attached-to");
      this._setAttachements();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"removeAttached", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: moveAttachments. Description: Mover lista de adjuntos  
  moveAttachments: function(arg){ 
  try { 
    for(var id in this.attachments)
      this.attachments[id].move(arg);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"moveAttachments", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar elemento gráfico Psi  
  onInit: function(){ 
  try { 
    var skeleton = this.attr("skeleton"),
        graph = this.attr("graph");
    
    //Tratamiento de errores
    if (skeleton==null && graph==null)
      throw new PsiError("DPSI.ERROR_DEFINE_ELEMENT", [this.id()], [this]);
    if (skeleton!=null && PsiData.skeleton[skeleton]==null && graph==null)
      throw new PsiError("DPSI.ERROR_DEFINE_ELEMENT_SKELETON", [skeleton, this.id()], [this]);
    
    //Definición de skeleton si lo hay
    this.skeleton = skeleton ? PsiData.skeleton[skeleton] : null;
    
    //Ejecutar make-init si está definido
    if (this.skeleton) this._executeMake(this.skeleton.attr("make-init"));
    this._executeMake(this.attr("make-init"));
    
    //Parametrizar skeleton
    var parent = this.parent._body ? this.parent._body : this.parent._svg,
        graph = graph 
              ? graph 
              : (this.skeleton && this.skeleton.attr("graph")) 
                ? this.skeleton.attr("graph") 
                : null, 
        object = this.create(graph, parent);
    this._createReferences(object);
    
    //Crear viewBox
    this.viewBox = $(this._svg).parents("svg:first").get(0).viewBox.baseVal;
    
    //Crear lista de adjuntos
    this.attachments = {};
    
    //Llamar evento despuás de creación
    if (this.onAfterInit)
      this.onAfterInit();
    
    //Habilitar borrado adjunto de datos
    if (!this.hasAttr("data-remove") && this.skeleton && this.skeleton.hasAttr("data-remove"))
    	this._dataRemove = this.skeleton._dataRemove;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onChildrenCreated. Description: Aplicar ajustes de elemento gráfico Psi  
  onChildrenCreated: function(){ 
  try { 
    var map = this.skeleton ? this.skeleton.mergeSettings(this._mapSettings()) : this._mapSettings();

    //Aplicar ajustes al elemento gráfico
    this._applySettings(map);
    
    //Aplicar ajustes a textos
    this._applyTexts();
    
    //Eleminar keys del elemento gráfico Psi
    var dkeys = this.hasAttr("delete-keys") 
              ? this.attr("delete-keys").split(",") 
              : this.skeleton && this.skeleton.hasAttr("delete-keys") 
                ? this.skeleton.attr("delete-keys").split(",")
                : null;
    if (dkeys)
      for(var i in dkeys)
        $(this._svg).find("[key="+dkeys[i]+"]").remove();
    
    //Ejecutar Makes definidos
    var makes = $.extend({}, this.makes, this.skeleton ? this.skeleton.makes : {});
    for(var key in makes){
      if (key=="__not_reference__") continue;
      var smake = this.skeleton && this.skeleton.makes[key] ? this.skeleton.makes[key] : null,
          options = $.extend({}, smake ? smake.getOptions(this) : {}, this.makes[key] ? this.makes[key].getOptions() : {});
      PsiData.make[key](this.svggen, this._svg, options, this, this._data);
    }
    
    //Enlazar herramientas
    if (this.skeleton && this.skeleton.binds && this.binds)
      this.skeleton.binds.build(this._svg, null, this.context, this.binds.getMap());
    else if (this.skeleton && this.skeleton.binds)
      this.skeleton.binds.build(this._svg, null, this.context);
    else if (this.binds)
      this.binds.build(this._svg, null, this.context);
    
    //Enlazar elementos adjuntos
    this._processAttachments();
    
    //Encadenar tipificación
    if (this.skeleton && this.skeleton.hasAttr("psi-type")) 
      $(this._svg).attr("psi-type", this.processValue(this.skeleton.attr("psi-type")));
    if (this.hasAttr("psi-type")) 
      $(this._svg).attr("psi-type", this.processValue(this.attr("psi-type")));
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onRemove. Description: Si es adjunto de, removerse del elemento gráfico Psi  
  onRemove: function(){ 
  try { 
    //Evento para programa en los descendientes
    if (this.onBeforeRemove)
      this.onBeforeRemove();
    //Eliminar adjuntos
    if (this.hasAttr("attached-to")) {
      var attachedTo = this.context.map[this.attr("attached-to")];
      if (attachedTo)
        attachedTo.removeAttached(this);
    }
    $(this._svg).remove();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onRemove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onHide. Description: Evento cuando se oculta el elemento gráfico Psi  
  onHide: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onHide", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onDragStart. Description: Evento cuando inicia el movimiento de arrastre del elemento gráfico Psi  
  onDragStart: function(event, dd, self){ 
    this.moveAttachments("start");
   },  
  //Event: onDrag. Description: Evento cuando está realizando el movimiento de arrastre del elemento gráfico Psi  
  onDrag: function(event, dd, self){ 
    this.moveAttachments(dd);
   },  
  //Event: onDragEnd. Description: Evento cuando stermina el movimiento de arrastre del elemento gráfico Psi  
  onDragEnd: function(){ 
    this.moveAttachments("end");
   },
  toString: function() { return "DCommon"; }
});

/*-----------------------------------------------------
*=Class[attached]: Attached
* Description: Seleccionar elemento gráfico Psi (figuras, nodos, listas, paneles, etc.)
*-----------------------------------------------------*/
function Attached (ref) {
  //Properties   
  //Property: _ref. Description: Referencia a elemento gráfico Psi  
  this._ref = ref;  
  //Property: _svg. Description: Diagrama SVG  
  this._svg = ref._svg; 
}; 
//* Definitions Events and Methods
Attached.methods({
  //Methods   
  //Method: move. Description: Mover elemento adjunto Psi  
  move: function(arg){ 
  try { 
    if (typeof arg=="string") 
      switch(arg) {
        case "start": 
          this._start = this._ref.position();
          this._current = GLPsi.Geometry.createPoint(this._svg.ownerSVGElement, 0, 0);
          break;
        case "end": 
          this._start = null;
          break;
      }
    else if (typeof arg=="object" && this._start) {
      //Mover elemento gráfico Psi
      this._current.set(arg.deltaX, arg.deltaY).plus(this._start);
      this._ref.translate(this._current);
      if (this._svg._connection)
        this._svg._connection.checks.refresh();
    }      
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"move", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Attached"; }
});

/*-----------------------------------------------------
*=Class[icon]: Icon
* Description: Icono para un elemento gráfico o línea Psi de un diagrama Psi
*-----------------------------------------------------*/
function Icon () {
  //Properties   
  //Property: settings. Description: Mapa de opciones  
  this.settings = {};  
  //Property: binds. Description: Encadenar eventos al elemento gráfico  
  this.binds = null;  
  //Property: makes. Description: Lista de modificadores de elementos gráfico  
  this.makes = {}; 
};
//Inheritance
Icon.inherits(DCommon); 
//* Definitions Events and Methods
Icon.methods({
  //Methods   
  //Method: _getBasedTransform. Description: Obtener los parámetros de translación, rotación y escala para el ícono  
  _getBasedTransform: function(){ 
    return {x: this.attr("x"), y: this.attr("y"), sx: this.attr("sx"), sy: this.attr("sy"), angle: this.attr("angle")}; 
   },  
  //Method: create. Description: Crear un ícono para un elemento Psi (Nodo, Figura, Panel, Lista, Línea, Conector, etc.) en el diagrama Psi  
  create: function(reficon, parent){ 
  try { 
    if (reficon==null) throw new DError(this, "NODE_GRAPH_ERROR");
    return GLPsi.Icon.create(reficon, this.context.svggen, this.id(), parent, this._getBasedTransform(), this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Icon"; }
});

/*-----------------------------------------------------
*=Class[skeleton]: Skeleton
* Description: Esqueleto para un nodo, figura o panel Psi
*-----------------------------------------------------*/
function Skeleton () {
  //Properties   
  //Property: settings. Description: Mapa de opciones  
  this.settings = {};  
  //Property: texts. Description: Mapa de textos svg  
  this.texts = {};  
  //Property: binds. Description: Encadenar eventos al elemento gráfico  
  this.binds = null;  
  //Property: sections. Description: Mapa de secciones  
  this.sections = {};  
  //Property: makes. Description: Lista de modificadores de elementos gráfico  
  this.makes = {}; 
};
//Inheritance
Skeleton.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Skeleton.methods({
  //Methods   
  //Method: mergeSettings. Description: Combinar mapas de ajustes  
  mergeSettings: function(currents){ 
  try { 
    return $.extend(true, {}, this.map, currents);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"mergeSettings", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onChildrenCreated. Description: Crear mapa de ajustes  
  onChildrenCreated: function(){ 
  try { 
    this.map = {};
    for(var key in this.settings) 
      this.map[key] = this.settings[key].getMap();
    //Registro en PsiData
    var name = this.root.alias+"."+this.id();
    PsiData.skeleton.register(name, this); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Skeleton"; }
});

/*-----------------------------------------------------
*=Class[make]: Make
* Description: Modificar y/o crear elementos svg de de un elemento Psi
*-----------------------------------------------------*/
function Make () {
  //Properties  
};
//Inheritance
Make.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Make.methods({
  //Methods   
  //Method: getOptions. Description: Obtener mapa de opciones  
  getOptions: function(_parent){ 
  try { 
    var options = {},
        parent = _parent ? _parent : this;
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i];
      if (attr.name!="id" && attr.name!="ref") 
        options[attr.name] = parent.processValue(attr.value);
    }
    return options;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getOptions", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Crear/Ejecutar herramienta de modificación de un elemento Psi  
  onInit: function(){ 
  try { 
    //Almacenar en PsiData se ha definido un identificador
    var id = this.attr("id");
    if (id) {
      this.key = id;
      return PsiData.make.register(this.parent.alias+"."+id, this.text(), this.getOptions());
    }
    
    //No ejecutar si es un Skeleton
    if (this.parent.tag=="Skeleton") { 
      this.key = this.attr("ref");
      return;
    }
    
    //Ejecutar si es referencia a uno almacenado en PsiData  
    var ref = this.attr("ref");
    if (ref) {
      this.key = ref;
      if (PsiData.make.exist(ref) && this.parent.tag!="Skeleton")
        return PsiData.make[ref](this.parent.svggen, this.parent._svg, this.getOptions(), this.parent, this.parent._data);
      new PsiWarning("DPSI.MAKE_NOT_EXIT", [ref], [this]);
      return;
    }
        
    //Ejecutar Make para elemento actual
    var execute = new Function("svggen", "parent", "options", "ref", "data", this.text());
    if (this.parent.tag!="Skeleton") {
      this.key = "__not_reference__";
      if (this.parent.tag=="Diagram")
        execute(this.svggen, this._svg, this.getOptions(this.parent), this, this._data);
      else
        execute(this.parent.svggen, this.parent._svg, this.getOptions(this.parent), this.parent, this.parent._data);
    }
    else {
      this.key = this.uid;
      this.execute = new Function("svggen", "parent", "options", "ref", "data", this.text());
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Make"; }
});

/*-----------------------------------------------------
*=Class[layer]: Layer
* Description: Capa de un diagrama Psi
*-----------------------------------------------------*/
function Layer () {
  //Properties   
  //Property: binds. Description: Encadenar eventos  
  this.binds = null;  
  //Property: makes. Description: Mapa de modificadires de graficos  
  this.makes = {};  
  //Property: layers. Description: Mapa de capas  
  this.layers = {};  
  //Property: icons. Description: Lista de íconos  
  this.icons = {};  
  //Property: nodes. Description: Mapa de nodos  
  this.nodes = {};  
  //Property: figures. Description: Mapa de figuras  
  this.figures = {};  
  //Property: panels. Description: Mapa de paneles  
  this.panels = {};  
  //Property: lists. Description: Mapa de listas  
  this.lists = {};  
  //Property: lines. Description: Mapa de líneas  
  this.lines = {};  
  //Property: connectors. Description: Mapa de conectores  
  this.connectors = {}; 
};
//Inheritance
Layer.inherits(DBase); 
//* Definitions Events and Methods
Layer.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Inicializar capa Psi  
  onInit: function(){ 
  try { 
    var parent = this.parent.tag=="Panel" ? this.parent._body : this.parent._svg,
        layer = this.context.svggen.group(parent, this.id());
    layer._lib = null;
    this._createReferences(layer);
    this.viewBox = this.parent.viewBox;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Layer"; }
});

/*-----------------------------------------------------
*=Component[dgraph]: Graph
* Description: Lenguaje para la creación de figuras, nodos, arcos, contenedores, text, etc.
*-----------------------------------------------------*/
var Graph = (function () {  

  //Component Properties 


/*-----------------------------------------------------
*=Class[connectors]: Connectors
* Description: Clase base para Nodo, Figura, Lista, Panel de un diagrama Psi
*-----------------------------------------------------*/
function Connectors (graph) {
  //Properties   
  //Property: graph. Description: Elemento gráfico Psi  
  this.graph = graph;  
  //Property: map. Description: Lista de conectores  
  this.map = {};  
  //Property: length. Description: TamaÃ±o de la lista de conectores  
  this.length = 0; 
}; 
//* Definitions Events and Methods
Connectors.methods({
  //Methods   
  //Method: add. Description: Adicionar un nuevo conector Psi  
  add: function(connector){ 
  try { 
    if ( this.map[connector.id()]==null ) { 
      this.length++;
      this.graph._connectors.total++;
    }
    this.map[connector.id()] = connector;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"add", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: remove. Description: Remover un conector Psi  
  remove: function(connectorId){ 
  try { 
    if ( this.map[connectorId] ) {
      this.length--;
      this.graph._connectors.total--;
      delete this.map[connectorId];
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"remove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: toArray. Description: Convertir mapa de conectores a arreglo  
  toArray: function(type){ 
  try { 
    var result = new Array();
    for(var i in this.map) 
      result.push( type=="graphs" ? this.map[i].another(this.graph.id()) : this.map[i] );
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"toArray", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: toObject. Description: Obtener el mapa de conectores  
  toObject: function(type){ 
  try { 
    var result = {};
    for(var i in this.map) 
      result[i] = type=="graphs" ? this.map[i].another(this.graph.id()) : this.map[i];
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"toObject", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: orderDown. Description: Orden descendente por el número de conectores  
  orderDown: function(type){ 
  try { 
    var fsort = type=="graphs"
              ? function(a, b) { return b._connectors.total - a._connectors.total; }
              : function(a, b) { return b.start._connectors.total+b.end._connectors.total - (a.start._connectors.total+a.end._connectors.total); } 
    return this.toArray().sort( fsort );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"orderDown", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: orderUp. Description: Orden ascendente por el número de conectores  
  orderUp: function(type){ 
  try { 
    var fsort = type=="graphs"
              ? function(a, b) { return a._connectors.total - b._connectors.total; }
              : function(a, b) { return a.start._connectors.total+a.end._connectors.total - (b.start._connectors.total+b.end._connectors.total); } 
    return this.toArray().sort( fsort );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"orderUp", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Connectors"; }
});

/*-----------------------------------------------------
*=Class[graph_base]: GraphBase
* Description: Clase base para Nodo, Figura, Lista, Panel de un diagrama Psi
*-----------------------------------------------------*/
function GraphBase () {
  //Properties   
  //Property: _elementType. Description: ElementType.Graph  
  this._elementType = ElementType.Graph; 
};
//Inheritance
GraphBase.inherits(DCommon); 
//* Definitions Events and Methods
GraphBase.methods({
  //Methods   
  //Method: _getBasedTransform. Description: Obtener los parámetros de translación, rotación y escala  
  _getBasedTransform: function(){ 
  try { 
    return {x: this.attr("x"), y: this.attr("y"), sx: this.attr("sx"), sy: this.attr("sy"), angle: this.attr("angle")}; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getBasedTransform", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Refrescar elemento gráfico Psi  
  refresh: function(byConnection){ 
  try { 
    var map = this.skeleton ? this.skeleton.mergeSettings(this._mapSettings()) : this._mapSettings();
    //Aplicar ajustes al elemento gráfico
    this._applySettings(map);
    //Aplicar ajustes a textos
    this._applyTexts();
    if (byConnection!=null && byConnection==true && this.connection) {
      this.connection.edges.refreshAll();
      this.connection.checks.refresh();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: create. Description: Mátodo abstracto para la creación de un elemento gráfico Psi  
  create: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: translate. Description: Trasladar elemento gráfico a una nueva posición (x,y)  
  translate: function(_x, _y){ 
  try { 
    var x = Math.round( typeof _x=="number" ? _x : _x.x ),
        y = Math.round( typeof _x=="number" ? _y : _x.y ),
        b = this._svg.getBBox(), v = this.parent.viewBox;
    if ( x+b.x<v.x ) x = v.x-b.x;
    if ( y+b.y<v.y ) y = v.y-b.y;
    if ( v.x+v.width <x+b.x+b.width )  x = v.x+v.width -b.x-b.width;
    if ( v.y+v.height<y+b.y+b.height ) y = v.y+v.height-b.y-b.height;
    //this.__translate = "translate("+this.attr("x", x)+" "+this.attr("y", y)+")";
    //this._svg.setAttribute("transform", this.__translate+this.__scale+this.__rotate);
    //this._translate.setTranslate(this.attr("x", x), this.attr("y", y));
    //this._translate.setTranslate(this.attr("x", x), this.attr("y", y));
    var value =this._svg.transform.baseVal.getItem(0); 
    value.setTranslate(this.attr("x", x), this.attr("y", y));
    //this._svg.transform.baseVal[0].setTranslate(this.attr("x", x), this.attr("y", y)); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"translate", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: resize. Description: Redimensionar elemento gráfico sx (escale en x), sy (escala en y)  
  resize: function(_sx, _sy){ 
  try { 
    var sx = Math.round(100*this._lib.transform.limitScale(_sx))/100,
        sy = Math.round(100*this._lib.transform.limitScale(_sy))/100;
    //this.__scale = " scale("+this.attr("sx", sx)+" "+this.attr("sy", sy)+")";
    //this._svg.setAttribute("transform", this.__translate+this.__scale+this.__rotate);
    this._scale.angle = this._rotate.angle;
    this._scale.setScale(this.attr("sx", sx), this.attr("sy", sy)); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"resize", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: rotate. Description: Rotar elemento gráfico un ángulo en grados  
  rotate: function(angle){ 
  try { 
    var box = this._svg.getBBox();
    //this.__rotate = " rotate("+Math.round(angle)+")";
    //this._svg.setAttribute("transform", this.__translate+this.__scale+this.__rotate);
    this._rotate.setRotate(Math.round(angle), box.width/2, box.height/2); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"rotate", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: position. Description: Obtener posición del elemento Psi respecto al origen del gráfico Psi  
  position: function(){ 
  try { 
    var ctm = this._svg.getCTM();
    return GLPsi.Geometry.createPoint(this.svgroot, ctm.e, ctm.f); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"position", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: positionClient. Description: Obtener posición del elemento Psi respecto al cliente de la página  
  positionClient: function(){ 
  try { 
    var ctm = this._svg.getScreenCTM();
    return GLPsi.Geometry.createPoint(this.svgroot, ctm.e, ctm.f); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"positionClient", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getBBox. Description: Ontener dimensiones del elemento gráfico Psi  
  getBBox: function(){ 
  try { 
    return this._svg.getBBox();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getBBox", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: width. Description: Ancho de elemento gráfico Psi  
  width: function(){ 
  try { 
    return this._svg.getBBox().width;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"width", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: height. Description: Alto de elemento gráfico Psi  
  height: function(){ 
  try { 
    return this._svg.getBBox().height;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"height", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: connectors. Description: Conectores del elemento gráfico. Realiza busquedas y demás  
  connectors: function(type, arg2){ 
  try { 
    switch(type){
      case "from+": this._connectors.from.add(arg2); break;
      case "from-": this._connectors.from.remove(arg2); break;
      case "to+": this._connectors.to.add(arg2); break;
      case "to-": this._connectors.to.remove(arg2); break;
      case "itself+": this._connectors.itself.add(arg2); break;
      case "itself-": this._connectors.itself.remove(arg2); break;
      
      case "orderUp": return this._connectors.orderUp(arg2);
      case "orderDown": return this._connectors.orderDown(arg2);
      case "array": return this._connectors.toArray(arg2);
      case "object": return this._connectors.toObject(arg2);
       
      case "fromUp": return this._connectors.from.orderUp(arg2);
      case "fromDown": return this._connectors.from.orderDown(arg2);
      case "fromArray": return this._connectors.from.toArray(arg2);
      case "fromObject": return this._connectors.from.toObject(arg2);
      
      case "toUp": return this._connectors.to.orderUp(arg2);
      case "toDown": return this._connectors.to.orderDown(arg2);
      case "toArray": return this._connectors.to.toArray(arg2);
      case "toObject": return this._connectors.to.toObject(arg2);
      
      case "itselfUp": return this._connectors.itself.orderUp(arg2);
      case "itselfDown": return this._connectors.itself.orderDown(arg2);
      case "itselfArray": return this._connectors.itself.toArray(arg2);
      case "itselfObject": return this._connectors.itself.toObject(arg2);
    }
    return type && this._connectors[type] ? this._connectors[type] : this._connectors;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"connectors", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: midpoint. Description: Definición de punto medio.Por defecto p=X+W/2,Y+H/2  
  midpoint: function(itself){ 
  try { 
    if (this._pointCenter==null) {
      this._midpoint = GLPsi.Geometry.createPoint(this.svgroot, 0, 0);
      this._midpoint.expression(this._svg, null, this._lib.attr("midpoint") );
    }
    return itself==true ? this._midpoint.refresh() : this._midpoint.refresh().plus( this.position() ); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"midpoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onAfterInit. Description: Crear administración de información de conectores psi  
  onAfterInit: function(){ 
  try { 
    //crear objeto de contabilidad de conectores
    this._connectors = {
      from: new Connectors(this),
      to: new Connectors(this),
      itself: new Connectors(this),
      total: 0,
      toArray: function(type){ 
        return this.from.toArray(type).concat(this.to.toArray(type), this.itself.toArray(type)); 
      },
      toObject: function(type){ 
        return  $.extend({}, this.from.toObject(type), this.to.toObject(type), this.itself.toObject(type)); 
      },
      orderDown: function(type){ 
        return this.toArray(type).sort( function(a, b) { 
          return b._connectors.total - a._connectors.total; 
        }); 
      },
      orderUp: function(type){ 
        return this.toArray(type).sort( function(a, b) { 
          return a._connectors.total - b._connectors.total; 
        }); 
      }
    };
    //Inicio
    this.__scale = " scale(1 1)";
    this.__rotate = " rotate(0)";
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onAfterInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onBeforeRemove. Description: Remover border de conexión Psi  
  onBeforeRemove: function(){ 
  try { 
    //Eliminar bordes de conexión
    if (this.connection)
      this.connection.hide();
    //Eliminar conectores
    var conns = this.connectors("array");
    for(var i in conns)
      conns[i].remove();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onBeforeRemove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "GraphBase"; }
});

/*-----------------------------------------------------
*=Class[select_graph]: SelectGraph
* Description: Seleccionar elemento gráfico Psi (figuras, nodos, listas, paneles, etc.)
*-----------------------------------------------------*/
function SelectGraph (manager, ref) {
  //Properties  
  //Initialize class
  this._init(manager, ref);
};
//Inheritance
SelectGraph.inherits(SelectBase); 
//* Definitions Events and Methods
SelectGraph.methods({
  //Methods   
  //Method: _settings. Description: Configuración por defecto para el marco de referencia Psi  
  _settings: function(){ 
  try { 
    return {"cursor": "pointer", "stroke": "gray", "stroke-width": "1px", "stroke-dasharray": "3,1", "fill": "#fcfcfc", "opacity": "0.8"};
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_settings", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _createFrame. Description: MátodoCrea el marco de selección para el elemento Psi y habilita el arrastrar/soltar  
  _createFrame: function(){ 
  try { 
    var box = this._svg.getBBox(),
        frame = this._manager.svggen.rect(this._svg, box.x, box.y, box.width, box.height),
        beforeKey = this._ref._lib.attr("before-key-select");
    $(frame).attr("select", "yes");
    if (beforeKey){
      var element = $("[key="+beforeKey+"]", this._svg);
      if (element.size()>0)
        element.before(frame);
    }
    this._ref._lib._bindDrag(this._svg, "[select=yes]", this._ref);
    
    //Crear evento dblclick para eliminar selección
    $(frame).dblclick(function(event){
      this._ref.context.unselect(this._ref.id());
      event.stopPropagation();
    });
    return frame;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_createFrame", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: move. Description: Mátodo abstracto para mover elemento Psi seleccionado  
  move: function(arg){ 
  try { 
    if (typeof arg=="string") 
      switch(arg) {
        case "start": 
          this._start = this._ref.position();
          this._current = GLPsi.Geometry.createPoint(this._manager.svgroot, 0, 0);
          break;
        case "end": 
          this._start = null;
          break;
      }
    else if (typeof arg=="object" && this._start) {
      //Mover elemento gráfico Psi
      this._current.set(arg.deltaX, arg.deltaY).plus(this._start);
      this._ref.translate(this._current);
      if (this._svg._connection)
        this._svg._connection.checks.refresh();
    }
    //mover adjuntos
    this._ref.moveAttachments(arg);      
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"move", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "SelectGraph"; }
});

/*-----------------------------------------------------
*=Class[node]: Node
* Description: Nodo de un diagrama Psi
*-----------------------------------------------------*/
function Node () {
  //Properties   
  //Property: settings. Description: Mapa de opciones  
  this.settings = {};  
  //Property: texts. Description: Mapa de textos svg  
  this.texts = {};  
  //Property: binds. Description: Encadenar eventos al nodo  
  this.binds = null;  
  //Property: makes. Description: Lista de modificadores al nodo  
  this.makes = {}; 
};
//Inheritance
Node.inherits(GraphBase); 
//* Definitions Events and Methods
Node.methods({
  //Methods   
  //Method: create. Description: Crear un nodo de la librería gráfica en el diagrama Psi  
  create: function(refshape, parent){ 
  try { 
    if (refshape==null) throw new DError(this, "NODE_GRAPH_ERROR");
    return GLPsi.Graph.newShape(refshape, this.context.svggen, this.id(), parent, this._getBasedTransform(), this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Node"; }
});

/*-----------------------------------------------------
*=Class[figure]: Figure
* Description: Nodo de un diagrama Psi
*-----------------------------------------------------*/
function Figure () {
  //Properties   
  //Property: settings. Description: Mapa de opciones  
  this.settings = {};  
  //Property: texts. Description: Mapa de textos svg  
  this.texts = {};  
  //Property: binds. Description: Encadenar eventos a la figura  
  this.binds = null;  
  //Property: makes. Description: Lista de modificadores a la figura  
  this.makes = {}; 
};
//Inheritance
Figure.inherits(GraphBase); 
//* Definitions Events and Methods
Figure.methods({
  //Methods   
  //Method: create. Description: Crear una figura de la librería gráfica en el diagrama Psi  
  create: function(reffigure, parent){ 
  try { 
    if (reffigure==null) throw new DError(this, "FIGURE_GRAPH_ERROR");
    return GLPsi.Graph.newShape(reffigure, this.context.svggen, this.id(), parent, this._getBasedTransform(), this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Figure"; }
});

/*-----------------------------------------------------
*=Class[lateral]: Lateral
* Description: Definición de Lateral para un Panel Psi
*-----------------------------------------------------*/
function Lateral () {
  //Properties   
  //Property: makes. Description: Mapa de modificadires de graficos  
  this.makes = {};  
  //Property: icons. Description: Lista de íconos  
  this.icons = {};  
  //Property: nodes. Description: Mapa de nodos  
  this.nodes = {};  
  //Property: figures. Description: Mapa de figuras  
  this.figures = {};  
  //Property: lists. Description: Mapa de listas  
  this.lists = {};  
  //Property: lines. Description: Mapa de líneas  
  this.lines = {};  
  //Property: connectors. Description: Mapa de conectores  
  this.connectors = {}; 
};
//Inheritance
Lateral.inherits(DBase); 
//* Definitions Events and Methods
Lateral.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Inicializar lateral de Panel Psi  
  onInit: function(){ 
  try { 
    var lateral = this._ref.nodeName=="Left" 
                ? this.parent._svg._left
                : this._ref.nodeName=="Right" ? this.parent._svg._right : null;
    if (lateral==null) throw new DError(this, "PANEL_GRAPH_LATERAL_ERROR", this._ref.nodeName, this.parent.id());
    lateral._lib = this.parent._lib;
    this._createReferences(lateral);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Lateral"; }
});

/*-----------------------------------------------------
*=Class[panel]: Panel
* Description: Panel de un diagrama Psi
*-----------------------------------------------------*/
function Panel () {
  //Properties   
  //Property: settings. Description: Mapa de opciones  
  this.settings = {};  
  //Property: texts. Description: Mapa de textos svg  
  this.texts = {};  
  //Property: binds. Description: Encadenar eventos  
  this.binds = null;  
  //Property: makes. Description: Mapa de modificadires de graficos  
  this.makes = {};  
  //Property: layers. Description: Mapa de capas  
  this.layers = {};  
  //Property: left. Description: COnteiner lateral izquierdo  
  this.left = null;  
  //Property: right. Description: Conteiner lateral derecho  
  this.right = null;  
  //Property: icons. Description: Lista de íconos  
  this.icons = {};  
  //Property: nodes. Description: Mapa de nodos  
  this.nodes = {};  
  //Property: figures. Description: Mapa de figuras  
  this.figures = {};  
  //Property: lists. Description: Mapa de listas  
  this.lists = {};  
  //Property: panels. Description: Mapa de paneles  
  this.panels = {};  
  //Property: lines. Description: Mapa de líneas  
  this.lines = {};  
  //Property: connectors. Description: Mapa de conectores  
  this.connectors = {}; 
};
//Inheritance
Panel.inherits(GraphBase); 
//* Definitions Events and Methods
Panel.methods({
  //Methods   
  //Method: getSettingsTransform. Description: Obtener parametros de transformación  
  getSettingsTransform: function(){ 
  try { 
    var lwidth = $(">Left", this._ref).size()>0  ? parseFloat($("Left",this._ref).attr("width")) : 0,
        rwidth = $(">Right", this._ref).size()>0 ? parseFloat($("Right", this._ref).attr("width")) : 0;
    return $.extend({
        width: this.attr("width"), 
        height: this.attr("height"),
        "width-left": lwidth,
        "width-right": rwidth
      }, 
      this._getBasedTransform()
    );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getSettingsTransform", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: create. Description: Crear un panel de la librería gráfica en el diagrama Psi  
  create: function(refcontainer, parent){ 
  try { 
    if (refcontainer==null) throw new DError(this, "PANEL_GRAPH_ERROR");
    var panel = GLPsi.Graph.newContainer(refcontainer, this.context.svggen, this.id(), parent, this.getSettingsTransform(), this);
    this._body = $("svg[id$=-body]", panel).get(0);
    this._body._ref = this;
    this._body._dom = this._ref;
    return panel;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refreshChildrenConnection. Description: Resfrescar conexiones de los elementos hijos Psi  
  refreshChildrenConnection: function(){ 
  try { 
    for (var id in this.children) {
      var child = this.children[id];
      if (child._svg && child._svg._connection)
        child._svg._connection.checks.refresh();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refreshChildrenConnection", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: resize. Description: Redimensionar el contenido  
  resize: function(width, height){ 
  try { 
    this.attr({ width: width, height: height });
    this._lib.resize(this.context.svggen, this._svg, this.getSettingsTransform());
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"resize", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onResize. Description: Evento cuando re redimensiona el elemento gráfico Psi  
  onResize: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onResize", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onDrag. Description: Evento drag para refrescar las conexiones de los elementos hijos Psi  
  onDrag: function(){ 
  try { 
    this.refreshChildrenConnection();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onDrag", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Panel"; }
});

/*-----------------------------------------------------
*=Class[section]: Section
* Description: Ajustes a un elmento svg de un elemento Psi
*-----------------------------------------------------*/
function Section () {
  //Properties  
};
//Inheritance
Section.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Section.methods({
  //Methods   
  //Method: header. Description: Obtener cabecera de sección para el elemento lista Psi  
  header: function(parent){ 
  try { 
    return parent
         ? parent.processValue($(this._ref).attr("header"))
         : this.attr("header");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"header", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: items. Description: Obtener ítems de sección para el elemento lista Psi  
  items: function(parent){ 
  try { 
    return parent
         ? parent.processValue($(this._ref).attr("items"))
         : this.attr("items");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"items", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar propiedad 'key'  
  onInit: function(){ 
  try { 
    this.key = this.attr("key");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Section"; }
});

/*-----------------------------------------------------
*=Class[list]: List
* Description: Lista de un diagrama Psi
*-----------------------------------------------------*/
function List () {
  //Properties   
  //Property: settings. Description: Mapa de opciones  
  this.settings = {};  
  //Property: texts. Description: Mapa de textos svg  
  this.texts = {};  
  //Property: binds. Description: Encadenar eventos a la lista  
  this.binds = null;  
  //Property: sections. Description: Mapa de secciones  
  this.sections = {};  
  //Property: makes. Description: Lista de modificadores de la lista  
  this.makes = {}; 
};
//Inheritance
List.inherits(GraphBase); 
//* Definitions Events and Methods
List.methods({
  //Methods   
  //Method: getSections. Description: Obtener lista de secciones para la lista Psi  
  getSections: function(reflist, parent){ 
  try { 
    if ($.isEmptyObject(this.sections) && this.skeleton==null ) return null;
    var sections = $.extend({}, this.sections, this.skeleton ? this.skeleton.sections : {}),
        result = {};
    for(var key in sections)
      result[key] = {
        "header": this.sections[key] ? sections[key].header() : this.skeleton.sections[key].header(this), 
        "items": this.sections[key] ? sections[key].items() : this.skeleton.sections[key].items(this)
      }
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getSections", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: create. Description: Crear un panel de la librería gráfica en el diagrama Psi  
  create: function(reflist, parent){ 
  try { 
    if (reflist==null) throw new DError(this, "LIST_GRAPH_ERROR");
    var basedTransform = $.extend({
            width: this.attr("width"), 
            items: this.hasAttr("items") 
                 ? this.attr("items")
                 : this.skeleton ? this.processValue( "$="+this.skeleton.attr("items") ) : null,
            sections: this.getSections()
          }, 
          this._getBasedTransform()
        ),
        list = GLPsi.Graph.newList(reflist, this.context.svggen, this.id(), parent, basedTransform, this);
    return list;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onResize. Description: Evento cuando se redimensiona la lista Psi  
  onResize: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onResize", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onItem. Description: Evento cuando se crea un ítem de la lista Psi  
  onItem: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onItem", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "List"; }
});


  //Component Methods 


/*-----------------------------------------------------
* Component Definition: Graph  
*-----------------------------------------------------*/
return {
  //Content 
  Connectors: Connectors, //* Type: Class
  GraphBase: GraphBase, //* Type: Class
  SelectGraph: SelectGraph, //* Type: Class
  Node: Node, //* Type: Class
  Figure: Figure, //* Type: Class
  Lateral: Lateral, //* Type: Class
  Panel: Panel, //* Type: Class
  Section: Section, //* Type: Class
  List: List, //* Type: Class
  //Properties 
  //Methods 
  toString: function() { return "Graph"; }
};
})(); 

/*-----------------------------------------------------
*=Component[dlines]: Lines
* Description: Lenguaje para la creación de figuras, nodos, arcos, contenedores, text, etc.
*-----------------------------------------------------*/
var Lines = (function () {  

  //Component Properties 


/*-----------------------------------------------------
*=Class[line_base]: LineBase
* Description: Línea curva, reacta, polilínea, arco, etc. de un diagrama Psi
*-----------------------------------------------------*/
function LineBase () {
  //Properties   
  //Property: _elementType. Description: ElementType.Line  
  this._elementType = ElementType.Line; 
};
//Inheritance
LineBase.inherits(DCommon); 
//* Definitions Events and Methods
LineBase.methods({
  //Methods   
  //Method: _getOption. Description: Obtener una opción de la línea Psi, o en su defecto de su skeleton Psi  
  _getOption: function(name){ 
  try { 
    return $(this._ref).attr(name) 
            ? $(this._ref).attr(name)
            : this.skeleton 
              ? $(this.skeleton._ref).attr(name) 
              : null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getOption", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _getOptionsLabels. Description: Obtener lista de opciones para rótulos de una línea Psi  
  _getOptionsLabels: function(){ 
  try { 
    var result = {};
    for(var key in GLPsi.PositionLine){
      var name = GLPsi.PositionLine[key];
      result[name] = {};
      result[name].name = name+"-label";
      result[name].value = this._getOption(name+"-label");
      result[name].namePos = name+"-label-pos";
      result[name].valuePos =  this._getOption(name+"-label-pos");
      result[name].nameClass = name+"-label-class";
      result[name].valueClass = this._getOption(name+"-label-class");
      result[name].nlines = name+"-label-nlines";
      result[name].full = this._getOption(name+"-label-full");
      try { 
        var w = this._getOption(name+"-label-width");
        result[name].width = w!=null ? parseInt(w) : 500;
      }
      catch(e) { result[name].width = 500; }
    }
    return { labels: result };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getOptionsLabels", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: create. Description: Metodo abstracto para crea línea Psi o conector Psi  
  create: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Refrescar pintura de línea Psi  
  refresh: function(){ 
  try { 
     //Aplicar ajustes al elemento gráfico
   var map = this.skeleton ? this.skeleton.mergeSettings(this._mapSettings()) : this._mapSettings();
    this._applySettings(map);
    //Refrescar rótulos
    var options = this._getOptionsLabels();
    for(var i in this.labels) {
      if (options.labels[i]!=null)
        this.labels[i].refresh(options.labels[i]);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: midpoint. Description: Definición de punto medio. Número entre [0,1]. Por defecto p=0.5  
  midpoint: function(){ 
  try { 
    return this._path.getPointAtLength( this._lib.attr("midpoint")*this._path.getTotalLength() );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"midpoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "LineBase"; }
});

/*-----------------------------------------------------
*=Class[select_line]: SelectLine
* Description: Seleccionar elemento gráfico Psi (figuras, nodos, listas, paneles, etc.)
*-----------------------------------------------------*/
function SelectLine (manager, ref) {
  //Properties  
  //Initialize class
  this._init(manager, ref);
};
//Inheritance
SelectLine.inherits(SelectBase); 
//* Definitions Events and Methods
SelectLine.methods({
  //Methods   
  //Method: _settings. Description: Configuración por defecto para el marco de referencia Psi  
  _settings: function(){ 
  try { 
    return {"opacity": "0.5"};
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_settings", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _createFrame. Description: MátodoCrea el marco de selección para el elemento Psi y habilita el arrastrar/soltar  
  _createFrame: function(){ 
  try { 
    var line = $("[key=line]", this._svg)
    line.attr("select", "yes");
    return line.get(0);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_createFrame", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: move. Description: Mátodo abstracto para mover elemento Psi seleccionado  
  move: function(arg){ 
  try { 
    if (typeof arg=="string") 
      switch(arg) {
        case "start": 
          //Clonar lista de puntos de inicio y crear arreglo de movimiento current
          var check = this._ref.checkpoints.checkStart;
          this._start = new Array();
          this._current = GLPsi.Geometry.createPoint(this._svg.ownerSVGElement, 0, 0);
          while(check) {
            this._start.push( GLPsi.Geometry.createPoint(this._svg.ownerSVGElement, check.getXY()) );
            check = check.next;
          }
          break;
        case "end": 
          this._ref._lib.setPath(this._ref._path, this._svg, this._ref);
          this._current = this._start = null;
          break;
      }
    else if (typeof arg=="object" && this._start) {
      var check = this._ref.checkpoints.checkStart, i=0;
      while(check) {
        if (check.seg._connection==null) {
          this._current.set(arg.deltaX, arg.deltaY).plus(this._start[i]);
          check.move(this._current.x, this._current.y);
        }
        check = check.next;
        i++;
      }
      this._ref.checkpoints.refreshLabelMiddle();
    }
    //Mover adjuntos
    this._ref.moveAttachments(arg);      
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"move", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: destroy. Description: Destruir atributo de selección de la línea Psi  
  destroy: function(){ 
  try { 
    var classcss = this._ref._lib.attr("select-class");
    this._ref._select = null;
    $(this.frame).removeAttr("select");
    if (this._oldclass)
      this.frame.setAttribute("class", this._oldclass);
    else
      $(this.frame).css("opacity", "1");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"destroy", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "SelectLine"; }
});

/*-----------------------------------------------------
*=Class[line]: Line
* Description: Línea curva, reacta, polilínea, arco, etc. de un diagrama Psi
*-----------------------------------------------------*/
function Line () {
  //Properties   
  //Property: labels. Description: Lista de rótulos  
  this.labels = {};  
  //Property: settings. Description: Mapa de opciones  
  this.settings = {};  
  //Property: binds. Description: Encadenar eventos a la línea  
  this.binds = null;  
  //Property: makes. Description: Lista de modificadores a la línea  
  this.makes = {}; 
};
//Inheritance
Line.inherits(LineBase); 
//* Definitions Events and Methods
Line.methods({
  //Methods   
  //Method: create. Description: Crear una línea de la librería gráfica en el diagrama Psi  
  create: function(refline, parent){ 
  try { 
    if (refline==null) throw new DError(this, "LINE_ERROR");
    return GLPsi.Lines.newLine(
      refline, 
      this.context.svggen, 
      this.id(), parent, 
      this.attr("start"), 
      this.attr("path"), 
      this.attr("end"), 
      this._getOptionsLabels(), 
      this
    );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Line"; }
});

/*-----------------------------------------------------
*=Class[connector]: Connector
* Description: Línea curva, recta, polilínea, arco, etc. de un diagrama Psi
*-----------------------------------------------------*/
function Connector () {
  //Properties   
  //Property: labels. Description: Lista de rótulos  
  this.labels = {};  
  //Property: settings. Description: Mapa de opciones  
  this.settings = {};  
  //Property: binds. Description: Encadenar eventos al conector  
  this.binds = null;  
  //Property: makes. Description: Lista de modificadores al conector  
  this.makes = {}; 
};
//Inheritance
Connector.inherits(LineBase); 
//* Definitions Events and Methods
Connector.methods({
  //Methods   
  //Method: create. Description: Crear un conector de la librería gráfica en el diagrama Psi  
  create: function(refline, parent){ 
  try { 
    if (refline==null) throw new PsiError("DPSI.CONNECTOR_ERROR", [], []);

    var from = this.context.svggen.getElementById( this.attr("from") ),
        to = this.context.svggen.getElementById( this.attr("to") ),
        startConnection = from && from._connection ? from._connection : null,
        endConnection = to && to._connection ? to._connection : null;
        
    //Conexión inicial
    if (startConnection)
      this.start = startConnection._ref;

    //Conexión final
    if (endConnection)
      this.end = endConnection._ref;
    
    //El punto inicial es igual al punto final
    this.itself = startConnection && endConnection ? this.start.id()==this.end.id() : false;
    
    //Actualizar información de connectores de los elementos gráficos inicial y final
    if (this.itself)
      this.start.connectors("itself+", this);
    else {
      this.start.connectors("from+", this);
      this.end.connectors("to+", this);
    }
    
    var newsvg = GLPsi.Lines.newConnector(
          refline, 
          this.context.svggen, 
          this.id(), 
          parent, 
          this.attr("start")=="*" && startConnection ? startConnection.getPositionDefault() : this.attr("start"), 
          this.attr("path"), 
          this.attr("end")=="*" && endConnection ? endConnection.getPositionDefault() : this.attr("end"), 
          this._getOptionsLabels(), 
          this,
          startConnection,
          endConnection
        );
    this.checkpoints = newsvg._checkpoints;
    return newsvg;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: changeStart. Description: Cambiar el Start de la conexión  
  changeStart: function(start){ 
  try { 
    //Eliminar punto de control inicial de la conexión
    if (this.start && this.start.connection && this.checkStart)
      this.start.connection.checks.remove(this.checkStart);
    //Actualizar la conexión
    if (start.connection){
      var position = start.connection.getPositionDefault();
      this.attr({ "to": start.id(), "end": position });
      this.start = start.connection._ref;
      //El punto inicial es igual al punto final
      this.itself = this.start.id()==this.end.id();
      if (this.itself)
        this.start.connectors("itself+", this);
      else
        this.start.connectors("from+", this);
      //Actualizar
      this._pstart = this._svg._pstart = start.connection.getPoint(position, this._svg._parent);
      this._svg._pstart._connection = start.connection;
      this._svg._pstart._connectionPoint = this._svg._pstart;
      this.checkStart.setConnection(to);
      this.start.connection.checks.add(this.checkStart);
      this.refreshStartEnd();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"changeStart", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: changeEnd. Description: Cambiar el End de la conexión  
  changeEnd: function(to){ 
  try { 
    //Eliminar punto de control final de la conexión
    if (this.end && this.end.connection && this.checkEnd)
      this.end.connection.checks.remove(this.checkEnd);
    //Actualizar la conexión
    if (to.connection){
      var position = to.connection.getPositionDefault();
      this.attr({ "to": to.id(), "end": position });
      this.end = to.connection._ref;
      //El punto inicial es igual al punto final
      this.itself = this.start.id()==this.end.id();
      if (this.itself)
        this.start.connectors("itself+", this);
      else
        this.end.connectors("to+", this);
      //Actualizar
      this._pend = this._svg._pend = to.connection.getPoint(position, this._svg._parent);
      this._svg._pend._connection = to.connection;
      this._svg._pend._connectionPoint = this._svg._pend;
      this.checkEnd.setConnection(to);
      this.end.connection.checks.add(this.checkEnd);
      this.refreshStartEnd();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"changeEnd", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refreshStartEnd. Description: Refrescar puntos de control de los extremos  
  refreshStartEnd: function(){ 
  try { 
    this.checkpoints.checkStart.refresh();
    this.checkpoints.checkEnd.refresh();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refreshStartEnd", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: distanceStartEnd. Description: Distancia entre los extremos  
  distanceStartEnd: function(){ 
  try { 
    var pstart = this.checkpoints.checkStart.getPoint(),
        pend = this.checkpoints.checkEnd.getPoint();
    this._distance = pstart.distance(pend);
    return this._distance;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"distanceStartEnd", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: another. Description: Obtener el otro extremo del conector Psi  
  another: function(currentId){ 
  try { 
    return this.start.id()==currentId ? this.end : this.start;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"another", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: minimum. Description: Distancia mínima entre los extremos  
  minimum: function(){ 
  try { 
    this.checkpoints.checkStart.minimumBoth();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minimum", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onRemove. Description: Remueve el SVG del diagrama Psi  
  onRemove: function(self){ 
  try { 
    $(this._svg).remove();
    //Eliminar punto de control inicial de la conexión
    if (this.start && this.start.connection && this.checkStart)
      this.start.connection.checks.remove(this.checkStart);
    
    //Eliminar punto de control final de la conexión
    if (this.end && this.end.connection && this.checkEnd)
      this.end.connection.checks.remove(this.checkEnd);
      
    //Eliminar los connectors
    if (this.itself)
      this.start.connectors("itself-", this.id());
    else {
      this.start.connectors("from-", this.id());
      this.end.connectors("to-", this.id());
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onRemove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Connector"; }
});


  //Component Methods 


/*-----------------------------------------------------
* Component Definition: Lines  
*-----------------------------------------------------*/
return {
  //Content 
  LineBase: LineBase, //* Type: Class
  SelectLine: SelectLine, //* Type: Class
  Line: Line, //* Type: Class
  Connector: Connector, //* Type: Class
  //Properties 
  //Methods 
  toString: function() { return "Lines"; }
};
})(); 

/*-----------------------------------------------------
*=Class[diagram_psi]: Diagram
* Description: Diagrama basado en lenguaje GLPsi
*-----------------------------------------------------*/
function Diagram () {
  //Properties   
  //Property: params. Description: Parámetros externos del diagrama  
  this.params = null;  
  //Property: includes. Description: Mapa de inlcudes  
  this.includes = {};  
  //Property: binds. Description: Mapa de eventos a encadenar  
  this.binds = null;  
  //Property: functions. Description: Mapa de funciones  
  this.functions = {};  
  //Property: makes. Description: Mapa de modificadores de diagrama  
  this.makes = {};  
  //Property: skeletons. Description: Mapa de skeletons  
  this.skeletons = {};  
  //Property: layers. Description: Mapa de capas  
  this.layers = {}; 
};
//Inheritance
Diagram.inherits(DBase); 
//* Definitions Events and Methods
Diagram.methods({
  //Methods   
  //Method: setDimension. Description: Modificar dimensiones del diagrama Psi  
  setDimension: function(width, height){ 
  try { 
    this.width = this.attr("width", Math.round(width));
    this.height = this.attr("height", Math.round(height)); 
    this.viewBox = this.context.svgroot.viewBox.baseVal;
    //TODO: Falta agregar proceso para ajustar elementos gráficos/ Faltaactualizar lista de elementos desde el contexto.
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setDimension", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setScale. Description: Modificar escala del diagrama Psi  
  setScale: function(value){ 
  try { 
    this.scale = this.attr("scale", value);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setScale", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setBackground. Description: Gardar hexa fondo del diagrama Psi  
  setBackground: function(value){ 
  try { 
    this.attr("background", value);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setBackground", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: transform. Description: Transforma las dimensiones (ancho, alto, escala) del diagrama Psi  
  transform: function(params){ 
  try { 
    var p = $.extend({
              scale: this.hasAttr("scale") ? this.attr("scale") : 1,
              width: this.hasAttr("width") ? this.attr("width") : this.context.svgroot.width.baseVal.value,
              height: this.hasAttr("height") ? this.attr("height") : this.context.svgroot.height.baseVal.value 
            }, params);
    //Manejo de escala y dimensiones
    this.scale = this.attr("scale", p.scale);
    this.width = this.attr("width", p.width);
    this.height = this.attr("height", p.height); 
    
    //Manipular dimensiones
    this.context.svgroot.width.baseVal.value = this.width*this.scale;
    this.context.svgroot.height.baseVal.value = this.height*this.scale;
    this.context.svgroot.viewBox.baseVal.width = this.width;
    this.context.svgroot.viewBox.baseVal.height = this.height;
    
    //Manejo de escala
    this.viewBox = this.context.svgroot.viewBox.baseVal;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"transform", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar diagrama Psi  
  onInit: function(){ 
  try { 
    this._createReferences(this.context.svgroot);
    this.alias = this.attr("alias");
    //Manejo de viewBox
    this.viewBox = this.context.svgroot.viewBox.baseVal;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Diagram"; }
});

/*-----------------------------------------------------
*=Var[_managers]: _managers
* Description: Arregla de administradores de diagrama Psi
*-----------------------------------------------------*/
var _managers = {};

/*-----------------------------------------------------
*=Class[manager_diagram]: ManagerDiagram
* Description: Administrador de un diagrama Psi. Admite un conjunto de diagramas sobre la misma raíz SVG
*-----------------------------------------------------*/
function ManagerDiagram (container, svgId, options) {
  //Properties   
  //Property: container. Description: Contenedor del diagrama  
  this.container = container;  
  //Property: svgroot. Description: Elemento raiz del diagrama SVG  
  this.svgroot = this._initSVG(svgId, container, options);  
  //Property: main. Description: Programa principal  
  this.main = null;  
  //Property: selected. Description: Mapa de seleccionados  
  this.selected = {};  
  //Property: map. Description: Mapa de los elementos gráficos en el diagrama  
  this.map = {};  
  //Property: _diagrams. Description: Mapa diagramas activos  
  this._diagrams = {};  
  //Property: _programs. Description: Mapa de programas de diagramas ejecutados  
  this._programs = {}; 
}; 
//* Definitions Events and Methods
ManagerDiagram.methods({
  //Methods   
  //Method: _initSVG. Description: Inicializar administrador de diagramas Psi  
  _initSVG: function(svgId, container, settings){ 
  try { 
    var $svg = container.svg();
    this.id = $(container).attr("id");
    this.svgId = svgId; 
    this.svggen = $svg.svg("get");
    
    //Crear svgroot
    var root = this.svggen.root();
    root._manager = this;
    this.svggen.change(root, settings);
    root.setAttribute("viewBox", "0 0 "+settings.width+" "+settings.height);
    $(root)
      .attr({"id": svgId, "type": "manager", "class": $(root).attr("class")+" psi-manager-diagram", 
             "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink"});
    
    //Crear contenedor y fondo
    //this.content = this.svggen.group(svgId+"-content");
    this._background = this.svggen.rect(0,0, settings.width,settings.height, {fill: "white", stroke: "none"});
    this._background._manager = this;
    $(this._background).attr("type","manager-background");
    
    //Crear evento dblclick para deseleccionar
    $(this._background).dblclick(function(event){
      this._manager.unselect(1);
    })
    return root;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_initSVG", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _runProgram. Description: Ejecutar un programa gráfico, ya sea de generación Psi  
  _runProgram: function(name, options){ 
  try { 
    //Determinar si ya esta ejecutando el programa Psi
    if(this._programs[name])
      return this._programs[name];
    var program = _run(name, options, this);
    program.url = options.url;
    this._programs[name] = program;
    this._diagrams[program.object.id()] = program.object;
    return this._programs[name];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_runProgram", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: init. Description: Ejecuta el programa gráfico principal Psi  
  init: function(name, options){ 
  try { 
    this.main = this._runProgram(name, options);
    this.diagram = this.main.object;
    
    if (this.diagram.hasAttr("width") && this.diagram.hasAttr("height")) {
      this.svgroot.viewBox.baseVal.width = this.diagram.attr("width");
      this.svgroot.viewBox.baseVal.height = this.diagram.attr("height");
      this.svgroot.width.baseVal.value = this.diagram.attr("width");
      this.svgroot.height.baseVal.value = this.diagram.attr("height");
    }
    
    //Backgroud
    if (this.diagram.hasAttr("background"))
      $(this._background).attr("fill", this.diagram.attr("background"));    
    //this.diagram.transform();
    return this.main;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: clear. Description: Eliminar diagrama Psi  
  clear: function(){ 
  try { 
    PsiXML.Programs.remove(this.main.name);
    this.svggen.clear(true);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"clear", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: run. Description: Ejecuta programas gráfico Psi adicionales  
  run: function(name, options){ 
  try { 
    return this._runProgram(name, options);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"run", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: add. Description: Adicionar un objeto, una lista de objetos al administrador de diagrama Psi  
  add: function(arg1, arg2, arg3){ 
  try { 
    if ($.isPlainObject(arg1))
      for (var id in arg1){
        var self = $.type(arg2)==="boolean" && arg2===false ? this : this.map; 
        self[id] = arg1[id];
      }
    else if ($.type(arg1)==="string") {
      var self = $.type(arg3)==="boolean" && arg3===false ? this : this.map;
      self[arg1] = arg2;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"add", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: remove. Description: Remover un objeto al administrador del diagrama Psi  
  remove: function(key, toMap){ 
  try { 
    var self = $.type(toMap)==="boolean" && toMap===false ? this : this.map;
    if (self[key]!=null) 
      delete self[key]; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"remove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: findRef. Description: Buscar lista de referencias por el selector  
  findRef: function(selector){ 
  try { 
    var result = {}, index = 0, onlyref = null;
    $(selector, this.svgroot).each(function(){
      if (this._ref)
        result[this._ref.id()] = this._ref;
      index++;
      if (index==1) onlyref = this._ref;
    });
    return index<=1 ? onlyref : result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"findRef", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: findRefId. Description: Buscar lista de referencias por el selector y obtener un arraglo de identificadores  
  findRefId: function(selector){ 
  try { 
    var result = new Array();
    $(selector, this.svgroot).each(function(){
      if (this._ref)
        result.push( this._ref.id() );
    });
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"findRefId", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: filterRef. Description: Buscar específicamente por el campo 'filter'  
  filterRef: function(_filter){ 
  try { 
    var result = {}, 
        filter = _filter.indexOf("=")>=0 ? _filter : "="+_filter;
    $("[filter"+filter+"]", this.svgroot).each(function(){
      if (this._ref)
        result[this._ref.id()] = this._ref;
    });
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"filterRef", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: select. Description: Adicionar elemento Psi al conjunto de selección  
  select: function(ref){ 
  try { 
    if (ref._psixml && ref._elementType && this.selected[ref.id()]==null)
      switch(ref._elementType) {
        case ElementType.Graph: 
          var arr = new Array();
          for(var id in this.selected)
            arr.push(id);
          this.selected[ref.id()] = new Graph.SelectGraph(this, ref); 
          
          //Buscar si tiene connectores relacionados
          var connectors = ref.connectors("toObject");
          for(var id in connectors){
            conn = connectors[id];
            if (arr.indexOf(conn.start.id())==ref.id()>=0 || arr.indexOf(conn.end.id())==ref.id()>=0)
              this.selected[id] = new Lines.SelectLine(this, connectors[id]);
          }
          connectors = ref.connectors("itselfObject");
          for(var id in connectors)
            this.selected[id] = new Lines.SelectLine(this, connectors[id]);
          break;
        case ElementType.Line: this.selected[ref.id()] = new Lines.SelectLine(this, ref); break;
        default: new PsiWarning("DPSI.ERROR_SELECT_TYPE", [type], [this]);
      }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"select", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: unselect. Description: Deselecciona un elemento Psi del conjunto de selección  
  unselect: function(arg){ 
  try { 
    if ($.type(arg)==="number"){
      if (arg==1)
        for(var selId in this.selected){
          this.selected[selId].destroy();
          delete this.selected[selId];
        }
      else if (arg==2)
        for(var selId in this.selected)
          delete this.selected[selId];
    }
    else {
      var id = $.type(arg)==="string" 
             ? arg
             : arg._psixml ? arg.id() : null;
      if (this.selected[id]) {
        this.selected[id].destroy();
        delete this.selected[id];
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"unselect", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: beSelected. Description: Devuelve verdadero si ásta seleccionado el elemento Psi  
  beSelected: function(arg){ 
  try { 
    var id = $.type(arg)==="string" 
           ? arg
           : arg._psixml ? arg.id() : null;
    return this.selected[id]!=null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"beSelected", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: move. Description: Mover elementos seleccionados  
  move: function(arg){ 
  try { 
    for(var id in this.selected)
      this.selected[id].move(arg);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"move", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: background. Description: Modificar fonde del diagrama Psi  
  background: function(value){ 
  try { 
    if(value) {
      $(this._background).attr("fill", value);
      if (this.diagram)
        this.diagram.setBackground(value);
    }
    return this._background;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"background", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: scale. Description: Redefine/Obtiene la escala del diagrama Psi  
  scale: function(value){ 
  try { 
    if (this.diagram){
      this.diagram.transform(value ? {scale: value} : null);
      return this.diagram.scale;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"scale", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: dimension. Description: Redimensionar el svgroot del administrador de diagramas Psi  
  dimension: function(arg1, arg2){ 
  try { 
    var width = Math.round( $.type(arg1)==="number" ? arg1 : arg1.width ), 
        height = Math.round( $.type(arg2)==="number" ? arg2 : arg1.height );
    this.svgroot.viewBox.baseVal.width  = this.svgroot.width.baseVal.value  = width;
    this.svgroot.viewBox.baseVal.height = this.svgroot.height.baseVal.value = height;
    $(this._background).attr({width: width, height: height});
    if (this.diagram) 
      this.diagram.setDimension(width, height);
    /*if (this.diagram) {
      this.diagram.transform(params);
      $(this.background).attr({width: this.diagram.width, height: this.diagram.height});
    }
    else
      $(this.background).attr(params);*/
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"dimension", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: unduplicate. Description: Procesar bordes de conexión con cheks duplicados  
  unduplicate: function(list){ 
  try { 
    var map = list ? list : this.map,
        processed = new Array();
    
    //Crear lista de punto de chequeo de duplicados
    for(var id in map) {
      var node = map[id];
      if (node && node.connection && node.connection.checks && node._elementType==ElementType.Graph)
        processed = processed.concat( node.connection.checks.duplicates() );
    }
    processed = processed.sort(function(a, b){return a._ref._distance-b._ref._distance});
    
    //Remover todos los puntos de chequeo y crear lista de arcos
    var arcs = new Array();
    for(var i in processed) {
      var check = processed[i];
      check._connection.checks.remove(check);
      arcs.push(check._ref);
    }
    
    //Procesar arcos con la distancia minima desocupada
    for(var id in arcs) {
      var arc = arcs[id],
          cfrom = arc.start.connection.checks, 
          cto = arc.end.connection.checks;
      for(var k=0; k<arc.minArray.length; k++){
        var newVal = arc.minArray[k];
        if (cfrom.indices[newVal.from.index]==null && cto.indices[newVal.to.index]==null) {
          arc.checkStart.moveConnection(newVal.from);
          arc.checkStart.move(newVal.from.x, newVal.from.y);
          arc.checkEnd.moveConnection(newVal.to);
          arc.checkEnd.move(newVal.to.x, newVal.to.y);
          break;
        }
      }
    }
    return arcs;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"unduplicate", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "ManagerDiagram"; }
});

/*-----------------------------------------------------
*=Function[create_manager]: createManager
* Description: Crear un administrador de diagrama Psi
*-----------------------------------------------------*/
function createManager (container, svgId, options) { 
  var id = container.attr("id");
  
  //Verificar si ya se a creado administrador de diagramas Psi sobre el objeto SVG
  if (container.hasClass("psi-manager-diagram")) {
    if (_managers[id])
      return _managers[id];
    throw new PsiError("DPSI.MANAGER_DIAGRAM_ERROR_ID", [id], [this, container]);
  }
  //Crear un nuevo administrador de diagramas Psi
  return _managers[id] = new ManagerDiagram(container, svgId, options);
 };   

/*-----------------------------------------------------
*=Function[get_manager]: getManager
* Description: Obtiene un administrador de diagrama Psi
*-----------------------------------------------------*/
function getManager (id) { 
  return _managers[id];
 };   

/*-----------------------------------------------------
*=Parser[diagram_parser]: DiagramParser
* Description: Analizador de diagrama Psi
*-----------------------------------------------------*/
function DiagramParser () {
  //Properties  
};
DiagramParser.inherits(PsiXML.Parser); 
//* Definitions Events and Methods
DiagramParser.methods({
  
  //Define Properties
  defineProperties: function(newElement) {
    if (newElement.parent) {
      switch (newElement.parent._def.key) { 
        case ID_TAG_DIAGRAM_PSI:
          switch (newElement.tag) { 
            case "Params": newElement.parent.params = newElement; break;
            case "Include": newElement.parent.includes[newElement.id()] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Function": newElement.parent.functions[newElement.id()] = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
            case "Skeleton": newElement.parent.skeletons[newElement.id()] = newElement; break;
            case "Layer": newElement.parent.layers[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_SKELETON:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
            case "Text": newElement.parent.texts[newElement.key] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Section": newElement.parent.sections[newElement.key] = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_LAYER:
          switch (newElement.tag) { 
            case "Bind": newElement.parent.binds = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
            case "Layer": newElement.parent.layers[newElement.id()] = newElement; break;
            case "Icon": newElement.parent.icons[newElement.id()] = newElement; break;
            case "Node": newElement.parent.nodes[newElement.id()] = newElement; break;
            case "Figure": newElement.parent.figures[newElement.id()] = newElement; break;
            case "Panel": newElement.parent.panels[newElement.id()] = newElement; break;
            case "List": newElement.parent.lists[newElement.id()] = newElement; break;
            case "Line": newElement.parent.lines[newElement.id()] = newElement; break;
            case "Connector": newElement.parent.connectors[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_ICON:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_NODE:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
            case "Text": newElement.parent.texts[newElement.key] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_FIGURE:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
            case "Text": newElement.parent.texts[newElement.key] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_PANEL:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
            case "Text": newElement.parent.texts[newElement.key] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Layer": newElement.parent.layers[newElement.id()] = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
            case "Left": newElement.parent.left = newElement; break;
            case "Right": newElement.parent.right = newElement; break;
            case "Icon": newElement.parent.icons[newElement.id()] = newElement; break;
            case "Node": newElement.parent.nodes[newElement.id()] = newElement; break;
            case "Figure": newElement.parent.figures[newElement.id()] = newElement; break;
            case "List": newElement.parent.lists[newElement.id()] = newElement; break;
            case "Panel": newElement.parent.panels[newElement.id()] = newElement; break;
            case "Line": newElement.parent.lines[newElement.id()] = newElement; break;
            case "Connector": newElement.parent.connectors[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_LATERAL:
          switch (newElement.tag) { 
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
            case "Icon": newElement.parent.icons[newElement.id()] = newElement; break;
            case "Node": newElement.parent.nodes[newElement.id()] = newElement; break;
            case "Figure": newElement.parent.figures[newElement.id()] = newElement; break;
            case "List": newElement.parent.lists[newElement.id()] = newElement; break;
            case "Line": newElement.parent.lines[newElement.id()] = newElement; break;
            case "Connector": newElement.parent.connectors[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_LIST:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
            case "Text": newElement.parent.texts[newElement.key] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Section": newElement.parent.sections[newElement.key] = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_LINE:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_CONNECTOR:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
            case "Bind": newElement.parent.binds = newElement; break;
            case "Make": newElement.parent.makes[newElement.key] = newElement; break;
          };
          break;
      }
    }
  }, 
  //Methods 
  //Events 
  toString: function() { return "DiagramParser"; }
});


/*-----------------------------------------------------
* Component:  Methods
*-----------------------------------------------------*/



/*-----------------------------------------------------
* Register Component to PsiXML:  DPsi
*-----------------------------------------------------*/
PsiXML.registerLanguagePsi(ALIAS, GRAMMAR, DiagramParser);

function _run(name, options, context){
  return PsiXML.traductor_PxmlToPobj(ALIAS, name, options, context);
}
function _language(){
  return PsiXML.LanguagePsi.get(ALIAS);
}


/*-----------------------------------------------------
* Module Initialize: InitDPsi  
*-----------------------------------------------------*/
function InitDPsi() { 
    //Registrar base de datos de skeletons para elementos Psi
    PsiData.register("skeleton");
  
}
InitDPsi();

/*-----------------------------------------------------
* Component Definition: DPsi  
*-----------------------------------------------------*/
return {
  //Content 
  IncludeType: IncludeType, //* Type: Enum
  Include: Include, //* Type: Class
  LoadFunction: LoadFunction, //* Type: Class
  BindToolType: BindToolType, //* Type: Enum
  BindTools: BindTools, //* Type: Class
  Setting: Setting, //* Type: Class
  Text: Text, //* Type: Class
  Params: Params, //* Type: Class
  SelectBase: SelectBase, //* Type: Class
  ElementType: ElementType, //* Type: Enum
  DBase: DBase, //* Type: Class
  DCommon: DCommon, //* Type: Class
  Attached: Attached, //* Type: Class
  Icon: Icon, //* Type: Class
  Skeleton: Skeleton, //* Type: Class
  Make: Make, //* Type: Class
  Layer: Layer, //* Type: Class
  Graph: Graph, //* Type: Component
  Lines: Lines, //* Type: Component
  Diagram: Diagram, //* Type: Class
  _managers: _managers, //* Type: Var
  ManagerDiagram: ManagerDiagram, //* Type: Class
  createManager: createManager, //* Type: Function
  getManager: getManager, //* Type: Function
  //Properties 
  //Methods 
  toString: function() { return "DPsi"; },
  run: _run,
  language: _language
};
})(); 

