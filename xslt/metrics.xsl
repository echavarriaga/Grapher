<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="no"/>

  
  <xsl:template match="/MetricsPsi">
    <div class="metrics-psi">
      <xsl:apply-templates select="Project"/>
      <xsl:apply-templates select="Components"/>
      <xsl:apply-templates select="Classes"/>
    </div>
  </xsl:template>

  <xsl:template match="Project">
    <div class="project">
      <h2>Proyecto</h2>
      <h4>Métricas de Proyecto</h4>
      <table width="100%">
        <thead>
          <tr>
            <th>Nombre</th>
            <th style="width: 5%" class="cssToolTip">CNN<span>Número de complejidad ciclomática</span></th>
            <th style="width: 5%" class="cssToolTip">CNA<span>Número de complejidad ciclomática acumulada</span></th>
            <th style="width: 5%" class="cssToolTip">CND<span>Densidad de complejidad ciclomática</span></th>
            <th style="width: 5%" class="cssToolTip">MI<span>Indice de matenibilidad</span></th>
            <th style="width: 5%" class="cssToolTip">NOP<span>Promedio de parámetros</span></th>
            <th style="width: 5%" class="cssToolTip">HMEM<span>Esfuerzo promedio</span></th>
            <th style="width: 5%" class="cssToolTip">HMLA<span>Tamaño acumulado del vocabulario</span></th>
            <th style="width: 5%" class="cssToolTip">HMDA<span>Dificultad acumulada de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HMVA<span>Volumen acumulado de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HMBA<span>Porcentaje de error acumulado de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HMTA<span>Tiempo de Halstead (seg.)</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="Metrics">
          <tr>
            <td class="name"><xsl:value-of select="@key"/></td>
            <td class="value"><xsl:value-of select="format-number(@CNN, '#.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@CNA, '#.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@CND, '#.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@MI, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@NOP, '#.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMEM, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMLA, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMDA, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMVA, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMBA, '#.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMTA, '#.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
      </table>

      <table width="100%">
        <tr>
          <td style="width:40%; background-color: #FFF;">
            <div id="gloc" style="min-width: 200px; height: 300px; max-width: 400px; margin: 0 auto"></div>
            <script type="text/javascript">
              $('#gloc').highcharts(PsiData.var["code.graph.lines"]);
            </script>
          </td>
          <td  style="width:60%; background-color: #FFF;">
            <div id="gnpe" style="min-width: 200px; height: 300px; max-width: 400px; margin: 0 auto"></div>
            <script type="text/javascript">
              $('#gnpe').highcharts(PsiData.var["code.graph.npe"]);
            </script>
          </td>
        </tr>
      </table>
      
      <table width="100%">
        <thead>
          <tr>
            <th>Elemento de programación</th>
            <th>Etiqueta</th>
            <th style="width: 5%" class="cssToolTip">SLOC<span>Número líneas de código</span></th>
            <th style="width: 5%" class="cssToolTip">CLOC<span>Líneas de comentarios código en líneas JavaScript</span></th>
            <th style="width: 5%" class="cssToolTip">CNN<span>Número de complejidad ciclomática</span></th>
            <th style="width: 5%" class="cssToolTip">NOP<span>Promedio de parámetros</span></th>
            <th style="width: 5%" class="cssToolTip">HMLM<span>Tamaño de vocabulario</span></th>
            <th style="width: 5%" class="cssToolTip">HMDM<span>Dificultad promedio de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HMVM<span>Volumen promedio de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HMBM<span>Porcentaje promedio de error de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HMPM<span>Fuerza promedio de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HMTM<span>Tiempo de Halstead (Horas)</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="Consolide">
          <tr>
            <td class="name"><xsl:value-of select="@name"/></td>
            <td class="name"><xsl:value-of select="@tag"/></td>
            <td class="value"><xsl:value-of select="@SLOC"/></td>
            <td class="value"><xsl:value-of select="@CLOC"/></td>
            <td class="value"><xsl:value-of select="format-number(@CNN, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@NOP, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMLM, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMDM, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMVM, '#0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMBM, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMEM, '#0.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMTM, '#0.0')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
  </xsl:template>

  <xsl:template match="Components">
    <div class="components">
      <h2>Componentes</h2>
      <h4>Métricas de Componentes</h4>
      <div id="gcomponents" style="min-width: 300px; height: 320px; max-width: 800px; margin: 0 auto"></div>
      <script type="text/javascript">
        $('#gcomponents').highcharts(PsiData.var["code.graph.components"]);
      </script>
      <table width="100%">
        <thead>
          <tr>
            <th>Componente</th>
            <th style="width: 5%" class="cssToolTip">CNN<span>Número de complejidad ciclomática</span></th>
            <th style="width: 5%" class="cssToolTip">PC<span>Promedio de parámetros</span></th>
            <th style="width: 5%" class="cssToolTip">HS<span>Vocabulario promedio de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HD<span>Dificultad promedio de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HV<span>Volumen promedio de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HB<span>Error de error de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HP<span>Esfuerzo promedio de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HT<span>Tiempo de Halstead</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="Component/Metrics">
          <tr>
            <td class="name"><xsl:value-of select="../@name"/></td>
            <td class="value"><xsl:value-of select="format-number(@CNN, '#.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@NOP, '#.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMLM, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMDM, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMVM, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMBM, '#.0')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMLM, '#')"/></td>
            <td class="value"><xsl:value-of select="format-number(@HMTM, '#')"/></td>
          </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
  </xsl:template>

  
  <xsl:template match="Classes">
    <div class="clases">
      <h2>Lista de clases</h2>
      <table width="100%">
        <thead>
          <tr>
            <th style="width: 5%">Clase</th>
            <th style="width: 5%" class="cssToolTip">CSZ<span>Tamaño de la clase (NOP+NOM)</span></th>
            <th style="width: 5%" class="cssToolTip">NOP<span>Número de propiedades de la clase</span></th>
            <th style="width: 5%" class="cssToolTip">NOM<span>Número de métodos de la clase (incluidos métodos estáticos y eventos)</span></th>
            <th style="width: 5%" class="cssToolTip">LOC<span>Número líneas de código</span></th>
            <th style="width: 5%" class="cssToolTip">CLOC<span>Líneas de comentarios código en líneas JavaScript</span></th>
            <th style="width: 5%" class="cssToolTip">CCN<span>Número de complejidad ciclomática</span></th>
            <th style="width: 5%" class="cssToolTip">CCD<span>Densidad de complejidad ciclomática</span></th>
            <th style="width: 5%" class="cssToolTip">PC<span>Promedio de parámetros</span></th>
            <th style="width: 5%" class="cssToolTip">HS<span>(Halstead Vocabulary Size) Tamaño de vocabulario de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HD<span>(Halstead Difficulty) Dificultad de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HV<span>(Halstead Volume) Volumen de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HB<span>(Halstead Bugs) Porcentaje de error de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HP<span>(Halstead Effort) Potencial/Esfuerzo de Halstead</span></th>
            <th style="width: 5%" class="cssToolTip">HT<span>(Halstead Time) Tiempo de Halstead</span></th>
          </tr>
        </thead>
        <tbody>
          <xsl:apply-templates select="Class"/>
        </tbody>
      </table>
    </div>
  </xsl:template>

  <xsl:template match="Class">
    <tr>
      <td class="name"><xsl:value-of select="@name"/></td>
      <td class="value"><xsl:value-of select="@NPECZ"/></td>
      <td class="value"><xsl:value-of select="@NPECP"/></td>
      <td class="value"><xsl:value-of select="@NPECM"/></td>
      <xsl:if test="count(Metrics/@*)>0">
      <td class="value"><xsl:value-of select="Metrics/@SLOC"/></td>
      <td class="value"><xsl:value-of select="Metrics/@CLOC"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@cyclomatic, '#0.0')"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@cyclomaticDensity, '#0.0')"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@params, '#0.0')"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@halstead-vocabulary, '#0')"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@halstead-difficulty, '#0')"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@halstead-volume, '#0')"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@halstead-bugs, '#0.0')"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@halstead-effort, '#0')"/></td>
      <td class="value"><xsl:value-of select="format-number(Metrics/@halstead-time, '#0.0')"/></td>
      </xsl:if>
    </tr>
  </xsl:template>

</xsl:stylesheet>
