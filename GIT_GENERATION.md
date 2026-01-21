# Steps to regenerate the demo GIF

# First, generate an optimized color palette
ffmpeg -i demo-expo-tvos-search-720.mov -vf "fps=15,scale=640:-1:flags=lanczos,palettegen=stats_mode=diff" palette-blue.png

# Then, use that palette to create the GIF
ffmpeg -i demo-expo-tvos-search-720.mov -i palette-blue.png -lavfi "fps=15,scale=640:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=floyd_steinberg" output-blue.gif