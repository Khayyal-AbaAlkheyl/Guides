/**
 * Curated Wikimedia Commons photos for Discover Azerbaijan (Paris image rules).
 * Run: node scripts/export-azerbaijan-images.mjs
 */
export const W960 = (path) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/960px-${path.split('/').pop()}`;

export const W960EN = (path) =>
  `https://upload.wikimedia.org/wikipedia/en/thumb/${path}/960px-${path.split('/').pop()}`;

function set(hero, detail = hero, photoSpot = detail, map = photoSpot) {
  return { hero, detail, photoSpot, map };
}

export const AZERBAIJAN_IMAGES = {
  'Old City (Icherisheher)': set(
    W960('8/81/Maiden_Tower_Baku.jpg'),
    W960('5/50/Palace_of_Shirvanshahs_common.JPG'),
    W960('f/fc/Maiden_tower_IMG_8521.jpg')
  ),
  'Maiden Tower': set(
    W960('f/fc/Maiden_tower_IMG_8521.jpg'),
    W960('8/81/Maiden_Tower_Baku.jpg')
  ),
  'Palace of the Shirvanshahs': set(W960('5/50/Palace_of_Shirvanshahs_common.JPG')),
  'Baku Boulevard': set(
    W960('1/14/Baku_Seaside_Bulevard.JPG'),
    W960('3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg')
  ),
  'Azerbaijan Carpet Museum': set(W960('5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg')),
  'Highland Park': set(
    W960('3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg'),
    W960EN('0/08/Flame_towers_baku.jpg')
  ),
  'Heydar Aliyev Center': set(
    W960EN('d/d3/Heydar_Aliyev_Cultural_Center.jpg'),
    W960('4/40/Baku_Montage.jpg')
  ),
  'Flame Towers': set(
    W960EN('0/08/Flame_towers_baku.jpg'),
    W960('2/2e/Flame_towers_from_Baku_boulevard.JPG')
  ),
  'Alley of Martyrs': set(
    W960('3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg'),
    W960EN('0/08/Flame_towers_baku.jpg')
  ),
  'Nizami Street': set(
    W960('4/47/Nizami_street_historical_buildings.JPG'),
    W960('4/40/Baku_Montage.jpg')
  ),
  'Gobustan National Park': set(
    W960('4/4e/Gobustan_State_Reserve_7.jpg'),
    W960('6/66/Gobustan_mud_volcanoes_01.jpg')
  ),
  'Mud Volcanoes': set(
    W960('6/66/Gobustan_mud_volcanoes_01.jpg'),
    W960('4/4e/Gobustan_State_Reserve_7.jpg')
  ),
  'Ateshgah Fire Temple': set(W960('f/fa/Ateshgah_of_Baku.jpg')),
  'Yanar Dag': set(
    W960('b/b1/Yanar_Dag.jpg'),
    W960('f/fa/Ateshgah_of_Baku.jpg')
  ),
  'Shamakhi Juma Mosque': set(
    W960('c/cc/Shamakhi_Juma_Mosque.jpg'),
    W960('2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg')
  ),
  'Lahij': set(
    W960('9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg')
  ),
  'Palace of Shaki Khans': set(W960('2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg')),
  'Sheki Caravanserai': set(
    W960('e/ec/Sheki_Upper_Caravanserai_004_4085.jpg'),
    W960('0/08/Caravanserai_Hotel.jpg')
  ),
  'Church of Kish': set(
    W960('2/2c/Church%2C_Kish_%28P1090438%29.jpg'),
    W960('2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg')
  ),
  'Tufandag Cable Car': set(
    W960('9/95/Gabala_Azerbaijan.jpg'),
    W960('f/f7/Xinaliq.jpg')
  ),
  'Nohur Lake': set(
    W960('9/95/Gabala_Azerbaijan.jpg'),
    W960('f/f7/Xinaliq.jpg')
  ),
  'Seven Beauties Waterfall': set(
    W960('9/95/Gabala_Azerbaijan.jpg'),
    W960('f/f7/Xinaliq.jpg')
  ),
  'Qechresh Forest': set(
    W960('f/f7/Xinaliq.jpg'),
    W960('9/95/Gabala_Azerbaijan.jpg')
  ),
  'Khinalug': set(
    W960('f/f7/Xinaliq.jpg'),
    W960('9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg')
  ),
  'Four Seasons Hotel Baku': set(
    W960('3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg'),
    W960EN('0/08/Flame_towers_baku.jpg')
  ),
  'Fairmont Baku Flame Towers': set(
    W960EN('0/08/Flame_towers_baku.jpg'),
    W960('2/2e/Flame_towers_from_Baku_boulevard.JPG')
  ),
  'JW Marriott Absheron Baku': set(
    W960('3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg'),
    W960('1/14/Baku_Seaside_Bulevard.JPG')
  ),
  'Lahij Guest House': set(
    W960('9/93/Driving_back_to_Baku-_this_is_the_end_of_my_Azerbaijan_tour_%2836637671423%29.jpg')
  ),
  'Marxal Resort & Spa': set(
    W960('2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg'),
    W960('e/ec/Sheki_Upper_Caravanserai_004_4085.jpg')
  ),
  'Sheki Palace Hotel': set(
    W960('e/ec/Sheki_Upper_Caravanserai_004_4085.jpg'),
    W960('2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg')
  ),
  'Chenot Palace Gabala': set(
    W960('9/95/Gabala_Azerbaijan.jpg'),
    W960('f/f7/Xinaliq.jpg')
  ),
  'Qafqaz Riverside Resort': set(
    W960('9/95/Gabala_Azerbaijan.jpg'),
    W960('f/f7/Xinaliq.jpg')
  ),
  'Macara Lake Park Hotel': set(
    W960('f/f7/Xinaliq.jpg'),
    W960('9/95/Gabala_Azerbaijan.jpg')
  ),
  'United Coffee Beans': set(
    W960('4/47/Nizami_street_historical_buildings.JPG'),
    W960('4/40/Baku_Montage.jpg')
  ),
  'Şirvanşah Museum Restaurant': set(W960('5/50/Palace_of_Shirvanshahs_common.JPG')),
  'Sky Grill': set(
    W960('3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg'),
    W960EN('0/08/Flame_towers_baku.jpg')
  ),
  'MariVanna': set(
    W960('4/47/Nizami_street_historical_buildings.JPG'),
    W960('4/40/Baku_Montage.jpg')
  ),
  'SAHIL Restaurant': set(
    W960('1/14/Baku_Seaside_Bulevard.JPG'),
    W960('3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg')
  ),
  'Piti House': set(
    W960('2/29/%C5%9E%C9%99ki_xan_saray%C4%B1.jpg'),
    W960('e/ec/Sheki_Upper_Caravanserai_004_4085.jpg')
  ),
  'Coffee Moffie': set(
    W960('4/47/Nizami_street_historical_buildings.JPG'),
    W960('4/40/Baku_Montage.jpg')
  ),
  'Passage 145': set(
    W960('8/81/Maiden_Tower_Baku.jpg'),
    W960('5/50/Palace_of_Shirvanshahs_common.JPG')
  ),
  'Baku Roasting Company': set(
    W960('4/47/Nizami_street_historical_buildings.JPG'),
    W960('4/40/Baku_Montage.jpg')
  ),
  'Port Baku Mall': set(
    W960EN('0/08/Flame_towers_baku.jpg'),
    W960('3/33/A_view_of_the_Baku_bay%2C_Azerbaijan.jpg')
  ),
  'Deniz Mall': set(
    W960('4/47/Nizami_street_historical_buildings.JPG'),
    W960('4/40/Baku_Montage.jpg')
  ),
  '28 Mall': set(
    W960('4/47/Nizami_street_historical_buildings.JPG'),
    W960EN('0/08/Flame_towers_baku.jpg')
  ),
  'Yashil Bazaar': set(
    W960('5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg'),
    W960('8/81/Maiden_Tower_Baku.jpg')
  ),
  'Heydar Aliyev International Airport': set(
    W960('5/5e/Heydar_Aliyev_International_Airport.jpg'),
    W960EN('d/d3/Heydar_Aliyev_Cultural_Center.jpg')
  ),
};
