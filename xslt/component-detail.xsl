<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="no"/>
  
  <xsl:param name="componentId"/>

  <xsl:template match="/">
    <xsl:apply-templates select="//Component[@id=$componentId]"/>
    <xsl:apply-templates select="//ComponentPsi[@id=$componentId]"/>
    <xsl:if test="$componentId='*'">
      <xsl:apply-templates select="ModelPsi"/>
    </xsl:if>
  </xsl:template> 
  
    
  <xsl:template match="Component|ComponentPsi|ModelPsi">
    <xsl:variable name="tab" select="concat('tab-',@id)"/>
    <xsl:element name="div">
      <xsl:attribute name="id">tabs-<xsl:value-of select="@id"/></xsl:attribute>
      <xsl:attribute name="class">docs-psi</xsl:attribute>
      <ul>
        <li>
          <xsl:element name="a">
            <xsl:attribute name="href">#<xsl:value-of select="$tab"/>-intro</xsl:attribute>
            Description
          </xsl:element>
        </li>
        <xsl:if test="count(Var)>0">
        <li>
          <xsl:element name="a">
            <xsl:attribute name="href">#<xsl:value-of select="$tab"/>-vars</xsl:attribute>
            Variables
          </xsl:element>
        </li>
        </xsl:if>
        <xsl:if test="count(Function)>0">
        <li>
          <xsl:element name="a">
            <xsl:attribute name="href">#<xsl:value-of select="$tab"/>-functions</xsl:attribute>
            Functions
          </xsl:element>
        </li>  
        </xsl:if>
        <xsl:if test="count(Enum)>0">
        <li>
          <xsl:element name="a">
            <xsl:attribute name="href">#<xsl:value-of select="$tab"/>-enums</xsl:attribute>
            Enumerators
          </xsl:element>
        </li>  
        </xsl:if>
        <xsl:if test="count(Class)>0">
        <li>
          <xsl:element name="a">
            <xsl:attribute name="href">#<xsl:value-of select="$tab"/>-classes</xsl:attribute>
            Classes
          </xsl:element>
        </li>  
        </xsl:if>
        <xsl:if test="count(Object)>0">
        <li>
          <xsl:element name="a">
            <xsl:attribute name="href">#<xsl:value-of select="$tab"/>-objects</xsl:attribute>
            Objects
          </xsl:element>
        </li>  
        </xsl:if>
      <xsl:if test="count(Widget)>0">
        <li>
          <xsl:element name="a">
            <xsl:attribute name="href">#<xsl:value-of select="$tab"/>-widgets</xsl:attribute>
            Widgets
          </xsl:element>
        </li>  
      </xsl:if>
      <xsl:if test="count(Component)>0">
        <li>
          <xsl:element name="a">
            <xsl:attribute name="href">#<xsl:value-of select="$tab"/>-subcomponents</xsl:attribute>
            Subcomponents
          </xsl:element>
        </li>  
      </xsl:if>
      </ul>
      
      <xsl:element name="div">
        <xsl:attribute name="id"><xsl:value-of select="$tab"/>-intro</xsl:attribute>
        <xsl:copy-of select="Note[@key='this']/*"/>
        
        <xsl:variable name="component" select="."/>
        <xsl:if test="count(Properties)>0">
          <h2>List of attributes component</h2>
          <ul>
            <xsl:for-each select="Properties/@*">
              <xsl:variable name="name" select="name()"/>
              <xsl:apply-templates select="$component/Property[@name=$name]">
                <xsl:with-param name="description" select="."/>
              </xsl:apply-templates>
            </xsl:for-each>
          </ul>
        </xsl:if>
        <xsl:if test="count(Methods)>0">
          <h2>List of methods component</h2>
          <ul>
            <xsl:for-each select="Methods/@*">
              <xsl:variable name="name" select="name()"/>
              <xsl:apply-templates select="$component/Method[@name=$name]">
                <xsl:with-param name="description" select="."/>
              </xsl:apply-templates>
            </xsl:for-each>
          </ul>
        </xsl:if>
        
        <h2>List of programming elements</h2>
        <xsl:if test="count(Var)>0">
          <b>Variables: </b>
          <ul>
          <xsl:for-each select="Var">
            <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
          </xsl:for-each>
          </ul>
        </xsl:if>
        <xsl:if test="count(Function)>0">
          <b>Functions: </b>
          <ul>
          <xsl:for-each select="Function">
            <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
          </xsl:for-each>
          </ul>
        </xsl:if>
        <xsl:if test="count(Enum)>0">
          <b>Enumerators Types: </b>
          <ul>
          <xsl:for-each select="Enum">
            <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
          </xsl:for-each>
          </ul>
        </xsl:if>
        <xsl:if test="count(Class)>0">
          <b>Classes: </b>
          <ul>
          <xsl:for-each select="Class">
            <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
          </xsl:for-each>
          </ul>
        </xsl:if>
        <xsl:if test="count(Object)>0">
          <b>Objects: </b>
          <ul>
          <xsl:for-each select="Object">
            <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
          </xsl:for-each>
          </ul>
        </xsl:if>
        <xsl:if test="count(Widget)>0">
          <b>Widgets: </b>
          <ul>
          <xsl:for-each select="Widget">
            <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
          </xsl:for-each>
          </ul>
        </xsl:if>
        <xsl:if test="count(Component)>0">
          <b>Subcomponents: </b>
          <ul>
          <xsl:for-each select="Component">
            <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
          </xsl:for-each>
          </ul>
        </xsl:if>
      </xsl:element>
      
        
      <xsl:if test="count(Var)>0">
        <xsl:element name="div">
          <xsl:attribute name="id"><xsl:value-of select="$tab"/>-vars</xsl:attribute>
          <h1>List of variables</h1>
          <xsl:apply-templates select="Var"></xsl:apply-templates>
        </xsl:element>
      </xsl:if>
      <xsl:if test="count(Function)>0">
        <xsl:element name="div">
          <xsl:attribute name="id"><xsl:value-of select="$tab"/>-functions</xsl:attribute>
          <h1>List of functions</h1>
          <xsl:apply-templates select="Function"></xsl:apply-templates>
        </xsl:element>
      </xsl:if>
      <xsl:if test="count(Enum)>0">
        <xsl:element name="div">
          <xsl:attribute name="id"><xsl:value-of select="$tab"/>-enums</xsl:attribute>
          <h1>List of enumerators types</h1>
          <xsl:apply-templates select="Enum"></xsl:apply-templates>
        </xsl:element>
      </xsl:if>
      <xsl:if test="count(Class)>0">
        <xsl:element name="div">
          <xsl:attribute name="id"><xsl:value-of select="$tab"/>-classes</xsl:attribute>
          <h1>List of classes</h1>
          <xsl:apply-templates select="Class"></xsl:apply-templates>
        </xsl:element>
      </xsl:if>
      <xsl:if test="count(Object)>0">
        <xsl:element name="div">
          <xsl:attribute name="id"><xsl:value-of select="$tab"/>-objects</xsl:attribute>
          <h1>List of objects</h1>
          <xsl:apply-templates select="Object"></xsl:apply-templates>
        </xsl:element>
      </xsl:if>
      <xsl:if test="count(Widget)>0">
        <xsl:element name="div">
          <xsl:attribute name="id"><xsl:value-of select="$tab"/>-widgets</xsl:attribute>
          <h1>List of widgets</h1>
          <xsl:apply-templates select="Widget"></xsl:apply-templates>
        </xsl:element>
      </xsl:if>
      
      <xsl:if test="count(Component)>0">
        <xsl:element name="div">
          <xsl:attribute name="id"><xsl:value-of select="$tab"/>-subcomponents</xsl:attribute>
          <h1 style="font-weight: bold;margin: 0;">List of subcomponents</h1>
          
          <xsl:for-each select="Component">
            <br/>
            <table class="pe-header">
              <tr>
                <td class="pe-label"><i>Subcomponent</i>: </td>
                <td>
                  <b style="font-size: 1.1em;"><xsl:value-of select="@name"/></b>
                </td>
                <td class="pe-public"><b>Public</b>: <xsl:choose>
                  <xsl:when test="@public='yes'">Yes</xsl:when>
                  <xsl:otherwise>No</xsl:otherwise>
                </xsl:choose></td>
              </tr>
              <tr>
                <td class="pe-label">Description:</td>
                <td colspan="2"><xsl:value-of select="@description"/></td>
              </tr>
            </table>
            
            <xsl:variable name="component" select="."/>
            <xsl:if test="count(Properties)>0">
              <h2>List of attributes subcomponent</h2>
              <ul>
                <xsl:for-each select="Properties/@*">
                  <xsl:variable name="name" select="name()"/>
                  <xsl:apply-templates select="$component/Property[@name=$name]">
                    <xsl:with-param name="description" select="."/>
                  </xsl:apply-templates>
                </xsl:for-each>
              </ul>
            </xsl:if>
            <xsl:if test="count(Methods)>0">
              <h2>List of methods subcomponent</h2>
              <ul>
                <xsl:for-each select="Methods/@*">
                  <xsl:variable name="name" select="name()"/>
                  <xsl:apply-templates select="$component/Method[@name=$name]">
                    <xsl:with-param name="description" select="."/>
                  </xsl:apply-templates>
                </xsl:for-each>
              </ul>
            </xsl:if>
        
            <h2>List of programming elements</h2>
            <xsl:if test="count(Var)>0">
              <b>Variables: </b>
              <ul>
              <xsl:for-each select="Var">
                <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
              </xsl:for-each>
              </ul>
            </xsl:if>
            <xsl:if test="count(Function)>0">
              <b>Functions: </b>
              <ul>
              <xsl:for-each select="Function">
                <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
              </xsl:for-each>
              </ul>
            </xsl:if>
            <xsl:if test="count(Enum)>0">
              <b>Enumerators Types: </b>
              <ul>
              <xsl:for-each select="Enum">
                <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
              </xsl:for-each>
              </ul>
            </xsl:if>
            <xsl:if test="count(Class)>0">
              <b>Classes: </b>
              <ul>
              <xsl:for-each select="Class">
                <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
              </xsl:for-each>
              </ul>
            </xsl:if>
            <xsl:if test="count(Object)>0">
              <b>Objects: </b>
              <ul>
              <xsl:for-each select="Object">
                <li><b><xsl:value-of select="@name"/></b>: <xsl:value-of select="@description"/></li>
              </xsl:for-each>
              </ul>
            </xsl:if>    
      
    
          </xsl:for-each>
        </xsl:element>
      </xsl:if>
    </xsl:element> 
  </xsl:template>

  
  <xsl:template match="Var">
    <div class="pe-var">
      <code><b><xsl:value-of select="@name"/></b> = <xsl:value-of select="text()"/></code>
      <xsl:value-of select="@description"/>
    </div>
  </xsl:template>
  
  
  <xsl:template match="Function">
    <div class="pe-function">
      <code><b><xsl:value-of select="@name"/></b> (<xsl:value-of select="@arguments"/>)</code>
      <xsl:value-of select="@description"/>
    </div>
  </xsl:template>
  
  
  <xsl:template match="Enum">
    <table class="pe-header">
      <tr>
        <td class="pe-label"><i>Enumerator</i>: </td>
        <td>
          <b style="font-size: 1.1em;"><xsl:value-of select="@name"/></b>
        </td>
        <td class="pe-public"><b>Public</b>: <xsl:choose>
          <xsl:when test="@public='yes'">Yes</xsl:when>
          <xsl:otherwise>No</xsl:otherwise>
        </xsl:choose></td>
      </tr>
      <tr>
        <td class="pe-label">Description:</td>
        <td colspan="2"><xsl:value-of select="@description"/></td>
      </tr>
    </table>
    <div class="pe-content">
      <div id="pe-properties">
        <h3>List of members</h3>
        <ul>
        <xsl:for-each select="Member">
          <li class="pe-property">
            <code><b><xsl:value-of select="@name"/></b> = <xsl:value-of select="@value"/></code><br/> 
            <xsl:value-of select="@description"/>
          </li>
          </xsl:for-each>
        </ul>  
      </div>
    </div>  
  </xsl:template>
  
  
    
  <xsl:template match="Class">
    <table class="pe-header">
      <tr>
        <td class="pe-label"><i>Class</i>: </td>
        <td>
          <b style="font-size: 1.1em;"><xsl:value-of select="@name"/></b>
        </td>
        <td class="pe-public"><b>Public</b>: <xsl:choose>
          <xsl:when test="@public='yes'">Yes</xsl:when>
          <xsl:otherwise>No</xsl:otherwise>
        </xsl:choose></td>
      </tr>
      <tr>
        <td class="pe-label">Description:</td>
        <td colspan="2"><xsl:value-of select="@description"/></td>
      </tr>
      <xsl:if test="count(@inherits)>0">
        <tr>
          <td class="pe-label">Inherits:</td>
          <td colspan="2"><xsl:value-of select="@inherits"/></td>
        </tr>
      </xsl:if>
      <xsl:if test="count(@init)>0">
        <tr>
          <td class="pe-label">Init:</td>
          <td colspan="2"><xsl:value-of select="@init"/></td>
        </tr>
      </xsl:if>
    </table>
    <xsl:variable name="class" select="."/>
    <div class="pe-content">
      <xsl:if test="count(Properties)>0">
        <div id="pe-properties">
          <h3>List of attributes</h3>
          <ul>
          <xsl:for-each select="Properties/@*">
            <xsl:variable name="name" select="name()"/>
            <xsl:apply-templates select="$class/Property[@name=$name]">
              <xsl:with-param name="description" select="."/>
            </xsl:apply-templates>
          </xsl:for-each>
          </ul>  
        </div>
      </xsl:if>
      <xsl:if test="count(Methods)>0">
        <div id="pe-methods">
          <h3>List of methods</h3>
          <ul>
            <xsl:for-each select="Methods/@*">
              <xsl:variable name="name" select="name()"/>
              <xsl:apply-templates select="$class/Method[@name=$name]">
                <xsl:with-param name="description" select="."/>
              </xsl:apply-templates>
            </xsl:for-each>
          </ul>
        </div>
      </xsl:if>
      <xsl:if test="count(Events)>0">
        <div id="pe-events">
          <h3>List of events</h3>
          <ul>
            <xsl:for-each select="Events/@*">
              <xsl:variable name="name" select="name()"/>
              <xsl:apply-templates select="$class/Event[@name=$name]">
                <xsl:with-param name="description" select="."/>
              </xsl:apply-templates>
            </xsl:for-each>
          </ul>
        </div>
      </xsl:if>
      <xsl:if test="count(Statics)>0">
        <div id="pe-methods">
          <h3>List of statics events</h3>
          <ul>
            <xsl:for-each select="Static/@*">
              <xsl:variable name="name" select="name()"/>
              <xsl:apply-templates select="$class/Event[@name=$name]">
                <xsl:with-param name="description" select="."/>
              </xsl:apply-templates>
            </xsl:for-each>
          </ul>
        </div>
      </xsl:if>
    </div>  
  </xsl:template>

  
  <xsl:template match="Object">
    <table class="pe-header">
      <tr>
        <td class="pe-label"><i>Object</i>: </td>
        <td>
          <b style="font-size: 1.1em;"><xsl:value-of select="@name"/></b>
        </td>
        <td class="pe-public"><b>Public</b>: <xsl:choose>
          <xsl:when test="@public='yes'">Yes</xsl:when>
          <xsl:otherwise>No</xsl:otherwise>
        </xsl:choose></td>
      </tr>
      <tr>
        <td class="pe-label">Description:</td>
        <td colspan="2"><xsl:value-of select="@description"/></td>
      </tr>
    </table>
    <xsl:variable name="widget" select="."/>
    <div class="pe-content">
      <xsl:if test="count(Options)>0">
        <div id="pe-properties">
          <h3>List of options</h3>
          <ul>
          <xsl:for-each select="Options/@*">
            <xsl:variable name="name" select="name()"/>
            <xsl:apply-templates select="$widget/Option[@name=$name]">
              <xsl:with-param name="description" select="."/>
            </xsl:apply-templates>
          </xsl:for-each>
          </ul>  
        </div>
      </xsl:if>
      <xsl:if test="count(Events)>0">
        <div id="pe-events">
          <h3>List of events</h3>
          <ul>
            <xsl:for-each select="Events/@*">
              <xsl:variable name="name" select="name()"/>
              <xsl:apply-templates select="$widget/Event[@name=$name]">
                <xsl:with-param name="description" select="."/>
              </xsl:apply-templates>
            </xsl:for-each>
          </ul>
        </div>
      </xsl:if>
      <xsl:if test="count(Methods)>0">
        <div id="pe-methods">
          <h3>List of methods</h3>
          <ul>
            <xsl:for-each select="Methods/@*">
              <xsl:variable name="name" select="name()"/>
              <xsl:apply-templates select="$widget/Method[@name=$name]">
                <xsl:with-param name="description" select="."/>
              </xsl:apply-templates>
            </xsl:for-each>
          </ul>
        </div>
      </xsl:if>
    </div>  
  </xsl:template>
  
  
  
  <xsl:template match="Widget">
    <table class="pe-header">
      <tr>
        <td class="pe-label"><i>Widget</i>: </td>
        <td>
          <b style="font-size: 1.1em;"><xsl:value-of select="@name"/></b>
        </td>
      </tr>
      <tr>
        <td class="pe-label">Description:</td>
        <td><xsl:value-of select="@description"/></td>
      </tr>
    </table>
    <xsl:variable name="object" select="."/>
    <div class="pe-content">
      <xsl:if test="count(Properties)>0">
        <div id="pe-properties">
          <h3>List of attributes</h3>
          <ul>
          <xsl:for-each select="Properties/@*">
            <xsl:variable name="name" select="name()"/>
            <xsl:apply-templates select="$object/Property[@name=$name]">
              <xsl:with-param name="description" select="."/>
            </xsl:apply-templates>
          </xsl:for-each>
          </ul>  
        </div>
      </xsl:if>
      <xsl:if test="count(Methods)>0">
        <div id="pe-methods">
          <h3>List of methods</h3>
          <ul>
            <xsl:for-each select="Methods/@*">
              <xsl:variable name="name" select="name()"/>
              <xsl:apply-templates select="$object/Method[@name=$name]">
                <xsl:with-param name="description" select="."/>
              </xsl:apply-templates>
            </xsl:for-each>
          </ul>
        </div>
      </xsl:if>
    </div>  
  </xsl:template>

  
  <xsl:template match="Property">
    <xsl:param name="description"/>
    <li class="pe-property">
      <b><code><xsl:value-of select="@name"/></code></b> (default=<code><xsl:value-of select="@default"/></code>) 
      <xsl:value-of select="$description"/>
    </li>
  </xsl:template>
  
  <xsl:template match="Method">
    <xsl:param name="description"/>
    <li class="pe-method">
      <code><b><xsl:value-of select="@name"/></b> (<xsl:value-of select="@arguments"/>)</code> 
      <xsl:value-of select="$description"/>
    </li>
  </xsl:template>
  
  <xsl:template match="Event">
    <xsl:param name="description"/>
    <li class="pe-event">
      <code><b><xsl:value-of select="@name"/></b> (<xsl:value-of select="@arguments"/>)</code> 
      <xsl:value-of select="$description"/>
    </li>
  </xsl:template>  

  <xsl:template match="Static">
    <xsl:param name="description"/>
    <li class="pe-method">
      <code><b><xsl:value-of select="@name"/></b> (<xsl:value-of select="@arguments"/>)</code> 
      <xsl:value-of select="$description"/>
    </li>
  </xsl:template> 
  
  
</xsl:stylesheet>
