# információ és kódelmélet

**Követelmények:**
- 2 zh 25 pt a max
- beadandó (15pt) és annak prezentálása (5 perc) 
  - elmúlt max 3 évben publikált technika alkalmazaása
  - néhány oldalas esszé, 2-10 oldal, forrás megjelöléssel
  - kódelmélet/titkosítás/tömörítés technika
- félévközi kis házi feladatok (35pt)

## EA1
> optimálsi csatorna felhasználási kapacitást a Shanon kóddal adhatjuk meg ami az üzenetben nézi a szavak eloszlását és rövidebb szóhoz/betűhöz rövidebb kódot ad hosszabbhoz, hosszabbat, hogy a végeredmény egyenletes legyen

### Alapfogalmak:
- **információ**: véges számú ismert lehetséges alternatíva valamelyikének megnevezése. Azt vizsgáljuk, hogy mennyi "információ" kell egy tetszőleges elem azonosításához, ha az alternatívák lehetséges *A* halmaza adott.
  - **hír**: tudom mi a téma és azzal kapcsolatban várok új információt
- **Forrás:** az információt(közleményeket) szolgáltató objektum.
- **Forrásábécé**: véges jel halmaz (ábécé) *(pl a magyar/angol ábécé)*
- **közlemény:** a forrásábécé jeleiből álló véges jelsorozat
- **távközlési csatorna**: egynelő időközönként egymás után következő jelek vihetőek át rajta
- **csatornaábécé**: a gyatornán továbbítható kódjelek összessége *(csatornán továbbítható jel lehet pl 1/0)*
- **lehetséges kódtípusok:** változó hosszúságú/fix hosszúságú blokk kód
- **lehetséges kódolási eljárás**: betűnként/blokkonként,veszteséggel vagy a nélkül
példák: Morse kód, Ascii kód, isbn kód

**Változó hosszúságú betűnkénti kódoláshoz** minden egyes jelet megszorzunk a jel gyakoriságával és ezek összegét vesszük.


**információ mennyiség**: keresett jel gyakorisága/(összes jel gyakoriságának összege, ez *m*

*m* számú azonos valségű esemény közül egy megnevezésével nyert információ `I = log2*m*`

