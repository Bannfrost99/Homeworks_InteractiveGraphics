## Homework Repository
This repository contains the homeworks of course.
# Homework 1 - project1_ComposingImages
In this project we will implement an alpha compositing function for raster images using JavaScript. You are given an HTML file that implements a simple web-based image compositing application. The video on the following link shows how the interface works: https://youtu.be/QpwfzYpseeo

The missing part of this application (the part you will implement) is the JavaScript function that composites a foreground image onto a background image using alpha blending. Here how that function looks like:

function composite( bgImg, fgImg, fgOpac, fgPos ) This function takes 4 input parameters:

bgImg is the given background image to be modified. fgImg is the foreground image that is to be composited onto the background image. fgOpac is the opacity of the foreground image. The alpha values of the foreground image should be scaled using this argument. fgPos is the position of the foreground image on the background image. It holds x and y coordinates in pixels, such that x=0 and y=0 means that the top-left pixels of the foreground and background images are aligned. Note that the given x and y coordinates can be negative. This function does not return anything. It just modifies the given background image. The foreground image may have a different size and its position can be negative. The parts of the foreground image that fall outside of the background image should be ignored.

You are given the following files to help you with this project:

project1.html: This file contains the entire implementation of the interface, except for the composite function. project1.js: This file contains the placeholder for the composite function. It is included by the project1.html file. Please make sure to put them in the same directory. You can also use these images to test your implementation: background.png, teapot.png, u.png, and star.png. Complete the composite function in the project1.js file, such that it composites the given foreground image onto the given background image with the given opacity and position arguments for the foreground image. Then, submit the completed project1.js file on canvas. Please do not rename project1.js in your submission.

Useful tip: Pressing the F4 key reloads the project1.js file without reloading the page, so you can quickly test your implementation.
# Homework 2 - project2_Transformations
In this project we will implement transformations using JavaScript.

You are given an HTML file that implements a very simple UAV simulation.
The missing part of this application (the part you will implement) consists of two JavaScript function. The first one, GetTransform, returns a 3x3 transformation matrix defined by the given transformation arguments. Correctly implementing this function is sufficient for applying the correct transformation to the UAV body. Here what this function looks like:

function GetTransform( positionX, positionY, rotation, scale )
This function takes 4 input parameters: positionX and positionY define the translation component and the other two parameters define the rotation (in degrees) and the scale components. The returned transformation should first apply scale, then rotation, and finally translation. The transformation is matrix is returned as a 1D array of values in column-major format, such that the array indices correspond to the matrix values as below:

**array[0]	array[3]	array[6]**

**array[1]	array[4]	array[7]**

**array[2]	array[5]	array[8]**


The second function you should implement, ApplyTransform, takes two 3x3 transformation matrices and returns the resulting transformation as a combined 3x3 transformation matrix, all in the same column-major format as above. Here is what this function looks like:


function ApplyTransform( trans1, trans2 )
The returned transformation should first apply trans1 and then trans2. This second function is needed for applying the local transformations of the four propellers before applying the transformation of the UAV body. This is how the propellers are placed at their correct positions.


You are given the following files to help you with this project:


**project2.html**: This file contains the entire implementation, except for the two functions you will implement.

**project2.js**: This file contains the placeholder for the two functions. It is included by the project2.html file. Please make sure to put them in the same directory.

The project2.html file also includes a few image files:

**uav.png**

**propeller.png**

**shadow.png**

**ground.jpg** (image by Giles Hodges)

Complete the two functions in the project2.js file, such that the UAV moves along with its shadow. Then, submit the completed project2.js file on canvas. Please do not rename project2.js in your submission.


Useful tip: Pressing the F4 key reloads the project2.js file without reloading the page, so you can quickly test your implementation.

Useful tip n.2: you can use Visual Studio to debug javascript code.

