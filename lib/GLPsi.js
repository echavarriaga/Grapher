/* Generated power ModelPsi (@VERSION 2.1) 
* Model Name: Graphs Library based PsiXML
* Version: 1.0
* Author: Enrique Chavarriaga
* 
* Copyright 2015.
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
* http://www.b2tconcept/psiXml/license
*
*/

/* Type DEBUG Psi -------------- */
if (PsiOut && PsiOut.console) PsiOut.console.debug = true;
/* ----------------------------- */


/*-----------------------------------------------------
*=ComponentPsi[gl_psi]: GLPsi
* Description: Graphs Library based PsiXML
*-----------------------------------------------------*/
var GLPsi = (function () {  


/*-----------------------------------------------------
* Constants Identifiers Grammar: GLPsi 
*-----------------------------------------------------*/
var ID_TAG_GRAPH_LIBRARY = "graph_library";
var ID_TAG_SCRIPT = "script";
var ID_TAG_DEFS = "defs";
var ID_TAG_LOAD_FUNCTION = "load_function";
var ID_TAG_MAKE = "make";
var ID_TAG_CONNECTION_DEFINE = "connection_define";
var ID_TAG_EDGE_DEFINE = "edge_define";
var ID_TAG_SHAPE = "shape";
var ID_TAG_CONTAINER = "container";
var ID_TAG_LIST = "list";
var ID_TAG_LINE = "line";
var ID_TAG_EVENTS = "events";
var ID_TAG_EVENTS_LINE = "events_line";
var ID_TAG_COMMANDS = "commands";
var ID_TAG_SOURCE_SVG = "source_svg";
var ID_TAG_ICON_SVG = "icon_svg";
var ID_TAG_TRANSFORM_SETTINGS = "transform_settings";
var ID_TAG_CONTAINER_SETTINGS = "container_settings";
var ID_TAG_LIST_SETTINGS = "list_settings";
var ID_TAG_LINE_SETTING = "line_setting";
var ID_TAG_LINEMARK_SETTING = "linemark_setting";
var ID_TAG_TEXT = "text";
ID_TAGS = {};

/*-----------------------------------------------------
* Structure to GrammarPsi: GLPsi
*-----------------------------------------------------*/
ID_TAGS[ID_TAG_GRAPH_LIBRARY] = {
  CLASS: "GLPsi.GraphsLibrary",
  TAG: "GraphsLibrary",
  MULTIPLICITY: { "Script": "0..n","Defs": "0..1","Function": "0..n","Make": "0..n","ConnectionEdge": "0..n","Shape": "0..n","Container": "0..n","List": "0..n","Line": "0..n" },
  CHILDREN: { "Script": ID_TAG_SCRIPT,"Defs": ID_TAG_DEFS,"Function": ID_TAG_LOAD_FUNCTION,"Make": ID_TAG_MAKE,"ConnectionEdge": ID_TAG_CONNECTION_DEFINE,"Shape": ID_TAG_SHAPE,"Container": ID_TAG_CONTAINER,"List": ID_TAG_LIST,"Line": ID_TAG_LINE },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*alias:text"
};
ID_TAGS[ID_TAG_SCRIPT] = {
  CLASS: "GLPsi.Script",
  TAG: "Script",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: ""
};
ID_TAGS[ID_TAG_DEFS] = {
  CLASS: "GLPsi.Defs",
  TAG: "Defs",
  MULTIPLICITY: { "SourceSVG": "1..n" },
  CHILDREN: { "SourceSVG": ID_TAG_SOURCE_SVG },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: ""
};
ID_TAGS[ID_TAG_LOAD_FUNCTION] = {
  CLASS: "GLPsi.LoadFunction",
  TAG: "Function",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier"
};
ID_TAGS[ID_TAG_MAKE] = {
  CLASS: "GLPsi.Make",
  TAG: "Make",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier"
};
ID_TAGS[ID_TAG_CONNECTION_DEFINE] = {
  CLASS: "GLPsi.ConnectionEdge.ConnectionDefine",
  TAG: "ConnectionEdge",
  MULTIPLICITY: { "Edge": "1..n" },
  CHILDREN: { "Edge": ID_TAG_EDGE_DEFINE },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|default:text"
};
ID_TAGS[ID_TAG_EDGE_DEFINE] = {
  CLASS: "GLPsi.ConnectionEdge.EdgeDefine",
  TAG: "Edge",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|*type:select(points,segment)|*source:text(Use W=width H=height X=posX Y=posY,Cx1@#y1@%r@%n,Ex1@#y1@%r1@%r2@%n,Lx1@#y1@%x2@#y2@%n1,Kx1@#y1@%x2@#y2@%n1,Rx1@#y1@%x2@#y2@%n1@%n2,Sx1@#y1@%x2@#y2@%n1@*n2)|selector:text|class:text|discretize=8:number(5,8,10,16,20)"
};
ID_TAGS[ID_TAG_SHAPE] = {
  CLASS: "GLPsi.Graph.Shape",
  TAG: "Shape",
  MULTIPLICITY: { "Events": "0..1","Commands": "0..1","Transform": "0..1","SourceSVG": "1..1","IconSVG": "0..1" },
  CHILDREN: { "Events": ID_TAG_EVENTS,"Commands": ID_TAG_COMMANDS,"Transform": ID_TAG_TRANSFORM_SETTINGS,"SourceSVG": ID_TAG_SOURCE_SVG,"IconSVG": ID_TAG_ICON_SVG },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|connection:identifier|midpoint=X+W/2,Y+H/2:text(X+W/2@#Y+H/2,W/2@#H/2)|before-key-select:text"
};
ID_TAGS[ID_TAG_CONTAINER] = {
  CLASS: "GLPsi.Graph.Container",
  TAG: "Container",
  MULTIPLICITY: { "Events": "0..1","Commands": "0..1","Settings": "0..1","HeaderSVG": "0..1","FooterSVG": "0..1","OnResize": "0..1","IconSVG": "0..1" },
  CHILDREN: { "Events": ID_TAG_EVENTS,"Commands": ID_TAG_COMMANDS,"Settings": ID_TAG_CONTAINER_SETTINGS,"HeaderSVG": ID_TAG_SOURCE_SVG,"FooterSVG": ID_TAG_SOURCE_SVG,"OnResize": ID_TAG_TEXT,"IconSVG": ID_TAG_ICON_SVG },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|connection:identifier|midpoint=X+W/2,Y+H/2:text(X+W/2@#Y+H/2,W/2@#H/2)|before-key-select:text"
};
ID_TAGS[ID_TAG_LIST] = {
  CLASS: "GLPsi.Graph.List",
  TAG: "List",
  MULTIPLICITY: { "Events": "0..1","Commands": "0..1","Settings": "0..1","HeaderSVG": "1..1","SectionSVG": "0..1","ItemSVG": "1..1","OnResize": "0..1","OnSection": "0..1","OnItem": "0..1","IconSVG": "0..1" },
  CHILDREN: { "Events": ID_TAG_EVENTS,"Commands": ID_TAG_COMMANDS,"Settings": ID_TAG_LIST_SETTINGS,"HeaderSVG": ID_TAG_SOURCE_SVG,"SectionSVG": ID_TAG_SOURCE_SVG,"ItemSVG": ID_TAG_SOURCE_SVG,"OnResize": ID_TAG_TEXT,"OnSection": ID_TAG_TEXT,"OnItem": ID_TAG_TEXT,"IconSVG": ID_TAG_SOURCE_SVG },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|connection:identifier|midpoint=X+W/2,Y+H/2:text(X+W/2@#Y+H/2,W/2@#H/2)|before-key-select:text"
};
ID_TAGS[ID_TAG_LINE] = {
  CLASS: "GLPsi.Lines.Line",
  TAG: "Line",
  MULTIPLICITY: { "LineSetting": "0..1","MarkSetting": "0..1","Events": "0..1","IconSVG": "0..1" },
  CHILDREN: { "LineSetting": ID_TAG_LINE_SETTING,"MarkSetting": ID_TAG_LINEMARK_SETTING,"Events": ID_TAG_EVENTS_LINE,"IconSVG": ID_TAG_ICON_SVG },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|minimum=none:select(none,own,both,other)|duplicate=yes:select(yes,no)|midpoint=0.5:number;range(0,1)"
};
ID_TAGS[ID_TAG_EVENTS] = {
  CLASS: "GLPsi.Events",
  TAG: "Events",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "drag:text(selector)|select:text(selector@=click,selector@=dblclick,selector@=hover)|hide:text(selector@=click,selector@=dblclick)|transform:text(selector@=click,selector@=dblclick)|toggle-connection:text(selector@=click,selector@=dblclick,selector@=hover)"
};
ID_TAGS[ID_TAG_EVENTS_LINE] = {
  CLASS: "GLPsi.Events",
  TAG: "Events",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "checkpoints:text(selector@=click,selector@=dblclick,selector@=hover)|select:text(selector@=click,selector@=dblclick,selector@=hover)|drag:text(selector)"
};
ID_TAGS[ID_TAG_COMMANDS] = {
  CLASS: "GLPsi.Commands",
  TAG: "Commands",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: ""
};
ID_TAGS[ID_TAG_SOURCE_SVG] = {
  CLASS: "GLPsi.SourceSVG",
  TAG: "SourceSVG",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: false,
  SEND_CONTEXT: false,
  VALIDATOR: "id:identifier|url:text"
};
ID_TAGS[ID_TAG_ICON_SVG] = {
  CLASS: "GLPsi.IconSVG",
  TAG: "IconSVG",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: false,
  SEND_CONTEXT: false,
  VALIDATOR: "id:identifier|url:text"
};
ID_TAGS[ID_TAG_TRANSFORM_SETTINGS] = {
  CLASS: "GLPsi.Settings",
  TAG: "Settings",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "scale-min=0.25:number|scale-max=2:number|scale-r=5:number|scale-class=glpsi-transform-scale:identifier|box-class=glpsi-transform-box:identifier"
};
ID_TAGS[ID_TAG_CONTAINER_SETTINGS] = {
  CLASS: "GLPsi.Settings",
  TAG: "Settings",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "width=300:number|width-left=0:number|width-right=0:number|height=300:number|body-class=glpsi-container-body:text|background-class=glpsi-container-background:text|background-padding=3:number|background-rx=0:number|background-ry=0:number|space-header=3:number|space-footer=3:number|space-lateral=3:number"
};
ID_TAGS[ID_TAG_LIST_SETTINGS] = {
  CLASS: "GLPsi.Settings",
  TAG: "Settings",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "width=150:number|background-class=glpsi-list-background:text|background-padding=3:number|background-rx=4:number|background-ry=4:number|space-header=3:number|space-item=4:number|divider-class=glpsi-list-divider:text"
};
ID_TAGS[ID_TAG_LINE_SETTING] = {
  CLASS: "GLPsi.Settings",
  TAG: "LineSetting",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "class:text|fill=none:text|stroke=gray:text|stroke-width=1.5px:text|marker-start:text|marker-end:text"
};
ID_TAGS[ID_TAG_LINEMARK_SETTING] = {
  CLASS: "GLPsi.Settings",
  TAG: "MarkSetting",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "fill=#ffffe8:text|stroke=gray:text|stroke-width=0.3px:text|r=4:number"
};
ID_TAGS[ID_TAG_TEXT] = {
  CLASS: "GLPsi.Text",
  TAG: "Text",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: ""
};

var GRAMMAR = {
      NAME: "GLPsi",
      TAGS: ID_TAGS,
      ROOT: ID_TAG_GRAPH_LIBRARY
    };
var ALIAS = "GLPsi";


/*-----------------------------------------------------
* Component:  Properties
*-----------------------------------------------------*/


/*-----------------------------------------------------
*=Texts[glpsi_messages]: GLPSI
* Description: Manejo de mensajes de Lenguaje GLPsi
*-----------------------------------------------------*/
var GLPSI_SHORT_MAP = { 
  ES: { 
    VALIDATE_DIGITS: "El atributo '$1' debe ser un dígito numárico",
    GEOMETRY_NOT_SEGMENT: "Error en determinar si es paralela o no un segmento",
    FACTORY_NEW_SHAPE_ERROR: "No se encontro registrado el ShapeId='$1' en la librería gráfica Psi",
    FACTORY_NEW_CONTAINERS_ERROR: "No se encontro registrado el ContainerId='$1' en la librería gráfica Psi",
    FACTORY_NEW_LISTS_ERROR: "No se encontro registrado el ListId='$1' en la librería gráfica Psi",
    FACTORY_NEW_LINE_ERROR: "Error creado línea con Id='$1' en la librería gráfica Psi",
    FACTORY_NEW_CONNECTOR_ERROR: "Error creado línea para conector con Id='$1' en la librería gráfica Psi",
    FACTORY_EXECUTE_MAKE_ERROR: "No se encontro registrado el MakeId='$1' en la librería gráfica Psi",
    FACTORY_NEW_ICON_ERROR: "Error creado ícono con Id='$1' en la librería gráfica Psi",
    LIST_ITEM_ERROR: "Error en itám '$1' con valor: $2",
    COMMAND_ERROR_DEFINE_ATTR: "Error definición de comando $1='$2' en elemento con identificador '$3'",
    BIND_GRAPHS_ERROR: "Error en Elemento Gráfico Psi de enlace de evento $1='$2' en elemento con identificador '$3'. Detalle: $4",
    BIND_LINE_ERROR: "Error en Línea Psi definición de enlace de evento $1='$2' en elemento con identificador '$3'. Detalle: $4",
    SVG_ERROR: "No se ha definido SVG",
    PATHSEG_CURVETO_CUBIC_ABS_ERROR: "Error en Línea Curva de Bázier Psi, identificador '$1'. Primer punto indefinido",
    CREATE_CONNECTION: "Error en Elemento Gráfico Psi '$1', conexión de bordes Psi con identificador '$2' no definido"
  }
}; 
var GLPSI_MAP = { 
  ES: { 
    VALIDATE_DIGITS: "El atributo '$1' debe ser un dígito numárico",
    GEOMETRY_NOT_SEGMENT: "Error en determinar si es paralela o no un segmento",
    FACTORY_NEW_SHAPE_ERROR: "No se encontro registrado el ShapeId='$1' en la librería gráfica Psi",
    FACTORY_NEW_CONTAINERS_ERROR: "No se encontro registrado el ContainerId='$1' en la librería gráfica Psi",
    FACTORY_NEW_LISTS_ERROR: "No se encontro registrado el ListId='$1' en la librería gráfica Psi",
    FACTORY_NEW_LINE_ERROR: "Error creado línea con Id='$1' en la librería gráfica Psi",
    FACTORY_NEW_CONNECTOR_ERROR: "Error creado línea para conector con Id='$1' en la librería gráfica Psi",
    FACTORY_EXECUTE_MAKE_ERROR: "No se encontro registrado el MakeId='$1' en la librería gráfica Psi",
    FACTORY_NEW_ICON_ERROR: "Error creado ícono con Id='$1' en la librería gráfica Psi",
    LIST_ITEM_ERROR: "Error en itám '$1' con valor: $2",
    COMMAND_ERROR_DEFINE_ATTR: "Error definición de comando $1='$2' en elemento con identificador '$3'",
    BIND_GRAPHS_ERROR: "Error en Elemento Gráfico Psi de enlace de evento $1='$2' en elemento con identificador '$3'. Detalle: $4",
    BIND_LINE_ERROR: "Error en Línea Psi definición de enlace de evento $1='$2' en elemento con identificador '$3'. Detalle: $4",
    SVG_ERROR: "No se ha definido SVG",
    PATHSEG_CURVETO_CUBIC_ABS_ERROR: "Error en Línea Curva de Bázier Psi, identificador '$1'. Primer punto indefinido",
    CREATE_CONNECTION: "Error en Elemento Gráfico Psi '$1', conexión de bordes Psi con identificador '$2' no definido"
  }
};//* Register texts PsiXML
if (PsiOut.console.debug) GLPSI_SHORT_MAP = GLPSI_MAP;
PsiText.registerSet("GLPSI", PsiOut.console.debug ? GLPSI_MAP : GLPSI_SHORT_MAP);
PsiText.registerSet("GLPSI_MAP", GLPSI_MAP);
//Send type
var GLPSI_SEND = [];

/*-----------------------------------------------------
*=Object[icon]: Icon
* Description: Funciones y variables para un Punto Psi.
*-----------------------------------------------------*/
var Icon = {
  //Properties   
  //Property: map. Description: Lista de íconos  
  map: {},
  //Methods   
  //Method: add. Description: Adicionar elemento gráfico Psi que tiene definido un ícono  
  add: function(name, psielement){ 
  try { 
    this.map[name] = psielement.icon;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"add", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: create. Description: Crear un ícono de un elemento gráfico Psi  
  create: function(name, symbols, dimension){ 
  try { 
    if (this.map[name]) 
      return this.map[name].create(symbols, dimension);
    throw new PsiError("GLPSI.FACTORY_NEW_ICON_ERROR", [name], [this, arguments]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  }
};   

/*-----------------------------------------------------
*=Enum[geometry_type]: GeometryType
* Description: Tipo de figura geomátrica Psi
*-----------------------------------------------------*/
var GeometryType = {   
  Point: 'point',  
  Points: 'points',  
  Segment: 'segment'
};   

/*-----------------------------------------------------
*=Component[geometry]: Geometry
* Description: Geometría SVG de punto, línea, polígono, circulo, elipse, etc.
*-----------------------------------------------------*/
var Geometry = (function () {  

  //Component Properties   
  //Property: type. Description: Tipo de geometría  
  var type = GeometryType.Point;


/*-----------------------------------------------------
*=Object[geometry_point]: Point
* Description: Funciones y variables para un Punto Psi.
*-----------------------------------------------------*/
var Point = {
  //Properties   
  //Property: enable. Description: Habilitar punto para distancias  
  enable: true,
  //Methods   
  //Method: set. Description: Modificar punto (x,y)  
  set: function(arg1, arg2){ 
  try { 
    switch (typeof arg1) {
      case "number": 
        this.x = arg1;
        this.y = arg2;
        break;
      default:
        this.x = arg1.x;
        this.y = arg1.y;
    }
    return this;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"set", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: minus. Description: Resta de dos puntos, el resultado queda en el primer punto  
  minus: function(arg1, arg2){ 
  try { 
    switch (typeof arg1) {
      case "number": 
        this.x -= arg1;
        this.y -= arg2;
        break;
      default:
        this.x -= arg1.x;
        this.y -= arg1.y;
    }
    return this;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minus", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: plus. Description: Suma de dos puntos, el resultado queda en el primer punto  
  plus: function(arg1, arg2){ 
  try { 
    switch (typeof arg1) {
      case "number": 
        this.x += arg1;
        this.y += arg2;
        break;
      default:
        this.x += arg1.x;
        this.y += arg1.y;
    }
    return this;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"plus", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: scalar. Description: Multiplicación por un escalar  
  scalar: function(value){ 
  try { 
    this.x *= value; 
    this.y *= value;
    return this;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"scalar", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: transform. Description: Aplicar matriz de transformación y crear un nuevo punto Psi  
  transform: function(ctm){ 
  try { 
    var pt = this.matrixTransform(ctm);
    //Adicionar funciones y propiedades del Object: Point
    pt.svg = this.svg;
    for(var name in Point)
      pt[name] = Point[name];
    pt.index = this.index;
    return pt;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"transform", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: clone. Description: Copiar punto con transformación si lo hay  
  clone: function(ctm){ 
  try { 
    var p = createPoint(this.svg, this.x, this.y, ctm);
    p.index = this.index;
    p.enable = this.enable;
    return p;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"clone", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: distance. Description: Distancia entre dos puntos SVG  
  distance: function(other){ 
  try { 
    if (!this.enable==true || !other.enable==true) 
      return Infinity;
    return parseFloat( Math.sqrt(Math.pow(this.x-other.x,2) + Math.pow(this.y-other.y,2)).toFixed(0) );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"distance", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: expression. Description: Definición de punto Psi dependiendo de un elemento SVG  
  expression: function(element, index, exp){ 
  try { 
    this.element = element;
    this.index = index;
    //Definir expresión x e y
    var s = exp.split(",");
    this.expX = s[0];
    this.expY = s[1];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"expression", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: refresh. Description: Refrescar punto dependiendo de la definición de punto Psi  
  refresh: function(){ 
  try { 
    var box = this.element.getBBox();
    this.x = eval( this.expX.replace(/W/g, box.width).replace(/H/g, box.height).replace(/X/g, box.x).replace(/Y/g, box.y) );
    this.y = eval( this.expY.replace(/W/g, box.width).replace(/H/g, box.height).replace(/X/g, box.x).replace(/Y/g, box.y) );
    return this;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: minPoint. Description: Punto y distancia minima a otra figura geomátrica Psi  
  minPoint: function(other){ 
  try { 
    if (other.type==GeometryType.Point)
      return {point: other, distance: this.distance(other)};
    return other.minPoint(other);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: min. Description: Puntos y distancia minima entre el punto y cualquier figura geomátrica Psi  
  min: function(other){ 
  try { 
    var minp = this.minPoint(other);
    return {from: this, to: minp.point, distance: minp.distance};
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"min", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: round. Description: Redondear x,y  
  round: function(){ 
  try { 
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"round", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: tostr. Description: Convertir a cadena de caracteres con formato 'x y'  
  tostr: function(){ 
  try { 
    return this.x+" "+this.y;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"tostr", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  }
};   

/*-----------------------------------------------------
*=Class[geometry_point_list]: PointList
* Description: Lista de puntos Psi
*-----------------------------------------------------*/
function PointList (svg) {
  //Properties   
  //Property: svg. Description: Apuntador a diagrama  
  this.svg = svg;  
  //Property: points. Description: Lista de puntos  
  this.points = new Array();  
  //Property: length. Description: Número de puntos  
  this.length = 0;  
  //Property: type. Description: GeometryType.Points  
  this.type = GeometryType.Points; 
}; 
//* Definitions Events and Methods
PointList.methods({
  //Methods   
  //Method: _enabledisablePoints. Description: Habilitar Inhabilitar puntos  
  _enabledisablePoints: function(list, enable){ 
    if (list) 
      for(var i=0; i<list.length; i++){
        var j = list[i];
        if (0<=j && j<this.points.length)
          this.points[j].enable = enable;
      }
    else 
      for(var i=0; i<this.points.length; i++)
        this.points[i].enable = enable;
   },  
  //Method: get. Description: Devuelve el punto Psi especificado de la lista  
  get: function(index){ 
  try { 
    return index>=0 && index<this.length ? this.points[index] : null; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"get", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: add. Description: Adiciona un nuevo punto Psi en la lista  
  add: function(newPoint){ 
  try { 
    this.length = this.points.push(newPoint);
    return this.length; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"add", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: enablePoints. Description: Habilitar Puntos  
  enablePoints: function(list){ 
  try { 
    this._enabledisablePoints(list, true);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"enablePoints", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: disablePoints. Description: Inhabilitar puntos  
  disablePoints: function(list){ 
  try { 
    this._enabledisablePoints(list, false);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"disablePoints", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: clone. Description: Clonar lista de puntos y transformalor con ctm  
  clone: function(ctm){ 
  try { 
    var list = new PointList(this.svg);
    for(var i in this.points)
      list.add(this.points[i].clone(ctm));
    return list;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"clone", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: minPoint. Description: Devuelve el punto y la distancia mínimo con la lista de puntos  
  minPoint: function(Q){ 
  try { 
    var p = this.points[0], 
        dm = p.distance(Q);
    for(var i=1; i<this.points.length; i++) {
      var d = this.points[i].distance(Q);
      if (d<dm){
        dm = d;
        p = this.points[i];
      }
    }
    return {point: p, distance: dm};
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: min. Description: Devuelve los punto Psi y la menor distancia de otro elemento gráfico Psi  
  min: function(other){ 
  try { 
    var min = {from: null, to: null, distance: Infinity};
    for(var i=0; i<this.points.length; i++){
      var q = this.points[i],
          minp = other.minPoint(q);
      if (minp.distance<min.distance){
        min.from = q;
        min.to = minp.point;
        min.distance = minp.distance;
      }
    }
    return min;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"min", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "PointList"; }
});

/*-----------------------------------------------------
*=Class[geometry_segment]: Segment
* Description: Define el segmento de recta Psi a partir de dos puntos Psi mediante su ecuación vectorial
*-----------------------------------------------------*/
function Segment (svg, A, B, index) {
  //Properties   
  //Property: svg. Description: Apuntador a diagrama  
  this.svg = svg;  
  //Property: A. Description: Punto A  
  this.A = createPoint(svg,A?A.x:0, A?A.y:0);  
  //Property: B. Description: Punto B  
  this.B = createPoint(svg,B?B.x:0, B?B.y:0);  
  //Property: V. Description: Vector  
  this.V = createPoint(svg,A&&B?B.x-A.x:0, A&&B?B.y-A.y:0);  
  //Property: index. Description: Indice de punto  
  this.index = index;  
  //Property: type. Description: GeometryType.Segment  
  this.type = GeometryType.Segment; 
}; 
//* Definitions Events and Methods
Segment.methods({
  //Methods   
  //Method: set. Description: Modificar puntos de la línea Psi  
  set: function(x1,y1, x2,y2){ 
  try { 
    this.A.set(x1,y1);
    this.B.set(x2,y2);
    this.V.set(this.B).minus(this.A);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"set", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: clone. Description: Clonar segmento de recta y transformarla  
  clone: function(ctm){ 
  try { 
    return new Segment(this.svg, this.A.clone(ctm), this.B.clone(ctm), this.index);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"clone", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getPoint. Description: Obtiene un punto Psi a partir de su ecuación vectorial  
  getPoint: function(k){ 
  try { 
    var point = createPoint(this.svg, this.A.x+k*this.V.x, this.A.y+k*this.V.y);
    point.index = this.index+":"+k;
    return point;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: length. Description: Longitud del segmento  
  length: function(){ 
  try { 
    return this.A.distance(this.B);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"length", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: isParallel. Description: Determina si dos segmentos son paralelos  
  isParallel: function(L){ 
  try { 
    if (L.type!=GeometryType.Segment)
      throw new PsiError("GLPSI.GEOMETRY_NOT_SEGMENT", [], [this]);
    return (this.V.y==0 && L.V.y==0) || this.V.x/this.V.y==L.V.x/L.V.y;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"isParallel", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: perpendicular. Description: Segmento de recta Psi perpendicular desde un punto Q  
  perpendicular: function(Q){ 
  try { 
    var V = createPoint(this.svg, -this.V.y, this.V.x);
    return createSegment(this.svg, Q, V.plus(Q), this.index);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"perpendicular", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: kPerpendicular. Description: Posición k perpendicular al segmento de recta Psi  
  kPerpendicular: function(Q){ 
  try { 
    var L = this.perpendicular(Q);
    return ((L.A.x*L.V.y-L.A.y*L.V.x-this.A.x*L.V.y+this.A.y*L.V.x) / (this.V.x*L.V.y-this.V.y*L.V.x)).toFixed(3);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"kPerpendicular", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: intersect. Description: Encontrar intersección entre dos segmentos de recta Psi  
  intersect: function(other){ 
  try { 
    var x1 = this.A.x, y1 = this.A.y, 
        x2 = this.B.x, y2 = this.B.y,
        a1 = other.A.x, b1 = other.A.y, 
        a2 = other.B.x, b2 = other.B.y,
        x = -Math.round((-(a2 * b1 - a1 * b2) * (x1 - x2) + (a1 - a2) * (x2 * y1 - x1 * y2)) / (-(-b1 + b2) * (x1 - x2) + (a1 - a2) * (-y1 + y2))),
        y = -Math.round((a2 * b1 * y1 - a1 * b2 * y1 - b1 * x2 * y1 + b2 * x2 * y1 - a2 * b1 * y2 + a1 * b2 * y2 + b1 * x1 * y2 - b2 * x1 * y2) / (-b1 * x1 + b2 * x1 + b1 * x2 - b2 * x2 + a1 * y1 - a2 * y1 - a1 * y2 + a2 * y2));
    return {
      point: createPoint(this.svg, x, y),
      it: (x1 < x2 && x1 < x && x < x2) || (x2 < x1 && x2 < x && x < x1)
    };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"intersect", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: minPoint. Description: Devuelve el punto y la distancia mínima de un punto 'current' al segmento de recta Psi  
  minPoint: function(Q){ 
  try { 
    var k = this.kPerpendicular(Q),
        kmin = k<0 ? 0 : k>1 ? 1 : k,
        p = this.getPoint(kmin);
    return {point: p, distance: p.distance(Q), k: kmin};
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: min. Description: Devuelve los puntos y la distancia minima entre el segmento y la figura gráfica Psi  
  min: function(other){ 
  try { 
    switch(other.type){
      case GeometryType.Points: 
        var minNew = other.min(this);
        return {from: minNew.to, to: minNew.from, distance: minNew.distance};
      case GeometryType.Segment:
        var p0 = this.getPoint(0), p1 = this.getPoint(1),
            q0 = other.getPoint(0), q1 = other.getPoint(1),
            result = null;
        if (this.isParallel(other)) {
          var k0 = this.kPerpendicular(q0),
              k1 = this.kPerpendicular(q1);
          if (k1<k0){
            aux = k1; k1 = k0; k0 = aux;
            aux = q1; q1 = q0; q0 = aux;
          }
          if (k0>1)
            result = {from: p1, to: q0};
          else if (k1<0)
            result = {from: p0, to: q1};
          else if (0<=k0 && k1<=1) 
            result = {from: this.getPoint((k1-k0)/2), to: other.getPoint(0.5)};
          else if (k0<0 && 1<k1)
            result = {from: this.getPoint(0.5), to: other.minPoint( this.getPoint(0.5) ).point};
          else if (k0<0 && k1<=1)
            result = {from: this.getPoint( k1/2 ), to: other.minPoint( this.getPoint(k1/2) ).point};
          else
            result = {from: this.getPoint( (1-k0)/2 ), to: other.minPoint( this.getPoint((1-k0)/2) ).point}; 
        }
        else {
          var pi = this.intersect(other),
              k = this.kPerpendicular(pi.point),
              ko = other.kPerpendicular(pi.point);
          if (pi.it)
            result = {from: this.getPoint(k), to: other.getPoint(ko)};
          else{
            if (ko>1) 
              result = {from: this.minPoint(q1).point, to: q1};
            else if(ko<0) 
              result = {from: this.minPoint(q0).point, to: q0};
            else {
              if (k>1) result = {from: p1, to: other.minPoint(p1).point};
              else result = {from: p0, to: other.minPoint(p0).point};
            }
          }
        }
        return $.extend(result, {distance: result.from.distance(result.to)} );
    }
    return null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"min", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: transform. Description: Aplicar matriz de transformación y crear un nuevo punto Psi  
  transform: function(ctm){ 
  try { 
    return createSegment(this.svg, this.A.transform(ctm), this.B.transform(ctm), this.index);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"transform", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: distance. Description: Distancia entre dos puntos SVG  
  distance: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"distance", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: expression. Description: Definición de segmento de recta Psi dependiendo de un elemento SVG  
  expression: function(element, index, source){ 
  try { 
    this.element = element;
    this.index = index;
    var exp = source.split(";");
    this.A.expression(element, index-"A", exp[0]);
    this.B.expression(element, index-"B", exp[1]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"expression", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Refrescar segmento de recta dependiendo de la definición de segmento de recta Psi  
  refresh: function(arg){ 
  try { 
    this.A.refresh();
    this.B.refresh();
    this.V.set(this.B).minus(this.A);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Segment"; }
});


  //Component Methods   
  //Method: planeCTM. Description: Obtener la matriz sobre un plan o conteiner determinado  
  function planeCTM(element, plane){ 
  try { 
    var ctm = element.getCTM();
    if (plane){
      var cid = $(plane).attr("id"),
          next = element._parent;
      while(next!=null && $(next).attr("id")!=cid){
        ctm = ctm.multiply(next.getCTM());
        next = next._parent;
      }
    }
    return ctm;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"planeCTM", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: createPoint. Description: Crear punto Psi  
  function createPoint(svg, arg1, arg2, arg3){ 
  try { 
    var p = svg.createSVGPoint();
    switch (typeof arg1) {
      case "number": 
        p.x = arg1;
        p.y = arg2;
        if (arg3)
          p = p.matrixTransform(arg3);
        break;
      case "string":
        var s = arg1.split(",");
        p.x = parseFloat(s[0]);
        p.y = parseFloat(s[1]);
        if (arg2)
          p = p.matrixTransform(arg2);
        break;
      default:
        p.x = arg1.x;
        p.y = arg1.y;
        if (arg2)
          p = p.matrixTransform(arg2);
    }
    
    //Adicionar funciones y propiedades del Object: Point
    p.svg = svg;
    for(var name in Point)
      p[name] = Point[name];
    return p;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: createSegment. Description: Crear un segmento de recta Psi  
  function createSegment(svg, A, B, index){ 
  try { 
    return new Segment(svg, A, B, index);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createSegment", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: createPointList. Description: Crear lista de punto Psi  
  function createPointList(svg){ 
  try { 
    return new PointList(svg);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createPointList", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };


/*-----------------------------------------------------
* Component Definition: Geometry  
*-----------------------------------------------------*/
return {
  //Content 
  PointList: PointList, //* Type: Class
  Segment: Segment, //* Type: Class
  //Properties 
  type: type,
  //Methods 
  planeCTM: planeCTM,
  createPoint: createPoint,
  createSegment: createSegment,
  createPointList: createPointList,
  toString: function() { return "Geometry"; }
};
})(); 

/*-----------------------------------------------------
*=Class[script]: Script
* Description: Adiciona ejecuta un JavaScript Psi. Tiene como parámetros la librería gráfica y el contexto
*-----------------------------------------------------*/
function Script () {
  //Properties  
};
//Inheritance
Script.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Script.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Ejecuta un Script Psi  
  onInit: function(){ 
  try { 
    var executeScript = new Function("graphLibrary", "context", this.text());
    executeScript(this, this.context); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Script"; }
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
    this.alias = this.root.alias+"."+this.id();
    PsiData.function.register(this.alias, new Function("self", "context", "options", $(this._ref).text()));
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "LoadFunction"; }
});

/*-----------------------------------------------------
*=Class[source_svg]: SourceSVG
* Description: Define un SVG para un elemento Psi.
*-----------------------------------------------------*/
function SourceSVG () {
  //Properties   
  //Property: sources. Description: Fuente SVG  
  this.sources = null; 
};
//Inheritance
SourceSVG.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
SourceSVG.methods({
  //Methods   
  //Method: cloneSVG. Description: Hace una copia del elemento o elementos de la fuente  
  cloneSVG: function(){ 
    return $(this.svg).children().clone(true);
   },
  //Events   
  //Event: onInit. Description: Obtiene el documento SGV de la fuente  
  onInit: function(){ 
  try { 
    // Obtener SVG de la definición 
    var url = this.attr("url")
    this.svg = url!=null ? PsiXML.loadXMLSync(url).documentElement : $(this._ref).children("svg").get(0);
    
    //Validar que la fuente no sea nula
    if (this.svg==null) 
      throw new PsiError("GLPSI.SVG_ERROR", [this.attr("url")], [this]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "SourceSVG"; }
});

/*-----------------------------------------------------
*=Class[defs]: Defs
* Description: Define elementos SVG: estilos, markers, símbolos, etc.
*-----------------------------------------------------*/
function Defs () {
  //Properties   
  //Property: sources. Description: Lista de definiciones  
  this.sources = {}; 
};
//Inheritance
Defs.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Defs.methods({
  //Methods   
  //Method: appendTo. Description: Adicionar Defs al administrador del diagrama Psi  
  appendTo: function(svgroot){ 
  try { 
    for (var id in this.sources) {
      var source = this.sources[id],
          defsId = $(source.svg).find("defs:first").attr("id"),
          defs = $(svgroot).find("defs[id="+defsId+"]");
      if (defs.length==0) {
        var def = source.cloneSVG(); 
        $(svgroot).prepend(def);
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"appendTo", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getSymbol. Description: Obtener 'symbol' de la lista de definiciones  
  getSymbol: function(symbolId){ 
  try { 
    for (var id in this.sources) {
      var source = this.sources[id],
          symbol = $(source.svg).find("symbol[id="+symbolId+"]");
      if (symbol.length==1) 
        return symbol.clone();
    }
    return null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getSymbol", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Registrar definición en PsiData  
  onInit: function(){ 
  try { 
    //Registrar en PsiData si tiene id
    if (this.hasAttr("id"))
      PsiData.defs.register(this.id(), this);
    
    //Obtener definición del PsiData
    if (this.hasAttr("include")) {
      var includes = this.attr("include").split(";");
      for(var i in includes) {
        var key = includes[i];
        if (PsiData.defs.exist(key))
          $.extend(this.sources, PsiData.defs[key].sources);
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Defs"; }
});

/*-----------------------------------------------------
*=Class[icon_svg]: IconSVG
* Description: Define un ícono SVG para un elemento Psi.
*-----------------------------------------------------*/
function IconSVG () {
  //Properties   
  //Property: sources. Description: Fuente SVG  
  this.sources = null; 
};
//Inheritance
IconSVG.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
IconSVG.methods({
  //Methods   
  //Method: create. Description: Crea un ícono SVG  
  create: function(symbols, dimension){ 
  try { 
    var icon = $(this.svg).clone(true);
    if (this.root.defs && symbols) {
      var defs = icon.find("defs").length==1 ? icon.find("defs"): $(icon.get(0).ownerDocument.createElement("defs")).prependTo(icon);
      for(var key in symbols)
        if (symbols[key]!=null){
          var symbol = this.root.defs.getSymbol(symbols[key]);
          if (symbol) {
            if (!defs.is("#"+symbols[key]))
              defs.prepend(symbol);
            var use = icon.find("use[key="+key+"]").get(0);
            if (use)
              use.href.baseVal = "#"+symbols[key];
          }
        }
    }
    if (dimension)
      icon.attr(dimension);
    return icon.get(0);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Obtiene el documento SGV de la fuente  
  onInit: function(){ 
  try { 
    // Obtener SVG de la definición 
    var url = this.attr("url")
    this.svg = url!=null ? PsiXML.loadXMLSync(url).documentElement : $(this._ref).children("svg").get(0);
    
    //Validar que la fuente no sea nula
    if (this.svg==null) 
      throw new PsiError("GLPSI.SVG_ERROR", [this.attr("url")], [this]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "IconSVG"; }
});

/*-----------------------------------------------------
*=Class[text]: Text
* Description: Define un elemento texto.
*-----------------------------------------------------*/
function Text () {
  //Properties  
};
//Inheritance
Text.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Text.methods({
  //Methods 
  //Events 
  toString: function() { return "Text"; }
});

/*-----------------------------------------------------
*=Class[make]: Make
* Description: Herramienta para modificar, repintar, adicionar, elementos SVG a los elementos Psi.
*-----------------------------------------------------*/
function Make () {
  //Properties  
};
//Inheritance
Make.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Make.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Obtener mapa de opciones  
  onInit: function(){ 
  try { 
    //Obtener mapa de opciones por defecto
    var options = {};
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i];
      if (attr.name!="id") options[attr.name] = attr.value;
    }
    //Crear función de definición
    this.alias = this.root.alias+"."+this.id();
    PsiData.make.register(this.alias, this.text(), options);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Make"; }
});

/*-----------------------------------------------------
*=Class[settings]: Settings
* Description: Define los parámetros de un contenedor de figuras SVG
*-----------------------------------------------------*/
function Settings () {
  //Properties  
};
//Inheritance
Settings.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Settings.methods({
  //Methods   
  //Method: get. Description: Obtener mapa de ajustes de parámetros  
  get: function(){ 
    return this._map;
   },
  //Events   
  //Event: onInit. Description: Inicializar mapa de parámetros  
  onInit: function(key){ 
  try { 
    this._map = {};
    if (this._ref)
      for(var i=0; i<this._ref.attributes.length; i++){
        var attr = this._ref.attributes[i]; 
        this._map[attr.name] = this.attr(attr.name);
      }
    var def = this._def ? this._def : PsiXML.LanguagePsi.get("GLPsi").elements[key]; 
    for(var name in def.attributes) 
      if (this._map[name]==null)
        this._map[name] = def.attributes[name].getDefault(this.tag);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Settings"; }
});

/*-----------------------------------------------------
*=Class[events]: Events
* Description: Definición de enlace de eventos a un elemento gráfico Psi.
*-----------------------------------------------------*/
function Events () {
  //Properties   
  //Property: _map. Description: {}  
  this._map = {}; 
};
//Inheritance
Events.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Events.methods({
  //Methods   
  //Method: getMap. Description: Obtener mapa de enlaces  
  getMap: function(){ 
    return this._map;
   },  
  //Method: get. Description: Obtener un enlace  
  get: function(name){ 
    return this._map[name];
   },
  //Events   
  //Event: onInit. Description: Inicializar mapa de enlaces para elementos gráficos Psi  
  onInit: function(){ 
  try { 
    for (var i=0; i<this._ref.attributes.length; i++) {
      var attr = this._ref.attributes[i],
          div = attr.value.lastIndexOf("|");
      this._map[attr.name] = {
        selector: div>0 ? attr.value.substr(0,div) : attr.value,
        event: div>0 ? attr.value.substr(div+1) : null
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Events"; }
});

/*-----------------------------------------------------
*=Class[commands]: Commands
* Description: Definición de commandos a eventos de click a un elemento gráfico Psi. Definición: [selector '|' event ':' command]
*-----------------------------------------------------*/
function Commands () {
  //Properties   
  //Property: _map. Description: Mapa de comandos isponibles  
  this._map = {}; 
};
//Inheritance
Commands.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Commands.methods({
  //Methods   
  //Method: bind. Description: Enlazar mapa de commados  
  bind: function(parent, options, context){ 
  try { 
    for (var name in this._map){
      var item = this._map[name];
      $(item.selector, parent)
        .bind(item.event, function(event){
          PsiData.command[this._command](this, this._parent, this._options, this._context, event);
          event.stopPropagation();
        })
        .each(function(){
          this._command = name;
          this._parent = parent;
          this._context = context;
          this._options = options;
        })
    } 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"bind", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar mapa de commands para elementos gráficos Psi.  
  onInit: function(){ 
  try { 
    for (var i=0; i<this._ref.attributes.length; i++) {
      var attr = this._ref.attributes[i],
          div = attr.value.lastIndexOf("|");
      if (div>0)
        this._map[attr.name] = { selector: attr.value.substr(0,div), event: attr.value.substr(div+1) };
      else
        new PsiWarning("GLPSI.COMMAND_ERROR_DEFINE_ATTR", [attr.name, attr.value, this.parent.id()], [this]);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Commands"; }
});

/*-----------------------------------------------------
*=Class[glbase]: GLBase
* Description: Elemento gráfico base para el manejo de exceptiones dentro de la definición de un elemento gráfico Psi
*-----------------------------------------------------*/
function GLBase () {
  //Properties  
};
//Inheritance
GLBase.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
GLBase.methods({
  //Methods   
  //Method: _createReferences. Description: Crear referencias entre DPsi->GLPsi, DPsi<->DOM, DPsi<->SVG y SVG<->DOM  
  _createReferences: function(element, parent, ref){ 
    element._lib = this;
    element._parent = parent;
    if (ref) {
      element._ref = ref;
      ref._lib = this;
    }
   },  
  //Method: _createAttributes. Description: Crear atributos de configuración  
  _createAttributes: function(element, cssclass, type, graph){ 
    $(element).addClass(cssclass);
    $(element).attr({
      "type": type,
      "graph": graph
    });
   },  
  //Method: createTransform. Description: Crea elementos de translación, rotación y escala  
  createTransform: function(graph, settings, ref){ 
  try { 
    //Definir traslación del elemento gráfico Psi
    var tt = graph.ownerSVGElement.createSVGTransform();
    graph.transform.baseVal.appendItem(tt);
    tt.setTranslate(settings && settings.x ? settings.x : 0, settings && settings.y ? settings.y : 0);
    graph._translate = tt;
    
    //Definir escala del elemento gráfico Psi
    var ts = graph.ownerSVGElement.createSVGTransform();
    graph.transform.baseVal.appendItem(ts);
    ts.setScale(settings && settings.sx ? settings.sx : 1, settings && settings.sy ? settings.sy : 1);
    graph._scale = ts;
    
    //Definir escala del elemento gráfico Psi
    var tr = graph.ownerSVGElement.createSVGTransform(), box = graph.getBBox();
    graph.transform.baseVal.appendItem(tr);
    tr.setRotate(Math.round(settings && settings.angle ? settings.angle : 0), box.width/2, box.height/2); 
    graph._rotate = tr;
    
    //Adicionar a elemento del referencia
    if (ref) {
      ref._translate = tt;
      ref._scale = ts;
      ref._rotate = tr;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createTransform", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "GLBase"; }
});

/*-----------------------------------------------------
*=Component[connection_edge]: ConnectionEdge
* Description: Definición de conexión de elementos Psi
*-----------------------------------------------------*/
var ConnectionEdge = (function () {  

  //Component Properties 


/*-----------------------------------------------------
*=Class[connection_define]: ConnectionDefine
* Description: Define bordes de conexión para elementos Psi
*-----------------------------------------------------*/
function ConnectionDefine () {
  //Properties   
  //Property: edges. Description: Mapa de dordes de conexión Psi  
  this.edges = {}; 
};
//Inheritance
ConnectionDefine.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
ConnectionDefine.methods({
  //Methods   
  //Method: create. Description: Crea un borde de conexión Psi para un elemento Psi  
  create: function(element, svggen, ref){ 
  try { 
    var conn = new Connection(element, svggen, this, ref);
    //Crear lista de borde de conexiones Psi
    for(var id in this.edges)
      conn.edges.add( this.edges[id].create(id, conn, svggen, ref) );
    return conn; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Registrar la conexión de bordes Psi a la lista de conexiones  
  onInit: function(){ 
  try { 
    PsiData.connection.register(this.id(), this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "ConnectionDefine"; }
});

/*-----------------------------------------------------
*=Class[edge_define]: EdgeDefine
* Description: Define un borde de conexión para elementos Psi
*-----------------------------------------------------*/
function EdgeDefine () {
  //Properties  
};
//Inheritance
EdgeDefine.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
EdgeDefine.methods({
  //Methods   
  //Method: create. Description: Crea un borde de conexión Psi según el tipo definido  
  create: function(index, parent, svggen, ref){ 
  try { 
    var element = this.attr("selector") ? $(this.attr("selector"), parent.element).get(0) : parent.element;   
    switch(this.attr("type")){
      case EdgeType.Points:
        return element ? new PointsEdge(index, parent, element, svggen, this, ref, this.attr("source")) : null;
      case EdgeType.Segment:
        return element ? new SegmentEdge(index, parent, element, svggen, this, ref, this.attr("source")) : null;
    } 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Establecer tipo de borde de conexión  
  onInit: function(){ 
  try { 
    switch(this.attr("type")){
      case EdgeType.Points:
        this.radius = this.attr("r") ? parseFloat(this.attr("r")) : 4;
        break;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "EdgeDefine"; }
});

/*-----------------------------------------------------
*=Class[distances]: Distances
* Description: Lista de puntos de distancia Psi
*-----------------------------------------------------*/
function Distances () {
  //Properties   
  //Property: from. Description: Punto inicial  
  this.from = null;  
  //Property: to. Description: Punto final  
  this.to = null;  
  //Property: distance. Description: distancis entre los puntos  
  this.distance = Infinity;  
  //Property: map. Description: Mapa de distancia de puntos  
  this.map = {};  
  //Property: order. Description: Arreglo para el orden de puntos por distancia  
  this.order = new Array(); 
}; 
//* Definitions Events and Methods
Distances.methods({
  //Methods   
  //Method: add. Description: Adiciona un nuevo punto Psi y determinar si es el menor  
  add: function(from, to){ 
  try { 
    var d = from.distance(to);
    
    //Adicionar a un grupo de elementos
    if (this.map[d]==null) {
      this.map[d] = new Array();
      this.order.push(d);
    };
    this.map[d].push({from: from, to: to, distance: d});
    //Determinar nuevo punto cercano
    if (d<this.distance){
      this.distance = d;
      this.from = from;
      this.to = to;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"add", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: middle. Description: Obtener punto medio si hay mas de un elemento don mínima distancia  
  middle: function(){ 
    var array = this.map[this.distance],
        index = Math.floor( array.length/2 );
    return array[index];
   },  
  //Method: minArray. Description: Obtener un arreglo con los n primeras distancias mínimas  
  minArray: function(n){ 
  try { 
    var result = new Array();
    this.order.sort(function(a,b){return a-b});
    for(var i in this.order) {
      var item = this.map[this.order[i]],
          index = Math.floor( item.length/2 ),
          step = 1;
      result.push(item[index]);
      while(index-step>=0 || index+step<item.length){
        if (index-step>=0) result.push( item[index-step] );
        if (result.length>=n) return result;
        if (index+step<item.length) result.push( item[index+step] );
        if (result.length>=n) return result;
        step++;
      }
      if (result.length>=n) break;
    }
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minArray", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Distances"; }
});

/*-----------------------------------------------------
*=Class[index]: Index
* Description: Lista de índices de conectores Psi
*-----------------------------------------------------*/
function Index (name, connection) {
  //Properties   
  //Property: name. Description: Nombre de índice  
  this.name = name;  
  //Property: connection. Description: Conexión Psi  
  this.connection = connection;  
  //Property: size. Description: Tamaño del índice  
  this.size = 0;  
  //Property: map. Description: Mapa de índices  
  this.map = {}; 
}; 
//* Definitions Events and Methods
Index.methods({
  //Methods   
  //Method: get. Description: Obtener un check  
  get: function(id){ 
    return this.map[id];
   },  
  //Method: add. Description: Adiciona un check  
  add: function(check){ 
    var id = check._ref.id();
    if (this.map[id]==null) {
      this.map[id] = check;
      this.size += 1;
    }
   },  
  //Method: remove. Description: Remueve un check  
  remove: function(id){ 
    if (this[id]) {
      delete this[id];
      this.size -= 1;
    }
   },  
  //Method: order. Description: Ordenar ascendentente por distancia los checks  
  order: function(){ 
    var result = new Array();
    for(var id in this.map)
      result.push(this.map[id]);
    result.sort(function(a,b){return a._ref.distanceStartEnd()-b._ref.distanceStartEnd()});
    return result;
   },
  //Events 
  toString: function() { return "Index"; }
});

/*-----------------------------------------------------
*=Class[checks]: Checks
* Description: Lista de índices de conectores Psi
*-----------------------------------------------------*/
function Checks (connection) {
  //Properties   
  //Property: connection. Description: Conección Psi  
  this.connection = connection;  
  //Property: map. Description: Mapa de puntos de chequeos psi  
  this.map = {};  
  //Property: indices. Description: Lista de índices  
  this.indices = {};  
  //Property: size. Description: TamaÃ±o de la lista de índices  
  this.size = 0; 
}; 
//* Definitions Events and Methods
Checks.methods({
  //Methods   
  //Method: add. Description: Adiciona un check  
  add: function(check){ 
  try { 
    if (check._ref && this.map[check.id]==null) {
      this.map[check.id] = check;
      this.size++;
      if (this.indices[check.index]==null)
        this.indices[check.index] = new Index(check.index, this.connection);
      this.indices[check.index].add(check);
      check.indexConn = check.index;
      check._connection = this.connection;
    } 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"add", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: remove. Description: Remueve un check  
  remove: function(check){ 
  try { 
    if (this.map[check.id]) {
      var index = this.indices[check.indexConn];
      index.remove(check._ref.id());
      if (index.size==0)
        delete this.indices[index.name];
      delete this.map[check.id];
      delete check.indexConn;
      this.size--;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"remove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: get. Description: Obtener un check  
  get: function(id){ 
    return this.map[id];
   },  
  //Method: modify. Description: Modifica los indices del check  
  modify: function(check){ 
  try { 
    if (this.map[check.id]){
      if (this.indices[check.indexConn] && this.indices[check.indexConn].map[check._ref.id()]) return;
      var index = this.indices[check.indexConn];
      if (index) {
        index.remove(check._ref.id());
        if (index.size==0)
          delete this.indices[index.name];
      }
      this.indices[check.index].add(check);
      check.indexConn = check.index;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"modify", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: duplicates. Description: Obtener duplicados de Index  
  duplicates: function(){ 
  try { 
    var result = new Array();
    for(var i in this.indices) {
      var index = this.indices[i];
      if (index.size>1) {
        for(var id in index.map){
          var arc = index.map[id]._ref;
          if (arc._lib.attr("duplicate")=="no" && !arc.itself)
            result.push(index.map[id]);  
        }
      }
    }
    return result.sort(function(a,b){
      return a._ref.distanceStartEnd()-b._ref.distanceStartEnd()
    });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"duplicates", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: find. Description: Buscar checks por tipo  
  find: function(type){ 
  try { 
    var result = new Array();
    
    //Buscar elementos
    for(var i in this.map) {
      var check = this.map[i];
      if (check.type==type) 
        result.push(check);
      else if (type==null)
        result.push(check);
      else 
        switch(type){
          case "itself": 
            if (check._ref.itself)
              result.push(check); 
            break;
        }
    }
    return result; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"find", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Refrescar la lista de checks  
  refresh: function(){ 
  try { 
    var svg = this.connection._svg;
    if (svg)  
      svg.setAttribute("transform", $(this.connection.element).attr("transform"));
    //Actualizar path de las lineas de los puntos de chequeo asociados
    for(var id in this.map) {
      this.map[id].refresh();
      this.map[id].setPath();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Checks"; }
});

/*-----------------------------------------------------
*=Class[connection]: Connection
* Description: Borde de conexión para un elemento Psi
*-----------------------------------------------------*/
function Connection (element, svggen, def, ref) {
  //Properties   
  //Property: _def. Description: Definición de elemento psi  
  this._def = def;  
  //Property: _ref. Description: Referencia a elemento psi  
  this._ref = ref;  
  //Property: element. Description: Elemento psi  
  this.element = element;  
  //Property: svggen. Description: Apuntador a diagrama  
  this.svggen = svggen;  
  //Property: edges. Description: Arreglo de bordes de conexión psi  
  this.edges = new Edges(this);  
  //Property: checks. Description: Arreglo de puntos de chequeo psi  
  this.checks = new Checks(this); 
}; 
//* Definitions Events and Methods
Connection.methods({
  //Methods   
  //Method: show. Description: Muestra los bordes de conexión Psi. Crea los diferentes bordes definidos y los visualiza sobre el elemento Psi  
  show: function(){ 
  try { 
    if (!this._svg) {
      var group = this.svggen.group();
      group.setAttribute("transform", $(this.element).attr("transform"));
      $(this.element).after(group);
      for(var id in this.edges.map)
        this.edges.map[id].show(group);
      this._svg = group;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"show", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: hide. Description: Elimina la visualización los bordes de conexión Psi  
  hide: function(){ 
    if (this._svg){ 
      $(this._svg).remove();
      this._svg = null;
    }
   },  
  //Method: getPositionDefault. Description: Obtener definición de punto por defecto  
  getPositionDefault: function(){ 
  try { 
    if (this._def.hasAttr("default")) 
      return this._def.attr("default");
    for(var i in this.edges.map) {
      var type = this.edges.map[i].type;
      return i+":"+(type==GeometryType.Points ? "0" : "0.5");
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getPositionDefault", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: isShowing. Description: Se está mostrando el borde de conexión Psi  
  isShowing: function(){ 
    return this._svg!=null;
   },  
  //Method: toggle. Description: Muestra/Oculta la visualización de los bordes de conexión Psi  
  toggle: function(){ 
    this[this._svg ? "hide":"show"]();
   },  
  //Method: refresh1. Description: Refresca la visualización de los bordes de conexión Psi si están visibles  
  refresh1: function(){ 
    this.edges.refresh();
    this.checks.refresh();
   },  
  //Method: getPoint. Description: Obtener punto de los bordes de conexión Psi  
  getPoint: function(position, plain){ 
    var s = position.split(":"),
        edge = this.edges.get(s[0]);
    if (edge) return edge.getPoint(s[1], plain);
    return null;
   },  
  //Method: minPoint. Description: Obtener el punto de distancia mínima a los bordes de conexión Psi  
  minPoint: function(Q, plane){ 
  try { 
    var minp = null;
    for(var id in this.edges.map){
      var edge = this.edges.get(id),
          pnew = edge.minPoint(Q, plane);
      if (minp==null || pnew.distance<minp.distance)
        minp = pnew;
    }
    return minp.point;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getArrayPoints. Description: Discretizar los bordes de conexión Psi en un arreglo  
  getArrayPoints: function(plane){ 
  try { 
    var result = new Array();
    //Concatenar todos los arreglos de los bordes de conexión
    for(var id in this.edges.map)
      result = result.concat( this.edges.get(id).getArrayPoints(plane) );
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getArrayPoints", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getDistances. Description: Obtener la lista de distancias de para un elemento Psi  
  getDistances: function(other, plane){ 
  try { 
    var selfArray = this.getArrayPoints(plane),
        otherArray = other.getArrayPoints(plane),
        distances = new Distances();
    
    for(var i=0; i<selfArray.length; i++){
      for(var j=0; j<otherArray.length; j++)
        distances.add(selfArray[i], otherArray[j]);
    }
    return distances;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getDistances", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: min. Description: Obtener el punto mínimo entre dos conexiones Psi  
  min: function(other, plane){ 
    var distances = this.getDistances(other, plane);
    return distances.middle();
   },  
  //Method: minArray. Description: Obtener la el arreglo de puntos mínimos entre dos conexiones Psi  
  minArray: function(other, plane, n){ 
  try { 
    var distances = this.getDistances(other, plane);
    return distances.minArray(n ? n : 20);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minArray", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: enablePoints. Description: Habilitar puntos de conexión de un borde de conexión Psi  
  enablePoints: function(key, list){ 
  try { 
    this.edges.get(key).source.enablePoints(list);
    if (this.isShowing()){
      this.hide();
      this.show();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"enablePoints", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: disablePoints. Description: Habilitar puntos de conexión de un borde de conexión Psi  
  disablePoints: function(key, list){ 
  try { 
    this.edges.get(key).source.disablePoints(list);
    if (this.isShowing()){
      this.hide();
      this.show();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"disablePoints", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Connection"; }
});

/*-----------------------------------------------------
*=Enum[edge_type]: EdgeType
* Description: Tipo de borde de conexión Psi
*-----------------------------------------------------*/
var EdgeType = {   
  Points: 'points',  
  Segment: 'segment',  
  Rectangle: 'rectangle',  
  Circle: 'circle'
};   

/*-----------------------------------------------------
*=Class[edges]: Edges
* Description: Lista de Bordes de conexión para un elemento Psi
*-----------------------------------------------------*/
function Edges (connection) {
  //Properties   
  //Property: connection. Description: Conección Psi  
  this.connection = connection;  
  //Property: map. Description: Mapa de bordes de conexión Psi  
  this.map = {};  
  //Property: size. Description: TamaÃ±o del mapa  
  this.size = 0; 
}; 
//* Definitions Events and Methods
Edges.methods({
  //Methods   
  //Method: add. Description: Adiciona un borde de conexión Psi  
  add: function(edge){ 
    if (edge)
      this.map[edge.index] = edge;
   },  
  //Method: remove. Description: Remueve un borde de conexión Psi  
  remove: function(edge){ 
    if (this.map[edge.index])
      delete this.map[edge.index];
   },  
  //Method: get. Description: Obtener un borde de conexión Psi  
  get: function(id){ 
    return this.map[id];
   },  
  //Method: refresh. Description: Refresca un borde de conexión Psi  
  refresh: function(id, source, element){ 
  try { 
    var edge = this.map[id];
    if (edge) {
      this.connection.hide();
      edge.refresh(source, element);
      this.connection.checks.refresh(); 
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refreshAll. Description: Refresca la lista de bordes de conexiones Psi  
  refreshAll: function(){ 
    for (var id in this.map) 
      this.refresh(id);
   },
  //Events 
  toString: function() { return "Edges"; }
});

/*-----------------------------------------------------
*=Class[edge]: Edge
* Description: Borde de conexión para un elemento Psi
*-----------------------------------------------------*/
function Edge (index, parent, element, svggen, def, ref) {
  //Properties   
  //Property: index. Description: Indice del borde de conexión  
  this.index = index;  
  //Property: parent. Description: Elemento padre  
  this.parent = parent;  
  //Property: element. Description: Elemento psi  
  this.element = element;  
  //Property: svggen. Description: Apuntador a diagrama  
  this.svggen = svggen;  
  //Property: _def. Description: Definición de elemento Psi  
  this._def = def;  
  //Property: _ref. Description: Referencia a elemento Psi  
  this._ref = ref; 
}; 
//* Definitions Events and Methods
Edge.methods({
  //Methods   
  //Method: init. Description: Inicializa conexión de borde Psi  
  init: function(index, parent, element, svggen, def, ref, source){ 
  try { 
    this.index = index;
    this.parent = parent;
    this.element = element;
    this.svggen = svggen;
    this._def = def;
    this._ref = ref;
    this._source = source;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getSource. Description: Obtener puntos sobre un plano dado  
  getSource: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getSource", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: show. Description: Mátodo abstracto de visualización de conexión de borde Psi  
  show: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"show", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Mátodo abstracto para refrescar/redefinir el borde de conexión Psi  
  refresh: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getPoint. Description: Mátodo abstracto para obtener punto del borde de conexión Psi  
  getPoint: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: minPoint. Description: Mátodo para obtener el punto y la distancia minima al borde de conexión Psi a un punto P  
  minPoint: function(point, plane){ 
  try { 
    var ctm = Geometry.planeCTM(this.parent.element, plane),
        src = this.source.clone(ctm); 
    return src.minPoint(point);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: min. Description: Mátodo para obtener los punto y la distancia minima antre dos bordes de conexión Psi  
  min: function(other, plane){ 
  try { 
    var ctm = Geometry.planeCTM(this.parent.element, plane),
        octm = Geometry.planeCTM(other.parent.element, plane),
        src = this.source.clone(ctm); 
    return src.min( other.source.clone(octm) );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"min", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Edge"; }
});

/*-----------------------------------------------------
*=Class[points_edge]: PointsEdge
* Description: Borde de conexión para un elemento Psi
*-----------------------------------------------------*/
function PointsEdge (index, parent, element, svggen, def, ref, source) {
  //Properties   
  //Property: source. Description: Lista de puntos Psi  
  this.source = this.initPoints(index, svggen, source, element);  
  //Property: type. Description: GeometryType.Points  
  this.type = GeometryType.Points; 
  //Initialize class
  this.init(index, parent, element, svggen, def, ref, source);
};
//Inheritance
PointsEdge.inherits(Edge); 
//* Definitions Events and Methods
PointsEdge.methods({
  //Methods   
  //Method: _pointsOnLine. Description: Obtiene n puntos sobre una línea entre p1 y p2  
  _pointsOnLine: function(list, p1, p2, n, start, end){ 
  try { 
    var vx = "("+p2[0]+"-"+p1[0]+")",   // (p1[0][0]=="-" ? "("+p1[0]+")" : p1[0]) 
        vy = "("+p2[1]+"-"+ p1[1] +")"; // (p1[1][0]=="-" ? "("+p1[1]+")" : p1[1])
    for (var k=0; k<=1; k+=1/n ) {
      var x = p1[0]+"+"+k.toFixed(3)+"*"+vx,
          y = p1[1]+"+"+k.toFixed(3)+"*"+vy;
      if (k<=0.01 && start==false) continue;
      if (k>=0.99 && end==false) continue;
      list.push(x+","+y);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_pointsOnLine", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _pointsOnEllipse. Description: Obtiene un número n de puntos sobre la elipse en el punto p, y radios rx y ry  
  _pointsOnEllipse: function(list, p, rx, ry, n){ 
  try { 
    for (var t=0; t<2*Math.PI; t+=2*Math.PI/n) {
      var x = p[0]+"+"+rx+"*Math.cos("+t.toFixed(3)+")",
          y = p[1]+"+"+ry+"*Math.sin("+t.toFixed(3)+")";
      list.push(x+","+y);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_pointsOnEllipse", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: initPoints. Description: Inicializa lista de puntos para el conexión Psi  
  initPoints: function(index, svggen, source, element){ 
  try { 
    var list = new Array(),
        points = Geometry.createPointList(svggen.root()),
        def = "CELKRS".indexOf(source[0])>=0 ? source.substr(1).split(";") : null;
    
    switch(source[0]){
      case "C": this._pointsOnEllipse(list, def[0].split(","), def[1], def[1], parseFloat(def[2])); break;
      case "E": this._pointsOnEllipse(list, def[0].split(","), def[1], def[2], parseFloat(def[3])); break;
      case "L": this._pointsOnLine(list, def[0].split(","), def[1].split(","), parseFloat(def[2])-1); break;
      case "K": this._pointsOnLine(list, def[0].split(","), def[1].split(","), parseFloat(def[2]), false, false); break;
      case "R":
        var p1 = def[0].split(","), p2 = def[1].split(","),
            n1 = parseFloat(def[2])-1, n2 = def[3]!=null ? parseFloat(def[3])-1 : n1;
        this._pointsOnLine(list, p1, [p2[0], p1[1]], n1);
        this._pointsOnLine(list, [p2[0], p1[1]], p2, n2, false);
        this._pointsOnLine(list, p2, [p1[0], p2[1]], n1, false);
        this._pointsOnLine(list, [p1[0], p2[1]], p1, n2, false, false);    
        break;
      case "S":
        var p1 = def[0].split(","), p2 = def[1].split(","),
            box = element.getBBox(),
            n1 = Math.floor( box.width / parseFloat(def[2]) )-1, 
            n2 = Math.floor( box.height / (def[3]!=null ? parseFloat(def[3]) : parseFloat(def[2])) )-1;
        this._pointsOnLine(list, p1, [p2[0], p1[1]], n1, false, false);
        this._pointsOnLine(list, [p2[0], p1[1]], p2, n2, false, false);
        this._pointsOnLine(list, p2, [p1[0], p2[1]], n1, false, false);
        this._pointsOnLine(list, [p1[0], p2[1]], p1, n2, false, false);    
        break;
      default: list = source.split(";"); break;
    }
    //Adicionar lista de puntos
    for (var i=0; i<list.length; i++){
      var point = Geometry.createPoint(svggen.root(), 0, 0);
      point.expression(element, index+":"+i, list[i]);
      point.refresh();
      points.add(point);
    }
    return points;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"initPoints", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getArrayPoints. Description: Obtener puntos de la conexión sobre un plano dado  
  getArrayPoints: function(plane){ 
  try { 
    var ctm = Geometry.planeCTM(this.parent.element, plane);
    return this.source.clone(ctm).points; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getArrayPoints", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: show. Description: Mátodo lista de puntos definidos en el conexión Psi  
  show: function(group){ 
  try { 
    //Crear lista de puntos con un circle SVG
    for (var i=0; i<this.source.length; i++){
      var point = this.source.get(i);
      if (point.enable)
      	this.svggen.circle(group, point.x, point.y, this._def.radius, {"class": this._def.attr("class")});
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"show", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Refresh la lista de puntos del borde de conexión Psi  
  refresh: function(source, selector){ 
  try { 
    //Acualizar _source y element
    if (source) this._source = source;
    if (selector) this.element = $(selector, this.parent.element).get(0);
    this.source = this.initPoints(this.index, this.svggen, this._source, this.element); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getPoint. Description: Obtener un punto de la lista de puntos Psi  
  getPoint: function(position, plane){ 
  try { 
    var point = this.source.get( parseInt(position) );
    return point ? point.transform( Geometry.planeCTM(this.parent.element, plane) ) : null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "PointsEdge"; }
});

/*-----------------------------------------------------
*=Class[segment_edge]: SegmentEdge
* Description: Borde de conexión para un elemento Psi
*-----------------------------------------------------*/
function SegmentEdge (index, parent, element, svggen, def, ref, source) {
  //Properties   
  //Property: source. Description: El segmento Psi  
  this.source = this.initSegment(index, svggen, source, element);  
  //Property: type. Description: GeometryType.Segment  
  this.type = GeometryType.Segment; 
  //Initialize class
  this.init(index, parent, element, svggen, def, ref, source);
};
//Inheritance
SegmentEdge.inherits(Edge); 
//* Definitions Events and Methods
SegmentEdge.methods({
  //Methods   
  //Method: initSegment. Description: Inicializa el segmento de recta para el conexión Psi  
  initSegment: function(index, svggen, source, element){ 
  try { 
    var segment = Geometry.createSegment(svggen.root());
    segment.expression(element, index, source);
    segment.refresh();
    return segment;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"initSegment", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: show. Description: Mátodo el segmento de recta definido en el conexión Psi  
  show: function(group){ 
    this.svggen.line(group, this.source.A.x,this.source.A.y, this.source.B.x, this.source.B.y, {"class": this._def.attr("class")});
   },  
  //Method: refresh. Description: Refresca/Redefine el segmento del borde de conexión Psi  
  refresh: function(source, selector){ 
  try { 
    //Acualizar _source y element
    if (source) this._source = source;
    if (selector) this.element = $(selector, this.parent.element).get(0);
    this.source = this.initSegment(this.index, this.svggen, this._source, this.element); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getArrayPoints. Description: Discretizar puntos de la conexión sobre un plano dado  
  getArrayPoints: function(plane){ 
  try { 
    var ctm = Geometry.planeCTM(this.parent.element, plane),
        segment = this.source.clone(ctm),
        delta = this.attr("discretize")/segment.length(),
        result = new Array();
    for(var k=0; k<0.999; k+=delta)
      result.push( segment.getPoint(k) );
    result.push( segment.getPoint(1) );
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getArrayPoints", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getPoint. Description: Obtener un punto del segmento de recta Psi  
  getPoint: function(position, plane){ 
    var point = this.source.getPoint( parseFloat(position) );
    return point ? point.transform( Geometry.planeCTM(this.parent.element, plane) ) : null;
   },
  //Events 
  toString: function() { return "SegmentEdge"; }
});


  //Component Methods 


/*-----------------------------------------------------
* Component Definition: ConnectionEdge  
*-----------------------------------------------------*/
return {
  //Content 
  ConnectionDefine: ConnectionDefine, //* Type: Class
  EdgeDefine: EdgeDefine, //* Type: Class
  Distances: Distances, //* Type: Class
  Index: Index, //* Type: Class
  Checks: Checks, //* Type: Class
  Connection: Connection, //* Type: Class
  EdgeType: EdgeType, //* Type: Enum
  Edges: Edges, //* Type: Class
  Edge: Edge, //* Type: Class
  PointsEdge: PointsEdge, //* Type: Class
  SegmentEdge: SegmentEdge, //* Type: Class
  //Properties 
  //Methods 
  toString: function() { return "ConnectionEdge"; }
};
})(); 

/*-----------------------------------------------------
*=Component[glgraph]: Graph
* Description: Lenguaje de definición de figuras, conectores, contenedores, text, etc.
*-----------------------------------------------------*/
var Graph = (function () {  

  //Component Properties   
  //Property: shapes. Description: Mapa de figuras  
  var shapes = {};  
  //Property: containers. Description: Mapa de contenedores  
  var containers = {};  
  //Property: lists. Description: Mapa de listas  
  var lists = {};


/*-----------------------------------------------------
*=Class[transform_graph]: TransformGraph
* Description: Enlace de eventos a un elemento gráfico Psi.
*-----------------------------------------------------*/
function TransformGraph (svggen, graph, ref) {
  //Properties   
  //Property: graph. Description: this._init(svggen, graph, ref)  
  this.graph = this._init(svggen, graph, ref); 
}; 
//* Definitions Events and Methods
TransformGraph.methods({
  //Methods   
  //Method: _init. Description: Inicializar herramientas de transformación de elemento gráfico Psi  
  _init: function(svggen, graph, ref){ 
  try { 
    var mparent = graph._parent;
    this.matrix = graph.getCTM();
    while (mparent!=null){
      this.matrix = this.matrix.multiply(mparent.getCTM());
      mparent = mparent._parent;
    }
    this.inverse = this.matrix.inverse();
    this.bbox = graph.getBBox();
    this.settings = graph._lib.transformSettings;
    this._initScale(svggen, graph, ref);
    this._initBox(svggen, graph, ref);
    return graph;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _initBox. Description: Inicializar caja de movimiento  
  _initBox: function(svggen, graph, ref){ 
  try { 
    var events = new BindEvents();
    this.box = svggen.rect(graph, 0,0, this.bbox.width,this.bbox.height, {"class": this.settings.attr("box-class")});
    events.drag(svggen, graph, "."+this.settings.attr("box-class"), null, ref, this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_initBox", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _initScale. Description: Inicializar herramienta de escala. Definición de un círculo de movimiento para definir la escala.  
  _initScale: function(svggen, graph, ref){ 
  try { 
    var pbox = Geometry.createPoint(graph.ownerSVGElement, this.bbox.width, this.bbox.height, this.matrix), 
        self = this;
    
    //Establecer limites mínimo y máximo de escala
    this.limit = {
      minX: self.bbox.width*this.settings.attr("scale-min"),
      maxX: self.bbox.width*this.settings.attr("scale-max"),
      minY: self.bbox.height*this.settings.attr("scale-min"),
      maxY: self.bbox.height*this.settings.attr("scale-max"),
      valid: function(p){
        if (p.x<this.minX) p.x = this.minX;
        if (p.x>this.maxX) p.x = this.maxX;
        if (p.y<this.minY) p.y = this.minY;
        if (p.y>this.maxY) p.y = this.maxY;
      }
    }  
    this.scale = svggen.circle(pbox.x, pbox.y, this.settings.attr("scale-r"), {"class": this.settings.attr("scale-class")});
    $(this.scale)
      .drag("start", function(event, dd) {
      })
      .drag(function(event, dd) {
        this.move(event, dd);
      })
      .drag("end", function(event, dd) {
        this.move(event, dd);
      })
      .each(function(){
        this._transform = self;
        this.move = function (event, dd) {
          var graph = this._transform.graph, 
              p = graph.transformCXY(event.clientX, event.clientY);
          graph.resize(p.x/this.bbox.width, p.y/this.bbox.height);
          this._transform.drag(event, dd);
        }
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_initScale", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: drag. Description: Manejo de movimiento de herraemintas del elelemnto gráfico Psi  
  drag: function(event, dd){ 
    var pbox =  this.graph.getCTM();
    $(this.scale).attr({cx: pbox.x, cy: pbox.y});
   },  
  //Method: close. Description: Cerrar herramientas de transformación de elemento gráfico Psi  
  close: function(){ 

   },
  //Events 
  toString: function() { return "TransformGraph"; }
});

/*-----------------------------------------------------
*=Class[graph_base]: GraphBase
* Description: Definición base para todos los objetos gráficos Psi.
*-----------------------------------------------------*/
function GraphBase () {
  //Properties  
};
//Inheritance
GraphBase.inherits(GLBase); 
//* Definitions Events and Methods
GraphBase.methods({
  //Methods   
  //Method: _bindHide. Description: Enlazar evento para ocultar elemento gráfico Psi  
  _bindHide: function(graph, selector, event, ref){ 
  try { 
    //Enlazar evento de para ocultar elemento gráfico Psi
    $(selector, graph)
      .bind(event, function(event) {
        event.stopImmediatePropagation();
        $(this._graph).hide();
        TPsi.CloseTools.shutDown();
        if (this._ref && this._ref.onHide) 
          this._ref.onHide(event, this);
        //Mover conexión si lo hay
        if (this._graph._connection)
          this._graph._connection.hide();
      })
      .each(function(){
        this._graph = graph;
        this._ref = ref; 
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindHide", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindSelect. Description: Enlazar evento para seleccionar elemento Psi  
  _bindSelect: function(graph, selector, event, ref){ 
  try { 
    //Enlazar evento de para ocultar elemento gráfico Psi
    $(selector, graph)
      .bind(event, function(event) {
        event.stopImmediatePropagation();
        TPsi.CloseTools.shutDown();
        this._ref.context.select(this._ref);
      })
      .each(function(){
        this._ref = ref; 
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindSelect", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindDrag. Description: Enlazar evento para mover elemento gráfico Psi  
  _bindDrag: function(graph, selector, ref, other){ 
  try { 
    var obj = {};
    obj[ref.id()] = ref;
    $(selector, graph)
      .drag("start", function(event, dd) {
          //Establecer elementos iniciales
          this._matrix = this._graph._parent.getCTM().inverse();
          this._start = Geometry.createPoint(this.ownerSVGElement, this._graph._translate.matrix.e, this._graph._translate.matrix.f);
          this._current = Geometry.createPoint(this.ownerSVGElement, dd.deltaX, dd.deltaY);
          //this._scale = 1/this._ref.context.scale();
          if (this._ref) {
            if (this._ref.onDragStart) this._ref.onDragStart(event, dd, this);
            if (this._ref.context) this._ref.context.move("start"); 
          }
        })
        .drag(function(event, dd) {
          this.move(event, dd);
          if (this._ref && this._ref.onDrag) 
            this._ref.onDrag(event, dd, this);         
        })
        .drag("end", function(event, dd) {
          this.move(event, dd);
          if (this._ref) {
            this._ref.attr("x", this._current.x);
            this._ref.attr("y", this._current.y);
            //Actualizar conexiones si las hay
            if (this._graph._connection) this._graph._connection.checks.refresh();
            if (this._ref.onDragEnd) this._ref.onDragEnd(event, dd, this);
            if (this._ref.context) this._ref.context.move("end"); 
          }
        })
        .each(function(){
          this._graph = graph;
          this._ref = ref; 
          this._other = other;
          this._obj = obj;
          this.move = function(event, dd){
            TPsi.CloseTools.shutDown();
            //Mover elemento gráfico Psi
            this._current.set(dd.deltaX, dd.deltaY).plus(this._start);
            if (this._ref){
              this._ref.translate(this._current);
              if (this._ref.context) this._ref.context.move(dd); 
            }
            else
              this._graph._translate.setTranslate(this._current.x, this._current.y);
            
            //Otro aplicación
            if (this._other && this._other.drag)
              this._other.drag(event, dd);
            //Mover conexión si lo hay
            if (this._graph._connection)
              this._graph._connection.checks.refresh();
            //Aplicar distancias minimas si las hay
            this._ref.context.unduplicate(this._obj);
          };
        });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindDrag", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindTransform. Description: Mostrar herrameintas de transformación de elemento gráfico Psi  
  _bindTransform: function(svggen, graph, selector, ref){ 
  try { 
    $(selector, graph)
      .click(function(event) {
        TPsi.CloseTools.shutDown();
        if (this._graph._transform) return;
        this._graph._transform = new TransformGraph(this.svggen, this._graph, this._ref);
      })
      .each(function(){
        this._graph = graph;
        this._ref = ref; 
        this.svggen = svggen; 
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindTransform", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindToggleConnection. Description: Mostrar/Ocultar los bordes de conexión Psi  
  _bindToggleConnection: function(graph, selector, event){ 
  try { 
    $(selector, graph)
      .bind(event, function(event) {
        if (this._graph._connection){
          this._graph._connection.toggle();
          TPsi.CloseTools.shutDown();
        }
      })
      .each(function(){
        this._graph = graph;
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindToggleConnection", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindEvents. Description: Enlazar lista de eventos al elemento gráfico Psi  
  _bindEvents: function(svggen, graph, settings, ref){ 
  try { 
    if (this.events){
      var map = this.events.getMap();
      for (var name in map){
        var bind = map[name];
        try {
          switch(name){
            case "hide": this._bindHide(graph, bind.selector, bind.event, ref); break;
            case "select": this._bindSelect(graph, bind.selector, bind.event, ref); break;
            case "drag": this._bindDrag(graph, bind.selector, ref); break;
            case "transform": this._bindTransform(graph, bind.selector, ref); break;
            case "toggle-connection": this._bindToggleConnection(graph, bind.selector, bind.event); break;
          }
        }
        catch(e){
          new PsiWarning("GLPSI.BIND_GRAPHS_ERROR", [name, bind.selector, ref.id(), e.toString()], [this, e]); 
        }
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindEvents", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindCommands. Description: Enlazar lista de comandos al elemento gráfico Psi  
  _bindCommands: function(graph, settings, ref){ 
    if (this.commands)
      this.commands.bind(graph, settings, ref ? ref.context : null);
   },  
  //Method: createConnection. Description: Crea los bordes de conexión al elemento gráfico Psi  
  createConnection: function(graph, svggen, ref){ 
  try { 
    var connId = this.attr("connection");
    if (connId) {
      var conndef = PsiData.connection[connId];
      if (conndef){ 
        graph._connection = conndef.create(graph, svggen, ref);
        ref.connection = graph._connection;
      }
      else
        new PsiWarning("GLPSI.CREATE_CONNECTION", [ref.id(), connId], [this, arguments]);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createConnection", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: createIcon. Description: Crea el ícono del elemento gráfico Psi  
  createIcon: function(svggen, id, parent, settings, ref){ 
  try { 
    if (!this.icon) return null;

    //Aplicar definiciones sobre el diagrama Psi
    this.setDefsTo(svggen.root()); 
    
    //Crear ícono para elemento gráfico de Psi
    var icon = svggen.group(parent, id+"-icon");
    svggen.add(icon, this.icon.cloneSVG());
    
    //Establecer translación, rotación y escala
    this.createTransform(icon, settings, ref);
    
    //Enlazar elementos a la figura
    this._createAttributes(icon, this.attr("css-class"), "icon", this.id());
    this._createReferences(icon, parent, ref);
    this._bindEvents(svggen, icon, settings, ref);
    this._bindCommands(icon, settings, ref);
    
    return icon;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createIcon", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setDefsTo. Description: Adicionar los Defs definidos en la librería gráfica a un administrador de diagrama Psi  
  setDefsTo: function(svgroot){ 
    if (this.root.defs)
      this.root.defs.appendTo(svgroot);
   },
  //Events 
  toString: function() { return "GraphBase"; }
});

/*-----------------------------------------------------
*=Class[shape]: Shape
* Description: Define una figura Psi
*-----------------------------------------------------*/
function Shape () {
  //Properties   
  //Property: events. Description: Lista de eventos  
  this.events = null;  
  //Property: commands. Description: Lista de comandos  
  this.commands = null;  
  //Property: transformSettings. Description: Opciones de transformación  
  this.transformSettings = null;  
  //Property: source. Description: Fuente SVG  
  this.source = null;  
  //Property: icon. Description: Icono SVG  
  this.icon = null; 
};
//Inheritance
Shape.inherits(GraphBase); 
//* Definitions Events and Methods
Shape.methods({
  //Methods   
  //Method: create. Description: Adicionar una figura al administrador de diagrama Psi  
  create: function(svggen, id, parent, settings, ref){ 
  try { 
    //Aplicar definiciones sobre el diagrama Psi
    this.setDefsTo(svggen.root()); 
    
    //Crear grupo para elemento gráfico de Psi
    var shape = svggen.group(parent, id);
    this._createAttributes(shape, this.attr("css-class"), "shape", this.id());
    svggen.add(shape, this.source.cloneSVG());
    
    //Establecer translación, rotación y escala
    this.createTransform(shape, settings, ref);
    
    //Enlazar elementos a la figura
    this._createReferences(shape, parent, ref);
    this._bindEvents(svggen, shape, settings, ref);
    this._bindCommands(shape, settings, ref);
    
    //Crear bordes de conexión Psi
    this.createConnection(shape, svggen, ref);
    return shape;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Shape"; }
});

/*-----------------------------------------------------
*=Class[container]: Container
* Description: Define contenedor de figuras, listas, conectores, etc. Psi
*-----------------------------------------------------*/
function Container () {
  //Properties   
  //Property: events. Description: Lista de eventos  
  this.events = null;  
  //Property: commands. Description: Lista de comandos  
  this.commands = null;  
  //Property: settings. Description: Opciones de transformación  
  this.settings = null;  
  //Property: header. Description: Cabecera SVG  
  this.header = null;  
  //Property: footer. Description: Pie de contenedor SVG  
  this.footer = null;  
  //Property: resizeDefine. Description: Evento de cambio de tamaño  
  this.resizeDefine = null;  
  //Property: icon. Description: Icono SVG  
  this.icon = null; 
};
//Inheritance
Container.inherits(GraphBase); 
//* Definitions Events and Methods
Container.methods({
  //Methods   
  //Method: create. Description: Adicionar un contenedor de figuras al administrador de diagrama Psi  
  create: function(svggen, id, parent, _settings, ref){ 
  try { 
    //Aplicar definiciones sobre el diagrama Psi
    this.setDefsTo(svggen.root()); 
    
    //Crear grupo para elemento gráfico de Psi
    var settings = $.extend({}, this.settings.get(), _settings),
        container = svggen.group(parent, id);
     
    //Enlazar elementos del contenedor
    this._createAttributes(container, this.attr("css-class"), "container", this.id());
    this._createReferences(container, parent, ref);
    
    //Crear fondo de container
    container._background = svggen.rect(container, 0,0, 200,100, settings["background-rx"], settings["background-ry"]);
    $(container._background).attr({"id": id+"-background", "class": settings["background-class"]});
    
    //Crear cabecera
    if (this.header) {
      container._header = svggen.group(container, id+"-header");
      svggen.add(container._header, this.header.cloneSVG());
    }
    
    //Crear lado izquierdo
    if (settings["width-left"]>0){
      container._gleft = svggen.group(container);
      $(container._gleft).attr("id", id+"-gleft");
      container._left = svggen.svg(container._gleft, 0,0, settings["width-left"], 10);
      $(container._left).attr({"id": id+"-left", "class": settings["body-class"]});
    }
    
    //Crear fondo de body del panel
    if (settings["background-body-class"]) {
      container._background_body = svggen.rect(container, 0,0, 10,10, settings["background-body-rx"], settings["background-body-ry"]);
      $(container._background_body).attr({"id": id+"-background-body", "class": settings["background-body-class"]});
    }
    
    //Crear contenedor svg
    container._gbody = svggen.group(container);
    $(container._gbody).attr("id", id+"-gbody");
    container._body = svggen.svg(container._gbody, 0,0, 10, 10);
    $(container._body).attr({"id": id+"-body", "class": settings["body-class"]});
    
    //Crear lado derecho
    if (settings["width-right"]>0){
      container._gright = svggen.group(container);
      $(container._gright).attr("id", id+"-gright");
      container._right = svggen.svg(container._gright, 0,0, settings["width-right"], 10);
      $(container._right).attr({"id": id+"-right", "class": settings["body-class"]});
    }
    
    //Crear pie del container
    if (this.footer) {
      container._footer = svggen.group(container, id+"-footer");
      svggen.add(container._footer, this.footer.cloneSVG());
    }
    
    //Redimensionar contenedor
    this.resize(svggen, container, _settings);
    
    //Establecer translación, rotación y escala
    this.createTransform(container, settings, ref);
    
    //Enlazar eventos
    this._bindEvents(svggen, container, settings, ref);
    this._bindCommands(container, settings, ref);
    
    //Crear bordes de conexión Psi
    this.createConnection(container, svggen, ref);
    return container;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: resize. Description: Redimensionar contenedor de figuras  
  resize: function(svggen, container, _settings){ 
  try { 
    var settings = $.extend({}, this.settings.get(), _settings),
        padding = settings["background-padding"],
        top = padding,
        wleft = container._left ? container._left.width.baseVal.value+settings["space-lateral"] : 0,
        wright = container._right ? container._right.width.baseVal.value+settings["space-lateral"] : 0;
    
    if (container._header) {
      container._header.setAttribute("transform", "translate("+padding+","+top+")");
      top += container._header.getBBox().height+settings["space-header"]; 
    }
    
    if (container._left){
      container._gleft.setAttribute("transform", "translate("+padding+","+top+")");
      $(container._left).attr({ height: settings["height"] });
      container._left.setAttribute("viewBox", "0 0 "+container._left.width.baseVal.value+" "+container._left.height.baseVal.value); 
    }
    
    //El fondo del cuerpo del contenedor
    if (container._background_body)
      $(container._background_body).attr({ x: padding+wleft, y: top, width: settings["width"], height: settings["height"] });
    
    //El cuerpo del contenedor
    container._gbody.setAttribute("transform", "translate("+(padding+wleft)+","+top+")");
    $(container._body).attr({ width: settings["width"], height: settings["height"] }); 
    container._body.setAttribute("viewBox", "0 0 "+settings["width"]+" "+settings["height"]);
    top += settings["height"];
    
    if (container._right){
      container._gright.setAttribute("transform", "translate("+(padding+wleft+settings["width"]+settings["space-lateral"])+","+top+")");
      $(container._right).attr({ height: settings["height"] });
      container._right.setAttribute("viewBox", "0 0 "+container._right.width.baseVal.value+" "+container._right.height.baseVal.value); 
    }
    
    if (container._footer) {
      top += settings["space-footer"];
      container._footer.setAttribute("transform", "translate("+padding+","+top+")");
      top += container._footer.getBBox().height;
    }
    top += padding;
    
    $(container._background).attr({
      width: 2*padding+settings["width"]+wleft+wright,
      height: top
    });
    
    if (this.resizeDefine){
      var resize = new Function("svggen", "container", "settings", "header", "body", "footer", "background", this.resizeDefine.text());
      resize(svggen, container, settings, container._header, container._body, container._footer, container._background); 
    }
    
    if (container._ref && container._ref.onResize)
      container._ref.onResize();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"resize", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onChildrenCreated. Description: Crear definiciones por defecto  
  onChildrenCreated: function(context){ 
  try { 
    //Adicionar ajustes por defecto si no se ha definido
    if (this.settings==null) {
      this.settings = new Settings();
      this.settings.onInit("container_settings");
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Container"; }
});

/*-----------------------------------------------------
*=Class[list]: List
* Description: Define una lista Psi
*-----------------------------------------------------*/
function List () {
  //Properties   
  //Property: events. Description: Lista de eventos  
  this.events = null;  
  //Property: commands. Description: Lista de comandos  
  this.commands = null;  
  //Property: settings. Description: Opciones de transformación  
  this.settings = null;  
  //Property: header. Description: Cabecera SVG  
  this.header = null;  
  //Property: section. Description: Sección SVG  
  this.section = null;  
  //Property: item. Description: Ítem de lista SVG  
  this.item = null;  
  //Property: resizeDefine. Description: Evento de cambio de tamaño  
  this.resizeDefine = null;  
  //Property: sectionDefine. Description: Evento de creación de sección  
  this.sectionDefine = null;  
  //Property: itemDefine. Description: Evento de creación de ítem  
  this.itemDefine = null;  
  //Property: icon. Description: Icono SVG  
  this.icon = null; 
};
//Inheritance
List.inherits(GraphBase); 
//* Definitions Events and Methods
List.methods({
  //Methods   
  //Method: createItems. Description: Creación de ítems de la lista Psi  
  createItems: function(svggen, list, parent, svgitem, items, settings){ 
  try { 
    var idref = $(parent).attr("id");
    if ($.isPlainObject(items))
      for(var name in items) 
        try {
          var item = svggen.group(parent);
          $(item).attr("id",idref+"-"+name);
          svggen.add(item, svgitem.cloneSVG());
          this._fitem(svggen, list, settings, item, name, items[name]);
        }
        catch(e){
          new PsiWarning("GLPSI.LIST_ITEM_ERROR", [name, items[name]], [this, arguments]);
        }
    else if($.isArray(items))
        for(var i=0; i<items.length; i++) 
          try{
            var item = svggen.group(parent);
            $(item).attr("id", idref+"-"+i);
            svggen.add(item, svgitem.cloneSVG());
            this._fitem(svggen, list, settings, item, i, items[i]);
          }
          catch(e){
            new PsiWarning("GLPSI.LIST_ITEM_ERROR", [i, items[i]], [this, arguments]);
          }
    else if(items.toString().indexOf("NamedNodeMap")>0)
      for(var i=0; i<items.length; i++) 
        try{
          var item = svggen.group(parent);
          $(item).attr("id", idref+"-"+items[i].name);
          svggen.add(item, svgitem.cloneSVG());
          this._fitem(svggen, list, settings, item, i, items[i]);
        }
        catch(e){
          new PsiWarning("GLPSI.LIST_ITEM_ERROR", [i, items[i]], [this, arguments]);
        }
    else {
      var self = this;
      items.each(function(i){
        try{
          var item = svggen.group(parent);
          $(item).attr("id", idref+"-"+i);
          svggen.add(item, svgitem.cloneSVG());
          self._fitem(svggen, list, settings, item, i, $(this));   
        }
        catch(e){
          new PsiWarning("GLPSI.LIST_ITEM_ERROR", [name, this], [this, arguments]);
        } 
      });
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createItems", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: create. Description: Adicionar un lista psi de ítems al administrador de diagrama Psi  
  create: function(svggen, id, parent, _settings, ref){ 
  try { 
    //Aplicar definiciones sobre el diagrama Psi
    this.setDefsTo(svggen.root()); 
    
    //Crear grupo para elemento gráfico de Psi
    var settings = $.extend({}, this.settings.get(), _settings),
        list = svggen.group(parent, id);
    
    //Enlazar elementos del contenedor
    this._createAttributes(list, this.attr("css-class"), "list", this.id());
    this._createReferences(list, parent, ref);
    
    //Crear fondo de container
    list._background = svggen.rect(list, 0,0, 200,100, settings["background-rx"], settings["background-ry"]);
    $(list._background).attr({"id": id+"-background", "key": "background", "class": settings["background-class"]});
    
    //Crear cabecera
    if (this.header) {
      list._header = svggen.group(list, id+"-header");
      svggen.add(list._header, this.header.cloneSVG());
    }
    
    //Crear Items si los hay
    if (settings.items) {
      list._items = svggen.group(list, id+"-items");
      $(list._items).attr({"id": id+"-items", "class": settings["items-class"]});
      this.createItems(svggen, list, list._items, this.item, settings.items, settings);
    }
    //Crear secciones si las hay
    if (settings.sections) {
      list._sections = svggen.group(list, id+"-sections");
      for(var key in settings.sections){ 
        var section = svggen.group(list._sections, id+"-section-"+name),
            headerSection = svggen.group(section, id+"-section-"+name+"-title");
        svggen.add(headerSection, this.section.cloneSVG());
        this._fsection(svggen, list, settings, headerSection, key, settings.sections[key]);
        //Adicionar items de sección
        if (settings.sections[key].items)
          this.createItems(svggen, list, section, this.item, settings.sections[key].items, settings);
      }
    }
    
    //Redimensionar lista
    this.resize(svggen, list, _settings);
    
    //Establecer translación, rotación y escala
    this.createTransform(list, settings, ref);
    
    //Enlazar eventos
    this._bindEvents(svggen, list, settings, ref);
    this._bindCommands(list, settings, ref);
    
    //Crear bordes de conexión Psi
    this.createConnection(list, svggen, ref);
    return list;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: resize. Description: Redimensionar lista Psi  
  resize: function(svggen, list, _settings){ 
  try { 
    var settings = $.extend({}, this.settings.get(), _settings),
        padding = settings["background-padding"],
        top = padding;
    
    //Unicación de cabecera
    if (list._header) {
      list._header.setAttribute("transform", "translate("+padding+","+top+")");
      top += list._header.getBBox().height+settings["space-header"]; 
    }

    //Ubicación de items
    var refTop = 0;
    if (list._items) {
      list._items.setAttribute("transform", "translate("+padding+","+top+")");
      $(list._items).children().each(function(i){
        this.setAttribute("transform", "translate("+padding+","+refTop+")");
        refTop += this.getBBox().height+settings["space-item"];
      });
    }
    //Ubicación de secciones
    if (list._sections) {
      list._sections.setAttribute("transform", "translate("+padding+","+top+")");
      $(list._sections).children().each(function(i){
        this.setAttribute("transform", "translate(0,"+refTop+")");
        var itemTop = 0;
        $(this).children().each(function(i){
          this.setAttribute("transform", "translate(0,"+itemTop+")");
          itemTop += this.getBBox().height+settings["space-item"];
        });
        refTop += this.getBBox().height+settings["space-item"];
      });
    }
    
    //Terminar redimensión  
    top += refTop+padding;
    
    $(list._background).attr({
      width: 2*padding+settings["width"],
      height: top
    });
    
    if (this._fresize)
      this._fresize(svggen, list, settings, list._header, list._items, list._background, list._ref ? list._ref._data : null);
    
    if (list._ref && list._ref.onResize)
      list._ref.onResize();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"resize", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onChildrenCreated. Description: Crear definiciones por defecto  
  onChildrenCreated: function(context){ 
  try { 
    //Adicionar ajustes por defecto si no se ha definido
    if (this.settings==null) {
      this.settings = new Settings();
      this.settings.onInit("list_settings");
    }
    //Crear funciones asociadas a redimensionamiento secciones e ítems
    if (this.resizeDefine)
      this._fresize = new Function("svggen", "list", "settings", "header", "items", "background", "data", this.resizeDefine.text());
    if (this.sectionDefine)
      this._fsection = new Function("svggen", "list", "settings", "section", "index", "data", this.sectionDefine.text());
    if (this.itemDefine)
      this._fitem = new Function("svggen", "list", "settings", "item", "index", "data", this.itemDefine.text());
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "List"; }
});


  //Component Methods   
  //Method: register. Description: Registrar en figuras, contenedores y listas en Librería Gráfica Psi  
  function register(library){ 
    $.extend(shapes, library.shapes);
    $.extend(containers, library.containers);
    $.extend(lists, library.lists);
   };  
  //Method: newShape. Description: Obtener Elemento Gráfico Psi  
  function newShape(name, svggen, id, parent, settings, ref){ 
    if (shapes[name]) return shapes[name].create(svggen, id, parent, settings, ref);
    throw new PsiError("GLPSI.FACTORY_NEW_SHAPE_ERROR", [name], [arguments]);
   };  
  //Method: newContainer. Description: Obtener un Contenedor Psi de elementos gráficos Psi  
  function newContainer(name, svggen, id, parent, settings, ref){ 
    if (containers[name]) return containers[name].create(svggen, id, parent, settings, ref);
    throw new PsiError("GLPSI.FACTORY_NEW_CONTAINERS_ERROR", [name], [arguments]);
   };  
  //Method: newList. Description: Obtener una Lista Psi  
  function newList(name, svggen, id, parent, settings, ref){ 
    if (lists[name]) return lists[name].create(svggen, id, parent, settings, ref);
    throw new PsiError("GLPSI.FACTORY_NEW_LISTS_ERROR", [name], [arguments]);
   };  
  //Method: getAll. Description: Obtener lista de todos los elementos gráficos disponibles en la fábrica Psi  
  function getAll(){ 
    return $.extend({},{
      shapes: shapes, 
      containers: containers,
      lists: lists
    });
   };


/*-----------------------------------------------------
* Component Definition: Graph  
*-----------------------------------------------------*/
return {
  //Content 
  GraphBase: GraphBase, //* Type: Class
  Shape: Shape, //* Type: Class
  Container: Container, //* Type: Class
  List: List, //* Type: Class
  //Properties 
  shapes: shapes,
  containers: containers,
  lists: lists,
  //Methods 
  register: register,
  newShape: newShape,
  newContainer: newContainer,
  newList: newList,
  getAll: getAll,
  toString: function() { return "Graph"; }
};
})(); 

/*-----------------------------------------------------
*=Enum[position_line]: PositionLine
* Description: Posición de la línea Psi
*-----------------------------------------------------*/
var PositionLine = {   
  Start: 'start',  
  Middle: 'middle',  
  End: 'end'
};   

/*-----------------------------------------------------
*=Component[gllines]: Lines
* Description: Lenguaje de definición de figuras, conectores, contenedores, text, etc.
*-----------------------------------------------------*/
var Lines = (function () {  

  //Component Properties   
  //Property: lines. Description: Mapa de líneas  
  var lines = {};


/*-----------------------------------------------------
*=Class[label_point]: LabelPoint
* Description: Creación de un rótulo en un punto referenciado
*-----------------------------------------------------*/
function LabelPoint (svggen, parent, source, point, ref) {
  //Properties   
  //Property: _ref. Description: Referencia a elemento Psi  
  this._ref = ref;  
  //Property: svggen. Description: Apuntador a diagrama  
  this.svggen = svggen;  
  //Property: point. Description: Punto de ubicación rótulo  
  this.point = point;  
  //Property: text. Description: Text rótulo  
  this.text = svggen.text(parent,0,0,''); 
  //Initialize class
  this._init(source);
}; 
//* Definitions Events and Methods
LabelPoint.methods({
  //Methods   
  //Method: _init. Description: Inicializar rótulo de punto Psi  
  _init: function(source){ 
    $(this.text).attr("key", source.name);
    this.refresh(source);
    this._bindDrag(this.text);
   },  
  //Method: _bindSelect. Description: Enlazar evento para seleccionar elemento Psi  
  _bindSelect: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindSelect", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindDrag. Description: Enlazar movimiento de texto del rótulo  
  _bindDrag: function(text){ 
  try { 
    var self = this;
    $(text)
      .drag("start", function(event, dd) {
          var settings = {"fill": "none", "stroke": "gray", "stroke-width": "0.5px"},
              x = this._label.point.x, y = this._label.point.y;
          this._start = Geometry.createPoint(this.ownerSVGElement, x+this._label.x, y+this._label.y);
          this._current = Geometry.createPoint(this.ownerSVGElement, dd.deltaX, dd.deltaY);
          this._cross1 = this._label.svggen.line(this._label._ref._svg, x-4, y-4, x+4, y+4, settings);
          this._cross2 = this._label.svggen.line(this._label._ref._svg, x+4, y-4, x-4, y+4, settings);
          this._line = this._label.svggen.line(this._label._ref._svg, x, y, x+this._label.x, y+this._label.y, $.extend(settings, {"stroke-dasharray": "3,1"}));
          this.b = this.getBBox();
        })
      .drag(function(event, dd) {
          this.move(event, dd);
        })
      .drag("end", function(event, dd) {
          this.move(event, dd);
          $(this._cross1).remove();
          $(this._cross2).remove();
          $(this._line).remove();
          this._current.set(parseFloat($(this).attr("x")), parseFloat($(this).attr("y"))).minus(this._start);
          this._label.modifyPosition(this._current.x, this._current.y);
        })
      .dblclick(function(event){
        if ($(this).find("tspan").length===0)
          this._label.contentMultiline();
        else
          this._label.contentLine();
        })
      .each(function(){
          this._label = self;
          this.move = function(event, dd){
            TPsi.CloseTools.shutDown(); 
            this._current.set(dd.deltaX, dd.deltaY).plus(this._start);
            
            var x = this._current.x, y = this._current.y,
                v = this._label._ref.viewBox, b = this.b;
            if ( x<v.x ) x = v.x;
            if ( y<v.y+b.height ) y = v.y+b.height;
            if ( v.x+v.width <x+b.width )  x = v.x+v.width -b.width;
            if ( v.y+v.height<y ) y = v.y+v.height;
                 
            $(this).attr({x: x, y: y});
            $(this._line).attr({x2: x, y2: y});
          };
        });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindDrag", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Refrescar posición y texto del rótulo Psi  
  refresh: function(source){ 
  try { 
    this.source = source;
    
    //Procesar posición
    if (source.valuePos) {
      var ps = source.valuePos.split(" ");
      this.x = parseFloat(ps[0]);
      this.y = parseFloat(ps[1]);
      this.refreshPosition();
    }
    
    //Procesar contenido
    if (source.value) {
      if (this._ref.hasAttr(this.source.nlines))
        this.contentMultiline();
      else
        this.contentLine();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: contentLine. Description: Escribir contenido en una línea  
  contentLine: function(){ 
    var value = this._ref && this._ref.processValue ? this._ref.processValue(this.source.value) : this.source.value;
    //Adicionar title
    if ($(this.text).find("title").length===0)
    	this._ref.context.svggen.title(this.text, value);
    else
      $(this.text).find("title").text(value);
    //Procesar texto
    $(this.text).find("tspan").remove();
    $(this.text).attr("class", this.source.valueClass);
    this.text.textContent = value;
    this._ref.removeAttr(this.source.nlines);
   },  
  //Method: contentMultiline. Description: Escribir conetnido en varias líneas  
  contentMultiline: function(tlength, last){ 
    var value = this._ref && this._ref.processValue ? this._ref.processValue(this.source.value) : this.source.value;
    
    //Procesar texto
    $(this.text).attr("class", this.source.valueClass);
    this.text.textContent = value;
    var length = tlength ? tlength : this.text.getComputedTextLength()/2,
        middle = Math.min( Math.floor(1.05*(length)), this.source.width);
    if ($(this.text).find("tspan").length===0 && this.text.getComputedTextLength()<middle){
      this._ref.removeAttr(this.source.nlines);
      return false;
    }
    var words = value.split(" "), tA = "", tB = "", full = false;
    
    this.text.textContent = "";
    for(var i=0; i<words.length; i++){
      this.text.textContent += (i==0 ? "" : " ")+words[i]; 
      if (this.text.getComputedTextLength()<middle)
        tA = this.text.textContent;
      else {
        //Si se requiere el value completo
        if (this.source.full=="no") {
          this.text.textContent = words[i];
          tB = words[i];
          if (i<words.length-1) 
            for(var j=i+1; j<words.length; j++){
              this.text.textContent += " "+words[j];
              if (this.text.getComputedTextLength()<=middle+2)
                tB = this.text.textContent;
              else {
                tB += j==words.length-1 && last ? " "+words[j] : "...";
                full = true;
                break;
              }
            }
        }
        else{
          tB = words[i];
          for(var j=i+1; j<words.length; j++)
            tB += " "+words[j];
        }
        break;
      } 
    }
    if(tA.length>0 && tB.length>0){
      this.text.textContent = "";
      //Crear elementos tspan dentro del text
      var ts1 = this._ref.context.svggen.other(this.text, "tspan"),
          ts2 = this._ref.context.svggen.other(this.text, "tspan");
      ts1.textContent = tA;
      ts2.textContent = tB;
      $(ts1).attr({dx: 0, dy:0});
      $(ts2).attr({dx: -Math.floor(ts1.getComputedTextLength()/2)-Math.floor(ts2.getComputedTextLength()/2), dy:9});
      //Adicionar title
      if (full) {
        if ($(this.text).find("title").length===0)
          this._ref.context.svggen.other(this.text, "title");
        $(this.text).find("title").text(value);
      }
      this._ref.attr(this.source.nlines, "2");
    }
    else{
      this.text.textContent = value;
      this._ref.removeAttr(this.source.nlines);
    }
    return true;
   },  
  //Method: refreshPosition. Description: Refrescar posición del rótulo psi  
  refreshPosition: function(newPoint){ 
    if (newPoint)
      this.point = newPoint;
    $(this.text).attr({
      x: this.point.x+this.x,
      y: this.point.y+this.y
    });
   },  
  //Method: modifyPosition. Description: Modificación de posición del rotulo  
  modifyPosition: function(deltaX, deltaY){ 
    this.x += deltaX;
    this.y += deltaY;
    this._ref.attr(this.source.namePos, this.x.toString()+" "+this.y.toString());
   },
  //Events 
  toString: function() { return "LabelPoint"; }
});

/*-----------------------------------------------------
*=Enum[checkpoint_type]: CheckpointType
* Description: Tipo de punto de control para una línea Psi
*-----------------------------------------------------*/
var CheckpointType = {   
  Start: 'start',  
  Middle: 'middle',  
  End: 'end'
};   

/*-----------------------------------------------------
*=Class[checkpoint]: Checkpoint
* Description: Punto de control para una línea Psi
*-----------------------------------------------------*/
function Checkpoint (parent, seg, coor, label, partner, isPartner) {
  //Properties   
  //Property: parent. Description: Linea padre  
  this.parent = parent;  
  //Property: _lib. Description: Definición de elemento Psi  
  this._lib = parent._lib;  
  //Property: _svg. Description: Diagram  
  this._svg = parent._svg;  
  //Property: _path. Description: Ruta de la línea  
  this._path = parent._path;  
  //Property: _ref. Description: Referencia al padre  
  this._ref = parent._ref;  
  //Property: svggen. Description: Referencia al diagrama  
  this.svggen = parent.svggen;  
  //Property: seg. Description: Referencia al 'seg' del path  
  this.seg = seg;  
  //Property: coor. Description: Coordenadas  
  this.coor = coor;  
  //Property: label. Description: Rótulo  
  this.label = label;  
  //Property: element. Description: Elemento SVG  
  this.element = null;  
  //Property: next. Description: Próximo punto de chequeo  
  this.next = null;  
  //Property: partner. Description: Punto de chequeo 'partner'  
  this.partner = partner;  
  //Property: partner1. Description: Punto de chequeo 'parnert 1'  
  this.partner1 = null;  
  //Property: partner2. Description: Punto de chequeo 'parner 2'  
  this.partner2 = null;  
  //Property: isPartner. Description: Es 'partner'  
  this.isPartner = isPartner; 
  //Initialize class
  this.refreshDeltaPartner();
}; 
//* Definitions Events and Methods
Checkpoint.methods({
  //Methods   
  //Method: getX. Description: Obtener posición x de punto de control  
  getX: function(){ 
    return this.seg[this.coor.x];
   },  
  //Method: getY. Description: Obtener posición y de punto de control  
  getY: function(){ 
    return this.seg[this.coor.y];
   },  
  //Method: getXY. Description: Obtener posición (x,y) de punto de control  
  getXY: function(){ 
    return {
      x: this.seg[this.coor.x],
      y: this.seg[this.coor.y]
    };
   },  
  //Method: setXY. Description: Actualizar posición de punto de control  
  setXY: function(x, y){ 
    this.seg[this.coor.x] = x;
    this.seg[this.coor.y] = y;
   },  
  //Method: getPoint. Description: Crea un point geometría Psi  
  getPoint: function(){ 
    return Geometry.createPoint(this._svg.ownerSVGElement, this.getXY());
   },  
  //Method: plane. Description: Capa o contenedor sobre el que está trabajando el punto de chequeo  
  plane: function(){ 
    return this._svg._parent;
   },  
  //Method: setPath. Description: Solicitar al padre modificación de camino de línea Psi  
  setPath: function(){ 
    this.parent.setPath();
   },  
  //Method: setConnection. Description: Actualizar la conexión en seg  
  setConnection: function(node, position){ 
  try { 
    this._connection = node.connection;
    this.id = node.id()+"-end";
    this.index = position;
    this.seg._connection = node.connection; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setConnection", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setConnectionPoint. Description: Actualizar el punto de conexión en seg  
  setConnectionPoint: function(point){ 
  try { 
    this.seg._connectionPoint = point;
    this.index = this.seg._connectionPoint.index;
    this.seg._connection.checks.modify(this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setConnectionPoint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: move. Description: Mover punto de control y refrescar rótulos  
  move: function(_x, _y, movePartners){ 
  try { 
    var x = _x, y = _y;
    
    //Mover partners
    if (movePartners==null || movePartners==true) {
      if (this.partner1) 
        this.partner1.move(x-this.partner1.dx, y-this.partner1.dy);
      if (this.partner2) 
        this.partner2.move(x-this.partner2.dx, y-this.partner2.dy);
      this.refreshDeltaPartner();
    };
    
    //Restringuir en el viewBox
    var r = this.parent.markSetting.r, 
        v = this.parent.viewBox;
    if ( x+r<v.x ) x = v.x+r; 
    if ( y+r<v.y ) y = v.y+r;
    if ( v.x+v.width<x-r ) x = v.x+v.width-r;
    if ( v.y+v.height<y-r ) y = v.y+v.height-r;
    
    //Actualizar elemento grafico
    this.setXY(x, y);
    if (this.element)
      $(this.element).attr({cx: x, cy: y});
    if (this.label)
        this.label.refreshPosition();
    if (this.line)
      $(this.line).attr({x1: x, y1: y, x2: this.partner.getX(), y2: this.partner.getY()});
    this.parent.refreshLabelMiddle();
    
    //Actualizar diagram
    this.parent.setPath();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"move", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: moveConnection. Description: Mover punto de control regido por un borde de conexión Psi  
  moveConnection: function(current){ 
  try { 
    if (this.seg._connection && !this.isPartner){
      this.setConnectionPoint( this.seg._connection.minPoint(current, this.plane()) );
      current.set(this.seg._connectionPoint);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"moveConnection", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refreshDeltaPartner. Description: Mover diferencia de partners Psi  
  refreshDeltaPartner: function(){ 
  try { 
    if (this.partner && this.isPartner) {
      this.dx = this.partner.getX()-this.getX();
      this.dy = this.partner.getY()-this.getY();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refreshDeltaPartner", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: minimumNone. Description: Refrescar posición de bordes de conexión  
  minimumNone: function(){ 
  try { 
    this.setConnectionPoint( this.seg._connection.getPoint(this.seg._connectionPoint.index, this.plane()) );
    this.move(this.seg._connectionPoint.x, this.seg._connectionPoint.y);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minimumNone", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: minimumOwn. Description: Refrescar posición de bordes de conexión propio  
  minimumOwn: function(){ 
  try { 
    var other = this.type==CheckpointType.Start ? this.parent.checkEnd : this.parent.checkStart;
    if (this.parent.checks.length>2)
      other = this.next!=null ? this.next : this.prev;
    this.setConnectionPoint( this.seg._connection.minPoint(other.getPoint(), this.plane()) );
    this.move(this.seg._connectionPoint.x, this.seg._connectionPoint.y);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minimumOwn", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: minimumBoth. Description: Refrescar ambos bordes de conexión  
  minimumBoth: function(){ 
  try { 
    var other = this.type==CheckpointType.Start ? this.parent.checkEnd : this.parent.checkStart;
    if (this._lib.attr("duplicate")=="no")
      this._ref.minArray = this.seg._connection.minArray(other.seg._connection, this.plane()); 
    
    var min = this._ref.minArray 
            ? this._ref.minArray[0]
            : this.seg._connection.min(other.seg._connection, this.plane());
    this.setConnectionPoint( min.from );
    this.move(this.seg._connectionPoint.x, this.seg._connectionPoint.y);
    other.setConnectionPoint( min.to );
    other.move(other.seg._connectionPoint.x, other.seg._connectionPoint.y);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minimumBoth", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: minimumOther. Description: Refrescar el borde de conexión del otro punto  
  minimumOther: function(){ 
  try { 
    var other = this.type==CheckpointType.Start ? this.parent.checkEnd : this.parent.checkStart,
        min = this.seg._connection.min(other.seg._connection, this.plane());
    this.setConnectionPoint( this.seg._connection.getPoint(this.seg._connectionPoint.index, this.plane()) );
    this.move(this.seg._connectionPoint.x, this.seg._connectionPoint.y);
    other.setConnectionPoint( min.to );
    other.move(other.seg._connectionPoint.x, other.seg._connectionPoint.y);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"minimumOther", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Refrescar posición con respecto a los bordes de conexión  
  refresh: function(){ 
  try { 
    if (this.seg._connection && !this.isPartner){
      var other = this.type==CheckpointType.Start ? this.parent.checkEnd : this.parent.checkStart,
          minimum = this._ref && this._ref.itself ? MinimumType.None : this._lib.attr("minimum");
      
      switch (minimum) {
        case MinimumType.None: this.minimumNone(); break;
        case MinimumType.Own: this.minimumOwn(); break;
        case MinimumType.Both: this.minimumBoth(); break;
        case MinimumType.Other: this.minimumOther(); break;
      }
    }
    this.parent.refreshLabelMiddle();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: show. Description: Muestra elemento svg punto de control para la línea Psi  
  show: function(){ 
  try { 
    var setting = this.parent.markSetting;
    
    //Crear círculo
    this.element = this.parent.svggen.circle(this._svg, this.getX(), this.getY(), setting.r, setting);
    this.element._checkpoint = this;

    //Crear línea auxiliar
    if (this.partner) {
      this.line = this.svggen.line(this._svg, this.getX(),this.getY(), this.partner.getX(),this.partner.getY(), setting);
      $(this.parent.parent).prepend(this.line);
    }  
    
    //Definir función de movimiento
    this.element.move = function(event, dd){
      TPsi.CloseTools.shutDown();
      this._current.set(dd.deltaX, dd.deltaY).plus(this._start);
      
      //Rectificar movimiento si está regido por un borde de conexión
      this._checkpoint.moveConnection(this._current);
      
      //Mover el punto de chequeo
      this._checkpoint.move(this._current.x, this._current.y);
    };
    //Establecer soltado y arrastre de punto de control
    $(this.element)
      .drag("start", function(event, dd) {
        this._start = Geometry.createPoint(this.ownerSVGElement, this._checkpoint.getXY());
        this._current = Geometry.createPoint(this.ownerSVGElement, 0, 0);
        TPsi.CloseTools.shutDown();
        this.context = this._checkpoint._ref.context;
        this.context.move("start"); 
      })
      .drag(function(event, dd) {
        this.move(event, dd);
        this.context.move(dd); 
      })
      .drag("end", function(event, dd) {
        this.move(event, dd);
        this._checkpoint.setPath();
        this.context.move("end"); 
      })
      .dblclick(function(event){
        this._checkpoint.remove();
      });
    
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"show", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: hide. Description: Remover punto de control de la línea Psi  
  hide: function(){ 
    $(this.element).remove();
    if (this.line)
      $(this.line).remove();
    this.element = null;
   },  
  //Method: remove. Description: Removerse de la lista de puntos de chequeo si es de tipo 'middle'  
  remove: function(){ 
    if (this.type==CheckpointType.Middle && this.item!=null) {
      this.hide();
      if (this.partner1) this.partner1.hide();
      if (this.partner2) this.partner2.hide();
      //Actualizar item de cada punto de control
      var current = this.next;
      while(current!=null){
        current.item--;
        current = current.next;
      }
      this.prev.next = this.next;
      this.next.prev = this.prev;
      this.parent._path.pathSegList.removeItem(this.item);
      this.parent._refreshChecks();
      this.parent.refreshLabelMiddle();
    }
   },
  //Events 
  toString: function() { return "Checkpoint"; }
});

/*-----------------------------------------------------
*=Class[checkpoints]: Checkpoints
* Description: Obtener rótulo para un punto. Formato: <position> | <texto> | <classcss>
*-----------------------------------------------------*/
function Checkpoints (lib, svg, path, ref, svggen, bind) {
  //Properties   
  //Property: _lib. Description: Definición de elemento  
  this._lib = lib;  
  //Property: _svg. Description: Diagrama  
  this._svg = svg;  
  //Property: _path. Description: Referencia a elemento SVG  
  this._path = path;  
  //Property: _ref. Description: Referencia a elemento Psi  
  this._ref = ref;  
  //Property: svggen. Description: Referencia a diagrama  
  this.svggen = svggen;  
  //Property: checks. Description: Lista de puntos de chequeos  
  this.checks = null;  
  //Property: checked. Description: Es chequeado  
  this.checked = false; 
  //Initialize class
  this._init(bind);
}; 
//* Definitions Events and Methods
Checkpoints.methods({
  //Methods   
  //Method: _init. Description: Inicializar grupo con enlace de evento de modificación y crear lista de puntos de control  
  _init: function(bind){ 
  try { 
    //Crear viewBox
    this.viewBox = $(this._svg).parents("svg:first").get(0).viewBox.baseVal;
    
    //Enlazar a evento específico para habilitar los puntos de control
    this.markSetting = this._lib.markSetting.get();
    if (bind) {
      var self = this;
      $(bind.selector, this._svg)
        .bind(bind.event, function(event) {
          event.stopPropagation();
          if (this._checkpoints.checked)
            this._checkpoints.hide();
          else
            this._checkpoints.show();  
        })
        .each(function(){
          this._checkpoints = self; 
        });
    }
    
    //Crear lista de puntos de control, valido solo para puntos con posición absoluta
    var segList = this._path.pathSegList,
        lastCheck = null, 
        penddingCheck = null;
    for(var i=0; i<segList.numberOfItems; i++){
      var seg = segList.getItem(i);
          check = new Checkpoint(this, seg, {x: "x", y: "y"}, i==0 ? this._svg._labelStart : i==segList.numberOfItems-1 ? this._svg._labelEnd : null, null, false);
      check.item = i;
      
      //Adicionar tipo de punto de control 
      if (i==0) { 
        check.id = this._ref.id()+"-start";
        this.checkStart = check;
        this._ref.checkStart = check;
        check.type = CheckpointType.Start;
      }
      else if (i==segList.numberOfItems-1) { 
        check.id = this._ref.id()+"-end";
        this.checkEnd = check;
        this._ref.checkEnd = check;
        check.type = CheckpointType.End;
      }
      else
        check.type = CheckpointType.Middle;
      
      //Adicionar punto de chequeo a la conexión
      if ((i==0 || i==segList.numberOfItems-1) && seg._connection) {
        check.setConnectionPoint(seg._connectionPoint);
        seg._connection.checks.add(check);
      } 
      
      //Crear punto de chequeo adicionales 
      switch(seg.pathSegType){
        case 4: break;  //PATHSEG_LINETO_ABS
        case 12: break; //PATHSEG_LINETO_HORIZONTAL_ABS
        case 14: break; //PATHSEG_LINETO_VERTICAL_ABS
        case 10: break; //PATHSEG_ARC_ABS
        case 8: //PATHSEG_CURVETO_QUADRATIC_ABS
          check.partner1 = new Checkpoint(this, seg, {x: "x1", y: "y1"}, null, check, true);
          break;
        case 6: //PATHSEG_CURVETO_CUBIC_ABS 
          if (lastCheck==null) 
            throw new PsiError("GLPSI.PATHSEG_CURVETO_CUBIC_ABS_ERROR", [$(this.parent).attr("id")], [this]);
          var checkAux = lastCheck[lastCheck.partner1==null ? "partner1":"partner2"] = new Checkpoint(this, seg, {x: "x1", y: "y1"}, null, lastCheck, true);
          check.partner1 = new Checkpoint(this, seg, {x: "x2", y: "y2"}, null, check, true);
          break;
        case 16: //PATHSEG_CURVETO_CUBIC_SMOOTH_ABS 
          check.partner2 = new Checkpoint(this, seg, {x: "x2", y: "y2"}, null, check, true);
          break;
      };
      //Lista doblemente encadenada
      if (lastCheck)
        lastCheck.next = check;
      check.prev = lastCheck;
      
      //Siguiente
      lastCheck = check;
    }
    
    this._refreshChecks();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _refreshChecks. Description: Refrescar arreglo de puntos de chequeo  
  _refreshChecks: function(){ 
  try { 
    var current = this.checkStart;
    this.checks = new Array();
    while(current!=null){
      this.checks.push(current);
      if (current.partner1!=null) this.checks.push(current.partner1);
      if (current.partner2!=null) this.checks.push(current.partner2);
      current = current.next;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_refreshChecks", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _visibility. Description: Mostrar/Ocultar puntos svg de control para la Línea Psi  
  _visibility: function(method){ 
  try { 
    var current = this.checkStart;
    while(current!=null){
      current[method]();
      if (current.partner1!=null) current.partner1[method]();
      if (current.partner2!=null) current.partner2[method]();
      current = current.next;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_visibility", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: appendCheck. Description: Adicionar un punto de control en la línea Psi  
  appendCheck: function(letter, x,y, x1,y1, x2,y2){ 
  try { 
    this.hide();
    //Buscar posición
    var aux = this.checkStart.next, current = null, index = 1, mind = Infinity,
        Q = Geometry.createPoint(this._path.ownerSVGElement, x, y);
    while (aux!=null){
      var segment = Geometry.createSegment(this._path.ownerSVGElement, aux.prev.getPoint(), aux.getPoint()),
          p = segment.minPoint(Q);
      if (p.distance<mind){
        mind = p.distance;
        current = aux;
      }
      aux = aux.next;
    }
      
    //Crear PathSeg
    var seg = null;
    switch(letter){
      case "L": seg = this._path.createSVGPathSegLinetoAbs(x,y); break;
      case "Q": seg = this._path.createSVGPathSegCurvetoQuadraticAbs(x,y, x1,y1); break;
      case "C": seg = this._path.createSVGPathSegCurvetoCubicAbs(x,y, x1,y1, x2,y2); break;
      default: return;
    }
    this._path.pathSegList.insertItemBefore(seg,current.item);
    
    //Crear punto de chequeo y actualizar enlaces
    var check = new Checkpoint(this, seg, {x: "x", y: "y"}, null, null, false);
    switch(letter){
      case "Q":
        check.partner1 = new Checkpoint(this, seg, {x: "x1", y: "y1"}, null, check, true);
        this.checks.push(check.partner1);
        break;
      case "C":
        check.partner1 = new Checkpoint(this, seg, {x: "x1", y: "y1"}, null, check, true);
        check.partner2 = new Checkpoint(this, seg, {x: "x2", y: "y2"}, null, check, true);
        this.checks.push(check.partner1);
        this.checks.push(check.partner2);
        break;
    }
    check.type = CheckpointType.Middle;
    check.next = current; check.prev = current.prev;
    check.prev.next = check; current.prev = check;
    check.item = current.item;
    while(current!=null){
      current.item++;
      current = current.next;
    }
    
    this._refreshChecks();
    this.setPath();
    this.show();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"appendCheck", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: show. Description: Muestra la lista de puntos svg de control para la Línea Psi  
  show: function(){ 
  try { 
    this._visibility("show");
    this.checked = true;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"show", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: hide. Description: Oculta lista de puntos svg de control de la Línea Psi  
  hide: function(){ 
  try { 
    this._visibility("hide");
    this.checked = false;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"hide", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: toggle. Description: Oculta/Muestra la lista de puntos de control de la línea Psi  
  toggle: function(){ 
    this[this.checked ? "hide":"show"]();
   },  
  //Method: setPath. Description: Solicitar al padre modificación de camino de línea Psi  
  setPath: function(){ 
  try { 
    this._lib.setPath(this._path, this._svg, this._ref);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setPath", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refreshLabelMiddle. Description: Refrescar rótulo del medio  
  refreshLabelMiddle: function(){ 
  try { 
    if (this._svg._labelMiddle)
      this._svg._labelMiddle.refreshPosition( this._path.getPointAtLength(this._path.getTotalLength()/2) );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refreshLabelMiddle", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getCurrentArray. Description: Obtener arreglo actual de posición de punto de control  
  getCurrentArray: function(){ 
  try { 
    var result = new Array();
    for(var i=0; i<this.checks.length; i++)
      result[i] = Geometry.createPoint(this._svg.ownerSVGElement, this.checks[i].getXY()); 
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getCurrentArray", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Checkpoints"; }
});

/*-----------------------------------------------------
*=Enum[minimum_type]: MinimumType
* Description: Tipo de minimos de distancia de línea Psi
*-----------------------------------------------------*/
var MinimumType = {   
  None: 'none',  
  Own: 'own',  
  Both: 'both',  
  Other: 'other'
};   

/*-----------------------------------------------------
*=Class[line]: Line
* Description: Define un línea Psi (polilínea, curva, arco, etc.) descritas por una lista de puntos
*-----------------------------------------------------*/
function Line () {
  //Properties   
  //Property: lineSetting. Description: Opciones de línea  
  this.lineSetting = null;  
  //Property: markSetting. Description: Opciones de marcas de los extemos  
  this.markSetting = null;  
  //Property: events. Description: Definición de eventos  
  this.events = null;  
  //Property: icon. Description: Icón SVG  
  this.icon = null; 
};
//Inheritance
Line.inherits(GLBase); 
//* Definitions Events and Methods
Line.methods({
  //Methods   
  //Method: _bindSelect. Description: Enlazar evento de selección   
  _bindSelect: function(graph, selector, event, ref){ 
  try { 
    //Enlazar evento de para ocultar elemento gráfico Psi
    $(selector, graph)
      .bind(event, function(event) {
        event.stopImmediatePropagation();
        TPsi.CloseTools.shutDown();
        if ($(this).attr("select")=="yes")
          this._ref.context.unselect(this._ref.id());
        else
          this._ref.context.select(this._ref);
      })
      .each(function(){
        this._ref = ref; 
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindSelect", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindDrag. Description: Enlazar evento de movimient de la línea Psi  
  _bindDrag: function(graph, path, ref){ 
  try { 
    //Enlazar evento movimiento
    $(path)
      .drag("start", function(event, dd) {
          //Clonar lista de puntos de inicio y crear arreglo de movimiento current
          this._start = this._checkpoints.getCurrentArray(this.ownerSVGElement);
          this._current = new Array();
          for(var i=0; i<this._start.length; i++) 
            this._current[i] = Geometry.createPoint(this.ownerSVGElement, dd.deltaX, dd.deltaY);
          TPsi.CloseTools.shutDown();
          if (this._ref) {
            if (this._ref.onDragStart) this._ref.onDragStart(event, dd, this);
            if (this._ref.context) this._ref.context.move("start"); 
          }
        })
      .drag(function(event, dd) {
          this.move(event, dd);
          if (this._ref && this._ref.onDrag) 
            this._ref.onDrag(event, dd, this);         
        })
      .drag("end", function(event, dd) {
          this.move(event, dd);
          if (this._ref) {
            this._lib.setPath(this, this._parent, this._ref);
            if (this._ref.onDragEnd) this._ref.onDragEnd(event, dd, this);
            if (this._ref.context) this._ref.context.move("end");
          }
        })
      .each(function(){
          this.move = function(event, dd){
            TPsi.CloseTools.shutDown();
            //Mover lista de puntos de la línea Psi
            for(var i=0; i<this._checkpoints.checks.length; i++){
              var check = this._checkpoints.checks[i],
                  current = this._current[i];
              current.set(dd.deltaX, dd.deltaY).plus(this._start[i]);
              check.move(current.x, current.y);
            }
            this._checkpoints.refreshLabelMiddle();
            if (this._ref && this._ref.context) this._ref.context.move(dd);
          };
        });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindDrag", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _bindEvents. Description: Enlazar eventos para la línea Psi  
  _bindEvents: function(graph, path, ref){ 
  try { 
    if (this.events){
      var map = this.events.getMap();
      for (var name in map){
        var bind = map[name];
        try {
          switch(name){
            case "drag": this._bindDrag(graph, path, ref); break;
            case "select": this._bindSelect(graph, bind.selector, bind.event, ref); break;
          }
        }
        catch(e){
          new PsiWarning("GLPSI.BIND_LINE_ERROR", [name, bind.selector, ref.id(), e.toString()], [this, e]); 
        }
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindEvents", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _setLabels. Description: Adicionar rótulo de origen y destino de la línea Psi  
  _setLabels: function(svggen, parent, line, labels, ref){ 
  try { 
    /* TODO: Mejorar la lista de 
    parent._labels = {};
    for(var i in labels) {
      var label = labels[i];
      if (label && label.value && label.valuePos)
        parent._labels[i] = ref.labels[i] = new LabelPoint(svggen, parent, labels[i], parent._pstart, ref); 
    }*/
    if (labels[PositionLine.Start] && labels[PositionLine.Start].value && labels[PositionLine.Start].valuePos)
      parent._labelStart  = ref.labels[PositionLine.Start] = new LabelPoint(svggen, parent, labels[PositionLine.Start], parent._pstart, ref);
    if (labels[PositionLine.Middle] && labels[PositionLine.Middle].value && labels[PositionLine.Middle].valuePos)
      parent._labelMiddle = ref.labels[PositionLine.Middle] = new LabelPoint(svggen, parent, labels[PositionLine.Middle], parent._pmiddle, ref);
    if (labels[PositionLine.End] && labels[PositionLine.End].value && labels[PositionLine.End].valuePos)
      parent._labelEnd    = ref.labels[PositionLine.End] = new LabelPoint(svggen, parent, labels[PositionLine.End], parent._pend, ref);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_setLabels", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _getSeg. Description: Obtener de la lista de punto su valor  
  _getSeg: function(p, s){ 
  try { 
    var t = p.pathSegTypeAsLetter;
    switch(p.pathSegType){
      case 12: //PATHSEG_LINETO_HORIZONTAL_ABS
        return t+(s ? s : p.x.toFixed(0));
      case 14: //PATHSEG_LINETO_VERTICAL_ABS
        return t+(s ? s : p.y.toFixed(0));
      case 2:  //PATHSEG_MOVETO_ABS
      case 4:  //PATHSEG_LINETO_ABS:
      case 18: //PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS
        return t+(s ? s : p.x.toFixed(0)+" "+p.y.toFixed(0));
      case 8: //PATHSEG_CURVETO_QUADRATIC_ABS
        return t+p.x1.toFixed(0)+" "+p.y1.toFixed(0)+" "+(s ? s : p.x.toFixed(0)+" "+p.y.toFixed(0));
      case 6: //PATHSEG_CURVETO_CUBIC_ABS
        return t+p.x1.toFixed(0)+" "+p.y1.toFixed(0)+" "+p.x2.toFixed(0)+" "+p.y2.toFixed(0)+" "+(s ? s : p.x.toFixed(0)+" "+p.y.toFixed(0));
      case 10: //PATHSEG_ARC_ABS
        break;
      case 16: //PATHSEG_CURVETO_CUBIC_SMOOTH_ABS
        return t+p.x2.toFixed(0)+" "+p.y2.toFixed(1)+" "+(s ? s : p.x.toFixed(0)+" "+p.y.toFixed(0));
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getSeg", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setPath. Description: Actualizar camino en referencia  
  setPath: function(path, parent, ref){ 
  try { 
    if (ref){
      ref.attr("start", parent._pstart._connectionPoint ? parent._pstart._connectionPoint.index : parent._pstart.x+" " +parent._pstart.y);
      ref.attr("end", parent._pend._connectionPoint ? parent._pend._connectionPoint.index : parent._pend.x+" " +parent._pend.y);
      //Crear camino
      var value = "";
      for(var i=0; i<path.pathSegList.numberOfItems; i++)
        value += this._getSeg(path.pathSegList.getItem(i), i==0 ? "@" : i==path.pathSegList.numberOfItems-1 ? "#" : null);
      ref.attr("path", value);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setPath", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: create. Description: Adicionar una línea Psi Administrador de Diagrama Psi  
  create: function(svggen, id, parent, start, path, end, options, ref, startConnection, endConnection){ 
  try { 
    var group = svggen.group(parent, id),
        pstart = startConnection ? startConnection.getPoint(start, parent) : null,
        pend = endConnection ? endConnection.getPoint(end, parent) : null,
        path = svggen.path(group, path.replace("@",pstart?pstart.tostr():start).replace("#",pend?pend.tostr():end), this.lineSetting.get());
    $(path).attr("key", "path");
    path._parent = group; 
    if (this.attr("title")=="yes"){
      var title = svggen.title(path, "My Title!!");
      $(title).attr("key", "title");
    }
    
    //Enlazar línea Psi
    this._createAttributes(group, this.attr("css-class"), "line", this.id());
    this._createReferences(group, parent, ref);
    path._lib = this;
    if (ref) {
      path._ref = ref;
      ref._path = path;
      ref._pstart = group._pstart = path.pathSegList.getItem(0); 
      group._pstart._connection = startConnection;
      group._pstart._connectionPoint = pstart; 
      ref._pmiddle = group._pmiddle = path.getPointAtLength(path.getTotalLength()/2);
      ref._pend = group._pend = path.pathSegList.getItem(path.pathSegList.numberOfItems-1);
      group._pend._connection = endConnection;
      group._pend._connectionPoint = pend;  
    }
    this._setLabels(svggen, group, path, options.labels, ref);
    this._bindEvents(group, path, ref); 
    
    //Crear lista de puntos de control
    group._checkpoints = new Checkpoints(this, group, path, ref, svggen, this.events ? this.events.get("checkpoints") : null);
    path._checkpoints = group._checkpoints;
    
    return group;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: createIcon. Description: Crea el ícono de línea Psi  
  createIcon: function(svggen, id, parent, options, ref){ 
  try { 
    if (!this.icon) return null;
    
    //Crear ícono para elemento gráfico de Psi
    var icon = svggen.group(parent, id+"-icon");
    svggen.add(icon, this.icon.cloneSVG());
    
    //Establecer translación, rotación y escala
    this.createTransform(icon, options, ref);
    
    //Enlazar elementos a la figura
    this._createReferences(icon, parent, ref);
    this._bindEvents(icon, ref);
    
    return icon;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createIcon", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onChildrenCreated. Description: Crear mapa de ajustes de parámetros por defecto  
  onChildrenCreated: function(){ 
  try { 
    //Adicionar ajustes por defecto si no se ha definido
    if (this.lineSetting==null) {
      this.lineSetting = new Settings();
      this.lineSetting.onInit("line_setting");
    }
    if (this.markSetting==null) {
      this.markSetting = new Settings();
      this.markSetting.onInit("linemark_setting");
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Line"; }
});


  //Component Methods   
  //Method: register. Description: Registrar un conjunto de líneas en Librería Gráfica Psi  
  function register(library){ 
    $.extend(lines, library.lines);
   };  
  //Method: newLine. Description: Obtener una Línea Psi  
  function newLine(name, svggen, id, parent, start, middle, end, options, ref){ 
    if (lines[name]) 
      return lines[name].create(svggen, id, parent, start, middle, end, options, ref);
    throw new PsiError("GLPSI.FACTORY_NEW_LINE_ERROR", [name], [this, arguments]);
   };  
  //Method: newConnector. Description: Obtener Línea Psi para un Connector Psi  
  function newConnector(name, svggen, id, parent, start, middle, end, options, ref, startConnection, endConnection){ 
    if (lines[name]) 
      return lines[name].create(svggen, id, parent, start, middle, end, options, ref, startConnection, endConnection);
    throw new PsiError("GLPSI.FACTORY_NEW_CONNECTOR_ERROR", [name], [this, arguments]);
   };  
  //Method: getAll. Description: Obtener lista de todos las líneas Psi disponibles  
  function getAll(){ 
    return $.extend({},{
      lines: lines
    });
   };


/*-----------------------------------------------------
* Component Definition: Lines  
*-----------------------------------------------------*/
return {
  //Content 
  LabelPoint: LabelPoint, //* Type: Class
  CheckpointType: CheckpointType, //* Type: Enum
  Checkpoint: Checkpoint, //* Type: Class
  Checkpoints: Checkpoints, //* Type: Class
  MinimumType: MinimumType, //* Type: Enum
  Line: Line, //* Type: Class
  //Properties 
  lines: lines,
  //Methods 
  register: register,
  newLine: newLine,
  newConnector: newConnector,
  getAll: getAll,
  toString: function() { return "Lines"; }
};
})(); 

/*-----------------------------------------------------
*=Var[libraries]: libraries
* Description: Administración de Datos Psi
*-----------------------------------------------------*/
var libraries = {};

/*-----------------------------------------------------
*=Function[register_library]: register
* Description: Registra unal nueva librería gráfica Psi
*-----------------------------------------------------*/
function register (name, options, rewrite) { 
  if (exist(name) && !rewrite) 
    return libraries[name];
  
  var library = _run(name, options);
  
  //Registrar líneas y elementos gráficos
  Graph.register(library.object);
  Lines.register(library.object);
  library.object.registerIcons();

  //register library
  libraries[name] = library;
  return library; 
 };   

/*-----------------------------------------------------
*=Function[exist_library]: exist
* Description: Registra unal nueva librería gráfica Psi
*-----------------------------------------------------*/
function exist (name) { 
  return libraries[name]!=null; 
 };   

/*-----------------------------------------------------
*=Class[graph_library]: GraphsLibrary
* Description: Contiene la lista de elementos gráficos Psi y líneas Psi para definir
*-----------------------------------------------------*/
function GraphsLibrary () {
  //Properties   
  //Property: scripts. Description: Mapa de scriptings  
  this.scripts = {};  
  //Property: defs. Description: Definiciones  
  this.defs = null;  
  //Property: functions. Description: Mapa de funciones  
  this.functions = {};  
  //Property: makes. Description: Mapa de modificadores de figuras  
  this.makes = {};  
  //Property: connectionEdges. Description: Mapa de bordes de conexión Psi  
  this.connectionEdges = {};  
  //Property: shapes. Description: Mapa de figuras  
  this.shapes = {};  
  //Property: containers. Description: Mapa de contenedores  
  this.containers = {};  
  //Property: lists. Description: Mapa de listas  
  this.lists = {};  
  //Property: lines. Description: Mapa de líneas  
  this.lines = {}; 
};
//Inheritance
GraphsLibrary.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
GraphsLibrary.methods({
  //Methods   
  //Method: registerIcons. Description: Registrar íconos de los elementos gráficos Psi y líneas Psi  
  registerIcons: function(){ 
    var list = [this.shapes, this.containers, this.lists, this.lines];
    for(var k in list)
      for (var id in list[k]) {
        item = list[k][id];
        if (item.icon)
          Icon.add(id, item);
      }
   },
  //Events   
  //Event: onInit. Description: Inicializa alias  
  onInit: function(){ 
  try { 
    this.alias = this.attr("alias");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onChildrenCreated. Description: Inicializar íconos  
  onChildrenCreated: function(){ 
  try { 
    this.registerIcons();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "GraphsLibrary"; }
});

/*-----------------------------------------------------
*=Parser[graph_library_parser]: GraphLibraryParser
* Description: Analizador para libraría gráfica Psi
*-----------------------------------------------------*/
function GraphLibraryParser () {
  //Properties  
};
GraphLibraryParser.inherits(PsiXML.Parser); 
//* Definitions Events and Methods
GraphLibraryParser.methods({
  
  //Define Properties
  defineProperties: function(newElement) {
    if (newElement.parent) {
      switch (newElement.parent._def.key) { 
        case ID_TAG_GRAPH_LIBRARY:
          switch (newElement.tag) { 
            case "Script": newElement.parent.scripts[newElement.id()] = newElement; break;
            case "Defs": newElement.parent.defs = newElement; break;
            case "Function": newElement.parent.functions[newElement.id()] = newElement; break;
            case "Make": newElement.parent.makes[newElement.id()] = newElement; break;
            case "ConnectionEdge": newElement.parent.connectionEdges[newElement.id()] = newElement; break;
            case "Shape": newElement.parent.shapes[newElement.id()] = newElement; break;
            case "Container": newElement.parent.containers[newElement.id()] = newElement; break;
            case "List": newElement.parent.lists[newElement.id()] = newElement; break;
            case "Line": newElement.parent.lines[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_DEFS:
          switch (newElement.tag) { 
            case "SourceSVG": newElement.parent.sources[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_CONNECTION_DEFINE:
          switch (newElement.tag) { 
            case "Edge": newElement.parent.edges[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_SHAPE:
          switch (newElement.tag) { 
            case "Events": newElement.parent.events = newElement; break;
            case "Commands": newElement.parent.commands = newElement; break;
            case "Transform": newElement.parent.transformSettings = newElement; break;
            case "SourceSVG": newElement.parent.source = newElement; break;
            case "IconSVG": newElement.parent.icon = newElement; break;
          };
          break;
        case ID_TAG_CONTAINER:
          switch (newElement.tag) { 
            case "Events": newElement.parent.events = newElement; break;
            case "Commands": newElement.parent.commands = newElement; break;
            case "Settings": newElement.parent.settings = newElement; break;
            case "HeaderSVG": newElement.parent.header = newElement; break;
            case "FooterSVG": newElement.parent.footer = newElement; break;
            case "OnResize": newElement.parent.resizeDefine = newElement; break;
            case "IconSVG": newElement.parent.icon = newElement; break;
          };
          break;
        case ID_TAG_LIST:
          switch (newElement.tag) { 
            case "Events": newElement.parent.events = newElement; break;
            case "Commands": newElement.parent.commands = newElement; break;
            case "Settings": newElement.parent.settings = newElement; break;
            case "HeaderSVG": newElement.parent.header = newElement; break;
            case "SectionSVG": newElement.parent.section = newElement; break;
            case "ItemSVG": newElement.parent.item = newElement; break;
            case "OnResize": newElement.parent.resizeDefine = newElement; break;
            case "OnSection": newElement.parent.sectionDefine = newElement; break;
            case "OnItem": newElement.parent.itemDefine = newElement; break;
            case "IconSVG": newElement.parent.icon = newElement; break;
          };
          break;
        case ID_TAG_LINE:
          switch (newElement.tag) { 
            case "LineSetting": newElement.parent.lineSetting = newElement; break;
            case "MarkSetting": newElement.parent.markSetting = newElement; break;
            case "Events": newElement.parent.events = newElement; break;
            case "IconSVG": newElement.parent.icon = newElement; break;
          };
          break;
      }
    }
  }, 
  //Methods 
  //Events 
  toString: function() { return "GraphLibraryParser"; }
});


/*-----------------------------------------------------
* Component:  Methods
*-----------------------------------------------------*/



/*-----------------------------------------------------
* Register Component to PsiXML:  GLPsi
*-----------------------------------------------------*/
PsiXML.registerLanguagePsi(ALIAS, GRAMMAR, GraphLibraryParser);

function _run(name, options, context){
  return PsiXML.traductor_PxmlToPobj(ALIAS, name, options, context);
}
function _language(){
  return PsiXML.LanguagePsi.get(ALIAS);
}


/*-----------------------------------------------------
* Module Initialize: InitGLPsi  
*-----------------------------------------------------*/
function InitGLPsi() { 
    //Registrar base de datos de modificadores de gráficos Psi
    PsiData.register("make",{
      register: function(key, bodydef, options){
        //Crear función de definición
        var keydef = key+"--def";
        this[keydef] = new Function("svggen", "parent", "options", "ref", "data", bodydef);
        this[keydef].default = options;
        //Crear función de llamado
        var bodymake = "var makedef = this['"+keydef+"'], ops = $.extend({}, makedef.default, options); "
                     + "return makedef(svggen, parent, ops, ref, data);";
        this[key] = new Function("svggen", "parent", "options", "ref", "data", bodymake);
        return this[key];
      }
    });
    PsiData.register("connection");
    PsiData.register("defs");
  
}
InitGLPsi();

/*-----------------------------------------------------
* Component Definition: GLPsi  
*-----------------------------------------------------*/
return {
  //Content 
  Icon: Icon, //* Type: Object
  GeometryType: GeometryType, //* Type: Enum
  Geometry: Geometry, //* Type: Component
  Script: Script, //* Type: Class
  LoadFunction: LoadFunction, //* Type: Class
  SourceSVG: SourceSVG, //* Type: Class
  Defs: Defs, //* Type: Class
  IconSVG: IconSVG, //* Type: Class
  Text: Text, //* Type: Class
  Make: Make, //* Type: Class
  Settings: Settings, //* Type: Class
  Events: Events, //* Type: Class
  GLBase: GLBase, //* Type: Class
  ConnectionEdge: ConnectionEdge, //* Type: Component
  Graph: Graph, //* Type: Component
  PositionLine: PositionLine, //* Type: Enum
  Lines: Lines, //* Type: Component
  libraries: libraries, //* Type: Var
  register: register, //* Type: Function
  exist: exist, //* Type: Function
  GraphsLibrary: GraphsLibrary, //* Type: Class
  //Properties 
  //Methods 
  toString: function() { return "GLPsi"; },
  run: _run,
  language: _language
};
})(); 

