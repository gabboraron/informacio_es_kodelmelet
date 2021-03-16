# Információ és kódelmélet

**Követelmények:**
- 2 zh 25 pt a max
- beadandó (15pt) és annak prezentálása (5 perc) 
  - elmúlt max 3 évben publikált technika alkalmazaása
  - néhány oldalas esszé, 2-10 oldal, forrás megjelöléssel
  - kódelmélet/titkosítás/tömörítés technika
- félévközi kis házi feladatok (35pt)

## EA1
**Kódok**
- Speciális jelentéssel bíró szavak, betűk, színek,  jelek
- Nem minden kód titkos. 
- A napi gyakorlatban a kódokat gyors és könnyű üzenetküldésre használjuk (szemafor, Morse-kód, térkép kódok, bináris kódok,…)

**A kriptológia** a rejtett, vagy titkos kommunikáció tudománya és felöleli mindazokat a módszereket, amelyekkel olyan üzeneteket lehet készíteni, amit csak az arra jogosultak tudnak megfejteni.

> A **kódoláselmélet** olyan algoritmusok keresésének a tudománya, amelyekkel a digitális információt hatékonyan kódolhatjuk zajos csatornákon történő megbízható átvitelhez. *nem feltétlen titkosítás!*
> 
> Az **információelmélet** az üzenetek adásának és vételének (kommunikációnak) matematikai elmélete.

> ### Története
> - **1837: S. Morse** elektromos távirója és kódja
> - **1875: E. Baudot** jeltovábbítója és kódja
> - **1924, 1928: H. Nyquist és R. Hartley** munkái a kommunikációs csatornákról és az átviteli sebességről, American Telephone and Telegraph Company-Bell laboratórium
> - **1947-1948:** Az információelmélet születése: **C. Shannon** forráskódolási és csatornakapacitási tételei.

