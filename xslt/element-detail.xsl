<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="no"/>

  <xsl:param name="classId"/>
  <xsl:param name="objectId"/>
  <xsl:param name="enumId"/>
  
  <xsl:template match="/">
    <div class="psi-content-tabs">
      <xsl:apply-templates select="//Class[@id=$classId]"/>
      <xsl:apply-templates select="//Object[@id=$objectId]"/>
      <xsl:apply-templates select="//Enum[@id=$enumId]"/>
    </div>
  </xsl:template>

  
  <xsl:template match="Enum">
    <ul>
      <li><a href="#tab-info">Information</a></li>
    </ul>
    <div id="tab-info">
      <table cellpadding="3" width="100%">
        <tr>
          <td class="td-label td-name"><i>Enumerator Type</i>:</td>
          <td class="td-name"><xsl:value-of select="@name"/></td>
        </tr>
        <tr>
          <td class="td-label">Description:</td>
          <td class="td-content"><xsl:value-of select="@description"/></td>
        </tr>
        <tr>
          <td class="td-label">Public:</td>
          <td class="td-content">
            <xsl:choose>
              <xsl:when test="@public='yes'">Yes</xsl:when>
              <xsl:otherwise>No</xsl:otherwise>
            </xsl:choose>
          </td>
        </tr>
      </table>
      <div class="td-members">
        <h2>Members</h2>
        <div id="tab-members">
          <xsl:for-each select="Member">
            <div class="item cd-member">
              <code><b><xsl:value-of select="@name"/></b> = <xsl:value-of select="@value"/></code>
              <b>Description</b>: <br/>
              <xsl:value-of select="@description"/>
            </div>
          </xsl:for-each>
        </div>
      </div>
    </div>  
    
  </xsl:template>
  
  
    
  <xsl:template match="Class">
    <ul>
      <li><a href="#tab-info">Information</a></li>
      <xsl:if test="count(Properties)>0">
        <li><a href="#tab-properties">Properties</a></li>
      </xsl:if>
      <xsl:if test="count(Methods)>0">
        <li><a href="#tab-methods">Methods</a></li>
      </xsl:if>
      <xsl:if test="count(Events)>0">
        <li><a href="#tab-events">Events</a></li>
      </xsl:if>
      <xsl:if test="count(Statics)>0">
        <li><a href="#tab-statics">Statics</a></li>
      </xsl:if>
    </ul>
    
    <div id="tab-info">
      <table cellpadding="3" width="100%">
        <tr>
          <td class="td-label td-name"><i>Class Name</i>:</td>
          <td class="td-name"><xsl:value-of select="@name"/></td>
        </tr>
        <tr>
          <td class="td-label">Description:</td>
          <td class="td-content"><xsl:value-of select="@description"/></td>
        </tr>
        <tr>
          <td class="td-label">Public:</td>
          <td class="td-content">
            <xsl:choose>
              <xsl:when test="@public='yes'">Yes</xsl:when>
              <xsl:otherwise>No</xsl:otherwise>
            </xsl:choose>
          </td>
        </tr>
        <xsl:if test="count(@inherits)>0">
          <tr>
            <td class="td-label">Inherits:</td>
            <td class="td-content"><xsl:value-of select="@inherits"/></td>
          </tr>
        </xsl:if>
        <tr>
          <td class="td-label">Constructor:</td>
          <td class="td-content"><xsl:value-of select="@constructor"/></td>
        </tr>
        <xsl:if test="count(@init)>0">
          <tr>
            <td class="td-label">Init:</td>
            <td class="td-content"><xsl:value-of select="@init"/></td>
          </tr>
        </xsl:if>
      </table>
    </div>
    
    <xsl:apply-templates select="Properties"/>
    <xsl:apply-templates select="Methods"/>
    <xsl:apply-templates select="Events"/>
    <xsl:apply-templates select="Statics"/>
  </xsl:template>
  
  
  <xsl:template match="Object">
    <ul>
      <li><a href="#tab-info">Information</a></li>
      <xsl:if test="count(Properties)>0">
        <li><a href="#tab-properties">Properties</a></li>
      </xsl:if>
      <xsl:if test="count(Methods)>0">
        <li><a href="#tab-methods">Methods</a></li>
      </xsl:if>
    </ul>
    
    <div id="tab-info">
      <table cellpadding="3" width="100%">
        <tr>
          <td class="td-label td-name"><i>Class Name</i>:</td>
          <td class="td-name"><xsl:value-of select="@name"/></td>
        </tr>
        <tr>
          <td class="td-label">Description:</td>
          <td class="td-content"><xsl:value-of select="@description"/></td>
        </tr>
        <tr>
          <td class="td-label">Public:</td>
          <td class="td-content">
            <xsl:choose>
              <xsl:when test="@public='yes'">Yes</xsl:when>
              <xsl:otherwise>No</xsl:otherwise>
            </xsl:choose>
          </td>
        </tr>
      </table>
    </div>
    
    <xsl:apply-templates select="Properties"/>
    <xsl:apply-templates select="Methods"/>
  </xsl:template>
  
  
  
  
  <xsl:template match="Properties">
    <xsl:variable name="ref" select=".."/>
    <div id="tab-properties">
      <xsl:for-each select="./@*">
        <xsl:variable name="name" select="name()"/>
        <xsl:variable name="property" select="$ref/Property[@name=$name]"/>
        <div class="item cd-property">
          <code>
            <xsl:value-of select="$name"/> = <xsl:value-of select="$property/@default"/>
          </code>
          <b>Description</b>: <br/>
          <xsl:value-of select="."/>
        </div>
      </xsl:for-each>
    </div>
  </xsl:template>

  
  <xsl:template match="Methods">
    <xsl:variable name="ref" select=".."/>
    <div id="tab-methods">
      <xsl:for-each select="@*">
        <xsl:variable name="name" select="name()"/>
        <xsl:variable name="method" select="$ref/Method[@name=$name]"/>
        <div class="item cd-method">
          <code><b><xsl:value-of select="$name"/></b>(<xsl:value-of select="$method/@arguments"/>)</code>
          <b>Description</b>: <br/>
          <xsl:value-of select="."/>
        </div>
      </xsl:for-each>
    </div>
  </xsl:template>
  
  
  <xsl:template match="Events">
    <xsl:variable name="ref" select=".."/>
    <div id="tab-events">
      <xsl:for-each select="@*">
        <xsl:variable name="name" select="name()"/>
        <xsl:variable name="event" select="$ref/Event[@name=$name]"/>
        <div class="item cd-event">
          <code><b><xsl:value-of select="$name"/></b>(<xsl:value-of select="$event/@arguments"/>)</code>
          <b>Description</b>: <br/>
          <xsl:value-of select="."/>
        </div>
      </xsl:for-each>
    </div>
  </xsl:template>
  
  
  <xsl:template match="Statics">
    <xsl:variable name="ref" select=".."/>
    <div id="tab-statics">
      <xsl:for-each select="@*">
        <xsl:variable name="name" select="name()"/>
        <xsl:variable name="static" select="$ref/Static[@name=$name]"/>
        <div class="item cd-method">
          <code><b><xsl:value-of select="$name"/></b>(<xsl:value-of select="$static/@arguments"/>)</code>
          <b>Description</b>: <br/>
          <xsl:value-of select="."/>
        </div>
      </xsl:for-each>
    </div>
  </xsl:template>
</xsl:stylesheet>
