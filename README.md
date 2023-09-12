[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11529901&assignment_repo_type=AssignmentRepo)
# MDDN 242 2023 Assignment 2
## DECO TYPE by Jade Little

 
For my intial sketch I wanted the overlapping and ruggedness of the shapes to shine. 

Each of my letter is created using a large 'base' circle, a triangle and/or a second smaller circle. The 'base' circle is a constant/fixed element. The triangle and/or small circle are controlled by up to 9 parameters (3 parameters for the circle and 6 for the triangle). These paramaters control size and locations of thr shapes.

The parameters used in the skecth.js are:
* `size` : radius of the second circle
 * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one
  * `offsetx1` : x offset for the triangles left corner
  * `offsety1` : y offset for the triangles left corner
   * `offsetx2` : x offset for the triangles top point
  * `offsety2` : y offset for the triangles top point
   * `offsetx3` : x offset for the triangles right corner
  * `offsety3` : y offset for the triangles right corner

  I wasn't super happy with this initial idea. This is because it felt very flat and didn't have a lot of character to it. I liked the colour palette, so decided to keep that th same. 

  I didn't want to get too complicated with the shapes I was using, so decided to stay away from custom shapes. In my new idea, I went for what could be described as an art deco inspired typeface. I wanted to create this typeface using shapes that complimented each other. For example I have paired the softness of the arc with the harshness (in the egdes) of the triangles. 

  I'm very pleased with my choice of shapes that form my letters. In particular, I feel the arc worked extremely well in articulating my letter forms, as a lot of the letters kept a mostly constant form. When the arc wasn't a 3/4 circle form, it was manipulated in such a way that aided in creating the remaining letters – whether that was a subtle curved shape, an almlost full circle or no arc at all. Where possible, I aimed to keep the triangle and line combination consistent (the line placed along one side of the trinagle, but not touching). However, this was not possible for letters such as 'g' and 'q', because I required the line to act as the tail/flick of the letter. 

  I haven't gone for a typical art deco colour palette, rather I wanted to put together a selection of colours that relate to my personality – I am a blue and green lover! 

  Whilst working away on this typeface, I noted how my letterforms were looking rather 2D, and therefore lacked dimension, and interest. This is the complete opposite of what I wanted to achieve, especially considering the fact that I had diverted from my original typeface to this 'Deco Type' typeface, solely because the original idea lacked character and was very flat! Therefore, taking inspiration from lecture/tutorial content in class, I decided to add shadowing to the letters, to provide depth. By adding this shadow to the letterforms, there is a real sense of dimension now, which I feel makes the alphabet feel more lively, and 3D. 

  For the animation/interpolation of the letterforms I wanted quite a smooth transition between the letters. I tried animating it so that it went from the first letter and transitions to the default character and then transitions into the new letter. This worked and had somewhat of a smooth transition, but I think it could be better. In a critique session during class there was mention of making the defualt letter be the little circle in the middle and then having the arc be in it's full form (full circle). This way when transitioning between letters the full circle would transform into the arcs of the letters, allowing for a smoother transition. Another comment that came up was to try out expanding the letters in the middle (when the defualt occurs). 

  I added in the arc (as a complete circle) to the default mode for the interpolation. This appeared to give a smoother transition between letters. because now instead of switching straight from an arc to another arc in a slightly different position (more closed or more open) there is a better transition phase, where the arc goes into a full circle, then opens up again to create the arc of the new letter. Now that the arc was looking good, I decided that I wanted to add something else to the default character. What I still wasn't loving was that the triangle would just pop into place, and it was like the triangle had just appeared from nowhere. So, to make this interpolation more considered, I have added a triangle into the center of the full circle arc. Therefore, when the animation between the two letters happens, the triangle shifts from where it was in in the first letter, into the middle of the bounding box, and then it moves into its new position in the second letter. This means that you can see that the triangle has come from somewhere (the middle position), and not just appeared out of thin air. 

  I decided that I'd go all in with the art deco theme, and wanted to add a decorative element to the bacground for the exhibition page. I knew I wanted this to be gold, and wanted to pick ornamentation that was easily associated with art deco. Sunbursts were a very popular piece of art deco iconography during the 1920's and 30's, so I leaned into this to create my gold decorative element (sunburst). 

  As much as I love the colour palette with the blues and greens, it isn't very art deco, therefore, I decided to test out the look of a more art deco colour palette. I knew what art deco colours look liked, but it did take me quite a while to string together a cohesive and contrasting colour palette. This is because I wanted the gold decorative banner to stand out from the background. But because the background ideally needed to be a darker colour – like the deep maroon colour I have chosen - the colours that were used for the letters needed to contrast well and stand out. This was the challenge I was having when pairing my letterss with the background colour. Eventually, I landed on the gold ornamentation, deep maroon background, dark green for parts of the letter form, and a lighter green for the other parts of the letter forms. 

  After changing the colour palette, the blue guidelines in the Interaction and alphabet section, and the blue percentages in the interaction section were clashing heaps with the maroon background. Therefore, I decided to edit those files so that the colour was gold – which is way more on theme with art deco and easier to see. 

  Overall, I have used 16 parameters for this typeface, and I believe I used each parameter to its full advantage when achieving this art deco look. 
  
  These are the parameters I used for the final code:
  * `offsetx` : x offset of the circle/ellipse
  * `offsety` : y offset of the circle/ellipse
  * `Trix1` : triangle left corner x
  * `Triy1` : triangle left corner y
  * `Trix2` : triangle top corner x
  * `Triy2` : triangle top corner y
  * `Trix3` : triangle right corner x
  * `Triy3` : triangle right corner y
  * `arcx`  : x pos of arc
  * `arcy` : y pos pf arc
  * `arcStart` : start of arc
  * `arcStop` : end of arc
  * `linex` : top x of line
  * `liney` : top y of line
  * `linex2` : bottom x of line
  * `liney2` : bottom y of line

