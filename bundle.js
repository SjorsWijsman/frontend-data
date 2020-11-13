'use strict';

// // Get gestolen personenauto's in 2019
// export const data = {}
// let index = 0;
// for (const i in rawData) {
//   if (i == 0) {
//     index = rawData[i].indexOf("gest19 Personenauto")
//   } else {
//     data[rawData[i][0]] = {"aantalGestolen": parseInt(rawData[i][index])}
//   }
// }

// // Get inwoners
// for (var i = 0; i < rawData.length; i += 2) {
//   if (data[rawData[i]]) {
//     data[rawData[i]].inwoners = parseInt(rawData[i+1].replace(".", ""))
//   }
// }

// // Get wagenpark
// for (const item of rawData) {
//   const splitItem = item.split("	").join(" ").split(" ")
//   const gemeente = splitItem.slice(0, splitItem.length-3).join(" ")
//   const jaar2017 = parseInt(splitItem[splitItem.length-1])
//   const jaar2018 = parseInt(splitItem[splitItem.length-2])
//   const jaar2019 = parseInt(splitItem[splitItem.length-3])
//   if (data[gemeente]) {
//     data[gemeente].wagenpark = jaar2019 || jaar2018 || jaar2017;
//   }
// }

const gestolen = {
  "Aa en Hunze": {
    "aantalGestolen": 0,
    "inwoners": 25390,
    "wagenpark": 14178
  },
  "Aalsmeer": {
    "aantalGestolen": 3,
    "inwoners": 31499,
    "wagenpark": 16547
  },
  "Aalten": {
    "aantalGestolen": 0,
    "inwoners": 26962,
    "wagenpark": 13696
  },
  "Achtkarspelen": {
    "aantalGestolen": 0,
    "inwoners": 27935,
    "wagenpark": 14393
  },
  "Alblasserdam": {
    "aantalGestolen": 2,
    "inwoners": 20014,
    "wagenpark": 8920
  },
  "Albrandswaard": {
    "aantalGestolen": 2,
    "inwoners": 25218,
    "wagenpark": 12199
  },
  "Alkmaar": {
    "aantalGestolen": 17,
    "inwoners": 108470,
    "wagenpark": 47756
  },
  "Almelo": {
    "aantalGestolen": 14,
    "inwoners": 72629,
    "wagenpark": 32894
  },
  "Almere": {
    "aantalGestolen": 56,
    "inwoners": 203990,
    "wagenpark": 243388
  },
  "Alphen aan den Rijn": {
    "aantalGestolen": 21,
    "inwoners": 109682,
    "wagenpark": 50254
  },
  "Alphen-Chaam": {
    "aantalGestolen": 1,
    "inwoners": 10083,
    "wagenpark": 5995
  },
  "Altena": {
    "aantalGestolen": 7,
    "inwoners": 54766,
    "wagenpark": 29363
  },
  "Ameland": {
    "aantalGestolen": 0,
    "inwoners": 3654,
    "wagenpark": 1762
  },
  "Amersfoort": {
    "aantalGestolen": 17,
    "inwoners": 155226,
    "wagenpark": 99583
  },
  "Amstelveen": {
    "aantalGestolen": 22,
    "inwoners": 89870,
    "wagenpark": 38235
  },
  "Amsterdam": {
    "aantalGestolen": 534,
    "inwoners": 854047,
    "wagenpark": 233715
  },
  "Apeldoorn": {
    "aantalGestolen": 29,
    "inwoners": 161156,
    "wagenpark": 79817
  },
  "Appingedam": {
    "aantalGestolen": 0,
    "inwoners": 11801,
    "wagenpark": 5406
  },
  "Arnhem": {
    "aantalGestolen": 47,
    "inwoners": 157223,
    "wagenpark": 63196
  },
  "Assen": {
    "aantalGestolen": 4,
    "inwoners": 67708,
    "wagenpark": 32582
  },
  "Asten": {
    "aantalGestolen": 7,
    "inwoners": 16719,
    "wagenpark": 8819
  },
  "Baarle-Nassau": {
    "aantalGestolen": 0,
    "inwoners": 6799,
    "wagenpark": 3991
  },
  "Baarn": {
    "aantalGestolen": 4,
    "inwoners": 24630,
    "wagenpark": 11986
  },
  "Barendrecht": {
    "aantalGestolen": 11,
    "inwoners": 48477,
    "wagenpark": 22710
  },
  "Barneveld": {
    "aantalGestolen": 4,
    "inwoners": 57339,
    "wagenpark": 27322
  },
  "Beek": {
    "aantalGestolen": 1,
    "inwoners": 15895,
    "wagenpark": 9390
  },
  "Beekdaelen": {
    "aantalGestolen": 13,
    "inwoners": 35969,
    "wagenpark": 21646
  },
  "Beemster": {
    "aantalGestolen": 1,
    "inwoners": 9550,
    "wagenpark": 4827
  },
  "Beesel": {
    "aantalGestolen": 0,
    "inwoners": 13444,
    "wagenpark": 6733
  },
  "Berg en Dal": {
    "aantalGestolen": 4,
    "inwoners": 34748,
    "wagenpark": 17672
  },
  "Bergeijk": {
    "aantalGestolen": 0,
    "inwoners": 18398,
    "wagenpark": 10328
  },
  "Bergen (L.)": {
    "aantalGestolen": 0,
    "inwoners": 13106,
    "wagenpark": 7516
  },
  "Bergen (NH.)": {
    "aantalGestolen": 4,
    "inwoners": 29941,
    "wagenpark": 15450
  },
  "Bergen op Zoom": {
    "aantalGestolen": 12,
    "inwoners": 66354,
    "wagenpark": 31435
  },
  "Berkelland": {
    "aantalGestolen": 1,
    "inwoners": 44029,
    "wagenpark": 23878
  },
  "Bernheze": {
    "aantalGestolen": 8,
    "inwoners": 30550,
    "wagenpark": 15908
  },
  "Best": {
    "aantalGestolen": 10,
    "inwoners": 29497,
    "wagenpark": 14851
  },
  "Beuningen": {
    "aantalGestolen": 5,
    "inwoners": 25798,
    "wagenpark": 13253
  },
  "Beverwijk": {
    "aantalGestolen": 8,
    "inwoners": 41077,
    "wagenpark": 18132
  },
  "Bladel": {
    "aantalGestolen": 4,
    "inwoners": 20144,
    "wagenpark": 11117
  },
  "Blaricum": {
    "aantalGestolen": 0,
    "inwoners": 10795,
    "wagenpark": 5974
  },
  "Bloemendaal": {
    "aantalGestolen": 3,
    "inwoners": 23208,
    "wagenpark": 11873
  },
  "Bodegraven-Reeuwijk": {
    "aantalGestolen": 7,
    "inwoners": 33948,
    "wagenpark": 16097
  },
  "Boekel": {
    "aantalGestolen": 1,
    "inwoners": 10502,
    "wagenpark": 5587
  },
  "Borger-Odoorn": {
    "aantalGestolen": 1,
    "inwoners": 25351,
    "wagenpark": 14708
  },
  "Borne": {
    "aantalGestolen": 2,
    "inwoners": 23124,
    "wagenpark": 11247
  },
  "Borsele": {
    "aantalGestolen": 1,
    "inwoners": 22716,
    "wagenpark": 12607
  },
  "Boxmeer": {
    "aantalGestolen": 6,
    "inwoners": 28853,
    "wagenpark": 14996
  },
  "Boxtel": {
    "aantalGestolen": 5,
    "inwoners": 30672,
    "wagenpark": 14527
  },
  "Breda": {
    "aantalGestolen": 58,
    "inwoners": 183448,
    "wagenpark": 150614
  },
  "Brielle": {
    "aantalGestolen": 1,
    "inwoners": 17040,
    "wagenpark": 9130
  },
  "Bronckhorst": {
    "aantalGestolen": 2,
    "inwoners": 36352,
    "wagenpark": 20852
  },
  "Brummen": {
    "aantalGestolen": 1,
    "inwoners": 20771,
    "wagenpark": 10963
  },
  "Brunssum": {
    "aantalGestolen": 21,
    "inwoners": 28241,
    "wagenpark": 15068
  },
  "Bunnik": {
    "aantalGestolen": 0,
    "inwoners": 15214,
    "wagenpark": 7240
  },
  "Bunschoten": {
    "aantalGestolen": 1,
    "inwoners": 21266,
    "wagenpark": 9122
  },
  "Buren": {
    "aantalGestolen": 2,
    "inwoners": 26365,
    "wagenpark": 15158
  },
  "Capelle aan den IJssel": {
    "aantalGestolen": 12,
    "inwoners": 66854,
    "wagenpark": 30461
  },
  "Castricum": {
    "aantalGestolen": 4,
    "inwoners": 35608,
    "wagenpark": 16502
  },
  "Coevorden": {
    "aantalGestolen": 4,
    "inwoners": 35299,
    "wagenpark": 18803
  },
  "Cranendonck": {
    "aantalGestolen": 3,
    "inwoners": 20336,
    "wagenpark": 11667
  },
  "Cuijk": {
    "aantalGestolen": 9,
    "inwoners": 24911,
    "wagenpark": 12836
  },
  "Culemborg": {
    "aantalGestolen": 3,
    "inwoners": 28195,
    "wagenpark": 12745
  },
  "Dalfsen": {
    "aantalGestolen": 0,
    "inwoners": 28242,
    "wagenpark": 15658
  },
  "Dantumadiel": {
    "aantalGestolen": 0,
    "inwoners": 18904,
    "wagenpark": 9619
  },
  "De Bilt": {
    "aantalGestolen": 6,
    "inwoners": 42846,
    "wagenpark": 20868
  },
  "De Fryske Marren": {
    "aantalGestolen": 0,
    "inwoners": 51742,
    "wagenpark": 27016
  },
  "De Ronde Venen": {
    "aantalGestolen": 4,
    "inwoners": 43620,
    "wagenpark": 22217
  },
  "De Wolden": {
    "aantalGestolen": 0,
    "inwoners": 23917,
    "wagenpark": 13591
  },
  "Delft": {
    "aantalGestolen": 22,
    "inwoners": 102253,
    "wagenpark": 32380
  },
  "Delfzijl": {
    "aantalGestolen": 4,
    "inwoners": 24864,
    "wagenpark": 12154
  },
  "Den Helder": {
    "aantalGestolen": 3,
    "inwoners": 55760,
    "wagenpark": 24396
  },
  "Deurne": {
    "aantalGestolen": 9,
    "inwoners": 32137,
    "wagenpark": 16395
  },
  "Deventer": {
    "aantalGestolen": 11,
    "inwoners": 99653,
    "wagenpark": 42857
  },
  "Diemen": {
    "aantalGestolen": 15,
    "inwoners": 28121,
    "wagenpark": 9666
  },
  "Dinkelland": {
    "aantalGestolen": 0,
    "inwoners": 26291,
    "wagenpark": 13929
  },
  "Doesburg": {
    "aantalGestolen": 1,
    "inwoners": 11328,
    "wagenpark": 5553
  },
  "Doetinchem": {
    "aantalGestolen": 5,
    "inwoners": 57382,
    "wagenpark": 28692
  },
  "Dongen": {
    "aantalGestolen": 0,
    "inwoners": 25777,
    "wagenpark": 13485
  },
  "Dordrecht": {
    "aantalGestolen": 26,
    "inwoners": 118426,
    "wagenpark": 55096
  },
  "Drechterland": {
    "aantalGestolen": 1,
    "inwoners": 19440,
    "wagenpark": 9633
  },
  "Drimmelen": {
    "aantalGestolen": 3,
    "inwoners": 27063,
    "wagenpark": 14520
  },
  "Dronten": {
    "aantalGestolen": 6,
    "inwoners": 40735,
    "wagenpark": 20256
  },
  "Druten": {
    "aantalGestolen": 6,
    "inwoners": 18701,
    "wagenpark": 9635
  },
  "Duiven": {
    "aantalGestolen": 5,
    "inwoners": 25438,
    "wagenpark": 12613
  },
  "Echt-Susteren": {
    "aantalGestolen": 4,
    "inwoners": 31751,
    "wagenpark": 18070
  },
  "Edam-Volendam": {
    "aantalGestolen": 1,
    "inwoners": 35953,
    "wagenpark": 14366
  },
  "Ede": {
    "aantalGestolen": 6,
    "inwoners": 114682,
    "wagenpark": 53609
  },
  "Eemnes": {
    "aantalGestolen": 0,
    "inwoners": 9112,
    "wagenpark": 5007
  },
  "Eersel": {
    "aantalGestolen": 1,
    "inwoners": 18778,
    "wagenpark": 10627
  },
  "Eijsden-Margraten": {
    "aantalGestolen": 7,
    "inwoners": 25566,
    "wagenpark": 14066
  },
  "Eindhoven": {
    "aantalGestolen": 86,
    "inwoners": 229126,
    "wagenpark": 99653
  },
  "Elburg": {
    "aantalGestolen": 5,
    "inwoners": 23107,
    "wagenpark": 11408
  },
  "Emmen": {
    "aantalGestolen": 11,
    "inwoners": 107192,
    "wagenpark": 54609
  },
  "Enkhuizen": {
    "aantalGestolen": 1,
    "inwoners": 18476,
    "wagenpark": 7706
  },
  "Enschede": {
    "aantalGestolen": 15,
    "inwoners": 158261,
    "wagenpark": 65988
  },
  "Epe": {
    "aantalGestolen": 2,
    "inwoners": 32863,
    "wagenpark": 17397
  },
  "Ermelo": {
    "aantalGestolen": 2,
    "inwoners": 26793,
    "wagenpark": 12970
  },
  "Etten-Leur": {
    "aantalGestolen": 12,
    "inwoners": 43532,
    "wagenpark": 21375
  },
  "Geertruidenberg": {
    "aantalGestolen": 4,
    "inwoners": 21517,
    "wagenpark": 11290
  },
  "Geldrop-Mierlo": {
    "aantalGestolen": 13,
    "inwoners": 39252,
    "wagenpark": 20500
  },
  "Gemert-Bakel": {
    "aantalGestolen": 4,
    "inwoners": 30340,
    "wagenpark": 15871
  },
  "Gennep": {
    "aantalGestolen": 1,
    "inwoners": 17052,
    "wagenpark": 9187
  },
  "Gilze en Rijen": {
    "aantalGestolen": 1,
    "inwoners": 26313,
    "wagenpark": 13389
  },
  "Goeree-Overflakkee": {
    "aantalGestolen": 3,
    "inwoners": 49129,
    "wagenpark": 25144
  },
  "Goes": {
    "aantalGestolen": 3,
    "inwoners": 37636,
    "wagenpark": 19584
  },
  "Goirle": {
    "aantalGestolen": 2,
    "inwoners": 23621,
    "wagenpark": 11774
  },
  "Gooise Meren": {
    "aantalGestolen": 17,
    "inwoners": 57337,
    "wagenpark": 27319
  },
  "Gorinchem": {
    "aantalGestolen": 0,
    "inwoners": 36284,
    "wagenpark": 15594
  },
  "Gouda": {
    "aantalGestolen": 7,
    "inwoners": 72700,
    "wagenpark": 27585
  },
  "Grave": {
    "aantalGestolen": 1,
    "inwoners": 12419,
    "wagenpark": 6615
  },
  "Groningen": {
    "aantalGestolen": 18,
    "inwoners": 229962,
    "wagenpark": 71803
  },
  "Gulpen-Wittem": {
    "aantalGestolen": 4,
    "inwoners": 14196,
    "wagenpark": 8153
  },
  "Haaksbergen": {
    "aantalGestolen": 0,
    "inwoners": 24291,
    "wagenpark": 12773
  },
  "Haaren": {
    "aantalGestolen": 0,
    "inwoners": 14103,
    "wagenpark": 7536
  },
  "Haarlem": {
    "aantalGestolen": 42,
    "inwoners": 159709,
    "wagenpark": 60085
  },
  "Haarlemmermeer": {
    "aantalGestolen": 41,
    "inwoners": 153149,
    "wagenpark": 107167
  },
  "Halderberge": {
    "aantalGestolen": 9,
    "inwoners": 29888,
    "wagenpark": 15892
  },
  "Hardenberg": {
    "aantalGestolen": 5,
    "inwoners": 60539,
    "wagenpark": 31118
  },
  "Harderwijk": {
    "aantalGestolen": 2,
    "inwoners": 46832,
    "wagenpark": 21160
  },
  "Hardinxveld-Giessendam": {
    "aantalGestolen": 1,
    "inwoners": 17958,
    "wagenpark": 8282
  },
  "Harlingen": {
    "aantalGestolen": 1,
    "inwoners": 15783,
    "wagenpark": 6946
  },
  "Hattem": {
    "aantalGestolen": 0,
    "inwoners": 12154,
    "wagenpark": 5903
  },
  "Heemskerk": {
    "aantalGestolen": 7,
    "inwoners": 39146,
    "wagenpark": 18161
  },
  "Heemstede": {
    "aantalGestolen": 3,
    "inwoners": 27080,
    "wagenpark": 13008
  },
  "Heerde": {
    "aantalGestolen": 0,
    "inwoners": 18603,
    "wagenpark": 9802
  },
  "Heerenveen": {
    "aantalGestolen": 1,
    "inwoners": 50192,
    "wagenpark": 24921
  },
  "Heerhugowaard": {
    "aantalGestolen": 9,
    "inwoners": 55850,
    "wagenpark": 28285
  },
  "Heerlen": {
    "aantalGestolen": 35,
    "inwoners": 86762,
    "wagenpark": 43291
  },
  "Heeze-Leende": {
    "aantalGestolen": 1,
    "inwoners": 15886,
    "wagenpark": 8752
  },
  "Heiloo": {
    "aantalGestolen": 1,
    "inwoners": 23099,
    "wagenpark": 10849
  },
  "Hellendoorn": {
    "aantalGestolen": 2,
    "inwoners": 35796,
    "wagenpark": 18868
  },
  "Hellevoetsluis": {
    "aantalGestolen": 2,
    "inwoners": 39997,
    "wagenpark": 19708
  },
  "Helmond": {
    "aantalGestolen": 31,
    "inwoners": 90903,
    "wagenpark": 41976
  },
  "Hendrik-Ido-Ambacht": {
    "aantalGestolen": 6,
    "inwoners": 30677,
    "wagenpark": 13678
  },
  "Hengelo": {
    "aantalGestolen": 4,
    "inwoners": 80593,
    "wagenpark": 41083
  },
  "Het Hogeland": {
    "aantalGestolen": 1,
    "inwoners": 48019,
    "wagenpark": 24209
  },
  "Heumen": {
    "aantalGestolen": 6,
    "inwoners": 16462,
    "wagenpark": 8420
  },
  "Heusden": {
    "aantalGestolen": 6,
    "inwoners": 43723,
    "wagenpark": 23046
  },
  "Hillegom": {
    "aantalGestolen": 1,
    "inwoners": 21812,
    "wagenpark": 11122
  },
  "Hilvarenbeek": {
    "aantalGestolen": 0,
    "inwoners": 15366,
    "wagenpark": 8567
  },
  "Hilversum": {
    "aantalGestolen": 19,
    "inwoners": 89521,
    "wagenpark": 41531
  },
  "Hoeksche Waard": {
    "aantalGestolen": 2,
    "inwoners": 86115,
    "wagenpark": 46493
  },
  "Hof van Twente": {
    "aantalGestolen": 0,
    "inwoners": 34930,
    "wagenpark": 18863
  },
  "Hollands Kroon": {
    "aantalGestolen": 0,
    "inwoners": 47681,
    "wagenpark": 25090
  },
  "Hoogeveen": {
    "aantalGestolen": 5,
    "inwoners": 55677,
    "wagenpark": 26815
  },
  "Hoorn": {
    "aantalGestolen": 15,
    "inwoners": 72806,
    "wagenpark": 31678
  },
  "Horst aan de Maas": {
    "aantalGestolen": 3,
    "inwoners": 42271,
    "wagenpark": 23127
  },
  "Houten": {
    "aantalGestolen": 6,
    "inwoners": 49579,
    "wagenpark": 47643
  },
  "Huizen": {
    "aantalGestolen": 5,
    "inwoners": 41369,
    "wagenpark": 21457
  },
  "Hulst": {
    "aantalGestolen": 0,
    "inwoners": 27472,
    "wagenpark": 15599
  },
  "IJsselstein": {
    "aantalGestolen": 0,
    "inwoners": 34302,
    "wagenpark": 15067
  },
  "Kaag en Braassem": {
    "aantalGestolen": 1,
    "inwoners": 26625,
    "wagenpark": 13433
  },
  "Kampen": {
    "aantalGestolen": 1,
    "inwoners": 53259,
    "wagenpark": 21858
  },
  "Kapelle": {
    "aantalGestolen": 0,
    "inwoners": 12720,
    "wagenpark": 6574
  },
  "Katwijk": {
    "aantalGestolen": 3,
    "inwoners": 64956,
    "wagenpark": 25106
  },
  "Kerkrade": {
    "aantalGestolen": 24,
    "inwoners": 45823,
    "wagenpark": 23434
  },
  "Koggenland": {
    "aantalGestolen": 8,
    "inwoners": 22659,
    "wagenpark": 11585
  },
  "Krimpen aan den IJssel": {
    "aantalGestolen": 0,
    "inwoners": 29306,
    "wagenpark": 13077
  },
  "Krimpenerwaard": {
    "aantalGestolen": 2,
    "inwoners": 55644,
    "wagenpark": 26257
  },
  "Laarbeek": {
    "aantalGestolen": 5,
    "inwoners": 22158,
    "wagenpark": 11680
  },
  "Landerd": {
    "aantalGestolen": 3,
    "inwoners": 15332,
    "wagenpark": 8650
  },
  "Landgraaf": {
    "aantalGestolen": 14,
    "inwoners": 37612,
    "wagenpark": 20453
  },
  "Landsmeer": {
    "aantalGestolen": 3,
    "inwoners": 11435,
    "wagenpark": 5474
  },
  "Langedijk": {
    "aantalGestolen": 3,
    "inwoners": 27836,
    "wagenpark": 13795
  },
  "Lansingerland": {
    "aantalGestolen": 19,
    "inwoners": 61155,
    "wagenpark": 29413
  },
  "Laren": {
    "aantalGestolen": 0,
    "inwoners": 11146,
    "wagenpark": 6420
  },
  "Leeuwarden": {
    "aantalGestolen": 13,
    "inwoners": 122415,
    "wagenpark": 44605
  },
  "Leiden": {
    "aantalGestolen": 10,
    "inwoners": 124306,
    "wagenpark": 38936
  },
  "Leiderdorp": {
    "aantalGestolen": 4,
    "inwoners": 27197,
    "wagenpark": 13122
  },
  "Leidschendam-Voorburg": {
    "aantalGestolen": 32,
    "inwoners": 74947,
    "wagenpark": 34915
  },
  "Lelystad": {
    "aantalGestolen": 15,
    "inwoners": 77389,
    "wagenpark": 33245
  },
  "Leudal": {
    "aantalGestolen": 11,
    "inwoners": 35857,
    "wagenpark": 20453
  },
  "Leusden": {
    "aantalGestolen": 1,
    "inwoners": 29755,
    "wagenpark": 14908
  },
  "Lingewaard": {
    "aantalGestolen": 4,
    "inwoners": 46372,
    "wagenpark": 23144
  },
  "Lisse": {
    "aantalGestolen": 4,
    "inwoners": 22746,
    "wagenpark": 11303
  },
  "Lochem": {
    "aantalGestolen": 1,
    "inwoners": 33574,
    "wagenpark": 18626
  },
  "Loon op Zand": {
    "aantalGestolen": 2,
    "inwoners": 23120,
    "wagenpark": 12281
  },
  "Lopik": {
    "aantalGestolen": 0,
    "inwoners": 14395,
    "wagenpark": 7206
  },
  "Loppersum": {
    "aantalGestolen": 0,
    "inwoners": 9732,
    "wagenpark": 5136
  },
  "Losser": {
    "aantalGestolen": 0,
    "inwoners": 22547,
    "wagenpark": 11694
  },
  "Maasdriel": {
    "aantalGestolen": 11,
    "inwoners": 24350,
    "wagenpark": 13227
  },
  "Maasgouw": {
    "aantalGestolen": 3,
    "inwoners": 23697,
    "wagenpark": 13662
  },
  "Maassluis": {
    "aantalGestolen": 8,
    "inwoners": 32518,
    "wagenpark": 14356
  },
  "Maastricht": {
    "aantalGestolen": 47,
    "inwoners": 122723,
    "wagenpark": 45421
  },
  "Medemblik": {
    "aantalGestolen": 6,
    "inwoners": 44480,
    "wagenpark": 22340
  },
  "Meerssen": {
    "aantalGestolen": 9,
    "inwoners": 19039,
    "wagenpark": 10417
  },
  "Meierijstad": {
    "aantalGestolen": 17,
    "inwoners": 80148,
    "wagenpark": 43005
  },
  "Meppel": {
    "aantalGestolen": 4,
    "inwoners": 33410,
    "wagenpark": 15705
  },
  "Middelburg": {
    "aantalGestolen": 2,
    "inwoners": 48303,
    "wagenpark": 21937
  },
  "Midden-Delfland": {
    "aantalGestolen": 5,
    "inwoners": 19338,
    "wagenpark": 8981
  },
  "Midden-Drenthe": {
    "aantalGestolen": 0,
    "inwoners": 33172,
    "wagenpark": 17706
  },
  "Midden-Groningen": {
    "aantalGestolen": 5,
    "inwoners": 60951,
    "wagenpark": 31792
  },
  "Mill en Sint Hubert": {
    "aantalGestolen": 1,
    "inwoners": 10831,
    "wagenpark": 6389
  },
  "Moerdijk": {
    "aantalGestolen": 21,
    "inwoners": 36967,
    "wagenpark": 20448
  },
  "Molenlanden": {
    "aantalGestolen": 3,
    "inwoners": 43846,
    "wagenpark": 22809
  },
  "Montferland": {
    "aantalGestolen": 7,
    "inwoners": 35627,
    "wagenpark": 18717
  },
  "Montfoort": {
    "aantalGestolen": 0,
    "inwoners": 13879,
    "wagenpark": 6680
  },
  "Mook en Middelaar": {
    "aantalGestolen": 0,
    "inwoners": 7768,
    "wagenpark": 4546
  },
  "Neder-Betuwe": {
    "aantalGestolen": 4,
    "inwoners": 23615,
    "wagenpark": 11852
  },
  "Nederweert": {
    "aantalGestolen": 4,
    "inwoners": 17038,
    "wagenpark": 9637
  },
  "Nieuwegein": {
    "aantalGestolen": 14,
    "inwoners": 62426,
    "wagenpark": 28634
  },
  "Nieuwkoop": {
    "aantalGestolen": 4,
    "inwoners": 28269,
    "wagenpark": 15183
  },
  "Nijkerk": {
    "aantalGestolen": 4,
    "inwoners": 42307,
    "wagenpark": 20677
  },
  "Nijmegen": {
    "aantalGestolen": 77,
    "inwoners": 175948,
    "wagenpark": 65514
  },
  "Nissewaard": {
    "aantalGestolen": 17,
    "inwoners": 84588,
    "wagenpark": 39868
  },
  "Noardeast-Fryslân": {
    "aantalGestolen": 1,
    "inwoners": 45287,
    "wagenpark": 23518
  },
  "Noord-Beveland": {
    "aantalGestolen": 0,
    "inwoners": 7314,
    "wagenpark": 4267
  },
  "Noordenveld": {
    "aantalGestolen": 0,
    "inwoners": 32370,
    "wagenpark": 16882
  },
  "Noordoostpolder": {
    "aantalGestolen": 4,
    "inwoners": 46625,
    "wagenpark": 23138
  },
  "Noordwijk": {
    "aantalGestolen": 6,
    "inwoners": 42661,
    "wagenpark": 12697
  },
  "Nuenen, Gerwen en Nederwetten": {
    "aantalGestolen": 6,
    "inwoners": 23019,
    "wagenpark": 12598
  },
  "Nunspeet": {
    "aantalGestolen": 2,
    "inwoners": 27114,
    "wagenpark": 13062
  },
  "Oegstgeest": {
    "aantalGestolen": 0,
    "inwoners": 23887,
    "wagenpark": 10167
  },
  "Oirschot": {
    "aantalGestolen": 3,
    "inwoners": 18558,
    "wagenpark": 10507
  },
  "Oisterwijk": {
    "aantalGestolen": 3,
    "inwoners": 26132,
    "wagenpark": 13567
  },
  "Oldambt": {
    "aantalGestolen": 0,
    "inwoners": 38075,
    "wagenpark": 19458
  },
  "Oldebroek": {
    "aantalGestolen": 0,
    "inwoners": 23504,
    "wagenpark": 11303
  },
  "Oldenzaal": {
    "aantalGestolen": 0,
    "inwoners": 31915,
    "wagenpark": 20343
  },
  "Olst-Wijhe": {
    "aantalGestolen": 1,
    "inwoners": 18023,
    "wagenpark": 9261
  },
  "Ommen": {
    "aantalGestolen": 1,
    "inwoners": 17630,
    "wagenpark": 9384
  },
  "Oost Gelre": {
    "aantalGestolen": 0,
    "inwoners": 29675,
    "wagenpark": 15382
  },
  "Oosterhout": {
    "aantalGestolen": 12,
    "inwoners": 55147,
    "wagenpark": 29073
  },
  "Ooststellingwerf": {
    "aantalGestolen": 1,
    "inwoners": 25459,
    "wagenpark": 13593
  },
  "Oostzaan": {
    "aantalGestolen": 1,
    "inwoners": 9735,
    "wagenpark": 4720
  },
  "Opmeer": {
    "aantalGestolen": 3,
    "inwoners": 11526,
    "wagenpark": 6037
  },
  "Opsterland": {
    "aantalGestolen": 1,
    "inwoners": 29753,
    "wagenpark": 15770
  },
  "Oss": {
    "aantalGestolen": 38,
    "inwoners": 90951,
    "wagenpark": 46033
  },
  "Oude IJsselstreek": {
    "aantalGestolen": 2,
    "inwoners": 39520,
    "wagenpark": 20366
  },
  "Ouder-Amstel": {
    "aantalGestolen": 2,
    "inwoners": 13496,
    "wagenpark": 6268
  },
  "Oudewater": {
    "aantalGestolen": 3,
    "inwoners": 10180,
    "wagenpark": 4975
  },
  "Overbetuwe": {
    "aantalGestolen": 5,
    "inwoners": 47481,
    "wagenpark": 25415
  },
  "Papendrecht": {
    "aantalGestolen": 4,
    "inwoners": 32264,
    "wagenpark": 15370
  },
  "Peel en Maas": {
    "aantalGestolen": 4,
    "inwoners": 43312,
    "wagenpark": 23451
  },
  "Pekela": {
    "aantalGestolen": 0,
    "inwoners": 12245,
    "wagenpark": 6699
  },
  "Pijnacker-Nootdorp": {
    "aantalGestolen": 10,
    "inwoners": 53634,
    "wagenpark": 23100
  },
  "Purmerend": {
    "aantalGestolen": 13,
    "inwoners": 79983,
    "wagenpark": 42438
  },
  "Putten": {
    "aantalGestolen": 0,
    "inwoners": 24313,
    "wagenpark": 12194
  },
  "Raalte": {
    "aantalGestolen": 1,
    "inwoners": 37158,
    "wagenpark": 19012
  },
  "Reimerswaal": {
    "aantalGestolen": 1,
    "inwoners": 22555,
    "wagenpark": 10923
  },
  "Renkum": {
    "aantalGestolen": 4,
    "inwoners": 31338,
    "wagenpark": 15997
  },
  "Renswoude": {
    "aantalGestolen": 1,
    "inwoners": 5175,
    "wagenpark": 2574
  },
  "Reusel-De Mierden": {
    "aantalGestolen": 1,
    "inwoners": 13040,
    "wagenpark": 7186
  },
  "Rheden": {
    "aantalGestolen": 4,
    "inwoners": 43527,
    "wagenpark": 21499
  },
  "Rhenen": {
    "aantalGestolen": 2,
    "inwoners": 19816,
    "wagenpark": 9766
  },
  "Ridderkerk": {
    "aantalGestolen": 17,
    "inwoners": 45789,
    "wagenpark": 22217
  },
  "Rijssen-Holten": {
    "aantalGestolen": 2,
    "inwoners": 38097,
    "wagenpark": 18556
  },
  "Rijswijk": {
    "aantalGestolen": 24,
    "inwoners": 52208,
    "wagenpark": 27818
  },
  "Roerdalen": {
    "aantalGestolen": 3,
    "inwoners": 20728,
    "wagenpark": 11962
  },
  "Roermond": {
    "aantalGestolen": 14,
    "inwoners": 57761,
    "wagenpark": 27896
  },
  "Roosendaal": {
    "aantalGestolen": 65,
    "inwoners": 77000,
    "wagenpark": 38271
  },
  "Rotterdam": {
    "aantalGestolen": 232,
    "inwoners": 638712,
    "wagenpark": 219147
  },
  "Rozendaal": {
    "aantalGestolen": 0,
    "inwoners": 1575,
    "wagenpark": 867
  },
  "Rucphen": {
    "aantalGestolen": 0,
    "inwoners": 22401,
    "wagenpark": 12710
  },
  "Schagen": {
    "aantalGestolen": 5,
    "inwoners": 46379,
    "wagenpark": 23802
  },
  "Scherpenzeel": {
    "aantalGestolen": 0,
    "inwoners": 9751,
    "wagenpark": 4744
  },
  "Schiedam": {
    "aantalGestolen": 33,
    "inwoners": 77907,
    "wagenpark": 29494
  },
  "Schiermonnikoog": {
    "aantalGestolen": 0,
    "inwoners": 932,
    "wagenpark": 328
  },
  "Schouwen-Duiveland": {
    "aantalGestolen": 1,
    "inwoners": 33687,
    "wagenpark": 18404
  },
  "'s-Gravenhage": {
    "aantalGestolen": 246,
    "inwoners": 532561,
    "wagenpark": 190461
  },
  "'s-Hertogenbosch": {
    "aantalGestolen": 50,
    "inwoners": 153434,
    "wagenpark": 77168
  },
  "Simpelveld": {
    "aantalGestolen": 0,
    "inwoners": 10561,
    "wagenpark": 6041
  },
  "Sint Anthonis": {
    "aantalGestolen": 0,
    "inwoners": 11577,
    "wagenpark": 6405
  },
  "Sint-Michielsgestel": {
    "aantalGestolen": 7,
    "inwoners": 28673,
    "wagenpark": 15377
  },
  "Sittard-Geleen": {
    "aantalGestolen": 33,
    "inwoners": 92956,
    "wagenpark": 50423
  },
  "Sliedrecht": {
    "aantalGestolen": 1,
    "inwoners": 25020,
    "wagenpark": 11057
  },
  "Sluis": {
    "aantalGestolen": 1,
    "inwoners": 23526,
    "wagenpark": 13478
  },
  "Smallingerland": {
    "aantalGestolen": 5,
    "inwoners": 55889,
    "wagenpark": 30916
  },
  "Soest": {
    "aantalGestolen": 5,
    "inwoners": 46089,
    "wagenpark": 23186
  },
  "Someren": {
    "aantalGestolen": 2,
    "inwoners": 19120,
    "wagenpark": 10150
  },
  "Son en Breugel": {
    "aantalGestolen": 4,
    "inwoners": 16753,
    "wagenpark": 9133
  },
  "Stadskanaal": {
    "aantalGestolen": 2,
    "inwoners": 32258,
    "wagenpark": 16360
  },
  "Staphorst": {
    "aantalGestolen": 1,
    "inwoners": 16797,
    "wagenpark": 8576
  },
  "Stede Broec": {
    "aantalGestolen": 0,
    "inwoners": 21670,
    "wagenpark": 9373
  },
  "Steenbergen": {
    "aantalGestolen": 7,
    "inwoners": 24781,
    "wagenpark": 12853
  },
  "Steenwijkerland": {
    "aantalGestolen": 2,
    "inwoners": 43768,
    "wagenpark": 22030
  },
  "Stein": {
    "aantalGestolen": 6,
    "inwoners": 24987,
    "wagenpark": 14271
  },
  "Stichtse Vecht": {
    "aantalGestolen": 11,
    "inwoners": 64513,
    "wagenpark": 31748
  },
  "Súdwest-Fryslân": {
    "aantalGestolen": 2,
    "inwoners": 89583,
    "wagenpark": 39490
  },
  "Terneuzen": {
    "aantalGestolen": 4,
    "inwoners": 54440,
    "wagenpark": 29479
  },
  "Terschelling": {
    "aantalGestolen": 0,
    "inwoners": 4906,
    "wagenpark": 2277
  },
  "Texel": {
    "aantalGestolen": 0,
    "inwoners": 13584,
    "wagenpark": 6946
  },
  "Teylingen": {
    "aantalGestolen": 4,
    "inwoners": 36584,
    "wagenpark": 17552
  },
  "Tholen": {
    "aantalGestolen": 2,
    "inwoners": 25583,
    "wagenpark": 12941
  },
  "Tiel": {
    "aantalGestolen": 14,
    "inwoners": 41465,
    "wagenpark": 21977
  },
  "Tilburg": {
    "aantalGestolen": 51,
    "inwoners": 215521,
    "wagenpark": 109374
  },
  "Tubbergen": {
    "aantalGestolen": 0,
    "inwoners": 21213,
    "wagenpark": 12110
  },
  "Twenterand": {
    "aantalGestolen": 2,
    "inwoners": 33903,
    "wagenpark": 17428
  },
  "Tynaarlo": {
    "aantalGestolen": 2,
    "inwoners": 33462,
    "wagenpark": 20678
  },
  "Tytsjerksteradiel": {
    "aantalGestolen": 0,
    "inwoners": 31870,
    "wagenpark": 16435
  },
  "Uden": {
    "aantalGestolen": 8,
    "inwoners": 41725,
    "wagenpark": 23018
  },
  "Uitgeest": {
    "aantalGestolen": 2,
    "inwoners": 13520,
    "wagenpark": 6316
  },
  "Uithoorn": {
    "aantalGestolen": 2,
    "inwoners": 29445,
    "wagenpark": 14438
  },
  "Urk": {
    "aantalGestolen": 1,
    "inwoners": 20524,
    "wagenpark": 6807
  },
  "Utrecht": {
    "aantalGestolen": 76,
    "inwoners": 347483,
    "wagenpark": 129843
  },
  "Utrechtse Heuvelrug": {
    "aantalGestolen": 2,
    "inwoners": 49314,
    "wagenpark": 25885
  },
  "Vaals": {
    "aantalGestolen": 2,
    "inwoners": 9874,
    "wagenpark": 4803
  },
  "Valkenburg aan de Geul": {
    "aantalGestolen": 8,
    "inwoners": 16431,
    "wagenpark": 8813
  },
  "Valkenswaard": {
    "aantalGestolen": 7,
    "inwoners": 30654,
    "wagenpark": 16248
  },
  "Veendam": {
    "aantalGestolen": 17,
    "inwoners": 27508,
    "wagenpark": 14188
  },
  "Veenendaal": {
    "aantalGestolen": 16,
    "inwoners": 64918,
    "wagenpark": 29757
  },
  "Veere": {
    "aantalGestolen": 0,
    "inwoners": 21867,
    "wagenpark": 11587
  },
  "Veldhoven": {
    "aantalGestolen": 6,
    "inwoners": 44925,
    "wagenpark": 22915
  },
  "Velsen": {
    "aantalGestolen": 6,
    "inwoners": 67831,
    "wagenpark": 31511
  },
  "Venlo": {
    "aantalGestolen": 21,
    "inwoners": 101192,
    "wagenpark": 48602
  },
  "Venray": {
    "aantalGestolen": 11,
    "inwoners": 43341,
    "wagenpark": 21836
  },
  "Vijfheerenlanden": {
    "aantalGestolen": 8,
    "inwoners": 55001,
    "wagenpark": 35388
  },
  "Vlaardingen": {
    "aantalGestolen": 19,
    "inwoners": 72050,
    "wagenpark": 29648
  },
  "Vlieland": {
    "aantalGestolen": 0,
    "inwoners": 1132,
    "wagenpark": 381
  },
  "Vlissingen": {
    "aantalGestolen": 0,
    "inwoners": 44485,
    "wagenpark": 20171
  },
  "Voerendaal": {
    "aantalGestolen": 4,
    "inwoners": 12390,
    "wagenpark": 7110
  },
  "Voorschoten": {
    "aantalGestolen": 7,
    "inwoners": 25453,
    "wagenpark": 11400
  },
  "Voorst": {
    "aantalGestolen": 1,
    "inwoners": 24310,
    "wagenpark": 12750
  },
  "Vught": {
    "aantalGestolen": 4,
    "inwoners": 26418,
    "wagenpark": 12489
  },
  "Waadhoeke": {
    "aantalGestolen": 1,
    "inwoners": 46112,
    "wagenpark": 23479
  },
  "Waalre": {
    "aantalGestolen": 2,
    "inwoners": 17075,
    "wagenpark": 9283
  },
  "Waalwijk": {
    "aantalGestolen": 6,
    "inwoners": 47725,
    "wagenpark": 25327
  },
  "Waddinxveen": {
    "aantalGestolen": 5,
    "inwoners": 27578,
    "wagenpark": 13082
  },
  "Wageningen": {
    "aantalGestolen": 1,
    "inwoners": 38412,
    "wagenpark": 12856
  },
  "Wassenaar": {
    "aantalGestolen": 2,
    "inwoners": 26084,
    "wagenpark": 14201
  },
  "Waterland": {
    "aantalGestolen": 0,
    "inwoners": 17259,
    "wagenpark": 7905
  },
  "Weert": {
    "aantalGestolen": 8,
    "inwoners": 49855,
    "wagenpark": 24332
  },
  "Weesp": {
    "aantalGestolen": 0,
    "inwoners": 19147,
    "wagenpark": 7865
  },
  "West Betuwe": {
    "aantalGestolen": 2,
    "inwoners": 50349,
    "wagenpark": 28098
  },
  "West Maas en Waal": {
    "aantalGestolen": 2,
    "inwoners": 18891,
    "wagenpark": 10565
  },
  "Westerkwartier": {
    "aantalGestolen": 0,
    "inwoners": 62844,
    "wagenpark": 33758
  },
  "Westerveld": {
    "aantalGestolen": 1,
    "inwoners": 19152,
    "wagenpark": 10705
  },
  "Westervoort": {
    "aantalGestolen": 5,
    "inwoners": 15015,
    "wagenpark": 7280
  },
  "Westerwolde": {
    "aantalGestolen": 2,
    "inwoners": 24684,
    "wagenpark": 14382
  },
  "Westland": {
    "aantalGestolen": 17,
    "inwoners": 107492,
    "wagenpark": 52482
  },
  "Weststellingwerf": {
    "aantalGestolen": 0,
    "inwoners": 25720,
    "wagenpark": 13430
  },
  "Westvoorne": {
    "aantalGestolen": 3,
    "inwoners": 14508,
    "wagenpark": 8301
  },
  "Wierden": {
    "aantalGestolen": 1,
    "inwoners": 24258,
    "wagenpark": 17631
  },
  "Wijchen": {
    "aantalGestolen": 10,
    "inwoners": 40847,
    "wagenpark": 20879
  },
  "Wijdemeren": {
    "aantalGestolen": 3,
    "inwoners": 23659,
    "wagenpark": 13416
  },
  "Wijk bij Duurstede": {
    "aantalGestolen": 2,
    "inwoners": 23678,
    "wagenpark": 11746
  },
  "Winterswijk": {
    "aantalGestolen": 0,
    "inwoners": 28987,
    "wagenpark": 13931
  },
  "Woensdrecht": {
    "aantalGestolen": 7,
    "inwoners": 21800,
    "wagenpark": 12083
  },
  "Woerden": {
    "aantalGestolen": 1,
    "inwoners": 51758,
    "wagenpark": 23890
  },
  "Wormerland": {
    "aantalGestolen": 2,
    "inwoners": 15995,
    "wagenpark": 7538
  },
  "Woudenberg": {
    "aantalGestolen": 1,
    "inwoners": 13021,
    "wagenpark": 6284
  },
  "Zaanstad": {
    "aantalGestolen": 38,
    "inwoners": 154865,
    "wagenpark": 63450
  },
  "Zaltbommel": {
    "aantalGestolen": 4,
    "inwoners": 28014,
    "wagenpark": 14068
  },
  "Zandvoort": {
    "aantalGestolen": 4,
    "inwoners": 16970,
    "wagenpark": 7656
  },
  "Zeewolde": {
    "aantalGestolen": 2,
    "inwoners": 22407,
    "wagenpark": 14177
  },
  "Zeist": {
    "aantalGestolen": 8,
    "inwoners": 63322,
    "wagenpark": 38235
  },
  "Zevenaar": {
    "aantalGestolen": 5,
    "inwoners": 43402,
    "wagenpark": 16413
  },
  "Zoetermeer": {
    "aantalGestolen": 39,
    "inwoners": 124695,
    "wagenpark": 55871
  },
  "Zoeterwoude": {
    "aantalGestolen": 2,
    "inwoners": 8430,
    "wagenpark": 3937
  },
  "Zuidplas": {
    "aantalGestolen": 7,
    "inwoners": 41882,
    "wagenpark": 20491
  },
  "Zundert": {
    "aantalGestolen": 3,
    "inwoners": 21525,
    "wagenpark": 11920
  },
  "Zutphen": {
    "aantalGestolen": 6,
    "inwoners": 47537,
    "wagenpark": 20364
  },
  "Zwartewaterland": {
    "aantalGestolen": 3,
    "inwoners": 22468,
    "wagenpark": 10558
  },
  "Zwijndrecht": {
    "aantalGestolen": 11,
    "inwoners": 44586,
    "wagenpark": 20872
  },
  "Zwolle": {
    "aantalGestolen": 22,
    "inwoners": 126116,
    "wagenpark": 52255
  }
};

