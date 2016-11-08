/* Generated power ModelPsi (@VERSION 2.0) 
* Model Name: Tools Psi for Diagram Psi
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
*=Class[pointer_position]: PointerPosition
* Description: Apuntador de posición para elementos gráficos Psi
*-----------------------------------------------------*/
function PointerPosition (self) {
  //Properties   
  //Property: pointer. Description: this._createPointer(self)  
  this.pointer = this._createPointer(self); 
}; 
//* Definitions Events and Methods
PointerPosition.methods({
  //Methods   
  //Method: _createPointer. Description: Crear elemento referencia a un elemento SVG o DOM  
  _createPointer: function(self){ 
  try { 
    var pointer = $("<div></div>")
                .addClass("wpsi-pointer-position")
                .appendTo("body");
    if (self==null){
      pointer.css({
        top: window.pageYOffset+"px",
        left: window.pageXOffset+"px",
        width: $(window).width(), 
        height:  $(window).height()
      });
    }
    else if (self.getBoundingClientRect!=null){
      var rect = self.getBoundingClientRect();
      pointer.css({
        top: (window.pageYOffset+rect.top)+"px",
        left: (window.pageXOffset+rect.left)+"px",
        width: rect.width+"px",
        height: rect.height+"px"
      });
    }
    else if (self.jquery) {
      var pos = self.position();
      pointer.css({
        top: pos.top+"px",
        left: pos.left+"px",
        width: self.css("width"), 
        height: self.css("height")
      });
    }
    else if (self._dom){
      var pos = self._dom.position();
      pointer.css({
        top: pos.top+"px",
        left: pos.left+"px",
        width: self._dom.css("width"), 
        height: self._dom.css("height")
      });
    }
    else {
      pointer.css({
        top: window.pageYOffset+"px",
        left: window.pageXOffset+"px",
        width: $(window).width(), 
        height:  $(window).height()
      });
    }
    return pointer;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_createPointer", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: locate. Description: Ubicar un elemento Psi  
  locate: function(element, newPosition){ 
  try { 
    if (newPosition) {
      newPosition.of = this.pointer;
      element.position(newPosition);
      this.pointer.remove();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"locate", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: locateWidget. Description: Ubicar un widget Psi  
  locateWidget: function(element, type, newPosition){ 
  try { 
    if (newPosition) {
      newPosition.of = this.pointer;
      element[type]("option", "position", newPosition);
      this.pointer.remove();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"locateWidget", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "PointerPosition"; }
});

/*-----------------------------------------------------
*=Widget[toolbar_widget]: psi.toolbar
* Description: Barra de herramientas
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.toolbar",  $.ui.dialog, {
  options: {   
    //Option: title. Description: Título barra de herramientas  
    title: "Title here!!",  
    //Option: dialogClass. Description: Definición de clases CSS  
    dialogClass: "tdpsi-toolbar",  
    //Option: resizable. Description: Es redimensionable?  
    resizable: false,  
    //Option: width. Description: Ancho de barra de herramientas  
    width: 200,  
    //Option: height. Description: Alto de barra de herramientas  
    height: 400 
  },
  //Properties 
  //Methods   
  //Method: showMessage. Description: Mostrar mensaje según tipo  
  showMessage: function(message, type, autoClose){ 
    $("p", this.uiMessage)
      .empty()
      .append(message);
    $(this.uiMessage)
      .removeClass("ui-state-error").removeClass("ui-state-highlight")
      .width(this.uiDialogTitlebar.outerWidth()-2)
      .addClass(type=="error" ? "ui-state-error" : "ui-state-highlight")
      .show("blind", 500, 
        autoClose 
        ? function(){ 
            var err = $(this); 
            setTimeout(function(){err.hide("blind", 500);}, 1500); 
          } 
        : null
        );
   },  
  //Method: open. Description: Abre barra de herramientas Psi  
  open: function(self, ref, context){ 
    this._super();
   },  
  //Method: destroy. Description: Destruir barra de herramientas Psi  
  destroy: function(){ 
    this._super();
   },
  //Events   
  //Event: _create. Description: Crear toolbar  
  _create: function(){ 
  try { 
    this._super();
    var that = this;
    
    //Adicionar botton de minimizar
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
        that.uiDialogButtonPane.toggle(); 
        that.element.toggle();				
     		//that.minmax(event);				
     		})
     	.appendTo(this.uiDialogTitlebar); 
    
    //Adicionar mensaje
    this.uiMessage = $("<div class='ui-corner-bottom'><p></p></div>")
      .hide();
    this.uiDialogTitlebar
      .removeClass("ui-widget-header")
      .addClass("ui-state-default")
      .after(this.uiMessage);
    $("<span class='ui-icon ui-icon-close'></span>")
      .prependTo(this.uiMessage)
      .click(function(){ $(this).parent().hide(); });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=Widget[content_widget]: psi.content
* Description: Herramienta de contenido
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.content", {
  options: {  
  },
  //Properties   
  //Property: _isOpen. Description: Contenido abierto?  
  _isOpen: false,
  //Methods   
  //Method: open. Description: Muestra el contenido Psi  
  open: function(self, ref, context){ 
  try { 
    if (this._isOpen) return this;
    //Terminar
    this._isOpen = true;
    this._trigger("beforeShow", 0, {self: self, ref: ref, context: context});		
    this.element.show();
    return this;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"open", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: isOpen. Description: Esta abierto el contenido Psi  
  isOpen: function(){ 
    return this._isOpen;
   },  
  //Method: close. Description: Cierra el contenido Psi  
  close: function(){ 
    this._isOpen = false;
    this.element.hide();
   },
  //Events   
  //Event: _create. Description: Crear Contenido Psi  
  _create: function(){ 
    this._trigger("afterCreate", 0, this.options);
   },
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=Widget[globe_widget]: psi.globe
* Description: Herremientas de globos de llamada
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.globe", {
  options: {   
    //Option: width. Description: Ancho del globo  
    width: 200,  
    //Option: height. Description: Alto del globo  
    height: "auto",  
    //Option: arrow. Description: Flecha de salida  
    arrow: "top",  
    //Option: position. Description: Posición de salida  
    position: {of: null, my: "center top", at: "center bottom", offset: "0 -2", collision: "none none"},  
    //Option: contentClass. Description: Definición de clases CSS  
    contentClass: "wpsi-globe-content" 
  },
  //Properties   
  //Property: _isOpen. Description: Contenido abierto?  
  _isOpen: false,  
  //Property: bubble. Description: Globo  
  bubble: null,  
  //Property: currentId. Description: Elemento actual  
  currentId: null,
  //Methods   
  //Method: isOpen. Description: Esta abierto la herramienta de nota  
  isOpen: function(){ 
    return this._isOpen;
   },  
  //Method: open. Description: Mostrar herramienta de nota  
  open: function(self, ref, context){ 
  try { 
    //Determinar si se está procesando el mismo: self, ref, context
    var currendId = self && self._parent ? $(self._parent).attr("id") : $(self).attr("id");
    if (this._isOpen && this.currentId==currendId) 
      return this;
    this.currentId = currendId;
    
    //Borrar elementos que esten visisble
    //$('[tdpsi-globe]').globe("hide");
      
    //Procesar globo
    this._trigger("beforeShow", 0, {self: self, ref: ref, context: context});		
    this.bubble.show();
    this.element.attr("tdpsi-globe","yes");
    this.bubble.height(this.options.height=="auto" ? this.bubble.height()+1 : this.options.height);
    
    //Ubicar globo
    var pointer = new PointerPosition(self);
    pointer.locate(this.bubble, this.options.position);
    
    //Terminar
    this._isOpen = true;
    return this;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"open", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: close. Description: Cerrar herramientas de nota  
  close: function(){ 
    this._isOpen = false;
    this.bubble.hide();
    this.element.removeAttr("tdpsi-show");
   },  
  //Method: show. Description: Mostrar herramienta de nota  
  show: function(self){ 
    //Procesar globo
    this.bubble.show();
    this.bubble.height(this.options.height=="auto" ? this.bubble.height()+1 : this.options.height);
    
    //Ubicar globo
    var pointer = new PointerPosition(self);
    pointer.locate(this.bubble, this.options.position);
    
    //Terminar
    return this;
   },  
  //Method: hide. Description: Ocultar herramienta de nota  
  hide: function(){ 
    this.bubble.hide();
   },
  //Events   
  //Event: _create. Description: Crear herremienta de nota  
  _create: function(){ 
  try { 
    //Crear herramienta de nota
    this.bubble = $("<div>")
      .hide()
      .addClass("wpsi-globe ui-widget "+this.options.arrow)
      .css({"width": this.options.width, "height": this.options.height, "z-index": "200"})
      .appendTo("body");
    this.arrow = $('<div class="arrow"></div>')  
      .appendTo(this.bubble);
    if (this.options.arrowLeft)
      this.arrow.css("left", this.options.arrowLeft);
    if (this.options.arrowTop)
      this.arrow.css("top", this.options.arrowTop);
    this.element
      .addClass("ui-widget-content ui-corner-all "+this.options.contentClass)
      .appendTo(this.bubble);
    this.bubble.height(this.bubble.height()+1);
    //Evento despuás de crear blobo
    this._trigger("afterCreate", 0, this.options);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: _init. Description: Inicializar herramienta de nota  
  _init: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: _destroy. Description: Destruir herramienta de nota  
  _destroy: function(){ 
    this.bubble
      .before(this.element)
      .remove();
    this.element.removeClass("ui-widget-content ui-corner-all "+this.options.contentClass);
   },
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=Widget[frameset_widget]: psi.frameset
* Description: Conjunto de marcos de referencia
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.frameset", {
  options: {   
    //Option: border. Description: Borde del marco  
    border: 3,  
    //Option: class. Description: Clase CSS del marco  
    class: null,  
    //Option: parentSelector. Description: Selector jQuery para el padre  
    parentSelector: "body",  
    //Option: framesSelector. Description: Selector jQuery para los marcos  
    framesSelector: null 
  },
  //Properties   
  //Property: _isOpen. Description: Contenido abierto?  
  _isOpen: false,  
  //Property: set. Description: Conjunto de marcos  
  set: {},
  //Methods   
  //Method: _getRef. Description: Obtener el elemento padre Psi  
  _getRef: function(current){ 
  try { 
    return !current._psixml 
         ? current._ref && current._ref._psixml
           ? current._ref
           : current._ref && current._ref._ref && current._ref._ref._psixml
             ? current._ref._ref
             : null
         : current;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getRef", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getSet. Description: Obtener conjunto de marcos de referencia  
  getSet: function(){ 
    return this.set;
   },  
  //Method: createFrame. Description: Crear marco de referencia  
  createFrame: function(current, type, params){ 
  try { 
    var $frame = $("<div></div>")
                  .appendTo(this.element)
                  .attr("type", type)
                  .addClass(params.class)
                  .css({position: "absolute", display: "block"});
        frame = $frame.get(0),
        border = params.border;
        
    //Crear cursor por defecto
    if ($frame.css("cursor")=="auto")
      $frame.css("cursor", "crosshair");
    
    //Crear referencias
    frame.attached = this._getRef(current);
    if (frame.attached)
      $frame.attr("key", frame.attached.id());
      
    //Ubicar frame
    if (current.getBoundingClientRect!=null){
      var rect = current.getBoundingClientRect();
      $frame.css({
        top: (window.pageYOffset+rect.top-border)+"px",
        left: (window.pageXOffset+rect.left-border)+"px",
        width: (rect.width+2*border)+"px",
        height: (rect.height+2*border)+"px"
      });
    }
    else {
      $frame.css({
        top: current.css("top"),
        left: current.css("left"),
        width: current.css("width"),
        height: current.css("height")
      });
      if (border>0)
        $frame.css({
          top: "+=-"+border,
          left: "+=-"+border,
          width: "+="+2*border,
          height: "+="+2*border
        });
    }
    
    //Adicionar eventos
    if (this.options.click) 
      $frame.click(this.options.click);
    if (params.drag) {
      $frame
        .drag("start", this.options.frameDragStart)
        .drag(this.options.frameDrag)
        .drag("end", this.options.frameDragEnd);
    }
    if (params.drop) {
      $frame
        .drop("start", this.options.frameDropStart)
        .drop(this.options.frameDrop)
        .drop("end", this.options.frameDropEnd);
    }  
    return frame;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createFrame", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Refrescar conjunto de marcos de referncia  
  refresh: function(){ 
  try { 
    //Eliminar contenido
    this.element.empty();
    
    //Adicionar frame
    var self = this;
    for(var name in this.options.framesSelector){
      var params = this.options.framesSelector[name];
      this.set[name] = new Array();
      $(params.selector, this.options.parentSelector).each(function(){
        self.set[name].push( self.createFrame(this, name, params) );
      });
      this[params.show ? "show":"hide"](name);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: isOpen. Description: Esta abierto el conjunto de marcos de referencia Psi  
  isOpen: function(){ 
    return this._isOpen;
   },  
  //Method: open. Description: Muestra el conjunto de marcos de referencia Psi  
  open: function(){ 
  try { 
    if (this._isOpen) return this;
    this._isOpen = true;
    this.refresh();
    this.element.show();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"open", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: close. Description: Cierra el el conjunto de marcos de referencia Psi  
  close: function(){ 
    this._isOpen = false;
    this.element.hide();
   },  
  //Method: mapAttached. Description: Obtener mapa de adjuntos  
  mapAttached: function(name){ 
  try { 
    var result = {};
    if (name!=null && this.set[name]!=null) 
      $(this.set[name]).each(function(){
        if (this.attached)
          result[this.attached.id()] = this.attached;
      });
    else
      this.element.children().each(function(){
        if (this.attached)
          result[this.attached.id()] = this.attached;
      });
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"mapAttached", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: show. Description: Mostrar marcos de referencia  
  show: function(name, params){ 
  try { 
    if (name!=null && this.set[name]!=null) {
      if (params){
        var self = this;
        $(this.set[name]).empty();
        $(params.selector, this.options.parentSelector).each(function(){
          self.set[name].push( self.createFrame(this, params) );
        });
      }
      $(this.set[name]).show();
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"show", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: hide. Description: Ocultar marcos de referencia  
  hide: function(name){ 
    if (name!=null && this.set[name]!=null)
      $(this.set[name]).hide();
   },
  //Events   
  //Event: _create. Description: Inicializa conjunto de marcos de referencia  
  _create: function(){ 
    this._super();
    this.element
      .appendTo("body")
      .attr("type", "frameset")
      .hide();
   },
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=ComponentPsi[t_psi]: TPsi
* Description: Tools Psi for Diagram Psi
*-----------------------------------------------------*/
var TPsi = (function () {  


/*-----------------------------------------------------
* Constants Identifiers Grammar: TPsi 
*-----------------------------------------------------*/
var ID_TAG_TOOLS_PSI = "tools_psi";
var ID_TAG_LOAD_DOCUMENT = "load_document";
var ID_TAG_VAR = "var";
var ID_TAG_MAKE = "make";
var ID_TAG_SCRIPT = "script";
var ID_TAG_FUNCTION_TOOL = "function_tool";
var ID_TAG_CLASS_TOOL = "class_tool";
var ID_TAG_PROPERTIES = "properties";
var ID_TAG_COMMAND_TOOL = "command_tool";
var ID_TAG_DIALOG_TOOL = "dialog_tool";
var ID_TAG_TOOLBAR_TOOL = "toolbar_tool";
var ID_TAG_TOOLTIP_TOOL = "tooltip_tool";
var ID_TAG_FRAME_TOOL = "frame_tool";
var ID_TAG_DROP_TOOL = "drop_tool";
var ID_TAG_DRAGDROP_TOOL = "dragdrop_tool";
var ID_TAG_FRAME_OPTIONS = "frame_options";
var ID_TAG_POPUP_TOOL = "popup_tool";
var ID_TAG_MENU_TOOL = "menu_tool";
var ID_TAG_SPACE_MENU = "space_menu";
var ID_TAG_OPTIONS = "options";
var ID_TAG_XSL_PARAMS = "xsl_params";
var ID_TAG_POSITION = "position";
var ID_TAG_TEXT = "text";
var ID_TAG_CONTENT = "content";
var ID_TAG_EVENT = "event";
var ID_TAG_BUTTON = "button";
var ID_TAG_SUBMENU_POPUP = "submenu_popup";
var ID_TAG_SUBMENU_MENU = "submenu_menu";
var ID_TAG_ITEM_POPUP = "item_popup";
var ID_TAG_ITEM_MENU = "item_menu";
var ID_TAG_GENERATOR_TOOL = "generator_tool";
var ID_TAG_GRAPHS_GENERATOR = "graphs_generator";
var ID_TAG_LINES_GENERATOR = "lines_generator";
var ID_TAG_PROCESS = "process";
var ID_TAG_METHOD = "method";
var ID_TAG_DEFINITION_MATRIX = "definition_matrix";
ID_TAGS = {};

/*-----------------------------------------------------
* Structure to GrammarPsi: TPsi
*-----------------------------------------------------*/
ID_TAGS[ID_TAG_TOOLS_PSI] = {
  CLASS: "TPsi.ToolsPsi",
  TAG: "ToolsPsi",
  MULTIPLICITY: { "LoadDocument": "0..n","Var": "0..n","Make": "0..n","Script": "0..n","Function": "0..n","Class": "0..n","Command": "0..n","Dialog": "0..n","Tooltip": "0..n","Toolbar": "0..n","Frame": "0..n","Drop": "0..n","DragDrop": "0..n","Popup": "0..n","Menu": "0..n","Generator": "0..n" },
  CHILDREN: { "LoadDocument": ID_TAG_LOAD_DOCUMENT,"Var": ID_TAG_VAR,"Make": ID_TAG_MAKE,"Script": ID_TAG_SCRIPT,"Function": ID_TAG_FUNCTION_TOOL,"Class": ID_TAG_CLASS_TOOL,"Command": ID_TAG_COMMAND_TOOL,"Dialog": ID_TAG_DIALOG_TOOL,"Tooltip": ID_TAG_TOOLTIP_TOOL,"Toolbar": ID_TAG_TOOLBAR_TOOL,"Frame": ID_TAG_FRAME_TOOL,"Drop": ID_TAG_DROP_TOOL,"DragDrop": ID_TAG_DRAGDROP_TOOL,"Popup": ID_TAG_POPUP_TOOL,"Menu": ID_TAG_MENU_TOOL,"Generator": ID_TAG_GENERATOR_TOOL },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*alias:identifier|module:identifier"
};
ID_TAGS[ID_TAG_LOAD_DOCUMENT] = {
  CLASS: "TPsi.LoadDocument",
  TAG: "LoadDocument",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*alias:text|*url:text|rewrite=no:select(yes,no)"
};
ID_TAGS[ID_TAG_VAR] = {
  CLASS: "TPsi.Var",
  TAG: "Var",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|type=string:select(string,number,integer,object,xml,jxml,jQuery,map)|public:text(yes,no)|description:text"
};
ID_TAGS[ID_TAG_MAKE] = {
  CLASS: "TPsi.Make",
  TAG: "Make",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier"
};
ID_TAGS[ID_TAG_SCRIPT] = {
  CLASS: "TPsi.Script",
  TAG: "Script",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier"
};
ID_TAGS[ID_TAG_FUNCTION_TOOL] = {
  CLASS: "TPsi.FunctionTool",
  TAG: "Function",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|arguments:text"
};
ID_TAGS[ID_TAG_CLASS_TOOL] = {
  CLASS: "TPsi.ClassTool",
  TAG: "Class",
  MULTIPLICITY: { "Properties": "0..1","Method": "0..n" },
  CHILDREN: { "Properties": ID_TAG_PROPERTIES,"Method": ID_TAG_METHOD },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*name:identifier|module:identifier|inherits:identifier|init:text"
};
ID_TAGS[ID_TAG_PROPERTIES] = {
  CLASS: "TPsi.Options",
  TAG: "Properties",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: ""
};
ID_TAGS[ID_TAG_COMMAND_TOOL] = {
  CLASS: "TPsi.CommandTool",
  TAG: "Command",
  MULTIPLICITY: { "Options": "0..1","Body": "1..1" },
  CHILDREN: { "Options": ID_TAG_OPTIONS,"Body": ID_TAG_TEXT },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier"
};
ID_TAGS[ID_TAG_DIALOG_TOOL] = {
  CLASS: "TPsi.DialogTool",
  TAG: "Dialog",
  MULTIPLICITY: { "Options": "0..1","Position": "0..1","XslParams": "0..1","Var": "0..n","Content": "0..1","Event": "0..n","Button": "0..n" },
  CHILDREN: { "Options": ID_TAG_OPTIONS,"Position": ID_TAG_POSITION,"XslParams": ID_TAG_XSL_PARAMS,"Var": ID_TAG_VAR,"Content": ID_TAG_CONTENT,"Event": ID_TAG_EVENT,"Button": ID_TAG_BUTTON },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|close=none:select(auto,none)|inherits:text|class:text"
};
ID_TAGS[ID_TAG_TOOLBAR_TOOL] = {
  CLASS: "TPsi.ToolbarTool",
  TAG: "Toolbar",
  MULTIPLICITY: { "Options": "0..1","Position": "0..1","XslParams": "0..1","Var": "0..n","Content": "0..1","Event": "0..n" },
  CHILDREN: { "Options": ID_TAG_OPTIONS,"Position": ID_TAG_POSITION,"XslParams": ID_TAG_XSL_PARAMS,"Var": ID_TAG_VAR,"Content": ID_TAG_CONTENT,"Event": ID_TAG_EVENT },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|close=none:select(auto,none)|inherits:text|class:text"
};
ID_TAGS[ID_TAG_TOOLTIP_TOOL] = {
  CLASS: "TPsi.TooltipTool",
  TAG: "Tooltip",
  MULTIPLICITY: { "Options": "0..1","XslParams": "0..1","Var": "0..n","Content": "0..1","Event": "0..n" },
  CHILDREN: { "Options": ID_TAG_OPTIONS,"XslParams": ID_TAG_XSL_PARAMS,"Var": ID_TAG_VAR,"Content": ID_TAG_CONTENT,"Event": ID_TAG_EVENT },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|close=auto:select(auto,none)|inherits:text|class:text"
};
ID_TAGS[ID_TAG_FRAME_TOOL] = {
  CLASS: "TPsi.FrameTool",
  TAG: "Frame",
  MULTIPLICITY: { "Options": "0..1","XslParams": "0..1","Var": "0..n","Content": "1..1","Event": "0..n" },
  CHILDREN: { "Options": ID_TAG_OPTIONS,"XslParams": ID_TAG_XSL_PARAMS,"Var": ID_TAG_VAR,"Content": ID_TAG_CONTENT,"Event": ID_TAG_EVENT },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|close=none:select(auto,none)|inherits:text|class:text"
};
ID_TAGS[ID_TAG_DROP_TOOL] = {
  CLASS: "TPsi.DropTool",
  TAG: "Drop",
  MULTIPLICITY: { "FrameDrop": "0..1","Options": "0..1","XslParams": "0..1","Var": "0..n","Content": "0..1","Event": "0..n" },
  CHILDREN: { "FrameDrop": ID_TAG_FRAME_OPTIONS,"Options": ID_TAG_OPTIONS,"XslParams": ID_TAG_XSL_PARAMS,"Var": ID_TAG_VAR,"Content": ID_TAG_CONTENT,"Event": ID_TAG_EVENT },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|close=auto:select(auto,none)|map:identifier|parent-selector=body:text|append-selector:text|hide=auto:select(auto,none)"
};
ID_TAGS[ID_TAG_DRAGDROP_TOOL] = {
  CLASS: "TPsi.DragDropTool",
  TAG: "DragDrop",
  MULTIPLICITY: { "FrameDrag": "1..1","FrameDrop": "1..1","Options": "0..1","XslParams": "0..1","Var": "0..n","Content": "0..1","Event": "0..n" },
  CHILDREN: { "FrameDrag": ID_TAG_FRAME_OPTIONS,"FrameDrop": ID_TAG_FRAME_OPTIONS,"Options": ID_TAG_OPTIONS,"XslParams": ID_TAG_XSL_PARAMS,"Var": ID_TAG_VAR,"Content": ID_TAG_CONTENT,"Event": ID_TAG_EVENT },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|close=auto:select(auto,none)|map:identifier|parent-selector=body:text|append-selector:text|hide=auto:select(auto,none)"
};
ID_TAGS[ID_TAG_FRAME_OPTIONS] = {
  CLASS: "TPsi.Options",
  TAG: "Options",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*selector:text|*class:text|border=3:number"
};
ID_TAGS[ID_TAG_POPUP_TOOL] = {
  CLASS: "TPsi.PopupTool",
  TAG: "Popup",
  MULTIPLICITY: { "Options": "0..1","Item": "0..n","SubMenu": "0..n","Space": "0..n" },
  CHILDREN: { "Options": ID_TAG_OPTIONS,"Item": ID_TAG_ITEM_POPUP,"SubMenu": ID_TAG_SUBMENU_POPUP,"Space": ID_TAG_SPACE_MENU },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|close=auto:select(auto,none)|design=popup:select(popup)"
};
ID_TAGS[ID_TAG_MENU_TOOL] = {
  CLASS: "TPsi.MenuTool",
  TAG: "Menu",
  MULTIPLICITY: { "Options": "0..1","Item": "0..n","SubMenu": "0..n","Space": "0..n" },
  CHILDREN: { "Options": ID_TAG_OPTIONS,"Item": ID_TAG_ITEM_MENU,"SubMenu": ID_TAG_SUBMENU_MENU,"Space": ID_TAG_SPACE_MENU },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|close=none:select(auto,none)|design=button:select(button,toolbar,list)"
};
ID_TAGS[ID_TAG_SPACE_MENU] = {
  CLASS: "TPsi.SpaceMenu",
  TAG: "Space",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "width=20px:text(10px,20px)|height=10px:text(10px,20px)|hr=no:select(yes,no)"
};
ID_TAGS[ID_TAG_OPTIONS] = {
  CLASS: "TPsi.Options",
  TAG: "Options",
  MULTIPLICITY: { "Options": "0..n" },
  CHILDREN: { "Options": ID_TAG_OPTIONS },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "height:text('auto')|width:text('auto')|model:text(true,false)|title:text|arrow:text(Use in@@ tooltip@#menu@#popup,top,left,bottom,right)|arrowLeft:text(Use in@@ tooltip@#menu@#popup,15px,center)"
};
ID_TAGS[ID_TAG_XSL_PARAMS] = {
  CLASS: "TPsi.Options",
  TAG: "XslParams",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "_data-document:text|_data-url:text"
};
ID_TAGS[ID_TAG_POSITION] = {
  CLASS: "TPsi.Options",
  TAG: "Position",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "my:text('left top','left center','left bottom','center top','center center','center bottom','right top','right center','right bottom')|at:text('left top','left center','left bottom','center top','center center','center bottom','right top','right center','right bottom')|of:text(window)|collision:text('flip flip','fit fit','flipfit flipfit', 'none none')"
};
ID_TAGS[ID_TAG_TEXT] = {
  CLASS: "TPsi.Text",
  TAG: "Source",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: ""
};
ID_TAGS[ID_TAG_CONTENT] = {
  CLASS: "TPsi.Content",
  TAG: "Content",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*type=text:select(text,xml,fragment,image,transform)|reload=no:select(no,yes)"
};
ID_TAGS[ID_TAG_EVENT] = {
  CLASS: "TPsi.Method",
  TAG: "Event",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*name:identifier(--Events Base--,beforeOpen,afterOpen,refresh,close,--Events UI jQuery--,create,open,close,beforeClose,drag,dragStart,dragStop,focus,resize,resizeStart,resizeStop)|arguments:text(--Events Base--,container@# proxy,--Events UI jQuery--,event@# ui,event@# ui@#self)"
};
ID_TAGS[ID_TAG_BUTTON] = {
  CLASS: "TPsi.Method",
  TAG: "Button",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*name:text|arguments:text(event@# ui)"
};
ID_TAGS[ID_TAG_SUBMENU_POPUP] = {
  CLASS: "TPsi.SubMenu",
  TAG: "SubMenu",
  MULTIPLICITY: { "Item": "0..n","SubMenu": "0..n","Space": "0..n" },
  CHILDREN: { "Item": ID_TAG_ITEM_POPUP,"SubMenu": ID_TAG_SUBMENU_POPUP,"Space": ID_TAG_SPACE_MENU },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*label:text|icon:text|font:text"
};
ID_TAGS[ID_TAG_SUBMENU_MENU] = {
  CLASS: "TPsi.SubMenu",
  TAG: "SubMenu",
  MULTIPLICITY: { "Item": "0..n","Space": "0..n" },
  CHILDREN: { "Item": ID_TAG_ITEM_MENU,"Space": ID_TAG_SPACE_MENU },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*label:text|class:classcss|label-class:classcss|icon:text|font:text|collapse=yes:select(yes,no)"
};
ID_TAGS[ID_TAG_ITEM_POPUP] = {
  CLASS: "TPsi.ItemMenu",
  TAG: "Item",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|*label:text|*type:identifier|active=false:boolean|active-class:classcss|reload=no:select(no,yes)|*tool:text|key=default:text|icon:text|font:text|enable=true:select(true,false)"
};
ID_TAGS[ID_TAG_ITEM_MENU] = {
  CLASS: "TPsi.ItemMenu",
  TAG: "Item",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|*label:text|*type:identifier|active=false:boolean|active-class:classcss|reload=no:select(no,yes)|*tool:text|key=default:text|text=true:select(true,false)|icon:text|font:text|enable=true:select(true,false)"
};
ID_TAGS[ID_TAG_GENERATOR_TOOL] = {
  CLASS: "TPsi.Generator.GeneratorTool",
  TAG: "Generator",
  MULTIPLICITY: { "Options": "0..1","Var": "0..n","Event": "0..n","Graphs": "0..n","Lines": "0..n","Process": "0..n","Matrix": "0..n" },
  CHILDREN: { "Options": ID_TAG_OPTIONS,"Var": ID_TAG_VAR,"Event": ID_TAG_EVENT,"Graphs": ID_TAG_GRAPHS_GENERATOR,"Lines": ID_TAG_LINES_GENERATOR,"Process": ID_TAG_PROCESS,"Matrix": ID_TAG_DEFINITION_MATRIX },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|manager-diagram:identifier"
};
ID_TAGS[ID_TAG_GRAPHS_GENERATOR] = {
  CLASS: "TPsi.Generator.GraphsGenerator",
  TAG: "Graphs",
  MULTIPLICITY: { "Source": "1..1","Event": "0..n" },
  CHILDREN: { "Source": ID_TAG_TEXT,"Event": ID_TAG_EVENT },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|position=random:select(random,fixed)|append-to:text(selector)|ref-document:text(refdoc@@id@=selector)|attached-to:text(fromId,toId)"
};
ID_TAGS[ID_TAG_LINES_GENERATOR] = {
  CLASS: "TPsi.Generator.LinesGenerator",
  TAG: "Lines",
  MULTIPLICITY: { "Source": "1..1","Event": "0..n" },
  CHILDREN: { "Source": ID_TAG_TEXT,"Event": ID_TAG_EVENT },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|from:text|to:text"
};
ID_TAGS[ID_TAG_PROCESS] = {
  CLASS: "TPsi.Method",
  TAG: "Process",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*name:identifier|arguments:text(context@# options@# vars)"
};
ID_TAGS[ID_TAG_METHOD] = {
  CLASS: "TPsi.Method",
  TAG: "Method",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*name:identifier|arguments:"
};
ID_TAGS[ID_TAG_DEFINITION_MATRIX] = {
  CLASS: "TPsi.Generator.DefinitionMatrix",
  TAG: "DefinitionMatrix",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|cols=10:number|rows=10:number|top=0:number|left=0:number|empty=0.5:number|scale=1:number|graph-size=25:number|graph-width=100:number|graph-height=50:number|cell-width=1.5:number|cell-height=1.5:number"
};

var GRAMMAR = {
      NAME: "TPsi",
      TAGS: ID_TAGS,
      ROOT: ID_TAG_TOOLS_PSI
    };
var ALIAS = "TPsi";


/*-----------------------------------------------------
* Component:  Properties
*-----------------------------------------------------*/


/*-----------------------------------------------------
*=Texts[tdpsi_messages]: TPSI
* Description: Textos para Herramientas Psi
*-----------------------------------------------------*/
var TPSI_SHORT_MAP = { 
  ES: { 
    WARNING_EXIST_TOOL: "Ya está registrada la Herramienta Psi: Tipo '$1'; Idenficador: '$2'. Se sobreescribirá la actual.",
    ERROR_REGISTER_TOOL: "Error registrando herramienta: Tipo '$1'; Idenficador: '$2'. Detalle: $3",
    DEBUG_INCLUDE_EXIST: "Ya existe Herramientas Psi con alias '$1'. No se incluirá nuevamente",
    DEBUG_INCLUDE_REGISTER: "Cargando Herramientas Psi con alias '$1'",
    ERROR_CONTAINER: "Error creando y/o cargando contenedor. Tipo: $1. Identificador: $2. Detalle: $3",
    ERROR_GET_XML: "Error obteniendo documento XML. Tipo: '$1'",
    ERROR_ITEM_MENU: "Herramienta indefinida. Tipo: $1. Identificador: $2",
    ERROR_VAR: "Herramienta en construcción de variable. Detalle: $2",
    ERROR_SHUT_DOWN_TOOL: "Error cerrado automático. Tool='$1'. Key='$2'. Detalle: $3",
    ERROR_OPEN_GENERATOR: "Error abriendo herramienta de generación de diagramas. Tool='$1'. Key='$2'. Detalle: $3",
    ERROR_CLASS: "Error creando clase Psi. NameClass='$1'. Puede que no se definierá el atributo 'module' en ToolsPsi",
    ERROR_METHOD: "Tool-> $1[name=$2, arguments=$3]. Error: $4.",
    ERROR_FUNCTION: "Tool-> $1(arguments=$2). Error: $3.",
    ERROR: "Tool[name=$1]. Error: $2"
  }
}; 
var TPSI_MAP = { 
  ES: { 
    WARNING_EXIST_TOOL: "Ya está registrada la Herramienta Psi: Tipo '$1'; Idenficador: '$2'. Se sobreescribirá la actual.",
    ERROR_REGISTER_TOOL: "Error registrando herramienta: Tipo '$1'; Idenficador: '$2'. Detalle: $3",
    DEBUG_INCLUDE_EXIST: "Ya existe Herramientas Psi con alias '$1'. No se incluirá nuevamente",
    DEBUG_INCLUDE_REGISTER: "Cargando Herramientas Psi con alias '$1'",
    ERROR_CONTAINER: "Error creando y/o cargando contenedor. Tipo: $1. Identificador: $2. Detalle: $3",
    ERROR_GET_XML: "Error obteniendo documento XML. Tipo: '$1'",
    ERROR_ITEM_MENU: "Herramienta indefinida. Tipo: $1. Identificador: $2",
    ERROR_VAR: "Herramienta en construcción de variable. Detalle: $2",
    ERROR_SHUT_DOWN_TOOL: "Error cerrado automático. Tool='$1'. Key='$2'. Detalle: $3",
    ERROR_OPEN_GENERATOR: "Error abriendo herramienta de generación de diagramas. Tool='$1'. Key='$2'. Detalle: $3",
    ERROR_CLASS: "Error creando clase Psi. NameClass='$1'. Puede que no se definierá el atributo 'module' en ToolsPsi",
    ERROR_METHOD: "Tool-> $1[name=$2, arguments=$3]. Error: $4.",
    ERROR_FUNCTION: "Tool-> $1(arguments=$2). Error: $3.",
    ERROR: "Tool[name=$1]. Error: $2"
  }
};//* Register texts PsiXML
if (PsiOut.console.debug) TPSI_SHORT_MAP = TPSI_MAP;
PsiText.registerSet("TPSI", PsiOut.console.debug ? TPSI_MAP : TPSI_SHORT_MAP);
PsiText.registerSet("TPSI_MAP", TPSI_MAP);
//Send type
var TPSI_SEND = [];

/*-----------------------------------------------------
*=Enum[tool_type]: ToolType
* Description: Tipo de herramienta Psi
*-----------------------------------------------------*/
var ToolType = {   
  Var: 'var',  
  Function: 'function',  
  Command: 'command',  
  Dialog: 'dialog',  
  Tooltip: 'tooltip',  
  Toolbar: 'toolbar',  
  Menu: 'menu',  
  Popup: 'popup',  
  Frame: 'frametool',  
  Drop: 'drop',  
  DragDrop: 'dragdrop',  
  Generator: 'generator'
};   

/*-----------------------------------------------------
*=Function[message]: message
* Description: Crear un mensaje en un contenedor de herramientas Psi
*-----------------------------------------------------*/
function message (container, type, message) { 
  //Eliminar si ya existe un contenedor de mensaje
  $(".psi-message", container).remove();
  
  //Crear visualización de mensaje
  var template = '<div class="ui-corner-bottom psi-message {class}" style="border: 1px dotted; float: left; position: absolute; z-index: 1002; border-top: none;"><span class="ui-icon ui-icon-close" style="float:right;cursor:pointer;"></span><p><b><span class="ui-icon {icon}" style="float:left;margin-right:.3em;"></span> {type}</b>: {message}</p></div>',
      mess = template.replace("{message}", message);
  switch(type){
    case "error": mess = mess.replace("{class}", "ui-state-error").replace("{icon}", "ui-icon-alert").replace("{type}", "Error"); break;
    default: mess = mess.replace("{class}", "ui-state-highlight").replace("{icon}", "ui-icon-info").replace("{type}", "Alerta");  
  }
  var $mess = $(mess);
  $mess.find(".ui-icon-close").click(function(){
    $(this).parent().remove();
  });    
  container.prepend($mess);
 };   

/*-----------------------------------------------------
*=Class[load_document]: LoadDocument
* Description: Cargar documento XML a PsiXML
*-----------------------------------------------------*/
function LoadDocument () {
  //Properties  
};
//Inheritance
LoadDocument.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
LoadDocument.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Inicializar lectura de documento  
  onInit: function(){ 
  try { 
    this.alias = this.attr("alias");
    if (PsiData.document.exist(this.alias) && this.attr("rewrite")=="no") {
      PSIDEBUG("TPSI.DEBUG_INCLUDE_EXIST", [this.alias]);
      return;
    }
    PSIDEBUG("TPSI.DEBUG_INCLUDE_REGISTER", [this.alias]);
    if (this.attr("rewrite")=="yes") 
      PsiData.document.rewrite(this.alias, this.attr("url"), this.attr("data"), this.attr("action"))   
    else
      PsiData.document.register(this.alias, this.attr("url"), this.attr("data"), this.attr("action"));
      
    //Si es de tipo 'help' adicionar a la Ayuda Psi
    if (this.attr("type")=="help")
      Help.register(PsiData.document.get(this.alias));
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "LoadDocument"; }
});

/*-----------------------------------------------------
*=Component[help]: Help
* Description: Herramienta de Ayuda para elementos Psi
*-----------------------------------------------------*/
var Help = (function () {  

  //Component Properties   
  //Property: lang. Description: Lenguaje de la ayuda. Por defecto lang='ES'  
  var lang = 'ES';  
  //Property: map. Description: Mapa de lenguajes  
  var map = {ES:{}};


/*-----------------------------------------------------
*=Class[text_help]: TextHelp
* Description: Administra una lista de textos
*-----------------------------------------------------*/
function TextHelp (key, name, description, lang) {
  //Properties   
  //Property: key. Description: key  
  this.key = key;  
  //Property: name. Description: name  
  this.name = name;  
  //Property: description. Description: description  
  this.description = description;  
  //Property: lang. Description: lang?lang:'ES'  
  this.lang = lang?lang:'ES'; 
}; 
//* Definitions Events and Methods
TextHelp.methods({
  //Methods 
  //Events 
  toString: function() { return "TextHelp"; }
});


  //Component Methods   
  //Method: register. Description: Registrar ayuda  
  function register(source){ 
  try { 
    $("Language",source).each(function(){
      var _lang = $(this).attr("key");
      //Crear lenguaje sino existe
      if (map[_lang]==null)
        map[_lang] = {};
      //Cargar todos los textos disponibles
      $(">Text", this).each(function(){
        var key = $(this).attr("key");
        map[_lang][key] = new TextHelp(key, $(this).attr("name"), $(this).text(), _lang); 
      });
    });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"register", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: get. Description: Obtener un elemento ayuda  
  function get(key){ 
    return map[lang] && map[lang][key] ? map[lang][key] : null;
   };  
  //Method: setLang. Description: Modificar idioma de la Ayuda  
  function setLang(newLang){ 
    lang = newLang;
   };  
  //Method: getAll. Description: Obtener todas las ayudas registrados  
  function getAll(){ 
    return map;
   };


/*-----------------------------------------------------
* Component Definition: Help  
*-----------------------------------------------------*/
return {
  //Content 
  //Properties 
  lang: lang,
  map: map,
  //Methods 
  register: register,
  get: get,
  setLang: setLang,
  getAll: getAll,
  toString: function() { return "Help"; }
};
})(); 

/*-----------------------------------------------------
*=Class[var]: Var
* Description: Definición de variable Psi en PsiData.
*-----------------------------------------------------*/
function Var () {
  //Properties  
};
//Inheritance
Var.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Var.methods({
  //Methods   
  //Method: build. Description: Construir variable en PsiData  
  build: function(newOptions, context){ 
    try {
      switch(this.attr("type")){
        case "string": return this.text();
        case "number": return parseFloat(this.text());
        case "integer": return parseInt(this.text());
        case "object": 
          var body = "return "+this.text()+";",
              execute = new Function("self", "options", "context", body);
          return execute(this.parent, $.extend(this.parent.options ? this.parent.options : {}, newOptions), context);
        case "jQuery": return $(this.text());
        case "xml": return $.parseXML(this.text());
        case "jxml": 
          var xml = $.parseXML("<root>"+this.text()+"</root>");
          return $(xml).children().children();
        case "map": 
          var xml = $.parseXML("<root>"+this.text()+"</root>"),
              map = {};
          $(xml).children().children().each(function(){
            map[$(this).attr("id")] = this;
          });
          return map;
      }
    }
    catch(e){
      throw new PsiWarning("TPSI.ERROR_VAR", [e.toString()], [this, e]);
    }
   },  
  //Method: clone. Description: Obtener una copia de la variable  
  clone: function(withDataAndEvents){ 
  try { 
    switch(this.attr("type")){
      case "string": 
      case "number": 
      case "integer":
        return this.instance;
      case "object": 
      case "map":   
        return $.extend(true, {}, this.instance);
      case "xml": 
        return $.parseXML(this.text());
      case "jQuery": 
      case "jxml": 
        return this.instance.clone(withDataAndEvents);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"clone", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Definir variable en PsiData  
  onInit: function(){ 
  try { 
    //Crear variable en PsiData
    if (this.parent.tag=="ToolsPsi") {
      this.alias = this.parent.alias+"."+this.id(); 
      PsiData.var.register(this.alias, this.build({}, this.context));
    }
    else
      this.instance = this.build({}, this.context);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Var"; }
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
    this.alias = this.parent.alias+"."+this.id(); 
    PsiData.make.register(this.alias, this.text(), options);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Make"; }
});

/*-----------------------------------------------------
*=Class[script]: Script
* Description: Cargar un JavaScript
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
  //Event: onInit. Description: Evalúa el código JavaScript  
  onInit: function(){ 
  try { 
   eval( this.text() );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Script"; }
});

/*-----------------------------------------------------
*=Class[text]: Text
* Description: Define un elemento texto
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
*=Class[options]: Options
* Description: Manejo de opciones para una Herramienta Psi
*-----------------------------------------------------*/
function Options () {
  //Properties   
  //Property: _options. Description: Lista de opciones  
  this._options = {}; 
};
//Inheritance
Options.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Options.methods({
  //Methods   
  //Method: get. Description: Obtener opciones usando elemento de referencia si define  
  get: function(ref, proxy){ 
  try { 
    var map = {};
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i]; 
      if (attr.name!="key-option")
        map[attr.name] = ref 
                       ? eval(ref.processValue(attr.value)) 
                       : eval(this.processValue(attr.value));
    }
    for (var key in this._options)
      map[key] = this._options[key].get(ref, proxy);
    return map;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"get", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: map. Description: Obtener un mapa de strings de los atributos  
  map: function(){ 
  try { 
    var map = {};
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i]; 
      map[attr.name] = attr.value;
    }
    return map;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"map", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: key. Description: Llave si es un elemento  
  key: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"key", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar opciones  
  onInit: function(){ 
  try { 
    this.key = $(this._ref).attr("key-option");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Options"; }
});

/*-----------------------------------------------------
*=Enum[content_type]: ContentType
* Description: Tipo de contenido Psi
*-----------------------------------------------------*/
var ContentType = {   
  Text: 'text',  
  Xml: 'xml',  
  Fragment: 'fragment',  
  Image: 'image',  
  Transform: 'transform'
};   

/*-----------------------------------------------------
*=Class[content]: Content
* Description: Manejo de contenido para las herramientas Psi
*-----------------------------------------------------*/
function Content () {
  //Properties  
};
//Inheritance
Content.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Content.methods({
  //Methods   
  //Method: _getXml. Description: Obtener documento XML de diversas fuentes  
  _getXml: function(type, options, ref){ 
  try { 
    //Determinar si se ha definido url
    var name = type+"-url", 
        value = $(this._ref).attr(name);
    if (options[name]) 
      return PsiXML.loadXmlSync(options[name]);
    if (value) 
      return PsiXML.loadXmlSync(ref ? ref.processValue(value) : value);

    //Determinar si se a guardado en PsiData
    name = type+"-document"; 
    value = $(this._ref).attr(name);
    if (options[name]) 
      return PsiData.document.get(options[name]);
    if (value) 
      return PsiData.document.get(ref ? ref.processValue(value) : value);
    
    //Determinar si se a guardado en contexto
    name = type+"-context";
    value = $(this._ref).attr(name);
    if (options[name] && context) 
      return context[options[name]];
    if (value && context) 
      return context[ref ? ref.processValue(value) : value];
    
    //Determinar si se a guardado en variables
    name = type+"-var";
    value = $(this._ref).attr(name);
    if (this.vars && this.vars[name]) 
      return this.vars[name].isntance;
      
    throw new PsiError("TPSI.ERROR_GET_XML", [type], [this]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getXml", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: get. Description: Obtener contenido: fragmento del texto, fragmento xml de un string, fragmento de documento html, Obtener imágenes, documento html de la transformación de xml y xsl.  
  get: function(options, ref, context){ 
  try { 
    switch(this.attr("type")){
      case ContentType.Text: 
        return this.text();
      case ContentType.Xml: 
        var xml = $.parseXML("<result>"+this.text()+"</result>");
        return $(xml).children().children();
      case ContentType.Fragment: 
        return tPsiXML.load(this.attr("url"), options ? options.data : null);
      case ContentType.Image: 
        return null;
      case ContentType.Transform: 
        var xslParams = $.extend({}, this.parent.xslParams ? this.parent.xslParams.get(ref) : {}, options && options.xslParams ? options.xslParams : {});
        return $.transform({
            async:  false,
            xmlobj: this._getXml("xml", options, ref, context),
            xslobj: this._getXml("xsl", options, ref, context),
            xslParams: xslParams,
            error: function(jqXHR, textStatus, errorThrown) {
              throw new PsiError("TPSI.ERROR_CONTAINER", [ContentType.Transform, ref.id(), errorThrown], [this, arguments]);
            }
          }); 
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"get", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: append. Description: Adicionar contenido dependiendo del tipo de documento (xml, text, html, image, etc)  
  append: function(container, proxy){ 
    $(container).append( this.get(proxy, proxy.ref, proxy.context) );
   },  
  //Method: load. Description: Vaciar y cargar contenedor dependiendo del tipo de documento (xml, text, html, image, etc)  
  load: function(container, proxy){ 
    $(container).empty().append( this.get(proxy, proxy.ref, proxy.context) );
   },  
  //Method: create. Description: Crear y cargar contenedor dependiendo del tipo de documento (xml, text, html, image, etc)  
  create: function(container, proxy){ 
  try { 
    var reload = {do: this.attr("reload")=="yes", current: null};
    $(container).data("reload", reload);
    this.load(container, proxy);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Content"; }
});

/*-----------------------------------------------------
*=Class[tool]: Tool
* Description: Clase base para todas las herramientas Psi
*-----------------------------------------------------*/
function Tool () {
  //Properties  
};
//Inheritance
Tool.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Tool.methods({
  //Methods   
  //Method: _super. Description: Obtener la herramienta padre Psi  
  _super: function(){ 
  try { 
    var inherits = this.attr("inherits");
    return inherits && PsiData[this.type] && PsiData[this.type][inherits]
         ? PsiData[this.type][inherits]
         : null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_super", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _getOptions. Description: Obtener opciones de la herramienta  
  _getOptions: function(parent, newOptions, ref){ 
  try { 
    var _super = this._super();
    return $.extend(true, {parent: parent, ref: ref},
      this.default, 
      _super ? _super._getOptions(parent, newOptions, ref) : {}, 
      this.options ? this.options.get(ref) : {}, 
      newOptions);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getOptions", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _getVars. Description: Actualizar variables teniendo en cuenta la herencia  
  _getVars: function(){ 
  try { 
    var _super = this._super();
    if (_super)
      this.vars = $.extend(true, {}, _super._getVars(), this.vars);
    return this.vars;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getVars", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _getEvents. Description: Obtener lista de eventos Psi  
  _getEvents: function(){ 
  try { 
    var _super = this._super(),
        result = $.extend({}, _super ? _super._getEvents() : null);
    for(var name in this.events)
      result[name] = this.events[name].build();
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getEvents", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: name. Description: Nombre de la herramienta  
  name: function(){ 
  try { 
    return this.attr("name");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"name", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Tool"; }
});

/*-----------------------------------------------------
*=Object[close_tools]: CloseTools
* Description: Lista de herramientas para cerrar automáticamente.
*-----------------------------------------------------*/
var CloseTools = {
  //Properties   
  //Property: tools. Description: Lista de herramientas  
  tools: new Array(),
  //Methods   
  //Method: push. Description: Registra un contenedor para su borrado automático Psi  
  push: function(toolRef){ 
  try { 
    this.tools.push(toolRef);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"push", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: shutDown. Description: Remueve un objeto de datos Psi  
  shutDown: function(){ 
    while(this.tools.length>0) {
      var toolref = this.tools.shift();
      try {
        var tool = PsiData[toolref.type].get(toolref.alias);
        if (tool) 
          tool.close({key: toolref.key});
        if (toolref.menuItem)
          toolref.menuItem.item.setActive(toolref.menuItem.target, false);
      }
      catch(e){
        throw PsiError("TPSI.ERROR_SHUT_DOWN_TOOL", [tool.type, tool.alias, e.toString()], [toolref, e]);
      }
    }
   }
};   

/*-----------------------------------------------------
*=Class[method]: Method
* Description: Implelentación de un mátodo, evento, o procedimiento
*-----------------------------------------------------*/
function Method () {
  //Properties  
};
//Inheritance
Method.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Method.methods({
  //Methods   
  //Method: build. Description: Construir mátodo  
  build: function(name){ 
  try { 
    var body = this.attr("trycatch")=="false"
             ? $(this._ref).text()
             : 'try { '
               + $(this._ref).text()
               + '} catch(e) { if (e.type==null) throw new PsiError("TPSI.ERROR_METHOD",["'+this._pathtag+'", "'+this.attr("name")+'", "'+this.attr("arguments")+'", e.toString()],[e,this,arguments]); else throw e; }',
        func = eval("new Function("+this.arguments+"body)");
    if (name && name!="build")
      this[name] = func;
    return func;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"build", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar lista de argumentos  
  onInit: function(){ 
  try { 
    var args = this.attr("arguments");
    this.name = this.attr("name");
    if (args && args!="") {
      var margs = args ? args.split(",") : null,
          sargs = "";
      if (margs && margs[0]!="")
        for(var i=0; i<margs.length; i++){
          sargs += '"'+margs[i].replace(" ", "")+'", ';
        }
      this.arguments = sargs;
    }
    else this.arguments = ""; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Method"; }
});

/*-----------------------------------------------------
*=Class[command_tool]: CommandTool
* Description: Definición de comando para dicionar en PsiXML
*-----------------------------------------------------*/
function CommandTool () {
  //Properties   
  //Property: type. Description: ToolType.Command  
  this.type = ToolType.Command;  
  //Property: options. Description: Lista de opciones para el comando  
  this.options = null;  
  //Property: body. Description: Cuerpo del comando  
  this.body = null; 
};
//Inheritance
CommandTool.inherits(Tool); 
//* Definitions Events and Methods
CommandTool.methods({
  //Methods 
  //Events   
  //Event: onChildrenCreated. Description: Adicionar comando a PsiXML  
  onChildrenCreated: function(){ 
  try { 
    this.alias = this.parent.alias+"."+this.id();
    PsiData[ToolType.Command].register(this.alias, this.text(), Help.get(this.attr("help")), this.options ? this.options.get() : {});
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "CommandTool"; }
});

/*-----------------------------------------------------
*=Class[function_tool]: FunctionTool
* Description: Definición de función Psi
*-----------------------------------------------------*/
function FunctionTool () {
  //Properties   
  //Property: type. Description: ToolType.Function  
  this.type = ToolType.Function; 
};
//Inheritance
FunctionTool.inherits(Tool); 
//* Definitions Events and Methods
FunctionTool.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Inicializar y registrar función en la fábrica de Herramientas Psi  
  onInit: function(){ 
  try { 
    var args = this.hasAttr("arguments") ? this.attr("arguments") : null,
        margs = args ? args.split(",") : null,
        sargs = "",
        body = 'try { '
             +$(this._ref).text()
             +'} catch(e) { if (e.type==null) throw new PsiError("TPSI.ERROR_FUNCTION",["'+this._pathtag+'", "'+this.attr("arguments")+'", e.toString()],[e,this,arguments]); else throw e; }';
        
    
    //Determinar argumentos de entrada de la función
    if (margs && margs[0]!="")
      for(var i=0; i<margs.length; i++){
        sargs += '"'+margs[i].replace(" ", "")+'"';
        if (i<margs.length-1) sargs += ",";
      }    
      
    //Redefinir metodo execute
    var execute = args ? eval("new Function("+sargs+", body)") : eval("new Function(body)");
    
    //Registrar función en PsiData
    this.alias = this.parent.alias+"."+this.id();
    PsiData[ToolType.Function].register(this.alias, execute);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "FunctionTool"; }
});

/*-----------------------------------------------------
*=Class[class_tool]: ClassTool
* Description: Definición de clase Psi
*-----------------------------------------------------*/
function ClassTool () {
  //Properties   
  //Property: properties. Description: Definición de propiedades  
  this.properties = null;  
  //Property: methods. Description: Lista de metodos de implementación  
  this.methods = {}; 
};
//Inheritance
ClassTool.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
ClassTool.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Iniciar nombre de la clase Psi  
  onInit: function(){ 
  try { 
    this.name = this.attr("name");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onChildrenCreated. Description: Crear clase Psi en el modulo de la herramientas Psi  
  onChildrenCreated: function(){ 
  try { 
    //Obtener lista de mátodos
    var mapMethods = {};
    for(var name in this.methods)
      mapMethods[name] = this.methods[name].build();
    
    //Crear clases dentro del modulo definido en las herramientas
    this.root.createClass(
      this.name,
      this.attr("params-constructor"),
      this.properties ? this.properties.map() : {},
      mapMethods,
      this.attr("inherits"),
      this.attr("init")
      );
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "ClassTool"; }
});

/*-----------------------------------------------------
*=Class[container_manager]: ContainerManager
* Description: Administrador de contenedores para cajas de diálogo, barra de herramientas, etc. Psi
*-----------------------------------------------------*/
function ContainerManager () {
  //Properties   
  //Property: containers. Description: Inicia lista de contenedores  
  this.containers = this._init(); 
}; 
//* Definitions Events and Methods
ContainerManager.methods({
  //Methods   
  //Method: _init. Description: Inicializar fábrica de herramientas  
  _init: function(){ 
  try { 
    var containers = {};
    //Crear containers para cada tipo
    for(var type in ToolType)
      containers[ToolType[type]] = {};
    return containers;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: create. Description: Obtener nuevo contenedor para para un tipo de herramienta  
  create: function(type, id){ 
  try { 
    //Determinar si existe el container
    if (this.containers[type][id]!=null)
      throw new TError(this, "ERROR_CONTAINER", type, id);
    
    //Crear uno nuevo contenedor Psi
    this.containers[type][id] = $("<div></div>")
                                  .attr({"id": id, "type": type})
                                  .addClass("tdpsi-container")
                                  .appendTo("body")
                                  .data("closeAuto", false)
                                  .get(0);
    return this.containers[type][id];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: get. Description: Obtener contenedor si existe  
  get: function(type, id){ 
  try { 
    return this.containers[type][id];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"get", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: remove. Description: Borrar contenedor de tipo de herramienta  
  remove: function(type, id){ 
  try { 
    if (this.containers[type] && this.containers[type][id]){
      this.containers[type][id].remove();
      delete this.containers[type][id];
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"remove", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "ContainerManager"; }
});

/*-----------------------------------------------------
*=Var[container]: Container
* Description: Administración de Contenedores para las herramientas Psi
*-----------------------------------------------------*/
var Container = new ContainerManager();

/*-----------------------------------------------------
*=Class[container_tool]: ContainerTool
* Description: Manejo de contenido Psi
*-----------------------------------------------------*/
function ContainerTool () {
  //Properties  
};
//Inheritance
ContainerTool.inherits(Tool); 
//* Definitions Events and Methods
ContainerTool.methods({
  //Methods   
  //Method: _getDefault. Description: Obtener opciones por defecto  
  _getDefault: function(){ 
    return {};
   },  
  //Method: _getContent. Description: Obtener contenido Psi  
  _getContent: function(){ 
    if (this.content!=null)
      return this.content;
    var _super = this._super();
    return _super ? _super._getContent() : null;
   },  
  //Method: _getOns. Description: Obtener eventos On registrados  
  _getOns: function(){ 
    var _super = this._super();
    if (_super)
      this.on = $.extend(true, {}, _super._getOns(), this.on);
    return this.on;
   },  
  //Method: _getContainerId. Description: Obtener identificador de contenedor: type+id+key  
  _getContainerId: function(_key){ 
    var key = _key ? _key : "default";
    return this.type+"-"+this.alias+"-"+key;
   },  
  //Method: _addOptions. Description: Mátodo abstracto que adiciona nuevos eventos, opciones, etc, que se van a pasar a Widget  
  _addOptions: function(){  },  
  //Method: _create. Description: Mátodo abstracto para crear el contenerdor personalizado Psi  
  _create: function(){  },  
  //Method: _beforeOpenWidget. Description: Mátodo abstracto que se ejecuta antes de abrir el Widget Psi  
  _beforeOpenWidget: function(){  },  
  //Method: _close. Description: Mátodo abstracto para cerrar/ocultar el contenedor Psi  
  _close: function(){  },  
  //Method: _refresh. Description: Mátodo abstracto para refrescar el contenedor Psi  
  _refresh: function(){  },  
  //Method: _destroy. Description: Mátodo abstracto para destruir el contenedor Psi  
  _destroy: function(){  },  
  //Method: open. Description: Abre un contenerdor Psi  
  open: function(params){ 
  try { 
    //params: {key, self, parent, options, ref, context}
    
    //Cierre de herramientas automáticas
    CloseTools.shutDown();
    
    //Inicializa proceso de 'open'
    var args = $.extend(true, {key: "default"}, params),
        id = this._getContainerId(args.key),
        basicTool = {
          tool: this, 
          toolId: id, 
          menuItem: params && params.ref && params.ref.tag=="Item" && params.ref.parent.type=="menu"
                  ? { target: params.parent, item: params.ref }
                  : null
        },
        proxy = $.extend(true, basicTool, args, this._getOptions(args.parent, args.options, args.ref)),
        container = Container.get(this.type, id);
    
    //Crear contenedor si no existe
    if (container==null) {
      //Crear contenedor Psi si no existe
      container = Container.create(this.type, id);
      
      //Crear contenido      
      if (this.content!=null)
        this.content.create(container, proxy);
      else
        this._create(container, proxy);
      
      //Adicionar clases CSS
      $(container)
        .addClass("tdpsi-"+this.type)
        .addClass(this.attr("class"));
      
      //Adicionar eventos
      proxy = $.extend(true, {}, proxy, this._getOns(), this._addOptions(container, proxy));
      
      //Crear Widget
      $(container)[this.widget](proxy);
    }
    else {
      var reload = $(container).data("reload");
      if (reload && reload.do && this.content!=null)
        this.content.load(container, proxy);
    }
    
      
    //Evento antes de abrir el Widget
    $(container).data("isOpen", true);
    this._beforeOpenWidget(container, proxy);
    if (this.on && this.on.beforeOpen)
      this.on.beforeOpen(container, proxy);
    
    //Actualizar variables y abrir widget asociado a herramientas
    $(container)[this.widget]("option", proxy);
    $(container)[this.widget]("open", proxy.parent, proxy.ref, proxy.context);
    
    //Evento despuás de abrir
    if (this.on && this.on.afterOpen)
      this.on.afterOpen(container, proxy);
      
    //Ubicar contenedor Psi
    var pos = this.position ? this.position.get(proxy.ref) : this.default.position; 
    if (pos) {
      if (pos.of==null && params && params.parent) 
        pos.of = params.parent;
      if (pos.of && pos.of.getBoundingClientRect) {
        var r = pos.of.getBoundingClientRect();
        pos.of = $("<div style='position:absolute;display:block;opacity:0.1;background-color:#fcfcfc;z-index:9998;'></div>")
                   .width(r.width).height(r.height).css({top:(window.pageYOffset+r.top)+"px", left:(window.pageXOffset+r.left)+"px"}) 
                   .appendTo("body");
        $(container)[this.widget]("option", "position", pos);
        pos.of.remove();
      }
      else
        $(container)[this.widget]("option", "position", pos);
    } 
    
    //Adicionar a cerrado automático
    if (this.attr("close")=="auto") {
      var toolRef = {
        type: this.type,
        alias: this.alias,
        key: args.key,
        menuItem: basicTool.menuItem
      };
      CloseTools.push(toolRef);
    }
      
    return container; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"open", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: isOpen. Description: Retorna verdaddero si el contenedor Psi está abierto  
  isOpen: function(params){ 
  try { 
    var args = $.extend(true, {key: "default"}, params),
        container = Container.get(this.type, this._getContainerId(args.key));
    if (container!=null) 
      return $(container).data("isOpen");
    return null; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"isOpen", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: close. Description: Cierra/Oculta un contenedor Psi  
  close: function(params){ 
  try { 
    //params: {key, options, ref, context, applyCloseWidget}
    var args = $.extend(true, {key: "default"}, params),
        container = Container.get(this.type, this._getContainerId(args.key));
    if (container!=null && $(container).data("isOpen")) { 
      $(container).data("isOpen", false);
      if (args.applyCloseWidget==null || args.applyCloseWidget==true)
        $(container)[this.widget]("close");
      var proxy = $.extend(true, {}, $(container)[this.widget]("option"), args.options);
      this._close(container, proxy);
      if (this.on && this.on.close)
        this.on.close(container, proxy);
    } 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"close", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: refresh. Description: Actualizar contenido de contenedor Psi  
  refresh: function(params){ 
  try { 
    //params: {key, options, ref, context}
    var args = $.extend(true, {key: "default"}, params),
        container = Container.get(this.type, this._getContainerId(args.key));
    if (container!=null && $(container).data("isOpen") ) {
      var reload = $(container).data("reload"),
          proxy = $.extend(true, {}, $(container)[this.widget]("option"), args);
      if (reload && reload.do && this.content!=null)
        this.content.load(container, proxy);
      this._refresh(container, proxy);
      if (this.on.refresh)
        this.on.refresh(container, proxy);
    } 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: destroy. Description: Destruir el contenedor Psi  
  destroy: function(key){ 
  try { 
    var id = this._getContainerId(key),
        container = Container.get(this.type, id);
    if (container!=null) {
      this._destroy(container);
      container[this.widget]("destroy");
      Container.remove(this.type, id);
    } 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"destroy", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar tipo de contenedor en PsiData  
  onInit: function(){ 
  try { 
    //Definición por defecto
    this.default = this._getDefault();
    
    //Registrar el tipo de contenedor
    this.alias = this.parent.alias+"."+this.id(); 
    PsiData[this.type].register(this.alias, this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onChildrenCreated. Description: Crear lista de eventos disponibles y actulizar lista de variables del padre  
  onChildrenCreated: function(){ 
  try { 
    //Heredar el content
    if (this.content==null)
      this.content = this._getContent();
    
    //Generar eventos create, open y close
    this.on = this._getEvents();
    
    //Obtener variables heredadas
    this._getVars();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "ContainerTool"; }
});

/*-----------------------------------------------------
*=Class[dialog_tool]: DialogTool
* Description: Manejo de cajas de diálogo
*-----------------------------------------------------*/
function DialogTool () {
  //Properties   
  //Property: type. Description: ToolType.Dialog  
  this.type = ToolType.Dialog;  
  //Property: widget. Description: Widget a usar: 'dialog'  
  this.widget = 'dialog';  
  //Property: on. Description: Lista de eventos  
  this.on = null;  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: position. Description: Posición de la caja de diálogo  
  this.position = null;  
  //Property: xslParams. Description: Paramátros para el xsl  
  this.xslParams = null;  
  //Property: vars. Description: Definición de variables  
  this.vars = {};  
  //Property: content. Description: Contenido de la caja de diálogo  
  this.content = null;  
  //Property: events. Description: Lista de eventos  
  this.events = {};  
  //Property: buttons. Description: Lista de botones  
  this.buttons = {}; 
};
//Inheritance
DialogTool.inherits(ContainerTool); 
//* Definitions Events and Methods
DialogTool.methods({
  //Methods   
  //Method: _getDefault. Description: Crear opciones por defecto para la caja de diálogo Psi  
  _getDefault: function(){ 
  try { 
    return { 
      autoOpen: true,
      title: "My Title!!",
      width: 400,
      modal: false
    };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getDefault", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _getButtons. Description: Obtener botones  
  _getButtons: function(){ 
  try { 
    var _super = this._super(),
        result = $.extend({}, _super ? _super._getButtons() : null);
    for(var name in this.buttons)
      result[name] = this.buttons[name].build();
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getButtons", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _addOptions. Description: Adicionar botones a la caja de diálogo Psi  
  _addOptions: function(container, proxy){ 
  try { 
    var result = {buttons: this._getButtons(), closeAuto: true};
    
    //Adicionar botón cerrar por defecto
    if(this.attr("button-close")==null || this.attr("button-close")=="yes")
      $.extend(result.buttons, { "Cerrar": function() { $(this).dialog("close"); } });
    
    //Adicionar evento 'close' a la caja de diálogo
    result.closeDialog = this.on.closeDialog ? this.on.closeDialog : function(event, ui, proxy){ };
    result.close = function(event, ui) {
      var proxy = $(this).dialog("option");
      proxy.closeDialog(event, ui, this, proxy);
      if (proxy.closeAuto==true)
        proxy.tool.close({key: proxy.key, applyCloseWidget: false});
      if (proxy.menuItem)
        proxy.menuItem.item.setActive(proxy.menuItem.target, false);
    }
    
    return result;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_addOptions", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "DialogTool"; }
});

/*-----------------------------------------------------
*=Class[toolbar_tool]: ToolbarTool
* Description: Manejo de Tooltip Psi
*-----------------------------------------------------*/
function ToolbarTool () {
  //Properties   
  //Property: type. Description: ToolType.Toolbar  
  this.type = ToolType.Toolbar;  
  //Property: widget. Description: Widget a usar: 'toolbar'  
  this.widget = 'toolbar';  
  //Property: on. Description: Lista de eventos  
  this.on = null;  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: position. Description: Posición de la barra de herramientas  
  this.position = null;  
  //Property: xslParams. Description: Paramátros para el xsl  
  this.xslParams = null;  
  //Property: vars. Description: Definición de variables  
  this.vars = {};  
  //Property: content. Description: Contenido de la barra de herramientas  
  this.content = null;  
  //Property: events. Description: Lista de eventos  
  this.events = {}; 
};
//Inheritance
ToolbarTool.inherits(ContainerTool); 
//* Definitions Events and Methods
ToolbarTool.methods({
  //Methods   
  //Method: _getDefault. Description: Crear opciones por defecto para barra de herramientas Psi  
  _getDefault: function(){ 
  try { 
    return { 
      width: 100,
      height: 150,
      autoOpen: true,
      title: "My Title!!",
      position: { 
        my: "left+10 top+10", 
        at: "left top", 
        of: window 
      }
    };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getDefault", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _addOptions. Description: Adicionar 'close' a la barra de herramientas Psi  
  _addOptions: function(container, proxy){ 
  try { 
    return { 
      closeDialog: this.on.closeDialog ? this.on.closeDialog : function(){ },
      close: function(event, ui) {
        var proxy = $(this).toolbar("option");
        proxy.closeDialog(event, ui, this, proxy);
        if (proxy.closeAuto==true)
          proxy.tool.close({key: proxy.key, applyCloseWidget: false});
        if (proxy.menuItem)
          proxy.menuItem.item.setActive(proxy.menuItem.target, false);
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_addOptions", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "ToolbarTool"; }
});

/*-----------------------------------------------------
*=Class[tooltip_tool]: TooltipTool
* Description: Manejo de Tooltip Psi
*-----------------------------------------------------*/
function TooltipTool () {
  //Properties   
  //Property: type. Description: ToolType.Tooltip  
  this.type = ToolType.Tooltip;  
  //Property: widget. Description: Widget a usar: 'globe'  
  this.widget = 'globe';  
  //Property: on. Description: Lista de eventos  
  this.on = null;  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: position. Description: Posición del tooltip  
  this.position = null;  
  //Property: xslParams. Description: Paramátros para el xsl  
  this.xslParams = null;  
  //Property: vars. Description: Definición de variables  
  this.vars = {};  
  //Property: content. Description: Contenido del tooltip  
  this.content = null;  
  //Property: events. Description: Lista de eventos  
  this.events = {}; 
};
//Inheritance
TooltipTool.inherits(ContainerTool); 
//* Definitions Events and Methods
TooltipTool.methods({
  //Methods   
  //Method: _getDefault. Description: Crear opciones por defecto para tooltip Psi  
  _getDefault: function(){ 
  try { 
    return { 
      arrow: "left",
      position: {
        my: "left center",
        at: "right center",
        offset: "-2 0",
        collision: "none none"
      }
    };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getDefault", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _beforeOpenWidget. Description: Crear botón de cierre si se ha específicado  
  _beforeOpenWidget: function(container, proxy){ 
  try { 
    $(this.attr("close-selector"), container)
      .click(function(){
        //if (this._item)
        //  this._item.setActive(this._target, false);
        this._tool.close({key: this._key});
      })
      .each(function(){ 
        this._key = proxy.key; 
        this._tool = proxy.tool;
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_beforeOpenWidget", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "TooltipTool"; }
});

/*-----------------------------------------------------
*=Class[frame_tool]: FrameTool
* Description: Manejo de un Marco de Contenido Psi
*-----------------------------------------------------*/
function FrameTool () {
  //Properties   
  //Property: type. Description: ToolType.Frame  
  this.type = ToolType.Frame;  
  //Property: widget. Description: Widget a usar: 'content'  
  this.widget = 'content';  
  //Property: on. Description: Lista de eventos  
  this.on = null;  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: xslParams. Description: Paramátros para el xsl  
  this.xslParams = null;  
  //Property: vars. Description: Definición de variables  
  this.vars = {};  
  //Property: content. Description: Contenido del tooltip  
  this.content = null;  
  //Property: events. Description: Lista de eventos  
  this.events = {}; 
};
//Inheritance
FrameTool.inherits(ContainerTool); 
//* Definitions Events and Methods
FrameTool.methods({
  //Methods   
  //Method: _beforeOpenWidget. Description: Evento que se ejecuta antes de abrir el marco  
  _beforeOpenWidget: function(container, proxy){ 
  try { 
    if (this.on.start)
      this.on.start(container, proxy);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_beforeOpenWidget", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "FrameTool"; }
});

/*-----------------------------------------------------
*=Class[drop_tool]: DropTool
* Description: Manejo de herramienta de soltar Psi
*-----------------------------------------------------*/
function DropTool () {
  //Properties   
  //Property: type. Description: ToolType.Drop  
  this.type = ToolType.Drop;  
  //Property: widget. Description: Widget a usar: 'frameset'  
  this.widget = 'frameset';  
  //Property: on. Description: Lista de eventos  
  this.on = null;  
  //Property: optionsDrop. Description: Opciones Soltar  
  this.optionsDrop = null;  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: xslParams. Description: Paramátros para el xsl  
  this.xslParams = null;  
  //Property: vars. Description: Definición de variables  
  this.vars = {};  
  //Property: content. Description: Contenido del tooltip  
  this.content = null;  
  //Property: events. Description: Lista de eventos  
  this.events = {}; 
};
//Inheritance
DropTool.inherits(ContainerTool); 
//* Definitions Events and Methods
DropTool.methods({
  //Methods   
  //Method: _addOptions. Description: Enlazar opciones y eventos al conjunto de marcos de referencia Psi  
  _addOptions: function(container, proxy){ 
    return {
      parentSelector: this.attr("parent-selector"),
      
      //Eventos asociado
      click: function(event){
        var proxy = $(this).parent().frameset("option"),
            drop = proxy.tool;
        if (proxy && drop) { 
          if (drop.attr("hide")=="auto")
            drop.close(proxy.toolId);
          
          var map = drop.hasAttr("map") ? drop.vars[drop.attr("map")].build(proxy) : {}, 
              append = $( drop.attr("parent-selector") ).find( drop.attr("append-selector") ),
              parent = append.length>0 ? append.get(0)._ref : null;
          
          if (parent && drop.on.process && (map=drop.on.process(event, parent, map, proxy, this.attached))!=null){
            var result = {};
            for(var id in map) {
              var element = parent.parseElement(map[id]);
              result[element.id()] = element;
              //Ejecutar evento de análisis de elemento Psi
              if (drop.on.processedElement)
                drop.on.processedElement(event, parent, element, map, proxy, this.attached);
            } 
            //Ejecutar evento de finalización
            if (drop.on.end)
              drop.on.end(event, parent, result, proxy, this.attached);
          }
        }
      }
    };
   },  
  //Method: _beforeOpenWidget. Description: Inicializar evento 'start'  
  _beforeOpenWidget: function(container, proxy){ 
  try { 
    //Evento de inicio: self, parent, options, ref, context
    if (this.on.start)
      this.on.start(container, proxy);
    //Adicionar marcos de selección
    $.extend(true, proxy, {
      framesSelector: {
        drop: this.getOptionsDrop(proxy.ref)
      }
    });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_beforeOpenWidget", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getOptionsDrop. Description: Obtener opciones de 'drop'  
  getOptionsDrop: function(ref){ 
  try { 
    return $.extend({drop: false, drag: false, show: true, border: 3}, this.optionsDrop ? this.optionsDrop.get(ref) : {});
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getOptionsDrop", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "DropTool"; }
});

/*-----------------------------------------------------
*=Class[dragdrop_tool]: DragDropTool
* Description: Manejo de arrastrar/soltar Psi
*-----------------------------------------------------*/
function DragDropTool () {
  //Properties   
  //Property: type. Description: ToolType.DragDrop  
  this.type = ToolType.DragDrop;  
  //Property: widget. Description: Widget a usar: 'frameset'  
  this.widget = 'frameset';  
  //Property: on. Description: Lista de eventos  
  this.on = null;  
  //Property: optionsDrag. Description: Opciones Arrastrar  
  this.optionsDrag = null;  
  //Property: optionsDrop. Description: Opciones Soltar  
  this.optionsDrop = null;  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: xslParams. Description: Paramátros para el xsl  
  this.xslParams = null;  
  //Property: vars. Description: Definición de variables  
  this.vars = {};  
  //Property: content. Description: Contenido del tooltip  
  this.content = null;  
  //Property: events. Description: Lista de eventos  
  this.events = {}; 
};
//Inheritance
DragDropTool.inherits(ContainerTool); 
//* Definitions Events and Methods
DragDropTool.methods({
  //Methods   
  //Method: _addOptions. Description: Enlazar opciones y eventos al conjunto de marcos de referencia para herramienta de arrastrar/soltar Psi  
  _addOptions: function(container, proxy){ 
  try { 
    //proxy: options, ref, context
    return {
      parentSelector: this.attr("parent-selector"),
      
      //Eventos asociado a DRAG
      frameDragStart: function(event, dd){
        //Inicializar DRAG
        $(this).parent().frameset("option", "currentFrom", this.attached);
        
        var proxy = $(this).parent().frameset("option"),
            proxyElement = $(this).clone().appendTo( this.parentNode );
        $(this).parent().frameset("hide", "drag");
        $(this).parent().frameset("show", "drop");
        if (proxy.tool.on.dragStart)
          proxy.tool.on.dragStart(event, dd, proxy);
        
        //Crear linea imaginaria
        var settings = {"fill": "none", "stroke": "gray", "stroke-width": "0.5px", "stroke-dasharray": "3,1"},
            center = this.attached.midpoint(),
            offsetX = event.offsetX ? event.offsetX : event.originalEvent ? event.originalEvent.layerX : 0,
            offsetY = event.offsetY ? event.offsetY : event.originalEvent ? event.originalEvent.layerY : 0;
        this._point = this.attached.position().plus(offsetX, offsetY);
        //this._point = GLPsi.Geometry.createPoint(this.attached._svg.ownerSVGElement, dd.offsetX-window.scrollX, dd.offsetY-window.scrollY, this.attached._svg.getScreenCTM().inverse());
        this._current = this._point.clone();
        this._line = this.attached.context.svggen.line(center.x, center.y, this._point.x, this._point.y, settings);

        return proxy.tool.on.elementDrag 
             ? proxy.tool.on.elementDrag(event, dd, proxyElement, proxy, center)
             : proxyElement;
      },
      frameDrag: function(event, dd){
        var proxy = $(this).parent().frameset("option");
        if (proxy.tool.on.drag)
          proxy.tool.on.drag(event, dd, proxy);
        else $(dd.proxy).css({top: dd.offsetY, left: dd.offsetX});
        //dimensión line
        this._current.set(dd.deltaX, dd.deltaY).plus(this._point);
        $(this._line).attr({x2: this._current.x, y2: this._current.y});
        //$(this._line).attr({x2: dd.startX+dd.deltaX, y2: dd.startY+dd.deltaY});
      },
      frameDragEnd: function(event, dd){
        var proxy = $(this).parent().frameset("option");
        if (proxy.tool.on.dragEnd)
          proxy.tool.on.dragEnd(event, dd, proxy);
        $(dd.proxy).remove();
        $(this._line).remove();
        proxy.tool.close(proxy.toolId);
      },
      
      //Eventos asociados a DROP
      frameDropStart: function(event, dd){
        var proxy = $(this).parent().frameset("option");
        if (proxy.tool.on.dropStart)
          proxy.tool.on.dropStart(event, dd, proxy);
        $(this).addClass(proxy.framesSelector.drop["dropped-class"]);
      },
      frameDrop: function(event, dd){
        $(this).parent().frameset("option", "currentTo", this.attached);
        //Crear nuevo contenido
        var proxy = $(this).parent().frameset("option"),
            drop = proxy.tool;
        if (drop!=null) {
          var map = drop.hasAttr("map") ? drop.vars[drop.attr("map")].build(proxy) : {}, 
              append = $( drop.attr("parent-selector") ).find( drop.attr("append-selector") ),
              parent = append.length>0 ? append.get(0)._ref : null;
          
          if (parent && drop.on.process && (map=drop.on.process(event, dd, proxy.currentFrom, proxy.currentTo, parent, map, proxy))!=null){
            var result = {};
            for(var id in map) {
              var element = parent.parseElement(map[id]);
              result[element.id()] = element;
              //Ejecutar evento de análisis de elemento Psi
              if (drop.on.processedElement)
                drop.on.processedElement(event, dd, parent, element, map, proxy);
            } 
            //Ejecutar evento de finalización
            if (drop.on.end)
              drop.on.end(event, dd, parent, result, proxy, this.attached);
          }
          else{
            //Ejecutar evento de finalización
            if (drop.on.endNull)
              drop.on.endNull(event, dd, proxy, this.attached);
          }
        }  
      },
      frameDropEnd: function(event, dd){
        var proxy = $(this).parent().frameset("option");
        if (proxy.tool.on.dropEnd)
          proxy.tool.on.dropEnd(event, dd, proxy);
        $(this).removeClass(proxy.framesSelector.drop["dropped-class"]);
      }
    };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_addOptions", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _beforeOpenWidget. Description: Inicializar evento 'start'  
  _beforeOpenWidget: function(container, proxy){ 
  try { 
    //proxy: self, parent, options, ref, context
    $.drop({ mode:"overlap" });
    //Evento de inicio
    if (this.on.start)
      this.on.start(self, proxy);
    //Adicionar marcos de selección
    $.extend(true, proxy, {
      framesSelector: {
        drag: this.getOptionsDrag(proxy.ref, proxy),
        drop: this.getOptionsDrop(proxy.ref, proxy)
      }
    });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_beforeOpenWidget", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getOptionsDrag. Description: Obtener opciones de 'drag'  
  getOptionsDrag: function(ref, proxy){ 
  try { 
    return $.extend({drop: false, drag: true, show: true, border: 3}, this.optionsDrag ? this.optionsDrag.get(ref, proxy) : {});
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getOptionsDrag", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getOptionsDrop. Description: Obtener opciones de 'drop'  
  getOptionsDrop: function(ref, proxy){ 
  try { 
    return $.extend({drop: true, drag: false, show: false, border: 3}, this.optionsDrop ? this.optionsDrop.get(ref, proxy) : {});
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getOptionsDrop", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "DragDropTool"; }
});

/*-----------------------------------------------------
*=Enum[css_menu]: CssMenu
* Description: Definición de clases para un menú Psi
*-----------------------------------------------------*/
var CssMenu = {   
  Root: 'tdpsi-menu-root',  
  Item: 'item',  
  Submenu: 'submenu',  
  PopupContent: 'tdpsi-popup-content',  
  MenuContent: 'tdpsi-menu-content'
};   

/*-----------------------------------------------------
*=Class[space_menu]: SpaceMenu
* Description: Espacio entre de ítem de menú Psi
*-----------------------------------------------------*/
function SpaceMenu () {
  //Properties  
};
//Inheritance
SpaceMenu.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
SpaceMenu.methods({
  //Methods   
  //Method: build. Description: Construir espacio de menu Psi  
  build: function(){ 
  try { 
    switch(this.design){
      case "button": 
        return $("<div></div>")
          .css( {"display": "inline-block", "height": this.attr("height"), "width": this.attr("width")} );
      case "toolbar":
        var li = $("<li></li>").css( {"height": this.attr("height")} );
        if (this.attr("hr")=="yes")
          li.append('<hr size="1px" align="center" width="95%" style="margin:0;padding:0;">');
        return li;
      case "popup": 
        return $("<li></li>")
          .append('<hr style="border: 1px solid #f0f0f0; width:95%;"/>');
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"build", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Iniciar opciones por defecto  
  onInit: function(){ 
  try { 
    this.design = this.parent.design; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "SpaceMenu"; }
});

/*-----------------------------------------------------
*=Class[item_menu]: ItemMenu
* Description: Definición de ítem de menú Psi
*-----------------------------------------------------*/
function ItemMenu () {
  //Properties  
};
//Inheritance
ItemMenu.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
ItemMenu.methods({
  //Methods   
  //Method: build. Description: Construir item de menu Psi  
  build: function(){ 
  try { 
    switch(this.design){
      case "button": 
        var item = $("<button></button>").addClass(CssMenu.Item).text( this.attr("label") );
        item.attr("id", this.id());
        item.get(0)._item = this;
        return item;
        
      case "toolbar": 
        var newClass = CssMenu.Item+" "+(this.attr("class") ? this.attr("class") : "")+(this.hasAttr("font") || this.hasAttr("font-stack") ? " font" : "");
            item = $("<li></li>").addClass(newClass).attr("title", this.attr("label"));
        item.attr("id", this.id());
        item.get(0)._item = this;
        
        if (this.hasAttr("font-stack")){
          var stack = $("<span></span>").addClass(this.attr("font-stack"));
          stack.append($("<i></i>").addClass(this.attr("font1")));
          stack.append($("<i></i>").addClass(this.attr("font2")));
          stack.prependTo(item);
        }
        else if (this.hasAttr("font"))
          $("<i></i>").addClass(this.attr("font")).prependTo(item);
        return item;
        
      case "popup": 
      case "list": 
        var item = $("<li></li>");
        item.attr({"id": this.id(), "type": this.attr("type"), "toolId": this.attr("tool"), "key": this.attr("key")})
            .addClass(CssMenu.Item)
            .append('<a>'
              + (this.attr("icon") ? '<span class="ui-icon '+this.attr("icon")+'"></span>' : '')
              + this.attr("label")
              + '</a>');
        return item;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"build", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setActive. Description: Actualizar atributo 'active'  
  setActive: function(target, active){ 
  try { 
    if (active!=null)
      this.attr("active", active);
    $(target)[this.attr("active") ? "addClass":"removeClass"]( this.attr("active-class") );
    //Manipular cerrado automático de herramienta asociada a un ítem de menú
    if (this.params && this.tool && active==false)
      this.tool.close(this.params);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setActive", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setEnable. Description: Actualizar atributo 'enable'  
  setEnable: function(target, enable){ 
  try { 
    if (enable!=null)
      this.attr("enable", enable.toString());
    $(target).css({"opacity": enable?"1":"0.5"});
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setEnable", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Iniciar opciones por defecto  
  onInit: function(){ 
  try { 
    this.design = this.parent.design;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "ItemMenu"; }
});

/*-----------------------------------------------------
*=Class[submenu]: SubMenu
* Description: Definición de submenú Psi
*-----------------------------------------------------*/
function SubMenu () {
  //Properties   
  //Property: items. Description: Lista de ítems  
  this.items = {};  
  //Property: submenus. Description: Lista de submenús  
  this.submenus = {};  
  //Property: spaces. Description: Lista de espacios  
  this.spaces = {};  
  //Property: type. Description: De tipo 'menu'  
  this.type = 'menu'; 
};
//Inheritance
SubMenu.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
SubMenu.methods({
  //Methods   
  //Method: build. Description: Construir submenú  
  build: function(){ 
  try { 
    var item = $("<li></li>")
                .attr("id", this.id())
                .addClass( CssMenu.Submenu + (this.attr("class") ? " "+this.attr("class"): "") ),
        submenu = $("<ul></ul>").attr("id", this.id()),
        label = null;
    
    switch(this.design){
      case "toolbar":
        label = $('<div>'
              + (this.attr("icon") ? '<span class="ui-icon '+this.attr("icon")+'"></span>' : '')
              + (this.attr("font") ? '<i class="fa '+this.attr("font")+'"></i>' : '')
              + this.attr("label")
              + '</div>');
        if (this.attr("collapse")=='yes') {
          var collapse = $('<nav class="collapse"><i class="fa fa-minus-square-o"></i></nav>');
          collapse
          	.click(function(){
              $(this).find("i").toggleClass("fa-minus-square-o").toggleClass("fa-plus-square-o");
              $(this).parents(".submenu").find(">ul").toggle();
          	});
          label.prepend(collapse);
        }
        break;
      
      default: 
        label = $('<a>'
              + (this.attr("icon") ? '<span class="ui-icon '+this.attr("icon")+'"></span>' : '')
              + this.attr("label")
              + '</a>');
        break;
    }
    if (this.attr("label-class"))
      label.addClass(this.attr("label-class"));
    item.append(label);
    item.append(submenu);
    
    for(var id in this.children)
      submenu.append(this.children[id].build());
    return item;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"build", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Iniciar opciones por defecto  
  onInit: function(){ 
  try { 
    this.design = this.parent.design;
    this.menu = this.parent.menu ? this.parent.menu : this.parent; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onChildrenCreated. Description: Adicionar ítems a menu  
  onChildrenCreated: function(){ 
  try { 
    $.extend(this.menu.items, this.items);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "SubMenu"; }
});

/*-----------------------------------------------------
*=Class[popup_tool]: PopupTool
* Description: Manejo de Menú Flotante Psi
*-----------------------------------------------------*/
function PopupTool () {
  //Properties   
  //Property: type. Description: ToolType.Popup  
  this.type = ToolType.Popup;  
  //Property: widget. Description: Widget a usar: 'globe'  
  this.widget = 'globe';  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: items. Description: Lista de ítems  
  this.items = {};  
  //Property: submenus. Description: Lista de submenús  
  this.submenus = {};  
  //Property: spaces. Description: Lista de espacios  
  this.spaces = {}; 
};
//Inheritance
PopupTool.inherits(ContainerTool); 
//* Definitions Events and Methods
PopupTool.methods({
  //Methods   
  //Method: _getDefault. Description: Crear opciones por defecto para Menú Flotante Psi  
  _getDefault: function(){ 
  try { 
    this.design = this.attr("design");
    return {
      contentClass: CssMenu.PopupContent,
      width: 100
    };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getDefault", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _buildMenu. Description: Construir menú flotante Psi  
  _buildMenu: function(options){ 
  try { 
    var menu = $("<ul></ul>")
                .attr("id", this.id())
                .addClass(CssMenu.Root);
    this.design = this.attr("design");
    for(var id in this.children) {
      var item = this.children[id];
      //Crear los ítems de mánú
      if (item.build) 
        menu.append(item.build());
    }
    return menu;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_buildMenu", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _create. Description: Crear menú flotante Psi  
  _create: function(container, options, ref, context){ 
  try { 
    var popup = this._buildMenu();
    
    //Adicionar menu y redimensionar
    popup
      .css("width","100%")
      .menu({
          params: null,
          select: function(event, ui) {
            var proxy = $(event.target).parents(".tdpsi-popup").globe("option"),
                type = ui.item.attr("type"),
                toolId = ui.item.attr("toolId"),
                params = {
                  self: proxy.self, 
                  ref: proxy.ref ? proxy.ref : this._item, 
                  parent: proxy.parent, 
                  options: $.extend({item: {ref: ui.item, target: this}}, proxy.options), 
                  context: proxy.context
                };
            if (type==ToolType.Command) {
              PsiData.command[toolId](params, event);
              proxy.tool.close(proxy.toolId);
            }
            else if (PsiData[type] && PsiData[type][toolId]){
              var tool = PsiData[type][toolId];
              //params.key = ui.item.attr("key")=="*" ? $(proxy.parent).attr("id") : ui.item.attr("key");
              params.key = ui.item.attr("key")=="*" ? (proxy.ref ? proxy.ref.id(): $(proxy.parent).attr("id")) : ui.item.attr("key");
              if ( ui.item.attr("active") ) {
                tool.close(params);
                ui.item.setActive(event.target, false);
              }
              else {
                tool.open(params);
                proxy.tool.close({key: proxy.key});
              }
            }
            else
              new PsiWarning(this, "ERROR_ITEM_MENU", type, toolId);
          },
          focus: function(event, ui) {}, 
          blur: function(event, ui) {} 
        });
    $(container).append(popup);
    container._popup = popup;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _close. Description: Cerrar menú flotante Psi  
  _close: function(container, proxy){ 
  try { 
    var item = proxy.item && proxy.item.ref ? proxy.item.ref : null;
    if (item)
      item.setActive(proxy.item.target, false);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_close", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "PopupTool"; }
});

/*-----------------------------------------------------
*=Class[menu_tool]: MenuTool
* Description: Manejo de Menú Psi
*-----------------------------------------------------*/
function MenuTool () {
  //Properties   
  //Property: type. Description: ToolType.Menu  
  this.type = ToolType.Menu;  
  //Property: widget. Description: Widget a usar: 'content'  
  this.widget = 'content';  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: items. Description: Lista de ítems  
  this.items = {};  
  //Property: submenus. Description: Lista de submenús  
  this.submenus = {};  
  //Property: spaces. Description: Lista de espacios  
  this.spaces = {}; 
};
//Inheritance
MenuTool.inherits(ContainerTool); 
//* Definitions Events and Methods
MenuTool.methods({
  //Methods   
  //Method: _getDefault. Description: Crear opciones por defecto para Menú Psi  
  _getDefault: function(){ 
  try { 
    this.design = this.attr("design");
    return {
      contentClass: CssMenu.MenuContent,
      width: "100%"
    };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getDefault", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _buildMenu. Description: Construir menú psi  
  _buildMenu: function(options){ 
  try { 
    var menu = null;
    switch(this.design){
      case "button":  menu = $("<nav></nav>"); break;
      case "toolbar": menu = $("<ul></ul>"); break;
    }
    menu.attr("id", this.id())
        .addClass(CssMenu.Root);
    for(var id in this.children) {
      var item = this.children[id];
      //Crear los ítems de mánú
      if (item.build) 
        menu.append(item.build());
    }
    return menu;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_buildMenu", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _create. Description: Crear Menú Psi  
  _create: function(container, options, ref, context){ 
  try { 
    var menu = this._buildMenu(),
        fclick = function(event) {
          //Está habilitado el ítem de menú
          if (this._item.attr("enable")=="false") return true;
          
          //Continuar si el ítem está habilitado
          var proxy = $(this).parents("[type=menu]").content("option"),
              type = this._item.attr("type"),
              toolId = this._item.attr("tool"),
              params = {
                self: proxy.self, 
                ref: proxy.ref ? proxy.ref : this._item, 
                parent: proxy.parent, 
                options: $.extend({item: {ref: this._item, target: this}}, proxy.options), 
                context: proxy.context
              };
              
          if (type==ToolType.Command)
            PsiData.command[toolId](params, event);
          else if (PsiData[type] && PsiData[type][toolId]) {
            var tool = PsiData[type][toolId],
                target = $(event.target).hasClass("item") ? event.target : $(event.target).parent(".item").get(0),
                active = this._item.attr("active");
            params.key = this._item.attr("key")=="*" ? $(proxy.parent).attr("id") : this._item.attr("key");
            if (active)
              tool.close(params);
            else {
              params.parent = type==ToolType.Popup || type==ToolType.Tooltip ? $(this) : proxy.self;
              tool.open(params);
            }
            //Actualizar item activo de menú
            this._item.setActive(target, !active);
            this._item.params = params;
            this._item.tool = tool;
          }
          else
            new PsiWarning("TPSI.ERROR_ITEM_MENU", [type, toolId], [this]);
        };
    
    //Adicionar menu y redimensionar
    switch(this.design){
      case "button": 
         menu
          .css("width", options.width)
          .find(">button")
            .button()
            .click(fclick)
            .each(function(){
                $(this).button("option", "icons", {primary: this._item.attr("icon"), secondary: this._item.attr("secondary")});
                $(this).button("option", "text", eval(this._item.attr("text")));
              });
        break;
      case "toolbar": 
         menu
          .find("."+CssMenu.Item)
            .click(fclick);
        break;  
    }
    
    //Crear submenus sorteables
    switch(this.design){
      case "toolbar": 
        menu.sortable({handle: ".submenu-title"});
				menu.disableSelection();
        break;
    }
     
    
    //Adicionar menu al contenedor      
    $(container).append(menu);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getItem. Description: Obtener ítem de menú Psi  
  getItem: function(key, item){ 
  try { 
    var container = Container.get(this.type, this._getContainerId(key));
    if (container!=null && this.items[item]!=null)
      return {object: this.items[item], target: $(container).find("#"+item)};
    return null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getItem", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: activeItem. Description: Activar ítem de mánu Psi  
  activeItem: function(key, _item, active){ 
  try { 
    var item = this.getItem(key, _item);
    if (item)
      item.object.setActive(item.target, active);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"activeItem", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: enableItem. Description: Habilitar/Inhabilitar ítem de menú  
  enableItem: function(key, _item, enable){ 
  try { 
    var item = this.getItem(key, _item);
    if (item)
      item.object.setEnable(item.target, enable);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"enableItem", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "MenuTool"; }
});

/*-----------------------------------------------------
*=Enum[cell_sequence_type]: CellSequenceType
* Description: Tipo secuencia de celdas de uan matriz Psi
*-----------------------------------------------------*/
var CellSequenceType = {   
  Star: 'star',  
  Square: 'square'
};   

/*-----------------------------------------------------
*=Class[cell_sequence]: CellSequence
* Description: Definición de secuencia de celdas de una matriz Psi
*-----------------------------------------------------*/
function CellSequence (matrix) {
  //Properties   
  //Property: matrix. Description: Apuntador a matriz padre  
  this.matrix = matrix;  
  //Property: totalCells. Description: Total de celdas  
  this.totalCells = matrix.cols*matrix.rows;  
  //Property: map. Description: Mapa de secuencias  
  this.map = { square: {}, star: null }; 
}; 
//* Definitions Events and Methods
CellSequence.methods({
  //Methods   
  //Method: _getListSquare. Description: Obtener lista de vacios en forma de recorrido cuadrado Psi  
  _getListSquare: function(k){ 
  try { 
    //Derterminate if exist in map the square
    if (this.map.square["k_" + k]) return this.map.square["k_" + k];
    //Create list
    var list = new Array();
    for (var j = k; j >= -k; j--) list.push([j, k]);
    for (var j = k - 1; j >= -k; j--) list.push([-k, j]);
    for (var j = -k + 1; j <= k; j++) list.push([j, -k]);
    for (var j = -k + 1; j <= k - 1; j++) list.push([k, j]);
    this.map.square["k_" + k] = list;
    return list;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getListSquare", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _square. Description: Lista de recorrido cuadrado  
  _square: function(x, y, n){ 
  try { 
    //Get function list circle point by k
    var k = 1, index = 1, cells = new Array();
    while (index <= this.totalCells) {
      var list = this._getListSquare(k);
      for (var j in list) {
        var cell = this.matrix.cell(x - list[j][0], y - list[j][1]);
        if (cell != null) {
          index++;
          if (cell.isEmpty()) cells.push(cell);
          if (cells.length >= n) return cells;
        }
      }
      k++;
    }
    return cells;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_square", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _getListStar. Description: Obtener lista de vacios en forma de recorrido estrella Psi  
  _getListStar: function(){ 
  try { 
    //Derterminate if exist in map the star
    if (this.map.star) return this.map.star;
    
    //Function add to sequence
    var addSequence = function(a, i, j) {
      a.push([i, j]); a.push([-i, -j]);
      a.push([-j, i]); a.push([j, -i]);
    }
    
    //Init generate
    var sec = new Array(), i = 1, j = 2,
        n = Math.pow(this.matrix.cols, 2)+Math.pow(this.matrix.rows, 2);
    addSequence(sec, 1, 0);
    addSequence(sec, 1, 1);
    while (sec.length <= n) {
      addSequence(sec, i, j);
      addSequence(sec, j, i);
      if (j - i == 2) i++;
      else j++;
    }
    return sec;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_getListStar", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: _star. Description: Lista de recorrido estrella  
  _star: function(x, y, n){ 
  try { 
    //Function add to sequence
    var list = this._getListStar(), cells = new Array();
    for (var j in list) {
      var cell = this.matrix.cell(x + list[j][0], y + list[j][1]);
      if (cell != null) {
        if (cell.isEmpty()) cells.push(cell);
        if (cells.length >= n) return cells;
      }
    }
    return cells;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_star", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getEmpty. Description: Obtener recorrido desde una celda Psi  
  getEmpty: function(type, x, y, n){ 
  try { 
    switch (type) {
      case CellSequenceType.Square: return this._square(x, y, n);
      case CellSequenceType.Star: return this._star(x, y, n);
    }
    return null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getEmpty", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "CellSequence"; }
});

/*-----------------------------------------------------
*=Class[cell]: Cell
* Description: Define una celda de la matrix Psi
*-----------------------------------------------------*/
function Cell (matrix, i, j) {
  //Properties   
  //Property: matrix. Description: Apuntador a matriz padre  
  this.matrix = matrix;  
  //Property: i. Description: Indice i  
  this.i = i;  
  //Property: j. Description: Indica j  
  this.j = j;  
  //Property: _graph. Description: apuntador a elemento gráfico Psi  
  this._graph = null; 
  //Initialize class
  this.init();
}; 
//* Definitions Events and Methods
Cell.methods({
  //Methods   
  //Method: init. Description: Inicializa la posición de la celda  
  init: function(graph){ 
  try { 
    this.x = this.matrix.top + this.i*this.matrix.cellInfo.width;
    this.y = this.matrix.top + this.j*this.matrix.cellInfo.height;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setGraph. Description: Adicionar apuntador a elemento gráfico Psi  
  setGraph: function(graph){ 
  try { 
    this._box = graph.getBBox();  
    this._graph = graph;
    this._graph._cell = this;
    //Transladar refrescar ubicación de elemento gráfico
    var x = this.x + (this.matrix.cellInfo.width/2-this._box.width/2)-this._box.x,
        y = this.y + (this.matrix.cellInfo.height/2-this._box.height/2)-this._box.y;
    this._graph.translate(x, y);
    this._graph.refresh(true);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"setGraph", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: isEmpty. Description: Determina si no tiene apuntador gráfico Psi  
  isEmpty: function(){ 
    return this._graph==null;
   },  
  //Method: reset. Description: Remueve el apuntador gráfico Psi  
  reset: function(){ 
    this._graph = null;
    this._graph._cell = null;
   },
  //Events 
  toString: function() { return "Cell"; }
});

/*-----------------------------------------------------
*=Class[matrix]: Matrix
* Description: Matrix para el mano Psi
*-----------------------------------------------------*/
function Matrix (svggen, top, left, cols, rows, cellInfo, graphsInfo) {
  //Properties   
  //Property: svggen. Description: Diagrama  
  this.svggen = svggen;  
  //Property: svgroot. Description: Elemento raíz SVG  
  this.svgroot = svggen.root();  
  //Property: top. Description: top  
  this.top = top;  
  //Property: left. Description: left  
  this.left = left;  
  //Property: cols. Description: Número de columnas  
  this.cols = cols;  
  //Property: rows. Description: Número de filas  
  this.rows = rows;  
  //Property: cellInfo. Description: Información de celda  
  this.cellInfo = cellInfo;  
  //Property: graphsInfo. Description: Información de elemento gráfico Psi  
  this.graphsInfo = graphsInfo;  
  //Property: _cells. Description: Lista de celdas  
  this._cells = this._initCells(); 
}; 
//* Definitions Events and Methods
Matrix.methods({
  //Methods   
  //Method: _initCells. Description: Crear matriz Psi  
  _initCells: function(){ 
  try { 
    //Crear mátrix
    var cells = new Array();
    for (var j = 0; j < this.rows; j++) {
      var row = new Array();
      cells.push(row);
      for (var i = 0; i < this.cols; i++)
        row.push(new Cell(this, i, j));
    }
    
    //Crear secuenciador de celdas
    this.sequence = new CellSequence(this);
    return cells;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_initCells", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: cell. Description: Obtiene la celda de posición i,j  
  cell: function(i, j){ 
  try { 
    if (0 <= i && i < this.cols && 0 <= j && j < this.rows)
      return this._cells[j][i];
    return null;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"cell", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getBBox. Description: Obtener el marco de la mátrix Psi  
  getBBox: function(){ 
  try { 
    var box = this.svgroot.createSVGRect();
    box.x = this.left;
    box.y = this.top;
    box.width = this.cols*this.cellInfo.width;
    box.height = this.rows*this.cellInfo.height;
    return box;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getBBox", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getCellsEmpty. Description: Obtener celdas vacias desde un origen  
  getCellsEmpty: function(type, i, j, n){ 
  try { 
    return this.sequence.getEmpty(type, i, j, n);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getCellsEmpty", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getCellEmptyRandom. Description: Obtener celda Psi vacia a partir de una posición i,j  
  getCellEmptyRandom: function(){ 
  try { 
    var i = Math.floor(Math.random() * this.cols),
        j = Math.floor(Math.random() * this.rows),
        cell = this.cell(i, j);
    if (cell && cell.isEmpty()) return cell;
    return this.sequence.getEmpty(CellSequenceType.Square, i, j, 1)[0];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getCellEmptyRandom", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: isCellEmpty. Description: Determinar si la celda i,j está vacia  
  isCellEmpty: function(i, j){ 
  try { 
    return this.cell(i,j).isEmpty();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"isCellEmpty", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: grid. Description: Crear líneas de las celdas  
  grid: function(parent, nclass){ 
  try { 
    var g = this.svggen.group(parent);
    for(var i=1; i<this.cols; i++) 
      this.svggen.line(g, this.left+i*this.cellInfo.width, this.top, this.left+i*this.cellInfo.width, this.top+this.rows*this.cellInfo.height, {"class": nclass});
    for(var j=1; j<this.rows; j++) 
      this.svggen.line(g, this.left, this.top+j*this.cellInfo.height, this.left+this.cols*this.cellInfo.width, this.top+j*this.cellInfo.height, {"class": nclass});
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"grid", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: reset. Description: Limpiar matriz Psi  
  reset: function(){ 
  try { 
    for(var j in this._cells)
      for(var i in this._cells[j])
        this._cells[j][i].reset();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"reset", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getWidth. Description: Obtener ancho de matriz  
  getWidth: function(){ 
  try { 
    return this.cols*this.cellInfo.width;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getWidth", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getHeight. Description: Obtener alto de matriz  
  getHeight: function(){ 
  try { 
    return this.rows*this.cellInfo.height;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getHeight", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: redimension. Description: Redimensionar matriz  
  redimension: function(newCols, newRows){ 
  try { 
    //Redimensionar filas
    if (newRows<this.rows){
      this._cells = this._cells.splice(0, newRows);
      this.rows = newRows;
    }
    //Redimensionar columnas
    if (newCols<this.cols){
      for(var j in this._cells)
        this._cells[j] = this._cells[j].splice(0, newCols);
      this.cols = newCols;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"redimension", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Matrix"; }
});

/*-----------------------------------------------------
*=Class[paths]: Paths
* Description: creación de caminos Psi
*-----------------------------------------------------*/
function Paths (nodes, source) {
  //Properties   
  //Property: nodes. Description: Lista de nodos  
  this.nodes = nodes;  
  //Property: source. Description: Inicializar fuente  
  this.source = this._init(source);  
  //Property: map. Description: Mapa de puntos  
  this.map = {};  
  //Property: _ref. Description: Referencia a eleemnto gráfico Psi  
  this._ref = {};  
  //Property: _index. Description: Ãndice  
  this._index = 1;  
  //Property: size. Description: támaÃ±o de los puntos  
  this.size = 0; 
}; 
//* Definitions Events and Methods
Paths.methods({
  //Methods   
  //Method: _init. Description: Inicializar paths  
  _init: function(source){ 
  try { 
    this.paths = $("Paths", source);
    this.pathName = $(source.documentElement).attr("path-name") ? $(source.documentElement).attr("path-name") : "path-";
    if(this.paths.length==0){
      var elementPaths = source.createElement("Paths");
      $(source.documentElement).append(elementPaths);
      this.paths = $(elementPaths);
    }
    else this.paths.empty();
    return source; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: add. Description: Adicionar ruta  
  add: function(path){ 
  try { 
    var list = path.split(","), 
        array = new Array(),
        pathElement = this.source.createElement("Path");
    for(var i=0; i<list.length; i++){
      var node = this.nodes[list[i]];
      if (node==null){
        WARNING("PATH_NOT_ADD", path, i);
        return -1;
      }
      array.push(node);
      //Create element
      var activityElement = this.source.createElement("Activity");
      $(pathElement).append(activityElement);
      $(activityElement).attr("key", list[i]);
      if (i<list.length-1) 
        $(activityElement).attr("arrow-to", $("[from="+list[i]+"][to="+list[i+1]+"]", this.source).attr("id")); 
    }
    var index = this.pathName+(this._index++);
    $(pathElement).attr("name", index);
    this.paths.append(pathElement);
    this.map[index] = array;
    this._ref[index] = path;
    return this.size++; 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"add", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: setAttrToPath. Description: Adicionar atributos a la ruta 'name'  
  setAttrToPath: function(name, attrs){ 
    $("Path[name="+name+"]", this.source).attr(attrs); 
   },  
  //Method: getPath. Description: Obtener ruta por 'name'  
  getPath: function(name){ 
    return $("Path[name="+name+"]", this.source); 
   },  
  //Method: getPaths. Description: Obtener todas las rutas  
  getPaths: function(){ 
    return $("Path", this.source); 
   },  
  //Method: getPathsCritical. Description: Obtener caminos criticas  
  getPathsCritical: function(){ 
    return $("Path[type=critical]", this.source); 
   },  
  //Method: getPathsByActivity. Description: Obtener todas las rutas donde esta la actividad 'key'  
  getPathsByActivity: function(key){ 
    var result = new Array();
    $("Path Activity[key="+key+"]", this.source).each(function(){
      result.push($(this).parent());
    }); 
    return result;
   },  
  //Method: toArray. Description: Devuelve un arreglo de las rutas de nodos  
  toArray: function(callSort){ 
    var result = new Array();
    for(var i in this.map) result.push(this.map[i]);
    if ($.isFunction(callSort)) result.sort(callSort);
    return result; 
   },  
  //Method: toArrayByNumberNodes. Description: Devuelve un arreglo de las rutas de nodos por número de nodos  
  toArrayByNumberNodes: function(ascendant){ 
  try { 
    if (ascendant) return this.toArray( function(a,b){ return a.length-b.length; } ); 
    return this.toArray( function(a,b){ return b.length-a.length; } ); 
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"toArrayByNumberNodes", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Paths"; }
});

/*-----------------------------------------------------
*=Component[generator]: Generator
* Description: Componente para generar de diagramas Psi sobre un adminstrador de diagramas Psi
*-----------------------------------------------------*/
var Generator = (function () {  

  //Component Properties 


/*-----------------------------------------------------
*=Class[generator_tool]: GeneratorTool
* Description: Definición de generador de disgramas Psi
*-----------------------------------------------------*/
function GeneratorTool () {
  //Properties   
  //Property: type. Description: ToolType.Generator  
  this.type = ToolType.Generator;  
  //Property: map. Description: Lista de elementos de generación  
  this.map = {};  
  //Property: actions. Description: Lista de acciones  
  this.actions = new Array();  
  //Property: options. Description: Lista de opciones  
  this.options = null;  
  //Property: vars. Description: Definición de variables  
  this.vars = {};  
  //Property: events. Description: Lista de eventos  
  this.events = {};  
  //Property: graphs. Description: Mapa de figuras  
  this.graphs = {};  
  //Property: lines. Description: Mapa de líneas  
  this.lines = {};  
  //Property: processes. Description: Mapa de procesos  
  this.processes = {};  
  //Property: matrices. Description: Mapa de matrices  
  this.matrices = {}; 
};
//Inheritance
GeneratorTool.inherits(Tool); 
//* Definitions Events and Methods
GeneratorTool.methods({
  //Methods   
  //Method: open. Description: Ejecuta el generador Psi  
  open: function(id, self, parent, newOptions, ref, manager){ 
  try { 
    try {
      var context = {
            id: id, self: self, options: this._getOptions(parent, newOptions, ref),
            _items: {}, _existingItems: {}, _existingArray: new Array(), _newItems: {}, _newArray: new Array(),
            manager: manager ? manager : DPsi.getManager( this.attr("manager-diagram") )
          };
          
      //ejecutar evento de inicio
      if (this.on.init)
        this.on.init(context.manager, context);
      
      //Ejecutar proceso de generación
      for(var i in this.actions){
        var action = this.actions[i];
        action.execute(context, this.options, this.vars);
      }
       
      //Ejecutar evento de finalización  
      if (this.on.end)
        this.on.end(context.manager, context);
      this.map[id] = context;
    }
    catch(e){
      throw new PsiError("TPSI.ERROR_SHUT_DOWN_TOOL", [this.type, id, e.message], [this, e, arguments]);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"open", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: close. Description: Cierra el generador Psi  
  close: function(id, options, ref, context){ 
  try { 
    
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"close", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: destroy. Description: Destruir el generador Psi  
  destroy: function(id){ 
  try { 
    if (this.map[id])
      delete this.map[id];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"destroy", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar generador  
  onInit: function(){ 
  try { 
    //Registrar el tipo de contenedor
    this.key = this.parent.alias+"."+this.id(); 
    PsiData[this.type].register(this.key, this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onChildrenCreated. Description: Creación de variables y eventos  
  onChildrenCreated: function(){ 
  try { 
    //Generar eventos create, open y close
    this.on = this._getEvents();
    
    //Obtener variables heredadas
    this._getVars();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onAddChild. Description: Adicionar generador de figuras, generador de líneas y mátodos ejecución a la lista de acciones a aplicar  
  onAddChild: function(uid, psiElement){ 
  try { 
    switch (psiElement.tag){
      case "Graphs":
      case "Lines":
      case "Matrix":
        this.actions.push(psiElement);
        break;
      case "Process":
        psiElement.build("execute");
        this.actions.push(psiElement);
        break;
    }
    this.actions;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onAddChild", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "GeneratorTool"; }
});

/*-----------------------------------------------------
*=Class[definition_matrix]: DefinitionMatrix
* Description: Matrix para el mano Psi
*-----------------------------------------------------*/
function DefinitionMatrix () {
  //Properties  
};
//Inheritance
DefinitionMatrix.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
DefinitionMatrix.methods({
  //Methods   
  //Method: execute. Description: Creación de la matrix Psi  
  execute: function(context, options, vars){ 
  try { 
    //Establecer contexto, parámetros y variables
    this.context = context;
    this.options = options;
    this.vars = vars;
    
    //Determinar las dimensiones de la matrix dependiendo del porcentaje de vacios
    var graph = this.hasAttr("ref-graph")
              ? $.extend({total: Math.round( (1 + this.attr("empty"))*context[this.attr("ref-graph")+"Info"].size ) }, context[this.attr("ref-graph")+"Info"]) 
              : { 
                  size: this.attr("graph-size"), 
                  total: Math.round( (1 + this.attr("empty")) * this.attr("graph-size") ),
                  width: this.attr("graph-width"),
                  height: this.attr("graph-height") 
                },
        cell  = { 
                  width: graph.width*this.attr("cell-width"), 
                  height: graph.height*this.attr("cell-height") 
                },
        cols  = this.hasAttr("cols") ? this.attr("cols") : Math.ceil(Math.sqrt(graph.total / this.attr("scale"))),
        rows  = this.hasAttr("rows") ? this.attr("rows") : cols===0 ? 1 : Math.ceil(graph.total / cols);
    
    //Crear matriz    
    var matrix = new Matrix(context.manager.svggen, this.attr("top"), this.attr("left"), cols===0 ? 1 : cols, rows, cell, graph);
    
    //Crear grid de ma matris si está definido
    if (this.hasAttr("grid-to")) {
      var container = context.manager.findRef(this.attr("grid-to"));
      matrix.grid(container._svg, this.attr("grid-class"));
    }
    
    context[this.id()] = matrix;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"execute", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "DefinitionMatrix"; }
});

/*-----------------------------------------------------
*=Class[base_generator]: BaseGenerator
* Description: Clase base para la generación de elementos Psi
*-----------------------------------------------------*/
function BaseGenerator () {
  //Properties  
};
//Inheritance
BaseGenerator.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
BaseGenerator.methods({
  //Methods   
  //Method: execute. Description: Ejecución de generación de elementos Psi  
  execute: function(context, options, vars){ 
  try { 
    var result = {};
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i],
          str = attr.name.split("-");
          
      //Definir si es de tipo referencia
      if (str[0]=="ref"){
        var dp  = attr.value.indexOf(":"), dd = attr.value.indexOf("|"), type= str[1], map = {},
            key = attr.value.substr(0,dp), refId = attr.value.substr(dp+1, dd-dp-1), args = attr.value.substr(dd+1), 
            obj = type=="context" 
                ? this.context[key]
                : type=="options" || type=="manager" 
                  ? context[type][key] 
                  : PsiData[type] ? PsiData[type].get(key) : null;
        
        //Encontrar lista
        if ($.isXMLDoc(obj) || obj.jquery )
          $(obj).find(args).each(function(){ 
            map[$(this).attr(refId)] = this; 
          });
        else if ($.isFunction(obj))
          list = eval( "obj("+args+")" );
        else if ($.isArray(obj) || $.isPlainObject(obj))
          list = obj[args];
        
        //Procesar lista de resultados
        this.processMap(context, map, result, options, vars);
      }
    }
    //Refrescar 
    //Adicionar a proceso actual
    context[this.id()] = result;
    
    //Adicionar Información sobre los graphs
    if (this.tag=="Graphs") {
      var info = {size: 0, width: 0, height: 0}; 
      for (var id in result) {
        var box = result[id].getBBox(); 
        info.size++;
        if (info.width<box.width) info.width = box.width;
        if (info.height<box.height) info.height = box.height;
      }
      context[this.id()+"Info"] = info;
    }
    
    //Adicionar Información sobre las líneas
    if (this.tag=="Lines") {
      var info = {size: 0}; 
      for (var id in result)
        info.size++;
      context[this.id()+"Info"] = info;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"execute", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: processList. Description: Mátodo abstracto para procesar lista de posibles elementos Psi  
  processList: function(){  },
  //Events   
  //Event: onChildrenCreated. Description: Obtener todos los eventos  
  onChildrenCreated: function(){ 
  try { 
    //Generar eventos 
    for(var name in this.events)
      this.on[name] = this.events[name].build();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onChildrenCreated", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "BaseGenerator"; }
});

/*-----------------------------------------------------
*=Class[graphs_generator]: GraphsGenerator
* Description: Clase base para la generación de figuras, nodos, paneles y listas Psi
*-----------------------------------------------------*/
function GraphsGenerator () {
  //Properties   
  //Property: on. Description: Lista de eventos  
  this.on = {};  
  //Property: source. Description: Fuente de figuras  
  this.source = null;  
  //Property: events. Description: Lista de eventos  
  this.events = {}; 
};
//Inheritance
GraphsGenerator.inherits(BaseGenerator); 
//* Definitions Events and Methods
GraphsGenerator.methods({
  //Methods   
  //Method: processMap. Description: Procesar nodos, figuras, listas y paneles Psi  
  processMap: function(context, map, result, options, vars){ 
  try { 
    var parent = context.manager.findRef( this.attr("append-to") );
    
    if (parent) {    
      var arrayItems = new Array();
      
      //Procesar lista de resultados
      this.context = context;
      this.options = options;
      this.vars = vars;
      this.result = result;
      for (var id in map){
        var item = null, data = $(map[id]);
        if (context.manager.map[id]) {
          item = context.manager.map[id];
          context._existingItems[id] = item;
          context._existingArray.push(item);
        }
        else {
          //Crear elemento gráfico Psi
          var xmlGraph = $.parseXML( this.source.text().replace(/#id;/g,id) );
          this.current = $(xmlGraph).children();
          this.current.attr("id", id);
          if (this.hasAttr("attached-to"))
            this.current.attr("attached-to", data.attr( this.attr("attached-to") ));
          
          //Determinar la condición
          this.info = data;
          if (this.attr("condition")===false) continue;
          
          //Evento antes de realizar parseo de elemento
          if (this.on.beforeParseElement)
            this.on.beforeParseElement(this.current, context, parent, result, options, vars);
            
          //Compilar elemento gráfico
          item = parent.parseElement(this.current);
          if (item==null) continue;
          context._newItems[id] = item;
          context._newArray.push(item);
          
          //Evento antes de realizar parseo de elemento
          if (this.on.afterParseElement)
            this.on.afterParseElement(item, context, parent, result, options, vars);
        }
        
        //Refrescar posición y conexión Psi  
        if (this.random)
          item.translate( Math.floor((Math.random()*parent.viewBox.width)), Math.floor((Math.random()*parent.viewBox.height)));
        item.refresh();
        if (item.connection)
          item.connection.checks.refresh();
        
        //TamaÃ±o para ordenar
        if (this.hasAttr("size"))
          item.__size = this.attr("size");
        
        arrayItems.push(item);
      }
      
      //Procesar orden
      arrayItems.sort(function(a, b) { return b.__size - a.__size; });
      for(var i in arrayItems) { 
        var item = arrayItems[i]; 
        context._items[item.id()] = item;
        result[item.id()] = item;
        delete item.__size;
      }
      context[this.id()+"Array"] = arrayItems;
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"processMap", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar propiedades para la generación de elmentos gráficos Psi  
  onInit: function(){ 
  try { 
    this.random = this.attr("position")=="random";
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "GraphsGenerator"; }
});

/*-----------------------------------------------------
*=Class[lines_generator]: LinesGenerator
* Description: Clase base para la generación de líneas y conectores Psi
*-----------------------------------------------------*/
function LinesGenerator () {
  //Properties   
  //Property: on. Description: Lista de eventos  
  this.on = {};  
  //Property: source. Description: Fuente de líneas  
  this.source = null;  
  //Property: events. Description: Lista de eventos  
  this.events = {}; 
};
//Inheritance
LinesGenerator.inherits(BaseGenerator); 
//* Definitions Events and Methods
LinesGenerator.methods({
  //Methods   
  //Method: processMap. Description: Procesar lineas y conectores Psi  
  processMap: function(context, map, result, options, vars){ 
  try { 
    var parent = context.manager.findRef( this.attr("append-to") );
    
    if (parent) {    
      var sfrom = this.attr("from");
      
      //Procesar lista de resultados
      for (var id in map){
        var data = $(map[id]),
            fromId = sfrom[0]=="+" ? data.parent().attr(sfrom.substr(1)) : data.attr(sfrom),
            toId = data.attr( this.attr("to") ),
            item = null, 
            itemId = sfrom[0]=="+" ? fromId+"--"+toId : id;
            
        if (context.manager.map[itemId])
          item = context.manager.map[itemId];
        else {
          var xmlLine = $.parseXML( this.source.text().replace(/#id;/g,id) ),
              line = $(xmlLine).children();
          
          line.attr("id", itemId);
          if (line.attr("psi-id")=="connector") {
            var from = context.manager.map[fromId],
                to = context.manager.map[toId];
            //Validar existencia de nodos en el diagrama
            if (from==null || to==null)
              continue;
            //Actualizar de origen y destino
            line.attr({
              from: fromId,
              start: line.attr("start") ? line.attr("start") : from.connection.getPositionDefault(), 
              to: toId,
              end: line.attr("end") ? line.attr("end") : to.connection.getPositionDefault()
            });
            if (fromId==toId && this.hasAttr("path-itself"))
              line.attr("path", this.attr("path-itself"));
            isConnector = true;
          }
          
          //Evento antes de realizar parseo de elemento
          if (this.on.beforeParseElement)
            this.on.beforeParseElement(line, context, from, to, parent, result, options, vars);
          
          //Ejecutar parseo de lemento  
          item = parent.parseElement(line);
          
          if (fromId==toId) {
            var arrayItself = this.id()+"Itself";
            if (context[arrayItself]==null)
              context[arrayItself] = new Array();
            context[arrayItself].push(item);
          }
          
          //Evento antes de realizar parseo de elemento
          if (this.on.afterParseElement)
            this.on.afterParseElement(item, context, from, to, parent, result, options, vars);
          
          if (item==null) continue;
        }
        //Refrescar conexiones origen y destino
        if (item.tag=="connector") 
          item.refreshStartEnd();
        result[itemId] = item;  
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"processMap", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar propiedades para la generación de líneas y conectores Psi  
  onInit: function(){ 
  try { 
    this.random = this.attr("position")=="random";
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "LinesGenerator"; }
});


  //Component Methods 


/*-----------------------------------------------------
* Component Definition: Generator  
*-----------------------------------------------------*/
return {
  //Content 
  GeneratorTool: GeneratorTool, //* Type: Class
  DefinitionMatrix: DefinitionMatrix, //* Type: Class
  BaseGenerator: BaseGenerator, //* Type: Class
  GraphsGenerator: GraphsGenerator, //* Type: Class
  LinesGenerator: LinesGenerator, //* Type: Class
  //Properties 
  //Methods 
  toString: function() { return "Generator"; }
};
})(); 

/*-----------------------------------------------------
*=Class[tools_psi]: ToolsPsi
* Description: Herramientas basadas en PsiXML, WPsi
*-----------------------------------------------------*/
function ToolsPsi () {
  //Properties   
  //Property: documents. Description: Mapa de documentos  
  this.documents = {};  
  //Property: vars. Description: Mapa de variables  
  this.vars = {};  
  //Property: makes. Description: Mapa de modificadores cráficos  
  this.makes = {};  
  //Property: scripts. Description: Lista de scripts  
  this.scripts = {};  
  //Property: functions. Description: Mapa de funciones  
  this.functions = {};  
  //Property: classes. Description: Mapa de clases  
  this.classes = {};  
  //Property: commands. Description: Mapa de comandos  
  this.commands = {};  
  //Property: dialogs. Description: Mapa de cajas de diálogo  
  this.dialogs = {};  
  //Property: tooltips. Description: Mapa de tooltip  
  this.tooltips = {};  
  //Property: toolbars. Description: Mapa de barra de herramientas  
  this.toolbars = {};  
  //Property: frames. Description: Mapa de fragmentos de página  
  this.frames = {};  
  //Property: drops. Description: Mapa de elementos de soltar  
  this.drops = {};  
  //Property: dragdrops. Description: Mapa de elementos de arrastrar y soltar  
  this.dragdrops = {};  
  //Property: popups. Description: Mapa de múnus flotantes  
  this.popups = {};  
  //Property: menus. Description:  Mapa de menús  
  this.menus = {};  
  //Property: generators. Description: Mapa de generadores gráficos  
  this.generators = {}; 
};
//Inheritance
ToolsPsi.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
ToolsPsi.methods({
  //Methods   
  //Method: createModule. Description: Crear modulo Psi  
  createModule: function(name){ 
  try { 
    if ($.type(name)=="string" && this.hasAttr("module")){
      var newModule =  this.attr("module")+"."+name;
      PsiXML.createModule(newModule);
    }  
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createModule", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: createClass. Description: Crear clase Psi  
  createClass: function(name, constructor, properties, methods, inherits, init){ 
  try { 
    if ($.type(name)=="string" && this.hasAttr("module")) {
      var nameClass =  this.attr("module")+"."+name;
      PsiXML.createClass(nameClass, constructor, properties, methods, inherits, init);
    }
    else
      throw new PsiError("TPSI.ERROR_CLASS", [nameClass], [this, arguments]);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"createClass", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar herramientas Psi  
  onInit: function(){ 
  try { 
    this.alias = this.attr("alias");
    //Crear modulo si lo solicita
    
    //Crear modulo para la definición de clases de las herramientas
    if (this.hasAttr("module"))
      PsiXML.createModule(this.attr("module"));
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "ToolsPsi"; }
});

/*-----------------------------------------------------
*=Parser[tools_psi_parser]: ToolsPsiParser
* Description: 
*-----------------------------------------------------*/
function ToolsPsiParser () {
  //Properties  
};
ToolsPsiParser.inherits(PsiXML.Parser); 
//* Definitions Events and Methods
ToolsPsiParser.methods({
  
  //Define Properties
  defineProperties: function(newElement) {
    if (newElement.parent) {
      switch (newElement.parent._def.key) { 
        case ID_TAG_TOOLS_PSI:
          switch (newElement.tag) { 
            case "LoadDocument": newElement.parent.documents[newElement.alias] = newElement; break;
            case "Var": newElement.parent.vars[newElement.id()] = newElement; break;
            case "Make": newElement.parent.makes[newElement.id()] = newElement; break;
            case "Script": newElement.parent.scripts[newElement.id()] = newElement; break;
            case "Function": newElement.parent.functions[newElement.id()] = newElement; break;
            case "Class": newElement.parent.classes[newElement.name] = newElement; break;
            case "Command": newElement.parent.commands[newElement.id()] = newElement; break;
            case "Dialog": newElement.parent.dialogs[newElement.id()] = newElement; break;
            case "Tooltip": newElement.parent.tooltips[newElement.id()] = newElement; break;
            case "Toolbar": newElement.parent.toolbars[newElement.id()] = newElement; break;
            case "Frame": newElement.parent.frames[newElement.id()] = newElement; break;
            case "Drop": newElement.parent.drops[newElement.id()] = newElement; break;
            case "DragDrop": newElement.parent.dragdrops[newElement.id()] = newElement; break;
            case "Popup": newElement.parent.popups[newElement.id()] = newElement; break;
            case "Menu": newElement.parent.menus[newElement.id()] = newElement; break;
            case "Generator": newElement.parent.generators[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_CLASS_TOOL:
          switch (newElement.tag) { 
            case "Properties": newElement.parent.properties = newElement; break;
            case "Method": newElement.parent.methods[newElement.name] = newElement; break;
          };
          break;
        case ID_TAG_COMMAND_TOOL:
          switch (newElement.tag) { 
            case "Options": newElement.parent.options = newElement; break;
            case "Body": newElement.parent.body = newElement; break;
          };
          break;
        case ID_TAG_DIALOG_TOOL:
          switch (newElement.tag) { 
            case "Options": newElement.parent.options = newElement; break;
            case "Position": newElement.parent.position = newElement; break;
            case "XslParams": newElement.parent.xslParams = newElement; break;
            case "Var": newElement.parent.vars[newElement.id()] = newElement; break;
            case "Content": newElement.parent.content = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
            case "Button": newElement.parent.buttons[newElement.name] = newElement; break;
          };
          break;
        case ID_TAG_TOOLBAR_TOOL:
          switch (newElement.tag) { 
            case "Options": newElement.parent.options = newElement; break;
            case "Position": newElement.parent.position = newElement; break;
            case "XslParams": newElement.parent.xslParams = newElement; break;
            case "Var": newElement.parent.vars[newElement.id()] = newElement; break;
            case "Content": newElement.parent.content = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
          };
          break;
        case ID_TAG_TOOLTIP_TOOL:
          switch (newElement.tag) { 
            case "Options": newElement.parent.options = newElement; break;
            case "XslParams": newElement.parent.xslParams = newElement; break;
            case "Var": newElement.parent.vars[newElement.id()] = newElement; break;
            case "Content": newElement.parent.content = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
          };
          break;
        case ID_TAG_FRAME_TOOL:
          switch (newElement.tag) { 
            case "Options": newElement.parent.options = newElement; break;
            case "XslParams": newElement.parent.xslParams = newElement; break;
            case "Var": newElement.parent.vars[newElement.id()] = newElement; break;
            case "Content": newElement.parent.content = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
          };
          break;
        case ID_TAG_DROP_TOOL:
          switch (newElement.tag) { 
            case "FrameDrop": newElement.parent.optionsDrop = newElement; break;
            case "Options": newElement.parent.options = newElement; break;
            case "XslParams": newElement.parent.xslParams = newElement; break;
            case "Var": newElement.parent.vars[newElement.id()] = newElement; break;
            case "Content": newElement.parent.content = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
          };
          break;
        case ID_TAG_DRAGDROP_TOOL:
          switch (newElement.tag) { 
            case "FrameDrag": newElement.parent.optionsDrag = newElement; break;
            case "FrameDrop": newElement.parent.optionsDrop = newElement; break;
            case "Options": newElement.parent.options = newElement; break;
            case "XslParams": newElement.parent.xslParams = newElement; break;
            case "Var": newElement.parent.vars[newElement.id()] = newElement; break;
            case "Content": newElement.parent.content = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
          };
          break;
        case ID_TAG_POPUP_TOOL:
          switch (newElement.tag) { 
            case "Options": newElement.parent.options = newElement; break;
            case "Item": newElement.parent.items[newElement.id()] = newElement; break;
            case "SubMenu": newElement.parent.submenus[newElement.id()] = newElement; break;
            case "Space": newElement.parent.spaces[newElement.uid] = newElement; break;
          };
          break;
        case ID_TAG_MENU_TOOL:
          switch (newElement.tag) { 
            case "Options": newElement.parent.options = newElement; break;
            case "Item": newElement.parent.items[newElement.id()] = newElement; break;
            case "SubMenu": newElement.parent.submenus[newElement.id()] = newElement; break;
            case "Space": newElement.parent.spaces[newElement.uid] = newElement; break;
          };
          break;
        case ID_TAG_OPTIONS:
          switch (newElement.tag) { 
            case "Options": newElement.parent._options[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_SUBMENU_POPUP:
          switch (newElement.tag) { 
            case "Item": newElement.parent.items[newElement.id()] = newElement; break;
            case "SubMenu": newElement.parent.submenus[newElement.id()] = newElement; break;
            case "Space": newElement.parent.spaces[newElement.uid] = newElement; break;
          };
          break;
        case ID_TAG_SUBMENU_MENU:
          switch (newElement.tag) { 
            case "Item": newElement.parent.items[newElement.id()] = newElement; break;
            case "Space": newElement.parent.spaces[newElement.uid] = newElement; break;
          };
          break;
        case ID_TAG_GENERATOR_TOOL:
          switch (newElement.tag) { 
            case "Options": newElement.parent.options = newElement; break;
            case "Var": newElement.parent.vars[newElement.id()] = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
            case "Graphs": newElement.parent.graphs[newElement.id()] = newElement; break;
            case "Lines": newElement.parent.lines[newElement.id()] = newElement; break;
            case "Process": newElement.parent.processes[newElement.name] = newElement; break;
            case "Matrix": newElement.parent.matrices[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_GRAPHS_GENERATOR:
          switch (newElement.tag) { 
            case "Source": newElement.parent.source = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
          };
          break;
        case ID_TAG_LINES_GENERATOR:
          switch (newElement.tag) { 
            case "Source": newElement.parent.source = newElement; break;
            case "Event": newElement.parent.events[newElement.name] = newElement; break;
          };
          break;
      }
    }
  }, 
  //Methods 
  //Events   
  //Event: onInit. Description: Iniciar parser de extensiones de gráficos  
  onInit: function(){ 
  try { 
    //* Implementation event
	 } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Event: onErrorParseElement. Description: Despues de creado un elemento  
  onErrorParseElement: function(newElement, error){ 
  try { 
    //* Implementation event
    return false;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onErrorParseElement", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "ToolsPsiParser"; }
});


/*-----------------------------------------------------
* Component:  Methods
*-----------------------------------------------------*/



/*-----------------------------------------------------
* Register Component to PsiXML:  TPsi
*-----------------------------------------------------*/
PsiXML.registerLanguagePsi(ALIAS, GRAMMAR, ToolsPsiParser);

function _run(name, options, context){
  return PsiXML.traductor_PxmlToPobj(ALIAS, name, options, context);
}
function _language(){
  return PsiXML.LanguagePsi.get(ALIAS);
}


/*-----------------------------------------------------
* Module Initialize: InitTPsi  
*-----------------------------------------------------*/
function InitTPsi() { 
    //Registrar herramientas Psi
    PsiData.register(ToolType.Dialog);
    PsiData.register(ToolType.Tooltip);
    PsiData.register(ToolType.Toolbar);
    PsiData.register(ToolType.Menu);
    PsiData.register(ToolType.Popup);
    PsiData.register(ToolType.Frame);
    PsiData.register(ToolType.Drop); 
    PsiData.register(ToolType.DragDrop);
    PsiData.register(ToolType.Generator);   
  
}
InitTPsi();

/*-----------------------------------------------------
* Component Definition: TPsi  
*-----------------------------------------------------*/
return {
  //Content 
  ToolType: ToolType, //* Type: Enum
  message: message, //* Type: Function
  LoadDocument: LoadDocument, //* Type: Class
  Help: Help, //* Type: Component
  Var: Var, //* Type: Class
  Make: Make, //* Type: Class
  Script: Script, //* Type: Class
  Text: Text, //* Type: Class
  Options: Options, //* Type: Class
  ContentType: ContentType, //* Type: Enum
  Content: Content, //* Type: Class
  Tool: Tool, //* Type: Class
  CloseTools: CloseTools, //* Type: Object
  Method: Method, //* Type: Class
  CommandTool: CommandTool, //* Type: Class
  FunctionTool: FunctionTool, //* Type: Class
  ClassTool: ClassTool, //* Type: Class
  ContainerManager: ContainerManager, //* Type: Class
  Container: Container, //* Type: Var
  ContainerTool: ContainerTool, //* Type: Class
  DialogTool: DialogTool, //* Type: Class
  ToolbarTool: ToolbarTool, //* Type: Class
  TooltipTool: TooltipTool, //* Type: Class
  FrameTool: FrameTool, //* Type: Class
  DropTool: DropTool, //* Type: Class
  DragDropTool: DragDropTool, //* Type: Class
  CssMenu: CssMenu, //* Type: Enum
  SpaceMenu: SpaceMenu, //* Type: Class
  ItemMenu: ItemMenu, //* Type: Class
  SubMenu: SubMenu, //* Type: Class
  PopupTool: PopupTool, //* Type: Class
  MenuTool: MenuTool, //* Type: Class
  CellSequenceType: CellSequenceType, //* Type: Enum
  Matrix: Matrix, //* Type: Class
  Paths: Paths, //* Type: Class
  Generator: Generator, //* Type: Component
  ToolsPsi: ToolsPsi, //* Type: Class
  //Properties 
  //Methods 
  toString: function() { return "TPsi"; },
  run: _run,
  language: _language
};
})(); 