![shannon féle hírközlési rendszerek sémája](https://regi.tankonyvtar.hu/hu/tartalom/tamop425/0005_20_informacioelmelet_scorm_03/20_k05.jpg)

> Shannon szerint az **optimális csatorna felhasználási kapacitás**t a Shanon kóddal adhatjuk meg ami az üzenetben nézi a szavak eloszlását és rövidebb szóhoz/betűhöz rövidebb kódot ad hosszabbhoz, hosszabbat, hogy a végeredmény egyenletes legyen.

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
- **Zajmentes csatorna:** ideális, a jeleket nem torzítja, a kimeneti kódjel mindig ugyanaz mint a bemeneti
- **Zajos csatorna:** a jeleket torzít(hat)ja
- **Bináris csatorna:** kétféle kódjel továbbítható rajta
- **Kódoló:** a közleményt átalakítja a csatornán való továbbításhoz (kódolás)
- **Kódközlemény:** az eredeti közlemény kódolt alakja, a csatornaábécé "betűiből" álló véges sorozatok
- **Dekódoló:** a csatorna kimeneti oldalán vett (kód)közlemény megfejtése (dekódolás)
- **Kódolási eljárás:** olyan "utasítás„/algoritmus, amely minden lehetséges közleményhez hozzárendel egy kódjelekből álló sorozatot, az illető közlemény kódközleményét

**Lehetséges kódolási eljárások:** 
- betűnként, blokkokként, 
- információ veszteség nélkül, információ veszteséggel

**Lehetséges kódtípusok:** 
- változó hosszúságú *Példa: Morse-kód*
- fix hosszúságú (blokk) kód.
  - *Példák:*
    - Baudot-kód (5 bites blokkok),
    - ASCII kód (8 bites blokkok),
    - ISBN kód (10 jel hosszú blokkok)

> **Definíció: Egy kód blokk kód, ha a kódok a csatornaábécé fix hosszúságú sorozataiból állnak.**

### Tételek
http://zeus.nyf.hu/~falu/kod/k.pdf, fájlként: https://github.com/gabboraron/informacio_es_kodelmelet/blob/main/kodelmelet.pdf

> Az *A1, A2,..., An* nemüres halmazok Descartes vagy direkt szorzatán az X[i=1 → n] *Ai = A1 x A2 x ... x An* = {(a1, a2, ..., an) | a1∈*A1*, a2∈*A2*, ..., an∈*An*} halmazt értjük.
> 
> Legyen továbbá *A ≠ ∅, A^n* = A x A x ... x A *(n-szer A)* = A^+ = ∪A^n | n>=1.
> 
> *Tetszőleges Σ ≠ ∅ halmazt ábécének nevezzük. A Σ ábécé elemeit a Σ betűinek (szimbólumainak) nevezzük.* Példa: Σbool = {0,1}, a Boole ábécé; Σlat = {a,b,c,...,z} a latin ábécé.
> 
> **Def:** *A Σ ábécé jeleinek tetszőleges véges sorozatát **Σ  feletti szó**nak nevezzük. A *w* szó, |*w*| hossza a *w*-ben lévő jelek száma.* A *w* = x1x2...xn szó hossza: |*w*| = n. A *w* szót felfoghatjuk a Σn halmazz egy (x1, x2, ..., xn) elemeinek is amelyből a zárójeleket és az elválasztójeleket elhagyjuk.
> 
> **Def:** *Σ+ a Σ ábécéből képzett **összes szó** halmaza.* A továbbiakban jelöljön Σx = {x1, x2, ..., xd} egy forrásábécét Σy = {y1, y2, ..., yr} pedig egy csatornaábécét!
> 
> **Betűnkénti vagy szimbólum kód:** *A K: Σx → Σy+ leképezést kódnak nevezzük, a K(x) az x ∈ Σx-hez tartozó kódszó, l(x) a K(x) kódszó hossza, Li = l(xi).* Állandó *n* hosszúságú kód esetén *K* valójában K:Σx → Σy*n* típusú leképezés, ahol *n* az állandó (blokk) kódhossz. A kódot szokás  a K={K*1*, K*2*,...K*d*} lakban is megadni, ahol a *Ki* ∈ Σy*n* az *xi* ∈ Σx szimbólumhoz rendelt kódszó.
> 
> **Kiterjesztett *K+* kód:** *Az K+: Σx+ → Σy+ leképzeést a K kód kiterjesztésének nevezzzük, ha K+(xi1xi2...xiN) = K(xi1)K(xi2)...K(xiN). Gyakorlatban a K+ jelölés helyett a K(xi1xi2...xiN) = K(xi1)K(xi2)...K(xiN)-t használjuk.*
> 
> **Def:** *Egy K: Σx+ → Σy+ kódot **nemszinguláris**nak nevezünk, ha minden x,x' ∈ Σx, x ≠ x' esetén K(x) ≠ K(x') is teljesül. A nemszingularitás elég egy kódjel egyértelmű azonosításához, de nem elég egy üzenet azonosításához.* 
> 
> **szinguláris kód**: minden ábécéhez ugyanazt rendeljük
> 
> **Def:** *Egy K: Σx+ → Σy+ kód **egyértelműen dekódolható**, ha Σx+ különböző elemeit (üzeneteket) különböző karaktersorozatba képezi, azaz* `∀x,y ∈ Σx+, x≠y ⇒ K+(x) ≠ K+(y)`. ***Azaz K+ invertálható.*** Zajmentes csatorna esetében az egyértelmű dekódolhatóság biztosítja az információ hű átvitelét.
> 
> **Def:** Egy kódot **prefix**nek nevezünk, ha egyetlen kódszó sem valódi szelete egy másiknak. **Minden prefix kód egyértelműen dekódolható.**
> **Biz:** Tfh két *Ki1Ki2...Kin* és *Kj1Kj2...Kjm* jelsorozat megegyezik, azaz `Ki1Ki2...Kin = Kj1Kj2...Kjm`. Igazoljuk, hogy *Ki1 = Kji*. Ha *Li1 = Lj1* akkor a két közlemény jelenkénti egyenlősége és a kódszavak különbözősége miatt meg kell, hogy egyezzenek. Ha az egyik kódszó hosszabb volna a  másiknál, akkor  az szükségképpen a másikfolytatása. De ez a prefx tulajdonság miatt nem lehetséges. Tehát *Ki1 = Kj1*. A gondolatmenetet í]y folytatva kapjuk, hogy a *Kil = Kjl (l>1)* és *m=n*.

| Σx   | *a* - szinguláris  | *b* - nem szinguláris nem egyértelműen felírható prefixkód  |  *g* - egyértelműen dekódolható, de nem prefix | *d*- prefix kód, egyiknek sem folytatása a másik kód, és egyértelműen dekódolható| *o* - egyenlő hosszúságú kódokat is hozzá lehet tenni, *mivel négy jelet kódolok ezért a kódhozz 2*| 
| ---- |:------------------:| -----:| -----:| -----:| -----:|
| 1    | 0                  | 0     |   10  |  0    |  00   |
| 2    | 0                  |  010  |   00  | 10    |  01   |
| 3    | 0                  |    01 |   11  | 110   |  10   |
| 4    | 0                  |    10 |   110 | 111   |  11   |


**Változó hosszúságú betűnkénti kódoláshoz** minden egyes jelet megszorzunk a jel gyakoriságával és ezek összegét vesszük.


**információ mennyiség**: keresett jel gyakorisága/(összes jel gyakoriságának összege, ez *m*

*m* számú azonos valségű esemény közül egy megnevezésével nyert információ `I = log2*m*`

## EA2
Huffamnn kódolás: https://hu.wikipedia.org/wiki/Huffman-k%C3%B3dol%C3%A1s

## EA3 - elmaradt

## EA4

- [Shannon-Fano kód](https://regi.tankonyvtar.hu/hu/tartalom/tamop425/0046_informacio_es_kodelmelet/ch04s04.html): hivatalos jegyzetben: http://siva.bgk.uni-obuda.hu/~laufer/bevinfo_tankonyv/Informatika%20alapjai%20jegyzet.pdf
  - [Kutor féle részlet](http://uni-obuda.hu/users/kutor/IRA%202014/IRA%202014-7.pdf)
- [Gilbert-Moore kód](https://gyires.inf.unideb.hu/KMITT/c07/ch04s05.html)
- [Huffman-kódolás](https://hu.wikipedia.org/wiki/Huffman-k%C3%B3dol%C3%A1s)
  - https://people.ok.ubc.ca/ylucet/DS/Huffman.html
-  