It is recommended that you check out how the whole application is implemented (see the JavaScript code in the project2.html file.
You can see a demonstration of the result that you should get at this link:
https://graphics.cs.utah.edu/courses/cs4600/fall2023/?prj=2



# Homework 3 - project3_TriangularMeshes

In this project we will render a 3D triangular mesh with a texture on the GPU using WebGL.

Just like the previous projects, you are given an HTML file that implements the user interface and a part of the JavaScript and WebGL code. Refer to the following link for a video demonstration and to read instructions more easily: https://graphics.cs.utah.edu/courses/cs4600/fall2023/?prj=4

The part you will implement can be separated into three steps:

Step 1: The first step is implementing the JavaScript function that computes the 4x4 transformation matrix, including perspective projection:

function GetModelViewProjection( projectionMatrix, translationX, translationY, translationZ, rotationX, rotationY ) The perspective projection is given to this function as a 4x4 matrix. The purpose of this function is to combine it with the other transformations that include a translation and two rotations. You must discover in which order the transformations should be applied, such that the resulting transformation behaves similar to the one in the video above.

Step 2: Next, we will render a triangular mesh using WebGL. The triangular mesh is loaded from an OBJ file using the UI. The OBJ parser is already implemented for you. The given code also includes triangulation and scaling to form a triangular mesh that fits inside the box.

We will complete the implementation of the JavaScript class MeshDrawer, which is responsible for rendering the triangular mesh. The constructor of this class is called after WebGL is initialized, so we can handle WebGL related initializations for rendering within the constructor.

The MeshDrawer class includes the following methods:

setMesh that takes an array of 3D vertex positions and an array of 2D texture coordinates. This method is called every time the user loads another OBJ file, so it can be called multiple times. swapYZ that determines if the y and z axes should be swapped while rendering. draw that is responsible for drawing (i.e. rendering) the triangular mesh. The completed implementation of this step will render the object inside the box. You can use the following code in your fragment shader to set the color of the fragment, instead of picking a single color for the whole object:

gl_FragColor = vec4(1,gl_FragCoord.z*gl_FragCoord.z,0,1); This code adjust the green channel of the color based on the distance of the fragment from the near plane of the camera projection. You can experiment with other formulations.

Step 3: The last step is displaying a texture on the mesh. To facilitate this, the MeshDrawer class also includes the following methods:

setTexture that is called to set the texture of the object. showTexture that is called to specify whether the texture should be displayed.

You are given the following files to help you with this project:

project4.html: This file contains the implementation of the interface and various JavaScript/WebGL functionalities. project4.js: This file contains the placeholder of the JavaScript function GetModelViewProjection and class MeshDrawer that you will complete. This file is included by project4.html. obj.js: This file implements the OBJ parser and it is included by project4.html. teapot.obj: A polygonal mesh version of the Utah Teapot. bricks.png: A texture image you can display on the Utah Teapot model. nyra.obj: A character model by Paul Tosca. nyra.png: The texture to be displayed on the nyra.obj mesh.

# Homework 4 - project4_Shading

In this project we will add shading to the WebGL-based triangular mesh rendered we implemented in the previous project. You can read the instructions and see an example of the expected behavior at this link: https://graphics.cs.utah.edu/courses/cs4600/fall2023/?prj=5

Again, you are given an HTML file that implements the user interface and a part of the JavaScript and WebGL code. The part you will implement is the same MeshDrawer class you implemented in the previous project. Therefore, you can copy and paste most of your implementation from the previous project. The new version of the MeshDrawer class in this project has just a few additions to facilitate shading:

The setMesh method in the new version also takes a list of vertex normals. These vertex normals should be sent to the vertex shader as another attribute. setMesh( vertPos, texCoords, normals )

The draw method now takes three matrices: a 4x4 model-view-projection matrix (as before), a 4x4 model-view matrix, and a 3x3 normal transformation matrix. All matrices are stored as arrays in column-major order, as before. The last two additional matrices should be used for transforming object-space vertex positions and normals to the camera space, where you can perform shading. draw( matrixMVP, matrixMV, matrixNormal )

The new setLightDir method is called by the interface for setting the light direction in camera space. If you perform shading in the camera space, you do not need to transform the light direction. setLightDir( x, y, z )

The new setShininess method is called by the interface for setting the shininess parameter (i.e. the exponent alpha) of the Blinn material model. setShininess( shininess )

In addition to these changes, the GetModelViewProjection function from the previous project is replaced with the new GetModelViewMatrix function. This new one does not take the projection matrix as an argument, and so returns the part of the transformation prior to projection.

function GetModelViewMatrix( translationX, translationY, translationZ, rotationX, rotationY ) After modifying your code from the previous project to account for these relatively minor changes above, all you need to do is to implement shading in the fragment shader. We will use the Blinn material model for shading. Here is a short video showing what the successfully completed project should look like:

We will use a single directional light with the given direction. The updated interface for this project includes a custom control for adjusting the light direction. The light intensity (I) should be taken as white, i.e. (1,1,1) in RGB.

Using an ambient light is optional. The interface does not include any controls about the ambient light.

The interface allows adjusting the shininess (i.e. the exponent alpha) of the Blinn material model. The diffuse and specular color coefficients (Kd and Ks) should be taken as white. If showTexture is set and setTexture is called, the diffuse coefficient (Kd) should be replaced by the texture value.

You are given the following files to help you with this project:

project5.html: This file contains the implementation of the interface and various JavaScript/WebGL functionalities. project5.js: This file contains the placeholder of the JavaScript function GetModelViewMatrix and class MeshDrawer that you will complete. This file is included by project5.html. obj.js: This file implements the OBJ parser and it is included by project5.html. This file is identical to the one included with the previous project. You can use the same OBJ files and textures from the previous project for testing your implementation.