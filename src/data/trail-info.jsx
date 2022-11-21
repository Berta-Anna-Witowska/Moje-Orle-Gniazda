const trail = [
  {
    ID: "01",
    name: `Szlak Orlich gniazd`,
    description:
      "Pierwszą propozycję utworzenia szlaku już w 1927 roku przedstawił na łamach czasopisma „Ziemia” Stanisław Leszczycki. W 1930 r. wytyczono i oznaczono kolorem czerwonym szlak biegnący z Krakowa przez Płaskowyż Ojcowski i Garb Tęczyński, a następnie powracający do Krakowa. Mimo swej malowniczości szlak został zapomniany, gdyż nie był w żaden sposób konserwowany i odnawiany. W 1948 r. kolejną próbę wytyczenia szlaku podjął Kazimierz Sosnowski – znany turysta i krajoznawca. Dwa lata później, w 1950 r., dzięki funduszom pozyskanym z Ministerstwa Komunikacji, szlak został ostatecznie wyznaczony, jako turystyczny szlak pieszy o długości 163,9 km, biegnący od Krakowa do Częstochowy. W kolejnych latach trasa szlaku była wielokrotnie korygowana, niewiele zmieniając pierwotny przebieg, a mając przede wszystkim na celu zwiększenie jego atrakcyjności. Swą poetycką nazwę szlak zawdzięcza ruinom i zamkom znajdującym się wzdłuż trasy, które budowane były najczęściej na szczytach wzniesień, pośród trudno dostępnych skał wapiennych, stąd wzięła się ich nazwa – „Orle Gniazda”. Oprócz zamków na szlaku można również podziwiać szereg innych atrakcji – zabytkowe budowle sakralne, wytwory przyrody, co czyni go niewątpliwie jednym z najbardziej malowniczych szlaków w Polsce. Dziś szlak biegnący przez prawie cały teren Wyżyny Krakowsko-Częstochowskiej to atrakcja nie tylko dla pieszych turystów. Dzięki stale rozwijającej się infrastrukturze oraz przybywającym z roku na rok atrakcjom to doskonałe miejsce dla turysty, który chce aktywnie spędzić czas. Tutaj ma możliwość jazdy po szlaku rowerem, wspinania się, zwiedzania jaskiń, może uprawiać nordic walking lub wybrać się na narty. Wszystko w otoczeniu niepowtarzalnie pięknego krajobrazu. Jest tu dobrze rozwinięta baza noclegowa i agroturystyczna. Szlak jest dobrze oznakowany, a wszelkie dodatkowe informacje można uzyskać w sieci punktów informacji turystycznej. W 2012 roku Szlak Orlich Gniazd, którym opiekuje się Związek Gmin Jurajskich, otrzymał Złoty Certyfikat Polskiej Organizacji Turystycznej stając się najlepszym produktem turystycznym Polski.",
    links: [
      "https://orlegniazda.pl/",
      "https://www.slaskie.travel/article/729663/szlak-orlich-gniazd--w-krainie-skal-i-zamkow",
      "https://pl.wikipedia.org/wiki/Szlak_Orlich_Gniazd",
    ],
  },
];

/**
 * Nieco później omówimy, czym jest Promise
 */
export default new Promise((resolve) => {
  setTimeout(() => {
    resolve(trail);
  }, Math.floor(Math.random() * 2000 + 3000));
});