for (const gemeente of Object.keys(gestolen)) {
  gestolen[gemeente].gestolenPerInwoners = (gestolen[gemeente].aantalGestolen / gestolen[gemeente].inwoners * 10000).toFixed(2);
  gestolen[gemeente].gestolenPerWagenpark = (gestolen[gemeente].aantalGestolen / gestolen[gemeente].wagenpark * 10000).toFixed(2);
}

/*
Draws a bar chart in given container (DOM Element) using data (array), headers (object)
and titleVar (string) allowing optional options (object)
*/
function drawBarChart(container, datasets, headers, titleVar, options) {
  // Get selection from select element
  const selection = d3.select("#wat-options").property("value").split(" ");
  // Get which dataset to use
  let data = datasets[0];
  if (selection[0] === "type") {
    data = datasets[1];
  }
  // Get variable used to scale the bar chart from selection
  const scaleVar = selection[1];
  // Select d3 container element
  const containerElement = d3.select(container);
  // Get background color, default parent container element (transparent if not set)
  const backgroundColor = options.backgroundColor || containerElement.style("background-color");
  // Get bar color, default black
  const color = options.color || "black";
  // Get bar width, default 50
  const barWidth = relativeSize(options.barWidth) || relativeSize(50);
  // Get bar gap, default 5
  const barGap = relativeSize(options.barGap) || relativeSize(6);
  // Get sort function
  const sort = options.sort || headers[scaleVar].order;
  // Get max display amount
  const displayAmount = options.displayAmount || undefined;

  // Sort data
  switch (sort) {
    case "descending":
      data.sort((x, y) => {
        return d3.descending(x[scaleVar], y[scaleVar])
      });
      break
    case "ascending":
      data.sort((x, y) => {
        return d3.ascending(x[scaleVar], y[scaleVar])
      });
      break
  }

  // Cut off data past max display amount
  if (displayAmount) {
    data = data.slice(0, displayAmount);
  }

  // Calculate total height
  const height = data.length * (barWidth + barGap) - barGap;

  // Get highest Number
  const highestNumber = d3.max(data, item => item[scaleVar]);

  // Get lowest Number
  const lowestNumber = d3.min(data, item => item[scaleVar]);

  // Remove previous svgs
  const deleteSvgs = d3.select(container).selectAll("svg").remove();

  // Create svg "canvas" to draw on
  const svg = containerElement.append("svg")
    .attr("width", "100%")
    .attr("height", height)
    .style("background-color", backgroundColor);

  // https://bl.ocks.org/d3noob/a22c42db65eb00d4e369
  const tooltip = containerElement.append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // Calculate bar width
  const width = svg.style("width").replace("px", "");

  // Create group for every bar
  const bar = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (d, i) => {
      return `translate(0,${i * (barWidth + barGap)})`
    });

  // Draw bar rectangles in bar group
  const rect = bar.append("rect")
    .attr("height", barWidth)
    .style("fill", color)
    .attr("width", (d, i) => calcBarLength(d))
    .on("mousemove", (e, d) => showTooltip(e, d, tooltip, tooltipText(d)))
    .on("mouseout", (e, d) => hideTooltip(tooltip));

  // Draw title text in bar
  const titleText = bar.append("text")
    .attr("class", "titleText")
    .attr("x", (d, i) => calcBarLength(d) - relativeSize(15))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "central")
    .attr("y", barWidth / 2)
    .style("fill", backgroundColor)
    .style("font-weight", "bold")
    .style("pointer-events", "none")
    .text(d => d[titleVar]);

  // Draw number text next to bar
  const numberText = bar.append("text")
    .attr("x", (d, i) => calcBarLength(d) + relativeSize(12))
    .attr("alignment-baseline", "central")
    .attr("y", barWidth / 2)
    .style("font-weight", "bold")
    .style("pointer-events", "none")
    .text(d => d[scaleVar]);

  // Calculate bar length according to highest number
  function calcBarLength(d, i) {
    if (d[scaleVar] <= 0) {
      return 0;
    }
    // Normal scaling
    let scaling = d[scaleVar] / highestNumber;
    // Inverted scaling
    if (headers[scaleVar].inverted) {
      scaling = lowestNumber / d[scaleVar];
    }
    return (width - relativeSize(55)) * scaling;
  }

  // Create tooltip text displaying all information
  function tooltipText(d) {
    let tooltipText = "";
    for (const key of Object.keys(d)) {
      const title = headers[key].title || key;
      const value = d[key].toLocaleString("nl-nl");
      tooltipText += `<span>${title}</span><span>${value}</span>`;
    }
    return tooltipText
  }

  // Convert size in px to new size in px relative to 1 rem
  function relativeSize(size) {
    // Calculate rem size for calculating responsive sizes
    const remSize = d3.select("html").style("font-size").replace("px", "");
    return size / 16 * remSize;
  }
}


