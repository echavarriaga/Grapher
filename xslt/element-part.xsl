<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="no"/>

  <xsl:param name="elementId"/>
  <xsl:param name="name"/>
  <xsl:param name="description"/>
  
  <xsl:template match="/">
    <nav style="display: inline-block; float:right;">
      <span class="ui-icon ui-icon-close tdpsi-tooltip-close" style="cursor:pointer; display:inline-block;" alt="Cerrar"></span>
    </nav>
    <xsl:variable name="info" select="//*[@id=$elementId]"/>
    <xsl:apply-templates select="$info/*[@name=$name]"/>
  </xsl:template>

  <xsl:template match="Method|Event|Static">
    <div class="cd-method">
      <label><xsl:value-of select="name()"/>:</label>
      <code><b><xsl:value-of select="@name"/></b>(<xsl:value-of select="@arguments"/>)</code>
      <xsl:value-of select="$description"/><br/>
      <textarea style="width: 290px; height: 150px;"><xsl:value-of select="text()"/></textarea>
    </div>
  </xsl:template>
  
  <xsl:template match="Property">
    <div class="cd-property">
     <label><xsl:value-of select="name()"/>:</label>
      <code><b><xsl:value-of select="@name"/></b> = <xsl:value-of select="@default"/></code>
      <xsl:value-of select="$description"/>
    </div>
  </xsl:template>
  
  
</xsl:stylesheet>
