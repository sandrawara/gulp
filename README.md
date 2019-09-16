# Gulp 
## Automatiserings-process
<p>Att använda automatiserings-process gör att man sparar väldigt mycket tid. 
Ändringar som görs eller att komprimera en bild behöver man inte 
göra manuellt utan görs automatiskt.</p>

### Följande paket har används
<ul> 
<li>Gulp imagemin</li> 
<li>Gulp compress</li>  
<li>Gulp sass</li>  
<li>Gulp concat</li>  
<li>Gulp uglify</li>  
<li>Gulp livereload - automatiserar och kollar efter ändringar i webbläsaren</li> 
</ul>

### Användning
<p> För att starta igång behöver man installera gulp globalt npm install --save gulp-install 
eller lokalt npm install --save-dev gulp-install. Man behöver dock har det installerat lokalt för att 
kunna köra det globalt. Att installera lokalt är dock att föredra. Därefter bör man installera de 
paket man ska använda och vidare skapa tasks eller funktioner.</p>

<ul>
<li>gulp copyHtml - överför html-kod från src till dist(den publika mappen).</li> 
<li>gulp imageMin - Kompremerar bilder.</li> 
<li>gulp sass - Omvandlar sass till css och komprimerar css-filen.</li> 
<li>gulp compress - Kompremerar js-filer.
<li>gulp scripts - slår ihop js-filer och komprimerar (uglify) koden.</li> 
<li>gulp watch - automatiserar ändringar.</li> 
<li>gulp - skapat en array som genomför alla tasks utan att aktivera watch.</li> 
</ul>

