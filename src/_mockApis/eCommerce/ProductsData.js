import mock from '../mock';
import { Chance } from 'chance';

import paperTowelHolder from 'src/assets/images/products/kitchen/paperTowelHolder.jpg';
import dishwasherMagnet from 'src/assets/images/products/kitchen/dishwasherMagnet.jpg';
import shelfLiner from 'src/assets/images/products/kitchen/shelfLiner.jpg';
import saltAndPepperShakers from 'src/assets/images/products/kitchen/saltandpepper.jpg';
import utensilsOrganizer from 'src/assets/images/products/kitchen/utensilsOrganizer.jpg';
import tea from 'src/assets/images/products/kitchen/tea.jpg';
import starbucks from 'src/assets/images/products/kitchen/starbucks.jpg';
import spicerack from 'src/assets/images/products/kitchen/spicerack.jpg';
import fryingpans from 'src/assets/images/products/kitchen/fryingpans.jpg';
import pots from 'src/assets/images/products/kitchen/pots.jpg';
import paperTowelStand from 'src/assets/images/products/kitchen/paperTowelStand.jpg';
import placeMats from 'src/assets/images/products/kitchen/placemats.jpg';
import rug from 'src/assets/images/products/kitchen/rug.jpg';
import trivet from 'src/assets/images/products/kitchen/trivet.jpg';
import bakingMats from 'src/assets/images/products/kitchen/bakingMats.jpg';
import storagecubes from 'src/assets/images/products/kitchen/storagecubes.jpg';
import dishtowels from 'src/assets/images/products/kitchen/dishtowels.jpg';
import utensilSet from 'src/assets/images/products/kitchen/utensilSet.jpg';
import knifeSet from 'src/assets/images/products/kitchen/knifeSet.jpg';
import saltAndPepperGrinders from 'src/assets/images/products/kitchen/saltAndPepperGrinders.jpg';
import coffeemaker from 'src/assets/images/products/kitchen/coffeemaker.jpg';
import trashcan from 'src/assets/images/products/kitchen/trashcan.jpg';
import sinkCaddy from 'src/assets/images/products/kitchen/sinkCaddy.jpg';
import dryingrack from 'src/assets/images/products/kitchen/dryingrack.jpg';
import toddlerUtensils from 'src/assets/images/products/kitchen/toddlerUtensils.jpg';
import colorfulCups from 'src/assets/images/products/kitchen/colorfulCups.jpg';
import plasticCups from 'src/assets/images/products/kitchen/plasticCups.jpg';
import stackingCups from 'src/assets/images/products/kitchen/stackingCups.jpg';
import babybibs from 'src/assets/images/products/kitchen/babybibs.jpg';
import suctionPlates from 'src/assets/images/products/kitchen/suctionPlates.jpg';
import babyPlates from 'src/assets/images/products/kitchen/babyPlates.jpg';
import mixingbowl from 'src/assets/images/products/kitchen/mixingbowl.jpg';
import castiron from 'src/assets/images/products/kitchen/castiron.jpg';
import dutchoven from 'src/assets/images/products/kitchen/dutchoven.jpg';
import rollingpin from 'src/assets/images/products/kitchen/rollingpin.jpg';
import dinnerware from 'src/assets/images/products/kitchen/dinnerware.jpg';
import stemlessWineGlass from 'src/assets/images/products/kitchen/stemlessWineGlass.jpg';
import cuttingboard from 'src/assets/images/products/kitchen/cuttingboard.jpg';
import kitchenUtensilsSet from 'src/assets/images/products/kitchen/kitchenUtensilsSet.jpg';
import fruitbowl from 'src/assets/images/products/kitchen/fruitbowl.jpg';
import portableStove from 'src/assets/images/products/kitchen/portableStove.jpg';
import microwave from 'src/assets/images/products/kitchen/microwave.jpg';
import minifridge from 'src/assets/images/products/kitchen/minifridge.jpg';
import rattanPendant from 'src/assets/images/products/kitchen/rattanPendant.jpg';
import bohoLightFixture from 'src/assets/images/products/kitchen/bohoLightFixture.jpg';
import artificialBirdOfParadise from 'src/assets/images/products/kitchen/artificialBirdOfParadise.jpg';

