import {Car} from "../car";


export class CarsService {

getCarList(): Car[] {
  let carList = <Car[]>JSON.parse(`
    [{"carModel":"Impala","carMaker":"Chevrolet","carModelYear":1995,"carVIN":"2C4JDGAG0CR304646"},
      {"carModel":"Grand Caravan","carMaker":"Dodge","carModelYear":2011,"carVIN":"JH4KB16658C369241"},
      {"carModel":"Murano","carMaker":"Nissan","carModelYear":2010,"carVIN":"KMHEC4A42FA407855"},
      {"carModel":"Savana 1500","carMaker":"GMC","carModelYear":1999,"carVIN":"1FTEW1C87AK548723"},
      {"carModel":"ES","carMaker":"Lexus","carModelYear":2008,"carVIN":"2G4WD582571602338"},
      {"carModel":"Express 3500","carMaker":"Chevrolet","carModelYear":2010,"carVIN":"WAUVVAFR1BA558789"},
      {"carModel":"Sienna","carMaker":"Toyota","carModelYear":2008,"carVIN":"3C3CFFER9FT888074"},
      {"carModel":"Camaro","carMaker":"Chevrolet","carModelYear":2002,"carVIN":"3D4PG4FB9BT971680"},
      {"carModel":"Phantom","carMaker":"Rolls-Royce","carModelYear":2007,"carVIN":"4T1BF3EKXAU507951"},
      {"carModel":"Continental","carMaker":"Lincoln","carModelYear":1989,"carVIN":"1YVHZ8BH7D5315049"},
      {"carModel":"C70","carMaker":"Volvo","carModelYear":2008,"carVIN":"1D7RW2BK8BS613710"},
      {"carModel":"Marquis","carMaker":"Mercury","carModelYear":1984,"carVIN":"1GYS3KEF8BR148835"},
      {"carModel":"530","carMaker":"BMW","carModelYear":2004,"carVIN":"JN8AS5MT4DW293909"},
      {"carModel":"Express 2500","carMaker":"Chevrolet","carModelYear":2010,"carVIN":"WAUDF78E96A499163"},
      {"carModel":"Probe","carMaker":"Ford","carModelYear":1989,"carVIN":"WAUEF48H37K379450"},
      {"carModel":"911","carMaker":"Porsche","carModelYear":1994,"carVIN":"5J8TB18218A456549"},
      {"carModel":"Metro","carMaker":"Chevrolet","carModelYear":1999,"carVIN":"KMHCT4AE3EU217723"},
      {"carModel":"LS","carMaker":"Lexus","carModelYear":2007,"carVIN":"WBAGL63463D268116"},
      {"carModel":"Diablo","carMaker":"Lamborghini","carModelYear":1992,"carVIN":"2G4GS5EV3C9180574"},
      {"carModel":"Hombre Space","carMaker":"Isuzu","carModelYear":1999,"carVIN":"WAUML54B64N186795"},
      {"carModel":"Altima","carMaker":"Nissan","carModelYear":2012,"carVIN":"2C3CDYCJ0CH899953"},
      {"carModel":"M3","carMaker":"BMW","carModelYear":2006,"carVIN":"JHMZF1D67ES834545"},
      {"carModel":"Tiburon","carMaker":"Hyundai","carModelYear":2005,"carVIN":"WAUMGAFL5CA308314"},
      {"carModel":"Arnage","carMaker":"Bentley","carModelYear":2005,"carVIN":"2C3CDZAT2FH515606"},
      {"carModel":"Caprice","carMaker":"Chevrolet","carModelYear":1977,"carVIN":"2G4WC532151057407"},
      {"carModel":"Avalon","carMaker":"Toyota","carModelYear":1998,"carVIN":"2HNYD18452H317964"},
      {"carModel":"626","carMaker":"Mazda","carModelYear":1984,"carVIN":"WP0AA2A88FK944059"},
      {"carModel":"Escalade ESV","carMaker":"Cadillac","carModelYear":2008,"carVIN":"4USFE43517L836817"},
      {"carModel":"Ram 1500","carMaker":"Dodge","carModelYear":2000,"carVIN":"KMHGC4DD7DU489436"},
      {"carModel":"Tiburon","carMaker":"Hyundai","carModelYear":1999,"carVIN":"5N1AR2MM8EC393993"},
      {"carModel":"Prowler","carMaker":"Chrysler","carModelYear":2002,"carVIN":"4F2CY0C7XAK297377"},
      {"carModel":"Justy","carMaker":"Subaru","carModelYear":1994,"carVIN":"WAUUL58E75A979522"},
      {"carModel":"Summit","carMaker":"Eagle","carModelYear":1994,"carVIN":"5NPDH4AEXDH050232"},
      {"carModel":"Accent","carMaker":"Hyundai","carModelYear":2013,"carVIN":"1GYS3BEF9DR658386"},
      {"carModel":"FCX Clarity","carMaker":"Honda","carModelYear":2012,"carVIN":"WAUUL78E28A767661"},
      {"carModel":"S4","carMaker":"Audi","carModelYear":2007,"carVIN":"WBAFR7C55CD610177"},
      {"carModel":"Acclaim","carMaker":"Plymouth","carModelYear":1992,"carVIN":"ZFF75VFA3F0321019"},
      {"carModel":"Passat","carMaker":"Volkswagen","carModelYear":1998,"carVIN":"WVGAV7AXXAW060758"},
      {"carModel":"LR2","carMaker":"Land Rover","carModelYear":2008,"carVIN":"TRUUT28NX51282644"},
      {"carModel":"Yukon XL 2500","carMaker":"GMC","carModelYear":2000,"carVIN":"2V4RW3DGXBR796141"},
      {"carModel":"Expedition","carMaker":"Ford","carModelYear":2009,"carVIN":"WBAYE0C51DD527455"},
      {"carModel":"del Sol","carMaker":"Honda","carModelYear":1994,"carVIN":"2B3CK5CT3AH852190"},
      {"carModel":"Town & Country","carMaker":"Chrysler","carModelYear":1998,"carVIN":"2C3CCAHG6CH317863"},
      {"carModel":"Rally Wagon 3500","carMaker":"GMC","carModelYear":1993,"carVIN":"1C3CCBBB3EN707896"},
      {"carModel":"Stratus","carMaker":"Dodge","carModelYear":1999,"carVIN":"4T1BF3EKXBU775707"},
      {"carModel":"Lumina","carMaker":"Chevrolet","carModelYear":1993,"carVIN":"3D4PG9FG6BT792232"},
      {"carModel":"G-Series 1500","carMaker":"Chevrolet","carModelYear":1998,"carVIN":"SALSF2D42DA268332"},
      {"carModel":"Sequoia","carMaker":"Toyota","carModelYear":2001,"carVIN":"WP0CB2A8XCS764485"},
      {"carModel":"Sportage","carMaker":"Kia","carModelYear":2000,"carVIN":"19VDE3F79EE324497"},
      {"carModel":"Matrix","carMaker":"Toyota","carModelYear":2009,"carVIN":"5N1AN0NU5FN365539"}]
  `);
  return  carList;
}




}