/*
  Draws a map in given container (DOM Element) using data (array)
*/
async function drawMap(container, data, options) {
  // Get variable used to scale the bar chart from selection
  const scaleVar = d3.select("#waar-options").property("value");
  // Select d3 container element
  const containerElement = d3.select(container);
  // Get bar color, default black
  const color = options.color || "black";

  // Get highest Number
  let highestNumber = 0;
  for (const item of Object.keys(gestolen)) {
    if (gestolen[item][scaleVar] > highestNumber) highestNumber = gestolen[item][scaleVar];
  }

  // Remove previous svgs
  const deleteSvgs = d3.select(container).selectAll("svg").remove();

  // Add svg & add responsiveness with viewbox
  const svg = d3.select(container).append("svg")
    .attr("width", "100%")
    .attr("height", "90vh")
    .attr("viewBox", "488.9 80 10.4 12.3");

  // https://bl.ocks.org/d3noob/a22c42db65eb00d4e369
  const tooltip = containerElement.append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // Get geojson features from topojson
  const geojson = topojson.feature(data, data.objects.gemeente_2020).features;

  // Set projection function (lat/long > x/y)
  const projection = d3.geoMercator();

  // Add projection to path generator
  const path = d3.geoPath()
    .projection(projection);

  // Create group & append paths
  const g = svg.append("g")
    .selectAll("path")
    .data(geojson)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", color)
    .attr("opacity", (d) => {
      const scale = gestolen[d.properties.statnaam][scaleVar] / highestNumber;
      const intensity = 0.9;
      return scale * intensity + 1-intensity;
    })
    .attr("stroke", options.stroke)
    .attr("stroke-width", "0.01px")
    .on("mouseover", (e, d) => showTooltip(e, d, tooltip, tooltipText(d)))
    .on("mouseout", (e, d) => hideTooltip(tooltip));

  // Create Tooltip Text
  function tooltipText(d) {
    const gemeente = d.properties.statnaam;
    let value = gestolen[gemeente][scaleVar];
    if (gestolen[gemeente] !== undefined) {
      if (typeof value === "number") {
        return gemeente + " " + value.toLocaleString("nl-nl");
      } else {
        return gemeente + " " + value.replace(".", ",");
      }
    }
  }
}