import antiSlipGripTape from 'src/assets/images/products/bathroom/antiSlipGripTape.jpg';
import stoneMat from 'src/assets/images/products/bathroom/stoneMat.jpg';
import publicGoodsHandSoap from 'src/assets/images/products/bathroom/publicGoodsHandSoap.jpg';
import showerCaddy from 'src/assets/images/products/bathroom/showerCaddy.jpg';
import toiletPaperStand from 'src/assets/images/products/bathroom/toiletPaperStand.jpg';
import bathroomCanister from 'src/assets/images/products/bathroom/bathroomCanister.jpg';
import lotion from 'src/assets/images/products/bathroom/lotion.jpg';
import blowdryer from 'src/assets/images/products/bathroom/blowdryer.jpg';
import beachTowel from 'src/assets/images/products/bathroom/beachTowel.jpg';
import towelBar from 'src/assets/images/products/bathroom/towelBar.jpg';

import grillCover from 'src/assets/images/products/upperdeck/grillCover.jpg';
import grill from 'src/assets/images/products/upperdeck/grill.jpg';
import jenga from 'src/assets/images/products/upperdeck/jenga.jpg';
import stringLight from 'src/assets/images/products/upperdeck/stringLight.jpg';
import hangingKit from 'src/assets/images/products/upperdeck/hangingKit.jpg';
import sideTable from 'src/assets/images/products/upperdeck/sideTable.jpg';

import bohoRugRunner from 'src/assets/images/products/livingroom/bohoRugRunner.jpg';
import linenCurtains from 'src/assets/images/products/livingroom/linenCurtains.jpg';
import portableAC from 'src/assets/images/products/livingroom/portableAC.jpg';
import eero from 'src/assets/images/products/livingroom/eero.jpg';
import accentArmChair from 'src/assets/images/products/livingroom/accentArmChair.jpg';
import asymmetricalMirror from 'src/assets/images/products/livingroom/asymmetricalMirror.jpg';
import vases from 'src/assets/images/products/livingroom/vases.jpg';
import flowers from 'src/assets/images/products/livingroom/flowers.jpg';
import shoebench from 'src/assets/images/products/livingroom/shoebench.jpg';
import slippers from 'src/assets/images/products/livingroom/slippers.jpg';
import livingRoomCeilingFan from 'src/assets/images/products/livingroom/livingRoomCeilingFan.jpg';
import floorlamp from 'src/assets/images/products/livingroom/floorlamp.jpg';
import livingRoomCurtains from 'src/assets/images/products/livingroom/livingRoomCurtains.jpg';
import thermostat from 'src/assets/images/products/livingroom/thermostat.jpg';
import doorhandle from 'src/assets/images/products/livingroom/doorhandle.jpg';
import lock from 'src/assets/images/products/livingroom/lock.jpg';
import palmplants from 'src/assets/images/products/livingroom/palmplants.jpg';
import bohoRattanPendant from 'src/assets/images/products/livingroom/bohoRattanPendant.jpg';
import birds from 'src/assets/images/products/livingroom/birds.jpg';

import fan from 'src/assets/images/products/outdoor/fan.jpg';
import swimsuitDryer from 'src/assets/images/products/outdoor/swimsuitDryer.jpg';
import foosball from 'src/assets/images/products/outdoor/foosball.jpg';
import connectfour from 'src/assets/images/products/outdoor/connectfour.jpg';
import cornhole from 'src/assets/images/products/outdoor/cornhole.jpg';
import outdoorSideTable from 'src/assets/images/products/outdoor/sidetable.jpg';
import pendantlight from 'src/assets/images/products/outdoor/pendantlight.jpg';
import ceilingfan from 'src/assets/images/products/outdoor/ceilingfan.jpg';
import artificialplant from 'src/assets/images/products/outdoor/artificialplant.jpg';
import tv from 'src/assets/images/products/outdoor/tv.jpg';
import patio from 'src/assets/images/products/outdoor/patio.jpg';
import coffeetable from 'src/assets/images/products/outdoor/coffeetable.jpg';

import mattress from 'src/assets/images/products/bedroom/mattress.jpg';
import boxspring from 'src/assets/images/products/bedroom/boxspring.jpg';
import throwpillow from 'src/assets/images/products/bedroom/throwpillow.jpg';
import throwpillow2 from 'src/assets/images/products/bedroom/throwpillow2.jpg';
import throwpillow3 from 'src/assets/images/products/bedroom/throwpillow3.jpg';
import throwpillow4 from 'src/assets/images/products/bedroom/throwpillow4.jpg';
import fauxplant from 'src/assets/images/products/bedroom/fauxplant.jpg';
import tvwallmount from 'src/assets/images/products/bedroom/tvwallmount.jpg';
import rug1 from 'src/assets/images/products/bedroom/rug1.jpg';
import bench from 'src/assets/images/products/bedroom/bench.jpg';
import mirror from 'src/assets/images/products/bedroom/mirror.jpg';
import wallart from 'src/assets/images/products/bedroom/wallart.jpg';
import bohoceilinglight from 'src/assets/images/products/bedroom/bohoceilinglight.jpg';
import towerfan from 'src/assets/images/products/bedroom/towerfan.jpg';
import lumbarpillow from 'src/assets/images/products/bedroom/lumbarpillow.jpg';


