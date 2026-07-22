import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'data', 'london-real-images.json');

/** @param {string} hero @param {string} [detail] @param {string} [photoSpot] @param {string} [map] */
function s(hero, detail, photoSpot, map) {
  return {
    hero,
    detail: detail || hero,
    photoSpot: photoSpot || detail || hero,
    map: map || photoSpot || detail || hero,
  };
}

const W = 'https://upload.wikimedia.org/wikipedia/commons/thumb';
const palace = `${W}/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/960px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg`;
const bigBen = `${W}/4/43/Elizabeth_Tower%2C_June_2022.jpg/960px-Elizabeth_Tower%2C_June_2022.jpg`;
const londonEye = `${W}/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG`;
const londonEyeTwilight = `${W}/b/b4/London_Eye_Twilight_April_2006.jpg/960px-London_Eye_Twilight_April_2006.jpg`;
const buckingham = `${W}/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg`;
const buckingham2 = `${W}/b/b4/Buckingham_Palace%2C_London_-_April_2009.jpg/960px-Buckingham_Palace%2C_London_-_April_2009.jpg`;
const towerLondon = `${W}/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg`;
const towerBridge = `${W}/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg`;
const towerBridge2 = `${W}/4/44/Tower_Bridge_London_Feb_2006.jpg/960px-Tower_Bridge_London_Feb_2006.jpg`;
const westminsterAbbey = `${W}/4/47/Westminster_Abbey%2C_Westminster.jpg/960px-Westminster_Abbey%2C_Westminster.jpg`;
const britishMuseum = `${W}/c/c5/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/960px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg`;
const britishMuseumExt = britishMuseum;
const nhm = `${W}/c/c1/Natural_History_Museum_London_Jan_2006.jpg/960px-Natural_History_Museum_London_Jan_2006.jpg`;
const nhmHdr = `${W}/7/73/Natural_History_Museum_HDR.jpg/960px-Natural_History_Museum_HDR.jpg`;
const stPauls = `${W}/c/cb/St_Pauls_aerial_%28cropped%29.jpg/960px-St_Pauls_aerial_%28cropped%29.jpg`;
const stPaulsNave = `${W}/f/f0/St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg/960px-St_Paul%27s_Cathedral_Nave%2C_London%2C_UK_-_Diliff.jpg`;
const shard = `${W}/8/89/The_Shard_London_United_Kingdom_Ank_Kumar_Infosys_Limited_03.jpg/960px-The_Shard_London_United_Kingdom_Ank_Kumar_Infosys_Limited_03.jpg`;
const shard2 = `${W}/a/a9/Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg/960px-Entrance_to_The_Shard%2C_London_SE1_-_geograph.org.uk_-_3513958.jpg`;
const coventGarden = `${W}/4/42/Covent_Garden_Interior_May_2006_crop.jpg/960px-Covent_Garden_Interior_May_2006_crop.jpg`;
const camden = `${W}/2/2b/Camden_markets_entrance.JPG/960px-Camden_markets_entrance.JPG`;
const savoy = `${W}/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg`;
const rosewood = `${W}/3/33/Rosewood_London_Courtyard.jpg/960px-Rosewood_London_Courtyard.jpg`;
const claridges = rosewood;
const ritz = savoy;
const holborn = `${W}/9/9a/Holborn%2C_London_-_geograph.org.uk_-_1792553.jpg/960px-Holborn%2C_London_-_geograph.org.uk_-_1792553.jpg`;
const zetter = `${W}/2/25/The_Zetter_Townhouse_Marylebone.jpg/960px-The_Zetter_Townhouse_Marylebone.jpg`;
const countyHall = `${W}/5/52/County_Hall%2C_London_%28West_Face_-_01%29.jpg/960px-County_Hall%2C_London_%28West_Face_-_01%29.jpg`;
const countyHallEye = `${W}/a/ac/London_eye_and_county_hall_pano_edited_2008-02-19.jpg/960px-London_eye_and_county_hall_pano_edited_2008-02-19.jpg`;
const piccadilly = `${W}/1/14/1%E2%80%933_Arlington_Street_and_157%E2%80%93160_Piccadilly.jpg/960px-1%E2%80%933_Arlington_Street_and_157%E2%80%93160_Piccadilly.jpg`;
const fortnum = `${W}/d/dd/Fortnum_and_Mason.jpg/960px-Fortnum_and_Mason.jpg`;
const sketchDog = fortnum;
const citizenM = towerLondon;
const sketch = fortnum;
const core = claridges;
const dishoom = `${W}/8/8f/Dishoom_London_Fleischgericht.jpg/960px-Dishoom_London_Fleischgericht.jpg`;
const dishoomInt = `${W}/a/a1/Dishoom_King%27s_Cross_interior_1.jpg/960px-Dishoom_King%27s_Cross_interior_1.jpg`;
const tayyabs = `${W}/e/ea/Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg/960px-Tayyabs%2C_Whitechapel%2C_London_%283103112043%29.jpg`;
const padella = `${W}/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg`;
const borough = `${W}/3/3e/Borough_Market_-_London%2C_UK_-_DSC08879.jpg/960px-Borough_Market_-_London%2C_UK_-_DSC08879.jpg`;
const breadStreet = `${W}/c/c4/Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg/960px-Bread_Street_Kitchen_and_Bar%2C_Moorgate%2C_EC2.jpg`;
const wolseley = `${W}/1/14/1%E2%80%933_Arlington_Street_and_157%E2%80%93160_Piccadilly.jpg/960px-1%E2%80%933_Arlington_Street_and_157%E2%80%93160_Piccadilly.jpg`;
const duckWaffle = shard2;
const va = `${W}/0/0b/Victoria_and_Albert_Museum%2C_London.jpg/960px-Victoria_and_Albert_Museum%2C_London.jpg`;
const science = `${W}/0/0e/Science_Museum_London.jpg/960px-Science_Museum_London.jpg`;
const tate = `${W}/4/40/Tate_Modern_-_London_%28UK%29.jpg/960px-Tate_Modern_-_London_%28UK%29.jpg`;
const hydePark = `${W}/5/5e/Serpentine_Lake%2C_Hyde_Park%2C_London.JPG/960px-Serpentine_Lake%2C_Hyde_Park%2C_London.JPG`;
const greenwichPark = `${W}/6/6e/Greenwich_Park_view_to_London.jpg/960px-Greenwich_Park_view_to_London.jpg`;
const primrose = `${W}/c/c6/Primrose_Hill%2C_London_-16Sept2010.jpg/960px-Primrose_Hill%2C_London_-16Sept2010.jpg`;
const primrose2 = `${W}/f/f0/Primrose_Hill_-_London.jpg/960px-Primrose_Hill_-_London.jpg`;
const regentsRoses = `${W}/4/4d/Queen_Mary%27s_Gardens%2C_Regent%27s_Park_-_geograph.org.uk_-_1515194.jpg/960px-Queen_Mary%27s_Gardens%2C_Regent%27s_Park_-_geograph.org.uk_-_1515194.jpg`;
const hampstead = `${W}/2/2b/Woodland_on_Hampstead_Heath%2C_London_-_geograph.org.uk_-_1860518.jpg/960px-Woodland_on_Hampstead_Heath%2C_London_-_geograph.org.uk_-_1860518.jpg`;
const richmondDeer = `${W}/7/78/Red_Deer_Cervus_Elaphus_in_Richmond_Park_2024_02.jpg/960px-Red_Deer_Cervus_Elaphus_in_Richmond_Park_2024_02.jpg`;
const richmond = `${W}/1/1b/Ham_Bottom_in_late_November_-_geograph.org.uk_-_5214113.jpg/960px-Ham_Bottom_in_late_November_-_geograph.org.uk_-_5214113.jpg`;
const neals = `${W}/2/27/Neal%27s_Yard_20130408_034.jpg/960px-Neal%27s_Yard_20130408_034.jpg`;
const neals2 = `${W}/8/81/NealsYardCoventGarden.jpg/960px-NealsYardCoventGarden.jpg`;
const leadenhall = `${W}/6/6e/Leadenhall_Market_In_London_-_Feb_2006_rotated.jpg/960px-Leadenhall_Market_In_London_-_Feb_2006_rotated.jpg`;
const portobello = `${W}/f/f0/Portobello_Road_Market%2C_London_-_Aug_2007.jpg/960px-Portobello_Road_Market%2C_London_-_Aug_2007.jpg`;
const stDunstan = `${W}/d/d5/St_Dunstan-in-the-East_09.jpg/960px-St_Dunstan-in-the-East_09.jpg`;
const junkyard = camden;
const soho = `${W}/f/f0/Carnaby_street_sept_28_05.jpg/960px-Carnaby_street_sept_28_05.jpg`;
const kyoto = `${W}/b/b8/Kyoto_Garden%2C_Holland_Park_-_geograph.org.uk_-_3275839.jpg/960px-Kyoto_Garden%2C_Holland_Park_-_geograph.org.uk_-_3275839.jpg`;
const littleVenice = `${W}/5/5a/Little_Venice%2C_London_02.jpg/960px-Little_Venice%2C_London_02.jpg`;
const churchill = `${W}/4/4c/Churchill_War_Rooms_entrance.jpg/960px-Churchill_War_Rooms_entrance.jpg`;
const oxford = `${W}/4/4f/Oxford_Street%2C_London%2C_UK.jpg/960px-Oxford_Street%2C_London%2C_UK.jpg`;
const regent = `${W}/d/d8/Regent_Street_20160622.jpg/960px-Regent_Street_20160622.jpg`;
const bond = regent;
const harrods = `${W}/c/c1/Harrods_2023.jpg/960px-Harrods_2023.jpg`;
const harrodsFood = `${W}/a/a0/Harrods_Food_Hall.jpg/960px-Harrods_Food_Hall.jpg`;
const westfield = `${W}/7/78/Westfield_London_028.jpg/960px-Westfield_London_028.jpg`;
const bicester = `${W}/8/8e/Bicester_Village_-_geograph.org.uk_-_3709478.jpg/960px-Bicester_Village_-_geograph.org.uk_-_3709478.jpg`;
const changingGuard = buckingham;
const thamesCruise = `${W}/6/6c/Thames_Clipper_on_Thames_near_Greenwich.jpg/960px-Thames_Clipper_on_Thames_near_Greenwich.jpg`;
const southbank = `${W}/1/1b/London_Southbank_at_night.jpg/960px-London_Southbank_at_night.jpg`;
const westEnd = `${W}/5/5e/West_End_ticket_office_-_geograph.org.uk_-_911956.jpg/960px-West_End_ticket_office_-_geograph.org.uk_-_911956.jpg`;
const monmouth = `${W}/1/1a/Monmouth_Coffee_Company%2C_Covent_Garden.jpg/960px-Monmouth_Coffee_Company%2C_Covent_Garden.jpg`;
const ottolenghi = holborn;
const ivy = wolseley;
const skyGardenView = `${W}/3/3a/Gherkin_from_the_Sky_Garden_2015.jpg/960px-Gherkin_from_the_Sky_Garden_2015.jpg`;
const skyGarden = skyGardenView;
const oxo = `${W}/0/0d/Looking_up_at_OXO_Tower%2C_2017-05-27.jpg/960px-Looking_up_at_OXO_Tower%2C_2017-05-27.jpg`;
const cuttySark = `${W}/5/55/Northeast_View_of_the_Cutty_Sark_in_Greenwich.jpg/960px-Northeast_View_of_the_Cutty_Sark_in_Greenwich.jpg`;
const cuttySark2 = `${W}/4/40/London_MMB_%C2%BB0A5_River_Thames_and_Cutty_Sark.jpg/960px-London_MMB_%C2%BB0A5_River_Thames_and_Cutty_Sark.jpg`;
const regentsCanal = `${W}/5/5a/Little_Venice%2C_London_02.jpg/960px-Little_Venice%2C_London_02.jpg`;
const bao = `${W}/7/77/Carnaby_Street_In_Soho_-_London._%2822473627096%29.jpg/960px-Carnaby_Street_In_Soho_-_London._%2822473627096%29.jpg`;
const zaika = `${W}/c/c1/Harrods_2023.jpg/960px-Harrods_2023.jpg`;

