<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="no"/>

  
  <xsl:template match="/MetricsPsi">
    <div class="metrics-psi">
      <xsl:apply-templates select="Project"/>
      <xsl:apply-templates select="Tools"/>
      <xsl:apply-templates select="ToolsMetrics"/>
      <div class="project">
        <h2>Diagramación Psi</h2>
        <h3>Métricas de Diagramación Psi (Programas DPsi)</h3>
      
        <table width="100%">
          <thead>
            <tr>
              <th>Programas DPsi</th>
              <th style="width: 10%" class="cssToolTip">Capas</th>
              <th style="width: 10%" class="cssToolTip">Figuras Psi</th>
              <th style="width: 10%" class="cssToolTip">Líneas Psi</th>
              <th style="width: 10%" class="cssToolTip">Paneles Psi</th>
              <th style="width: 10%" class="cssToolTip">Listas Psi</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="Project/File[@language='DPsi']">
            <tr>
              <td class="name"><xsl:value-of select="@name"/></td>
              <td class="value"><xsl:value-of select="@layers"/></td>
              <td class="value"><xsl:value-of select="@figures"/></td>
              <td class="value"><xsl:value-of select="@lines"/></td>
              <td class="value"><xsl:value-of select="@panels"/></td>
              <td class="value"><xsl:value-of select="@lists"/></td>
            </tr>
            </xsl:for-each>
          </tbody>
          <tfoot>
            <tr>
              <td class="name">Total<xsl:value-of select="Total"/></td>
              <td class="value"><xsl:value-of select="sum(Project/File[@language='DPsi']/@layers)"/></td>
              <td class="value"><xsl:value-of select="sum(Project/File[@language='DPsi']/@figures)"/></td>
              <td class="value"><xsl:value-of select="sum(Project/File[@language='DPsi']/@lines)"/></td>
              <td class="value"><xsl:value-of select="sum(Project/File[@language='DPsi']/@panels)"/></td>
              <td class="value"><xsl:value-of select="sum(Project/File[@language='DPsi']/@lists)"/></td>
            </tr>
          </tfoot>
        </table>  
      </div>
    </div>
  </xsl:template>

  <xsl:template match="Project">
    
    <div class="project">
      <h2>Proyecto</h2>
      <h3>Métricas de Proyecto</h3>
      
      <h4>Métricas [X]LOC, HG, NHU por fichero PsiVisual</h4>
      <table width="100%">
        <thead>
          <tr>
            <th>Etiqueta</th>
            <th>LenguajePsi</th>
            <th style="width: 6%" class="cssToolTip">FLOC<span>Número de líneas Código Psi + Código JavaScript</span></th>
            <th style="width: 6%" class="cssToolTip">SLOC<span>Número de líneas JavaScript</span></th>
            <th style="width: 6%" class="cssToolTip">CLOC<span>Número de comentarios en código JavaScript</span></th>
            <th style="width: 6%" class="cssToolTip">HG<span>Número de generadores de diagramas Psi</span></th>
            <th style="width: 6%" class="cssToolTip">GLS<span>Número de figuras Psi</span></th>
            <th style="width: 6%" class="cssToolTip">GLL<span>Número de líneas Psi</span></th>
            <th style="width: 6%" class="cssToolTip">GLC<span>Número de contenedores Psi</span></th>
            <th style="width: 6%" class="cssToolTip">GLA<span>Número de listas Psi</span></th>
            <th style="width: 6%" class="cssToolTip">GL<span>Número de elementos gráficos Psi</span></th>
            <th style="width: 6%" class="cssToolTip">DS<span>Número de skeletons de diagramación Psi</span></th>
            <th style="width: 6%" class="cssToolTip">HV<span>Número de herramientas visuales</span></th>
            <th style="width: 6%" class="cssToolTip">PU<span>Número de utilidades de programación Psi</span></th>
            <th style="width: 6%" class="cssToolTip">NHU<span>Número total de herramientas y utilidades Psi</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="File">
          <tr>
            <td class="name"><xsl:value-of select="@name"/></td>
            <td class="name"><xsl:value-of select="@language"/></td>
            <td class="value"><xsl:value-of select="@FLOC"/></td>
            <td class="value"><xsl:value-of select="@SLOC"/></td>
            <td class="value"><xsl:value-of select="@CLOC"/></td>
            <td class="subtotal"><xsl:value-of select="@NHG"/></td>
            <td class="value"><xsl:value-of select="@GLS"/></td>
            <td class="value"><xsl:value-of select="@GLL"/></td>
            <td class="value"><xsl:value-of select="@GLC"/></td>
            <td class="value"><xsl:value-of select="@GLA"/></td>
            <td class="subtotal"><xsl:value-of select="@GL"/></td>
            <td class="value"><xsl:value-of select="@DS"/></td>
            <td class="value"><xsl:value-of select="@NHV"/></td>
            <td class="value"><xsl:value-of select="@NPU"/></td>
            <td class="subtotal"><xsl:value-of select="@NHU"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
        <tfoot>
          <tr>
            <td class="name" colspan="2">Total<xsl:value-of select="Total"/></td>
            <td class="value"><xsl:value-of select="sum(File/@FLOC)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@SLOC)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@CLOC)"/></td>
            <td class="subtotal"><xsl:value-of select="sum(File/@NHG)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@GLS)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@GLL)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@GLC)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@GLA)"/></td>
            <td class="subtotal"><xsl:value-of select="sum(File/@GL)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@DS)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@NHV)"/></td>
            <td class="value"><xsl:value-of select="sum(File/@NPU)"/></td>
            <td class="subtotal"><xsl:value-of select="sum(File/@NHU)"/></td>
          </tr>
        </tfoot>
      </table>
      
      <h4>Métricas CC[X], H[X], NOP y MI por fichero PsiVisual</h4>
      <table width="100%">
        <thead>
          <tr>
            <th>Etiqueta</th>
            <th style="width: 6%" class="cssToolTip">CNA<span>Número de complejidad ciclomática acumulada</span></th>
            <th style="width: 6%" class="cssToolTip">CND<span>Densidad de complejidad ciclomática</span></th>
            <th style="width: 6%" class="cssToolTip">CNN<span>Número de complejidad ciclomática</span></th>
            <th style="width: 6%" class="cssToolTip">EM<span>Esfuerzo promedio de implementación</span></th>
            <th style="width: 6%" class="cssToolTip">MLOC<span>Número de líneas promedio</span></th>
            <th style="width: 6%" class="cssToolTip">NOP<span>Promedio de parámetros</span></th>
            <th style="width: 6%" class="cssToolTip">MI<span>Indice de matenibilidad</span></th>
            <th style="width: 6%" class="cssToolTip">HN<span>Duración del programa</span></th>
            <th style="width: 6%" class="cssToolTip">Hn<span>Tamaño del vocabulario</span></th>
            <th style="width: 6%" class="cssToolTip">HV<span>Volumen acumulado</span></th>
            <th style="width: 6%" class="cssToolTip">HD<span>Nivel de dificultad</span></th>
            <th style="width: 6%" class="cssToolTip">HE<span>Esfuerzo de implementación</span></th>
            <th style="width: 6%" class="cssToolTip">HT(h)<span>Tiempo de implementación (horas)</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="File[@body=1]">
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
            <td class="value"><xsl:value-of select="format-number(@HT, '#0.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
  </xsl:template>
  
  <xsl:template match="File">
    <tr>
      <td class="name"><xsl:value-of select="@key"/></td>
      <td class="name"><xsl:value-of select="@language"/></td>
      <td class="value"><xsl:value-of select="@LOC"/></td>
      <td class="value"><xsl:value-of select="@LJS"/></td>
      <td class="value"><xsl:value-of select="@CLOC"/></td>
      <td class="value"><xsl:value-of select="format-number(@cyclomatic, '#.0')"/></td>
      <td class="value"><xsl:value-of select="format-number(@cyclomaticDensity, '#.0')"/></td>
      <td class="value"><xsl:value-of select="format-number(@maintainability, '#')"/></td>
      <td class="value"><xsl:value-of select="format-number(@params, '#.0')"/></td>
      <td class="value"><xsl:value-of select="format-number(@effort, '#')"/></td>
      <td class="value"><xsl:value-of select="format-number(@halstead-vocabulary, '#')"/></td>
      <td class="value"><xsl:value-of select="format-number(@halstead-difficulty, '#')"/></td>
      <td class="value"><xsl:value-of select="format-number(@halstead-volume, '#')"/></td>
      <td class="value"><xsl:value-of select="format-number(@halstead-bugs, '#.0')"/></td>
      <td class="value"><xsl:value-of select="format-number(@halstead-time, '#')"/></td>
    </tr>
  </xsl:template>
  
 

  <xsl:template match="Tools">
    <div class="project">
      <h2>Herramientas Psi</h2>
      <h3>Número de Herramientas Psi</h3>
      <div id="gtpsi" style="min-width: 800px; height: 300px;  margin: 0 auto;"></div>
      <script type="text/javascript">
        $('#gtpsi').highcharts(PsiData.var["metrics.graph.tools"]);
      </script>
      <div id="pupsi" style="min-width: 800px;  height: 300px;  margin: 0 auto;"></div>
      <script type="text/javascript">
        $('#pupsi').highcharts(PsiData.var["metrics.visual.pu"]);
      </script>

      <table width="100%">
        <tr>
          <td style="width:50%; background-color: #FFF;">
            <div id="vnpe" style="min-width: 400px;  height: 300px; margin: 0 auto"></div>
            <script type="text/javascript">
              $('#vnpe').highcharts(PsiData.var["metrics.visual.npe"]);
            </script>
          </td>
          <td  style="width:50%; background-color: #FFF;">
            <div id="vtotal" style="min-width: 400px;  height: 300px; margin: 0 auto"></div>
            <script type="text/javascript">
              $('#vtotal').highcharts(PsiData.var["metrics.visual.total"]);
            </script>
          </td>
        </tr>
      </table>
            
    </div>
  </xsl:template>

  
  <xsl:template match="ToolsMetrics">
    <div class="project">
      <h3>Métricas de Herramientas Psi</h3>
      
      <table width="100%">
        <thead>
          <tr>
            <th>Herramienta Psi</th>
            <th style="width: 6%" class="cssToolTip">CNA<span>Número de complejidad ciclomática acumulada</span></th>
            <th style="width: 6%" class="cssToolTip">CND<span>Densidad de complejidad ciclomática</span></th>
            <th style="width: 6%" class="cssToolTip">CNN<span>Número de complejidad ciclomática</span></th>
            <th style="width: 6%" class="cssToolTip">EM<span>Esfuerzo promedio de implementación</span></th>
            <th style="width: 6%" class="cssToolTip">MLOC<span>Número de líneas promedio</span></th>
            <th style="width: 6%" class="cssToolTip">NOP<span>Promedio de parámetros</span></th>
            <th style="width: 6%" class="cssToolTip">MI<span>Indice de matenibilidad</span></th>
            <th style="width: 6%" class="cssToolTip">HN<span>Duración del programa</span></th>
            <th style="width: 6%" class="cssToolTip">Hn<span>Tamaño del vocabulario</span></th>
            <th style="width: 6%" class="cssToolTip">HV<span>Volumen acumulado</span></th>
            <th style="width: 6%" class="cssToolTip">HD<span>Nivel de dificultad</span></th>
            <th style="width: 6%" class="cssToolTip">HE<span>Esfuerzo de implementación</span></th>
            <th style="width: 6%" class="cssToolTip">HT(h)<span>Tiempo de implementación (horas)</span></th>
            <th style="width: 6%" class="cssToolTip">HB<span>Número de errores estimado</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="ToolMetric">
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
            <td class="value"><xsl:value-of select="format-number(@HT, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HB, '#0.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
      </table>  
    </div>
  </xsl:template>

</xsl:stylesheet>
