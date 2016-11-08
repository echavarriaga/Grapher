<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fn="http://www.w3.org/2005/xpath-functions">
  <xsl:output method="html" indent="no"/>

  
  <xsl:template match="/MetricsPsi">
    <div class="metrics-psi">
      <xsl:apply-templates select="Project"/>
      <xsl:apply-templates select="Components"/>
      <xsl:apply-templates select="Elements"/>
    </div>
  </xsl:template>

  <xsl:template match="Project">
    <div class="project">
      <h2>Project</h2>
      <h3>Project Metrics</h3>
      <table width="100%">
        <tr>
          <td style="width:50%; background-color: #FFF;">
            <div id="mlines" style="min-width: 400px; height: 280px; margin: 0 auto"></div>
            <script type="text/javascript">
              $('#mlines').highcharts(PsiData.var["metrics.graph.mlines"]);
            </script>
          </td>
          <td  style="width:50%; background-color: #FFF;">
            <div id="mpsivsjs" style="min-width: 400px; height: 280px; margin: 0 auto"></div>
            <script type="text/javascript">
              $('#mpsivsjs').highcharts(PsiData.var["metrics.graph.mpsivsjs"]);
            </script>
          </td>
        </tr>
      </table>
      
      <table width="100%">
        <thead>
          <tr>
            <th>Project</th>
            <th style="width: 8%" class="cssToolTip">CNA<span>Cumulative number of cyclomatic complexity</span></th>
            <th style="width: 8%" class="cssToolTip">CND<span>Density cyclomatic complexity</span></th>
            <th style="width: 8%" class="cssToolTip">CNN<span>Cyclomatic complexity number</span></th>
            <th style="width: 8%" class="cssToolTip">EM<span>Average implementation effort</span></th>
            <th style="width: 8%" class="cssToolTip">MLOC<span>Average lines number</span></th>
            <th style="width: 8%" class="cssToolTip">NOP<span>Average parameters</span></th>
            <th style="width: 8%" class="cssToolTip">MI<span>Maintainability Index</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="Metrics">
          <tr>
            <td class="name"><xsl:value-of select="../@name"/></td>
            <td class="value"><xsl:value-of select="format-number(@CNA, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@CND, '#0.0')"/></td>
            <td class="subtotal"><xsl:value-of select="format-number(@CNN, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@EM, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@MLOC, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@NOP, '#0.0')"/></td>
            <td class="subtotal"><xsl:value-of select="format-number(@MI, '#0.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
       </table>

       <h4>Halstead complexity metrics</h4>
       <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th style="width: 8%" class="cssToolTip">HN<span>Programme duration</span></th>
            <th style="width: 8%" class="cssToolTip">Hn<span>Vocabulary size</span></th>
            <th style="width: 8%" class="cssToolTip">HV<span>Comulatice volume</span></th>
            <th style="width: 8%" class="cssToolTip">HD<span>Difficulty level</span></th>
            <th style="width: 8%" class="cssToolTip">HE<span>Halstead effort</span></th>
            <th style="width: 8%" class="cssToolTip">HT(h)<span>Halstead time (hours)</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="Metrics">
          <tr>
            <td class="name"><xsl:value-of select="../@name"/></td>
            <td class="value"><xsl:value-of select="format-number(@HN, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@Hn, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HV, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HD, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HE, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HT, '#0.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
      </table>

      <table width="100%">
        <tr>
          <td style="width:40%; background-color: #FFF;">
            <div id="gloc" style="min-width: 300px; height: 300px; margin: 0 auto"></div>
            <script type="text/javascript">
              $('#gloc').highcharts(PsiData.var["metrics.graph.lines"]);
            </script>
          </td>
          <td  style="width:60%; background-color: #FFF;">
            <div id="gnpe" style="min-width: 500px; height: 300px; margin: 0 auto"></div>
            <script type="text/javascript">
              $('#gnpe').highcharts(PsiData.var["metrics.graph.npe"]);
            </script>
          </td>
        </tr>
      </table>
      <h4>Consolidated metric by type of Psi programming element</h4>
      <table width="100%">
        <thead>
          <tr>
            <th>Tag</th>
            <th style="width: 6%" class="cssToolTip">CNA<span>Cumulative number of cyclomatic complexity</span></th>
            <th style="width: 6%" class="cssToolTip">CND<span>Density cyclomatic complexity</span></th>
            <th style="width: 6%" class="cssToolTip">CNN<span>Cyclomatic complexity number</span></th>
            <th style="width: 6%" class="cssToolTip">EM<span>Average implementation effort</span></th>
            <th style="width: 6%" class="cssToolTip">MLOC<span>Average lines number</span></th>
            <th style="width: 6%" class="cssToolTip">NOP<span>Average parameters</span></th>
            <th style="width: 6%" class="cssToolTip">MI<span>Maintainability Index</span></th>
            <th style="width: 6%" class="cssToolTip">HN<span>Programme duration</span></th>
            <th style="width: 6%" class="cssToolTip">Hn<span>Vocabulary size</span></th>
            <th style="width: 6%" class="cssToolTip">HV<span>Comulatice volume</span></th>
            <th style="width: 6%" class="cssToolTip">HD<span>Difficulty level</span></th>
            <th style="width: 6%" class="cssToolTip">HE<span>Halstead effort</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="Consolide">
          <tr>
            <td class="name"><xsl:value-of select="@name"/></td>
            <td class="value"><xsl:value-of select="format-number(@CNA, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@CND, '#0.0')"/></td>
            <td class="subtotal"><xsl:value-of select="format-number(@CNN, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@EM, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@MLOC, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@NOP, '#0.0')"/></td>
            <td class="subtotal"><xsl:value-of select="format-number(@MI, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HN, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@Hn, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HV, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HD, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HE, '#0.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
  </xsl:template>

  <xsl:template match="Components">
    <div class="project">
      <h2>Components</h2>
      <h3>Components metrics</h3>
      <div id="gcomponents" style="min-width: 800px; height: 300px; max-width: 1000px; margin: 0 auto; width: 100%;"></div>
      <script type="text/javascript">
        $('#gcomponents').highcharts(PsiData.var["metrics.graph.components"]);
      </script>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th style="width: 6%" class="cssToolTip">CNA<span>Cumulative number of cyclomatic complexity</span></th>
            <th style="width: 6%" class="cssToolTip">CND<span>Density cyclomatic complexity</span></th>
            <th style="width: 6%" class="cssToolTip">CNN<span>Cyclomatic complexity number</span></th>
            <th style="width: 6%" class="cssToolTip">EM<span>Average implementation effort</span></th>
            <th style="width: 6%" class="cssToolTip">MLOC<span>Average lines number</span></th>
            <th style="width: 6%" class="cssToolTip">NOP<span>Average parameters</span></th>
            <th style="width: 6%" class="cssToolTip">MI<span>Maintainability Index</span></th>
            <th style="width: 6%" class="cssToolTip">HN<span>Programme duration</span></th>
            <th style="width: 6%" class="cssToolTip">Hn<span>Vocabulary size</span></th>
            <th style="width: 6%" class="cssToolTip">HV<span>Comulatice volume</span></th>
            <th style="width: 6%" class="cssToolTip">HD<span>Difficulty level</span></th>
            <th style="width: 6%" class="cssToolTip">HE<span>Halstead effort</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="Consolide">
          <tr>
            <td class="name"><xsl:value-of select="@name"/></td>
            <td class="name"><xsl:value-of select="@tag"/></td>
            <td class="value"><xsl:value-of select="format-number(@CNA, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@CND, '#0.0')"/></td>
            <td class="subtotal"><xsl:value-of select="format-number(@CNN, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@EM, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@MLOC, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@NOP, '#0.0')"/></td>
            <td class="subtotal"><xsl:value-of select="format-number(@MI, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HN, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@Hn, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HV, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HD, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HE, '#0.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
  </xsl:template>

  
  <xsl:template match="Elements">
    <div class="project">
      <h2>Elements Lists</h2>
      <h3>Elements Metrics</h3>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th style="width: 6%" class="cssToolTip">CNA<span>Cumulative number of cyclomatic complexity</span></th>
            <th style="width: 6%" class="cssToolTip">CND<span>Density cyclomatic complexity</span></th>
            <th style="width: 6%" class="cssToolTip">CNN<span>Cyclomatic complexity number</span></th>
            <th style="width: 6%" class="cssToolTip">EM<span>Average implementation effort</span></th>
            <th style="width: 6%" class="cssToolTip">MLOC<span>Average lines number</span></th>
            <th style="width: 6%" class="cssToolTip">NOP<span>Average parameters</span></th>
            <th style="width: 6%" class="cssToolTip">MI<span>Maintainability Index</span></th>
            <th style="width: 6%" class="cssToolTip">HN<span>Programme duration</span></th>
            <th style="width: 6%" class="cssToolTip">Hn<span>Vocabulary size</span></th>
            <th style="width: 6%" class="cssToolTip">HV<span>Comulatice volume</span></th>
            <th style="width: 6%" class="cssToolTip">HD<span>Difficulty level</span></th>
            <th style="width: 6%" class="cssToolTip">HE<span>Halstead effort</span></th>
            <th style="width: 6%" class="cssToolTip">HT(h)<span>Halstead time (hours)</span></th>
            <th style="width: 6%" class="cssToolTip">HB<span>Estimated number of errors</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="Consolide">
          <tr>
            <td class="name"><xsl:value-of select="@name"/></td>
            <td class="name"><xsl:value-of select="@tag"/></td>
            <td class="value"><xsl:value-of select="format-number(@CNA, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@CND, '#0.0')"/></td>
            <td class="subtotal"><xsl:value-of select="format-number(@CNN, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@EM, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@MLOC, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@NOP, '#0.0')"/></td>
            <td class="subtotal"><xsl:value-of select="format-number(@MI, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HN, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@Hn, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HV, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HD, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HE, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HT, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HB, '#0.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
        
      </table>
    </div>
  </xsl:template>

</xsl:stylesheet>