const chance = new Chance();

const KitchenProductsData = [
  {
    title: 'Paper Towel Holder',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: paperTowelHolder,
    link: 'https://amzn.to/3PMA9eA',
    id: 1,
  },
  {
    title: 'Dishwasher Magnet',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: dishwasherMagnet,
    link: 'https://amzn.to/4akTagt',
    id: 2,
  },{
    title: 'Shelf Liner',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: shelfLiner,
    link: 'https://amzn.to/4cEsetH',
    id: 3,
  },{
    title: 'Salt & Pepper Shakers',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: saltAndPepperShakers,
    link: 'https://amzn.to/3J8Chti',
    id: 4,
  },{
    title: 'Utensils Organizer',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: utensilsOrganizer,
    link: 'https://amzn.to/3TAV6dG',
    id: 5,
  },{
    title: 'Tea',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: tea,
    link: 'https://amzn.to/3J56bia',
    id: 6,
  },{
    title: 'Starbucks K Pods',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: starbucks,
    link: 'https://amzn.to/3vG1OHp',
    id: 7,
  },{
    title: 'Spice Rack',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: spicerack,
    link: 'https://amzn.to/4aGDOmu',
    id: 8,
  },{
    title: 'Frying Pans',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: fryingpans,
    link: 'https://amzn.to/4agVBRh',
    id: 9,
  },{
    title: 'Steel Pots',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: pots,
    link: 'https://amzn.to/3U2Y4sX',
    id: 10,
  },{
    title: 'Paper Towel Stand',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: paperTowelStand,
    link: 'https://amzn.to/4cENcsq',
    id: 11,
  },{
    title: 'Placemats',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: placeMats,
    link: 'https://amzn.to/49lzBmU',
    id: 12,
  },{
    title: 'Rug',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: rug,
    link: 'https://amzn.to/43MQaaq',
    id: 13,
  },{
    title: 'Trivet',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: trivet,
    link: 'https://amzn.to/3TKPBJh',
    id: 14,
  },{
    title: 'Baking Mat',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: bakingMats,
    link: 'https://amzn.to/3J51gxQ',
    id: 15,
  },
  {
    title: 'Storage Cubes',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: storagecubes,
    link: 'https://amzn.to/3U00XL4',
    id: 16,
  },{
    title: 'Dish Towels',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: dishtowels,
    link: 'https://amzn.to/3VK0u0F',
    id: 17,
  },{
    title: 'Utensil Set',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: utensilSet,
    link: 'https://amzn.to/43FezyB',
    id: 18,
  },{
    title: 'Knife Set',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: knifeSet,
    link: 'https://amzn.to/3TG8BZD',
    id: 19,
  },
  {
    title: 'Salt & Pepper Grinders',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: saltAndPepperGrinders,
    link: 'https://amzn.to/3PMnok9',
    id: 20,
  },
  {
    title: 'Coffee Maker',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: coffeemaker,
    link: 'https://amzn.to/4aEZBuB',
    id: 21,
  },{
    title: 'Outdoor Step Trash Can',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: trashcan,
    link: 'https://amzn.to/3TZ9oWO',
    id: 22,
  },{
    title: 'Sink Caddy',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: sinkCaddy,
    link: 'https://amzn.to/3PMBMZK',
    id: 23,
  },{
    title: 'Drying Rack',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: dryingrack,
    link: 'https://amzn.to/49gkb3m',
    id: 24,
  },
  {
    title: 'Toddler Utensils',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: toddlerUtensils,
    link: 'https://amzn.to/3TKPU6T',
    id: 25,
  },{
    title: 'Colorful Cups',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: colorfulCups,
    link: 'https://amzn.to/3J17te6',
    id: 26,
  },{
    title: 'Clear Plastic Cups',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: plasticCups,
    link: 'https://amzn.to/3U2YOhJ',
    id: 27,
  },{
    title: 'Stacking Cups',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: stackingCups,
    link: 'https://amzn.to/3VK5e6p',
    id: 28,
  },{
    title: 'Baby Bib',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: babybibs,
    link: 'https://amzn.to/4cEJbnT',
    id: 29,
  },{
    title: 'Suction Plates',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: suctionPlates,
    link: 'https://amzn.to/3vBUnAW',
    id: 30,
  },{
    title: 'Baby Plate',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: babyPlates,
    link: 'https://amzn.to/4aDY0Fh',
    id: 31,
  },{
    title: 'Mixing Bowl',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: mixingbowl,
    link: 'https://amzn.to/3PLKgAq',
    id: 32,
  },{
    title: 'Cast Iron',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: castiron,
    link: 'https://amzn.to/43LeSYp',
    id: 33,
  },{
    title: 'Dutch Oven',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: dutchoven,
    link: 'https://amzn.to/4cG7EsY',
    id: 34,
  },{
    title: 'Rolling Pin',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: rollingpin,
    link: 'https://amzn.to/4cDy1j7',
    id: 35,
  },{
    title: 'Dinnerware',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: dinnerware,
    link: 'https://amzn.to/3TGRIhj',
    id: 36,
  },{
    title: 'Stemless Wine Glass',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: stemlessWineGlass,
    link: 'https://amzn.to/3J57Owi',
    id: 37,
  },{
    title: 'Cutting Board',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: cuttingboard,
    link: 'https://amzn.to/49Ck5U5',
    id: 38,
  },{
    title: 'Kitchen Utensils Set',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: kitchenUtensilsSet,
    link: 'https://amzn.to/3VOO9Zn',
    id: 39,
  },{
    title: 'Fruit Bowl',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: fruitbowl,
    link: 'https://amzn.to/49qPFDU',
    id: 40,
  },{
    title: 'Portable Stove',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: portableStove,
    link: 'https://amzn.to/4aHqo9N',
    id: 41,
  },{
    title: 'Microwave',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: microwave,
    link: 'https://amzn.to/4aBXDLB',
    id: 42,
  },{
    title: 'Mini Fridge',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: minifridge,
    link: 'https://amzn.to/43KzGiX',
    id: 43,
  },{
    title: 'Rattan Pendant Light Fixture',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: rattanPendant,
    link: 'https://amzn.to/43L6uZh',
    id: 44,
  },{
    title: 'Boho Light Fixture',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: bohoLightFixture,
    link: 'https://amzn.to/3POZzs1',
    id: 45,
  },{
    title: 'Artificial Bird of Paradise',
    category: ['kitchen'],
    stock: true,
    colors: ['#1890FF'],
    photo: artificialBirdOfParadise,
    link: 'https://amzn.to/3J3RdsY',
    id: 46,
  }
];

