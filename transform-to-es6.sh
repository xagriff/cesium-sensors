#!/usr/bin/env bash
set -x

npm install -D jscodeshift 5to6-codemod

node_modules/jscodeshift/bin/jscodeshift.sh -t node_modules/5to6-codemod/transforms/amd.js lib --useTabs=true
node_modules/jscodeshift/bin/jscodeshift.sh -t node_modules/5to6-codemod/transforms/cjs.js lib --useTabs=true
git checkout -- lib/main.js

sed -i "s/^var /const /" lib/conic/conic-sensor-graphics.js
sed -i "s/^var /const /" lib/conic/conic-sensor-visualizer.js
sed -i "s/^var /const /" lib/custom/custom-pattern-sensor-graphics.js
sed -i "s/^var /const /" lib/custom/custom-pattern-sensor-visualizer.js
sed -i "s/^var /const /" lib/custom/custom-sensor-volume.js
sed -i "s/^var /const /" lib/rectangular/rectangular-pyramid-sensor-volume.js
sed -i "s/^var /const /" lib/rectangular/rectangular-sensor-graphics.js
sed -i "s/^var /const /" lib/rectangular/rectangular-sensor-visualizer.js