/*
  Show tooltip, set to mouse location and set tooltip text
*/
function showTooltip(e, d, tooltip, tooltipText) {
  // Display tooltip and set to mouse location
  tooltip
    .style("left", e.clientX + "px")
    .style("top", (e.clientY - tooltip.style("height").replace("px", "")) + "px")
    .transition()
    .duration(50)
    .style("opacity", 0.95);

  // Add information to tooltip
  tooltip.html(tooltipText);
}


/*
  Hide tooltip
*/
function hideTooltip(tooltip) {
  tooltip.transition()
    .duration(200)
    .style("opacity", 0);
}

// const rawData = ["LAND ROVER", 108, 32821, 304, 47, "43,5%", "LEXUS", 53, 21852, 412, 26, "49,1%", "AUDI", 674, 287176, 426, 218, "32,3%", "VOLKSWAGEN", 1514, 1045121, 690, 503, "33,2%", "BMW", 488, 357967, 734, 184, "37,7%", "FIAT", 403, 336249, 834, 139, "34,5%", "MERCEDES-BENZ", 404, 356857, 883, 153, "37,9%", "PORSCHE", 39, 39326, 1008, 14, "35,9%", "TOYOTA", 517, 603216, 1167, 164, "31,7%", "MINI", 78, 104384, 1338, 22, "28,2%", "RENAULT", 492, 660774, 1343, 215, "43,7%", "SEAT", 147, 215960, 1469, 67, "45,6%", "PEUGEOT", 387, 697193, 1802, 194, "50,1%", "ALFA ROMEO", 29, 57151, 1971, 18, "62,1%", "MAZDA", 75, 159327, 2124, 27, "36,0%", "FORD", 266, 613509, 2306, 130, "48,9%", "OPEL", 306, 732866, 2395, 202, "66,0%", "CITROEN", 168, 406261, 2418, 92, "54,8%", "VOLVO", 145, 370225, 2553, 80, "55,2%", "DAIHATSU", 21, 61491, 2928, 16, "76,2%", "HONDA", 27, 81895, 3033, 18, "66,7%", "NISSAN", 76, 235505, 3099, 43, "56,6%", "CHEVROLET", 24, 75099, 3129, 13, "54,2%", "MITSUBISHI", 43, 139115, 3235, 34, "79,1%", "SKODA", 59, 194952, 3304, 31, "52,5%", "KIA", 79, 284905, 3606, 66, "83,5%", "SUZUKI", 61, 270794, 4439, 38, "62,3%", "HYUNDAI", 59, 266909, 4524, 43, "72,9%", "OVERIGE", 179, 453590, 2534, 78, "43,6%"]
//
// const dataList = ["merk", "gestolen", "wagenpark", "diefstalrisico", "terug", "percentageTerug"];
// const dataPerGroup = dataList.length;
//
// const data = []
//
// for (var i = 0; i < rawData.length / dataPerGroup; i++) {
//   let dataObject = {}
//   for (var x = 0; x < dataPerGroup; x++) {
//     dataObject[dataList[x]] = rawData[i * dataPerGroup + x]
//   }
//   data.push(dataObject);
// }

