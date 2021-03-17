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
> **Változó hosszúságú betűnkénti kódoláshoz** minden egyes jelet megszorzunk a jel gyakoriságával és ezek összegét vesszük.
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

### Gazdaságosság
> Tekintsük először az **állandó hosszúságú betűnkénti kódolás** esetét bináris csatornaábécét és egyértelmű dekódolhatóságot feltétlezve. A kódjelek hosza *L*. Ekkor *N* jel hosszúságú közlemény továbbításának költésge *N L*-el arányos egy betű átlagos költsége peig `C=(1/N)NL = L`. Az *L* hosszúságú 0 - 1 sorozatok száma 2^L. A *d* betűhöz *2^L* különböző L bit hosszú bináris sorozat rendelhető. Egyértelműen dekódolható, ha `d<=2^L ⇔ log3 d <= L`. Tehát L = log3 d felülre kerkekítésével.
> 
> Állandó kódhosszúságú és egyértelműen dekódolható bináris kódlásnál az egy betűre eső költésg `log2`*`d`*-nél nem lehet kisebb: `log2`*`d`*`≤`*`C`*`<log2`*`d`*`+(1/n)` ha az egy betűre jutó költség *`C`*.
> 
> 
> **Változó betűnkénti kódhosszúság** esetén a gyakoribb jelnek hosszabb kódot adunk, a legrövidebb közleményt a legrövidebb módon szeretnénk tárolni. Ehhez minden jelhez kell annak a valószínűsége. Σx = {x1, x2, ..., xn} a forrásábécé, *pi* az *xi* előfordulásnak a valószínűsége. *Ki* az *xi* kódja, *Li* pedig *xi* kódjának hossza. A teljes hossz: `L = Σ [i=1 → d] NiLi` Az egy betűre eső átlagos kódhossz: `L' = L/N = Σ[i=1 → d](Ni*Li)/N`. Azaz az előforduló jelek relatív gyakoriságukkal megszorozva: `L(K) = Σ[i=1→d]Ni*pi`.