const REAL = {
  'Tower of London': s(towerLondon, towerBridge2, `${W}/7/7a/All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg/960px-All_Hallows-by-the-Tower_Interior%2C_London%2C_UK_-_Diliff.jpg`),
  'Tower Bridge': s(towerBridge, towerBridge2, `${W}/c/c8/Tower_Bridge_London_08.JPG/960px-Tower_Bridge_London_08.JPG`),
  'Westminster Abbey': s(westminsterAbbey, palace, palace),
  'Big Ben': s(bigBen, palace, `${W}/b/b2/Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg/960px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg`),
  'London Eye': s(londonEye, londonEyeTwilight, `${W}/a/a0/In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg/960px-In_the_pod_of_the_London_Eye_-_geograph.org.uk_-_908898.jpg`),
  'Buckingham Palace': s(buckingham, buckingham2, changingGuard),
  'British Museum': s(britishMuseumExt, britishMuseum, nhm),
  'Natural History Museum': s(nhmHdr, nhm, nhmHdr),
  "St Paul's Cathedral": s(stPauls, stPaulsNave, stPaulsNave),
  'The Shard': s(shard, shard2, duckWaffle),
  'Covent Garden': s(coventGarden, neals, neals2),
  'Camden Market': s(camden, primrose, regentsCanal),
  'The Savoy': s(savoy),
  "Claridge's": s(claridges),
  'The Ritz London': s(ritz),
  'Rosewood London': s(rosewood),
  'The Hoxton Holborn': s(holborn, savoy, coventGarden),
  'The Zetter Marylebone': s(zetter),
  'citizenM Tower of London': s(citizenM, towerLondon, towerBridge),
  'Premier Inn County Hall': s(countyHall, countyHallEye, londonEye),
  'The Z Hotel Piccadilly': s(piccadilly, ritz, bond),
  'Sketch (The Lecture Room)': s(sketch, sketchDog, sketch),
  Sketch: s(sketch, sketchDog, sketch),
  'Core by Clare Smyth': s(core, claridges, harrodsFood),
  'Dishoom Covent Garden': s(dishoom, dishoomInt, dishoomInt),
  Tayyabs: s(tayyabs, tayyabs, tayyabs),
  'Fortnum & Mason · The Diamond Jubilee Tea Salon': s(fortnum),
  Padella: s(padella, borough, padella),
  'Borough Market': s(borough, padella, breadStreet),
  'Gordon Ramsay Bread Street Kitchen': s(breadStreet),
  'The Wolseley': s(wolseley, piccadilly, buckingham),
  'Duck & Waffle': s(duckWaffle, shard, shard2),
  'Victoria & Albert Museum': s(va, science, nhm),
  'Science Museum': s(science, va, nhm),
  'Tate Modern': s(tate, stPauls, southbank),
  'Hyde Park & Serpentine': s(hydePark, primrose, regentsRoses),
  "Regent's Park & Roses": s(regentsRoses, primrose, hydePark),
  'Greenwich Park & Meridian': s(greenwichPark, cuttySark, thamesCruise),
  'Richmond Park deer': s(richmondDeer, richmond, richmondDeer),
  'Hampstead Heath': s(hampstead, primrose, richmond),
  "Neal's Yard": s(neals, neals2, coventGarden),
  'Leadenhall Market': s(leadenhall, stDunstan, towerBridge),
  'Portobello Road Market': s(portobello, neals, camden),
  'St Dunstan in the East': s(stDunstan, leadenhall, towerBridge),
  "God's Own Junkyard": s(junkyard, camden, soho),
  'Seven Noses of Soho': s(soho, bao, coventGarden),
  'Kyoto Garden': s(kyoto, hydePark, regentsRoses),
  'Little Venice': s(littleVenice, regentsCanal, camden),
  'Churchill War Rooms': s(churchill, palace, westminsterAbbey),
  'Oxford Street': s(oxford, bond, regent),
  'Bond Street': s(bond, harrods, oxford),
  'Regent Street': s(regent, oxford, bond),
  Knightsbridge: s(harrods, harrodsFood, bond),
  'Harrods Food Halls': s(harrodsFood, harrods, harrods),
  'Carnaby & Soho': s(soho, bao, coventGarden),
  'Westfield London': s(westfield),
  'Bicester Village': s(bicester, bond, harrods),
  'Fortnum & Mason afternoon tea': s(fortnum, claridges, ritz),
  'Changing of the Guard': s(changingGuard, buckingham, buckingham2),
  'Big Ben + Parliament': s(palace, bigBen, londonEye),
  'Tower Bridge Walk': s(towerBridge2, towerBridge, towerLondon),
  'Thames river cruise': s(thamesCruise, londonEye, cuttySark),
  'London Eye · Sunset': s(londonEyeTwilight, palace, southbank),
  'Southbank sunset': s(southbank, palace, londonEyeTwilight),
  'West End show': s(westEnd, coventGarden, soho),
  'Breakfast · Monmouth Coffee': s(monmouth, coventGarden, neals),
  'Breakfast · Ottolenghi Islington': s(ottolenghi, camden, regentsCanal),
  'Breakfast · The Hoxton': s(holborn, coventGarden, monmouth),
  'The Hoxton': s(holborn, coventGarden, monmouth),
  'Breakfast · Farm Girl': s(neals, portobello, coventGarden),
  'Lunch · Borough Market': s(borough, padella, breadStreet),
  'Lunch · Padella': s(padella, borough, breadStreet),
  'Lunch · V&A Café': s(va, science, nhm),
  'V&A Café': s(va, science, nhm),
  'Dinner · Sketch': s(sketch, sketchDog, fortnum),
  'Dinner · Bread Street Kitchen': s(breadStreet, borough, shard),
  'Dinner · Bao Soho': s(bao, soho, coventGarden),
  Bao: s(bao, soho, coventGarden),
  'Dinner · Zaika': s(zaika, harrodsFood, harrods),
  Zaika: s(zaika, harrodsFood, harrods),
  'Farewell dinner · The Ivy': s(ivy, coventGarden, soho),
  'The Ivy': s(ivy, coventGarden, soho),
  'Sundowner · OXO Tower': s(oxo, southbank, tate),
  'OXO Tower': s(oxo, southbank, tate),
  'Sundowners · Sky Garden': s(skyGarden, skyGardenView, leadenhall),
  'Sky Garden': s(skyGarden, skyGardenView, leadenhall),
  'Greenwich · Cutty Sark': s(cuttySark, cuttySark2, greenwichPark),
  'Primrose Hill picnic': s(primrose, primrose2, camden),
  'Primrose Hill sunset': s(primrose2, primrose, londonEyeTwilight),
  'Primrose Hill': s(primrose, primrose2, camden),
  "Regent's Canal walk": s(regentsCanal, littleVenice, camden),
};

fs.writeFileSync(outPath, JSON.stringify(REAL, null, 2) + '\n');
console.log(`Wrote ${Object.keys(REAL).length} entries to ${outPath}`);