const BathroomProductsData = [
  {
    title: 'Anti Slip Grip Tape',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: antiSlipGripTape,
    link: 'https://amzn.to/3PReEt5',
    id: 47,
  },
  {
    title: 'Stone Mat',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: stoneMat,
    link: 'https://amzn.to/3TJRki5',
    id: 48,
  },
  {
    title: 'Public Goods Hand Soap',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: publicGoodsHandSoap,
    link: 'https://amzn.to/4ayeor0',
    id: 49,
  },
  {
    title: 'Towel Bar',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: towelBar,
    link: 'https://amzn.to/4cCs9qm',
    id: 51,
  },
  {
    title: 'Shower Caddy',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: showerCaddy,
    link: 'https://amzn.to/3VGOEEF',
    id: 52,
  },
  {
    title: 'Toilet Paper Stand',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: toiletPaperStand,
    link: 'https://amzn.to/43QJeJ9',
    id: 53,
  },
  {
    title: 'Bathroom Canister',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: bathroomCanister,
    link: 'https://amzn.to/4amiJhj',
    id: 54,
  },
  {
    title: 'Aveeno Body Lotion',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: lotion,
    link: 'https://amzn.to/3vFibE5',
    id: 55,
  },
  {
    title: 'Hair Blow Dryer',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: blowdryer,
    link: 'https://amzn.to/49xAs4g',
    id: 56,
  },
  {
    title: 'Beach Towel',
    category: ['bathroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: beachTowel,
    link: 'https://amzn.to/49tWMeO',
    id: 57,
  }
]

const UpperdeckProductsData = 
[
  {
    title: 'Grill Cover',
    category: ['upperdeck'],
    stock: true,
    colors: ['#1890FF'],
    photo: grillCover,
    link: 'https://amzn.to/49k2a4g',
    id: 58,
  },
  {
    title: 'Grill',
    category: ['upperdeck'],
    stock: true,
    colors: ['#1890FF'],
    photo: grill,
    link: 'https://amzn.to/43Op7eK',
    id: 59,
  },
  {
    title: 'Jenga',
    category: ['upperdeck'],
    stock: true,
    colors: ['#1890FF'],
    photo: jenga,
    link: 'https://amzn.to/3vwTY2T',
    id: 60,
  },
  {
    title: 'String Lights',
    category: ['upperdeck'],
    stock: true,
    colors: ['#1890FF'],
    photo: stringLight,
    link: 'https://amzn.to/3vQsjK6',
    id: 61,
  },
  {
    title: 'String Lights Hanging Kit',
    category: ['upperdeck'],
    stock: true,
    colors: ['#1890FF'],
    photo: hangingKit,
    link: 'https://amzn.to/3PRAflk',
    id: 62,
  },
  {
    title: 'Outdoor Side Table',
    category: ['upperdeck'],
    stock: true,
    colors: ['#1890FF'],
    photo: sideTable,
    link: 'https://amzn.to/3VJRZmk',
    id: 63,
  }
]

const LivingRoomProductsData =
[
  {
    title: 'Vases',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: vases,
    link: 'https://amzn.to/49kSoyM',
    id: 82,
  },
  {
    title: 'Bird Statues',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: birds,
    link: 'https://amzn.to/49scbwr',
    id: 83,
  },
  {
    title: 'Flowers',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: flowers,
    link: 'https://amzn.to/43MW3nO',
    id: 84,
  },
  {
    title: 'Shoe Bench',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: shoebench,
    link: 'https://amzn.to/444lqSt',
    id: 85,
  },
  {
    title: 'Pillow Slippers',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: slippers,
    link: 'https://amzn.to/49wv9lf',
    id: 86,
  },
  {
    title: 'Ceiling Fan',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: livingRoomCeilingFan,
    link: 'https://amzn.to/3U5Pd9D',
    id: 87,
  },
  {
    title: 'Arched Floor Lamp',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: floorlamp,
    link: 'https://amzn.to/49r9iff',
    id: 88,
  },
  {
    title: 'Curtains',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: livingRoomCurtains,
    link: 'https://amzn.to/4anUn6Q',
    id: 89,
  },
  {
    title: 'Honeywell Thermostat',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: thermostat,
    link: 'https://amzn.to/4auwsTq',
    id: 90,
  },
  {
    title: 'Door Handle',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: doorhandle,
    link: 'https://amzn.to/3J9ysV6',
    id: 91,
  },
  {
    title: 'Schlage Smart Lock',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: lock,
    link: 'https://amzn.to/4aLa3Rw',
    id: 92,
  },
  {
    title: 'Ceiling Palm Plants',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: palmplants,
    link: 'https://amzn.to/43N81Od',
    id: 93,
  },
  {
    title: 'Boho Rattan Light Pendant',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: bohoRattanPendant,
    link: 'https://amzn.to/3PSXf3c',
    id: 94,
  },
]

const BedroomProductsData =
[
  {
    title: 'Bladeless Tower Fan',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: towerfan,
    link: 'https://amzn.to/3VNbwm0',
    id: 95,
  },
  {
    title: 'Mattress',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: mattress,
    link: 'https://amzn.to/3TLdqAN',
    id: 96,
  },
  {
    title: 'Boho Ceiling Light',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: bohoceilinglight,
    link: 'https://amzn.to/4cLOj9B',
    id: 97,
  },
  {
    title: 'Lumbar Pillow',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: lumbarpillow,
    link: 'https://amzn.to/3PMia7Z',
    id: 98,
  },
  {
    title: 'Mattress Box Spring',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: boxspring,
    link: 'https://amzn.to/4auxi2w',
    id: 99,
  },
  {
    title: 'Throw Pillows',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: throwpillow,
    link: 'https://amzn.to/3PMigwn',
    id: 100,
  },
  {
    title: 'Throw Pillows Embroidered Leaf',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: throwpillow2,
    link: 'https://amzn.to/3U94FCd',
    id: 101,
  },
  {
    title: 'Faux Plant',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: fauxplant,
    link: 'https://amzn.to/3TQBjHl',
    id: 102,
  },
  {
    title: 'TV Wall Mount',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: tvwallmount,
    link: 'https://amzn.to/3U94Ihn',
    id: 103,
  },
  {
    title: 'Master Bedroom Rug',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: rug1,
    link: 'https://amzn.to/3TOJyDH',
    id: 104,
  },
  {
    title: 'Bench',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: bench,
    link: 'https://amzn.to/3U5MgWD',
    id: 105,
  },
  {
    title: 'Throw Pillow Cotton Blend',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: throwpillow3,
    link: 'https://amzn.to/4cOjzVQ',
    id: 106,
  },
  {
    title: 'Boho Decorative Throw Pillow',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: throwpillow4,
    link: 'https://amzn.to/3TOI9wN',
    id: 107,
  },
  {
    title: 'Mirror',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: mirror,
    link: 'https://amzn.to/43KN46F',
    id: 108,
  },
  {
    title: 'Wall Art',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: wallart,
    link: 'https://amzn.to/43KYWWn',
    id: 109,
  },
  {
    title: 'Bamboo Pendant Light',
    category: ['bedroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: bohoRattanPendant,
    link: 'https://amzn.to/49sCN0e',
    id: 110,
  },
]


const BasementLivingRoomProductsData = 
[
  {
    title: 'Boho Rug Runner',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: bohoRugRunner,
    link: 'https://amzn.to/4ak6dPl',
    id: 64,
  },
  {
    title: 'Portable AC',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: portableAC,
    link: 'https://amzn.to/49jzqsk',
    id: 65,
  },
  {
    title: 'Blackout Linen Curtains',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: linenCurtains,
    link: 'https://amzn.to/4cLxhIJ',
    id: 66,
  },
  {
    title: 'Eero',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: eero,
    link: 'https://amzn.to/4arIkp1',
    id: 67,
  },
  {
    title: 'Accent Arm Chair',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: accentArmChair,
    link: 'https://amzn.to/3TE6ZiQ',
    id: 68,
  },
  {
    title: 'Asymmetrical Mirror',
    category: ['livingroom'],
    stock: true,
    colors: ['#1890FF'],
    photo: asymmetricalMirror,
    link: 'https://amzn.to/3U2EGMD',
    id: 69,
  }
]

const OutdoorProductsData = 
[
  {
    title: 'Outdoor Wall Mounted Fan',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: fan,
    link: 'https://amzn.to/3U5OLIt',
    id: 70,
  },
  {
    title: 'Swimsuit Dryer',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: swimsuitDryer,
    link: 'https://amzn.to/3xjf1WY',
    id: 71,
  },
  {
    title: 'Foosball table',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: foosball,
    link: 'https://amzn.to/3PNwAF9',
    id: 72,
  },
  {
    title: 'Connect Four',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: connectfour,
    link: 'https://amzn.to/43NzEXs',
    id: 73,
  },
  {
    title: 'Cornhole',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: cornhole,
    link: 'https://amzn.to/43NUs16',
    id: 74,
  },
  {
    title: 'Outdoor Side Table',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: outdoorSideTable,
    link: 'https://amzn.to/4aHwc34',
    id: 75,
  },
  {
    title: 'Pendant Light',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: pendantlight,
    link: 'https://amzn.to/3U5feWN',
    id: 76,
  },
  {
    title: 'Ceiling Fan',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: ceilingfan,
    link: 'https://amzn.to/4b1zU7V',
    id: 77,
  },
  {
    title: 'Artificial Areca Palm Plant',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: artificialplant,
    link: 'https://amzn.to/4aeGNTb',
    id: 78,
  },
  {
    title: 'Outdoor TV',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: tv,
    link: 'https://amzn.to/3xktmCu',
    id: 79,
  },
  {
    title: 'Patio Furniture Set',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: patio,
    link: 'https://amzn.to/3TMdYXk',
    id: 80,
  },
  {
    title: 'Coffee Table',
    category: ['outdoorarea'],
    stock: true,
    colors: ['#1890FF'],
    photo: coffeetable,
    link: 'https://amzn.to/3POWU1q',
    id: 81,
  },
]


const ProductsData = KitchenProductsData.concat(BathroomProductsData).concat(UpperdeckProductsData).concat(BasementLivingRoomProductsData).concat(OutdoorProductsData).concat(LivingRoomProductsData).concat(BedroomProductsData);

mock.onGet('/api/data/eCommerce/ProductsData').reply(() => {
  return [200, ProductsData];
});

export default ProductsData;
