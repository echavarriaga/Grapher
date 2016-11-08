<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="no"/>
  
  <xsl:param name="componentId"/>
  <xsl:param name="caption"/>
  <xsl:template match="/">
    <xsl:apply-templates  select="//ComponentPsi[@id=$componentId]/Structure"/>
  </xsl:template> 
  
    
  <xsl:template match="Structure">
    <xsl:variable name="key" select="@root"/>
    <xsl:variable name="root" select="Element[@key=$key]"/>
    <xsl:variable name="class" select="//Class[@id=$root/@class-id]"/>
    <xsl:variable name="struct" select="."/>
    <figure>
      <figcaption><xsl:value-of select="$caption"/></figcaption>
      <table class="psi-structure">
        <thead>
          <tr>
            <th class="tag">Tag</th>
            <th class="strict">Children Strict</th>
            <th class="multiplicity">Multiplicity</th>
            <th class="class">Associate Class</th>
            <th class="validator">Validator</th>   
          </tr>
        </thead>
        <tbody>
          <tr class="root">
            <td class="tag-name"><xsl:value-of select="$root/@tag"/>(*)</td>
            <td class="strict">
              <xsl:choose>
                <xsl:when test="$root/@chidren-strict='false'">False</xsl:when>
                <xsl:otherwise>True</xsl:otherwise>
              </xsl:choose>
            </td>
            <td class="multiplicity">1..1</td>
            <td><xsl:value-of select="$class/@name"/></td>
            <td><xsl:apply-templates select="$class/Validator[@element-key=$key]"/></td>
          </tr>
          <xsl:for-each select="Element/Child">
            <xsl:sort select="@tag"/>
            <xsl:variable name="ref" select="@ref"/>
            <xsl:variable name="element" select="$struct/Element[@key=$ref]"/>
            <xsl:variable name="eclass" select="//Class[@id=$element/@class-id]"/>
            <tr>
              <td class="tag-name">
                <xsl:value-of select="@tag"/>
                <xsl:if test="count(@literal)>0">(<xsl:value-of select="@literal"/>)</xsl:if>
              </td>
              <td class="strict">
                <xsl:choose>
                  <xsl:when test="@chidren-strict='false'">False</xsl:when>
                  <xsl:otherwise>True</xsl:otherwise>
                </xsl:choose>
              </td>
              <td class="multiplicity"><xsl:value-of select="@multiplicity"/></td>
              <td><xsl:value-of select="$eclass/@name"/></td>
              <td><xsl:apply-templates select="$eclass/Validator[@element-key=$ref]"/></td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table>
      <p class="notation">
        <i>Notation</i>: <b>(*)</b> Root tag <b>(X)</b> Child tag repeated in different parent tag, where X=a,b,c,...
      </p>
    </figure>
  </xsl:template>


  <xsl:template match="Validator">
    <xsl:for-each select="@*">
      <xsl:if test="name()!='element-key'">
        <xsl:variable name="value" select="."/>
        <xsl:choose>
          <xsl:when test="substring($value,1,1)='*'">*<xsl:value-of select="name()"/>:<xsl:value-of select="substring($value,2)"/></xsl:when>
          <xsl:otherwise><xsl:value-of select="name()"/>:<xsl:value-of select="$value"/></xsl:otherwise>
        </xsl:choose>
        <xsl:if test="position()!=last()">| </xsl:if>
      </xsl:if>
    </xsl:for-each>
  </xsl:template>
  
  
</xsl:stylesheet>
