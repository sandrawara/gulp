# Gulp 
## Automatiserings-process
<p>Att använda automatiserings-process gör att man sparar väldigt mycket tid. 
Ändringar som görs eller att komprimera en bild behöver man inte 
göra manuellt utan görs automatiskt.</p>

### Följande paket har används
..* Gulp imagemin 
..* Gulp compress 
..* Gulp sass 
..* Gulp concat 
..* Gulp uglify 
..* Gulp livereload - automatiserar och kollar efter ändringar i webbläsaren

### Användning
<p> För att starta igång behöver man installera gulp globalt npm install --save gulp-install 
eller lokalt npm install --save-dev gulp-install. Man behöver dock har det installerat lokalt för att 
kunna köra det globalt. Att installera lokalt är dock att föredra. Därefter bör man installera de 
paket man ska använda och vidare skapa tasks eller funktioner.</p>

..* gulp copyHtml - överför html-kod från src till dist(den publika mappen).
..* gulp imageMin - Kompremerar bilder.
..* gulp sass - Omvandlar sass till css och komprimerar css-filen.
..* gulp compress - Kompremerar js-filer.
..* gulp scripts - slår ihop js-filer och komprimerar (uglify) koden.
..* gulp watch - automatiserar ändringar.
..* gulp - skapat en array som genomför alla tasks utan att aktivera watch.


