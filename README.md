# MDDN 242 2023 Assignment 2
## decotype by Jade Little

 When starting this project, I didn't really know the direction I was going to go in, it was more of a, I'll see what comes to mind whilst experimenting kind of a process.

For my intial sketch I went quite basic and focused on using simple shapes. I wanted the overlapping and ruggedness of the shapes to shine. Each of my letters is created using a large 'base' circle, a triangle and/or a second smaller circle. The 'base' circle is a constant/fixed element. The triangle and small circle are controlled by up to 9 parameters (3 parameters for the circle and 6 for the triangle). These paramaters control the size, x, and y position of the shapes.

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

  I wasn't super happy with this initial idea. This is because it felt very flat, and didn't have a lot of character to it. I liked the colour palette, so decided to keep that the same for the time being. 

  I didn't want to get too complicated with the shapes I was using, so decided to stay away from custom shapes. In my new idea, I went for an Art Deco inspired typeface. I wanted to create this typeface using shapes that complimented each other. For example, I have paired the softness of the arc with the harshness (in the egdes) of the triangle – which is common in Art Deco, due to the geometry of the style. 

  I'm very pleased with my choice of shapes that form my letters. In particular, I feel the arc worked extremely well in articulating my letter forms, as a lot of the letters kept a mostly constant form. When the arc wasn't a 3/4 circle form, it was manipulated in such a way that aided in creating the remaining letters – whether that was a subtle curved shape, an almlost full circle or no arc at all. Where possible, I aimed to keep the triangle and line combination consistent (the line placed along one side of the trinagle, but not touching). However, this was not possible for letters such as 'g' and 'q', because I required the line to act as the tail/flick of these letters. In the end, only about a third of the letterforms were able to keep this line and triangle combination consistant. But this is fine, as I wanted the letterforms to be legible, so this meant finding a good balance between what I was trying to achieve, and the legibility. 

  Whilst working away on this typeface, I noted how my letterforms were looking rather 2D, and therefore lacked dimension, and interest. This is the complete opposite of what I wanted to achieve, especially considering the fact that I had diverted from my original typeface to this 'decotype' typeface, solely because the original idea lacked character and was very flat! Therefore, taking inspiration from lecture/tutorial content in class, I decided to add shadowing to the letters, to provide depth. By adding this shadow to the letterforms, there is a sense of dimension now, which I feel makes the alphabet feel more lively, and 3D. 

  For the animation/interpolation of the letterforms I wanted quite a smooth transition between the letters. I tried animating it so that it went from the first letter and transitions into the default character, and then transitions into the new letter. This worked and had somewhat of a smooth transition, but I think it could be better. In a critique session during class there was mention of making the default character be the little circle in the middle and then having the arc be in it's full form (full circle). This way when transitioning between letters the full circle would transform into the arcs of the letters, allowing for a smoother transition. I liked this idea, so decided to test it out. 

  I added in the arc (as a complete circle) to the default mode for the interpolation. This gave a smoother transition between letters, because now instead of switching straight from an arc to another arc in a slightly different position (more closed or more open), there is a better transition phase, where the arc goes into a full circle, then opens up again to create the arc of the new letter. Now that the arc was looking good, I decided that I wanted to add something else to the default character. What I still wasn't loving was that the triangle would just pop into place, and it was like the triangle had just appeared from nowhere. So, to make this interpolation more considered, I have added a triangle into the center of the full circle arc. Therefore, when the animation between the two letters happens, the triangle shifts from where it was in in the first letter, into the middle of the bounding box, and then it moves into its new position in the second letter. This means that you can see that the triangle has come from somewhere (the middle position), and not just appeared out of thin air. 

  The defualt character that I have for my interpolation/animation between letterforms, was originally going to be the same as the default letterform character. This default letterform would appear if there is a space between words in the exhibition page, or if a character hasn't been created for this typeface and someone typed that character into the exhibition page, which is interactive. However, after thinking about it, the default character that appears in the middle of the interpolation isn't very Art Deco, and looked like one of the letterforms – which made it confusing when looking at the exhibition word display, and having words that had spaces. Therefore, I opted for a more Art Deco inspired design for the defualt letterform, that looked like a space/word divider, rather than a letter or number. I went through many different iterations for this, and eventually landed on one, which I feel looks Art Deco and is proportioned appropriately to not look like another letter/number. I was very happy with the way this Art Deco default letterform looked, and could have made the defualt charcter in the middle of the animation the same. However, I felt this wouldn't look right, because I was really happy with the smooth transition that the default character created in the animation between letterforms. Therefore, I didn't want to change this transition that worked really well as it was. 

  I decided that I'd go all in with the art deco theme, and wanted to add a decorative element to the background for the exhibition page. I knew I wanted this to be gold, and wanted to pick ornamentation that was easily associated with art deco. Sunbursts were a very popular piece of art deco iconography during the 1920's and 30's, so I leaned into this to create my gold decorative element (sunburst). I used this sunburst image as inspiration for my own decorative element creation  https://stock.adobe.com/search?k=art+deco+sunburst&asset_id=429733202 

  As much as I love the colour palette with the blues and greens (see the original sketch, which uses the same colours I was going to use for my final design), it isn't very Art Deco, therefore, I decided to test out the look of a more art deco colour palette. I knew what Art Deco colours look liked, but it did take me quite a while to string together a cohesive and contrasting colour palette. This is because I wanted the gold decorative banner to stand out from the background. But because the background ideally needed to be a darker colour – like the deep maroon colour I have chosen - the colours that were used for the letters needed to contrast well and stand out. This was the challenge I was having when pairing my letters with the background colour. Eventually, I landed on the gold ornamentation, deep maroon background, dark green for parts of the letterforms, and a lighter green for the other parts of the letterforms. 

  After changing the colour palette, the blue guidelines in the Interaction and alphabet section, and the blue percentages in the interaction section were clashing heaps with the maroon background. Therefore, I decided to edit those files so that the colour was gold (the same gold used in the exhibition file) – which is way more on theme with Art Deco and easier to see. 

  There was a lot of adjustments to the letters throughout. Although the alphabet didn't have to be completely legible, personally I wanted it to be as legible as I could possibly get it. As I have gone with an Art Deco inspired typeface my letters should be legible, because I didn't make a typeface that was abstract. Art Deco typefaces are very stylised but easily readible, so since this was my influence, it made sense that all my letters were as legible as possible. Therefore, I spent a good chunk of time playing around with my parameters and making small adjustments, until I was satisfied that the typeface was as legible as it could be. 

  Overall, I have used 16 parameters for this typeface, and I believe I used each parameter to its full advantage when achieving this Art Deco look. 
  
  These are the parameters I used for the final code:
  * `offsetx` : x offset of the circle/ellipse
  * `offsety` : y offset of the circle/ellipse
  * `Trix1` : triangle left corner x
  * `Triy1` : triangle left corner y
  * `Trix2` : triangle top corner x
  * `Triy2` : triangle top corner y
  * `Trix3` : triangle right corner x
  * `Triy3` : triangle right corner y
  * `arcx`  : x position of arc
  * `arcy` : y position of arc
  * `arcStart` : start of arc
  * `arcStop` : end of arc
  * `linex` : top x of line
  * `liney` : top y of line
  * `linex2` : bottom x of line
  * `liney2` : bottom y of line

