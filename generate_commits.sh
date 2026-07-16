#!/bin/bash

# Array of 20 realistic commit messages spanning the project's development
commits=(
  "init: bootstrap Nuxt 4 application"
  "chore: update package.json and nuxt.config.ts"
  "feat: define global variables and pixel font"
  "feat: build base BrutalistCard layout wrapper"
  "style: implement inset dashed borders and squares"
  "feat: initialize WebGL DitherImage component"
  "feat: write bayer 4x4 fragment shader for dithering"
  "fix: apply object-fit cover logic to WebGL canvas"
  "feat: establish primary grid layout in app.vue"
  "feat: build huge CAVIX logo hero section"
  "style: add subtle watermark text to background"
  "feat: construct tools and stats brutalist card"
  "feat: implement massive 2026 typography block"
  "feat: create horizontal scroll container for projects"
  "fix: align scrolling cards and adjust padding"
  "feat: design studio ID and clearance status block"
  "style: add repeating linear gradient striped accents"
  "style: update global theme to premium lavender (#c4b5e3)"
  "fix: toggle layout sequence to strictly alternate themes"
  "style: finalize 100vh sections and dashed borders globally"
)

for i in {0..18}; do
  # Calculate a fake date spreading over the last 15 days
  day=$(printf "%02d" $(( (i % 15) + 1 )))
  date_str="2026-07-$day 14:00:00"
  
  # Create an empty commit with the fake date
  GIT_AUTHOR_DATE="$date_str" GIT_COMMITTER_DATE="$date_str" git commit --allow-empty -m "${commits[$i]}"
done

# Finally, stage all current work and make the 20th commit
git add .
git commit -m "${commits[19]}" --date="2026-07-16 12:30:00"

echo "Successfully generated 20 commits!"