## EA2 - forráskódolás
- https://forgos.uni-eszterhazy.hu/wp-content/tananyagok/tarsesmedkomm_pc_exe/415_shannon_s_weaver_informcielmleti_hradstechnikai_modellje.html
- [információs rendszerek alapjai](https://people.inf.elte.hu/molnarba/IREAE%20_Informacios%20rendszerek%20elmeleti%20alapjai%20EA.%20(MSc%20Ir)/Eloadas_2015_ELTE/Eloadas_1/Inform%e1ci%f3elm%e9let.pdf), fájl: [Információelmélet - molnarba - ELTE.pdf](https://github.com/gabboraron/informacio_es_kodelmelet/blob/main/Inform%C3%A1ci%C3%B3elm%C3%A9let%20-%20molnarba%20-%20ELTE.pdf)

![shannon - kódoló](https://images.slideplayer.hu/9/2671866/slides/slide_7.jpg)![shannon-csatorna](https://images.slideplayer.hu/8/2274975/slides/slide_22.jpg)![shannon-dekódoló](https://images.slideplayer.hu/8/2274975/slides/slide_23.jpg)

### Információmennyiség
> **Információ** valamaly véges számú, előre ismert esemény közül annak megnevezése, hogy melyik következett be. Alternatív megfoglamazás: az infomráció mértéke azonos azzal a bizonytalansággal amelyet megszűntet.
> 
> *Felező algoritmus: mindig felezzük az intervallumot, és így kapjuk meg a keresett elemet, azaz 8 elemből 3 lpéssel kapjuk meg az elemet. Azaz 8=2^3 amiből 3 lépésben kaptuk meg, tehát kettes alapú logaritumst használva kapjuk meg a lépésszámot. Amennyiben nem kettővel osztható, úgy felső egész részét vehetjük a logaritmusnak.*
> 
> **Hartley:** *m* számmú azonos valósínűségű esemény közül egy megnevezésével nyert infomráció: `I=log2`*`m`*. (Azaz `log2`*`m`* kérdéssel azonosítható egy elem). Két esemény összevonsával 1 bittel lesz rövidebb, hiszen m/2 számú párból egy. Ez ugyanaz mint `I = -log1/m`
> 
> **Shannon:** *minél váratlanabb egy esemény bekövetkezése annál több infomrációt jelent, annál több bizonytalanságot kell kiküszöbölni.* Legyen *A={A1, A2, ..., Am}* esemény halmaz, *m* eseménnyel az *A1* esemény valószínűsége p1, ... az Am-é pm. Ekkor Ai megnvezésekor nyert irnformáció: `I(Ai) = log2`*`1/pi`*`=-log2`*`pi`*.
>
> **információ mennyiség**: 
> - keresett jel gyakorisága/(összes jel gyakoriságának összege, ez *m*
> - *m* számú azonos valségű esemény közül egy megnevezésével nyert információ `I = log2*m*`
>
> **normálás**: legyen `I(A)=1 ha p(A)=1/2=0,5`. Azaz, ha az infomráció mennyisége `1` akkor a hozzá tartozó valség `1/2`. Ekkor kettes alapú logaritmus használandó és az információmennyisége a ***bit***.`I(mi)=log(1/pi)`. Ha 10-es laapú logaritmust használunk akkkor *hartley*-nek nevezzük, ha természetes alapú logaritmust használunk akkor ***nat***.

*példa:* 
- a forrás lead egy üzentet amiben van 21 db `c`, 22 db`n`, 17 db`d`akkor az információtartalma, ha a következő betű `c`lesz úgy adható meg, hogy:
  - relatív gyakoriság:*`c`*` darabszáma/összes elem száma` azaz `p(c) = 21/(21+22+17) = 21/60 = 0,35`
  - hozzá tartozó infomráció mennyiség: `-log2`*`elem relatív gyakorisága`* azaz: `l(c) = -log2`*`0,35`*` = -ln0,35/ln2 = 1,51` 

> Csatorna kapacitás: adott csatornához a kapacitás- a bináris szimmetrikus csatornával való ekvivalencia alapján: Egységnyi idő alatt „átlag” ugyanannyi különböző jelsorozat vihető át, mint egy `C bit/sec` sebességű bináris csatornán. Ekkor a csatorna kapacitás `C`.
> 
> A forrás szimbólumok sorozatát választja, a választás bizonytalanságát jellemezzük az egy szimbólumra jutó átlagos mennyiséggel, ez lesz a **Shannon-entrópia**. Entrópia sázmoló: https://planetcalc.com/2476/
>
> Shannon egy véges sok jelből álló (véges ábécé feletti) **üzenet információértékét** az üzenet jeleinek mint a jelre jellemző valószínűséggel bekövetkező események információtartalmának „átlagos”, azaz várható értékeként határozta meg: ![shannon entrópia](https://wikimedia.org/api/rest_v1/media/math/render/svg/5130465a49650626ef8fec76f8ceebb1b5ec2fbc) azaz az `i`-edik jelhez tartozó információ mennyiségéevel kifejezve az entrópia az a jelnekénti infomráció valószínűség és az elem gyakoriságának szorzatának elemenként vett öszege: ![val vált entrópiája H(x)](https://wikimedia.org/api/rest_v1/media/math/render/svg/82ab20e6d90eea88d584baeff1712345f9a412e8). Az entrópia egy elem bizonytalanságának mértékével egyenlő. *"Ha két jel azonos értékkel rendelkezik akkor az azt jelzi, hogy nehéz megjósolni a következő elemet."*. 

**Entrópia tulajdonságai:**
1. Nem negatív:  `H( p1,p2,…,pm) ≥  0`, ha `pi = 1` akkor `H(x)=0`
2. Az események valószínűségeinek folytonos   függvénye. 
3. `H( p1,p2,…,pm, 0 )  =  H( p1,p2,…,pm)` 
4. Ha `pi= 1`, a többi  `pk = 0`, `( k=1, …, i−1, i+1 ,…, m)`, akkor  `H( p1,p2,…,pm) = 0`. 
5. `H( p1,p2,…,pm) ≤ H( 1/m,1/m, … 1/m )` Egyenlőség csak egyenletes eloszlásra, a legnagyobb  bizonytalanságú eloszlásra. 
6.`H(p1, …, pk−1,pℓ ,pk+1,…,pℓ−1,pk ,pℓ+1,…,pm)  = H( p1,p2,…,pm)`, `∀k, ℓ` ;   azaz az entrópia szimmetrikusváltozóinak cseréjére. 
7. szétválasztás: `H(p1,…,pn) = H(p1+p2,p3,…,pn)+(p1+p2)H(p1/(p1+p2), p2/(p1+p2))`.

> ***K* szimólum átlagos (várható) kódhossza:** `L(K) = Σp(xi)l(xi) | x∈Σx` Azaz ez a relatív gyakorisága az elemnek.
> 
> **teljes kódhossz:** `L(x) = nili + n2l2 + ... + ndld`
> 
> **átlagos kódhossz:** `L(x) = (nili + n2l2 + ... + ndld)/n`

![kódfa]https://slideplayer.hu/slide/13073258/79/images/8/K%C3%B3dfa+Olyan+bin%C3%A1ris+fa%2C+amely+csom%C3%B3pontjaihoz+vezet%C5%91+%C3%BAt+megfelel+a+k%C3%B3dszavaknak.+%28pl.+jobbra%3D0%2C+balra%3D1%29.jpg)

- rövid kódhoz a legnagoybb valséget rendeli
  - huffman kód viszafele halad

**Kraft-Fano egyenlőtlenség**: 4.30-as tétel: [Információ- és kódelmélet - Fegyverneki Sándor - Miskolc.pdf](https://github.com/gabboraron/informacio_es_kodelmelet/blob/main/Inform%C3%A1ci%C3%B3-%20%C3%A9s%20k%C3%B3delm%C3%A9let%20-%20Fegyverneki%20S%C3%A1ndor%20-%20Miskolc.pdf), vagy: https://www.uni-miskolc.hu/~matfs/INF_11_main_kep.pdf

**McMillan egyenlőtlenség:** akkor is fenn áll ha egyértelműen dekódolhatóak, nem csak a prefix kódra: *Ha a forrás ábécé: ![source alphabet](https://wikimedia.org/api/rest_v1/media/math/render/svg/46bc1766527df66cdb8fdff1f1a3770b60320878) és a kódolt szavak hossza rendre ![length](https://wikimedia.org/api/rest_v1/media/math/render/svg/7d75142eca874965147c8ec91de1ac7a48b02099), mikora kód `r` akkor ![Kraft-McMillan](https://wikimedia.org/api/rest_v1/media/math/render/svg/e9394af5e22e877c9075dcfdac035207424aaa35)*.

**Prefix kód alsó határa:**
- forrásábécé: `Σx = {x1, x2, ..., xd}`
- eloszlása: `Px = {p1, p2, ... pd}`
- csatornaábécé: `Σy = {y1, y2, ..., yd}`
- prefix kódja: `K = {K1, K2, .... Kd}` ahol `Ki` kódszó hossza `Li`
- ekkor: `L(K) = ΣLipi ≥ H(x)/log2`*`r`*`  | i=1..d` Azaz az átlagos kódhosssz nagyobb vagy egyenlő mint az entrópia, egyenlő, ha a kódhossz a kitevők számát adja.
- **Optimális forráskódhossz:** `Li = logr`*`(1/pi)`*

**Prefix kód felső határa:** `L(K) < (H(X)/log2`*`r`*`)+1`

**Kód hatásfoka:** `H(x)/(L(K)log2`*`r`*`)`

> **Huffamnn kódolás:** https://hu.wikipedia.org/wiki/Huffman-k%C3%B3dol%C3%A1s
> - prefix
> - optimális
> 
> ![huffmann kód](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Huffman_coding_visualisation.svg/768px-Huffman_coding_visualisation.svg.png) ![huffmann kódfa](https://upload.wikimedia.org/wikipedia/commons/d/d8/HuffmanCodeAlg.png)
>
> **Lépések:**
> - a két legkisebb valószínűségű elemet összevonjuk
> - ezt elvégezzük az összes elemre
> - újrarendezzük
> - ismétlejük
> - ...
> - amire származtattunk arra `0`-t adunk, amire nem arra `1`-et, ezt folytatjuk visszafele 
> 
> YT tutorial: https://www.youtube.com/watch?v=A6wEgIVEZL8
> 
> bővebben: [Algoritmusok es adatszerkezetek 2 javitott 2019.06.07.pdf](https://github.com/gabboraron/informacio_es_kodelmelet/blob/main/Algoritmusok%20es%20adatszerkezetek%202%20javitott%202019.06.07.pdf)

## EA3 - elmaradt

## EA4
- [Shannon-Fano kód](https://regi.tankonyvtar.hu/hu/tartalom/tamop425/0046_informacio_es_kodelmelet/ch04s04.html): hivatalos jegyzetben: http://siva.bgk.uni-obuda.hu/~laufer/bevinfo_tankonyv/Informatika%20alapjai%20jegyzet.pdf
  - [Kutor féle részlet](http://uni-obuda.hu/users/kutor/IRA%202014/IRA%202014-7.pdf)
- [Gilbert-Moore kód](https://gyires.inf.unideb.hu/KMITT/c07/ch04s05.html)
- [Huffman-kódolás](https://hu.wikipedia.org/wiki/Huffman-k%C3%B3dol%C3%A1s)
  - https://people.ok.ubc.ca/ylucet/DS/Huffman.html


## EA5

## EA6



 
