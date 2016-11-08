/* Generated power ModelPsi (@VERSION 2.1) 
* Model Name: Graficador  Psi
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
if (PsiOut && PsiOut.console) PsiOut.console.debug = false;
/* ----------------------------- */


/*-----------------------------------------------------
*=Var[table_def]: tableDef
* Description: Definición de tabla de datos
*-----------------------------------------------------*/
var tableDef = {
  "bLengthChange": false,
  "bPaginate": false,
  "bInfo": false,
  "bFilter": false
};

/*-----------------------------------------------------
*=Enum[graph_type]: GraphType
* Description: Tipo de elemento gráfico Psi
*-----------------------------------------------------*/
var GraphType = {   
  Path: 'path',  
  Shape: 'shape'
};   

/*-----------------------------------------------------
*=Object[user_interface]: UserInterface
* Description: Interfaz de usuario para el graficador Psi
*-----------------------------------------------------*/
var UserInterface = {
  //Properties   
  //Property: template. Description: null  
  template: null,  
  //Property: fragments. Description: null  
  fragments: null,
  //Methods   
  //Method: init. Description: Inicializar interfaz de usuario obteniendo la plantilla  
  init: function(urlTemplate){ 
  try { 
    PsiData.document.register("template", urlTemplate);
    this.template = PsiData.document.get("template");
    //Agregar Scripts
    var self = this;
    this.fragments = {};
    $("Fragment", this.template).each(function(){
      self.fragments[$(this).attr("id")] = { 
        interface: $(this).find("Interface").text(),
        script: new Function("interface", "psi", $(this).find("Script").text())
      };
    });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: process. Description: Procesar fragmento de interfaz de usuario  
  process: function(id, parent, type, element){ 
  try { 
    var fragment = this.fragments[id],
        interface = $( fragment.interface );
    if (type && parent)
      interface[type](parent);
    fragment.script(interface, element);
    return interface;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"process", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  }
};   

/*-----------------------------------------------------
*=Class[debugging]: Debugging
* Description: Caja de diálogo de debugging
*-----------------------------------------------------*/
function Debugging (params) {
  //Properties   
  //Property: form. Description: Caja de diálogo  
  this.form = this._createDialog(params); 
}; 
//* Definitions Events and Methods
Debugging.methods({
  //Methods   
  //Method: _createDialog. Description: Crear caja de diálogo  
  _createDialog: function(params){ 
  try { 
    var form = $("<div class='send-file'></div>").appendTo("body"),
        options = $.extend(true, {
          debbuging: this, height: 250, width: 450, modal: true, title: "Debugging ...", autoOpen: true,
          buttons: { 
            "Cerrar": function() { $(this).dialog("close"); } 
          },
          close: function() { $(this).dialog("option", "debbuging").destroy(); }
        }, params);
    form.dialog(options);
    return form;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_createDialog", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: message. Description: Adicionar mensaje  
  message: function(label, text){ 
    this.form.append("<b>"+label+"</b>: "+text+"<br/>");
   },  
  //Method: destroy. Description: Destruir caja de diálogo  
  destroy: function(){ 
    this.form.empty().dialog("destroy").remove();
   },
  //Events 
  toString: function() { return "Debugging"; }
});

/*-----------------------------------------------------
*=Component[grapher_app]: GrapherApp
* Description: Aplicación GrapherPsi
*-----------------------------------------------------*/
var GrapherApp = (function () {  

  //Component Properties   
  //Property: manager. Description: Administrador del diagrama Psi  
  var manager = null;  
  //Property: current. Description: proyecto activo  
  var current = null;


/*-----------------------------------------------------
*=Object[utils]: Utils
* Description: Utilitarios de la aplicación GrapherPsi
*-----------------------------------------------------*/
var Utils = {
  //Properties   
  //Property: saveUrl. Description: Url de guardar información  
  saveUrl: '/grapherSaveFile',  
  //Property: deleteUrl. Description: Url para eliminar ficheros  
  deleteUrl: '/grapherDeleteFile',
  //Methods   
  //Method: send. Description: Enviar petición al servidor  
  send: function(url, data){ 
    var message = "...", error = true;
    $.ajax({ url: url, async: false, data: data, type: "POST", dataType: "xml" })
      .done(function(data, textStatus, jqXHR) { 
        if (textStatus != "success")
          message = "Status="+textStatus;
        else if ($("Error", data).length==1)
          message = $("Error", data).text();
        else {
          error = false;
          message = $("Success", data).text();
        }
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        message = errorThrown; 
      });
    if (error) throw new Error(message);
    return message;
   },  
  //Method: save. Description: Salver fichero  
  save: function(data){ 
    return this.send(this.saveUrl, data);
   },  
  //Method: delete. Description: Borrar fichero  
  delete: function(data){ 
    return this.send(this.deleteUrl, data);
   },  
  //Method: getLanguage. Description: Obtener lenguaje segun tipo  
  getLanguage: function(ftype){ 
  try { 
    switch(ftype){
      case "graphs" : return { psi: Graphs, tags: Graphs.language().tagsToCodeMirror() };
      case "paints" : return { psi: Paint, tags: Paint.language().tagsToCodeMirror() };
    };
    return { psi: null, tags: [] };
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getLanguage", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  }
};   

/*-----------------------------------------------------
*=Object[project]: Project
* Description: Proyecto en GrapherPsi
*-----------------------------------------------------*/
var Project = {
  //Properties   
  //Property: url. Description: Url para administrar proyectos  
  url: '/grapherProjects',
  //Methods   
  //Method: new. Description: Crear nuevo proyecto  
  new: function(alias){ 
    return Utils.send(this.url, {option: "new", alias: alias});    
   },  
  //Method: delete. Description: Eliminar proyecto con alias  
  delete: function(alias){ 
    return Utils.send(this.url, {option: "delete", alias: alias});    
   },  
  //Method: open. Description: Abrir proyecto  
  open: function(alias){ 
  try { 
    var project = PsiXML.loadXMLSync(this.url, {option: "open", alias: alias}, {type: "POST"});
    current = alias;
    $("#project-alias").text(alias);
    openFiles("graphs", $("Graphs>File",project), true);
    openFiles("paints", $("Paints>File",project), true);  
    openFiles("data", $("Data>File",project));  
    $("#projects-btn, #new-project-btn").addClass("ui-state-disabled");
    return "Successfully loaded '"+alias+"' project";
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"open", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: close. Description: Cerrar proyecto  
  close: function(){ 
  try { 
    if (!confirm("Want to close the project: "+current)) return;
      location.reload();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"close", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  }
};   

/*-----------------------------------------------------
*=Object[file]: File
* Description: Fichero de GrapherPsi
*-----------------------------------------------------*/
var File = {
  //Properties 
  //Methods   
  //Method: row. Description: Nuevo registro para un tipo de archivo  
  row: function(name, withRun){ 
  try { 
    var editBtn = "<span class='ui-icon ui-icon-tag edit-file' file='"+name+"'></span>",
        deleteBtn = "<span class='ui-icon ui-icon-trash delete-file' file='"+name+"'></span>",
        runBtn = "<span class='ui-icon ui-icon-circle-triangle-e run-file' file='"+name+"'></span>"; 
    return withRun===true ? [name, "0", editBtn+deleteBtn+runBtn] : [name, editBtn+deleteBtn];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"row", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: bindEvents. Description: Enlazar eventos de edición eliminación  
  bindEvents: function(table){ 
  try { 
    table
      .find("span.edit-file")
      .click(function(){
        var type = $(this).parents("table:first").attr("file-type");
        GrapherApp.File.edit(type, $(this).attr("file"));
      });
    table
      .find("span.delete-file")
      .click(function(){
        var type = $(this).parents("table:first").attr("file-type"),
            message = $(this).parents("div.openFiles").find("#message");
        try {
          if (!confirm("Want to delete file: "+$(this).attr("file"))) return;
          GrapherApp.File.delete(type, $(this).attr("file"));
          var tr = $(this).parents("tr:first").get(0); 
          this.table.fnDeleteRow( tr._DT_RowIndex );
          message.hide();
        }
        catch(e) { 
          message.addClass("ui-state-error").show();
          message.find("#text").text(e.toString()); 
        }
      })
      .each(function(){ this.table = table; });
    table
      .find("span.run-file")
      .click(function(){
        var type = $(this).parents("table:first").attr("file-type"),
            run = $(this).parents("tr:first").find(".run");
        run.text(parseInt(run.text())+1);
        $(this).parents("tr:first").css("background-color","#DBFFCA");
        try {
          GrapherApp.File.run(type, $(this).attr("file"));
        }
        catch(e) { alert(e.toString()); }
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"bindEvents", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: run. Description: Evaluar fichero con lenguaje GraphsPsi o PaintPsi  
  run: function(ftype, fileName){ 
    switch(ftype){
      case "graphs": return Graphs.run(fileName, {url: "files/"+current+"/"+ftype+"/"+fileName}, GrapherApp.manager); 
      case "paints": return Paint.run(fileName, {url: "files/"+current+"/"+ftype+"/"+fileName}, GrapherApp.manager);
    }
   },  
  //Method: edit. Description: Editor de XML para los lenguajes GraphsPsi y PaintPsi y datos  
  edit: function(ftype, fileName){ 
  try { 
    var id = (ftype+"-"+fileName).replace(".",""), edit = $("#"+id),
        type = fileName.substr(fileName.lastIndexOf(".")+1).toLowerCase();
    if (edit.length==0){
      var url = current+"/"+ftype+"/"+fileName;
      if (type=="xml")
        edit = $("<div id='"+id+"'></div>")
          .appendTo("body")
          .editPsi({title: "File: "+url, url: "files/"+url, urlServer: url, language: Utils.getLanguage(ftype), name: fileName});
      else if (type=="json")
        edit = $("<div id='"+id+"'></div>")
          .appendTo("body")
          .editJSON({title: "File: "+url, url: "files/"+url, urlServer: url, name: fileName});
    }
    if (type=="xml")
      edit.editPsi("open");
    else if (type=="json")
      edit.editJSON("open");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"edit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: save. Description: Guardar XML en servidor de GraphsPsi y PaintPsi y datos  
  save: function(url, content, type, fileName){ 
    if (type=="xml") {
      var xml = $.parseXML(content), alias = $(xml).children().attr("alias");
      if (alias)
        PsiData.document[alias] = $.parseXML(content);
      return Utils.save({file: url, content: content});
    }
    else if (type=="json") {
      var alias = fileName.substr(0, fileName.lastIndexOf(".")); 
      manager[alias] = $.parseJSON(content);
      return Utils.save({file: url, content: content}, type);
    }
   },  
  //Method: delete. Description: Eliminar fichero   
  delete: function(ftype, fileName){ 
    var url = current+"/"+ftype+"/"+fileName;
    return Utils.delete({file: url});
   },  
  //Method: new. Description: Nuevo XML fichero para GraphsPsi y PaintPsi y datos  
  new: function(ftype, fileName){ 
    var url = current+"/"+ftype+"/"+fileName,
        content = "", type = fileName.substr(fileName.lastIndexOf(".")+1).toLowerCase(); 
    switch(ftype){
      case "graphs" : content = '<?xml version="1.0" encoding="utf-8"?>\n<GraphsPsi name="My Name">\n</GraphsPsi>'; break;
      case "paints" : content = '<?xml version="1.0" encoding="utf-8"?>\n<PaintPsi xmlns:xlink="http://www.w3.org/1999/xlink" width="800" height="600">\n</PaintPsi>'; break;
      case "data": 
        content = type=="xml" 
                ? '<?xml version="1.0" encoding="utf-8"?>\n<Data>\n</Data>' 
                : type=="json" ? '{\n}' : ''; 
        break;
      default: throw Error("El tipo '"+ftype+"' de fichero no es soportado.");
    };
    return Utils.save({file: url, content: content});
   }
};   


  //Component Methods   
  //Method: init. Description: Inicializa la aplicación GrapherPsi  
  function init(section, urlTemplate){ 
  try { 
    //Inicializar plantila de aplicación
    UserInterface.init(urlTemplate);
    
    //Crear interface de aplicación
    UserInterface.process("app", section, "appendTo", this);
    UserInterface.process("menu", section.find(".grapher-menu"), "appendTo", this);
    UserInterface.process("main", section.find(".grapher-main"), "appendTo", this);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: openFiles. Description: Abrir lista de ficheros por tipo  
  function openFiles(ftype, files, withRun){ 
  try { 
    var table = $("table[file-type="+ftype+"]").dataTable();
    table.fnClearTable();
    files.each(function(){
      table.fnAddData( File.row($(this).attr("name"), withRun) ); 
    });
    File.bindEvents(table);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"openFiles", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: getProjects. Description: Obtener lista proyectos  
  function getProjects(table){ 
  try { 
    var projects = PsiXML.loadXMLSync(Project.url, {option: "list"}, {type: "POST"});
    table.fnClearTable();
    $("Project", projects).each(function(){
      var row = $(this);
      table.fnAddData([row.attr("alias"), "<button class='edit'>Open project</button><button class='delete'/>Delete project</button>"]); 
    });   
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getProjects", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };  
  //Method: currentPaint. Description: Obtener editor de lista de elementos gráficos  
  function currentPaint(){ 
  try { 
    var editXML = $("<div id=xml-'"+Math.random()+"'></div>").appendTo("body");
    editXML.editPsi({title: "Paint XML", xml: GrapherApp.manager.toXML()});
    editXML.editPsi("open");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"currentPaint", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  };


/*-----------------------------------------------------
* Component Definition: GrapherApp  
*-----------------------------------------------------*/
return {
  //Content 
  Project: Project, //* Type: Object
  File: File, //* Type: Object
  //Properties 
  manager: manager,
  current: current,
  //Methods 
  init: init,
  openFiles: openFiles,
  getProjects: getProjects,
  currentPaint: currentPaint,
  toString: function() { return "GrapherApp"; }
};
})(); 

/*-----------------------------------------------------
*=Class[grapher_manager]: GrapherManager
* Description: Administrador de elementos gráficos Psi
*-----------------------------------------------------*/
function GrapherManager (container, settings) {
  //Properties   
  //Property: svggen. Description: Generador de elementos SVG  
  this.svggen = container.svg().svg('get');  
  //Property: svgroot. Description: Elemento raiz del diagrama SVG  
  this.svgroot = this.svggen.root();  
  //Property: map. Description: Mapa de los elementos gráficos en el diagrama Psi  
  this.map = {};  
  //Property: paints. Description: Lista de programas de 'PaintPsi' ejecutados  
  this.paints = {}; 
  //Initialize class
  this._init(settings);
}; 
//* Definitions Events and Methods
GrapherManager.methods({
  //Methods   
  //Method: _init. Description: Inicialización del administrador de programas  
  _init: function(_settings){ 
  try { 
    var settings = $.extend({width: 1000, height: 800}, _settings);
    this.svggen.change(this.svgroot, settings);
    this.svggen.defs("manager-defs");
    //Actualizar SVG root
    $(this.svgroot).attr({"xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink"});
    this.svgroot.setAttribute("viewBox", "0 0 "+settings.width+" "+settings.height);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: addElement. Description: Adicionar elemento gráfico al mapa  
  addElement: function(element){ 
  try { 
    this.map[element.id()] = element;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"addElement", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: getElement. Description: Devuelve el elemento gráfico por su id. En caso de que no exista devuelve nulo  
  getElement: function(id){ 
  try { 
    return this.map[id];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getElement", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: removeElement. Description: Remueve elemento gráfico del mapa por su id  
  removeElement: function(id){ 
  try { 
    if (this.map[id])
      delete this.map[id];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"removeElement", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: removeAllElements. Description: Remueve todos los elementos gráficos  
  removeAllElements: function(id){ 
  try { 
    this.map = {};
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"removeAllElements", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: toXML. Description: Obtener xml de los elementos gráficos actuales  
  toXML: function(){ 
  try { 
    var xml = "";
    for (var i in this.map)
      xml += "  "+this.map[i].toXML()+"\n";
    return "<RootPaint>\n"+xml+"</RootPaint>";
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"toXML", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "GrapherManager"; }
});

/*-----------------------------------------------------
*=Script[point]: Point
* Description: Creación de un punto SVG
*-----------------------------------------------------*/
function createPoint(svg, x, y) {  
  var point = svg.createSVGPoint();
  
  //Crar funciones adicionales
  point.set = function(_x, _y) {
    this.x = Math.round( typeof _x=="number" ? _x : _x.x );
    this.y = Math.round( typeof _x=="number" ? _y : _x.y );
    return this;
  };
  point.plus = function(_x, _y){
    this.x += Math.round( typeof _x=="number" ? _x : _x.x );
    this.y += Math.round( typeof _x=="number" ? _y : _x.y );
    return this;
  };
  point.minus = function(_x, _y){
    this.x -= Math.round( typeof _x=="number" ? _x : _x.x );
    this.y -= Math.round( typeof _x=="number" ? _y : _x.y );
    return this;
  };
  //Incluir punto
  point.set(x, y);
  return point;
}

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
    dialogClass: "psi-edit-xml",  
    //Option: resizable. Description: Es redimensionable?  
    resizable: false,  
    //Option: width. Description: Ancho de barra de herramientas  
    width: 200,  
    //Option: height. Description: Alto de barra de herramientas  
    height: 'auto' 
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
    this.element.css("padding","3px");
    var that = this;
    
    //Adicionar botton de minimizar
    this.uiDialogTitlebarMinimize = $("<a href='#'><span class='ui-icon ui-icon-minusthick'></span></a>")
     	.addClass( "minimize ui-corner-all" )
     	.attr( "role", "button" )
     	.click(function(event) {
     		event.preventDefault();	
     		$("span",this).toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");
        that.uiDialogButtonPane.toggle(); 
        that.element.toggle();							
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
    
    //Depuás de crear el toolbar
    if ($.isFunction(this.afterCreate))
      this.afterCreate();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=Widget[edit_mirror_widget]: psi.editMirror
* Description: Editor Mirror
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.editMirror",  $.ui.dialog, {
  options: {  
  },
  //Properties 
  //Methods   
  //Method: _createMirror. Description: Crear editor CodeMirris  
  _createMirror: function(textarea){   },  
  //Method: _createNav. Description: Crear barra de botones  
  _createNav: function(){ 
    if (this.options.url){
      //Crear botones
      var nav = $("<div class='editor-nav' style='font-size: .9em;margin-bottom: 4px;'></div>").appendTo(this.element),
          btnSave = $("<button>Save</button>").appendTo(nav);
      //Botón Salvar
      btnSave.get(0).editor = this;
      btnSave
        .button({ icons: { primary: "ui-icon-disk" } })
        .click(function (event) { this.editor.save(); });
    }
    //Botón Evaluar
   },  
  //Method: _createMessage. Description: Crear mensaje  
  _createMessage: function(){ 
    this.uiMessage = $("<div class='ui-corner-bottom'><p></p></div>")
      .hide();
    this.uiDialogTitlebar
      .removeClass("ui-widget-header")
      .addClass("ui-state-default")
      .after(this.uiMessage);
    $("<span class='ui-icon ui-icon-close' style='float: right;display: inline-block;'></span>")
      .prependTo(this.uiMessage)
      .click(function(){ $(this).parent().hide(); });
   },  
  //Method: showMessage. Description: Mostrar mensaje de error  
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
  //Method: save. Description: Guarda contenido del editor  
  save: function(){ 
    //Guardar fichero
    try {
      this.showMessage(GrapherApp.File.save(this.options.urlServer, this.editor.getValue(), this.options.type, this.options.name), "message", true);
    }
    catch(e) { this.showMessage(e.toString(), "error"); }
   },  
  //Method: destroy. Description: Destruir editor Psi  
  destroy: function(){ 
    this._super();
   },
  //Events   
  //Event: _create. Description: Crear editor  
  _create: function(){ 
  try { 
    this._super();
    this.element.css("padding","3px");
    var that = this;
    
    //Adicionar botton de minimizar
    this.uiDialogMinimize = $("<a href='#'><span class='ui-icon ui-icon-minusthick'></span></a>")
     	.addClass( "minimize ui-corner-all" )
     	.attr( "role", "button" )
     	.click(function(event) {
     		event.preventDefault();	
     		$("span",this).toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");
        that.uiDialogButtonPane.toggle(); 
        that.element.toggle();						
     		})
     	.appendTo(this.uiDialogTitlebar); 
    
    //Adicionar mensaje
    if (this.options.tools)
      this._createMessage();
    
    //Adicionar barra de botones
    this._createNav(); 
    
    //Crear CodeMirror Editor
    this.textarea = $("<textarea class='text-edit'></textarea>").appendTo(this.element); 
    this.editor = this._createMirror(this.textarea.get(0));
    this.isOpen = false;
    this.element.append(
      "<div class='editor-footer' style='font-size: 9px;'><b>Ctrl-F</b>: Start search. <b>Ctrl-G</b>:	Find next. "
     +"<b>Shift-Ctrl-G</b>: Find previous.<b>Shift-Ctrl-F</b>: Replace. <b>Shift-Ctrl-R</b>: All replace.</div>" 
    );
    
    //Redimensionar
    this.options.resize = function( event, ui ) {
      $("div.CodeMirror", this).height(Math.round(ui.size.height)-$("div.editor-nav").height()-$("div.editor-footer").height()-36);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=Widget[edit_xml_widget]: psi.editPsi
* Description: Editor de Lenguajes
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.editPsi",  $.psi.editMirror, {
  options: {   
    //Option: title. Description: Título del editor  
    title: "Title here!!",  
    //Option: dialogClass. Description: Definición de clases CSS  
    dialogClass: "psi-edit-xml",  
    //Option: tools. Description: Visualizar barra de botones  
    tools: true,  
    //Option: width. Description: Ancho de barra de herramientas  
    width: 600,  
    //Option: height. Description: Alto de barra de herramientas  
    height: 400,  
    //Option: type. Description: Tipo de documento  
    type: "xml" 
  },
  //Properties 
  //Methods   
  //Method: _createMirror. Description: Crear editor CodeMirris  
  _createMirror: function(textarea){ 
    var completeAfter = function (cm, pred) {
          var cur = cm.getCursor();
          if (!pred || pred()) setTimeout(function() {
            if (!cm.state.completionActive)
              cm.showHint({completeSingle: false});
          }, 100);
          return CodeMirror.Pass;
        },
        completeIfAfterLt = function (cm) {
          return completeAfter(cm, function() {
            var cur = cm.getCursor();
            return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
          });
        },
        completeIfInTag = function (cm) {
          return completeAfter(cm, function() {
            var tok = cm.getTokenAt(cm.getCursor());
            if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
            var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
            return inner.tagName;
          });
        };
    return CodeMirror.fromTextArea(textarea, {
      tabSize: 2,
      lineNumbers: true,
      mode: "xml",
      hintOptions: {schemaInfo: this.options.language ? this.options.language.tags : {}},
      autoCloseBrackets: true,
      styleActiveLine: true,
      styleSelectedText: true,
      //highlightSelectionMatches: {showToken: /\w/},
      matchTags: {bothTags: true},
      matchBrackets: true,
      extraKeys: {
        "'<'": completeAfter,
        "'/'": completeIfAfterLt,
        "' '": completeIfInTag,
        "'='": completeIfInTag,
        "Ctrl-Space": "autocomplete",
      	"F11": function(cm) { cm.setOption("fullScreen", !cm.getOption("fullScreen")); },
        "Esc": function(cm) { if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false); },
        "Ctrl-J": "toMatchingTag"
      }
    });
   },  
  //Method: open. Description: Abre editor Psi  
  open: function(){ 
    this._super();
    $("div.CodeMirror", this.element).height(this.element.height()-$("div.editor-nav").height()-$("div.editor-footer").height()-10);
    if (!this.isOpen) {
      //Abrir fichero
      try {
        if (this.options.url){
          this.source = PsiXML.loadXMLSync(this.options.url);
          this.editor.setValue( (new XMLSerializer()).serializeToString(this.source) );
        }
        else if(this.options.xml)
          this.editor.setValue(this.options.xml);
        this.isOpen = true;
      }
      catch(e) { this.showMessage(e.toString(), "error"); }
    }
   },
  //Events 
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=Widget[edit_json_widget]: psi.editJSON
* Description: Editor de Lenguajes
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.editJSON",  $.psi.editMirror, {
  options: {   
    //Option: title. Description: Título del editor  
    title: "Title here!!",  
    //Option: dialogClass. Description: Definición de clases CSS  
    dialogClass: "psi-edit-xml",  
    //Option: tools. Description: Visualizar barra de botones  
    tools: true,  
    //Option: width. Description: Ancho de barra de herramientas  
    width: 600,  
    //Option: height. Description: Alto de barra de herramientas  
    height: 400,  
    //Option: type. Description: Tipo de documento  
    type: "json" 
  },
  //Properties 
  //Methods   
  //Method: _createMirror. Description: Crear editor CodeMirror  
  _createMirror: function(textarea){ 
    return CodeMirror.fromTextArea(textarea, {
      tabSize: 2,
      //lineNumbers: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      mode: "application/ld+json",
      lineWrapping: true
    });
   },  
  //Method: open. Description: Abre editor JSON  
  open: function(){ 
    this._super();
    $("div.CodeMirror", this.element).height(this.element.height()-$("div.editor-nav").height()-$("div.editor-footer").height()-10);
    if (!this.isOpen) {
      //Abrir fichero
      try {
        if (this.options.url){
          var options = {url: this.options.url, async: false, data: {}, dataType: "json", contentType: "application/x-www-form-urlencoded; charset=utf-8"},
              self = this;
          $.ajax(options)
            .done(function(data, textStatus, jqXHR) { 
              if (textStatus != "success")
                throw new Error("Error loading JSON file");
              self.source = jqXHR.responseText;
            })
            .fail(function(jqXHR, textStatus, errorThrown) { 
              throw new Error("Error loading JSON file. Error: "+errorThrown);
            });
          this.editor.setValue( this.source );
        }
        this.isOpen = true;
      }
      catch(e) { this.showMessage(e.toString(), "error"); }
    }
   },
  //Events 
  version: "1.0"
});

}(jQuery));

/*-----------------------------------------------------
*=ComponentPsi[graphs_component]: Graphs
* Description: Definición de minilenguaje gráfico Psi.
*-----------------------------------------------------*/
var Graphs = (function () {  


/*-----------------------------------------------------
* Constants Identifiers Grammar: Graphs 
*-----------------------------------------------------*/
var ID_TAG_GRAPHSPSI = "graphspsi";
var ID_TAG_DEFS = "defs";
var ID_TAG_SHAPE = "shape";
var ID_TAG_PATH = "path";
ID_TAGS = {};

/*-----------------------------------------------------
* Structure to GrammarPsi: Graphs
*-----------------------------------------------------*/
ID_TAGS[ID_TAG_GRAPHSPSI] = {
  CLASS: "Graphs.GraphsPsi",
  TAG: "GraphsPsi",
  MULTIPLICITY: { "Defs": "0..1","Shape": "0..n","Path": "0..n" },
  CHILDREN: { "Defs": ID_TAG_DEFS,"Shape": ID_TAG_SHAPE,"Path": ID_TAG_PATH },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*alias:text"
};
ID_TAGS[ID_TAG_DEFS] = {
  CLASS: "Graphs.Defs",
  TAG: "Defs",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: false,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier"
};
ID_TAGS[ID_TAG_SHAPE] = {
  CLASS: "Graphs.Shape",
  TAG: "Shape",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: false,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|*drag-selector:text"
};
ID_TAGS[ID_TAG_PATH] = {
  CLASS: "Graphs.Path",
  TAG: "Path",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: false,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|*key-line:identifier|drag-selector:text"
};

var GRAMMAR = {
      NAME: "Graphs",
      TAGS: ID_TAGS,
      ROOT: ID_TAG_GRAPHSPSI
    };
var ALIAS = "Graphs";


/*-----------------------------------------------------
* Component:  Properties
*-----------------------------------------------------*/


/*-----------------------------------------------------
*=Texts[graphspsi_messages]: GRAPHSPSI
* Description: Manejo de mensajes de GraphsPsi
*-----------------------------------------------------*/
var GRAPHSPSI_SHORT_MAP = { 
  ES: { 
    SVG_DEFS_ERROR: "Error cargando definiciones de SVG. Identificador '$1'",
    SVG_DEFS_NOT_DEFINE: "No hay definición '$1' SVG"
  }
}; 
var GRAPHSPSI_MAP = { 
  ES: { 
    SVG_DEFS_ERROR: "Error cargando definiciones de SVG. Identificador '$1'",
    SVG_DEFS_NOT_DEFINE: "No hay definición '$1' SVG"
  }
};//* Register texts PsiXML
if (PsiOut.console.debug) GRAPHSPSI_SHORT_MAP = GRAPHSPSI_MAP;
PsiText.registerSet("GRAPHSPSI", PsiOut.console.debug ? GRAPHSPSI_MAP : GRAPHSPSI_SHORT_MAP);
PsiText.registerSet("GRAPHSPSI_MAP", GRAPHSPSI_MAP);
//Send type
var GRAPHSPSI_SEND = [];

/*-----------------------------------------------------
*=Class[defs]: Defs
* Description: Define un SVG para un elemento Psi
*-----------------------------------------------------*/
function Defs () {
  //Properties  
};
//Inheritance
Defs.inherits(PsiXML.PsiElement);  
//Static: map. Description: Lista de definiciones de SVG  
Defs.map = {}; 
//* Definitions Events and Methods
Defs.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Obtiene el documento SGV de la fuente  
  onInit: function(){ 
  try { 
    // Obtener SVG de la definición 
    var svg = $(this._ref).children("svg").get(0);
    //Validar que la fuente no sea nula
    if (svg==null) 
      throw new PsiError("GRAPHSPSI.SVG_DEFS_ERROR", [this.id()], [this]);
    //Registrar definiciones SVG
    Defs.map[this.id()] = svg;
    $("defs", svg).children().each(function() {
      PsiData.defs[$(this).attr("id")] = $(this);
    });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Defs"; }
});

/*-----------------------------------------------------
*=Class[drag_point]: DragPoint
* Description: Definición de un punto de arrastre.
*-----------------------------------------------------*/
function DragPoint (parent, x, y, svggen, params, r) {
  //Properties   
  //Property: parent. Description: Referencia al elemento gráfico  
  this.parent = parent;  
  //Property: circle. Description: Definición SVG de círculo  
  this.circle = null; 
  //Initialize class
  this._init(x, y, svggen, params, r);
}; 
//* Definitions Events and Methods
DragPoint.methods({
  //Methods   
  //Method: _init. Description: Iniciar el punto de movimiento  
  _init: function(x, y, svggen, params, r){ 
  try { 
    // Obtener SVG del punto de movimiento 
    var data = $.extend({fill: '#DBFFCA', stroke: 'gray', strokeWidth: 1}, params);
    this.circle = svggen.circle(this.parent, x, y, r?r:4, data);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_init", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: bind. Description: Enlazar drag-drop a elemento gráfico  
  bind: function(ref, method){ 
  try { 
    $(this.circle)
      .drag("start", function(event, dd) {
        //Establecer inicio de movimiento
        this._start = createPoint(this.ownerSVGElement, this.cx.baseVal.value, this.cy.baseVal.value);
        this._current = createPoint(this.ownerSVGElement, dd.deltaX, dd.deltaY);
      })
      .drag(function(event, dd) {
        this.move(event, dd);
      })
      .drag("end", function(event, dd) {
        this.move(event, dd);
      })
      .each(function(){
        this._ref = ref;
        this._method = method; 
        //Función para mover elemento gráfico Psi
        this.move = function(event, dd){
          this._current.set(dd.deltaX, dd.deltaY).plus(this._start);
          this.cx.baseVal.value = this._current.x;
          this.cy.baseVal.value = this._current.y;
          if (this._ref && this._method)
            this._ref[this._method](this._current.x, this._current.y);
        };
      });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"bind", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: destroy. Description: Remover el punto de arrastre  
  destroy: function(){ 
  try { 
    $(this.circle).remove();
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"destroy", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "DragPoint"; }
});

/*-----------------------------------------------------
*=Class[base]: Base
* Description: Clase base para figuras y líneas
*-----------------------------------------------------*/
function Base () {
  //Properties  
};
//Inheritance
Base.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Base.methods({
  //Methods   
  //Method: _initCreate. Description: Crear referencias, adiciona definiciones, crea elementos de transformación  
  _initCreate: function(svgroot, graph, parent, ref){ 
    //Crear referencias
    graph._lib = this;
    $(graph).attr({"type": this.type});
    if(this.hasAttr("class"))
    	graph.setAttribute("class", this.attr("class"));
    
    //Adicionar definiciones  
    var sdefs = this.attr("defs");
    if (sdefs) {
      var defs = sdefs.split(",");
      for (var id in defs) {
        var def = PsiData.defs.get( defs[id] );
        if (def && $("defs", svgroot).find("#"+defs[id]).length==0) 
          $("defs", svgroot).append( def.clone(true) );
      }
    }  
    
    //Definir traslación del elemento gráfico Psi
    graph._translate = graph.ownerSVGElement.createSVGTransform();
    graph.transform.baseVal.appendItem(graph._translate);
    graph._translate.setTranslate(0, 0);
    
    //Definir escala del elemento gráfico Psi
    graph._scale = graph.ownerSVGElement.createSVGTransform();
    graph.transform.baseVal.appendItem(graph._scale);
    graph._scale.setScale(1, 1);
    
    //Definir escala del elemento gráfico Psi
    graph._rotate = graph.ownerSVGElement.createSVGTransform();
    graph.transform.baseVal.appendItem(graph._rotate);
    graph._rotate.setRotate(0,0,0); 
   },  
  //Method: _bindDrag. Description: Enlazar evento para mover elemento gráfico Psi  
  _bindDrag: function(refsvg, ref){ 
  try { 
    var selector = this.attr("drag-selector");
    if (selector) {
      $(selector, refsvg)
        .drag("start", function(event, dd) {
          //Establecer inicio de movimiento
          this._start = createPoint(this.ownerSVGElement, this._ref._translate.matrix.e, this._ref._translate.matrix.f);
          this._current = createPoint(this.ownerSVGElement, dd.deltaX, dd.deltaY);
        })
        .drag(function(event, dd) {
          this.move(event, dd);
        })
        .drag("end", function(event, dd) {
          this.move(event, dd);
        })
        .each(function(){
          this._ref = refsvg; 
          //Función para mover elemento gráfico Psi
          this.move = function(event, dd){
            this._current.set(dd.deltaX, dd.deltaY).plus(this._start);
            this._ref._translate.setTranslate(this._current.x, this._current.y);
          };
        });
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_bindDrag", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },  
  //Method: cloneSVG. Description: Hace una copia del elemento SVG definido  
  cloneSVG: function(){ 
    return $(this.svg).children().clone(true);
   },
  //Events   
  //Event: onInit. Description: Registrar elemento gráfico Psi  
  onInit: function(){ 
  try { 
    //Registrar elemento gráfico Psi
    PsiData[this.type][this.id()] = this;
    // Obtener SVG de la definición 
    this.svg = $(this._ref).children("svg").get(0);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Base"; }
});

/*-----------------------------------------------------
*=Class[shape]: Shape
* Description: Definición de figura gráfica Psi.
*-----------------------------------------------------*/
function Shape () {
  //Properties   
  //Property: type. Description: Tipo de elemento gráfico Psi  
  this.type = GraphType.Shape; 
};
//Inheritance
Shape.inherits(Base); 
//* Definitions Events and Methods
Shape.methods({
  //Methods   
  //Method: create. Description: Crea una figura Psi  
  create: function(svggen, id, parent, ref){ 
  try { 
    var shape = svggen.group(parent, id);
    
    //Iniciar elemento gráfico
    this._initCreate(svggen.root(), shape, parent, ref);
    svggen.add(shape, this.cloneSVG());
    
    //Enlazar eventos a la figura
    this._bindDrag(shape, ref);
    return shape;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Shape"; }
});

/*-----------------------------------------------------
*=Class[label_point]: LabelPoint
* Description: Creación de un rótulo en un punto referenciado
*-----------------------------------------------------*/
function LabelPoint (svggen, parent, point, ref) {
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
  this._init();
}; 
//* Definitions Events and Methods
LabelPoint.methods({
  //Methods   
  //Method: _init. Description: Inicializar rótulo de punto Psi  
  _init: function(){ 
    this.refresh();
    $(this.text).attr("key", "label");
   },  
  //Method: refresh. Description: Refrescar posición y texto del rótulo Psi  
  refresh: function(){ 
  try { 
    this.source = {
          value: this._ref.attr("label"), 
          valuePos: this._ref.attr("label-pos"), 
          name: "label",
          namePos: "label-pos" 
        };
    //Procesar posición
    if (this.source.valuePos) {
      var ps = this.source.valuePos.split(" ");
      this.x = parseFloat(ps[0]);
      this.y = parseFloat(ps[1]);
      this.refreshPosition();
    }
    
    //Procesar contenido
    if (this.source.value) {
      var label = this.source.value;
      label = this._ref && this._ref.processValue ? this._ref.processValue(label) : label;
      $(this.text).text(label);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"refresh", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
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
*=Class[path]: Path
* Description: Definición de un punto de movimiento.
*-----------------------------------------------------*/
function Path () {
  //Properties   
  //Property: type. Description: Tipo de elemento gráfico Psi  
  this.type = GraphType.Path; 
};
//Inheritance
Path.inherits(Base); 
//* Definitions Events and Methods
Path.methods({
  //Methods   
  //Method: create. Description: Crea una línea Psi usando el elemento path de SVG  
  create: function(svggen, id, parent, ref){ 
  try { 
    var svgroot = svggen.root(),
        gpath = svggen.group(parent, id);
    
    //Establecer translación, rotación y escala
    this._initCreate(svgroot, gpath, parent, ref);
    svggen.add(gpath, this.cloneSVG());
    gpath._line = $("[key="+this.attr("key-line")+"]", gpath).get(0);
    
    //Enlazar eventos a la figura
    this._bindDrag(gpath, ref);
    gpath._line.svggen = svggen;
    gpath._line._element = ref;
    
    //Crear rótulo 
    if (ref.hasAttr("label")){
      gpath._line.getMiddle = function(){
        var mx = Math.min(this.x1.baseVal.value, this.x2.baseVal.value)+Math.abs(this.x1.baseVal.value-this.x2.baseVal.value)/2,
            my = Math.min(this.y1.baseVal.value, this.y2.baseVal.value)+Math.abs(this.y1.baseVal.value-this.y2.baseVal.value)/2;
        return createPoint(this.svggen.root(), mx, my);
      };
      gpath._label = new LabelPoint(svggen, gpath, gpath._line.getMiddle(), ref);
    }
    
    //Crea un punto de movimiento para los extremos
    gpath._line.createPointDrag = function(p, x, y, method){
      if (this[p]!=null){
        this[p].destroy();
        this[p] = null;
      }
      else{
        this[p] = new Graphs.DragPoint(this._ref, this[x].baseVal.value, this[y].baseVal.value, this.svggen);
        this[p].bind(this._element, method);
      }
    }
    gpath._line.destroyPointDrag = function(p){
      if (this[p]!=null){
        this[p].destroy();
        this[p] = null;
      }
    }
    
    //Habilitar puntos drag-drop
    $(gpath._line).dblclick(function(){
      //Punto inicial y final
      this.createPointDrag("_pstart", "x1", "y1", "moveStart");
      this.createPointDrag("_pend", "x2", "y2", "moveEnd");
    });
    return gpath;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events 
  toString: function() { return "Path"; }
});

/*-----------------------------------------------------
*=Class[graphspsi]: GraphsPsi
* Description: Manejo de definición de 
*-----------------------------------------------------*/
function GraphsPsi () {
  //Properties   
  //Property: defs. Description: Definiciones  
  this.defs = null;  
  //Property: shapes. Description: Mapa de figuras  
  this.shapes = {};  
  //Property: paths. Description: Mapa de caminos  
  this.paths = {}; 
};
//Inheritance
GraphsPsi.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
GraphsPsi.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Inicializa alias  
  onInit: function(){ 
  try { 
    this.alias = this.attr("alias");
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "GraphsPsi"; }
});

/*-----------------------------------------------------
*=Parser[graphspsi_parser]: GraphsPsiParser
* Description: Analizador del Lenguaje GraphsPsi
*-----------------------------------------------------*/
function GraphsPsiParser () {
  //Properties  
};
GraphsPsiParser.inherits(PsiXML.Parser); 
//* Definitions Events and Methods
GraphsPsiParser.methods({
  
  //Define Properties
  defineProperties: function(newElement) {
    if (newElement.parent) {
      switch (newElement.parent._def.key) { 
        case ID_TAG_GRAPHSPSI:
          switch (newElement.tag) { 
            case "Defs": newElement.parent.defs = newElement; break;
            case "Shape": newElement.parent.shapes[newElement.id()] = newElement; break;
            case "Path": newElement.parent.paths[newElement.id()] = newElement; break;
          };
          break;
      }
    }
  }, 
  //Methods 
  //Events   
  //Event: onFinish. Description: Stop application to finish its evaluation  
  onFinish: function(){ 
    this.program.state = PsiXML.ProgramState.STOP;
   },
  toString: function() { return "GraphsPsiParser"; }
});


/*-----------------------------------------------------
* Component:  Methods
*-----------------------------------------------------*/



/*-----------------------------------------------------
* Register Component to PsiXML:  Graphs
*-----------------------------------------------------*/
PsiXML.registerLanguagePsi(ALIAS, GRAMMAR, GraphsPsiParser);

function _run(name, options, context){
  return PsiXML.traductor_PxmlToPobj(ALIAS, name, options, context);
}
function _language(){
  return PsiXML.LanguagePsi.get(ALIAS);
}


/*-----------------------------------------------------
* Module Initialize: InitGraphs  
*-----------------------------------------------------*/
function InitGraphs() { 
    //Registrar elementos Psi
    PsiData.register(GraphType.Shape);
    PsiData.register(GraphType.Path);
    PsiData.register("defs");
  
}
InitGraphs();

/*-----------------------------------------------------
* Component Definition: Graphs  
*-----------------------------------------------------*/
return {
  //Content 
  Defs: Defs, //* Type: Class
  DragPoint: DragPoint, //* Type: Class
  Base: Base, //* Type: Class
  Shape: Shape, //* Type: Class
  LabelPoint: LabelPoint, //* Type: Class
  Path: Path, //* Type: Class
  GraphsPsi: GraphsPsi, //* Type: Class
  GraphsPsiParser: GraphsPsiParser, //* Type: Parser
  //Properties 
  //Methods 
  toString: function() { return "Graphs"; },
  run: _run,
  language: _language
};
})(); 

/*-----------------------------------------------------
*=ComponentPsi[paint_component]: Paint
* Description: Pintar elemetos gráfico Psi (Objetos y líneas).
*-----------------------------------------------------*/
var Paint = (function () {  


/*-----------------------------------------------------
* Constants Identifiers Grammar: Paint 
*-----------------------------------------------------*/
var ID_TAG_PAINTPSI = "paintpsi";
var ID_TAG_INCLUDE = "include";
var ID_TAG_SCRIPT = "script";
var ID_TAG_LAYER = "layer";
var ID_TAG_FIGURE = "figure";
var ID_TAG_LINE = "line";
var ID_TAG_MODIFY = "modify";
var ID_TAG_SETTING = "setting";
ID_TAGS = {};

/*-----------------------------------------------------
* Structure to GrammarPsi: Paint
*-----------------------------------------------------*/
ID_TAGS[ID_TAG_PAINTPSI] = {
  CLASS: "Paint.PaintPsi",
  TAG: "PaintPsi",
  MULTIPLICITY: { "Include": "0..n","Layer": "0..n","Script": "0..n","Modify": "0..n" },
  CHILDREN: { "Include": ID_TAG_INCLUDE,"Layer": ID_TAG_LAYER,"Script": ID_TAG_SCRIPT,"Modify": ID_TAG_MODIFY },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "width:number|height:number"
};
ID_TAGS[ID_TAG_INCLUDE] = {
  CLASS: "Paint.Include",
  TAG: "Include",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*alias:text|*url:text"
};
ID_TAGS[ID_TAG_SCRIPT] = {
  CLASS: "Paint.Script",
  TAG: "Script",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|run=no:select(yes,no)"
};
ID_TAGS[ID_TAG_LAYER] = {
  CLASS: "Paint.Layer",
  TAG: "Layer",
  MULTIPLICITY: { "Figure": "0..n","Line": "0..n" },
  CHILDREN: { "Figure": ID_TAG_FIGURE,"Line": ID_TAG_LINE },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier"
};
ID_TAGS[ID_TAG_FIGURE] = {
  CLASS: "Paint.Figure",
  TAG: "Figure",
  MULTIPLICITY: { "Setting": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|*shape:identifier|*x:number|*y:number|scale=1,1:text|angle=0:number"
};
ID_TAGS[ID_TAG_LINE] = {
  CLASS: "Paint.Line",
  TAG: "Line",
  MULTIPLICITY: { "Setting": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*id:identifier|*path:identifier|*start:text|*end:text|scale=1,1:text|angle=0:number"
};
ID_TAGS[ID_TAG_MODIFY] = {
  CLASS: "Paint.Modify",
  TAG: "Modify",
  MULTIPLICITY: { "Setting": "0..n" },
  CHILDREN: { "Setting": ID_TAG_SETTING },
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: null
};
ID_TAGS[ID_TAG_SETTING] = {
  CLASS: "Paint.Setting",
  TAG: "Setting",
  MULTIPLICITY: null,
  CHILDREN: null,
  STRICT: true,
  SEND_CONTEXT: false,
  VALIDATOR: "*key:identifier"
};

var GRAMMAR = {
      NAME: "Paint",
      TAGS: ID_TAGS,
      ROOT: ID_TAG_PAINTPSI
    };
var ALIAS = "Paint";


/*-----------------------------------------------------
* Component:  Properties
*-----------------------------------------------------*/


/*-----------------------------------------------------
*=Texts[paintpsi_messages]: PAINTPSI
* Description: Manejo de mensajes de PaintPsi
*-----------------------------------------------------*/
var PAINTPSI_SHORT_MAP = { 
  ES: { 
    GRAPH_ERROR: "Error creando '$1' Psi. No existe Identificador='$2'",
    FIGURE_SETTING_ERROR: "Error figura Psi '$1' NO existe SettingKey='$2'",
    DEBUG_INCLUDE_EXIST: "Ya existe documento XML con alias '$1'. No se incluirá nuevamente",
    DEBUG_INCLUDE_REGISTER: "Cargando documento XML con alias '$1'",
    DEBUG_EXIST_ELEMENT: "Actualizando elemento gráfico '$1'.",
    DEBUG_REMOVE_ELEMENT: "Removiendo elemento gráfico '$1'.",
    MODIFY_ERROR: "No existe elemento gráfico con identificador='$1'"
  }
}; 
var PAINTPSI_MAP = { 
  ES: { 
    GRAPH_ERROR: "Error creando '$1' Psi. No existe Identificador='$2'",
    FIGURE_SETTING_ERROR: "Error figura Psi '$1' NO existe SettingKey='$2'",
    DEBUG_INCLUDE_EXIST: "Ya existe documento XML con alias '$1'. No se incluirá nuevamente",
    DEBUG_INCLUDE_REGISTER: "Cargando documento XML con alias '$1'",
    DEBUG_EXIST_ELEMENT: "Actualizando elemento gráfico '$1'.",
    DEBUG_REMOVE_ELEMENT: "Removiendo elemento gráfico '$1'.",
    MODIFY_ERROR: "No existe elemento gráfico con identificador='$1'"
  }
};//* Register texts PsiXML
if (PsiOut.console.debug) PAINTPSI_SHORT_MAP = PAINTPSI_MAP;
PsiText.registerSet("PAINTPSI", PsiOut.console.debug ? PAINTPSI_MAP : PAINTPSI_SHORT_MAP);
PsiText.registerSet("PAINTPSI_MAP", PAINTPSI_MAP);
//Send type
var PAINTPSI_SEND = [];

/*-----------------------------------------------------
*=Class[include]: Include
* Description: Cargar documento XML a PsiXML
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
  //Event: onInit. Description: Inicializar lectura de documento  
  onInit: function(){ 
  try { 
    var url = this.attr("url"),
        type = url.substr(url.lastIndexOf(".")+1).toLowerCase();
    this.alias = this.attr("alias");
    if (type=="xml"){
      if (PsiData.document.exist(this.alias)) {
        PSIDEBUG("PAINTPSI.DEBUG_INCLUDE_EXIST", [this.alias]);
        return;
      }
      PSIDEBUG("PAINTPSI.DEBUG_INCLUDE_REGISTER", [this.alias]);
      PsiData.document.register(this.alias, url, this.attr("data"), this.attr("action"));
      this.document = PsiData.document.get(this.alias);
    }
    else if (type=="json"){
      var options = {url: url, async: false, data: {}, dataType: "json", contentType: "application/x-www-form-urlencoded; charset=utf-8"},
          self = this;
      $.ajax(options)
        .done(function(data, textStatus, jqXHR) { 
          if (textStatus != "success")
            throw new Error("Error loading JSON file");
          GrapherApp.manager[self.alias] = data;
        })
        .fail(function(jqXHR, textStatus, errorThrown) { 
          throw new Error("Error loading JSON file. Error: "+errorThrown);
        });
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Include"; }
});

/*-----------------------------------------------------
*=Class[script]: Script
* Description: Ejecutar Script
*-----------------------------------------------------*/
function Script () {
  //Properties  
};
//Inheritance
Script.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Script.methods({
  //Methods   
  //Method: execute. Description: Ejecutar script con parámetros parent y context  
  execute: function(parent, context){ 
  try { 
    var fexec = new Function("parent", "context", this.body);
    fexec(parent, context);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"execute", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar lectura de documento  
  onInit: function(){ 
  try { 
    PsiData.script[this.id()] = this;
    this.body = this.text();
    if (this.attr("run")=="yes")
      this.execute(null, this.context);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Script"; }
});

/*-----------------------------------------------------
*=Class[layer]: Layer
* Description: Capa de un diagrama Psi
*-----------------------------------------------------*/
function Layer () {
  //Properties   
  //Property: figures. Description: Mapa de figuras  
  this.figures = {};  
  //Property: lines. Description: Mapa de líneas  
  this.lines = {};  
  //Property: scripts. Description: Lista de scripts  
  this.scripts = {}; 
};
//Inheritance
Layer.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
Layer.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Inicializar capa Psi  
  onInit: function(){ 
  try { 
    this._svg = this.context.svggen.group(this.context.svgroot, this.id());
    if(this.hasAttr("class"))
    	this._svg.setAttribute("class", this.attr("class"));
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Layer"; }
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
  //Method: apply. Description: Aplicar configuración a un elemento gráfico Psi  
  apply: function(){ 
  try { 
    for(var i=0; i<this._ref.attributes.length; i++){
      var attr = this._ref.attributes[i]; 
      switch(attr.name) {
        case "key": break;
        case "text": $(this._svg).text( this.parent.processValue(attr.value) ); break; 
        default: this._svg.setAttribute(attr.name,this.parent.processValue(attr.value)); break;  
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"apply", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: onInit. Description: Inicializar propiedad 'key'  
  onInit: function(){ 
  try { 
    this.key = this.attr("key");
    if ($(this.parent._svg).find("[key="+this.key+"]").length!=1)
      throw new PsiError("PAINTPSI.FIGURE_SETTING_ERROR", [this.parent.id(), this.key], [this]);
    this._svg = $(this.parent._svg).find("[key="+this.key+"]").get(0);
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Setting"; }
});

/*-----------------------------------------------------
*=Class[figure]: Figure
* Description: Clase base para Figura, Lista, Panel de un diagrama Psi
*-----------------------------------------------------*/
function Figure () {
  //Properties   
  //Property: _elementType. Description: ElementType.Graph  
  this._elementType = GraphType.Shape;  
  //Property: settings. Description: Lista de configuraciones de la figura Psi  
  this.settings = {}; 
};
//Inheritance
Figure.inherits(Base); 
//* Definitions Events and Methods
Figure.methods({
  //Methods   
  //Method: translate. Description: Trasladar elemento gráfico a una nueva posición (x,y)  
  translate: function(_x, _y){ 
    var x = Math.round(_x ? _x : this._svg._translate.matrix.e),
        y = Math.round(_y ? _y :this._svg._translate.matrix.f);
    this._svg._translate.setTranslate(x, y); 
   },  
  //Method: width. Description: Ancho de figura Psi  
  width: function(){ 
    return this._svg.getBBox().width;
   },  
  //Method: height. Description: Alto de figura Psi  
  height: function(){ 
    return this._svg.getBBox().height;
   },  
  //Method: toXML. Description: Retorna el string XML de la figura  
  toXML: function(){ 
    var data = this.attr("data-document") ? ' data-document="'+this.attr("data-document")+'"' : ""
    return '<Figure id="'+this.id()+'" shape="'+this.attr("shape")+'" x="'+this._svg._translate.matrix.e+'" y="'+this._svg._translate.matrix.f+'"'+data+'/>';
   },
  //Events   
  //Event: onRefresh. Description: Refrescar figura Psi  
  onRefresh: function(){ 
    this.translate(this.attr("x"), this.attr("y"));
   },
  toString: function() { return "Figure"; }
});

/*-----------------------------------------------------
*=Class[line]: Line
* Description: Clase línea en un diagrama Psi
*-----------------------------------------------------*/
function Line () {
  //Properties   
  //Property: _elementType. Description: ElementType.Path  
  this._elementType = GraphType.Path;  
  //Property: settings. Description: Lista de configuraciones de la línea Psi  
  this.settings = {}; 
};
//Inheritance
Line.inherits(Base); 
//* Definitions Events and Methods
Line.methods({
  //Methods   
  //Method: refreshLabel. Description: Refrescar posición de label  
  refreshLabel: function(){ 
    if (this._svg._label){
      this._svg._label.point = this._svg._line.getMiddle();
      this._svg._label.refresh();
    }
   },  
  //Method: start. Description: Punto inicial (x1,y1)  
  start: function(){ 
    var s = this.attr("start").split(",");
    $(this._svg._line).attr({x1: parseInt(s[0])-this._svg._translate.matrix.e, y1: parseInt(s[1])-this._svg._translate.matrix.f});
   },  
  //Method: end. Description: Punto final (x2,y2)  
  end: function(){ 
    var s = this.attr("end").split(",");
    $(this._svg._line).attr({x2: parseInt(s[0])-this._svg._translate.matrix.e, y2: parseInt(s[1])-this._svg._translate.matrix.f});
   },  
  //Method: moveStart. Description:  Mover punto inicial a (x,y)  
  moveStart: function(x, y){ 
    $(this._svg._line).attr({x1: x, y1: y});
    this.refreshLabel();
   },  
  //Method: moveEnd. Description:  Mover punto final a (x,y)  
  moveEnd: function(x, y){ 
    $(this._svg._line).attr({x2: x, y2: y});
    this.refreshLabel();
   },  
  //Method: toXML. Description: Retorna el string XML de la linea  
  toXML: function(){ 
    var sX = this._svg._translate.matrix.e+this._svg._line.x1.baseVal.value, sY = this._svg._translate.matrix.f+this._svg._line.y1.baseVal.value,
        eX = this._svg._translate.matrix.e+this._svg._line.x2.baseVal.value, eY = this._svg._translate.matrix.f+this._svg._line.y2.baseVal.value,
        data = this.attr("data-document") ? ' data-document="'+this.attr("data-document")+'"' : "";
    return '<Line id="'+this.id()+'" path="'+this.attr("path")+'" start="'+sX+","+sY+'" end="'+eX+","+eY+'"'+data+'/>';
   },
  //Events   
  //Event: onRefresh. Description: Refrescar linea Psi  
  onRefresh: function(){ 
    this.start();
    this.end();
    this.refreshLabel();
    this._svg._line.destroyPointDrag("_pstart");
    this._svg._line.destroyPointDrag("_pend");
   },
  toString: function() { return "Line"; }
});

/*-----------------------------------------------------
*=Class[modify]: Modify
* Description: Modifica un elemento del diagrama (figura, linea, etc.)
*-----------------------------------------------------*/
function Modify () {
  //Properties   
  //Property: _elementType. Description: ElementType.Graph  
  this._elementType = GraphType.Path;  
  //Property: settings. Description: Lista de configuraciones del elemento gráfico Psi  
  this.settings = {}; 
};
//Inheritance
Modify.inherits(Base); 
//* Definitions Events and Methods
Modify.methods({
  //Methods   
  //Method: _copy. Description: Copia los metodos del elemento gráfico original  
  _copy: function(element, array){ 
    for(var i=0; i<array.length; i++){
      var name = array[i];
      this[name] = element[name];
    }
   },
  //Events   
  //Event: onInit. Description: Crear figura Psi sobre el diagrama  
  onInit: function(){ 
  try { 
    var element = this.context.getElement(this.id()); 
    if (element==null)
      throw new PsiError("PAINTPSI.MODIFY_ERROR", [this.id()], [this]);
    else{
      //Remover elemento gráfico
      if (this.attr("remove")=="yes"){
        $(element._svg).remove();
        this.context.removeElement(element.id());
        PSIDEBUG("PAINTPSI.DEBUG_REMOVE_ELEMENT", [this.id()]);
        return;
      }
      //Modificar elemento gráfico
      PSIDEBUG("PAINTPSI.DEBUG_EXIST_ELEMENT", [this.id()]);
      
      this._svg = element._svg;
      this._elementType = element._elementType;
      switch(this._elementType){
        case "shape": this._copy(element, ["translate","width","height","onRefresh"]); break;
        case "path": this._copy(element, ["refreshLabel","start","end","onRefresh"]); break;
      }
      if(this.hasAttr("class"))
    	  this._svg.setAttribute("class", this.attr("class"));
      //Asociar datos de creación
      var TYPES = ["document", "context"];
      for (var i in TYPES){
        var data = "data-"+TYPES[i];
        if (element.hasAttr(data)){
          this.attr(data, element.attr(data));
          this.initData(data);
        }
      }
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "Modify"; }
});

/*-----------------------------------------------------
*=Class[paintpsi]: PaintPsi
* Description: Analizador del lenguaje PaintPsi
*-----------------------------------------------------*/
function PaintPsi () {
  //Properties   
  //Property: layers. Description: Lista de capas  
  this.layers = {};  
  //Property: includes. Description: Lista de inclusiones  
  this.includes = {};  
  //Property: scripts. Description: Lista de scripts  
  this.scripts = {};  
  //Property: modifies. Description: Lista de modificaciones de elementos gráficos  
  this.modifies = {}; 
};
//Inheritance
PaintPsi.inherits(PsiXML.PsiElement); 
//* Definitions Events and Methods
PaintPsi.methods({
  //Methods 
  //Events   
  //Event: onInit. Description: Inicializa alias  
  onInit: function(){ 
  try { 
    var w = this.attr("width"), h = this.attr("height"); 
    if (w && h) {
      $(this.context.svgroot).attr( {width: w, height: h} );
      this.context.svgroot.setAttribute("viewBox", "0 0 "+w+" "+h);
    }
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"onInit", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  toString: function() { return "PaintPsi"; }
});

/*-----------------------------------------------------
*=Parser[paintpsi_parser]: GraphsPsiParser
* Description: Analizador del Lenguaje GraphsPsi
*-----------------------------------------------------*/
function GraphsPsiParser () {
  //Properties  
};
GraphsPsiParser.inherits(PsiXML.Parser); 
//* Definitions Events and Methods
GraphsPsiParser.methods({
  
  //Define Properties
  defineProperties: function(newElement) {
    if (newElement.parent) {
      switch (newElement.parent._def.key) { 
        case ID_TAG_PAINTPSI:
          switch (newElement.tag) { 
            case "Include": newElement.parent.includes[newElement.alias] = newElement; break;
            case "Layer": newElement.parent.layers[newElement.id()] = newElement; break;
            case "Script": newElement.parent.scripts[newElement.id()] = newElement; break;
            case "Modify": newElement.parent.modifies[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_LAYER:
          switch (newElement.tag) { 
            case "Figure": newElement.parent.figures[newElement.id()] = newElement; break;
            case "Line": newElement.parent.lines[newElement.id()] = newElement; break;
          };
          break;
        case ID_TAG_FIGURE:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_LINE:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
          };
          break;
        case ID_TAG_MODIFY:
          switch (newElement.tag) { 
            case "Setting": newElement.parent.settings[newElement.key] = newElement; break;
          };
          break;
      }
    }
  }, 
  //Methods 
  //Events   
  //Event: onFinish. Description: Stop application to finish its evaluation  
  onFinish: function(){ 
    this.program.state = PsiXML.ProgramState.STOP;
   },
  toString: function() { return "GraphsPsiParser"; }
});


/*-----------------------------------------------------
* Component:  Methods
*-----------------------------------------------------*/



/*-----------------------------------------------------
* Register Component to PsiXML:  Paint
*-----------------------------------------------------*/
PsiXML.registerLanguagePsi(ALIAS, GRAMMAR, GraphsPsiParser);

function _run(name, options, context){
  return PsiXML.traductor_PxmlToPobj(ALIAS, name, options, context);
}
function _language(){
  return PsiXML.LanguagePsi.get(ALIAS);
}


/*-----------------------------------------------------
* Module Initialize: InitPaintPsi  
*-----------------------------------------------------*/
function InitPaintPsi() { 
    PsiData.register("script");
  
}
InitPaintPsi();

/*-----------------------------------------------------
* Component Definition: Paint  
*-----------------------------------------------------*/
return {
  //Content 
  Include: Include, //* Type: Class
  Script: Script, //* Type: Class
  Layer: Layer, //* Type: Class
  Setting: Setting, //* Type: Class
  Figure: Figure, //* Type: Class
  Line: Line, //* Type: Class
  Modify: Modify, //* Type: Class
  PaintPsi: PaintPsi, //* Type: Class
  GraphsPsiParser: GraphsPsiParser, //* Type: Parser
  //Properties 
  //Methods 
  toString: function() { return "Paint"; },
  run: _run,
  language: _language
};
})(); 

