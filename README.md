[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11529901&assignment_repo_type=AssignmentRepo)
## MDDN 242 2023 Assignment 2

 
For my intial sketch I wanted the overlapping and ruggedness of the shapes to shine. 

Each of my letter is created using a large 'base' circle, a triangle and/or a second smaller circle. The 'base' circle is a constant/fixed element. The triangle and/or small circle are controlled by up to 9 parameters (3 parameters for the circle and 6 for the triangle). These paramaters control size and locations of thr shapes.

The parameters used are:
* `size` : radius of the second circle
 * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one
  * `offsetx1` : x offset for the triangles left corner
  * `offsety1` : y offset for the triangles left corner
   * `offsetx2` : x offset for the triangles top point
  * `offsety2` : y offset for the triangles top point
   * `offsetx3` : x offset for the triangles right corner
  * `offsety3` : y offset for the triangles right corner
