# dredmorpedia
Dredmorpedia is an automatically generated encyclopedia for the game [Dungeons of Dredmor](http://www.dungeonsofdredmor.com).

This is a new version of dredmorpedia which runs from GitHub Pages at https://hate9.github.io/dredmorpedia/.

For the moment, this fork is otherwise identical to the source repo, but I plan to add more mods later, as there are a solid number of popular mods that are not included.

Game Files
----------

Dredmorpedia requires game files from Dungeons of Dredmor. In the root folder create the folder `data` and copy into it the `dungeon`, `game`, `items`, `skills`, `sprites` and `ui` folders. Also copy the `expansion`, `expansion2` and `expansion3` folders into the root folder. You also need to copy the supplied `mod.xml` files for the base game and each expansion into the appropriate game folder.

Substitutions
-------------

Run the following commands to fix some image paths in the XML files.

```
sed -i "" 's|"items/component_parts_iron|"\.\./data/items/component_parts_iron|g' ./expansion2/game/itemDB.xml
sed -i "" 's|"sprites/fhero/hero_run_d|"\.\./data/sprites/fhero/hero_run_d|g' ./expansion2/game/monDB.xml
sed -i "" 's|"sprites/hero/hero_run_d|"\.\./data/sprites/hero/hero_run_d|g' ./expansion2/game/monDB.xml
sed -i "" 's|"sprites/monster/canisterA/canisterA.xml|"sprites/monster/canisterA/canisterA0000.png|g' ./expansion2/game/monDB.xml
sed -i "" 's|"sprites/monster/raven/raven_fly_d.xml|"sprites/monster/raven/raven_fly_d_000.png|g' ./expansion2/game/monDB.xml
sed -i "" 's|"sprites/monster/raven/raven_fly_d.xml|"\.\./data/sprites/monster/raven/raven_fly_d_000.png|g' ./expansion3/game/monDB.xml
sed -i "" 's|"sprites/monster/robo/Robo_Walk_Down|"sprites/monster/Robo/Robo_Walk_Down|g' ./data/game/monDB.xml
```

The lockpick item does not exist in any of the XML files, but is referenced in the starting loadouts of some skills. Run the following commands to add lockpicks to the XML.

```
sed -i "" 's|</itemDB>|<item name="Lockpick" iconFile="items/lockpick\.png" ><price amount="10"/></item></itemDB>|g' ./data/game/itemDB.xml
sed -i "" 's|"lockpick"|"Lockpick"|g' ./data/game/skillDB.xml
sed -i "" 's|"lockpick"|"Lockpick"|g' ./expansion/game/skillDB.xml
```

Sprites
-------

Most sprites from the base game need to be unpacked into a series of PNG images.

This can be done with the [ConvertSprites](https://github.com/Hate9/dredmorpedia/raw/refs/heads/master/.tools/convert-sprites-bin-rev3.zip) tool (archived because Dredmod no longer exists).

Mods
----

Mods are included in the github repository and are placed in the root folder.

Deployment
----------

The included GitHub Actions workflow can be used to deploy this application to GitHub Pages.

In order to use it properly, you will need to place the Dungeons of Dredmor game files on a remote server, and supply the `SSH_HOST`, `SSH_KEY`, `SSH_PORT`, and `SSH_USER` secrets for your remote server.
The Actions workflow assumes that your game files are at `~/dredmor` on the server, and will need to be modified if you place yours elsewhere.

The following script can be used (on Linux systems) to remove the unnecessary files from your game files directory. Use this on a prepared copy of the data (formatted as described in [Game Files](#game-files)), not your actual game files.

```
find ./ -regextype posix-extended -regex "^\.\/(\.|.*\/\.|.*\.spr$|.*\.pal$|.*\.xcf$|.*\.psd$|.*\.md$|.*\.txt$|.*\.wav$|.*\.db$|.*\.dat$|data\/ui\/loadingscreens\/.*$|data\/ui\/menus\/.*$|data\/ui\/portrait\/.*$|data\/ui\/minimal\/.*$|data\/ui\/publisher\/.*$|data\/ui\/startup\/.*|data\/ui\/tutorial\/.*$)" | xargs rm
```


The utility gsutil can be used to deploy Dredmorpedia to Google Cloud Storage. The command below excludes hidden files and unused source graphic file extensions.

```
gsutil rsync -d -r -x "^\.|.*\/\.|.*\.spr$|.*\.pal$|.*\.xcf$|.*\.psd$|.*\.md$|.*\.txt$|.*\.wav$|.*\.db$|.*\.dat$|data\/ui\/loadingscreens\/.*$|data\/ui\/menus\/.*$|data\/ui\/portrait\/.*$|data\/ui\/minimal\/.*$|data\/ui\/publisher\/.*$|data\/ui\/startup\/.*|data\/ui\/tutorial\/.*$" ./ gs://dredmorpedia.com
```

The utility s3cmd can be used to deploy Dredmorpedia to Amazon's S3 service. The command below excludes hidden files and unused source graphic file extensions.

```
s3cmd put -P --recursive --rexclude "^\." --rexclude "\/\." --exclude="*.spr" --exclude="*.pal" --exclude="*.xcf" --exclude="*.psd" --exclude="*.md" --exclude="*.txt" --exclude="*.wav" --exclude="*.db" [localpath] s3://[bucketname]
```

Issues
------

Issues can be reported on github or in the [forum thread](http://community.gaslampgames.com/threads/dredmorpedia.1459/).

History
-------

Dredmorpedia was created by J-Factor in 2011. The original version (with 1.1.0 game data) can be found at http://j-factor.com/dredmorpedia
