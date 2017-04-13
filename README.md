#So far..

I have started off by creating an API using Express as it offers a simple way to get a suitable server going.

I then created some mock picture data, to serve on the pictures endpoint.  The server is running on port 8000.

Next, I used the create-react-app for a boilerplate react app 'frontend' on port 3000, and have fetched the mock picture list from the server.

From there, i then worked on posting a 'picture' to the server.


#Where to go from here?

I have not added any tests so far.  Without time constraints, I would like to add tests using jest which I have prior experience with.

The also obviously needs implementing, I would use a simple input element with type text, and then be able to take the value from this, allowing limitless colour pallete.

Then there is the actual Picture.  I investigated using Canvas Elements which I had not really used before, however, this idea appears to have been torpedoed in the breif as I realised that I could not get the pixels to be visible.  I initially tried using css to enlarge the canvas, however this meant that brush strokes, although being the right width, could not be fixed in length, so could be less than 'one pixel'.

So this would lead me with more time, to making a grid of <Pixel /> components, and then calculate for the rectangle tool as to which pixels around it should change colour.  
