/*******************************************************************************
** Source
**
** The source(s) of Dredmorpedia's data.
*******************************************************************************/

Dredmor.Source = {};

/**
** Current
**
** The current source.
*/
Dredmor.Source.Current = null;

/**
** Source List
**
** List of sources.
*/
Dredmor.Source.List =
[
	{
		id:     genId(),
		dir:	'data',
		title:  'Base Game',
		href:   'http://dungeonsofdredmor.com/',
		active: true,
		required: true
	},
	{
		id:     genId(),
		dir: 	'expansion',
		tag: 	'RotDG',
		title: 	'Realm of the Diggle Gods',
		href: 	'http://store.steampowered.com/app/98820/',
		active: true
	},
	{
		id:     genId(),
		dir: 	'expansion2',
		tag: 	'YHTNTEP',
		title: 	'You Have To Name The Expansion Pack',
		href: 	'http://www.gaslampgames.com/2012/04/30/free-dlc-for-dungeons-of-dredmor-you-have-to-name-the-expansion-pack/',
		active: true
	},
	{
		id:     genId(),
		dir: 	'expansion3',
		tag: 	'CotW',
		title: 	'Conquest of the Wizardlands',
		href: 	'http://www.gaslampgames.com/2012/07/05/conquest-of-the-wizardlands-august-1st/',
		active: true
	},
	{
		id:     genId(),
		dir: 	'windmagic',
		tag: 	'WM Mod',
		title: 	'Wind Magic Mod',
		href: 	'http://community.gaslampgames.com/threads/1-08-wind-magic.1591/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir: 	'essential',
		tag: 	'E Mod',
		title: 	'Essential DoD Mod',
		href: 	'http://community.gaslampgames.com/threads/essential-dod-skills-i-and-ii-finally-game-ready.1770/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir: 	'swiftstriker',
		tag: 	'SS Mod',
		title: 	'Swift Striker Mod',
		href: 	'http://community.gaslampgames.com/threads/swiftstriker-skill-line-released.1944/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir: 	'interiordredmorating',
		tag: 	'ID Mod',
		title: 	'Interior Dredmorating Mod',
		href: 	'http://community.gaslampgames.com/threads/interior-dredmorating-1-0.2158/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir: 	'runecaster',
		tag: 	'RC Mod',
		title: 	'Rune Caster Mod',
		href: 	'http://community.gaslampgames.com/threads/runecaster-mod-craft-runes-and-destroy-your-enemies.2283/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'diregourmand',
		tag:	'DG Mod',
		title:  'Dire Gourmand Mod',
		href:   'http://community.gaslampgames.com/threads/dire-gourmand-0-5-revision.2173/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'roguishrenovation',
		tag:	'RR Mod',
		title:  'Roguish Renovation Mod',
		href:   'http://community.gaslampgames.com/threads/roguish-renovation.2561/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'faxpax',
		tag:	'FP Mod',
		title:  'FaxPax Mod',
		href:   'http://community.gaslampgames.com/threads/faxpax-a-thing-what-fax-made.2397/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'chronomancy',
		tag:	'C Mod',
		title:  'Chronomancy Mod',
		href:   'http://community.gaslampgames.com/threads/chronomancy-time-manipulation-skill.2642/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'adebacleofdiggles',
		tag:	'DD Mod',
		title:  'Debacle of Diggles Mod',
		href:   'https://archive-community.dredmor.com/threads/a-debacle-of-diggles.3055/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'advancedcraftnsmelt',
		tag:	'ACS Mod',
		title:  'Advanced Craft n Smelt Mod',
		href:   'https://archive-community.dredmor.com/threads/craft-advanced-craftnsmelt.5082/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'asciiinvasion',
		tag:	'AI Mod',
		title:  'ASCII Invasion Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=1980224569',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'aztecnologist',
		tag:	'AZ Mod',
		title:  'Aztecnologist Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=3286029943',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'caskofamontillado',
		tag:	'CA Mod',
		title:  'Cask of Amontillado Mod',
		href:   'https://archive-community.dredmor.com/threads/minimod-the-cask-of-amontillado.13826/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'crossbowoverhaul2',
		tag:	'CO2 Mod',
		title:  'Crossbow Overhaul 2 Mod',
		href:   'https://archive-community.dredmor.com/threads/crossbow-overhaul-2-0-90.7291/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'embreakening',
		tag:	'EB Mod',
		title:  'Embreakening Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=618960254',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'extrapotions',
		tag:	'EP Mod',
		title:  'Extra Potions Mod',
		href:   'https://archive-community.dredmor.com/threads/extra-potions.3306/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'hamvilofkrong',
		tag:	'HK Mod',
		title:  'Hamvil of Krong Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=197949456',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'kingdomofloathingclasses',
		tag:	'KLC Mod',
		title:  'Kingdom of Loathing Classes Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=739150441',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'kingofbirds',
		tag:	'KB Mod',
		title:  'King of Birds Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=3337462239&searchtext=birds',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'monstrousmegapack',
		tag:	'MMP Mod',
		title:  'Monstrous Megapack Mod',
		href:   'https://archive-community.dredmor.com/threads/monstrous-megapack-monsters-items-rooms-1-2-2-released.5896/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'moredaggers',
		tag:	'MD Mod',
		title:  'More Daggers Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=87481373',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'morefountains',
		tag:	'MF Mod',
		title:  'More Fountains Mod',
		href:   'https://archive-community.dredmor.com/threads/more-fountains-mod.7494/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'mosteampunk',
		tag:	'MS Mod',
		title:  'Mo Steampunk Mod',
		href:   'https://archive-community.dredmor.com/threads/mo-steampunk-steampunk-itempack.5006/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'polearmsnspears',
		tag:	'PS Mod',
		title:  'Polearms n Spears Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=168054467',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'swashbucklers',
		tag:	'SB Mod',
		title:  'Swashbucklers Mod',
		href:   'https://archive-community.dredmor.com/threads/swashbucklers-mod-more-stuff-for-pirates.3527/',
		active: false,
		mod:    true
	},
	{
		id:     genId(),
		dir:	'tomecraft',
		tag:	'TC Mod',
		title:  'Tomecraft Mod',
		href:   'https://steamcommunity.com/sharedfiles/filedetails/?id=255759636',
		active: false,
		mod:    true
	}
];

/**
** Get Source List
**
** Returns a list of all sources (including inactive).
*/
Dredmor.Source.GetList = function()
{
	return Dredmor.Source.List;
}

/**
** Get Active Source List
**
** Returns a list of active sources.
*/
Dredmor.Source.GetActiveList = function()
{
	if (!Dredmor.Source.GetActiveList.cache) {
		var activeList = [];

		for (var i = 0; i < Dredmor.Source.List.length; i++) {
			var source = Dredmor.Source.List[i];
			
			// Check if this source is active (if not, uses source's default active state)
			var active = $.cookie.default(source.dir, source.active ? 'active' : '');

			// Add to active list if it is (or if the source is required always)
			if (active || source.required) {
				activeList.push(source);
			}

			// Save active as boolean value
			source.active = !!active;
		}

		Dredmor.Source.GetActiveList.cache = activeList;
	}

	return Dredmor.Source.GetActiveList.cache;
}