const diefstalrisico = [
  {
    "merk": "LAND ROVER",
    "gestolen": 108,
    "wagenpark": 32821,
    "diefstalrisico": 304,
    "terug": 47,
    "percentageTerug": "43,5%"
  },
  {
    "merk": "LEXUS",
    "gestolen": 53,
    "wagenpark": 21852,
    "diefstalrisico": 412,
    "terug": 26,
    "percentageTerug": "49,1%"
  },
  {
    "merk": "AUDI",
    "gestolen": 674,
    "wagenpark": 287176,
    "diefstalrisico": 426,
    "terug": 218,
    "percentageTerug": "32,3%"
  },
  {
    "merk": "VOLKSWAGEN",
    "gestolen": 1514,
    "wagenpark": 1045121,
    "diefstalrisico": 690,
    "terug": 503,
    "percentageTerug": "33,2%"
  },
  {
    "merk": "BMW",
    "gestolen": 488,
    "wagenpark": 357967,
    "diefstalrisico": 734,
    "terug": 184,
    "percentageTerug": "37,7%"
  },
  {
    "merk": "FIAT",
    "gestolen": 403,
    "wagenpark": 336249,
    "diefstalrisico": 834,
    "terug": 139,
    "percentageTerug": "34,5%"
  },
  {
    "merk": "MERCEDES-BENZ",
    "gestolen": 404,
    "wagenpark": 356857,
    "diefstalrisico": 883,
    "terug": 153,
    "percentageTerug": "37,9%"
  },
  {
    "merk": "PORSCHE",
    "gestolen": 39,
    "wagenpark": 39326,
    "diefstalrisico": 1008,
    "terug": 14,
    "percentageTerug": "35,9%"
  },
  {
    "merk": "TOYOTA",
    "gestolen": 517,
    "wagenpark": 603216,
    "diefstalrisico": 1167,
    "terug": 164,
    "percentageTerug": "31,7%"
  },
  {
    "merk": "MINI",
    "gestolen": 78,
    "wagenpark": 104384,
    "diefstalrisico": 1338,
    "terug": 22,
    "percentageTerug": "28,2%"
  },
  {
    "merk": "RENAULT",
    "gestolen": 492,
    "wagenpark": 660774,
    "diefstalrisico": 1343,
    "terug": 215,
    "percentageTerug": "43,7%"
  },
  {
    "merk": "SEAT",
    "gestolen": 147,
    "wagenpark": 215960,
    "diefstalrisico": 1469,
    "terug": 67,
    "percentageTerug": "45,6%"
  },
  {
    "merk": "PEUGEOT",
    "gestolen": 387,
    "wagenpark": 697193,
    "diefstalrisico": 1802,
    "terug": 194,
    "percentageTerug": "50,1%"
  },
  {
    "merk": "ALFA ROMEO",
    "gestolen": 29,
    "wagenpark": 57151,
    "diefstalrisico": 1971,
    "terug": 18,
    "percentageTerug": "62,1%"
  },
  {
    "merk": "MAZDA",
    "gestolen": 75,
    "wagenpark": 159327,
    "diefstalrisico": 2124,
    "terug": 27,
    "percentageTerug": "36,0%"
  },
  {
    "merk": "FORD",
    "gestolen": 266,
    "wagenpark": 613509,
    "diefstalrisico": 2306,
    "terug": 130,
    "percentageTerug": "48,9%"
  },
  {
    "merk": "OPEL",
    "gestolen": 306,
    "wagenpark": 732866,
    "diefstalrisico": 2395,
    "terug": 202,
    "percentageTerug": "66,0%"
  },
  {
    "merk": "CITROEN",
    "gestolen": 168,
    "wagenpark": 406261,
    "diefstalrisico": 2418,
    "terug": 92,
    "percentageTerug": "54,8%"
  },
  {
    "merk": "VOLVO",
    "gestolen": 145,
    "wagenpark": 370225,
    "diefstalrisico": 2553,
    "terug": 80,
    "percentageTerug": "55,2%"
  },
  {
    "merk": "DAIHATSU",
    "gestolen": 21,
    "wagenpark": 61491,
    "diefstalrisico": 2928,
    "terug": 16,
    "percentageTerug": "76,2%"
  },
  {
    "merk": "HONDA",
    "gestolen": 27,
    "wagenpark": 81895,
    "diefstalrisico": 3033,
    "terug": 18,
    "percentageTerug": "66,7%"
  },
  {
    "merk": "NISSAN",
    "gestolen": 76,
    "wagenpark": 235505,
    "diefstalrisico": 3099,
    "terug": 43,
    "percentageTerug": "56,6%"
  },
  {
    "merk": "CHEVROLET",
    "gestolen": 24,
    "wagenpark": 75099,
    "diefstalrisico": 3129,
    "terug": 13,
    "percentageTerug": "54,2%"
  },
  {
    "merk": "MITSUBISHI",
    "gestolen": 43,
    "wagenpark": 139115,
    "diefstalrisico": 3235,
    "terug": 34,
    "percentageTerug": "79,1%"
  },
  {
    "merk": "SKODA",
    "gestolen": 59,
    "wagenpark": 194952,
    "diefstalrisico": 3304,
    "terug": 31,
    "percentageTerug": "52,5%"
  },
  {
    "merk": "KIA",
    "gestolen": 79,
    "wagenpark": 284905,
    "diefstalrisico": 3606,
    "terug": 66,
    "percentageTerug": "83,5%"
  },
  {
    "merk": "SUZUKI",
    "gestolen": 61,
    "wagenpark": 270794,
    "diefstalrisico": 4439,
    "terug": 38,
    "percentageTerug": "62,3%"
  },
  {
    "merk": "HYUNDAI",
    "gestolen": 59,
    "wagenpark": 266909,
    "diefstalrisico": 4524,
    "terug": 43,
    "percentageTerug": "72,9%"
  },
  {
    "merk": "OVERIGE",
    "gestolen": 179,
    "wagenpark": 453590,
    "diefstalrisico": 2534,
    "terug": 78,
    "percentageTerug": "43,6%"
  }
];

