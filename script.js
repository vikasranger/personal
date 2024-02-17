const imageFiles = Array.from({length: 19}, (_, index) => index);

// Populate the imageGallery

const imageGalleryFolder = "photos/";
populateGallery("imageGallery", imageFiles, imageGalleryFolder);

// Populate the carousel
populateGallery("carousel", imageFiles, imageGalleryFolder);


// Wait until the transition finished and the dialog opens before scrolling into view.


function populateGallery(targetElementId, photoFilenames, photosFolder)
{
  const targetElement = document.getElementById(targetElementId);

  // Loop through the photo filenames and create HTML elements for each photo
  photoFilenames.forEach(fileName =>
  {
    const picture = document.createElement("picture");

    // Create a new img element
    const img = document.createElement("img");
    img.setAttribute("width", "309");
    img.setAttribute("height", "309");
    img.setAttribute("src", photosFolder + "p" + fileName + ".jpg");
    img.setAttribute("alt", "A cute cat");
    img.setAttribute("loading", "lazy");

    // Append the img element to the picture element
    picture.appendChild(img);

    img.addEventListener("click", () => openDialog(fileName));

    // Append the picture element to the target element
    targetElement.appendChild(picture);
  });
}
