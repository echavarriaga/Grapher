/* Generated power ModelPsi (@VERSION 2.1) 
* Model Name: Utilities Psi
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
*=Object[docs_psi]: DocsPsi
* Description: Interfaz de usuario para el graficador Psi
*-----------------------------------------------------*/
var DocsPsi = {
  //Properties   
  //Property: specs. Description: Mapa de especificaciones  
  specs: {},  
  //Property: xslt. Description: Lista de transformaciones  
  xslt: {},
  //Methods   
  //Method: addSpec. Description: Adicionar especificación  
  addSpec: function(path, filename){ 
  try { 
    //Obtener la especificación 
    var spec = PsiXML.loadXMLSync(path+filename),
        acronym = $("ModelPsi", spec).attr("acronym"); 
    
    $("Implementation", spec).each(function () {
      var impl = PsiXML.loadXMLSync(path + $(this).attr("file")),
          alias = $(this).attr("alias");
      $("ModelImplementationPsi", impl).children().each(function () {
        var selector = this.tagName + "[id=" + $(this).attr("id") + "][implementation=" + alias + "]",
            elem = $(selector, spec).append($(this).children());
        if (this.tagName=="Function"){
          elem.attr("arguments", $(this).attr("arguments"));
          elem.text($(this).text());
        }
        if (this.tagName=="Var" || this.tagName=="Script")
          elem.text($(this).text());
      });
    });
    this.specs[acronym] = spec;
    PsiData.document[acronym] = spec;
    return spec;
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"addSpec", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: getSpec. Description: Obtener especificación  
  getSpec: function(acronym){ 
  try { 
    return this.specs[acronym];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"getSpec", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: addXsl. Description: Adicionar transformación  
  addXsl: function(alias, url){ 
  try { 
    if (this.xslt[alias]==null)
      this.xslt[alias] = PsiXML.loadXMLSync(url); 
    return this.xslt[alias];
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"addXsl", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  },  
  //Method: transform. Description: Transformación de información  
  transform: function(acronym, xsl){ 
  try { 
    return $.transform({
      async:  false,
      xmlobj: this.specs[acronym],
      xslobj: this.xslt[xsl.alias],
      xslParams: xsl.params,
      error: function(jqXHR, textStatus, errorThrown) {
        throw new Error("Transform error: "+errorThrown);
      }
    });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"transform", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; }
  }
};   

/*-----------------------------------------------------
*=Widget[visor_widget]: psi.visorPsi
* Description: Visor de diagramas Psi
*-----------------------------------------------------*/
(function( $, undefined ) {

$.widget( "psi.visorPsi", {
  options: {   
    //Option: path. Description: Ruta de la especificación Psi  
    path: null,  
    //Option: filename. Description: nombre de archivo de la especificación Psi  
    filename: null,  
    //Option: url. Description: Url del diagrama a vsualizar  
    url: null,  
    //Option: pathlibs. Description: Ruta de los ficheros base de visualización  
    pathlibs: "/PsiXML/source/models/lib/",  
    //Option: class. Description: Definición de clases CSS  
    class: "psi-edit-xml",  
    //Option: width. Description: Ancho del visor  
    width: "100%" 
  },
  //Properties 
  //Methods   
  //Method: destroy. Description: Destruir barra de herramientas Psi  
  destroy: function(){ 
  try {  } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"destroy", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  //Events   
  //Event: _create. Description: Crear toolbar  
  _create: function(){ 
  try { 
    this._super();
    this._acronym = this.options.acronym;
    this.options.specification = DocsPsi.getSpec(this._acronym);
    
    //Cargar librería y utilitario
    if (!GLPsi.exist("library-psi"))
      GLPsi.register("library-psi", { url: this.options.pathlibs+"language.glib.xml" }, true);
    if (!PsiXML.Programs.exist("tools-psi"))
      TPsi.run("tools-psi", { url: this.options.pathlibs+"language.tool.xml" });
    
    //Crear administrador de diagrama
    var settings = { width: 800, height: 600 };
    this.diagram = $('<div class="content-psi language-psi"></div>').appendTo(this.element);
    this.manager = DPsi.createManager(this.diagram, this._acronym+"-svg-id", settings);
    if (!PsiXML.Programs.exist("skeletons-psi"))
      this.manager.run("skeletons-psi", {url: this.options.pathlibs+"skeletons.dgl.xml"});
    this.manager.init("visor-"+Math.random().toString().substr(2), { url: this.options.url });
   } catch(e) { if (e.type==null) throw new PsiError("PSIXML.PROCESS",[this._pathtag ?  this._pathtag : this.toString(),"_create", $.isFunction(this.id) ? this.id() : (this.id?this.id:""), e.message ? e.message : e.toString()],[e,this]); else throw e; } 
  },
  version: "1.0"
});

}(jQuery));