const diefstalrisicoTypes = [
  {
    "merk": "AUDI A1",
    "gestolen": 214,
    "wagenpark": 27449,
    "diefstalrisico": 128,
    "terug": 33,
    "percentageTerug": "15,4%",
  },
  {
    "merk": "TOYOTA C-HR",
    "gestolen": 120,
    "wagenpark": 15797,
    "diefstalrisico": 132,
    "terug": 22,
    "percentageTerug": "18,3%"
  },
  {
    "merk": "MERCEDES-BENZ E-KLASSE",
    "gestolen": 112,
    "wagenpark": 38947,
    "diefstalrisico": 348,
    "terug": 46,
    "percentageTerug": "41,1%",
  },
  {
    "merk": "FIAT 500",
    "gestolen": 222,
    "wagenpark": 94296,
    "diefstalrisico": 425,
    "terug": 44,
    "percentageTerug": "19,8%",
  },
  {
    "merk": "VOLKSWAGEN POLO",
    "gestolen": 584,
    "wagenpark": 277768,
    "diefstalrisico": 476,
    "terug": 168,
    "percentageTerug": "28,8%",
  },
  {
    "merk": "BMW 5ER REIHE",
    "gestolen": 121,
    "wagenpark": 59495,
    "diefstalrisico": 492,
    "terug": 48,
    "percentageTerug": "39,7%",
  },
  {
    "merk": "VOLKSWAGEN GOLF",
    "gestolen": 582,
    "wagenpark": 333040,
    "diefstalrisico": 572,
    "terug": 187,
    "percentageTerug": "32,1%",
  },
  {
    "merk": "AUDI A4",
    "gestolen": 107,
    "wagenpark": 66357,
    "diefstalrisico": 620,
    "terug": 42,
    "percentageTerug": "39,3%",
  },
  {
    "merk": "AUDI A3",
    "gestolen": 113,
    "wagenpark": 79094,
    "diefstalrisico": 700,
    "terug": 51,
    "percentageTerug": "45,1%",
  },
  {
    "merk": "BMW 3ER REIHE",
    "gestolen": 165,
    "wagenpark": 124034,
    "diefstalrisico": 752,
    "terug": 66,
    "percentageTerug": "40,0%",
  },
  {
    "merk": "TOTOTA AYGO",
    "gestolen": 148,
    "wagenpark": 147340,
    "diefstalrisico": 996,
    "terug": 42,
    "percentageTerug": "28,4%",
  },
  {
    "merk": "RENAULT MEGANE",
    "gestolen": 101,
    "wagenpark": 100866,
    "diefstalrisico": 999,
    "terug": 65,
    "percentageTerug": "64,4%",
  },
  {
    "merk": "RENAULT CLIO",
    "gestolen": 163,
    "wagenpark": 176225,
    "diefstalrisico": 1081,
    "terug": 62,
    "percentageTerug": "38,0%",
  },
  {
    "merk": "OPEL CORSA",
    "gestolen": 131,
    "wagenpark": 207961,
    "diefstalrisico": 1587,
    "terug": 89,
    "percentageTerug": "67,9%",
  },
];

const diefstalrisicoHeaders = {
  "merk": {
    "title": "Merk/Type",
    "order": "descending",
    "inverted": false
  },
  "gestolen": {
    "title": "Aantal Gestolen",
    "order": "descending",
    "inverted": false
  },
  "wagenpark": {
    "title": "Totaal Wagenpark",
    "order": "descending",
    "inverted": false
  },
  "diefstalrisico": {
    "title": "Diefstalrisico 1 op ",
    "order": "ascending",
    "inverted": true
  },
  "terug": {
    "title": "Aantal Teruggevonden",
    "order": "ascending",
    "inverted": true
  },
  "percentageTerug": {
    "title": "Percentage Teruggevonden",
    "order": "ascending",
    "inverted": true
  }
};

// Initialize chart and add function to resize & selectElement change.
function initializeChart(chartFunction, selectElement) {
  chartFunction();

  // Redraw on resize to refit to container
  window.addEventListener("resize", () => {
    chartFunction();
  });

  // Select dropdown & redraw chart on change
  if (selectElement) {
    d3.select(selectElement).on("change", () => {
      chartFunction();
    });
  }
}

// Initialize Bar chart
initializeChart(() => {
  const data = [diefstalrisico, diefstalrisicoTypes];
  const dataHeaders = diefstalrisicoHeaders;
  const options = {
    color: "#B7274C",
    displayAmount: 10,
  };
  drawBarChart("#wat", data, dataHeaders, "merk", options);
}, "#wat-options");

// Initialize map
initializeChart(async () => {
  const data = await d3.json("https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson");
  const options = {
    color: "#B7274C",
    stroke: "white",
  };
  drawMap("#waar", data, options);
}, "#waar-options");
